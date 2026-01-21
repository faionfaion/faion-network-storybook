import type { Meta, StoryObj } from '@storybook/react';
import BlogPostCard from './BlogPostCard';

const meta: Meta<typeof BlogPostCard> = {
  title: 'Blog/BlogPostCard',
  component: BlogPostCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Card for displaying blog post preview with image, title, excerpt, and metadata.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BlogPostCard>;

const samplePost = {
  title: 'Building Your First MVP: A Complete Guide',
  excerpt: 'Learn the step-by-step process of building a minimum viable product that validates your business idea without wasting time or resources.',
  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  category: 'Product',
  author: {
    name: 'Ruslan Faion',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ruslan',
  },
  publishedAt: '2026-01-15T10:00:00Z',
  readTime: 8,
  href: '/blog/building-first-mvp',
};

export const Default: Story = {
  args: samplePost,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithoutAvatar: Story = {
  args: {
    ...samplePost,
    author: { name: 'Anonymous Author' },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const LongTitle: Story = {
  args: {
    ...samplePost,
    title: 'The Complete Solopreneur Guide to Building and Scaling a Profitable SaaS Business in 2026',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const DifferentCategory: Story = {
  args: {
    ...samplePost,
    title: 'Understanding RAG Pipelines: From Basics to Advanced',
    category: 'AI/ML',
    readTime: 12,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Grid: Story = {
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
      gap: '24px',
      maxWidth: '1200px',
    }}>
      <BlogPostCard
        title="Building Your First MVP: A Complete Guide"
        excerpt="Learn the step-by-step process of building a minimum viable product."
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
        category="Product"
        author={{ name: 'Ruslan Faion', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ruslan' }}
        publishedAt="2026-01-15T10:00:00Z"
        readTime={8}
        href="#"
      />
      <BlogPostCard
        title="SDD Methodology: A Complete Overview"
        excerpt="Specification-Driven Development helps you build better software faster."
        image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80"
        category="SDD"
        author={{ name: 'Ruslan Faion', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ruslan' }}
        publishedAt="2026-01-10T10:00:00Z"
        readTime={10}
        href="#"
      />
      <BlogPostCard
        title="Marketing for Solopreneurs: GTM Strategy"
        excerpt="How to launch your product with a solid go-to-market strategy."
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
        category="Marketing"
        author={{ name: 'Ruslan Faion', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ruslan' }}
        publishedAt="2026-01-05T10:00:00Z"
        readTime={6}
        href="#"
      />
    </div>
  ),
};
