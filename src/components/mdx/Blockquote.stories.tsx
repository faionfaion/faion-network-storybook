import type { Meta, StoryObj } from '@storybook/react';
import Blockquote from './Blockquote';

const meta: Meta<typeof Blockquote> = {
  title: 'MDX/Blockquote',
  component: Blockquote,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Styled quote block with optional author and source attribution.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Blockquote>;

export const Default: Story = {
  args: {
    children: 'The best time to plant a tree was 20 years ago. The second best time is now.',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithAuthor: Story = {
  args: {
    children: 'The best way to predict the future is to invent it.',
    author: 'Alan Kay',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithAuthorAndSource: Story = {
  args: {
    children: 'In the middle of difficulty lies opportunity.',
    author: 'Albert Einstein',
    source: 'Letter to a friend, 1939',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithSourceOnly: Story = {
  args: {
    children: 'Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.',
    source: 'Facebook internal motto (2004-2014)',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const LongQuote: Story = {
  args: {
    children: (
      <>
        <p>
          It is not the critic who counts; not the man who points out how the strong man
          stumbles, or where the doer of deeds could have done them better.
        </p>
        <p>
          The credit belongs to the man who is actually in the arena, whose face is marred
          by dust and sweat and blood; who strives valiantly; who errs, who comes short
          again and again.
        </p>
      </>
    ),
    author: 'Theodore Roosevelt',
    source: 'Citizenship in a Republic, 1910',
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
      <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '28px', marginBottom: '16px', color: '#1C1C1E' }}>
        The Power of Starting Small
      </h2>
      <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#4A4A4A', marginBottom: '16px' }}>
        When building a product, the temptation is to wait until everything is perfect.
        But perfect is the enemy of good, and waiting too long means missing opportunities.
      </p>

      <Blockquote author="Reid Hoffman" source="Co-founder, LinkedIn">
        If you are not embarrassed by the first version of your product, you have launched
        too late.
      </Blockquote>

      <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#4A4A4A', marginTop: '16px' }}>
        This principle applies not just to startups but to any creative endeavor. The key
        is to ship early, gather feedback, and iterate quickly.
      </p>

      <Blockquote author="Paul Graham" source="Y Combinator">
        Do things that do not scale. In the early days, go out and recruit users manually.
        It is the only way to truly understand what your customers need.
      </Blockquote>

      <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#4A4A4A', marginTop: '16px' }}>
        The SDD methodology embraces this philosophy by encouraging small, validated steps
        before committing to large implementations.
      </p>
    </article>
  ),
};
