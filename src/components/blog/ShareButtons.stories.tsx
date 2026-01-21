import type { Meta, StoryObj } from '@storybook/react';
import ShareButtons from './ShareButtons';

const meta: Meta<typeof ShareButtons> = {
  title: 'Blog/ShareButtons',
  component: ShareButtons,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Social sharing buttons with Twitter/X, LinkedIn, Facebook, and copy link options.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ShareButtons>;

export const Default: Story = {
  args: {
    url: 'https://faion.net/blog/building-first-mvp',
    title: 'Building Your First MVP: A Complete Guide',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const AllPlatforms: Story = {
  args: {
    url: 'https://faion.net/blog/building-first-mvp',
    title: 'Building Your First MVP: A Complete Guide',
    platforms: ['twitter', 'linkedin', 'facebook', 'copy'],
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const TwitterOnly: Story = {
  args: {
    url: 'https://faion.net/blog/building-first-mvp',
    title: 'Building Your First MVP: A Complete Guide',
    platforms: ['twitter'],
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const CopyOnly: Story = {
  args: {
    url: 'https://faion.net/blog/building-first-mvp',
    title: 'Building Your First MVP: A Complete Guide',
    platforms: ['copy'],
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
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '24px',
      }}>
        <div>
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            color: '#4A4A4A',
          }}>
            Jan 15, 2026 · 8 min read
          </span>
        </div>
        <ShareButtons
          url="https://faion.net/blog/building-first-mvp"
          title="Building Your First MVP"
        />
      </div>
      <h1 style={{
        fontFamily: 'Georgia, serif',
        fontSize: '36px',
        fontWeight: 700,
        lineHeight: 1.2,
        color: '#1C1C1E',
      }}>
        Building Your First MVP: A Complete Guide
      </h1>
    </article>
  ),
};
