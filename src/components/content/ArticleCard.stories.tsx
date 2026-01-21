import type { Meta, StoryObj } from '@storybook/react';
import ArticleCard from './ArticleCard';

const meta: Meta<typeof ArticleCard> = {
  title: 'Content/ArticleCard',
  component: ArticleCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Card component for displaying article previews with image, title, excerpt, and metadata.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'horizontal', 'compact', 'featured'],
      description: 'Card variant',
    },
    difficulty: {
      control: 'select',
      options: ['beginner', 'intermediate', 'advanced'],
      description: 'Difficulty level',
    },
    isPremium: {
      control: 'boolean',
      description: 'Whether article is premium',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ArticleCard>;

export const Default: Story = {
  args: {
    title: 'How to Build a $20K/month Solo Business',
    excerpt: 'Learn the proven methodology that successful solopreneurs use to build sustainable businesses from scratch.',
    imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80',
    category: 'Business',
    date: 'Jan 15, 2026',
    readTime: 12,
    difficulty: 'beginner',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '360px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithPremiumBadge: Story = {
  args: {
    title: 'Advanced SDD Implementation Patterns',
    excerpt: 'Deep dive into specification-driven development with real-world examples and code samples.',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
    category: 'Development',
    date: 'Jan 18, 2026',
    readTime: 18,
    difficulty: 'advanced',
    isPremium: true,
    premiumTier: 'pro',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '360px' }}>
        <Story />
      </div>
    ),
  ],
};

export const NoImage: Story = {
  args: {
    title: 'Getting Started with AI Agents',
    excerpt: 'A beginner-friendly introduction to building AI agents using the Faion Network framework.',
    category: 'AI/ML',
    date: 'Jan 20, 2026',
    readTime: 8,
    difficulty: 'beginner',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '360px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Horizontal: Story = {
  args: {
    title: 'Complete Guide to RAG Pipelines',
    excerpt: 'Everything you need to know about building production-ready Retrieval Augmented Generation systems.',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80',
    category: 'AI/ML',
    date: 'Jan 12, 2026',
    readTime: 25,
    difficulty: 'intermediate',
    variant: 'horizontal',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '720px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Compact: Story = {
  args: {
    title: 'Quick Start: SDD in 5 Minutes',
    excerpt: 'Get started with Specification-Driven Development in just 5 minutes.',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
    category: 'Guide',
    date: 'Jan 21, 2026',
    readTime: 5,
    difficulty: 'beginner',
    variant: 'compact',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '280px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Featured: Story = {
  args: {
    title: 'The Ultimate Solopreneur Guide: From Employee to $20K/month',
    excerpt: 'Our flagship guide covering everything from finding your niche to scaling your solo business. Includes 500+ methodologies across 15 skills.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    category: 'Featured',
    date: 'Jan 1, 2026',
    readTime: 45,
    difficulty: 'beginner',
    variant: 'featured',
    isPremium: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '480px' }}>
        <Story />
      </div>
    ),
  ],
};

export const ArticleGrid: Story = {
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '24px',
      maxWidth: '1200px'
    }}>
      <ArticleCard
        title="Introduction to SDD"
        excerpt="Learn the fundamentals of Specification-Driven Development."
        imageUrl="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
        category="Methodology"
        date="Jan 15, 2026"
        readTime={8}
        difficulty="beginner"
      />
      <ArticleCard
        title="Building Your First AI Agent"
        excerpt="Step-by-step guide to creating an AI agent using our framework."
        imageUrl="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
        category="AI/ML"
        date="Jan 16, 2026"
        readTime={15}
        difficulty="intermediate"
        isPremium
      />
      <ArticleCard
        title="Market Research Methodology"
        excerpt="How to validate your business idea before building."
        imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
        category="Research"
        date="Jan 17, 2026"
        readTime={10}
        difficulty="beginner"
      />
      <ArticleCard
        title="DevOps for Solopreneurs"
        excerpt="Setting up CI/CD pipelines when you are a one-person team."
        imageUrl="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80"
        category="DevOps"
        date="Jan 18, 2026"
        readTime={20}
        difficulty="advanced"
        isPremium
        premiumTier="pro"
      />
      <ArticleCard
        title="UX Research on a Budget"
        excerpt="Conducting effective user research without breaking the bank."
        imageUrl="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80"
        category="UX/UI"
        date="Jan 19, 2026"
        readTime={12}
        difficulty="beginner"
      />
      <ArticleCard
        title="Landing Page Optimization"
        excerpt="Increase conversions with these proven landing page techniques."
        imageUrl="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80"
        category="Marketing"
        date="Jan 20, 2026"
        readTime={14}
        difficulty="intermediate"
        isPremium
      />
    </div>
  ),
};

export const AllDifficulties: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px' }}>
      <div style={{ width: '300px' }}>
        <ArticleCard
          title="Getting Started Guide"
          excerpt="Perfect for beginners new to the framework."
          category="Guide"
          date="Jan 21, 2026"
          readTime={5}
          difficulty="beginner"
        />
      </div>
      <div style={{ width: '300px' }}>
        <ArticleCard
          title="Configuration Deep Dive"
          excerpt="For those who have completed the basics."
          category="Guide"
          date="Jan 21, 2026"
          readTime={15}
          difficulty="intermediate"
        />
      </div>
      <div style={{ width: '300px' }}>
        <ArticleCard
          title="Custom Extensions"
          excerpt="Advanced patterns for experienced users."
          category="Guide"
          date="Jan 21, 2026"
          readTime={25}
          difficulty="advanced"
        />
      </div>
    </div>
  ),
};
