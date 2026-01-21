import type { Meta, StoryObj } from '@storybook/react';
import NewsletterSection from './NewsletterSection';

const meta: Meta<typeof NewsletterSection> = {
  title: 'Blog/NewsletterSection',
  component: NewsletterSection,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Full-width newsletter signup section with email input and success/error states.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NewsletterSection>;

const mockSubscribe = async (email: string): Promise<void> => {
  console.log('Subscribing:', email);
  await new Promise((resolve) => setTimeout(resolve, 1500));
};

const mockSubscribeError = async (): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  throw new Error('This email is already subscribed.');
};

export const Default: Story = {
  args: {
    headline: 'Stay in the Loop',
    description: 'Get weekly insights on solopreneurship, product development, and AI tools delivered straight to your inbox.',
    onSubscribe: mockSubscribe,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '800px' }}>
        <Story />
      </div>
    ),
  ],
};

export const CustomSuccessMessage: Story = {
  args: {
    headline: 'Join Our Newsletter',
    description: 'Weekly tips and strategies for building your solo business.',
    onSubscribe: mockSubscribe,
    successMessage: 'Welcome aboard! Your first email is on its way.',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '800px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithErrorHandling: Story = {
  args: {
    headline: 'Subscribe Now',
    description: 'Join 10,000+ solopreneurs getting weekly insights.',
    onSubscribe: mockSubscribeError,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '800px' }}>
        <Story />
      </div>
    ),
  ],
};

export const FullWidth: Story = {
  args: {
    headline: 'Never Miss an Update',
    description: 'Join our community of solopreneurs and get exclusive content, early access to new features, and weekly insights delivered to your inbox.',
    onSubscribe: mockSubscribe,
  },
};
