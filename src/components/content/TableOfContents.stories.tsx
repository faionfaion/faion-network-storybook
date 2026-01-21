import type { Meta, StoryObj } from '@storybook/react';
import { useRef } from 'react';
import TableOfContents, { TocHeading } from './TableOfContents';

const meta: Meta<typeof TableOfContents> = {
  title: 'Content/TableOfContents',
  component: TableOfContents,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Scrollspy navigation sidebar that highlights the current section as user scrolls.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    sticky: {
      control: 'boolean',
      description: 'Whether to use sticky positioning',
    },
    showProgress: {
      control: 'boolean',
      description: 'Whether to show reading progress',
    },
    defaultCollapsed: {
      control: 'boolean',
      description: 'Initial collapsed state',
    },
    title: {
      control: 'text',
      description: 'Title for the TOC',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TableOfContents>;

const sampleHeadings: TocHeading[] = [
  { id: 'introduction', text: 'Introduction', level: 2 },
  { id: 'getting-started', text: 'Getting Started', level: 2 },
  { id: 'installation', text: 'Installation', level: 3 },
  { id: 'configuration', text: 'Configuration', level: 3 },
  { id: 'core-concepts', text: 'Core Concepts', level: 2 },
  { id: 'specifications', text: 'Specifications', level: 3 },
  { id: 'design-documents', text: 'Design Documents', level: 3 },
  { id: 'tasks', text: 'Tasks', level: 3 },
  { id: 'advanced-topics', text: 'Advanced Topics', level: 2 },
  { id: 'custom-agents', text: 'Custom Agents', level: 3 },
  { id: 'integrations', text: 'Integrations', level: 3 },
  { id: 'conclusion', text: 'Conclusion', level: 2 },
];

export const Default: Story = {
  args: {
    headings: sampleHeadings,
    title: 'On this page',
    sticky: false,
  },
};

export const WithProgress: Story = {
  args: {
    headings: sampleHeadings,
    title: 'On this page',
    sticky: false,
    showProgress: true,
  },
};

export const Collapsed: Story = {
  args: {
    headings: sampleHeadings,
    title: 'On this page',
    sticky: false,
    defaultCollapsed: true,
  },
};

export const CustomTitle: Story = {
  args: {
    headings: sampleHeadings,
    title: 'Table of Contents',
    sticky: false,
  },
};

export const FewHeadings: Story = {
  args: {
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'usage', text: 'Usage', level: 2 },
      { id: 'api', text: 'API Reference', level: 2 },
    ],
    title: 'On this page',
    sticky: false,
  },
};

export const DeeplyNested: Story = {
  args: {
    headings: [
      { id: 'chapter-1', text: 'Chapter 1: Introduction', level: 2 },
      { id: 'section-1-1', text: 'Background', level: 3 },
      { id: 'subsection-1-1-1', text: 'Historical Context', level: 4 },
      { id: 'section-1-2', text: 'Motivation', level: 3 },
      { id: 'chapter-2', text: 'Chapter 2: Methodology', level: 2 },
      { id: 'section-2-1', text: 'Research Design', level: 3 },
      { id: 'section-2-2', text: 'Data Collection', level: 3 },
      { id: 'subsection-2-2-1', text: 'Survey Instruments', level: 4 },
      { id: 'chapter-3', text: 'Chapter 3: Results', level: 2 },
    ],
    title: 'Contents',
    sticky: false,
  },
};

// Interactive example with content
const ArticleWithToc = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div style={{ display: 'flex', gap: '48px', maxWidth: '1200px' }}>
      <TableOfContents
        headings={sampleHeadings}
        containerRef={containerRef}
        showProgress={true}
        sticky={false}
      />

      <div ref={containerRef} style={{ flex: 1, fontFamily: 'Inter, sans-serif' }}>
        <h2 id="introduction" style={{ fontFamily: 'Georgia, serif', fontSize: '28px', color: '#1C1C1E' }}>
          Introduction
        </h2>
        <p style={{ color: '#4A4A4A', lineHeight: 1.7, marginBottom: '32px' }}>
          Welcome to the Faion Network documentation. This guide will walk you through
          everything you need to know to get started with Specification-Driven Development.
        </p>

        <h2 id="getting-started" style={{ fontFamily: 'Georgia, serif', fontSize: '28px', color: '#1C1C1E' }}>
          Getting Started
        </h2>
        <h3 id="installation" style={{ fontFamily: 'Georgia, serif', fontSize: '22px', color: '#1C1C1E' }}>
          Installation
        </h3>
        <p style={{ color: '#4A4A4A', lineHeight: 1.7, marginBottom: '24px' }}>
          To get started, you will need to configure your Claude Code settings to include
          the Faion Network MCP server.
        </p>

        <h3 id="configuration" style={{ fontFamily: 'Georgia, serif', fontSize: '22px', color: '#1C1C1E' }}>
          Configuration
        </h3>
        <p style={{ color: '#4A4A4A', lineHeight: 1.7, marginBottom: '32px' }}>
          Configure your settings.json file with your license key and preferred options.
        </p>

        <h2 id="core-concepts" style={{ fontFamily: 'Georgia, serif', fontSize: '28px', color: '#1C1C1E' }}>
          Core Concepts
        </h2>
        <h3 id="specifications" style={{ fontFamily: 'Georgia, serif', fontSize: '22px', color: '#1C1C1E' }}>
          Specifications
        </h3>
        <p style={{ color: '#4A4A4A', lineHeight: 1.7, marginBottom: '24px' }}>
          Specifications define what needs to be built, including requirements and acceptance criteria.
        </p>

        <h3 id="design-documents" style={{ fontFamily: 'Georgia, serif', fontSize: '22px', color: '#1C1C1E' }}>
          Design Documents
        </h3>
        <p style={{ color: '#4A4A4A', lineHeight: 1.7, marginBottom: '24px' }}>
          Design documents explain how to implement the specification with technical details.
        </p>

        <h3 id="tasks" style={{ fontFamily: 'Georgia, serif', fontSize: '22px', color: '#1C1C1E' }}>
          Tasks
        </h3>
        <p style={{ color: '#4A4A4A', lineHeight: 1.7, marginBottom: '32px' }}>
          Tasks are atomic units of work that can be executed independently.
        </p>

        <h2 id="advanced-topics" style={{ fontFamily: 'Georgia, serif', fontSize: '28px', color: '#1C1C1E' }}>
          Advanced Topics
        </h2>
        <h3 id="custom-agents" style={{ fontFamily: 'Georgia, serif', fontSize: '22px', color: '#1C1C1E' }}>
          Custom Agents
        </h3>
        <p style={{ color: '#4A4A4A', lineHeight: 1.7, marginBottom: '24px' }}>
          Learn how to create custom agents for specialized workflows.
        </p>

        <h3 id="integrations" style={{ fontFamily: 'Georgia, serif', fontSize: '22px', color: '#1C1C1E' }}>
          Integrations
        </h3>
        <p style={{ color: '#4A4A4A', lineHeight: 1.7, marginBottom: '32px' }}>
          Connect Faion Network with your existing tools and services.
        </p>

        <h2 id="conclusion" style={{ fontFamily: 'Georgia, serif', fontSize: '28px', color: '#1C1C1E' }}>
          Conclusion
        </h2>
        <p style={{ color: '#4A4A4A', lineHeight: 1.7 }}>
          You are now ready to start using Specification-Driven Development in your projects.
        </p>
      </div>
    </div>
  );
};

export const WithArticle: Story = {
  render: () => <ArticleWithToc />,
};

export const InSidebarLayout: Story = {
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '280px 1fr',
      gap: '48px',
      maxWidth: '1200px',
      padding: '24px',
      background: '#FAF9F6',
      borderRadius: '8px'
    }}>
      <aside style={{ background: '#FFFFFF', padding: '24px', borderRadius: '8px', border: '1px solid #E5E5E0' }}>
        <TableOfContents
          headings={sampleHeadings}
          title="Contents"
          sticky={false}
          showProgress={true}
        />
      </aside>
      <main style={{ background: '#FFFFFF', padding: '32px', borderRadius: '8px', border: '1px solid #E5E5E0' }}>
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '32px', color: '#1C1C1E', marginBottom: '16px' }}>
          SDD Workflow Overview
        </h1>
        <p style={{ fontFamily: 'Inter, sans-serif', color: '#4A4A4A', lineHeight: 1.7 }}>
          This is the main content area where your article content would appear.
          The table of contents on the left provides quick navigation to each section.
        </p>
      </main>
    </div>
  ),
};
