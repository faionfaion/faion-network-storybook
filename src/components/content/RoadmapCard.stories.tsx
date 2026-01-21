import type { Meta, StoryObj } from '@storybook/react';
import RoadmapCard from './RoadmapCard';
import ReadTimeBadge from './ReadTimeBadge';
import DifficultyBadge from './DifficultyBadge';

const meta: Meta<typeof RoadmapCard> = {
  title: 'Content/RoadmapCard',
  component: RoadmapCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Card component for roadmap steps with progress indicator and state.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['pending', 'active', 'completed', 'locked'],
      description: 'Step state',
    },
    variant: {
      control: 'select',
      options: ['default', 'compact'],
      description: 'Card variant',
    },
  },
};

export default meta;
type Story = StoryObj<typeof RoadmapCard>;

export const Pending: Story = {
  args: {
    step: 1,
    title: 'Define Your Niche',
    description: 'Use the SCAMPER framework to identify opportunities in existing markets.',
    state: 'pending',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '480px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Active: Story = {
  args: {
    step: 2,
    title: 'Validate Your Idea',
    description: 'Apply the Mom Test methodology to validate without leading questions.',
    state: 'active',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '480px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Completed: Story = {
  args: {
    step: 1,
    title: 'Define Your Niche',
    description: 'Use the SCAMPER framework to identify opportunities.',
    state: 'completed',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '480px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Locked: Story = {
  args: {
    step: 5,
    title: 'Scale to $20K/month',
    description: 'Advanced strategies for scaling your solo business.',
    state: 'locked',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '480px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Compact: Story = {
  args: {
    step: 3,
    title: 'Build Your MVP',
    description: 'Create a Minimum Viable Product.',
    state: 'active',
    variant: 'compact',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithMeta: Story = {
  args: {
    step: 2,
    title: 'Validate Your Idea',
    description: 'Apply the Mom Test methodology to validate your business idea.',
    state: 'active',
    meta: (
      <>
        <ReadTimeBadge minutes={15} />
        <DifficultyBadge level="beginner" size="small" />
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ width: '480px' }}>
        <Story />
      </div>
    ),
  ],
};

export const FullRoadmap: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '520px' }}>
      <RoadmapCard
        step={1}
        title="Define Your Niche"
        description="Use the SCAMPER framework to identify opportunities in existing markets."
        state="completed"
        meta={
          <>
            <ReadTimeBadge minutes={10} />
            <DifficultyBadge level="beginner" size="small" />
          </>
        }
      />
      <RoadmapCard
        step={2}
        title="Validate Your Idea"
        description="Apply the Mom Test methodology to validate without leading questions."
        state="completed"
        meta={
          <>
            <ReadTimeBadge minutes={15} />
            <DifficultyBadge level="beginner" size="small" />
          </>
        }
      />
      <RoadmapCard
        step={3}
        title="Build Your MVP"
        description="Create a Minimum Viable Product that solves the core problem."
        state="active"
        meta={
          <>
            <ReadTimeBadge minutes={25} />
            <DifficultyBadge level="intermediate" size="small" />
          </>
        }
      />
      <RoadmapCard
        step={4}
        title="Launch and Iterate"
        description="Ship your product and collect feedback from early users."
        state="pending"
        meta={
          <>
            <ReadTimeBadge minutes={20} />
            <DifficultyBadge level="intermediate" size="small" />
          </>
        }
      />
      <RoadmapCard
        step={5}
        title="Scale to $20K/month"
        description="Advanced strategies for scaling your solo business."
        state="locked"
        meta={
          <>
            <ReadTimeBadge minutes={45} />
            <DifficultyBadge level="advanced" size="small" />
          </>
        }
      />
    </div>
  ),
};

export const CompactRoadmap: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '400px' }}>
      <RoadmapCard
        step={1}
        title="Introduction to SDD"
        description="Learn the basics"
        state="completed"
        variant="compact"
      />
      <RoadmapCard
        step={2}
        title="Writing Specifications"
        description="SMART criteria"
        state="completed"
        variant="compact"
      />
      <RoadmapCard
        step={3}
        title="Design Documents"
        description="Technical approach"
        state="active"
        variant="compact"
      />
      <RoadmapCard
        step={4}
        title="Task Execution"
        description="Implementation"
        state="pending"
        variant="compact"
      />
    </div>
  ),
};

export const InSidebar: Story = {
  render: () => (
    <div style={{
      width: '320px',
      padding: '24px',
      background: '#FAF9F6',
      borderRadius: '8px'
    }}>
      <h3 style={{
        fontFamily: 'Georgia, serif',
        fontSize: '18px',
        marginBottom: '16px',
        color: '#1C1C1E'
      }}>
        Your Learning Path
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <RoadmapCard
          step={1}
          title="Getting Started"
          state="completed"
          variant="compact"
        />
        <RoadmapCard
          step={2}
          title="Core Concepts"
          state="active"
          variant="compact"
        />
        <RoadmapCard
          step={3}
          title="Advanced Topics"
          state="pending"
          variant="compact"
        />
      </div>
    </div>
  ),
};
