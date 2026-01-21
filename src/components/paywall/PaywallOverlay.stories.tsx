import type { Meta, StoryObj } from '@storybook/react';
import PaywallOverlay from './PaywallOverlay';

const meta: Meta<typeof PaywallOverlay> = {
  title: 'Paywall/PaywallOverlay',
  component: PaywallOverlay,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Blur overlay for premium content with gradient fade and centered CTA card.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Title for the CTA card',
    },
    description: {
      control: 'text',
      description: 'Description text',
    },
    ctaText: {
      control: 'text',
      description: 'Primary CTA button text',
    },
    secondaryText: {
      control: 'text',
      description: 'Secondary link text',
    },
    showIcon: {
      control: 'boolean',
      description: 'Whether to show the lock icon',
    },
  },
};

export default meta;
type Story = StoryObj<typeof PaywallOverlay>;

// Sample article content for demo
const SampleContent = () => (
  <div style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: '720px', margin: '0 auto' }}>
    <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '32px', marginBottom: '16px', color: '#1C1C1E' }}>
      How to Build a $20K/month Solo Business
    </h1>
    <p style={{ color: '#4A4A4A', lineHeight: 1.7, marginBottom: '24px' }}>
      Building a successful solo business requires a systematic approach. In this comprehensive guide,
      we will explore the proven methodologies used by successful solopreneurs to reach consistent
      $20K+ monthly revenue.
    </p>

    <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '24px', marginBottom: '12px', color: '#1C1C1E' }}>
      The Problem
    </h2>
    <p style={{ color: '#4A4A4A', lineHeight: 1.7, marginBottom: '24px' }}>
      Most aspiring solopreneurs fail not because of lack of skills, but because they lack a structured
      methodology. They jump from tactic to tactic, never building real momentum.
    </p>

    <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '24px', marginBottom: '12px', color: '#1C1C1E' }}>
      The Solution
    </h2>
    <p style={{ color: '#4A4A4A', lineHeight: 1.7, marginBottom: '24px' }}>
      The SDD methodology provides a clear framework for building products. It combines specification-driven
      development with AI-powered tools to accelerate your journey.
    </p>

    <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '24px', marginBottom: '12px', color: '#1C1C1E' }}>
      Step 1: Find Your Niche
    </h2>
    <p style={{ color: '#4A4A4A', lineHeight: 1.7, marginBottom: '24px' }}>
      The first step is identifying a profitable niche. Use the SCAMPER framework to analyze existing
      products and find opportunities for improvement...
    </p>

    <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '24px', marginBottom: '12px', color: '#1C1C1E' }}>
      Step 2: Validate Your Idea
    </h2>
    <p style={{ color: '#4A4A4A', lineHeight: 1.7, marginBottom: '24px' }}>
      Before building anything, validate your idea using the Mom Test methodology. This ensures you are
      solving a real problem that people will pay for...
    </p>

    <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '24px', marginBottom: '12px', color: '#1C1C1E' }}>
      Step 3: Build Your MVP
    </h2>
    <p style={{ color: '#4A4A4A', lineHeight: 1.7, marginBottom: '24px' }}>
      Now comes the fun part: building your Minimum Viable Product. The key is to focus on the core value
      proposition and avoid feature creep at all costs...
    </p>

    <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '24px', marginBottom: '12px', color: '#1C1C1E' }}>
      Step 4: Launch and Iterate
    </h2>
    <p style={{ color: '#4A4A4A', lineHeight: 1.7, marginBottom: '24px' }}>
      Launch early and often. Use the AARRR framework to track your metrics and identify bottlenecks
      in your funnel. Iterate based on real user feedback...
    </p>
  </div>
);

export const Default: Story = {
  args: {
    title: 'Premium Content',
    description: 'Get full access to this article and 500+ methodologies with a Plus subscription.',
    ctaText: 'Get Plus for $19/month',
    secondaryText: 'Learn more about our plans',
    showIcon: true,
  },
  render: (args) => (
    <PaywallOverlay {...args}>
      <SampleContent />
    </PaywallOverlay>
  ),
};

export const CustomTitle: Story = {
  args: {
    title: 'Continue Reading',
    description: 'This article is available exclusively for Plus members. Join thousands of solopreneurs building profitable businesses.',
    ctaText: 'Start Free Trial',
    secondaryText: 'Already a member? Sign in',
    showIcon: true,
  },
  render: (args) => (
    <PaywallOverlay {...args}>
      <SampleContent />
    </PaywallOverlay>
  ),
};

export const NoIcon: Story = {
  args: {
    title: 'Unlock Full Article',
    description: 'Get access to step-by-step guides, templates, and real examples.',
    ctaText: 'Subscribe Now',
    showIcon: false,
  },
  render: (args) => (
    <PaywallOverlay {...args}>
      <SampleContent />
    </PaywallOverlay>
  ),
};

export const WithCustomIcon: Story = {
  args: {
    title: 'Members Only',
    description: 'This content is reserved for our premium members.',
    ctaText: 'Become a Member',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ),
  },
  render: (args) => (
    <PaywallOverlay {...args}>
      <SampleContent />
    </PaywallOverlay>
  ),
};

export const ProPlan: Story = {
  args: {
    title: 'Pro Content',
    description: 'This methodology is available with a Pro subscription. Get commercial usage rights and advanced features.',
    ctaText: 'Upgrade to Pro - $35/month',
    secondaryText: 'Compare plans',
    showIcon: true,
  },
  render: (args) => (
    <PaywallOverlay {...args}>
      <SampleContent />
    </PaywallOverlay>
  ),
};
