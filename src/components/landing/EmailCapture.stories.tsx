import type { Meta, StoryObj } from '@storybook/react';
import EmailCapture from './EmailCapture';

const meta: Meta<typeof EmailCapture> = {
  title: 'Landing/EmailCapture',
  component: EmailCapture,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Email capture form for newsletter signups. Features validation, loading, success, and error states.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EmailCapture>;

/**
 * Default inline layout
 */
export const Default: Story = {
  args: {
    headline: 'Stay Updated',
    description: 'Get the latest methodologies and insights delivered to your inbox.',
    placeholder: 'Enter your email',
    buttonText: 'Subscribe',
    privacyText: (
      <>
        By subscribing, you agree to our{' '}
        <a href="#privacy">Privacy Policy</a>.
      </>
    ),
    onSubmit: (email) => {
      console.log('Submitted:', email);
      return new Promise((resolve) => setTimeout(resolve, 1000));
    },
  },
};

/**
 * Centered variant
 */
export const Centered: Story = {
  args: {
    headline: 'Join 10,000+ Solopreneurs',
    description: 'Get weekly insights on building a profitable solo business.',
    buttonText: 'Get Free Access',
    variant: 'centered',
    privacyText: 'No spam. Unsubscribe anytime.',
    onSubmit: (email) => console.log('Submitted:', email),
  },
};

/**
 * Stacked variant
 */
export const Stacked: Story = {
  args: {
    headline: 'Download the Free Guide',
    description: 'Enter your email to receive the complete solopreneur starter pack.',
    buttonText: 'Send Me the Guide',
    variant: 'stacked',
    onSubmit: (email) => console.log('Submitted:', email),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

/**
 * Loading state
 */
export const Loading: Story = {
  args: {
    headline: 'Join Our Newsletter',
    isLoading: true,
    onSubmit: () => {},
  },
};

/**
 * Success state
 */
export const Success: Story = {
  args: {
    headline: 'Join Our Newsletter',
    isSuccess: true,
    successMessage: 'Welcome aboard! Check your inbox for a confirmation email.',
  },
};

/**
 * Error state
 */
export const Error: Story = {
  args: {
    headline: 'Join Our Newsletter',
    errorMessage: 'This email is already subscribed. Try another one.',
    onSubmit: () => {},
  },
};

/**
 * Minimal - no headline
 */
export const Minimal: Story = {
  args: {
    placeholder: 'Your email address',
    buttonText: 'Subscribe',
    privacyText: 'We respect your privacy.',
    onSubmit: (email) => console.log('Submitted:', email),
  },
};

/**
 * Custom styling in dark section
 */
export const InDarkSection: Story = {
  args: {
    headline: 'Get Early Access',
    description: 'Be the first to try new features.',
    buttonText: 'Join Waitlist',
    onSubmit: (email) => console.log('Submitted:', email),
  },
  decorators: [
    (Story) => (
      <div
        style={{
          background: '#1C1C1E',
          padding: '48px',
          borderRadius: '8px',
        }}
      >
        <div style={{ color: '#FAF9F6' }}>
          <Story />
        </div>
      </div>
    ),
  ],
};

/**
 * With long privacy text
 */
export const LongPrivacyText: Story = {
  args: {
    headline: 'Subscribe to Updates',
    privacyText: (
      <>
        By subscribing, you agree to receive marketing communications from us.
        You can unsubscribe at any time by clicking the link in our emails.
        Read our <a href="#privacy">Privacy Policy</a> and{' '}
        <a href="#terms">Terms of Service</a>.
      </>
    ),
    onSubmit: (email) => console.log('Submitted:', email),
  },
};
