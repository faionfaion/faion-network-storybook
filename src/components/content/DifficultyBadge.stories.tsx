import type { Meta, StoryObj } from '@storybook/react';
import DifficultyBadge from './DifficultyBadge';

const meta: Meta<typeof DifficultyBadge> = {
  title: 'Content/DifficultyBadge',
  component: DifficultyBadge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Color-coded badge showing content difficulty level.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: 'select',
      options: ['beginner', 'intermediate', 'advanced'],
      description: 'Difficulty level',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size variant',
    },
    showIcon: {
      control: 'boolean',
      description: 'Show icon',
    },
    useDot: {
      control: 'boolean',
      description: 'Use dot indicator',
    },
    outline: {
      control: 'boolean',
      description: 'Outline style',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DifficultyBadge>;

export const Beginner: Story = {
  args: {
    level: 'beginner',
  },
};

export const Intermediate: Story = {
  args: {
    level: 'intermediate',
  },
};

export const Advanced: Story = {
  args: {
    level: 'advanced',
  },
};

export const AllLevels: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <DifficultyBadge level="beginner" />
      <DifficultyBadge level="intermediate" />
      <DifficultyBadge level="advanced" />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <DifficultyBadge level="intermediate" size="small" />
      <DifficultyBadge level="intermediate" size="medium" />
      <DifficultyBadge level="intermediate" size="large" />
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <DifficultyBadge level="beginner" showIcon />
      <DifficultyBadge level="intermediate" showIcon />
      <DifficultyBadge level="advanced" showIcon />
    </div>
  ),
};

export const WithDot: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <DifficultyBadge level="beginner" useDot />
      <DifficultyBadge level="intermediate" useDot />
      <DifficultyBadge level="advanced" useDot />
    </div>
  ),
};

export const Outline: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <DifficultyBadge level="beginner" outline />
      <DifficultyBadge level="intermediate" outline />
      <DifficultyBadge level="advanced" outline />
    </div>
  ),
};

export const CustomLabel: Story = {
  args: {
    level: 'beginner',
    label: 'Easy',
  },
};

export const InContext: Story = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <div style={{
        padding: '20px',
        background: '#FFFFFF',
        border: '1px solid #E5E5E0',
        borderRadius: '8px',
        marginBottom: '16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '16px', margin: 0, color: '#1C1C1E' }}>
            Getting Started with SDD
          </h3>
          <DifficultyBadge level="beginner" size="small" />
        </div>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#4A4A4A', margin: 0 }}>
          Learn the fundamentals of Specification-Driven Development.
        </p>
      </div>

      <div style={{
        padding: '20px',
        background: '#FFFFFF',
        border: '1px solid #E5E5E0',
        borderRadius: '8px',
        marginBottom: '16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '16px', margin: 0, color: '#1C1C1E' }}>
            RAG Pipeline Implementation
          </h3>
          <DifficultyBadge level="intermediate" size="small" />
        </div>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#4A4A4A', margin: 0 }}>
          Build production-ready RAG systems with vector databases.
        </p>
      </div>

      <div style={{
        padding: '20px',
        background: '#FFFFFF',
        border: '1px solid #E5E5E0',
        borderRadius: '8px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '16px', margin: 0, color: '#1C1C1E' }}>
            Custom Agent Architecture
          </h3>
          <DifficultyBadge level="advanced" size="small" />
        </div>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#4A4A4A', margin: 0 }}>
          Design and implement custom AI agent architectures.
        </p>
      </div>
    </div>
  ),
};
