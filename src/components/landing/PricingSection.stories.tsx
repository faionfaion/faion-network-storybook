import type { Meta, StoryObj } from '@storybook/react';
import PricingSection from './PricingSection';

const meta: Meta<typeof PricingSection> = {
  title: 'Landing/PricingSection',
  component: PricingSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Pricing section displaying all tiers with monthly/annual toggle. Shows Free, Plus, Pro, Team, and Ultimate plans.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PricingSection>;

const freeFeatures = [
  { text: 'MCP access (non-commercial)', included: true },
  { text: 'Limited methodologies (30%)', included: true },
  { text: '1 MCP connection', included: true },
  { text: 'Ultimate Solopreneur Guide', included: false },
  { text: 'Commercial use', included: false },
];

const plusFeatures = [
  { text: 'Full methodology access', included: true },
  { text: 'All agents and skills', included: true },
  { text: 'Ultimate Solopreneur Guide', included: true },
  { text: 'Personal use (own products)', included: true },
  { text: '1 MCP connection', included: true },
  { text: 'Commercial use', included: false },
];

const proFeatures = [
  { text: 'Everything in Plus', included: true },
  { text: 'Commercial use allowed', included: true },
  { text: 'Client projects & agency work', included: true },
  { text: 'SSO authentication', included: true },
  { text: '1 MCP connection', included: true },
];

const teamFeatures = [
  { text: 'Everything in Pro', included: true },
  { text: 'Organization dashboard', included: true },
  { text: 'Email invites for team', included: true },
  { text: 'Roles: Owner, Admin, Member', included: true },
  { text: '5+ MCP connections', included: true },
];

const ultimateFeatures = [
  { text: 'Everything in Team', included: true },
  { text: '20 MCP connections (fixed)', included: true },
  { text: '70% discount vs Team', included: true },
  { text: 'Best value for teams', included: true },
  { text: 'Priority support', included: true },
];

const allPlans = [
  {
    id: 'free',
    name: 'Free',
    description: 'For evaluation & non-commercial use',
    monthlyPrice: '$0',
    annualPrice: '$0',
    features: freeFeatures,
    ctaText: 'Start Free',
  },
  {
    id: 'plus',
    name: 'Plus',
    description: 'For solopreneurs building products',
    monthlyPrice: '$19',
    annualPrice: '$16',
    features: plusFeatures,
    ctaText: 'Get Plus',
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'For freelancers & agencies',
    monthlyPrice: '$35',
    annualPrice: '$29',
    features: proFeatures,
    ctaText: 'Get Pro',
    recommended: true,
    recommendedText: 'Most Popular',
  },
  {
    id: 'team',
    name: 'Team',
    description: 'For growing teams (5+ seats)',
    monthlyPrice: '$35',
    annualPrice: '$29',
    period: '/seat/month',
    features: teamFeatures,
    ctaText: 'Contact Sales',
  },
  {
    id: 'ultimate',
    name: 'Ultimate',
    description: 'For enterprises (20 seats)',
    monthlyPrice: '$2,100',
    annualPrice: '$2,100',
    period: '/year',
    features: ultimateFeatures,
    ctaText: 'Get Ultimate',
    badge: 'Best Value',
  },
];

/**
 * Full pricing section with 5 tiers
 */
export const Default: Story = {
  args: {
    headline: 'Choose Your Plan',
    subheadline: 'Start free, upgrade when you need more.',
    plans: allPlans,
    footerText: 'All plans include access to 502 methodologies. Need a custom plan? Contact us.',
  },
};

/**
 * Three main tiers only (simpler display)
 */
export const ThreeTiers: Story = {
  args: {
    headline: 'Simple, Transparent Pricing',
    subheadline: 'No hidden fees. Cancel anytime.',
    plans: [
      allPlans[0], // Free
      { ...allPlans[1], recommended: true, recommendedText: 'Recommended' }, // Plus
      allPlans[2], // Pro
    ],
  },
};

/**
 * Annual billing selected by default
 */
export const AnnualDefault: Story = {
  args: {
    headline: 'Save 20% with Annual Billing',
    subheadline: 'Get two months free when you pay annually.',
    plans: allPlans.slice(0, 4),
    defaultAnnual: true,
  },
};

/**
 * Without toggle (static pricing)
 */
export const WithoutToggle: Story = {
  args: {
    headline: 'Enterprise Pricing',
    subheadline: 'Volume discounts for larger teams.',
    plans: [allPlans[3], allPlans[4]],
    hideToggle: true,
  },
};

/**
 * Minimal - single plan highlight
 */
export const SinglePlan: Story = {
  args: {
    headline: 'Get Full Access',
    subheadline: 'Everything you need to build your solopreneur business.',
    plans: [
      {
        ...allPlans[1],
        recommended: true,
        recommendedText: 'Full Access',
        description: 'Complete methodology access, all skills, ultimate guide included.',
      },
    ],
    hideToggle: true,
  },
};

/**
 * With footer CTA
 */
export const WithFooterCTA: Story = {
  args: {
    headline: 'Pricing Plans',
    subheadline: 'Find the plan that fits your needs.',
    plans: allPlans.slice(0, 3),
    footerText: (
      <>
        Need a custom enterprise solution?{' '}
        <a href="#contact" style={{ color: '#5D1F2D', textDecoration: 'underline' }}>
          Contact our sales team
        </a>
      </>
    ),
  },
};
