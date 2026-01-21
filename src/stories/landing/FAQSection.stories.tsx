import type { Meta, StoryObj } from '@storybook/react';
import FAQSection from '../../components/landing/FAQSection';
import '../../components/landing/FAQSection.css';

const meta: Meta<typeof FAQSection> = {
  title: 'FAION/Landing/FAQSection',
  component: FAQSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
FAQ accordion section for landing pages.

## Features
- Native HTML details/summary for accessibility
- Smooth chevron animation on open/close
- Card-style FAQ items
- Two background variants

## Accessibility
Uses native HTML5 details element for built-in keyboard navigation and screen reader support.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'cream'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof FAQSection>;

const defaultFAQs = [
  {
    question: 'What is Faion Network?',
    answer: 'Faion Network is a comprehensive platform for solopreneurs that combines educational content, proven methodologies, and AI-powered development tools. It includes the Ultimate Solopreneur Guide with 502 methodologies across 15 skills.',
  },
  {
    question: 'Who is this for?',
    answer: 'Faion Network is designed for aspiring solopreneurs who want to build a $20K+/month business, active solopreneurs looking to scale, and developers who want to monetize their skills with AI-assisted development.',
  },
  {
    question: 'What are the pricing options?',
    answer: 'We offer Free, Plus ($19/mo), Pro ($35/mo), Team ($35/seat/mo), and Ultimate ($2,100/yr for 20 seats) tiers. Each tier includes different levels of access to methodologies, commercial licensing, and team features.',
  },
  {
    question: 'How is content delivered?',
    answer: 'Content is delivered via MCP (Model Context Protocol) server, which means you get real-time updates without downloading files. Simply connect your Claude Code to our MCP server and access all methodologies instantly.',
  },
  {
    question: 'Can I use this for client work?',
    answer: 'Yes! The Pro tier and above includes commercial licensing, which allows you to use our methodologies for client projects, agency work, and outsourcing.',
  },
  {
    question: 'Is there a refund policy?',
    answer: 'Yes, we offer a 14-day money-back guarantee. If youre not satisfied with the product, contact us within 14 days of purchase for a full refund.',
  },
];

export const Default: Story = {
  args: {
    eyebrow: 'FAQ',
    headline: 'Frequently Asked Questions',
    subheadline: 'Everything you need to know about Faion Network',
    items: defaultFAQs,
  },
};

export const CreamVariant: Story = {
  name: 'Cream Background',
  args: {
    headline: 'Common Questions',
    items: defaultFAQs.slice(0, 4),
    variant: 'cream',
  },
};

export const MinimalFAQ: Story = {
  name: 'Minimal (3 Items)',
  args: {
    headline: 'Quick Answers',
    items: [
      {
        question: 'How do I get started?',
        answer: 'Sign up for a free account, connect your Claude Code to our MCP server, and start exploring the methodologies.',
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards through Stripe, including Visa, Mastercard, and American Express.',
      },
      {
        question: 'Can I cancel anytime?',
        answer: 'Yes, you can cancel your subscription at any time. Your access continues until the end of your billing period.',
      },
    ],
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
    eyebrow: 'FAQ',
    headline: 'Questions & Answers',
    items: defaultFAQs.slice(0, 4),
  },
};
