import * as React from 'react'
import { useState, useRef, useCallback, useId } from 'react'
import { Copy, Check } from 'lucide-react'
import type {
  InstallTab,
  InstallTabId,
  InstallTabsProps,
} from './InstallTabs.types'

/**
 * Storybook copy of the shared 3-tab CLI install widget.
 *
 * Canonical source: `faion-net-fe/src/features/install-tabs/InstallTabs.tsx`.
 * This file is duplicated here because the storybook repo cannot import from
 * faion-net-fe across the repository boundary. Keep both copies in sync.
 *
 * Behaviour per F-050 AC-4 / F-052 AC-3:
 * - Active tabs render a copy-paste command block on `bg-soft-charcoal`.
 * - "Coming soon" tabs render a muted card with a tracking link.
 * - All tabs are present in DOM; disabled tabs are visible but `aria-disabled`.
 * - Keyboard nav: ArrowLeft / ArrowRight cycle through ENABLED tabs only
 *   (wrap-around). Home / End jump to first / last enabled tab.
 *   Enter / Space activate the focused tab (no-op on disabled).
 * - Hover affordance only on `state === 'active'` buttons
 *   (per `feedback_hover_only_clickable` memory).
 */

const resolveInitialId = (
  tabs: InstallTab[],
  defaultActiveId?: InstallTabId,
): InstallTabId | '' => {
  if (defaultActiveId && tabs.some((t) => t.id === defaultActiveId)) {
    return defaultActiveId
  }
  const firstActive = tabs.find((t) => t.state === 'active')
  return firstActive?.id ?? tabs[0]?.id ?? ''
}

export const InstallTabs: React.FC<InstallTabsProps> = ({
  tabs,
  defaultActiveId,
  variant = 'hero',
  onCopy,
  className,
}) => {
  const [selectedId, setSelectedId] = useState<InstallTabId | ''>(() =>
    resolveInitialId(tabs, defaultActiveId),
  )
  const [copiedId, setCopiedId] = useState<InstallTabId | null>(null)
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const baseId = useId()

  const handleSelect = useCallback((tab: InstallTab) => {
    if (tab.state !== 'active') return
    setSelectedId(tab.id)
  }, [])

  const handleCopy = useCallback(
    async (tab: InstallTab) => {
      if (tab.state !== 'active' || !tab.command) return
      try {
        await navigator.clipboard.writeText(tab.command)
      } catch {
        return
      }
      setCopiedId(tab.id)
      onCopy?.(tab.id)
      setTimeout(() => setCopiedId(null), 2000)
    },
    [onCopy],
  )

  const enabledIndices = tabs
    .map((t, idx) => (t.state === 'active' ? idx : -1))
    .filter((idx) => idx >= 0)

  const focusTabByIndex = useCallback(
    (index: number) => {
      const target = tabs[index]
      if (!target) return
      tabRefs.current[target.id]?.focus()
    },
    [tabs],
  )

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
      switch (event.key) {
        case 'ArrowRight': {
          event.preventDefault()
          if (enabledIndices.length === 0) return
          const position = enabledIndices.indexOf(currentIndex)
          let nextPos: number
          if (position === -1) {
            nextPos =
              enabledIndices.find((i) => i > currentIndex) !== undefined
                ? enabledIndices.findIndex((i) => i > currentIndex)
                : 0
          } else {
            nextPos = (position + 1) % enabledIndices.length
          }
          focusTabByIndex(enabledIndices[nextPos])
          break
        }
        case 'ArrowLeft': {
          event.preventDefault()
          if (enabledIndices.length === 0) return
          const position = enabledIndices.indexOf(currentIndex)
          let prevPos: number
          if (position === -1) {
            const reversed = [...enabledIndices].reverse()
            const found = reversed.find((i) => i < currentIndex)
            prevPos =
              found !== undefined
                ? enabledIndices.indexOf(found)
                : enabledIndices.length - 1
          } else {
            prevPos =
              (position - 1 + enabledIndices.length) % enabledIndices.length
          }
          focusTabByIndex(enabledIndices[prevPos])
          break
        }
        case 'Home': {
          event.preventDefault()
          if (enabledIndices.length === 0) return
          focusTabByIndex(enabledIndices[0])
          break
        }
        case 'End': {
          event.preventDefault()
          if (enabledIndices.length === 0) return
          focusTabByIndex(enabledIndices[enabledIndices.length - 1])
          break
        }
        case 'Enter':
        case ' ': {
          event.preventDefault()
          const tab = tabs[currentIndex]
          if (tab) handleSelect(tab)
          break
        }
        default:
          break
      }
    },
    [enabledIndices, focusTabByIndex, handleSelect, tabs],
  )

  if (tabs.length === 0) return null

  const selected = tabs.find((t) => t.id === selectedId) ?? tabs[0]

  const tablistVariantClass =
    variant === 'compact'
      ? 'fn-install-tabs__list fn-install-tabs__list--compact'
      : 'fn-install-tabs__list fn-install-tabs__list--hero'

  const tabButtonSizeClass =
    variant === 'compact'
      ? 'fn-install-tabs__tab--compact'
      : 'fn-install-tabs__tab--hero'

  const panelPaddingClass =
    variant === 'compact'
      ? 'fn-install-tabs__panel--compact'
      : 'fn-install-tabs__panel--hero'

  return (
    <div
      className={`fn-install-tabs ${className ?? ''}`.trim()}
      data-variant={variant}
    >
      <div
        role="tablist"
        aria-label="Install command"
        className={tablistVariantClass}
      >
        {tabs.map((tab, idx) => {
          const isSelected = tab.id === selected.id
          const isDisabled = tab.state !== 'active'
          const tabId = `${baseId}-tab-${tab.id}`
          const panelId = `${baseId}-panel-${tab.id}`
          const captionId = `${baseId}-caption-${tab.id}`

          const stateClass = isSelected
            ? 'fn-install-tabs__tab--selected'
            : isDisabled
              ? 'fn-install-tabs__tab--disabled'
              : 'fn-install-tabs__tab--idle'

          return (
            <button
              key={tab.id}
              ref={(node) => {
                tabRefs.current[tab.id] = node
              }}
              type="button"
              role="tab"
              id={tabId}
              aria-selected={isSelected}
              aria-controls={panelId}
              aria-disabled={isDisabled || undefined}
              aria-describedby={isDisabled ? captionId : undefined}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => handleSelect(tab)}
              onKeyDown={(event) => handleKeyDown(event, idx)}
              className={`fn-install-tabs__tab ${tabButtonSizeClass} ${stateClass}`}
            >
              <span className="fn-install-tabs__tab-inner">
                {tab.label}
                {isDisabled && (
                  <span className="fn-install-tabs__tab-soon">Soon</span>
                )}
              </span>
            </button>
          )
        })}
      </div>

      {tabs.map((tab) => {
        const isSelected = tab.id === selected.id
        const isDisabled = tab.state !== 'active'
        const tabId = `${baseId}-tab-${tab.id}`
        const panelId = `${baseId}-panel-${tab.id}`
        const captionId = `${baseId}-caption-${tab.id}`
        const href = tab.comingSoonHref ?? '/roadmap/'
        const comingSoonLabel =
          tab.comingSoonLabel ?? 'Coming soon — track at /roadmap/'

        return (
          <div
            key={tab.id}
            role="tabpanel"
            id={panelId}
            aria-labelledby={tabId}
            hidden={!isSelected}
          >
            {isSelected && !isDisabled && tab.command && (
              <div
                className={`fn-install-tabs__panel fn-install-tabs__panel--active ${panelPaddingClass}`}
              >
                <div className="fn-install-tabs__panel-head">
                  <span className="fn-install-tabs__panel-note">
                    {tab.note ?? 'Recommended distribution path'}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(tab)}
                    className="fn-install-tabs__copy"
                    aria-label={`Copy command for ${tab.label}`}
                  >
                    {copiedId === tab.id ? (
                      <>
                        <Check
                          className="fn-install-tabs__copy-icon"
                          aria-hidden="true"
                        />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy
                          className="fn-install-tabs__copy-icon"
                          aria-hidden="true"
                        />
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <code className="fn-install-tabs__command">
                  $ {tab.command}
                </code>
              </div>
            )}

            {isSelected && isDisabled && (
              <div
                className={`fn-install-tabs__panel fn-install-tabs__panel--coming-soon ${panelPaddingClass}`}
              >
                <p id={captionId} className="fn-install-tabs__soon-caption">
                  {comingSoonLabel.replace('/roadmap/', '')}
                  <a href={href} className="fn-install-tabs__soon-link">
                    /roadmap/
                  </a>
                  .
                </p>
                <p className="fn-install-tabs__soon-hint">
                  {tab.label} support is on the roadmap. Use the Claude Code
                  plugin in the meantime — the methodology library is identical.
                </p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
