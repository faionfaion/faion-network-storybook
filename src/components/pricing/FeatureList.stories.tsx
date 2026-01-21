import type { Meta, StoryObj } from '@storybook/react';
import FeatureList from './FeatureList';

const meta: Meta<typeof FeatureList> = {
  title: 'Pricing/FeatureList',
  component: FeatureList,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Displays a list of features with check/x icons. Used in pricing cards to show included and excluded features.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'compact', 'detailed'],
      description: 'List variant',
    },
    iconStyle: {
      control: 'select',
      options: ['check', 'bullet', 'number'],
      description: 'Icon style',
    },
    columns: {
      control: 'select',
      options: [1, 2],
      description: 'Column layout',
    },
  },
};

export default meta;
type Story = StoryObj<typeof FeatureList>;

const basicFeatures = [
  'Full methodology access',
  'All 15 AI skills',
  '502+ methodologies',
  'MCP server access',
  'Real-time updates',
];

const mixedFeatures = [
  { text: 'Full methodology access', status: 'included' as const },
  { text: 'All 15 AI skills', status: 'included' as const },
  { text: '1 MCP connection', status: 'included' as const, limitText: 'up to 1' },
  { text: 'Priority support', status: 'excluded' as const },
  { text: 'Commercial license', status: 'excluded' as const },
];

const detailedFeatures = [
  { text: 'Complete methodology library', status: 'included' as const, tooltip: 'Access to all 502+ methodologies across 15 skills' },
  { text: 'AI agents and skills', status: 'included' as const, tooltip: 'Full access to 1 agent and 15 role-based skills' },
  { text: 'MCP server connections', status: 'limited' as const, limitText: '5 seats', tooltip: 'For team plans' },
  { text: 'SSO authentication', status: 'coming' as const, tooltip: 'Coming Q2 2026' },
  { text: 'White-label support', status: 'excluded' as const },
];

export const Default: Story = {
  args: {
    features: basicFeatures,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

export const MixedStatuses: Story = {
  args: {
    features: mixedFeatures,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithTooltips: Story = {
  args: {
    features: detailedFeatures,
    variant: 'detailed',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '360px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Compact: Story = {
  args: {
    features: basicFeatures,
    variant: 'compact',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '280px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Detailed: Story = {
  args: {
    features: basicFeatures,
    variant: 'detailed',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '360px' }}>
        <Story />
      </div>
    ),
  ],
};

export const BulletStyle: Story = {
  args: {
    features: basicFeatures,
    iconStyle: 'bullet',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

export const NumberedStyle: Story = {
  args: {
    features: basicFeatures,
    iconStyle: 'number',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

export const TwoColumns: Story = {
  args: {
    features: [
      'Full methodology access',
      'All 15 AI skills',
      '502+ methodologies',
      'MCP server access',
      'Real-time updates',
      'Email support',
      'Priority queue',
      'API access',
    ],
    columns: 2,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithMaxVisible: Story = {
  args: {
    features: [
      'Full methodology access',
      'All 15 AI skills',
      '502+ methodologies',
      'MCP server access',
      'Real-time updates',
      'Email support',
      'Priority queue',
      'API access',
    ],
    maxVisible: 5,
    expandable: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

export const InPricingCard: Story = {
  render: () => (
    <div style={{
      width: '340px',
      background: '#FFFFFF',
      border: '2px solid #5D1F2D',
      borderRadius: '12px',
      padding: '24px',
    }}>
      <div style={{
        display: 'inline-block',
        padding: '4px 12px',
        background: '#5D1F2D',
        color: 'white',
        borderRadius: '4px',
        fontSize: '12px',
        fontWeight: 600,
        marginBottom: '16px',
        fontFamily: 'Inter, sans-serif',
      }}>
        MOST POPULAR
      </div>
      <h3 style={{
        fontFamily: 'Georgia, serif',
        fontSize: '24px',
        fontWeight: 700,
        color: '#1C1C1E',
        margin: '0 0 4px',
      }}>
        Plus
      </h3>
      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        color: '#4A4A4A',
        margin: '0 0 16px',
      }}>
        For solopreneurs
      </p>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '24px' }}>
        <span style={{ fontFamily: 'Georgia, serif', fontSize: '40px', fontWeight: 700, color: '#1C1C1E' }}>$19</span>
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#4A4A4A' }}>/month</span>
      </div>
      <FeatureList
        features={[
          'Full methodology access',
          'All 15 AI skills',
          '502+ methodologies',
          '1 MCP connection',
          'Personal use only',
        ]}
      />
      <button style={{
        width: '100%',
        marginTop: '24px',
        padding: '12px',
        background: '#5D1F2D',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontFamily: 'Inter, sans-serif',
        fontSize: '15px',
        fontWeight: 600,
        cursor: 'pointer',
      }}>
        Get Started
      </button>
    </div>
  ),
};

export const PlanComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px' }}>
      <div style={{ width: '280px' }}>
        <h4 style={{ fontFamily: 'Georgia, serif', fontSize: '18px', marginBottom: '16px', color: '#1C1C1E' }}>Free</h4>
        <FeatureList
          features={[
            { text: 'Limited methodology preview', status: 'included' },
            { text: 'Non-commercial use only', status: 'included' },
            { text: '1 MCP connection', status: 'included', limitText: 'basic' },
            { text: 'Full guide access', status: 'excluded' },
            { text: 'Commercial license', status: 'excluded' },
          ]}
          variant="compact"
        />
      </div>
      <div style={{ width: '280px' }}>
        <h4 style={{ fontFamily: 'Georgia, serif', fontSize: '18px', marginBottom: '16px', color: '#1C1C1E' }}>Plus</h4>
        <FeatureList
          features={[
            { text: 'Full methodology access', status: 'included' },
            { text: 'Personal use', status: 'included' },
            { text: '1 MCP connection', status: 'included' },
            { text: 'Ultimate Guide included', status: 'included' },
            { text: 'Commercial license', status: 'excluded' },
          ]}
          variant="compact"
        />
      </div>
      <div style={{ width: '280px' }}>
        <h4 style={{ fontFamily: 'Georgia, serif', fontSize: '18px', marginBottom: '16px', color: '#1C1C1E' }}>Pro</h4>
        <FeatureList
          features={[
            { text: 'Full methodology access', status: 'included' },
            { text: 'Commercial use', status: 'included' },
            { text: '1 MCP connection', status: 'included' },
            { text: 'Ultimate Guide included', status: 'included' },
            { text: 'SSO authentication', status: 'included' },
          ]}
          variant="compact"
        />
      </div>
    </div>
  ),
};
