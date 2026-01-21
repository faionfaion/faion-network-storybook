import type { Meta, StoryObj } from '@storybook/react';
import FeaturedPosts from './FeaturedPosts';

const meta: Meta<typeof FeaturedPosts> = {
  title: 'Blog/FeaturedPosts',
  component: FeaturedPosts,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Featured posts grid section with hero post layout.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FeaturedPosts>;

const samplePosts = [
  {
    title: 'Building Your First MVP: A Complete Guide',
    excerpt: 'Learn the step-by-step process of building a minimum viable product that validates your business idea without wasting time or resources.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    category: 'Product',
    author: { name: 'Ruslan Faion', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ruslan' },
    publishedAt: '2026-01-15T10:00:00Z',
    readTime: 8,
    href: '/blog/building-first-mvp',
  },
  {
    title: 'SDD Methodology Overview',
    excerpt: 'Specification-Driven Development helps you build better software faster.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
    category: 'SDD',
    author: { name: 'Ruslan Faion', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ruslan' },
    publishedAt: '2026-01-10T10:00:00Z',
    readTime: 10,
    href: '/blog/sdd-methodology',
  },
  {
    title: 'Marketing for Solopreneurs',
    excerpt: 'How to launch your product with a solid go-to-market strategy.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    category: 'Marketing',
    author: { name: 'Ruslan Faion', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ruslan' },
    publishedAt: '2026-01-05T10:00:00Z',
    readTime: 6,
    href: '/blog/marketing-solopreneurs',
  },
  {
    title: 'Understanding RAG Pipelines',
    excerpt: 'From basics to advanced implementation of retrieval-augmented generation.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80',
    category: 'AI/ML',
    author: { name: 'Ruslan Faion', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ruslan' },
    publishedAt: '2026-01-01T10:00:00Z',
    readTime: 12,
    href: '/blog/understanding-rag',
  },
];

export const Default: Story = {
  args: {
    posts: samplePosts,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '1200px' }}>
        <Story />
      </div>
    ),
  ],
};

export const CustomTitle: Story = {
  args: {
    posts: samplePosts,
    title: 'Latest Articles',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '1200px' }}>
        <Story />
      </div>
    ),
  ],
};

export const TwoPosts: Story = {
  args: {
    posts: samplePosts.slice(0, 2),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '1200px' }}>
        <Story />
      </div>
    ),
  ],
};

export const SinglePost: Story = {
  args: {
    posts: [samplePosts[0]],
    title: 'Featured Article',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '1200px' }}>
        <Story />
      </div>
    ),
  ],
};
