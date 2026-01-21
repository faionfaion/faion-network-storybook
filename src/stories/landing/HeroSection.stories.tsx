import type { Meta, StoryObj } from '@storybook/react';
import HeroSection from '../../components/landing/HeroSection';
import '../../components/landing/HeroSection.css';

const meta: Meta<typeof HeroSection> = {
  title: 'FAION/Landing/HeroSection',
  component: HeroSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Landing page hero section following the "Digital Journal" theme.

## Features
- Full-width Warm Alabaster background
- Serif headline with sans-serif subheadline
- Primary (Deep Burgundy) and secondary CTAs
- Social proof with avatars
- Key statistics display

## Props
- **headline**: Main headline (supports ReactNode for emphasis)
- **subheadline**: Supporting text
- **primaryCta/secondaryCta**: Button text
- **avatars**: Social proof avatars
- **stats**: Key statistics to display
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    primaryCta: { control: 'text' },
    secondaryCta: { control: 'text' },
    onPrimaryClick: { action: 'primary-click' },
    onSecondaryClick: { action: 'secondary-click' },
  },
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {
  args: {
    headline: (
      <>
        The Ultimate Solopreneur Guide<br />
        <span style={{ color: '#5D1F2D' }}>+SDD Framework</span>
      </>
    ),
    subheadline: 'One person can earn $20K+/month working for themselves. We will show you how to find your niche, start while employed, and reach full income in 18-24 months.',
    primaryCta: 'Get Started',
    secondaryCta: 'Learn More',
    avatars: [
      { initials: 'JW', alt: 'Justin Welsh' },
      { initials: 'DK', alt: 'Dan Koe' },
      { initials: 'SA', alt: 'Sahil A' },
      { initials: 'TF', alt: 'Tim Ferriss' },
    ],
    socialProofText: 'Join 5,000+ solopreneurs already learning',
    stats: [
      { value: '502', label: 'Methodologies' },
      { value: '15', label: 'Skills' },
      { value: '$20K+', label: 'Target Income' },
    ],
  },
};

export const Minimal: Story = {
  name: 'Minimal (No Stats)',
  args: {
    headline: 'Build Your Solo Business',
    subheadline: 'Learn the frameworks and methodologies used by successful solopreneurs.',
    primaryCta: 'Start Free',
  },
};

export const WithoutSocialProof: Story = {
  name: 'Without Social Proof',
  args: {
    headline: (
      <>
        502 Proven Methodologies<br />
        for Solopreneurs
      </>
    ),
    subheadline: 'From idea validation to scaling your business. Everything you need in one framework.',
    primaryCta: 'Explore Methodologies',
    secondaryCta: 'View Pricing',
    stats: [
      { value: '15', label: 'Skills' },
      { value: '502', label: 'Methodologies' },
      { value: '1', label: 'AI Agent' },
    ],
  },
};

export const ProductLaunch: Story = {
  name: 'Product Launch Style',
  args: {
    headline: (
      <>
        Introducing Faion Network<br />
        <span style={{ color: '#5D1F2D' }}>AI-Powered Development</span>
      </>
    ),
    subheadline: 'The complete framework for building products with AI. From specification to deployment.',
    primaryCta: 'Join Waitlist',
    secondaryCta: 'Watch Demo',
    avatars: [
      { initials: 'A', alt: 'User A' },
      { initials: 'B', alt: 'User B' },
      { initials: 'C', alt: 'User C' },
      { initials: 'D', alt: 'User D' },
      { initials: 'E', alt: 'User E' },
    ],
    socialProofText: '2,847 developers on the waitlist',
  },
};

export const MobileView: Story = {
  name: 'Mobile View',
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  args: {
    headline: 'The Ultimate Solopreneur Guide',
    subheadline: 'Learn how to build a $20K+/month solo business.',
    primaryCta: 'Get Started',
    secondaryCta: 'Learn More',
    stats: [
      { value: '502', label: 'Methodologies' },
      { value: '15', label: 'Skills' },
    ],
  },
};
