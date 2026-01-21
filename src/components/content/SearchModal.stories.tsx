import type { Meta, StoryObj } from '@storybook/react';
import { useState, useEffect } from 'react';
import SearchModal, { type SearchResultItem } from './SearchModal';

const meta: Meta<typeof SearchModal> = {
  title: 'Content/SearchModal',
  component: SearchModal,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Full-screen search overlay with Cmd+K keyboard shortcut. Provides fast, keyboard-accessible search experience.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SearchModal>;

// Mock search results
const mockResults: SearchResultItem[] = [
  {
    id: '1',
    title: 'SDD Workflow Overview',
    excerpt: 'Learn the complete Specification-Driven Development workflow',
    category: 'Methodology',
    href: '/methodologies/sdd-workflow',
    type: 'methodology',
  },
  {
    id: '2',
    title: 'Building AI Agents with MCP',
    excerpt: 'Step-by-step guide to creating AI agents using Model Context Protocol',
    category: 'AI/ML',
    href: '/articles/ai-agents-mcp',
    type: 'article',
  },
  {
    id: '3',
    title: 'Market Research for Solopreneurs',
    excerpt: 'How to validate your business idea before building',
    category: 'Research',
    href: '/methodologies/market-research',
    type: 'methodology',
  },
  {
    id: '4',
    title: 'React Component Patterns',
    excerpt: 'Modern React patterns for scalable applications',
    category: 'Development',
    href: '/articles/react-patterns',
    type: 'article',
  },
  {
    id: '5',
    title: 'GTM Strategy Framework',
    excerpt: 'Go-to-market strategies for solopreneurs',
    category: 'Marketing',
    href: '/methodologies/gtm-strategy',
    type: 'methodology',
  },
];

const recentSearches = [
  'SDD workflow',
  'AI agents',
  'pricing strategy',
  'market research',
];

// Interactive wrapper
const SearchModalInteractive = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [results, setResults] = useState<SearchResultItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Handle Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSearch = (query: string) => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      const filtered = mockResults.filter(
        (r) =>
          r.title.toLowerCase().includes(query.toLowerCase()) ||
          r.excerpt?.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setIsLoading(false);
    }, 300);
  };

  return (
    <div style={{ padding: '20px' }}>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          padding: '12px 24px',
          background: '#5D1F2D',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
          fontWeight: 500,
          cursor: 'pointer',
        }}
      >
        Open Search (Cmd+K)
      </button>

      <SearchModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSearch={handleSearch}
        results={results}
        isLoading={isLoading}
        recentSearches={recentSearches}
        onClearRecent={() => console.log('Clear recent')}
        onResultClick={(result) => console.log('Clicked:', result)}
      />
    </div>
  );
};

export const Default: Story = {
  render: () => <SearchModalInteractive />,
};

export const WithResults: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    onSearch: () => {},
    results: mockResults,
  },
};

export const Loading: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    onSearch: () => {},
    isLoading: true,
  },
};

export const EmptyState: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    onSearch: () => {},
    results: [],
  },
};

export const WithRecentSearches: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    onSearch: () => {},
    recentSearches: recentSearches,
    onClearRecent: () => {},
  },
};
