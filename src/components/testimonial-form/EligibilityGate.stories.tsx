import type { Meta, StoryObj } from '@storybook/react';
import EligibilityGate from './EligibilityGate';

const meta: Meta<typeof EligibilityGate> = {
  title: 'TestimonialForm/EligibilityGate',
  component: EligibilityGate,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Gating component shown when user is not eligible to submit a testimonial.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EligibilityGate>;

export const NotAuthenticated: Story = {
  args: {
    reason: 'not_authenticated',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const NotPaid: Story = {
  args: {
    reason: 'not_paid',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const AlreadySubmitted: Story = {
  args: {
    reason: 'already_submitted',
    existingTestimonial: {
      mode: 'freeform',
      content: 'Faion Network has been a game-changer for my solopreneur journey. The SDD methodology helped me ship my first product in half the time I expected. I cannot recommend it enough!',
      displayName: 'full',
      jobTitle: 'Founder',
      company: 'My Startup',
      consentGiven: true,
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const AlreadySubmittedNoPreview: Story = {
  args: {
    reason: 'already_submitted',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};
