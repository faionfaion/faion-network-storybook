import type { Meta, StoryObj } from '@storybook/react';
import LockedBadge from './LockedBadge';

const meta: Meta<typeof LockedBadge> = {
  title: 'Paywall/LockedBadge',
  component: LockedBadge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Badge indicating locked/premium content with lock icon and tier text.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    tier: {
      control: 'select',
      options: ['plus', 'pro', 'team', 'ultimate'],
      description: 'Tier variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size variant',
    },
    outline: {
      control: 'boolean',
      description: 'Outline style',
    },
    showIcon: {
      control: 'boolean',
      description: 'Show lock icon',
    },
    text: {
      control: 'text',
      description: 'Custom text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof LockedBadge>;

export const Default: Story = {
  args: {
    tier: 'plus',
    size: 'medium',
    showIcon: true,
  },
};

export const AllTiers: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <LockedBadge tier="plus" />
      <LockedBadge tier="pro" />
      <LockedBadge tier="team" />
      <LockedBadge tier="ultimate" />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <LockedBadge size="small" tier="plus" />
      <LockedBadge size="medium" tier="plus" />
      <LockedBadge size="large" tier="plus" />
    </div>
  ),
};

export const OutlineVariant: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <LockedBadge tier="plus" outline />
      <LockedBadge tier="pro" outline />
      <LockedBadge tier="team" outline />
      <LockedBadge tier="ultimate" outline />
    </div>
  ),
};

export const NoIcon: Story = {
  args: {
    tier: 'pro',
    showIcon: false,
  },
};

export const CustomText: Story = {
  args: {
    text: 'Premium Only',
    tier: 'plus',
    showIcon: true,
  },
};

export const InContext: Story = {
  render: () => (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '16px',
        background: '#FFFFFF',
        border: '1px solid #E5E5E0',
        borderRadius: '8px',
        marginBottom: '16px'
      }}>
        <h3 style={{ margin: 0, fontFamily: 'Georgia, serif', fontSize: '18px', color: '#1C1C1E' }}>
          Advanced SDD Methodology
        </h3>
        <LockedBadge tier="pro" size="small" />
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '16px',
        background: '#FFFFFF',
        border: '1px solid #E5E5E0',
        borderRadius: '8px',
        marginBottom: '16px'
      }}>
        <h3 style={{ margin: 0, fontFamily: 'Georgia, serif', fontSize: '18px', color: '#1C1C1E' }}>
          AI Agent Framework
        </h3>
        <LockedBadge tier="plus" size="small" />
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '16px',
        background: '#FFFFFF',
        border: '1px solid #E5E5E0',
        borderRadius: '8px'
      }}>
        <h3 style={{ margin: 0, fontFamily: 'Georgia, serif', fontSize: '18px', color: '#1C1C1E' }}>
          Enterprise SSO Setup
        </h3>
        <LockedBadge tier="ultimate" size="small" />
      </div>
    </div>
  ),
};

export const WithCustomIcon: Story = {
  args: {
    text: 'Premium',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ),
  },
};
