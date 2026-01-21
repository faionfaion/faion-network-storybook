import type { Meta, StoryObj } from '@storybook/react';
import SearchResults, { SearchResultItem } from './SearchResults';

const meta: Meta<typeof SearchResults> = {
  title: 'Content/SearchResults',
  component: SearchResults,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Search results display component with highlighting, categories, and empty/loading states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isLoading: {
      control: 'boolean',
      description: 'Loading state',
    },
    showCount: {
      control: 'boolean',
      description: 'Show results count',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchResults>;

const sampleResults: SearchResultItem[] = [
  {
    id: '1',
    title: 'SDD Workflow Overview',
    excerpt: 'Learn the complete Specification-Driven Development workflow from idea to implementation. This methodology covers all phases of the development lifecycle.',
    category: 'Methodology',
    meta: '8 min read',
    href: '#',
  },
  {
    id: '2',
    title: 'Writing Specifications with SMART Criteria',
    excerpt: 'Create effective specifications using the SMART framework. Learn how to write clear, measurable, and achievable requirements.',
    category: 'SDD',
    meta: '12 min read',
    href: '#',
  },
  {
    id: '3',
    title: 'SDD Task Creation and Parallelization',
    excerpt: 'Break down your implementation into parallel tasks. Learn how to identify dependencies and optimize your workflow.',
    category: 'SDD',
    meta: '15 min read',
    href: '#',
  },
  {
    id: '4',
    title: 'Design Documents Best Practices',
    excerpt: 'Write effective design documents that bridge specifications and implementation. Includes templates and real examples.',
    category: 'Development',
    meta: '10 min read',
    href: '#',
  },
];

export const Default: Story = {
  args: {
    results: sampleResults,
    query: 'SDD',
    showCount: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '720px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithHighlighting: Story = {
  args: {
    results: sampleResults,
    query: 'specification',
    showCount: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '720px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Loading: Story = {
  args: {
    results: [],
    isLoading: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '720px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Empty: Story = {
  args: {
    results: [],
    query: 'xyznonexistent',
    emptyTitle: 'No results found',
    emptyText: 'Try adjusting your search terms or browse our categories.',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '720px' }}>
        <Story />
      </div>
    ),
  ],
};

export const NoCount: Story = {
  args: {
    results: sampleResults,
    query: 'SDD',
    showCount: false,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '720px' }}>
        <Story />
      </div>
    ),
  ],
};

export const SingleResult: Story = {
  args: {
    results: [sampleResults[0]],
    query: 'workflow',
    showCount: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '720px' }}>
        <Story />
      </div>
    ),
  ],
};

export const CustomEmptyState: Story = {
  args: {
    results: [],
    emptyState: (
      <div style={{ textAlign: 'center', padding: '48px 24px' }}>
        <div style={{
          width: '80px',
          height: '80px',
          background: '#FAF9F6',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 16px'
        }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5D1F2D" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
        </div>
        <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '20px', marginBottom: '8px', color: '#1C1C1E' }}>
          Start your search
        </h3>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#4A4A4A', marginBottom: '16px' }}>
          Enter a keyword to search through 502 methodologies.
        </p>
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {['SDD', 'RAG', 'MVP', 'DevOps'].map((term) => (
            <button
              key={term}
              style={{
                padding: '6px 12px',
                background: '#FAF9F6',
                border: '1px solid #E5E5E0',
                borderRadius: '4px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                color: '#4A4A4A',
                cursor: 'pointer'
              }}
            >
              {term}
            </button>
          ))}
        </div>
      </div>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '720px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithSearchBar: Story = {
  render: () => (
    <div style={{ maxWidth: '720px' }}>
      <div style={{ marginBottom: '24px' }}>
        <input
          type="search"
          placeholder="Search methodologies..."
          defaultValue="SDD"
          style={{
            width: '100%',
            padding: '12px 16px',
            border: '1px solid #E5E5E0',
            borderRadius: '8px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            outline: 'none'
          }}
        />
      </div>
      <SearchResults
        results={sampleResults}
        query="SDD"
        showCount={true}
      />
    </div>
  ),
};

export const ManyResults: Story = {
  args: {
    results: [
      ...sampleResults,
      {
        id: '5',
        title: 'RAG Pipeline Implementation',
        excerpt: 'Build production-ready Retrieval Augmented Generation systems with vector databases.',
        category: 'AI/ML',
        meta: '20 min read',
        href: '#',
      },
      {
        id: '6',
        title: 'Prompt Engineering Patterns',
        excerpt: 'Master the art of writing effective prompts for LLMs with proven patterns and techniques.',
        category: 'AI/ML',
        meta: '18 min read',
        href: '#',
      },
      {
        id: '7',
        title: 'Docker for Solopreneurs',
        excerpt: 'Containerize your applications with Docker. Learn the fundamentals and best practices.',
        category: 'DevOps',
        meta: '14 min read',
        href: '#',
      },
      {
        id: '8',
        title: 'Landing Page Optimization',
        excerpt: 'Increase conversions with proven landing page techniques and A/B testing strategies.',
        category: 'Marketing',
        meta: '11 min read',
        href: '#',
      },
    ],
    query: '',
    showCount: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '720px' }}>
        <Story />
      </div>
    ),
  ],
};
