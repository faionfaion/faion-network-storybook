import type { Meta, StoryObj } from '@storybook/react';
import ActivityFeed from './ActivityFeed';

const meta: Meta<typeof ActivityFeed> = {
  title: 'UserDashboard/ActivityFeed',
  component: ActivityFeed,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Displays a timeline of recent user activity like reading, completing, or saving content.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ActivityFeed>;

const now = new Date();
const mockItems = [
  {
    id: '1',
    type: 'completed' as const,
    title: 'SDD Workflow Overview',
    description: 'Completed the methodology',
    href: '/methodologies/sdd-workflow-overview',
    timestamp: new Date(now.getTime() - 15 * 60 * 1000).toISOString(), // 15 min ago
  },
  {
    id: '2',
    type: 'read' as const,
    title: 'RAG Pipeline Architecture',
    href: '/methodologies/rag-pipeline',
    timestamp: new Date(now.getTime() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
  },
  {
    id: '3',
    type: 'saved' as const,
    title: 'GTM Strategy Framework',
    description: 'Added to favorites',
    href: '/methodologies/gtm-strategy',
    timestamp: new Date(now.getTime() - 5 * 60 * 60 * 1000).toISOString(), // 5 hours ago
  },
  {
    id: '4',
    type: 'started' as const,
    title: 'Product Management Roadmap',
    description: 'Started learning path',
    href: '/roadmaps/product-management',
    timestamp: new Date(now.getTime() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
  },
  {
    id: '5',
    type: 'achievement' as const,
    title: 'First 10 Methodologies',
    description: 'Unlocked achievement',
    timestamp: new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
  },
  {
    id: '6',
    type: 'read' as const,
    title: 'RICE Prioritization',
    href: '/methodologies/rice-prioritization',
    timestamp: new Date(now.getTime() - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days ago
  },
];

export const Default: Story = {
  args: {
    items: mockItems,
    maxItems: 5,
    showViewAll: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const AllItems: Story = {
  args: {
    items: mockItems,
    maxItems: 10,
    showViewAll: false,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Empty: Story = {
  args: {
    items: [],
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const FewItems: Story = {
  args: {
    items: mockItems.slice(0, 2),
    maxItems: 5,
    showViewAll: false,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};
