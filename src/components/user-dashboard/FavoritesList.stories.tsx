import type { Meta, StoryObj } from '@storybook/react';
import FavoritesList from './FavoritesList';

const meta: Meta<typeof FavoritesList> = {
  title: 'UserDashboard/FavoritesList',
  component: FavoritesList,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Displays user\'s saved/favorited content with remove functionality.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FavoritesList>;

const mockItems = [
  {
    id: '1',
    title: 'SDD Workflow Overview',
    category: 'SDD Methodology',
    href: '/methodologies/sdd-workflow-overview',
  },
  {
    id: '2',
    title: 'RAG Pipeline Architecture',
    category: 'ML Engineering',
    href: '/methodologies/rag-pipeline',
  },
  {
    id: '3',
    title: 'GTM Strategy Framework',
    category: 'Marketing',
    href: '/methodologies/gtm-strategy',
  },
  {
    id: '4',
    title: 'RICE Prioritization',
    category: 'Product Management',
    href: '/methodologies/rice-prioritization',
  },
  {
    id: '5',
    title: 'User Story Mapping',
    category: 'Business Analysis',
    href: '/methodologies/user-story-mapping',
  },
  {
    id: '6',
    title: 'Docker Fundamentals',
    category: 'DevOps',
    href: '/methodologies/docker-fundamentals',
  },
];

export const Default: Story = {
  args: {
    items: mockItems,
    maxItems: 5,
    showViewAll: true,
    onRemove: (id) => console.log('Remove:', id),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithoutRemove: Story = {
  args: {
    items: mockItems.slice(0, 4),
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
    onRemove: (id) => console.log('Remove:', id),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};
