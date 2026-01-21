import type { Meta, StoryObj } from '@storybook/react';
import CategoryBadge, { CategoryType } from './CategoryBadge';

const meta: Meta<typeof CategoryBadge> = {
  title: 'Content/CategoryBadge',
  component: CategoryBadge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Color-coded category badge for content items.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['product', 'business', 'marketing', 'development', 'devops', 'design', 'ai', 'methodology', 'tool', 'case-study', 'guide', 'research', 'project', 'sdd', 'default'],
      description: 'Category type for color',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size variant',
    },
    clickable: {
      control: 'boolean',
      description: 'Whether badge is clickable',
    },
    showIcon: {
      control: 'boolean',
      description: 'Show category icon',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CategoryBadge>;

export const Default: Story = {
  args: {
    name: 'Development',
    type: 'development',
    size: 'medium',
  },
};

export const AllCategories: Story = {
  render: () => {
    const categories: { name: string; type: CategoryType }[] = [
      { name: 'Product', type: 'product' },
      { name: 'Business', type: 'business' },
      { name: 'Marketing', type: 'marketing' },
      { name: 'Development', type: 'development' },
      { name: 'DevOps', type: 'devops' },
      { name: 'Design', type: 'design' },
      { name: 'AI/ML', type: 'ai' },
      { name: 'Methodology', type: 'methodology' },
      { name: 'Tool', type: 'tool' },
      { name: 'Case Study', type: 'case-study' },
      { name: 'Guide', type: 'guide' },
      { name: 'Research', type: 'research' },
      { name: 'Project', type: 'project' },
      { name: 'SDD', type: 'sdd' },
      { name: 'Other', type: 'default' },
    ];

    return (
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', maxWidth: '600px' }}>
        {categories.map((cat) => (
          <CategoryBadge key={cat.type} name={cat.name} type={cat.type} />
        ))}
      </div>
    );
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <CategoryBadge name="Small" type="development" size="small" />
      <CategoryBadge name="Medium" type="development" size="medium" />
      <CategoryBadge name="Large" type="development" size="large" />
    </div>
  ),
};

export const Clickable: Story = {
  args: {
    name: 'Development',
    type: 'development',
    clickable: true,
    onClick: () => alert('Clicked!'),
  },
};

export const WithLink: Story = {
  args: {
    name: 'AI/ML',
    type: 'ai',
    href: '#ai-ml',
  },
};

export const WithIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <CategoryBadge name="Development" type="development" showIcon />
      <CategoryBadge name="AI/ML" type="ai" showIcon />
      <CategoryBadge name="Methodology" type="methodology" showIcon />
      <CategoryBadge name="Product" type="product" showIcon />
    </div>
  ),
};

export const InArticleCard: Story = {
  render: () => (
    <div style={{
      padding: '20px',
      background: '#FFFFFF',
      border: '1px solid #E5E5E0',
      borderRadius: '8px',
      maxWidth: '360px'
    }}>
      <div style={{ marginBottom: '12px' }}>
        <CategoryBadge name="SDD" type="sdd" size="small" />
      </div>
      <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '18px', marginBottom: '8px', color: '#1C1C1E' }}>
        SDD Workflow Overview
      </h3>
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#4A4A4A', lineHeight: 1.5 }}>
        Learn the complete Specification-Driven Development workflow from idea to implementation.
      </p>
    </div>
  ),
};

export const MultipleBadges: Story = {
  render: () => (
    <div style={{
      padding: '20px',
      background: '#FFFFFF',
      border: '1px solid #E5E5E0',
      borderRadius: '8px',
      maxWidth: '400px'
    }}>
      <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '18px', marginBottom: '12px', color: '#1C1C1E' }}>
        Building a RAG Pipeline
      </h3>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
        <CategoryBadge name="AI/ML" type="ai" size="small" />
        <CategoryBadge name="Development" type="development" size="small" />
        <CategoryBadge name="Guide" type="guide" size="small" />
      </div>
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#4A4A4A', lineHeight: 1.5 }}>
        Step-by-step guide to building production-ready RAG systems with vector databases.
      </p>
    </div>
  ),
};

export const CustomIcon: Story = {
  args: {
    name: 'Custom',
    type: 'default',
    showIcon: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ),
  },
};
