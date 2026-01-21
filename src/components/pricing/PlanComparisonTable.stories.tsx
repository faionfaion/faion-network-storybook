import type { Meta, StoryObj } from '@storybook/react';
import PlanComparisonTable from './PlanComparisonTable';

const meta: Meta<typeof PlanComparisonTable> = {
  title: 'Pricing/PlanComparisonTable',
  component: PlanComparisonTable,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Detailed plan comparison table showing all features across tiers with checkmarks, values, and tooltips.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PlanComparisonTable>;

const plans = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    ctaText: 'Start Free',
  },
  {
    id: 'plus',
    name: 'Plus',
    price: '$19/mo',
    ctaText: 'Get Plus',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$35/mo',
    recommended: true,
    ctaText: 'Get Pro',
  },
  {
    id: 'team',
    name: 'Team',
    price: '$35/seat',
    ctaText: 'Contact Sales',
  },
];

const categories = [
  {
    id: 'access',
    name: 'Content Access',
    features: [
      {
        id: 'methodologies',
        name: 'Methodology Access',
        description: 'Number of methodologies available',
        values: {
          free: '30%',
          plus: '100%',
          pro: '100%',
          team: '100%',
        },
      },
      {
        id: 'guide',
        name: 'Ultimate Solopreneur Guide',
        description: 'Full access to the comprehensive guide',
        values: {
          free: false,
          plus: true,
          pro: true,
          team: true,
        },
      },
      {
        id: 'skills',
        name: 'AI Skills & Agents',
        description: 'Access to all 15 skills and agents',
        values: {
          free: 'Limited',
          plus: true,
          pro: true,
          team: true,
        },
      },
    ],
  },
  {
    id: 'usage',
    name: 'Usage Rights',
    features: [
      {
        id: 'personal',
        name: 'Personal Use',
        description: 'Use for your own products and projects',
        values: {
          free: 'Non-commercial only',
          plus: true,
          pro: true,
          team: true,
        },
      },
      {
        id: 'commercial',
        name: 'Commercial Use',
        description: 'Use for client work and paid projects',
        values: {
          free: false,
          plus: false,
          pro: true,
          team: true,
        },
      },
      {
        id: 'mcp',
        name: 'MCP Connections',
        description: 'Number of simultaneous MCP connections',
        values: {
          free: '1',
          plus: '1',
          pro: '1',
          team: '5+',
        },
      },
    ],
  },
  {
    id: 'team',
    name: 'Team Features',
    features: [
      {
        id: 'sso',
        name: 'SSO Authentication',
        description: 'SAML/OIDC single sign-on',
        values: {
          free: false,
          plus: false,
          pro: true,
          team: true,
        },
      },
      {
        id: 'org',
        name: 'Organization Dashboard',
        description: 'Manage team members and permissions',
        values: {
          free: false,
          plus: false,
          pro: false,
          team: true,
        },
      },
      {
        id: 'invites',
        name: 'Email Invites',
        description: 'Invite team members via email',
        values: {
          free: false,
          plus: false,
          pro: false,
          team: true,
        },
      },
      {
        id: 'roles',
        name: 'Team Roles',
        description: 'Owner, Admin, Member roles',
        values: {
          free: false,
          plus: false,
          pro: false,
          team: true,
        },
      },
    ],
  },
  {
    id: 'support',
    name: 'Support',
    features: [
      {
        id: 'community',
        name: 'Community Access',
        values: {
          free: true,
          plus: true,
          pro: true,
          team: true,
        },
      },
      {
        id: 'email-support',
        name: 'Email Support',
        values: {
          free: false,
          plus: true,
          pro: true,
          team: true,
        },
      },
      {
        id: 'priority',
        name: 'Priority Support',
        values: {
          free: false,
          plus: false,
          pro: true,
          team: true,
        },
      },
    ],
  },
];

/**
 * Full comparison table with all plans
 */
export const Default: Story = {
  args: {
    plans,
    categories,
    showCtas: true,
    stickyHeader: true,
  },
};

/**
 * Without CTAs
 */
export const WithoutCtas: Story = {
  args: {
    plans,
    categories,
    showCtas: false,
  },
};

/**
 * Without sticky header
 */
export const NonStickyHeader: Story = {
  args: {
    plans,
    categories,
    stickyHeader: false,
  },
};

/**
 * Three plans only
 */
export const ThreePlans: Story = {
  args: {
    plans: plans.slice(0, 3),
    categories: categories.map((cat) => ({
      ...cat,
      features: cat.features.map((f) => ({
        ...f,
        values: {
          free: f.values.free,
          plus: f.values.plus,
          pro: f.values.pro,
        },
      })),
    })),
  },
};

/**
 * Minimal - single category
 */
export const SingleCategory: Story = {
  args: {
    plans: plans.slice(0, 3),
    categories: [categories[0]],
    showCtas: false,
  },
};

/**
 * In scrollable container (simulates mobile)
 */
export const InScrollableContainer: Story = {
  args: {
    plans,
    categories,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '500px', overflow: 'hidden' }}>
        <Story />
      </div>
    ),
  ],
};
