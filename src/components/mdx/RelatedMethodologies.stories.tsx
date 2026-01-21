import type { Meta, StoryObj } from '@storybook/react';
import RelatedMethodologies from './RelatedMethodologies';

const meta: Meta<typeof RelatedMethodologies> = {
  title: 'MDX/RelatedMethodologies',
  component: RelatedMethodologies,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Related content links for cross-referencing methodologies within articles.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RelatedMethodologies>;

const productMethodologies = [
  {
    id: 'M-PM-001',
    title: 'MVP Planning',
    category: 'Product',
    href: '/methodology/mvp-planning',
  },
  {
    id: 'M-PM-005',
    title: 'User Story Mapping',
    category: 'Product',
    href: '/methodology/user-story-mapping',
  },
  {
    id: 'M-PM-012',
    title: 'RICE Prioritization',
    category: 'Product',
    href: '/methodology/rice-prioritization',
  },
];

const mixedMethodologies = [
  {
    id: 'M-RES-003',
    title: 'Market Research',
    category: 'Research',
    href: '/methodology/market-research',
  },
  {
    id: 'M-DEV-045',
    title: 'API Design',
    category: 'Development',
    href: '/methodology/api-design',
  },
  {
    id: 'M-MKT-012',
    title: 'GTM Strategy',
    category: 'Marketing',
    href: '/methodology/gtm-strategy',
  },
  {
    id: 'M-UX-008',
    title: 'User Research',
    category: 'UX Design',
    href: '/methodology/user-research',
  },
];

const sddMethodologies = [
  {
    id: 'M-SDD-001',
    title: 'SDD Workflow Overview',
    category: 'SDD',
    href: '/methodology/sdd-workflow-overview',
  },
  {
    id: 'M-SDD-002',
    title: 'Writing Specifications',
    category: 'SDD',
    href: '/methodology/writing-specifications',
  },
  {
    id: 'M-SDD-003',
    title: 'Design Documents',
    category: 'SDD',
    href: '/methodology/design-documents',
  },
  {
    id: 'M-SDD-004',
    title: 'Implementation Plans',
    category: 'SDD',
    href: '/methodology/implementation-plans',
  },
  {
    id: 'M-SDD-005',
    title: 'Task Execution',
    category: 'SDD',
    href: '/methodology/task-execution',
  },
];

export const Default: Story = {
  args: {
    methodologies: productMethodologies,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const MixedCategories: Story = {
  args: {
    methodologies: mixedMethodologies,
    title: 'Explore Related Topics',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const SDDSeries: Story = {
  args: {
    methodologies: sddMethodologies,
    title: 'SDD Methodology Series',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithoutLinks: Story = {
  args: {
    methodologies: productMethodologies.map(({ id, title, category }) => ({
      id,
      title,
      category,
    })),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const InArticle: Story = {
  render: () => (
    <article style={{ maxWidth: '700px', fontFamily: 'Inter, sans-serif' }}>
      <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '28px', marginBottom: '16px', color: '#1C1C1E' }}>
        Building Your First MVP
      </h2>
      <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#4A4A4A', marginBottom: '24px' }}>
        The MVP (Minimum Viable Product) approach allows you to test your core hypothesis
        with minimal investment. This methodology guide will walk you through the process
        step by step.
      </p>
      <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#4A4A4A', marginBottom: '24px' }}>
        Before diving in, make sure you have completed your market research and have a clear
        understanding of your target users.
      </p>

      <RelatedMethodologies
        methodologies={[
          { id: 'M-RES-003', title: 'Market Research', category: 'Research', href: '#' },
          { id: 'M-PM-005', title: 'User Story Mapping', category: 'Product', href: '#' },
          { id: 'M-UX-001', title: 'User Personas', category: 'UX Design', href: '#' },
        ]}
        title="Prerequisites"
      />

      <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#4A4A4A', marginTop: '24px' }}>
        Once you have completed the MVP, continue with these methodologies to iterate
        and improve your product.
      </p>
    </article>
  ),
};
