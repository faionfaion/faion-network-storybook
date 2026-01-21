import type { Meta, StoryObj } from '@storybook/react';
import MethodologyCard from './MethodologyCard';

const meta: Meta<typeof MethodologyCard> = {
  title: 'Content/MethodologyCard',
  component: MethodologyCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Card component for displaying methodology previews with ID, title, skill, and difficulty.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'compact', 'featured'],
      description: 'Card variant',
    },
    difficulty: {
      control: 'select',
      options: ['beginner', 'intermediate', 'advanced'],
      description: 'Difficulty level',
    },
    isPremium: {
      control: 'boolean',
      description: 'Whether methodology is premium',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MethodologyCard>;

export const Default: Story = {
  args: {
    id: 'M-SDD-001',
    title: 'SDD Workflow Overview',
    description: 'Learn the complete Specification-Driven Development workflow from idea to implementation.',
    skill: 'faion-sdd',
    difficulty: 'beginner',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '360px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Premium: Story = {
  args: {
    id: 'M-DEV-027',
    title: 'Clean Architecture Patterns',
    description: 'Implement clean architecture in your projects with practical examples and best practices.',
    skill: 'faion-software-developer',
    difficulty: 'advanced',
    isPremium: true,
    premiumTier: 'plus',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '360px' }}>
        <Story />
      </div>
    ),
  ],
};

export const ProTier: Story = {
  args: {
    id: 'M-ML-021',
    title: 'Enterprise RAG Pipeline',
    description: 'Build production-ready RAG systems for enterprise applications with advanced security.',
    skill: 'faion-ml-engineer',
    difficulty: 'advanced',
    isPremium: true,
    premiumTier: 'pro',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '360px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Compact: Story = {
  args: {
    id: 'M-PM-003',
    title: 'WBS Decomposition',
    description: 'Break down projects into manageable work packages.',
    skill: 'faion-project-manager',
    difficulty: 'intermediate',
    variant: 'compact',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Featured: Story = {
  args: {
    id: 'M-RES-001',
    title: 'Idea Generation with SCAMPER',
    description: 'Use the SCAMPER framework to generate innovative business ideas by transforming existing concepts.',
    skill: 'faion-researcher',
    difficulty: 'beginner',
    variant: 'featured',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const MethodologyGrid: Story = {
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '24px',
      maxWidth: '1200px'
    }}>
      <MethodologyCard
        id="M-SDD-001"
        title="SDD Workflow Overview"
        description="Complete workflow from specification to implementation."
        skill="faion-sdd"
        difficulty="beginner"
      />
      <MethodologyCard
        id="M-DEV-001"
        title="Django Fundamentals"
        description="Core concepts and patterns for Django development."
        skill="faion-software-developer"
        difficulty="beginner"
      />
      <MethodologyCard
        id="M-ML-001"
        title="OpenAI API Integration"
        description="Connect and use OpenAI APIs in your applications."
        skill="faion-ml-engineer"
        difficulty="intermediate"
        isPremium
      />
      <MethodologyCard
        id="M-OPS-001"
        title="Docker Fundamentals"
        description="Containerize your applications with Docker."
        skill="faion-devops-engineer"
        difficulty="beginner"
      />
      <MethodologyCard
        id="M-MKT-001"
        title="GTM Strategy"
        description="Plan and execute your go-to-market strategy."
        skill="faion-marketing-manager"
        difficulty="intermediate"
        isPremium
      />
      <MethodologyCard
        id="M-UX-001"
        title="Usability Heuristics"
        description="Apply Nielsen Norman 10 heuristics to your designs."
        skill="faion-ux-ui-designer"
        difficulty="beginner"
      />
    </div>
  ),
};

export const AllDifficulties: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px' }}>
      <div style={{ width: '300px' }}>
        <MethodologyCard
          id="M-BA-001"
          title="Requirements Basics"
          description="Introduction to requirements engineering."
          skill="faion-business-analyst"
          difficulty="beginner"
        />
      </div>
      <div style={{ width: '300px' }}>
        <MethodologyCard
          id="M-BA-005"
          title="Traceability Matrix"
          description="Track requirements through implementation."
          skill="faion-business-analyst"
          difficulty="intermediate"
        />
      </div>
      <div style={{ width: '300px' }}>
        <MethodologyCard
          id="M-BA-012"
          title="Advanced Process Modeling"
          description="BPMN 2.0 and enterprise process architecture."
          skill="faion-business-analyst"
          difficulty="advanced"
        />
      </div>
    </div>
  ),
};

export const CompactGrid: Story = {
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '16px',
      maxWidth: '1200px'
    }}>
      {[
        { id: 'M-SDD-001', title: 'SDD Workflow', skill: 'faion-sdd' },
        { id: 'M-SDD-002', title: 'Writing Specs', skill: 'faion-sdd' },
        { id: 'M-SDD-003', title: 'Design Docs', skill: 'faion-sdd' },
        { id: 'M-SDD-004', title: 'Implementation Plans', skill: 'faion-sdd' },
        { id: 'M-SDD-005', title: 'Task Creation', skill: 'faion-sdd' },
        { id: 'M-SDD-006', title: 'Execute Task', skill: 'faion-sdd', isPremium: true },
        { id: 'M-SDD-007', title: 'Quality Gates', skill: 'faion-sdd', isPremium: true },
        { id: 'M-SDD-008', title: 'Reflexion Learning', skill: 'faion-sdd', isPremium: true },
      ].map((m) => (
        <MethodologyCard
          key={m.id}
          id={m.id}
          title={m.title}
          skill={m.skill}
          difficulty="beginner"
          variant="compact"
          isPremium={m.isPremium}
        />
      ))}
    </div>
  ),
};

export const WithCustomIcon: Story = {
  args: {
    id: 'M-HR-001',
    title: 'Talent Acquisition',
    description: 'Strategies for attracting top talent to your organization.',
    skill: 'faion-hr-recruiter',
    difficulty: 'intermediate',
    skillIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ width: '360px' }}>
        <Story />
      </div>
    ),
  ],
};
