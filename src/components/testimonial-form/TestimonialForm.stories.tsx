import type { Meta, StoryObj } from '@storybook/react';
import TestimonialForm, { TestimonialData } from './TestimonialForm';

const meta: Meta<typeof TestimonialForm> = {
  title: 'TestimonialForm/TestimonialForm',
  component: TestimonialForm,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Complete testimonial submission form with guided and freeform modes.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TestimonialForm>;

const mockSubmit = async (data: TestimonialData): Promise<void> => {
  // eslint-disable-next-line no-console -- Storybook demo
  console.log('Submitting testimonial:', data);
  await new Promise((resolve) => setTimeout(resolve, 2000));
};

const mockSubmitError = async (): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  throw new Error('Failed to submit. Please try again.');
};

export const Default: Story = {
  args: {
    onSubmit: mockSubmit,
    userName: 'Ruslan Faion',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '700px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithReward: Story = {
  args: {
    onSubmit: mockSubmit,
    userName: 'Ruslan Faion',
    reward: {
      title: 'Get 1 Month Free!',
      description: 'Share your experience and receive one month of free access to your current plan.',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '700px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithCustomQuestions: Story = {
  args: {
    onSubmit: mockSubmit,
    userName: 'Jane Developer',
    questions: [
      {
        id: 'how_found',
        question: 'How did you find Faion Network?',
        options: [
          { label: 'Search engine', value: 'search' },
          { label: 'Social media', value: 'social' },
          { label: 'Friend referral', value: 'referral' },
          { label: 'Blog post', value: 'blog' },
        ],
        allowCustom: true,
      },
      {
        id: 'satisfaction',
        question: 'How satisfied are you with Faion Network?',
        options: [
          { label: 'Extremely satisfied', value: 'extremely' },
          { label: 'Very satisfied', value: 'very' },
          { label: 'Satisfied', value: 'satisfied' },
          { label: 'Neutral', value: 'neutral' },
        ],
        allowCustom: false,
      },
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '700px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithErrorHandling: Story = {
  args: {
    onSubmit: mockSubmitError,
    userName: 'Ruslan Faion',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '700px' }}>
        <Story />
      </div>
    ),
  ],
};
