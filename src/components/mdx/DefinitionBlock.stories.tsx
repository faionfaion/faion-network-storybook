import type { Meta, StoryObj } from '@storybook/react';
import DefinitionBlock from './DefinitionBlock';

const meta: Meta<typeof DefinitionBlock> = {
  title: 'MDX/DefinitionBlock',
  component: DefinitionBlock,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'MDX component for term definitions with linkable anchors.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    term: {
      control: 'text',
      description: 'The term being defined',
    },
    definition: {
      control: 'text',
      description: 'Definition text',
    },
    phonetic: {
      control: 'text',
      description: 'Optional phonetic spelling',
    },
    category: {
      control: 'text',
      description: 'Optional category/tag',
    },
    example: {
      control: 'text',
      description: 'Optional example usage',
    },
    compact: {
      control: 'boolean',
      description: 'Compact variant',
    },
    inline: {
      control: 'boolean',
      description: 'Inline variant for glossary lists',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DefinitionBlock>;

export const Default: Story = {
  args: {
    term: 'SDD (Specification-Driven Development)',
    definition: 'A methodology that emphasizes creating detailed specifications before implementation. It ensures clear requirements, reduces rework, and enables better collaboration between stakeholders and developers.',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '640px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithPhonetic: Story = {
  args: {
    term: 'SCAMPER',
    phonetic: '/ˈskampər/',
    definition: 'A creative thinking technique that uses seven types of questions to spark new ideas: Substitute, Combine, Adapt, Modify, Put to other uses, Eliminate, and Reverse.',
    category: 'Research',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '640px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithExample: Story = {
  args: {
    term: 'MVP (Minimum Viable Product)',
    definition: 'The simplest version of a product that can be released to early customers to validate assumptions and gather feedback.',
    category: 'Product',
    example: 'Dropbox launched with just a demo video explaining the concept, before building the actual product. This MVP validated demand with minimal investment.',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '640px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithCategory: Story = {
  args: {
    term: 'RAG (Retrieval-Augmented Generation)',
    definition: 'An AI technique that combines large language models with external knowledge retrieval. The system first retrieves relevant documents, then uses them as context for generating accurate, grounded responses.',
    category: 'AI/ML',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '640px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Compact: Story = {
  args: {
    term: 'API',
    definition: 'Application Programming Interface - a set of rules and protocols that allows different software applications to communicate with each other.',
    compact: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '480px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Inline: Story = {
  render: () => (
    <div style={{ maxWidth: '640px' }}>
      <dl style={{ margin: 0 }}>
        <DefinitionBlock
          term="CI/CD"
          definition="Continuous Integration and Continuous Deployment"
          inline
        />
        <DefinitionBlock
          term="IaC"
          definition="Infrastructure as Code - managing infrastructure through code files"
          inline
        />
        <DefinitionBlock
          term="K8s"
          definition="Kubernetes - container orchestration platform"
          inline
        />
      </dl>
    </div>
  ),
};

export const Glossary: Story = {
  render: () => (
    <div style={{ maxWidth: '720px', fontFamily: 'Inter, sans-serif' }}>
      <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '28px', marginBottom: '24px', color: '#1C1C1E' }}>
        Glossary
      </h2>

      <DefinitionBlock
        term="Acceptance Criteria"
        definition="Specific conditions that a software feature must meet to be accepted by the stakeholder. Usually written in Given-When-Then format."
        category="BA"
        id="acceptance-criteria"
      />

      <DefinitionBlock
        term="Backlog"
        definition="A prioritized list of work items (features, bugs, tasks) that need to be completed. In Agile, the product backlog is managed by the Product Owner."
        category="PM"
        id="backlog"
      />

      <DefinitionBlock
        term="Constitution"
        definition="In SDD methodology, the foundational document that defines project standards, architecture decisions, and core principles. It serves as the source of truth for all development decisions."
        category="SDD"
        id="constitution"
      />
    </div>
  ),
};

export const InArticle: Story = {
  render: () => (
    <div style={{ maxWidth: '720px', fontFamily: 'Inter, sans-serif' }}>
      <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '24px', marginBottom: '12px', color: '#1C1C1E' }}>
        Understanding the Mom Test
      </h2>
      <p style={{ color: '#4A4A4A', lineHeight: 1.7, marginBottom: '24px' }}>
        Before we dive into the methodology, let us define some key terms you will encounter.
      </p>

      <DefinitionBlock
        term="The Mom Test"
        definition="A set of rules for having customer conversations that reveal truth instead of false positives. Named because even your mom would give you honest feedback if you follow these rules."
        category="Research"
        example="Instead of asking 'Would you buy this?', ask 'Tell me about the last time you had this problem. What did you do?'"
      />

      <p style={{ color: '#4A4A4A', lineHeight: 1.7, marginTop: '24px' }}>
        The key insight from the Mom Test is that people are terrible at predicting their future behavior,
        but they can accurately describe their past actions and frustrations.
      </p>
    </div>
  ),
};

export const Complete: Story = {
  args: {
    term: 'MCP (Model Context Protocol)',
    phonetic: '/em-siː-piː/',
    definition: 'A protocol developed by Anthropic for connecting AI models to external tools and data sources. It enables Claude to access real-time information, execute code, and interact with external services through a standardized interface.',
    category: 'AI',
    example: 'A developer configures an MCP server to give Claude access to their codebase, allowing the AI to read files, run tests, and make edits directly.',
    id: 'mcp',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '640px' }}>
        <Story />
      </div>
    ),
  ],
};
