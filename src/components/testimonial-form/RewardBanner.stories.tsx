import type { Meta, StoryObj } from '@storybook/react';
import RewardBanner from './RewardBanner';

const meta: Meta<typeof RewardBanner> = {
  title: 'TestimonialForm/RewardBanner',
  component: RewardBanner,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Reward incentive banner for testimonial submissions.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RewardBanner>;

export const Default: Story = {
  args: {
    title: 'Get 1 Month Free!',
    description: 'Share your experience and receive one month of free access to your current plan.',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

export const DiscountReward: Story = {
  args: {
    title: '20% Off Your Next Year',
    description: 'Submit a testimonial and get 20% discount on your annual subscription renewal.',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

export const FeatureAccess: Story = {
  args: {
    title: 'Unlock Premium Features',
    description: 'Get early access to new AI agents and methodologies before anyone else.',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

export const InForm: Story = {
  render: () => (
    <div style={{ maxWidth: '600px', fontFamily: 'Inter, sans-serif' }}>
      <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '24px', marginBottom: '8px', color: '#1C1C1E' }}>
        Share Your Experience
      </h2>
      <p style={{ fontSize: '15px', color: '#4A4A4A', marginBottom: '24px' }}>
        Help others discover Faion Network by sharing your story.
      </p>

      <RewardBanner
        title="Get 1 Month Free!"
        description="Share your experience and receive one month of free access to your current plan."
      />

      <p style={{ fontSize: '14px', color: '#4A4A4A', marginTop: '16px' }}>
        Your testimonial will be reviewed by our team before publication.
      </p>
    </div>
  ),
};
