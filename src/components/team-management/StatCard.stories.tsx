import type { Meta, StoryObj } from '@storybook/react';
import StatCard from './StatCard';

const meta: Meta<typeof StatCard> = {
  title: 'TeamManagement/StatCard',
  component: StatCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Displays a single statistic with optional change indicator and icon.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StatCard>;

const UsersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ActivityIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

const DollarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

export const Default: Story = {
  args: {
    label: 'Active Members',
    value: 12,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '250px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithIcon: Story = {
  args: {
    label: 'Team Members',
    value: 8,
    icon: <UsersIcon />,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '250px' }}>
        <Story />
      </div>
    ),
  ],
};

export const PositiveChange: Story = {
  args: {
    label: 'Monthly Revenue',
    value: '$1,250',
    change: '+12.5%',
    changeType: 'positive',
    icon: <DollarIcon />,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '250px' }}>
        <Story />
      </div>
    ),
  ],
};

export const NegativeChange: Story = {
  args: {
    label: 'Churn Rate',
    value: '4.2%',
    change: '+0.8%',
    changeType: 'negative',
    icon: <ActivityIcon />,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '250px' }}>
        <Story />
      </div>
    ),
  ],
};

export const NeutralChange: Story = {
  args: {
    label: 'API Calls',
    value: '45.2K',
    change: '+0%',
    changeType: 'neutral',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '250px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Grid: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', maxWidth: '800px' }}>
      <StatCard label="Team Members" value={8} icon={<UsersIcon />} change="+2" changeType="positive" />
      <StatCard label="Active Seats" value="5/10" />
      <StatCard label="Monthly Cost" value="$175" icon={<DollarIcon />} />
      <StatCard label="API Requests" value="12.4K" change="+23%" changeType="positive" />
    </div>
  ),
};
