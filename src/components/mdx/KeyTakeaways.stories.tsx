import type { Meta, StoryObj } from '@storybook/react';
import KeyTakeaways from './KeyTakeaways';

const meta: Meta<typeof KeyTakeaways> = {
  title: 'MDX/KeyTakeaways',
  component: KeyTakeaways,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'MDX component for displaying key takeaways with bullet points.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Title text',
    },
    compact: {
      control: 'boolean',
      description: 'Compact variant',
    },
  },
};

export default meta;
type Story = StoryObj<typeof KeyTakeaways>;

export const Default: Story = {
  args: {
    title: 'Key Takeaways',
    takeaways: [
      'SDD provides a structured approach to development',
      'Specifications define what to build, design docs explain how',
      'Quality gates ensure consistent delivery',
      'AI agents accelerate the implementation process',
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '640px' }}>
        <Story />
      </div>
    ),
  ],
};

export const CustomTitle: Story = {
  args: {
    title: 'What You Will Learn',
    takeaways: [
      'How to find profitable niches in existing markets',
      'Techniques for validating ideas without building',
      'Steps to launch your first MVP in 2 weeks',
      'Strategies for reaching $20K monthly revenue',
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '640px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Compact: Story = {
  args: {
    title: 'Quick Summary',
    takeaways: [
      'Start small, iterate fast',
      'Focus on one core feature',
      'Launch before it is perfect',
    ],
    compact: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '480px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithChildren: Story = {
  args: {
    title: 'In This Article',
  },
  render: (args) => (
    <div style={{ maxWidth: '640px' }}>
      <KeyTakeaways {...args}>
        <ul className="fn-key-takeaways__list">
          <li className="fn-key-takeaways__item">
            <span className="fn-key-takeaways__bullet">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <span><strong>Section 1:</strong> Understanding the problem space</span>
          </li>
          <li className="fn-key-takeaways__item">
            <span className="fn-key-takeaways__bullet">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <span><strong>Section 2:</strong> Designing the solution</span>
          </li>
          <li className="fn-key-takeaways__item">
            <span className="fn-key-takeaways__bullet">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <span><strong>Section 3:</strong> Implementation guide</span>
          </li>
        </ul>
      </KeyTakeaways>
    </div>
  ),
};

export const InArticle: Story = {
  render: () => (
    <div style={{ maxWidth: '720px', fontFamily: 'Inter, sans-serif' }}>
      <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '32px', marginBottom: '16px', color: '#1C1C1E' }}>
        How to Build a Solo Business
      </h1>
      <p style={{ color: '#4A4A4A', lineHeight: 1.7, marginBottom: '24px' }}>
        Building a successful solo business requires a systematic approach. In this comprehensive
        guide, we will explore the proven methodologies.
      </p>

      <KeyTakeaways
        takeaways={[
          'Solo businesses can generate $20K+ monthly revenue',
          'The SDD methodology provides a clear framework',
          'AI tools accelerate development by 10x',
          'Start while still employed to reduce risk',
        ]}
      />

      <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '24px', marginTop: '32px', marginBottom: '12px', color: '#1C1C1E' }}>
        Introduction
      </h2>
      <p style={{ color: '#4A4A4A', lineHeight: 1.7 }}>
        The dream of building a profitable solo business is more achievable than ever.
        With the right methodology and tools, you can create sustainable income...
      </p>
    </div>
  ),
};

export const ManyPoints: Story = {
  args: {
    title: 'Chapter Summary',
    takeaways: [
      'Understand your target audience deeply before building',
      'Use the Mom Test methodology to validate ideas',
      'Start with a Minimum Viable Product (MVP)',
      'Launch early and iterate based on feedback',
      'Focus on one acquisition channel initially',
      'Build systems for recurring revenue',
      'Automate repetitive tasks with AI',
      'Track metrics religiously',
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '640px' }}>
        <Story />
      </div>
    ),
  ],
};
