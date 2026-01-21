import type { Meta, StoryObj } from '@storybook/react';
import AuthorByline from './AuthorByline';

const meta: Meta<typeof AuthorByline> = {
  title: 'Blog/AuthorByline',
  component: AuthorByline,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Compact inline author credit for article headers and listings.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AuthorByline>;

export const Default: Story = {
  args: {
    name: 'Ruslan Faion',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ruslan',
    publishedAt: '2026-01-15T10:00:00Z',
    readTime: 8,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithLink: Story = {
  args: {
    name: 'Ruslan Faion',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ruslan',
    href: '/author/ruslan-faion',
    publishedAt: '2026-01-15T10:00:00Z',
    readTime: 8,
  },
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
    name: 'Anonymous Author',
    publishedAt: '2026-01-15T10:00:00Z',
    readTime: 5,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const NameOnly: Story = {
  args: {
    name: 'Ruslan Faion',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ruslan',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const DateOnly: Story = {
  args: {
    name: 'Ruslan Faion',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ruslan',
    publishedAt: '2026-01-15T10:00:00Z',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const InArticleHeader: Story = {
  render: () => (
    <article style={{ maxWidth: '700px', fontFamily: 'Inter, sans-serif' }}>
      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '12px',
        fontWeight: 600,
        color: '#5D1F2D',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        marginBottom: '12px',
      }}>
        Product
      </p>
      <h1 style={{
        fontFamily: 'Georgia, serif',
        fontSize: '36px',
        fontWeight: 700,
        lineHeight: 1.2,
        color: '#1C1C1E',
        marginBottom: '16px',
      }}>
        Building Your First MVP: A Complete Guide
      </h1>
      <p style={{
        fontSize: '18px',
        lineHeight: 1.6,
        color: '#4A4A4A',
        marginBottom: '24px',
      }}>
        Learn the step-by-step process of building a minimum viable product
        that validates your business idea without wasting time or resources.
      </p>
      <AuthorByline
        name="Ruslan Faion"
        avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=ruslan"
        href="/author/ruslan-faion"
        publishedAt="2026-01-15T10:00:00Z"
        readTime={8}
      />
    </article>
  ),
};
