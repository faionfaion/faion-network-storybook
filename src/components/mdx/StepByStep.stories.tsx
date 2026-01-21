import type { Meta, StoryObj } from '@storybook/react';
import StepByStep from './StepByStep';

const meta: Meta<typeof StepByStep> = {
  title: 'MDX/StepByStep',
  component: StepByStep,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Numbered process steps for displaying sequential instructions or workflows.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'compact', 'cards'],
      description: 'Step display variant',
    },
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'Step orientation',
    },
    showNumbers: {
      control: 'boolean',
      description: 'Show step numbers',
    },
  },
};

export default meta;
type Story = StoryObj<typeof StepByStep>;

const basicSteps = [
  {
    title: 'Install Dependencies',
    content: 'Run npm install or yarn to install all required packages for the project.',
  },
  {
    title: 'Configure Environment',
    content: 'Copy .env.example to .env and fill in your API keys and configuration values.',
  },
  {
    title: 'Start Development Server',
    content: 'Run npm run dev to start the development server on localhost:3000.',
  },
  {
    title: 'Build for Production',
    content: 'When ready, run npm run build to create an optimized production build.',
  },
];

const detailedSteps = [
  {
    title: 'Research & Discovery',
    content: (
      <>
        <p>Begin by understanding the problem space and your target users.</p>
        <ul>
          <li>Conduct market research using the faion-researcher skill</li>
          <li>Create user personas based on interviews and data</li>
          <li>Identify key pain points and opportunities</li>
        </ul>
      </>
    ),
    duration: '1-2 weeks',
  },
  {
    title: 'Write Specification',
    content: (
      <>
        <p>Document your findings and define what you are going to build.</p>
        <ul>
          <li>Create a spec.md file following SDD methodology</li>
          <li>Define functional and non-functional requirements</li>
          <li>Get stakeholder sign-off before proceeding</li>
        </ul>
      </>
    ),
    duration: '3-5 days',
  },
  {
    title: 'Design System',
    content: (
      <>
        <p>Design the technical architecture and user interface.</p>
        <ul>
          <li>Create design.md with architecture decisions</li>
          <li>Design UI mockups and component library</li>
          <li>Plan data models and API contracts</li>
        </ul>
      </>
    ),
    duration: '1 week',
  },
  {
    title: 'Implementation',
    content: (
      <>
        <p>Build the product following the specification and design.</p>
        <ul>
          <li>Break work into tasks using implementation-plan.md</li>
          <li>Develop features iteratively with testing</li>
          <li>Conduct code reviews and quality checks</li>
        </ul>
      </>
    ),
    duration: '2-4 weeks',
  },
];

export const Default: Story = {
  args: {
    steps: basicSteps,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithDuration: Story = {
  args: {
    steps: detailedSteps,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Compact: Story = {
  args: {
    steps: basicSteps,
    variant: 'compact',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Cards: Story = {
  args: {
    steps: basicSteps,
    variant: 'cards',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithoutNumbers: Story = {
  args: {
    steps: basicSteps,
    showNumbers: false,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Horizontal: Story = {
  args: {
    steps: [
      { title: 'Plan', content: 'Define requirements' },
      { title: 'Design', content: 'Create architecture' },
      { title: 'Build', content: 'Implement features' },
      { title: 'Test', content: 'Verify quality' },
      { title: 'Deploy', content: 'Ship to production' },
    ],
    orientation: 'horizontal',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '900px' }}>
        <Story />
      </div>
    ),
  ],
};

export const InArticle: Story = {
  render: () => (
    <article style={{ maxWidth: '700px', fontFamily: 'Inter, sans-serif' }}>
      <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '28px', marginBottom: '16px', color: '#1C1C1E' }}>
        Getting Started with SDD
      </h2>
      <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#4A4A4A', marginBottom: '24px' }}>
        Specification-Driven Development (SDD) is a methodology that emphasizes clear documentation
        before implementation. Follow these steps to get started:
      </p>

      <StepByStep steps={detailedSteps} />

      <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#4A4A4A', marginTop: '24px' }}>
        By following this process, you will have a clear understanding of what you are building
        and why, reducing rework and improving quality.
      </p>
    </article>
  ),
};
