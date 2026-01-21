import type { Meta, StoryObj } from '@storybook/react';
import RelatedPosts from './RelatedPosts';

const meta: Meta<typeof RelatedPosts> = {
  title: 'Blog/RelatedPosts',
  component: RelatedPosts,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Related posts section for content discovery at the end of blog posts.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RelatedPosts>;

const samplePosts = [
  {
    title: 'SDD Methodology: A Complete Overview',
    href: '/blog/sdd-methodology',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
  },
  {
    title: 'Marketing for Solopreneurs: Go-to-Market Strategy',
    href: '/blog/marketing-solopreneurs',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    title: 'Understanding RAG Pipelines: From Basics to Advanced',
    href: '/blog/understanding-rag',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80',
  },
];

export const Default: Story = {
  args: {
    posts: samplePosts,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '800px' }}>
        <Story />
      </div>
    ),
  ],
};

export const CustomTitle: Story = {
  args: {
    posts: samplePosts,
    title: 'You might also like',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '800px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithoutImages: Story = {
  args: {
    posts: samplePosts.map(({ title, href }) => ({ title, href })),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '800px' }}>
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
      <div style={{ maxWidth: '800px' }}>
        <Story />
      </div>
    ),
  ],
};

export const InArticle: Story = {
  render: () => (
    <article style={{ maxWidth: '700px', fontFamily: 'Inter, sans-serif' }}>
      <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#4A4A4A', marginBottom: '24px' }}>
        This concludes our guide to building your first MVP. Remember, the key is to
        start small, validate early, and iterate based on real user feedback.
      </p>

      <RelatedPosts posts={samplePosts} />
    </article>
  ),
};
