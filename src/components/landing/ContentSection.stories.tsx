import type { Meta, StoryObj } from '@storybook/react';
import ContentSection from './ContentSection';

const meta: Meta<typeof ContentSection> = {
  title: 'Landing/ContentSection',
  component: ContentSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Content preview section for the landing page. Shows methodologies, articles, and educational material with category filtering and featured content highlight.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ContentSection>;

const sampleCategories = [
  { id: 'product', name: 'Product', count: 33 },
  { id: 'development', name: 'Development', count: 106 },
  { id: 'marketing', name: 'Marketing', count: 86 },
  { id: 'ai', name: 'AI/ML', count: 42 },
  { id: 'devops', name: 'DevOps', count: 26 },
];

const sampleFeaturedItem = {
  id: 'featured-1',
  title: 'The Complete Guide to MVP Development',
  category: 'Product',
  description:
    'Learn how to validate your idea, build a minimum viable product, and launch to your first customers in just 4 weeks.',
  readTime: 15,
  difficulty: 'beginner' as const,
  isPremium: true,
};

const sampleItems = [
  {
    id: '1',
    title: 'Understanding RICE Framework',
    category: 'Product',
    description: 'Prioritize your product features using the RICE scoring model.',
    readTime: 8,
    difficulty: 'beginner' as const,
    isPremium: false,
  },
  {
    id: '2',
    title: 'RAG Pipeline Architecture',
    category: 'AI/ML',
    description: 'Build production-ready retrieval-augmented generation systems.',
    readTime: 12,
    difficulty: 'advanced' as const,
    isPremium: true,
  },
  {
    id: '3',
    title: 'Landing Page Optimization',
    category: 'Marketing',
    description: 'Convert more visitors with high-performing landing pages.',
    readTime: 10,
    difficulty: 'intermediate' as const,
    isPremium: true,
  },
  {
    id: '4',
    title: 'Docker Fundamentals',
    category: 'DevOps',
    description: 'Containerize your applications for consistent deployments.',
    readTime: 15,
    difficulty: 'beginner' as const,
    isPremium: false,
  },
  {
    id: '5',
    title: 'React Component Patterns',
    category: 'Development',
    description: 'Master advanced patterns for building maintainable components.',
    readTime: 20,
    difficulty: 'intermediate' as const,
    isPremium: true,
  },
  {
    id: '6',
    title: 'User Story Mapping',
    category: 'Product',
    description: 'Visualize your product backlog and plan releases effectively.',
    readTime: 7,
    difficulty: 'beginner' as const,
    isPremium: false,
  },
];

/**
 * Default content section with all features
 */
export const Default: Story = {
  args: {
    headline: 'Explore Our Methodologies',
    subheadline:
      'From idea validation to scaling your business, we cover every stage of the solopreneur journey.',
    featuredItem: sampleFeaturedItem,
    items: sampleItems,
    categories: sampleCategories,
    activeCategory: 'all',
    browseAllText: 'Browse All 502 Methodologies',
    onBrowseAllClick: () => console.log('Browse all clicked'),
    onCategoryChange: (cat) => console.log('Category changed:', cat),
  },
};

/**
 * Without featured item
 */
export const WithoutFeatured: Story = {
  args: {
    headline: 'Latest Methodologies',
    subheadline: 'Discover practical frameworks to accelerate your growth.',
    items: sampleItems,
    categories: sampleCategories,
    browseAllText: 'View All Content',
    onBrowseAllClick: () => console.log('Browse all clicked'),
  },
};

/**
 * Without category filters
 */
export const WithoutFilters: Story = {
  args: {
    headline: 'Featured Content',
    subheadline: 'Hand-picked methodologies to get you started.',
    featuredItem: sampleFeaturedItem,
    items: sampleItems.slice(0, 3),
    browseAllText: 'See More',
    onBrowseAllClick: () => console.log('Browse all clicked'),
  },
};

/**
 * Minimal - just cards
 */
export const Minimal: Story = {
  args: {
    headline: 'Quick Start Guides',
    items: sampleItems.slice(0, 3),
  },
};

/**
 * With active category filter
 */
export const FilteredByCategory: Story = {
  args: {
    headline: 'AI/ML Methodologies',
    subheadline: 'Master LLM APIs, RAG pipelines, and AI agent development.',
    items: sampleItems.filter((item) => item.category === 'AI/ML'),
    categories: sampleCategories,
    activeCategory: 'ai',
    browseAllText: 'Browse All AI/ML Content',
    onBrowseAllClick: () => console.log('Browse all clicked'),
    onCategoryChange: (cat) => console.log('Category changed:', cat),
  },
};

/**
 * Empty state
 */
export const Empty: Story = {
  args: {
    headline: 'No Results Found',
    subheadline: 'Try adjusting your filters or browse all content.',
    items: [],
    categories: sampleCategories,
    browseAllText: 'Browse All Content',
    onBrowseAllClick: () => console.log('Browse all clicked'),
  },
};
