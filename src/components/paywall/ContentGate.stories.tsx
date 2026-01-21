import type { Meta, StoryObj } from '@storybook/react';
import ContentGate from './ContentGate';
import PaywallOverlay from './PaywallOverlay';
import PaywallCTA from './PaywallCTA';

const meta: Meta<typeof ContentGate> = {
  title: 'Paywall/ContentGate',
  component: ContentGate,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Content gating component that shows different content based on subscription status.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    requiredTier: {
      control: 'select',
      options: ['free', 'plus', 'pro', 'team', 'ultimate'],
      description: 'Minimum required tier',
    },
    currentTier: {
      control: 'select',
      options: ['free', 'plus', 'pro', 'team', 'ultimate'],
      description: 'Current user tier',
    },
    isLoading: {
      control: 'boolean',
      description: 'Loading state',
    },
    hasAccess: {
      control: 'boolean',
      description: 'Override access check',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ContentGate>;

// Sample premium content
const PremiumContent = () => (
  <div style={{ padding: '32px', background: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '8px' }}>
    <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '24px', marginBottom: '16px', color: '#1C1C1E' }}>
      Premium Content Unlocked
    </h2>
    <p style={{ fontFamily: 'Inter, sans-serif', color: '#4A4A4A', lineHeight: 1.7, marginBottom: '16px' }}>
      Congratulations! You have access to this premium content. Here is the detailed step-by-step guide
      for implementing the methodology...
    </p>
    <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '18px', marginBottom: '12px', color: '#1C1C1E' }}>
      Step 1: Research Your Market
    </h3>
    <p style={{ fontFamily: 'Inter, sans-serif', color: '#4A4A4A', lineHeight: 1.7, marginBottom: '16px' }}>
      Begin by identifying your target audience. Use the SCAMPER framework to analyze existing solutions
      and find opportunities for improvement. Here are the specific questions to ask...
    </p>
    <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '18px', marginBottom: '12px', color: '#1C1C1E' }}>
      Step 2: Validate Your Idea
    </h3>
    <p style={{ fontFamily: 'Inter, sans-serif', color: '#4A4A4A', lineHeight: 1.7 }}>
      Use the Mom Test methodology to validate your idea without leading questions. Here is a template
      for your validation interviews...
    </p>
  </div>
);

// Sample article with partial preview
const ArticlePreview = () => (
  <div style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: '720px' }}>
    <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '32px', marginBottom: '16px', color: '#1C1C1E' }}>
      How to Build a $20K/month Solo Business
    </h1>
    <p style={{ color: '#4A4A4A', lineHeight: 1.7, marginBottom: '24px' }}>
      Building a successful solo business requires a systematic approach. In this comprehensive guide,
      we will explore the proven methodologies used by successful solopreneurs.
    </p>
    <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '24px', marginBottom: '12px', color: '#1C1C1E' }}>
      The Problem
    </h2>
    <p style={{ color: '#4A4A4A', lineHeight: 1.7, marginBottom: '24px' }}>
      Most aspiring solopreneurs fail not because of lack of skills, but because they lack a structured
      methodology. They jump from tactic to tactic, never building real momentum.
    </p>
  </div>
);

export const HasAccess: Story = {
  args: {
    requiredTier: 'plus',
    currentTier: 'plus',
    isLoading: false,
  },
  render: (args) => (
    <ContentGate {...args}>
      <PremiumContent />
    </ContentGate>
  ),
};

export const NoAccess: Story = {
  args: {
    requiredTier: 'plus',
    currentTier: 'free',
    isLoading: false,
  },
  render: (args) => (
    <ContentGate
      {...args}
      fallback={
        <PaywallCTA
          headline="Unlock This Content"
          valueProp="Get access to this methodology and 500+ more."
          price="$19"
          period="/month"
          ctaText="Get Plus Access"
        />
      }
    >
      <PremiumContent />
    </ContentGate>
  ),
};

export const WithPaywallOverlay: Story = {
  args: {
    requiredTier: 'plus',
    currentTier: 'free',
    isLoading: false,
  },
  render: (args) => (
    <ContentGate
      {...args}
      fallback={
        <PaywallOverlay
          title="Premium Content"
          description="Get full access to this article and 500+ methodologies."
          ctaText="Get Plus for $19/month"
        >
          <ArticlePreview />
        </PaywallOverlay>
      }
    >
      <PremiumContent />
    </ContentGate>
  ),
};

export const Loading: Story = {
  args: {
    requiredTier: 'plus',
    currentTier: 'free',
    isLoading: true,
  },
  render: (args) => (
    <ContentGate {...args}>
      <PremiumContent />
    </ContentGate>
  ),
};

export const ProRequired: Story = {
  args: {
    requiredTier: 'pro',
    currentTier: 'plus',
    isLoading: false,
  },
  render: (args) => (
    <ContentGate
      {...args}
      fallback={
        <PaywallCTA
          headline="Pro Plan Required"
          valueProp="This methodology is available for Pro subscribers with commercial usage rights."
          price="$35"
          period="/month"
          ctaText="Upgrade to Pro"
          features={[
            { text: 'Commercial usage license' },
            { text: 'Client project rights' },
            { text: 'SSO authentication' },
          ]}
        />
      }
    >
      <PremiumContent />
    </ContentGate>
  ),
};

export const UltimateRequired: Story = {
  args: {
    requiredTier: 'ultimate',
    currentTier: 'pro',
    isLoading: false,
  },
  render: (args) => (
    <ContentGate
      {...args}
      fallback={
        <PaywallCTA
          headline="Ultimate Plan Required"
          valueProp="This feature is available for Ultimate subscribers with team management."
          price="$2,100"
          period="/year"
          ctaText="Get Ultimate"
          badge="Enterprise"
          highlighted
        />
      }
    >
      <PremiumContent />
    </ContentGate>
  ),
};

export const CustomLoading: Story = {
  args: {
    requiredTier: 'plus',
    currentTier: 'free',
    isLoading: true,
  },
  render: (args) => (
    <ContentGate
      {...args}
      loadingComponent={
        <div style={{ textAlign: 'center', padding: '48px' }}>
          <div style={{
            width: '48px',
            height: '48px',
            border: '4px solid #E5E5E0',
            borderTopColor: '#5D1F2D',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 16px'
          }} />
          <p style={{ fontFamily: 'Inter, sans-serif', color: '#4A4A4A' }}>
            Checking subscription status...
          </p>
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      }
    >
      <PremiumContent />
    </ContentGate>
  ),
};

export const AccessOverride: Story = {
  args: {
    requiredTier: 'ultimate',
    currentTier: 'free',
    hasAccess: true,
    isLoading: false,
  },
  render: (args) => (
    <ContentGate
      {...args}
      fallback={<PaywallCTA headline="You should not see this" />}
    >
      <PremiumContent />
    </ContentGate>
  ),
};
