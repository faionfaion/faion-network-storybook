import type { Meta, StoryObj } from '@storybook/react';
import VerifiedBadge from './VerifiedBadge';

const meta: Meta<typeof VerifiedBadge> = {
  title: 'Testimonial/VerifiedBadge',
  component: VerifiedBadge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Verified badge component for testimonials and reviews with checkmark icon.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof VerifiedBadge>;

/**
 * Default verified badge
 */
export const Default: Story = {
  args: {
    showLabel: true,
    labelText: 'Verified',
  },
};

/**
 * Icon only (no label)
 */
export const IconOnly: Story = {
  args: {
    showLabel: false,
    tooltip: 'Verified customer',
  },
};

/**
 * Custom label
 */
export const CustomLabel: Story = {
  args: {
    labelText: 'Verified Purchase',
  },
};

/**
 * Small size
 */
export const SmallSize: Story = {
  args: {
    size: 'sm',
  },
};

/**
 * Large size
 */
export const LargeSize: Story = {
  args: {
    size: 'lg',
  },
};

/**
 * Outlined variant
 */
export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
};

/**
 * Subtle variant
 */
export const Subtle: Story = {
  args: {
    variant: 'subtle',
  },
};

/**
 * All variants
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ width: '80px' }}>Default:</span>
        <VerifiedBadge variant="default" />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ width: '80px' }}>Outlined:</span>
        <VerifiedBadge variant="outlined" />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ width: '80px' }}>Subtle:</span>
        <VerifiedBadge variant="subtle" />
      </div>
    </div>
  ),
};

/**
 * All sizes
 */
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
      <VerifiedBadge size="sm" />
      <VerifiedBadge size="md" />
      <VerifiedBadge size="lg" />
    </div>
  ),
};
