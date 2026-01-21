import type { Meta, StoryObj } from '@storybook/react';
import NewsletterInlineCTA from './NewsletterInlineCTA';

const meta: Meta<typeof NewsletterInlineCTA> = {
  title: 'Blog/NewsletterInlineCTA',
  component: NewsletterInlineCTA,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Compact inline newsletter signup for mid-content placement.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NewsletterInlineCTA>;

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
    text: 'Enjoying this article? Get more insights delivered to your inbox.',
    onSubscribe: mockSubscribe,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const ShortText: Story = {
  args: {
    text: 'Subscribe for weekly tips:',
    onSubscribe: mockSubscribe,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithErrorHandling: Story = {
  args: {
    text: 'Get notified about new articles:',
    onSubscribe: mockSubscribeError,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const InArticle: Story = {
  render: () => (
    <article style={{ maxWidth: '700px', fontFamily: 'Inter, sans-serif' }}>
      <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#4A4A4A', marginBottom: '24px' }}>
        The MVP approach allows you to test your core hypothesis with minimal investment.
        Instead of spending months building a full product, you focus on the essential
        features that validate your business idea.
      </p>

      <NewsletterInlineCTA
        text="Want more product development tips? Subscribe to our newsletter."
        onSubscribe={mockSubscribe}
      />

      <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#4A4A4A', marginTop: '24px' }}>
        Now that you understand the importance of starting small, let us dive into the
        specific steps for building your MVP.
      </p>
    </article>
  ),
};

export const CustomSuccessMessage: Story = {
  args: {
    text: 'Join 10,000+ readers:',
    onSubscribe: mockSubscribe,
    successMessage: 'You are in! Welcome to the community.',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};
