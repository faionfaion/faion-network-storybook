import type { Meta, StoryObj } from '@storybook/react';
import AuthorBio from './AuthorBio';

const meta: Meta<typeof AuthorBio> = {
  title: 'Blog/AuthorBio',
  component: AuthorBio,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Full author biography section with avatar, bio, and social links.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AuthorBio>;

const sampleAuthor = {
  name: 'Ruslan Faion',
  bio: 'Founder of Faion Network. Building tools and methodologies for solopreneurs. 15+ years in software development, product management, and AI.',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ruslan',
  social: {
    twitter: 'https://twitter.com/ruslanfaion',
    linkedin: 'https://linkedin.com/in/ruslanfaion',
    github: 'https://github.com/ruslanfaion',
  },
};

export const Default: Story = {
  args: {
    author: sampleAuthor,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithoutSocial: Story = {
  args: {
    author: {
      name: 'Jane Developer',
      bio: 'Full-stack developer passionate about building great products. Specializes in React, TypeScript, and Node.js.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=jane',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const PartialSocial: Story = {
  args: {
    author: {
      name: 'Alex Designer',
      bio: 'UX/UI designer creating beautiful and functional interfaces. Love minimal design and user research.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alex',
      social: {
        twitter: 'https://twitter.com/alexdesigner',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const LongBio: Story = {
  args: {
    author: {
      ...sampleAuthor,
      bio: 'Founder of Faion Network. Building tools and methodologies for solopreneurs. 15+ years in software development, product management, and AI. Author of the Ultimate Solopreneur Guide and SDD methodology. Previously worked at major tech companies building products used by millions.',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const InArticle: Story = {
  render: () => (
    <article style={{ maxWidth: '700px', fontFamily: 'Inter, sans-serif' }}>
      <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#4A4A4A', marginBottom: '32px' }}>
        This concludes our guide to building your first MVP. Remember, the key is to
        start small, validate early, and iterate based on real user feedback.
      </p>

      <div style={{ borderTop: '1px solid #E5E5E0', paddingTop: '32px' }}>
        <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600, color: '#4A4A4A', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
          About the Author
        </h4>
        <AuthorBio author={sampleAuthor} />
      </div>
    </article>
  ),
};
