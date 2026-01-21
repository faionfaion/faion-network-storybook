import type { Meta, StoryObj } from '@storybook/react';
import ReadTimeBadge from './ReadTimeBadge';

const meta: Meta<typeof ReadTimeBadge> = {
  title: 'Content/ReadTimeBadge',
  component: ReadTimeBadge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Badge displaying estimated reading time with clock icon.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    minutes: {
      control: { type: 'range', min: 1, max: 60 },
      description: 'Read time in minutes',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size variant',
    },
    showIcon: {
      control: 'boolean',
      description: 'Show clock icon',
    },
    showBackground: {
      control: 'boolean',
      description: 'Show background',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ReadTimeBadge>;

export const Default: Story = {
  args: {
    minutes: 8,
  },
};

export const ShortRead: Story = {
  args: {
    minutes: 3,
  },
};

export const LongRead: Story = {
  args: {
    minutes: 25,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <ReadTimeBadge minutes={8} size="small" />
      <ReadTimeBadge minutes={8} size="medium" />
      <ReadTimeBadge minutes={8} size="large" />
    </div>
  ),
};

export const WithBackground: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <ReadTimeBadge minutes={5} showBackground />
      <ReadTimeBadge minutes={12} showBackground />
      <ReadTimeBadge minutes={30} showBackground />
    </div>
  ),
};

export const NoIcon: Story = {
  args: {
    minutes: 10,
    showIcon: false,
  },
};

export const CustomFormat: Story = {
  args: {
    minutes: 15,
    formatLabel: (m) => `${m} minutes`,
  },
};

export const VariousReadTimes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <ReadTimeBadge minutes={1} />
      <ReadTimeBadge minutes={5} />
      <ReadTimeBadge minutes={10} />
      <ReadTimeBadge minutes={20} />
      <ReadTimeBadge minutes={45} />
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
      <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '18px', marginBottom: '8px', color: '#1C1C1E' }}>
        How to Build a Solo Business
      </h3>
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#4A4A4A', marginBottom: '12px', lineHeight: 1.5 }}>
        Learn the proven methodology for building a sustainable solo business.
      </p>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <ReadTimeBadge minutes={12} />
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#4A4A4A' }}>
          Jan 15, 2026
        </span>
      </div>
    </div>
  ),
};

export const InMetaRow: Story = {
  render: () => (
    <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center',
      padding: '12px 16px',
      background: '#FAF9F6',
      borderRadius: '8px'
    }}>
      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#4A4A4A' }}>
        Published Jan 21, 2026
      </span>
      <span style={{ color: '#E5E5E0' }}>|</span>
      <ReadTimeBadge minutes={8} />
      <span style={{ color: '#E5E5E0' }}>|</span>
      <span style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        fontFamily: 'Inter, sans-serif',
        fontSize: '12px',
        color: '#2E7D32',
        background: '#E8F5E9',
        padding: '2px 6px',
        borderRadius: '4px'
      }}>
        Beginner
      </span>
    </div>
  ),
};
