import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import CategoryFilter, { CategoryOption } from './CategoryFilter';

const meta: Meta<typeof CategoryFilter> = {
  title: 'Content/CategoryFilter',
  component: CategoryFilter,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Horizontal scrollable category filter pills for filtering content.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    multiSelect: {
      control: 'boolean',
      description: 'Allow multiple selection',
    },
    showAll: {
      control: 'boolean',
      description: 'Show "All" option',
    },
    showCounts: {
      control: 'boolean',
      description: 'Show item counts',
    },
    compact: {
      control: 'boolean',
      description: 'Compact variant',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CategoryFilter>;

const sampleCategories: CategoryOption[] = [
  { id: 'sdd', name: 'SDD', count: 17 },
  { id: 'development', name: 'Development', count: 106 },
  { id: 'devops', name: 'DevOps', count: 26 },
  { id: 'ai', name: 'AI/ML', count: 42 },
  { id: 'product', name: 'Product', count: 33 },
  { id: 'marketing', name: 'Marketing', count: 86 },
  { id: 'research', name: 'Research', count: 32 },
  { id: 'ux', name: 'UX/UI', count: 75 },
];

export const Default: Story = {
  args: {
    categories: sampleCategories,
    selected: '',
    showAll: true,
    showCounts: false,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '800px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithCounts: Story = {
  args: {
    categories: sampleCategories,
    selected: '',
    showAll: true,
    showCounts: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '800px' }}>
        <Story />
      </div>
    ),
  ],
};

export const SingleSelected: Story = {
  args: {
    categories: sampleCategories,
    selected: 'development',
    showAll: true,
    showCounts: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '800px' }}>
        <Story />
      </div>
    ),
  ],
};

export const MultiSelect: Story = {
  args: {
    categories: sampleCategories,
    selected: ['sdd', 'development'],
    multiSelect: true,
    showAll: true,
    showCounts: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '800px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Compact: Story = {
  args: {
    categories: sampleCategories,
    selected: 'ai',
    showAll: true,
    showCounts: true,
    compact: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '800px' }}>
        <Story />
      </div>
    ),
  ],
};

export const NoAllOption: Story = {
  args: {
    categories: sampleCategories,
    selected: 'sdd',
    showAll: false,
    showCounts: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '800px' }}>
        <Story />
      </div>
    ),
  ],
};

// Interactive controlled example
const ControlledCategoryFilter = () => {
  const [selected, setSelected] = useState('');

  return (
    <div style={{ maxWidth: '800px' }}>
      <CategoryFilter
        categories={sampleCategories}
        selected={selected}
        onChange={(val) => setSelected(val as string)}
        showAll={true}
        showCounts={true}
      />
      <p style={{
        marginTop: '16px',
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        color: '#4A4A4A'
      }}>
        Selected: {selected || 'All'}
      </p>
    </div>
  );
};

export const Controlled: Story = {
  render: () => <ControlledCategoryFilter />,
};

// Multi-select controlled example
const MultiSelectControlled = () => {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <div style={{ maxWidth: '800px' }}>
      <CategoryFilter
        categories={sampleCategories}
        selected={selected}
        onChange={(val) => setSelected(val as string[])}
        multiSelect={true}
        showAll={true}
        showCounts={true}
      />
      <p style={{
        marginTop: '16px',
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        color: '#4A4A4A'
      }}>
        Selected: {selected.length > 0 ? selected.join(', ') : 'All'}
      </p>
    </div>
  );
};

export const ControlledMultiSelect: Story = {
  render: () => <MultiSelectControlled />,
};

export const InContentPage: Story = {
  render: () => (
    <div style={{ maxWidth: '1000px' }}>
      <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '32px', marginBottom: '8px', color: '#1C1C1E' }}>
        All Methodologies
      </h1>
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#4A4A4A', marginBottom: '24px' }}>
        Browse 502 methodologies across 15 skills.
      </p>
      <CategoryFilter
        categories={sampleCategories}
        selected=""
        showAll={true}
        showCounts={true}
      />
      <div style={{
        marginTop: '24px',
        padding: '48px',
        background: '#FAF9F6',
        borderRadius: '8px',
        textAlign: 'center',
        fontFamily: 'Inter, sans-serif',
        color: '#4A4A4A'
      }}>
        Methodology cards would appear here
      </div>
    </div>
  ),
};

export const ManyCategories: Story = {
  args: {
    categories: [
      ...sampleCategories,
      { id: 'pm', name: 'Project Management', count: 46 },
      { id: 'ba', name: 'Business Analysis', count: 24 },
      { id: 'hr', name: 'HR/Recruiting', count: 5 },
      { id: 'comm', name: 'Communication', count: 10 },
    ],
    selected: '',
    showAll: true,
    showCounts: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};
