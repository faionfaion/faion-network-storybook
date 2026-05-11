import type { Meta, StoryObj } from '@storybook/react'
import { InstallTabs, DEFAULT_INSTALL_TABS } from '../components/install-tabs'
import type { InstallTab } from '../components/install-tabs'
import '../components/install-tabs/InstallTabs.css'

const meta: Meta<typeof InstallTabs> = {
  title: 'FAION/Marketing/InstallTabs',
  component: InstallTabs,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Shared 3-tab CLI install widget. Single source of truth consumed by:

- **F-050** \`/features/\` hero (\`variant="hero"\` or \`variant="compact"\` per layout)
- **F-052** \`/install/\` hero (canonical install hub, \`variant="hero"\`)

## Behaviour
- Active tabs render a copy-paste command block on \`bg-soft-charcoal\`.
- "Coming soon" tabs render a muted card with a tracking link to \`/roadmap/\`.
- All tabs are present in the DOM; disabled tabs are visible but \`aria-disabled\`.
- Keyboard nav: ArrowLeft / ArrowRight cycle through enabled tabs only
  (wrap-around). Home / End jump to first / last enabled tab.
  Enter / Space activate the focused tab (no-op on disabled tabs).
- Hover affordance only on \`state === 'active'\` buttons.

## Variants
- **hero** — large hero spacing, used on \`/install/\` and \`/features/\`.
- **compact** — inline density for embedded contexts.

## a11y
- \`role="tablist"\` wrapper with \`aria-label="Install command"\`.
- Each tab carries \`role="tab"\`, \`aria-selected\`, \`aria-controls\`, \`id\`, \`tabindex\`.
- Disabled tabs carry \`aria-disabled="true"\` and \`aria-describedby\` pointing
  to the "Coming soon" caption.
- Tab panels carry \`role="tabpanel"\` and \`aria-labelledby\`.
        `,
      },
    },
    backgrounds: { default: 'Warm Alabaster' },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['hero', 'compact'],
      description: 'Layout density',
    },
    defaultActiveId: {
      control: 'select',
      options: ['claude-code', 'codex-cli', 'gemini-cli'],
      description: 'Initial active tab id (defaults to first active tab)',
    },
    onCopy: { action: 'copied' },
  },
}

export default meta
type Story = StoryObj<typeof InstallTabs>

const heroFrame = (StoryFn: () => JSX.Element) => (
  <div
    style={{
      backgroundColor: '#FAF9F6',
      padding: '32px',
      maxWidth: '720px',
      width: '100%',
    }}
  >
    <StoryFn />
  </div>
)

const compactFrame = (StoryFn: () => JSX.Element) => (
  <div
    style={{
      backgroundColor: '#FAF9F6',
      padding: '20px',
      maxWidth: '520px',
      width: '100%',
    }}
  >
    <StoryFn />
  </div>
)

/**
 * Default hero layout — DEFAULT_INSTALL_TABS, `variant="hero"`.
 *
 * Mirrors the `/install/` hero exactly: Claude Code active, Codex CLI and
 * Gemini CLI in coming-soon state.
 */
export const Default: Story = {
  args: {
    tabs: DEFAULT_INSTALL_TABS,
    variant: 'hero',
  },
  decorators: [heroFrame],
}

/**
 * Compact layout — same DEFAULT_INSTALL_TABS, `variant="compact"`.
 *
 * Used by `/features/` hero where horizontal density matters more than
 * marketing weight.
 */
export const Compact: Story = {
  args: {
    tabs: DEFAULT_INSTALL_TABS,
    variant: 'compact',
  },
  decorators: [compactFrame],
}

/**
 * Single active tab — regression for layouts where only one runtime is live.
 *
 * Exercises the `defaultActiveId` fallback to the lone active tab id.
 */
export const OneActive: Story = {
  args: {
    tabs: [
      {
        id: 'claude-code',
        label: 'Claude Code',
        state: 'active',
        command: 'claude plugin add faionfaion/faion',
        note: 'Recommended distribution path',
      },
    ] satisfies InstallTab[],
    variant: 'hero',
  },
  decorators: [heroFrame],
}

/**
 * All three tabs in coming-soon state — regression for the
 * `defaultActiveId` fallback when no `state==='active'` tab exists.
 *
 * The widget falls back to the first tab id and renders the coming-soon
 * panel on it.
 */
export const AllComingSoon: Story = {
  args: {
    tabs: [
      {
        id: 'claude-code',
        label: 'Claude Code',
        state: 'coming-soon',
        comingSoonHref: '/roadmap/',
        comingSoonLabel: 'Coming soon — track at /roadmap/',
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
    ] satisfies InstallTab[],
    variant: 'hero',
  },
  decorators: [heroFrame],
}

/**
 * Single active tab with a non-default command and note string.
 *
 * Exercises the `note` override and confirms the copy block renders
 * arbitrary commands (e.g. an installer URL pattern from F-013).
 */
export const WithCustomCommand: Story = {
  args: {
    tabs: [
      {
        id: 'claude-code',
        label: 'Claude Code',
        state: 'active',
        command: 'curl -fsSL https://faion.net/install.sh | sh',
        note: 'Shell installer (F-013 path)',
      },
    ] satisfies InstallTab[],
    variant: 'hero',
  },
  decorators: [heroFrame],
}
