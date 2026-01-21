import type { Meta, StoryObj } from '@storybook/react';
import ProgressOverview from './ProgressOverview';

const meta: Meta<typeof ProgressOverview> = {
  title: 'UserDashboard/ProgressOverview',
  component: ProgressOverview,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Displays user progress across different content areas with progress bars.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProgressOverview>;

export const Default: Story = {
  args: {
    title: 'Your Progress',
    items: [
      { id: '1', label: 'SDD Methodology', current: 12, total: 17 },
      { id: '2', label: 'Product Management', current: 8, total: 33 },
      { id: '3', label: 'Software Development', current: 45, total: 106 },
      { id: '4', label: 'Marketing', current: 15, total: 86 },
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithLinks: Story = {
  args: {
    title: 'Roadmap Progress',
    items: [
      { id: '1', label: 'Getting Started', current: 5, total: 5, href: '/roadmap/getting-started' },
      { id: '2', label: 'Building Your MVP', current: 3, total: 8, href: '/roadmap/mvp' },
      { id: '3', label: 'Launch & Growth', current: 0, total: 12, href: '/roadmap/growth' },
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const SingleItem: Story = {
  args: {
    title: 'Course Progress',
    items: [
      { id: '1', label: 'SDD Fundamentals', current: 7, total: 10 },
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const AllComplete: Story = {
  args: {
    title: 'Achievements',
    items: [
      { id: '1', label: 'Beginner Path', current: 10, total: 10 },
      { id: '2', label: 'Intermediate Path', current: 15, total: 15 },
      { id: '3', label: 'Advanced Path', current: 8, total: 8 },
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};
