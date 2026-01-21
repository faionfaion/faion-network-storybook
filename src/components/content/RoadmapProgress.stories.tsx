import type { Meta, StoryObj } from '@storybook/react';
import RoadmapProgress from './RoadmapProgress';

const meta: Meta<typeof RoadmapProgress> = {
  title: 'Content/RoadmapProgress',
  component: RoadmapProgress,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Progress bar component for roadmap completion with step count and percentage.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    completed: {
      control: { type: 'range', min: 0, max: 10 },
      description: 'Completed steps',
    },
    total: {
      control: { type: 'range', min: 1, max: 10 },
      description: 'Total steps',
    },
    variant: {
      control: 'select',
      options: ['default', 'compact', 'large'],
      description: 'Variant',
    },
    showPercentage: {
      control: 'boolean',
      description: 'Show percentage',
    },
    showCount: {
      control: 'boolean',
      description: 'Show step count',
    },
    showMarkers: {
      control: 'boolean',
      description: 'Show step markers',
    },
  },
};

export default meta;
type Story = StoryObj<typeof RoadmapProgress>;

export const Default: Story = {
  args: {
    completed: 3,
    total: 7,
    label: 'Progress',
    showCount: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithPercentage: Story = {
  args: {
    completed: 5,
    total: 8,
    label: 'Progress',
    showCount: true,
    showPercentage: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithMarkers: Story = {
  args: {
    completed: 4,
    total: 7,
    label: 'Progress',
    showCount: true,
    showMarkers: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Compact: Story = {
  args: {
    completed: 3,
    total: 5,
    variant: 'compact',
    showPercentage: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Large: Story = {
  args: {
    completed: 6,
    total: 10,
    variant: 'large',
    label: 'Roadmap Progress',
    showCount: true,
    showPercentage: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Empty: Story = {
  args: {
    completed: 0,
    total: 5,
    label: 'Not started',
    showCount: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Complete: Story = {
  args: {
    completed: 7,
    total: 7,
    label: 'Completed',
    showCount: true,
    showPercentage: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const InRoadmapCard: Story = {
  render: () => (
    <div style={{
      padding: '24px',
      background: '#FFFFFF',
      border: '1px solid #E5E5E0',
      borderRadius: '8px',
      maxWidth: '400px'
    }}>
      <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '18px', marginBottom: '8px', color: '#1C1C1E' }}>
        SDD Fundamentals
      </h3>
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#4A4A4A', marginBottom: '16px', lineHeight: 1.5 }}>
        Learn the basics of Specification-Driven Development.
      </p>
      <RoadmapProgress
        completed={3}
        total={7}
        label="Your progress"
        showCount={true}
      />
    </div>
  ),
};

export const MultipleRoadmaps: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px' }}>
      <div style={{
        padding: '20px',
        background: '#FFFFFF',
        border: '1px solid #E5E5E0',
        borderRadius: '8px'
      }}>
        <h4 style={{ fontFamily: 'Georgia, serif', fontSize: '16px', marginBottom: '12px', color: '#1C1C1E' }}>
          Getting Started
        </h4>
        <RoadmapProgress completed={7} total={7} showCount />
      </div>

      <div style={{
        padding: '20px',
        background: '#FFFFFF',
        border: '1px solid #E5E5E0',
        borderRadius: '8px'
      }}>
        <h4 style={{ fontFamily: 'Georgia, serif', fontSize: '16px', marginBottom: '12px', color: '#1C1C1E' }}>
          Building Your First Product
        </h4>
        <RoadmapProgress completed={4} total={10} showCount />
      </div>

      <div style={{
        padding: '20px',
        background: '#FFFFFF',
        border: '1px solid #E5E5E0',
        borderRadius: '8px'
      }}>
        <h4 style={{ fontFamily: 'Georgia, serif', fontSize: '16px', marginBottom: '12px', color: '#1C1C1E' }}>
          Scaling to $20K/month
        </h4>
        <RoadmapProgress completed={0} total={8} showCount />
      </div>
    </div>
  ),
};
