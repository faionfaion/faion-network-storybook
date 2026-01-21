import type { Meta, StoryObj } from '@storybook/react';
import PaywallCTA from './PaywallCTA';

const meta: Meta<typeof PaywallCTA> = {
  title: 'Paywall/PaywallCTA',
  component: PaywallCTA,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'CTA component for paywall prompts with compelling message, pricing, and action button.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    headline: {
      control: 'text',
      description: 'Compelling headline',
    },
    valueProp: {
      control: 'text',
      description: 'Brief value proposition',
    },
    price: {
      control: 'text',
      description: 'Price amount',
    },
    period: {
      control: 'text',
      description: 'Price period',
    },
    ctaText: {
      control: 'text',
      description: 'Primary CTA button text',
    },
    highlighted: {
      control: 'boolean',
      description: 'Highlighted style',
    },
  },
};

export default meta;
type Story = StoryObj<typeof PaywallCTA>;

export const Default: Story = {
  args: {
    headline: 'Unlock Premium Content',
    valueProp: 'Get access to 500+ methodologies, templates, and step-by-step guides.',
    price: '$19',
    period: '/month',
    ctaText: 'Get Started',
    secondaryText: 'See all plans',
    showIcon: true,
  },
};

export const WithFeatures: Story = {
  args: {
    headline: 'Get Plus Access',
    valueProp: 'Everything you need to build a successful solo business.',
    price: '$19',
    period: '/month',
    features: [
      { text: '500+ methodologies across 15 skills' },
      { text: 'Step-by-step implementation guides' },
      { text: 'Real-world templates and checklists' },
      { text: 'AI-powered development framework' },
    ],
    ctaText: 'Start Free Trial',
    secondaryText: 'No credit card required',
    showIcon: true,
  },
};

export const WithDiscount: Story = {
  args: {
    headline: 'Limited Time Offer',
    valueProp: 'Get 20% off your first year of Plus.',
    price: '$15.20',
    period: '/month',
    originalPrice: '$19',
    badge: 'Save 20%',
    features: [
      { text: 'Full methodology access' },
      { text: 'All AI agents and skills' },
      { text: 'Priority updates' },
    ],
    ctaText: 'Claim Discount',
    secondaryText: 'Offer ends soon',
    highlighted: true,
  },
};

export const ProPlan: Story = {
  args: {
    headline: 'Go Pro',
    valueProp: 'Commercial usage rights for freelancers and agencies.',
    price: '$35',
    period: '/month',
    features: [
      { text: 'Everything in Plus' },
      { text: 'Commercial usage license' },
      { text: 'Client project rights' },
      { text: 'SSO authentication' },
    ],
    ctaText: 'Upgrade to Pro',
    secondaryText: 'Compare Plus vs Pro',
    showIcon: true,
  },
};

export const AnnualBilling: Story = {
  args: {
    headline: 'Save with Annual',
    valueProp: 'Get 2 months free when you pay annually.',
    price: '$190',
    period: '/year',
    originalPrice: '$228',
    badge: '2 Months Free',
    features: [
      { text: 'Same great features' },
      { text: 'Billed once per year' },
      { text: 'Cancel anytime' },
    ],
    ctaText: 'Get Annual Plan',
    secondaryText: 'Or pay monthly at $19/mo',
    highlighted: true,
  },
};

export const MinimalStyle: Story = {
  args: {
    headline: 'Continue Reading',
    valueProp: 'Subscribe to access this article.',
    price: '$19',
    period: '/month',
    ctaText: 'Subscribe Now',
    showIcon: false,
    secondaryText: '',
  },
};

export const NoPrice: Story = {
  args: {
    headline: 'Free Account Required',
    valueProp: 'Create a free account to continue reading this article.',
    price: 'Free',
    period: '',
    ctaText: 'Create Free Account',
    secondaryText: 'Already have an account? Sign in',
    showIcon: true,
  },
};
