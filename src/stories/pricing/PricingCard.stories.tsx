import type { Meta, StoryObj } from '@storybook/react';
import PricingCard from '../../components/pricing/PricingCard';
import '../../components/pricing/PricingCard.css';

const meta: Meta<typeof PricingCard> = {
  title: 'FAION/Pricing/PricingCard',
  component: PricingCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Individual pricing plan card.

## Features
- Plan name and description
- Price display with optional original price
- Primary and secondary CTA variants
- Feature list with included/excluded states
- Recommended badge support

## Variants
- Default: Secondary CTA button
- Recommended: Primary CTA button with badge
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    recommended: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onCtaClick: { action: 'cta-click' },
  },
};

export default meta;
type Story = StoryObj<typeof PricingCard>;

const plusFeatures = [
  { text: 'Full methodology access', included: true },
  { text: 'All agents and skills', included: true },
  { text: 'Personal use license', included: true },
  { text: '1 MCP connection', included: true },
  { text: 'Commercial use', included: false },
  { text: 'Team management', included: false },
];

const proFeatures = [
  { text: 'Full methodology access', included: true },
  { text: 'All agents and skills', included: true },
  { text: 'Commercial use license', included: true },
  { text: 'SSO authentication', included: true },
  { text: '1 MCP connection', included: true },
  { text: 'Team management', included: false },
];

export const Default: Story = {
  args: {
    name: 'Plus',
    description: 'For solopreneurs and aspiring entrepreneurs',
    price: '$19',
    period: '/month',
    features: plusFeatures,
    ctaText: 'Get Started',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Recommended: Story = {
  args: {
    name: 'Pro',
    description: 'For freelancers and agencies',
    price: '$35',
    period: '/month',
    features: proFeatures,
    ctaText: 'Start Free Trial',
    recommended: true,
    recommendedText: 'Most Popular',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '320px', paddingTop: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithDiscount: Story = {
  name: 'With Discount',
  args: {
    name: 'Pro Annual',
    description: 'Best value for professionals',
    price: '$29',
    originalPrice: '$35',
    period: '/month',
    features: proFeatures,
    ctaText: 'Save 17%',
    recommended: true,
    recommendedText: 'Best Value',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '320px', paddingTop: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

export const FreeTier: Story = {
  name: 'Free Tier',
  args: {
    name: 'Free',
    description: 'For evaluation and non-commercial use',
    price: '$0',
    period: '/forever',
    features: [
      { text: 'Limited methodology access (30%)', included: true },
      { text: 'Non-commercial use only', included: true },
      { text: '1 MCP connection', included: true },
      { text: 'Full methodology access', included: false },
      { text: 'Commercial use', included: false },
    ],
    ctaText: 'Start Free',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

export const PricingComparison: Story = {
  name: 'Pricing Comparison',
  render: () => (
    <div style={{ display: 'flex', gap: '24px', padding: '20px' }}>
      <div style={{ width: '300px' }}>
        <PricingCard
          name="Free"
          description="For evaluation"
          price="$0"
          period="/forever"
          features={[
            { text: '30% methodology access', included: true },
            { text: 'Non-commercial only', included: true },
            { text: 'Commercial use', included: false },
          ]}
          ctaText="Start Free"
        />
      </div>
      <div style={{ width: '300px' }}>
        <PricingCard
          name="Plus"
          description="For solopreneurs"
          price="$19"
          period="/month"
          features={[
            { text: 'Full methodology access', included: true },
            { text: 'Personal use license', included: true },
            { text: 'Commercial use', included: false },
          ]}
          ctaText="Get Started"
        />
      </div>
      <div style={{ width: '300px' }}>
        <PricingCard
          name="Pro"
          description="For professionals"
          price="$35"
          period="/month"
          features={[
            { text: 'Full methodology access', included: true },
            { text: 'Commercial license', included: true },
            { text: 'SSO authentication', included: true },
          ]}
          ctaText="Start Trial"
          recommended
        />
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
