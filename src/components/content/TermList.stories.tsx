import type { Meta, StoryObj } from '@storybook/react';
import TermList, { type Term } from './TermList';

const meta: Meta<typeof TermList> = {
  title: 'Content/TermList',
  component: TermList,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Displays a list of glossary terms with definitions. Used in the Terminology Dictionary.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'compact', 'detailed', 'cards'],
      description: 'List variant',
    },
    groupByLetter: {
      control: 'boolean',
      description: 'Group terms by first letter',
    },
    showCategory: {
      control: 'boolean',
      description: 'Show category badges',
    },
    expandable: {
      control: 'boolean',
      description: 'Expandable definitions',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TermList>;

const mockTerms: Term[] = [
  {
    id: '1',
    term: 'API',
    definition: 'Application Programming Interface - a set of protocols and tools for building software applications.',
    category: 'Development',
    href: '/glossary/api',
  },
  {
    id: '2',
    term: 'Backlog',
    definition: 'A prioritized list of work items (user stories, bugs, tasks) that a development team maintains.',
    category: 'Agile',
    relatedTerms: ['Sprint', 'User Story', 'Kanban'],
  },
  {
    id: '3',
    term: 'CI/CD',
    definition: 'Continuous Integration and Continuous Deployment - practices that enable frequent code changes with automated testing and deployment.',
    description: 'CI/CD pipelines automate the process of building, testing, and deploying code changes, reducing manual errors and enabling faster release cycles.',
    category: 'DevOps',
    relatedTerms: ['Pipeline', 'Automation', 'Testing'],
  },
  {
    id: '4',
    term: 'MCP',
    definition: 'Model Context Protocol - a protocol for communication between AI models and external systems.',
    category: 'AI/ML',
    href: '/glossary/mcp',
  },
  {
    id: '5',
    term: 'MVP',
    definition: 'Minimum Viable Product - a product with just enough features to satisfy early customers and provide feedback for future development.',
    category: 'Product',
    relatedTerms: ['MLP', 'RAT', 'Prototype'],
  },
  {
    id: '6',
    term: 'SDD',
    definition: 'Specification-Driven Development - a methodology that emphasizes writing detailed specifications before implementation.',
    description: 'SDD ensures that all stakeholders have a clear understanding of requirements before development begins, reducing rework and miscommunication.',
    category: 'Methodology',
    relatedTerms: ['TDD', 'BDD', 'Specification'],
  },
];

const moreTerms: Term[] = [
  ...mockTerms,
  {
    id: '7',
    term: 'Agile',
    definition: 'An iterative approach to project management and software development that helps teams deliver value faster.',
    category: 'Methodology',
  },
  {
    id: '8',
    term: 'Agent',
    definition: 'An autonomous AI entity that can perform tasks and make decisions based on its programming and environment.',
    category: 'AI/ML',
  },
  {
    id: '9',
    term: 'Solopreneur',
    definition: 'An entrepreneur who runs their business alone, without partners or employees.',
    category: 'Business',
  },
  {
    id: '10',
    term: 'Sprint',
    definition: 'A fixed-length iteration (usually 1-4 weeks) in which a development team completes a set of work.',
    category: 'Agile',
  },
];

export const Default: Story = {
  args: {
    terms: mockTerms,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '700px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Compact: Story = {
  args: {
    terms: mockTerms,
    variant: 'compact',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '700px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Detailed: Story = {
  args: {
    terms: mockTerms,
    variant: 'detailed',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '700px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Cards: Story = {
  args: {
    terms: mockTerms,
    variant: 'cards',
    onTermClick: (term) => console.log('Clicked:', term),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '900px' }}>
        <Story />
      </div>
    ),
  ],
};

export const GroupedByLetter: Story = {
  args: {
    terms: moreTerms,
    groupByLetter: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '700px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithHighlight: Story = {
  args: {
    terms: mockTerms,
    highlightQuery: 'development',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '700px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithoutCategories: Story = {
  args: {
    terms: mockTerms,
    showCategory: false,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '700px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Clickable: Story = {
  args: {
    terms: mockTerms,
    onTermClick: (term) => alert(`Clicked: ${term.term}`),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '700px' }}>
        <Story />
      </div>
    ),
  ],
};

export const InGlossaryPage: Story = {
  render: () => (
    <div style={{ maxWidth: '800px' }}>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '32px', fontWeight: 700, color: '#1C1C1E', margin: '0 0 8px' }}>
          Terminology Dictionary
        </h1>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#4A4A4A', margin: 0 }}>
          50+ terms and definitions used throughout the Faion Network platform
        </p>
      </div>

      {/* Search */}
      <div style={{ marginBottom: '24px' }}>
        <input
          type="search"
          placeholder="Search terms..."
          style={{
            width: '100%',
            padding: '12px 16px',
            border: '1px solid #E5E5E0',
            borderRadius: '8px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '15px',
          }}
        />
      </div>

      {/* Terms */}
      <TermList
        terms={moreTerms}
        groupByLetter={true}
        variant="default"
        onTermClick={(term) => console.log('Navigate to:', term.href)}
      />
    </div>
  ),
};
