import type { Meta, StoryObj } from '@storybook/react';
import FinalCTASection from '../../components/landing/FinalCTASection';
import '../../components/landing/FinalCTASection.css';

const meta: Meta<typeof FinalCTASection> = {
  title: 'FAION/Landing/FinalCTASection',
  component: FinalCTASection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Final call-to-action section for landing pages.

## Features
- Two variants: default (Warm Alabaster) and burgundy
- Primary and optional secondary CTA buttons
- Large, impactful headline
- Responsive layout

## Usage
Place at the bottom of landing pages before the footer as a strong closing call-to-action.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'burgundy'],
    },
    onPrimaryClick: { action: 'primary-click' },
    onSecondaryClick: { action: 'secondary-click' },
  },
};

export default meta;
type Story = StoryObj<typeof FinalCTASection>;

export const Default: Story = {
  args: {
    headline: 'Ready to Start Your Solopreneur Journey?',
    subheadline: 'Join thousands of solopreneurs who are building successful businesses with our proven methodologies.',
    primaryCta: 'Get Started Now',
    secondaryCta: 'View Pricing',
  },
};

export const BurgundyVariant: Story = {
  name: 'Burgundy Background',
  args: {
    headline: 'Start Building Today',
    subheadline: '502 methodologies, 15 skills, 1 AI agent. Everything you need to succeed as a solopreneur.',
    primaryCta: 'Start Free Trial',
    secondaryCta: 'Contact Sales',
    variant: 'burgundy',
  },
};

export const SingleCTA: Story = {
  name: 'Single CTA',
  args: {
    headline: 'Join the Waitlist',
    subheadline: 'Be the first to know when we launch. No spam, just updates.',
    primaryCta: 'Join Now',
    variant: 'default',
  },
};

export const BurgundySingleCTA: Story = {
  name: 'Burgundy Single CTA',
  args: {
    headline: 'Transform Your Business',
    subheadline: 'Learn the frameworks used by successful solopreneurs.',
    primaryCta: 'Get Access',
    variant: 'burgundy',
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
    headline: 'Ready to Start?',
    subheadline: 'Join thousands building successful businesses.',
    primaryCta: 'Get Started',
    secondaryCta: 'Learn More',
    variant: 'burgundy',
  },
};
