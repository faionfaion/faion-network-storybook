import type { Meta, StoryObj } from '@storybook/react';
import CategoryCard from './CategoryCard';

const meta: Meta<typeof CategoryCard> = {
  title: 'Content/CategoryCard',
  component: CategoryCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Card component for category overview with icon, name, description, and count.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'compact', 'featured'],
      description: 'Card variant',
    },
    showArrow: {
      control: 'boolean',
      description: 'Show arrow on hover',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CategoryCard>;

// Icons
const DevelopmentIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const AIIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const ProductIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18" />
    <path d="M9 21V9" />
  </svg>
);

const MarketingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

export const Default: Story = {
  args: {
    name: 'Development',
    description: 'Python, JavaScript/TypeScript, backend, APIs, testing, and automation.',
    count: 106,
    icon: <DevelopmentIcon />,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Compact: Story = {
  args: {
    name: 'AI/ML',
    description: 'LLM APIs, RAG pipelines, embeddings, and AI agents.',
    count: 42,
    icon: <AIIcon />,
    variant: 'compact',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Featured: Story = {
  args: {
    name: 'SDD Methodology',
    description: 'Specification-Driven Development workflow from idea to implementation.',
    count: 17,
    variant: 'featured',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

export const NoDescription: Story = {
  args: {
    name: 'Product Management',
    count: 33,
    icon: <ProductIcon />,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '280px' }}>
        <Story />
      </div>
    ),
  ],
};

export const NoCount: Story = {
  args: {
    name: 'Marketing',
    description: 'GTM strategy, landing pages, SEO, content marketing, and ads.',
    icon: <MarketingIcon />,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

export const CategoryGrid: Story = {
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '24px',
      maxWidth: '1000px'
    }}>
      <CategoryCard
        name="SDD"
        description="Specification-Driven Development workflow."
        count={17}
        variant="featured"
      />
      <CategoryCard
        name="Development"
        description="Full-stack development with Python, JavaScript, and TypeScript."
        count={106}
        icon={<DevelopmentIcon />}
      />
      <CategoryCard
        name="AI/ML"
        description="LLM APIs, RAG pipelines, embeddings, and AI agents."
        count={42}
        icon={<AIIcon />}
      />
      <CategoryCard
        name="Product"
        description="MVP planning, roadmaps, and user story mapping."
        count={33}
        icon={<ProductIcon />}
      />
      <CategoryCard
        name="Marketing"
        description="GTM strategy, SEO, content marketing, and ads."
        count={86}
        icon={<MarketingIcon />}
      />
      <CategoryCard
        name="DevOps"
        description="Docker, Kubernetes, CI/CD, and infrastructure."
        count={26}
      />
    </div>
  ),
};

export const CompactList: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '480px' }}>
      <CategoryCard
        name="Development"
        description="Python, JS/TS, backend, APIs, testing"
        count={106}
        icon={<DevelopmentIcon />}
        variant="compact"
      />
      <CategoryCard
        name="AI/ML"
        description="LLM APIs, RAG, embeddings, agents"
        count={42}
        icon={<AIIcon />}
        variant="compact"
      />
      <CategoryCard
        name="Product"
        description="MVP, roadmaps, user stories"
        count={33}
        icon={<ProductIcon />}
        variant="compact"
      />
      <CategoryCard
        name="Marketing"
        description="GTM, SEO, content, ads"
        count={86}
        icon={<MarketingIcon />}
        variant="compact"
      />
    </div>
  ),
};

export const InSidebar: Story = {
  render: () => (
    <div style={{
      width: '280px',
      padding: '24px',
      background: '#FAF9F6',
      borderRadius: '8px'
    }}>
      <h3 style={{
        fontFamily: 'Georgia, serif',
        fontSize: '16px',
        marginBottom: '16px',
        color: '#1C1C1E'
      }}>
        Browse Categories
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <CategoryCard
          name="SDD"
          count={17}
          variant="compact"
          showArrow={false}
        />
        <CategoryCard
          name="Development"
          count={106}
          icon={<DevelopmentIcon />}
          variant="compact"
          showArrow={false}
        />
        <CategoryCard
          name="AI/ML"
          count={42}
          icon={<AIIcon />}
          variant="compact"
          showArrow={false}
        />
      </div>
    </div>
  ),
};
