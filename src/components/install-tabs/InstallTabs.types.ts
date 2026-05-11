/**
 * Type contracts for the shared `InstallTabs` widget.
 *
 * Mirrored from `faion-net-fe/src/features/install-tabs/InstallTabs.types.ts`.
 * The canonical source of truth for the FE consumer lives in faion-net-fe;
 * this storybook copy exists because the storybook repo cannot import across
 * the repository boundary.
 *
 * Field names match F-052 design.md §3 exactly. Keep both copies in sync
 * when the API evolves.
 */

export type InstallTabId = 'claude-code' | 'codex-cli' | 'gemini-cli'

export type InstallTabState = 'active' | 'coming-soon'

export interface InstallTab {
  id: InstallTabId
  label: string
  state: InstallTabState
  /** Required when `state === 'active'`. The command rendered in the copy block. */
  command?: string
  /** Required when `state === 'coming-soon'`. Link target for the tracking note. */
  comingSoonHref?: string
  /** Optional override for the "Coming soon — track at …" caption text. */
  comingSoonLabel?: string
  /** Optional note rendered above the command on active tabs. */
  note?: string
}

export interface InstallTabsProps {
  tabs: InstallTab[]
  /** Falls back to the first `state==='active'` tab, then to the first tab id. */
  defaultActiveId?: InstallTabId
  /** `hero` = large hero spacing, `compact` = inline density. Defaults to `hero`. */
  variant?: 'hero' | 'compact'
  /** Fires after a successful clipboard write — telemetry hook. */
  onCopy?: (tabId: InstallTabId) => void
  /** Extra class applied to the outer wrapper. */
  className?: string
}

/**
 * Canonical 3-tab install set shared between F-050 `/features/` hero and
 * F-052 `/install/` hero. Adding/removing tabs here updates both pages.
 *
 * Claude Code is active; Codex CLI + Gemini CLI are "Coming soon" until
 * authoritative `codex plugin add` / `gemini plugin add` syntax lands.
 */
export const DEFAULT_INSTALL_TABS: InstallTab[] = [
  {
    id: 'claude-code',
    label: 'Claude Code',
    state: 'active',
    command: 'claude plugin add faionfaion/faion',
    note: 'Recommended distribution path',
  },
  {
    id: 'codex-cli',
    label: 'Codex CLI',
    state: 'coming-soon',
    comingSoonHref: '/roadmap/',
    comingSoonLabel: 'Coming soon — track at /roadmap/',
  },
  {
    id: 'gemini-cli',
    label: 'Gemini CLI',
    state: 'coming-soon',
    comingSoonHref: '/roadmap/',
    comingSoonLabel: 'Coming soon — track at /roadmap/',
  },
]
