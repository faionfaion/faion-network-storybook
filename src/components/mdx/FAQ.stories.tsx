import type { Meta, StoryObj } from '@storybook/react';
import FAQ from './FAQ';

const meta: Meta<typeof FAQ> = {
  title: 'MDX/FAQ',
  component: FAQ,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Frequently Asked Questions accordion with optional JSON-LD schema markup for SEO.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    schemaMarkup: {
      control: 'boolean',
      description: 'Enable JSON-LD schema markup for SEO',
    },
  },
};

export default meta;
type Story = StoryObj<typeof FAQ>;

const basicFAQs = [
  {
    question: 'What is Faion Network?',
    answer: 'Faion Network is a comprehensive platform for solopreneurs that combines educational content with an AI development framework. It includes 502 methodologies across 15 skills, designed to help you build and scale your business.',
  },
  {
    question: 'How much does it cost?',
    answer: 'We offer several pricing tiers: Free (limited access), Plus ($19/month for personal use), Pro ($35/month for commercial use), and Team ($35/seat/month for organizations).',
  },
  {
    question: 'What is SDD?',
    answer: 'SDD (Specification-Driven Development) is our methodology that emphasizes clear documentation before implementation. It helps you build products systematically with reduced rework and improved quality.',
  },
  {
    question: 'How do I access the AI agents and skills?',
    answer: 'Our content is delivered via MCP (Model Context Protocol) server. After subscribing, you configure your Claude Code to connect to mcp.faion.net with your license key.',
  },
];

const technicalFAQs = [
  {
    question: 'What technologies do you cover?',
    answer: 'We cover a wide range including Python, JavaScript/TypeScript, React, Django, FastAPI, Docker, Kubernetes, AWS/GCP, and AI/ML tools like LangChain and vector databases.',
  },
  {
    question: 'Can I use the framework for client work?',
    answer: 'Yes, with our Pro or Team plans. The Plus plan is for personal projects only, while Pro and Team allow commercial use including client projects and agency work.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes! Our Free tier gives you 30% access to methodologies, allowing you to evaluate the content before subscribing. No credit card required to start.',
  },
];

export const Default: Story = {
  args: {
    items: basicFAQs,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '700px' }}>
        <Story />
      </div>
    ),
  ],
};

export const TechnicalFAQs: Story = {
  args: {
    items: technicalFAQs,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '700px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithoutSchemaMarkup: Story = {
  args: {
    items: basicFAQs,
    schemaMarkup: false,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '700px' }}>
        <Story />
      </div>
    ),
  ],
};

export const SingleItem: Story = {
  args: {
    items: [
      {
        question: 'What is the refund policy?',
        answer: 'We offer a 30-day money-back guarantee. If you are not satisfied with your subscription, contact us within 30 days for a full refund.',
      },
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '700px' }}>
        <Story />
      </div>
    ),
  ],
};

export const InArticle: Story = {
  render: () => (
    <article style={{ maxWidth: '700px', fontFamily: 'Inter, sans-serif' }}>
      <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '28px', marginBottom: '16px', color: '#1C1C1E' }}>
        Frequently Asked Questions
      </h2>
      <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#4A4A4A', marginBottom: '24px' }}>
        Have questions? We have got answers. If you cannot find what you are looking for,
        reach out to our support team.
      </p>

      <FAQ items={basicFAQs} />

      <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#4A4A4A', marginTop: '24px' }}>
        Still have questions? Email us at support@faion.net.
      </p>
    </article>
  ),
};
