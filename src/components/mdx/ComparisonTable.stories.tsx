import type { Meta, StoryObj } from '@storybook/react';
import ComparisonTable from './ComparisonTable';

const meta: Meta<typeof ComparisonTable> = {
  title: 'MDX/ComparisonTable',
  component: ComparisonTable,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Feature comparison table for plans, products, or feature matrices.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ComparisonTable>;

const pricingHeaders = ['Free', 'Plus', 'Pro', 'Team'];

const pricingRows = [
  { feature: 'Methodology Access', values: ['30%', 'Full', 'Full', 'Full'] },
  { feature: 'MCP Connections', values: ['1', '1', '1', '5+'] },
  { feature: 'Commercial Use', values: [false, true, true, true] },
  { feature: 'SSO Authentication', values: [false, false, true, true] },
  { feature: 'Team Management', values: [false, false, false, true] },
  { feature: 'Priority Support', values: [false, false, true, true] },
];

const frameworkHeaders = ['React', 'Vue', 'Angular', 'Svelte'];

const frameworkRows = [
  { feature: 'Learning Curve', values: ['Medium', 'Easy', 'Steep', 'Easy'] },
  { feature: 'TypeScript Support', values: [true, true, true, true] },
  { feature: 'Virtual DOM', values: [true, true, false, false] },
  { feature: 'Built-in Routing', values: [false, false, true, true] },
  { feature: 'State Management', values: ['External', 'External', 'Built-in', 'Built-in'] },
  { feature: 'Community Size', values: ['Large', 'Large', 'Medium', 'Growing'] },
];

export const Default: Story = {
  args: {
    headers: pricingHeaders,
    rows: pricingRows,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '800px' }}>
        <Story />
      </div>
    ),
  ],
};

export const FrameworkComparison: Story = {
  args: {
    headers: frameworkHeaders,
    rows: frameworkRows,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '800px' }}>
        <Story />
      </div>
    ),
  ],
};

export const SimpleComparison: Story = {
  args: {
    headers: ['Option A', 'Option B'],
    rows: [
      { feature: 'Price', values: ['$99', '$199'] },
      { feature: 'Storage', values: ['10 GB', '100 GB'] },
      { feature: 'Support', values: [true, true] },
      { feature: 'Custom Domain', values: [false, true] },
      { feature: 'Analytics', values: [false, true] },
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

export const InArticle: Story = {
  render: () => (
    <article style={{ maxWidth: '800px', fontFamily: 'Inter, sans-serif' }}>
      <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '28px', marginBottom: '16px', color: '#1C1C1E' }}>
        Choosing the Right Plan
      </h2>
      <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#4A4A4A', marginBottom: '24px' }}>
        Compare our subscription tiers to find the plan that best fits your needs.
        All plans include access to the core methodology library.
      </p>

      <ComparisonTable headers={pricingHeaders} rows={pricingRows} />

      <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#4A4A4A', marginTop: '24px' }}>
        Not sure which plan is right for you? Start with Free to explore the basics,
        then upgrade as your needs grow.
      </p>
    </article>
  ),
};
