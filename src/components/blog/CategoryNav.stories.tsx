import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CategoryNav from './CategoryNav';

const meta: Meta<typeof CategoryNav> = {
  title: 'Blog/CategoryNav',
  component: CategoryNav,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Category filter navigation with post counts for blog listing pages.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CategoryNav>;

const sampleCategories = [
  { id: 'product', name: 'Product', count: 15 },
  { id: 'sdd', name: 'SDD', count: 12 },
  { id: 'marketing', name: 'Marketing', count: 8 },
  { id: 'ai-ml', name: 'AI/ML', count: 20 },
  { id: 'development', name: 'Development', count: 35 },
  { id: 'devops', name: 'DevOps', count: 10 },
];

export const Default: Story = {
  args: {
    categories: sampleCategories,
    onChange: (id) => console.log('Selected category:', id),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '800px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithActiveCategory: Story = {
  args: {
    categories: sampleCategories,
    activeCategory: 'ai-ml',
    onChange: (id) => console.log('Selected category:', id),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '800px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithoutAll: Story = {
  args: {
    categories: sampleCategories,
    showAll: false,
    onChange: (id) => console.log('Selected category:', id),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '800px' }}>
        <Story />
      </div>
    ),
  ],
};

export const FewCategories: Story = {
  args: {
    categories: sampleCategories.slice(0, 3),
    onChange: (id) => console.log('Selected category:', id),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Interactive: Story = {
  render: function InteractiveCategoryNav() {
    const [activeCategory, setActiveCategory] = useState<string>('');

    return (
      <div style={{ maxWidth: '800px' }}>
        <CategoryNav
          categories={sampleCategories}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
          color: '#4A4A4A',
          marginTop: '16px',
        }}>
          Selected: {activeCategory || 'All'}
        </p>
      </div>
    );
  },
};
