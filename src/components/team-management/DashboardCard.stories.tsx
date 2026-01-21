import type { Meta, StoryObj } from '@storybook/react';
import DashboardCard from './DashboardCard';

const meta: Meta<typeof DashboardCard> = {
  title: 'TeamManagement/DashboardCard',
  component: DashboardCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Container card for organizing dashboard sections.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DashboardCard>;

export const Default: Story = {
  args: {
    title: 'Team Overview',
    children: (
      <p style={{ fontFamily: 'Inter, sans-serif', color: '#4A4A4A', margin: 0 }}>
        Your team has 5 active members with access to the Pro plan features.
      </p>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithAction: Story = {
  args: {
    title: 'Team Members',
    action: {
      label: 'Invite Member',
      onClick: () => console.log('Invite clicked'),
    },
    children: (
      <div style={{ fontFamily: 'Inter, sans-serif', color: '#4A4A4A' }}>
        <p style={{ margin: '0 0 8px' }}>5 active members</p>
        <p style={{ margin: 0 }}>2 pending invitations</p>
      </div>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithComplexContent: Story = {
  args: {
    title: 'Billing Summary',
    action: {
      label: 'View Details',
      onClick: () => console.log('View details clicked'),
    },
    children: (
      <div style={{ display: 'flex', gap: '32px' }}>
        <div>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#6B6B6B', display: 'block' }}>
            Current Plan
          </span>
          <span style={{ fontFamily: 'Georgia, serif', fontSize: '20px', fontWeight: 600, color: '#1C1C1E' }}>
            Team Pro
          </span>
        </div>
        <div>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#6B6B6B', display: 'block' }}>
            Monthly Cost
          </span>
          <span style={{ fontFamily: 'Georgia, serif', fontSize: '20px', fontWeight: 600, color: '#1C1C1E' }}>
            $175
          </span>
        </div>
      </div>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '500px' }}>
        <Story />
      </div>
    ),
  ],
};
