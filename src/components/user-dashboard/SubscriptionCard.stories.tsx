import type { Meta, StoryObj } from '@storybook/react';
import SubscriptionCard from './SubscriptionCard';

const meta: Meta<typeof SubscriptionCard> = {
  title: 'UserDashboard/SubscriptionCard',
  component: SubscriptionCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Displays current subscription status with plan details and management actions.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SubscriptionCard>;

export const FreeTier: Story = {
  args: {
    plan: 'Free',
    tier: 'free',
    isActive: true,
    onUpgrade: () => console.log('Upgrade clicked'),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const PlusTier: Story = {
  args: {
    plan: 'Plus',
    tier: 'plus',
    billing: 'monthly',
    price: 19,
    nextBillingDate: '2026-02-15',
    isActive: true,
    onManage: () => console.log('Manage clicked'),
    onUpgrade: () => console.log('Upgrade clicked'),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const ProTier: Story = {
  args: {
    plan: 'Pro',
    tier: 'pro',
    billing: 'annual',
    price: 350,
    nextBillingDate: '2027-01-15',
    isActive: true,
    onManage: () => console.log('Manage clicked'),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const TeamTier: Story = {
  args: {
    plan: 'Team (5 seats)',
    tier: 'team',
    billing: 'annual',
    price: 1750,
    nextBillingDate: '2027-01-15',
    isActive: true,
    onManage: () => console.log('Manage clicked'),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const UltimateTier: Story = {
  args: {
    plan: 'Ultimate (20 seats)',
    tier: 'ultimate',
    billing: 'annual',
    price: 2100,
    nextBillingDate: '2027-01-15',
    isActive: true,
    onManage: () => console.log('Manage clicked'),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Inactive: Story = {
  args: {
    plan: 'Plus',
    tier: 'plus',
    billing: 'monthly',
    price: 19,
    isActive: false,
    onUpgrade: () => console.log('Reactivate clicked'),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};
