import type { Meta, StoryObj } from '@storybook/react';
import CredibilitySection from './CredibilitySection';

const meta: Meta<typeof CredibilitySection> = {
  title: 'Landing/CredibilitySection',
  component: CredibilitySection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Credibility section with trust badges, partner logos, and key metrics. Builds trust with subtle, professional styling.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CredibilitySection>;

// Shield icon
const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

// Star icon
const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

// Lock icon
const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

// Globe icon
const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const sampleLogos = [
  { id: '1', name: 'TechCrunch' },
  { id: '2', name: 'Forbes' },
  { id: '3', name: 'Product Hunt' },
  { id: '4', name: 'Indie Hackers' },
  { id: '5', name: 'Hacker News' },
];

const sampleBadges = [
  {
    id: '1',
    icon: <ShieldIcon />,
    text: 'Secure & Private',
    subtext: 'SOC 2 Type II',
  },
  {
    id: '2',
    icon: <StarIcon />,
    text: '4.9/5 Rating',
    subtext: '500+ reviews',
  },
  {
    id: '3',
    icon: <LockIcon />,
    text: 'GDPR Compliant',
    subtext: 'Data protection',
  },
  {
    id: '4',
    icon: <GlobeIcon />,
    text: '8 Languages',
    subtext: 'Global reach',
  },
];

const sampleMetrics = [
  { value: '502', label: 'Methodologies' },
  { value: '15', label: 'Skills' },
  { value: '2,500+', label: 'Active Users' },
  { value: '50+', label: 'Countries' },
];

/**
 * Full credibility section with all elements
 */
export const Default: Story = {
  args: {
    headline: 'Trusted by Thousands of Solopreneurs',
    asSeenInText: 'As seen in',
    logos: sampleLogos,
    badges: sampleBadges,
    metrics: sampleMetrics,
  },
};

/**
 * Logos only (As seen in)
 */
export const LogosOnly: Story = {
  args: {
    asSeenInText: 'Featured in',
    logos: sampleLogos,
  },
};

/**
 * Metrics only
 */
export const MetricsOnly: Story = {
  args: {
    headline: 'The Numbers Speak',
    metrics: sampleMetrics,
  },
};

/**
 * Trust badges only
 */
export const BadgesOnly: Story = {
  args: {
    headline: 'Built for Trust',
    badges: sampleBadges,
  },
};

/**
 * Minimal variant
 */
export const Minimal: Story = {
  args: {
    asSeenInText: 'Trusted by teams at',
    logos: sampleLogos,
    variant: 'minimal',
  },
};

/**
 * Centered variant
 */
export const Centered: Story = {
  args: {
    headline: 'Join Our Community',
    metrics: [
      { value: '10K+', label: 'Email Subscribers' },
      { value: '98%', label: 'Satisfaction Rate' },
      { value: '24/7', label: 'Support' },
    ],
    variant: 'centered',
  },
};

/**
 * With headline and logos
 */
export const WithHeadline: Story = {
  args: {
    headline: 'Used by Solopreneurs Building the Future',
    asSeenInText: 'Featured in leading publications',
    logos: sampleLogos,
  },
};
