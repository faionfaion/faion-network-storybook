import type { Meta, StoryObj } from '@storybook/react';
import PremiumContent from './PremiumContent';

const meta: Meta<typeof PremiumContent> = {
  title: 'Paywall/PremiumContent',
  component: PremiumContent,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Wrapper component for premium content sections with locked/unlocked states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isLocked: {
      control: 'boolean',
      description: 'Whether content is locked',
    },
    tier: {
      control: 'select',
      options: ['plus', 'pro', 'team', 'ultimate'],
      description: 'Required tier',
    },
    showHeader: {
      control: 'boolean',
      description: 'Show header with badge',
    },
    highlighted: {
      control: 'boolean',
      description: 'Highlighted border',
    },
    label: {
      control: 'text',
      description: 'Label text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof PremiumContent>;

// Sample content
const SampleContent = () => (
  <div style={{ fontFamily: 'Inter, sans-serif' }}>
    <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '20px', marginBottom: '12px', color: '#1C1C1E' }}>
      Step-by-Step Implementation Guide
    </h3>
    <p style={{ color: '#4A4A4A', lineHeight: 1.7, marginBottom: '16px' }}>
      Follow these detailed steps to implement the SDD methodology in your project.
      Each step includes practical examples and code snippets.
    </p>
    <ol style={{ color: '#4A4A4A', lineHeight: 1.7, paddingLeft: '20px', marginBottom: '16px' }}>
      <li style={{ marginBottom: '8px' }}>Create your specification document</li>
      <li style={{ marginBottom: '8px' }}>Define acceptance criteria</li>
      <li style={{ marginBottom: '8px' }}>Generate implementation tasks</li>
      <li style={{ marginBottom: '8px' }}>Execute with quality gates</li>
    </ol>
    <p style={{ color: '#4A4A4A', lineHeight: 1.7 }}>
      The framework ensures consistent quality while accelerating your development workflow.
    </p>
  </div>
);

export const Unlocked: Story = {
  args: {
    isLocked: false,
    tier: 'plus',
    label: 'Premium Content',
    showHeader: true,
  },
  render: (args) => (
    <div style={{ maxWidth: '640px' }}>
      <PremiumContent {...args}>
        <SampleContent />
      </PremiumContent>
    </div>
  ),
};

export const Locked: Story = {
  args: {
    isLocked: true,
    tier: 'plus',
    label: 'Premium Content',
    showHeader: true,
    unlockTitle: 'Unlock This Guide',
    unlockText: 'Get instant access to step-by-step instructions.',
    unlockButtonText: 'Get Plus Access',
  },
  render: (args) => (
    <div style={{ maxWidth: '640px' }}>
      <PremiumContent {...args}>
        <SampleContent />
      </PremiumContent>
    </div>
  ),
};

export const ProTier: Story = {
  args: {
    isLocked: true,
    tier: 'pro',
    label: 'Pro Content',
    showHeader: true,
    unlockTitle: 'Pro Feature',
    unlockText: 'Upgrade to Pro for commercial usage rights.',
    unlockButtonText: 'Upgrade to Pro',
  },
  render: (args) => (
    <div style={{ maxWidth: '640px' }}>
      <PremiumContent {...args}>
        <SampleContent />
      </PremiumContent>
    </div>
  ),
};

export const Highlighted: Story = {
  args: {
    isLocked: false,
    tier: 'plus',
    label: 'Featured Methodology',
    showHeader: true,
    highlighted: true,
  },
  render: (args) => (
    <div style={{ maxWidth: '640px' }}>
      <PremiumContent {...args}>
        <SampleContent />
      </PremiumContent>
    </div>
  ),
};

export const NoHeader: Story = {
  args: {
    isLocked: false,
    tier: 'plus',
    showHeader: false,
  },
  render: (args) => (
    <div style={{ maxWidth: '640px' }}>
      <PremiumContent {...args}>
        <SampleContent />
      </PremiumContent>
    </div>
  ),
};

export const InArticleContext: Story = {
  render: () => (
    <div style={{ maxWidth: '720px', fontFamily: 'Inter, sans-serif' }}>
      <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '32px', marginBottom: '16px', color: '#1C1C1E' }}>
        How to Build a Solo Business
      </h1>
      <p style={{ color: '#4A4A4A', lineHeight: 1.7, marginBottom: '24px' }}>
        This comprehensive guide covers everything you need to know about building
        a successful solo business from scratch.
      </p>

      <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '24px', marginBottom: '12px', color: '#1C1C1E' }}>
        Introduction
      </h2>
      <p style={{ color: '#4A4A4A', lineHeight: 1.7, marginBottom: '32px' }}>
        Many aspiring solopreneurs struggle to find a clear path forward. This guide
        will give you the framework you need to succeed.
      </p>

      <PremiumContent
        isLocked={true}
        tier="plus"
        label="Premium Section"
        unlockTitle="Continue Reading"
        unlockText="Subscribe to access the full methodology guide."
        unlockButtonText="Get Plus for $19/month"
      >
        <SampleContent />
      </PremiumContent>

      <div style={{ marginTop: '32px' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '24px', marginBottom: '12px', color: '#1C1C1E' }}>
          Conclusion
        </h2>
        <p style={{ color: '#4A4A4A', lineHeight: 1.7 }}>
          With the right methodology, anyone can build a profitable solo business.
        </p>
      </div>
    </div>
  ),
};

export const MultipleBlocks: Story = {
  render: () => (
    <div style={{ maxWidth: '720px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <PremiumContent tier="plus" label="Plus Feature" isLocked={false}>
        <div style={{ fontFamily: 'Inter, sans-serif', color: '#4A4A4A' }}>
          <strong>Basic Methodology</strong> - Available with Plus subscription
        </div>
      </PremiumContent>

      <PremiumContent tier="pro" label="Pro Feature" isLocked={true}
        unlockTitle="Pro Required"
        unlockText="This advanced feature requires Pro."
        unlockButtonText="Upgrade"
      >
        <div style={{ fontFamily: 'Inter, sans-serif', color: '#4A4A4A' }}>
          <strong>Advanced Templates</strong> - Commercial usage templates
        </div>
      </PremiumContent>

      <PremiumContent tier="ultimate" label="Ultimate Feature" isLocked={true} highlighted
        unlockTitle="Ultimate Required"
        unlockText="Enterprise features for large teams."
        unlockButtonText="Get Ultimate"
      >
        <div style={{ fontFamily: 'Inter, sans-serif', color: '#4A4A4A' }}>
          <strong>SSO Configuration</strong> - Enterprise single sign-on setup
        </div>
      </PremiumContent>
    </div>
  ),
};
