import type { Meta, StoryObj } from '@storybook/react';
import CookieBanner from './CookieBanner';

const meta: Meta<typeof CookieBanner> = {
  title: 'Legal/CookieBanner',
  component: CookieBanner,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'GDPR-compliant cookie consent banner with accept/reject/customize options.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CookieBanner>;

export const Default: Story = {
  args: {
    onAcceptAll: () => console.log('Accepted all cookies'),
    onRejectAll: () => console.log('Rejected all cookies'),
    onCustomize: () => console.log('Opening cookie preferences'),
    privacyPolicyUrl: '/privacy-policy',
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: '300px', position: 'relative' }}>
        <div style={{ padding: '40px', background: '#FAF9F6' }}>
          <h1 style={{ fontFamily: 'Georgia, serif', color: '#1C1C1E' }}>Page Content</h1>
          <p style={{ fontFamily: 'Inter, sans-serif', color: '#4A4A4A' }}>
            This is the page content behind the cookie banner.
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
};

export const WithContent: Story = {
  args: {
    onAcceptAll: () => console.log('Accepted all cookies'),
    onRejectAll: () => console.log('Rejected all cookies'),
    onCustomize: () => console.log('Opening cookie preferences'),
    privacyPolicyUrl: '/privacy-policy',
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: '600px', position: 'relative' }}>
        <div style={{ padding: '40px', background: '#FAF9F6' }}>
          <h1 style={{ fontFamily: 'Georgia, serif', color: '#1C1C1E', marginBottom: '24px' }}>
            Welcome to Faion Network
          </h1>
          <p style={{ fontFamily: 'Inter, sans-serif', color: '#4A4A4A', lineHeight: 1.6, maxWidth: '600px' }}>
            Faion Network is a comprehensive methodology framework for software development.
            Browse our 502 methodologies across 15 domains to enhance your development workflow.
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', color: '#4A4A4A', lineHeight: 1.6, maxWidth: '600px', marginTop: '16px' }}>
            Our tools help teams collaborate more effectively and deliver high-quality software faster.
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
};
