import type { Meta, StoryObj } from '@storybook/react';
import Term from './Term';

const meta: Meta<typeof Term> = {
  title: 'MDX/Term',
  component: Term,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Inline term with tooltip definition for technical terms, acronyms, and jargon.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Term>;

export const Default: Story = {
  args: {
    term: 'SDD',
    definition: 'Specification-Driven Development - a methodology that emphasizes clear documentation before implementation.',
    children: 'SDD',
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '60px 40px', fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: 1.7 }}>
        <p>
          The <Story /> methodology helps teams build better software.
        </p>
      </div>
    ),
  ],
};

export const WithLink: Story = {
  args: {
    term: 'MCP',
    definition: 'Model Context Protocol - a standardized way for AI models to interact with external tools and data sources.',
    href: '/glossary/mcp',
    children: 'MCP',
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '60px 40px', fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: 1.7 }}>
        <p>
          Content is delivered via <Story /> server.
        </p>
      </div>
    ),
  ],
};

export const LongDefinition: Story = {
  args: {
    term: 'RAG',
    definition: 'Retrieval-Augmented Generation - an AI technique that combines large language models with a retrieval system to generate responses based on relevant documents from a knowledge base, improving accuracy and reducing hallucinations.',
    children: 'RAG pipeline',
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '60px 40px', fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: 1.7 }}>
        <p>
          You can build a <Story /> using LangChain or LlamaIndex.
        </p>
      </div>
    ),
  ],
};

export const MultipleTerms: Story = {
  render: () => (
    <div style={{ padding: '60px 40px', fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: 1.7, maxWidth: '600px' }}>
      <p style={{ color: '#4A4A4A' }}>
        The{' '}
        <Term
          term="SDD"
          definition="Specification-Driven Development - a methodology that emphasizes clear documentation before implementation."
        >
          SDD
        </Term>{' '}
        workflow starts with writing a specification, then creating a design document,
        and finally implementing tasks. Our{' '}
        <Term
          term="MCP"
          definition="Model Context Protocol - a standardized way for AI models to interact with external tools and data sources."
          href="/glossary/mcp"
        >
          MCP server
        </Term>{' '}
        delivers all 502 methodologies in real-time.
      </p>
    </div>
  ),
};

export const InArticle: Story = {
  render: () => (
    <article style={{ maxWidth: '700px', fontFamily: 'Inter, sans-serif', padding: '60px 20px' }}>
      <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '28px', marginBottom: '16px', color: '#1C1C1E' }}>
        Understanding the AI Development Stack
      </h2>
      <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A4A4A', marginBottom: '20px' }}>
        Modern AI development involves several key concepts. A{' '}
        <Term
          term="RAG"
          definition="Retrieval-Augmented Generation - combines LLMs with retrieval systems to generate responses based on relevant documents."
          href="/glossary/rag"
        >
          RAG pipeline
        </Term>{' '}
        allows you to ground your AI responses in factual data from your own knowledge base.
      </p>
      <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A4A4A', marginBottom: '20px' }}>
        To store and retrieve documents efficiently, you will use a{' '}
        <Term
          term="Vector Database"
          definition="A database optimized for storing and querying high-dimensional vectors, typically used for semantic search and similarity matching."
        >
          vector database
        </Term>{' '}
        like Pinecone, Chroma, or Weaviate. These databases use{' '}
        <Term
          term="Embeddings"
          definition="Dense numerical representations of text that capture semantic meaning, enabling similarity comparisons between documents."
        >
          embeddings
        </Term>{' '}
        to find semantically similar content.
      </p>
      <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#4A4A4A' }}>
        For orchestrating these components, frameworks like{' '}
        <Term
          term="LangChain"
          definition="A framework for developing applications powered by language models, providing tools for chains, agents, and memory."
          href="/glossary/langchain"
        >
          LangChain
        </Term>{' '}
        and{' '}
        <Term
          term="LlamaIndex"
          definition="A data framework for LLM applications, focused on connecting custom data sources to large language models."
          href="/glossary/llamaindex"
        >
          LlamaIndex
        </Term>{' '}
        provide helpful abstractions.
      </p>
    </article>
  ),
};
