import type { Meta, StoryObj } from '@storybook/react';
import PremiumLoadingSkeleton from './PremiumLoadingSkeleton';

const meta: Meta<typeof PremiumLoadingSkeleton> = {
  title: 'Paywall/PremiumLoadingSkeleton',
  component: PremiumLoadingSkeleton,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Loading skeleton for premium content areas with shimmer animation.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    layout: {
      control: 'select',
      options: ['article', 'card', 'grid'],
      description: 'Layout preset',
    },
    lines: {
      control: { type: 'range', min: 1, max: 8 },
      description: 'Number of lines',
    },
    showTitle: {
      control: 'boolean',
      description: 'Show title skeleton',
    },
    showMedia: {
      control: 'boolean',
      description: 'Show media skeleton',
    },
    columns: {
      control: 'select',
      options: [2, 3],
      description: 'Grid columns',
    },
    cardCount: {
      control: { type: 'range', min: 1, max: 9 },
      description: 'Number of cards',
    },
  },
};

export default meta;
type Story = StoryObj<typeof PremiumLoadingSkeleton>;

export const Article: Story = {
  args: {
    layout: 'article',
    lines: 4,
    showTitle: true,
    showMedia: false,
  },
};

export const ArticleWithMedia: Story = {
  args: {
    layout: 'article',
    lines: 4,
    showTitle: true,
    showMedia: true,
    mediaAspect: 'video',
  },
};

export const Card: Story = {
  args: {
    layout: 'card',
  },
};

export const Grid2Columns: Story = {
  args: {
    layout: 'grid',
    columns: 2,
    cardCount: 4,
  },
};

export const Grid3Columns: Story = {
  args: {
    layout: 'grid',
    columns: 3,
    cardCount: 6,
  },
};

export const MinimalLines: Story = {
  args: {
    layout: 'article',
    lines: 2,
    showTitle: true,
    showMedia: false,
  },
};

export const MediaOnly: Story = {
  args: {
    layout: 'article',
    lines: 0,
    showTitle: false,
    showMedia: true,
    mediaAspect: 'wide',
  },
};

export const InContentGateContext: Story = {
  render: () => (
    <div style={{
      padding: '32px',
      background: '#FAF9F6',
      borderRadius: '8px',
      border: '1px solid #E5E5E0'
    }}>
      <div style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        color: '#4A4A4A',
        marginBottom: '24px',
        textAlign: 'center'
      }}>
        Checking subscription status...
      </div>
      <PremiumLoadingSkeleton
        layout="article"
        lines={4}
        showTitle={true}
        showMedia={true}
      />
    </div>
  ),
};

export const MultipleCards: Story = {
  render: () => (
    <div>
      <h2 style={{
        fontFamily: 'Georgia, serif',
        fontSize: '24px',
        color: '#1C1C1E',
        marginBottom: '24px'
      }}>
        Loading methodologies...
      </h2>
      <PremiumLoadingSkeleton
        layout="grid"
        columns={3}
        cardCount={6}
      />
    </div>
  ),
};
