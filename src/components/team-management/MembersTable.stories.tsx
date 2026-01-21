import type { Meta, StoryObj } from '@storybook/react';
import MembersTable from './MembersTable';

const meta: Meta<typeof MembersTable> = {
  title: 'TeamManagement/MembersTable',
  component: MembersTable,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Full table layout for displaying team members with actions.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MembersTable>;

const mockMembers = [
  {
    id: '1',
    name: 'Ruslan Faion',
    email: 'ruslan@faion.net',
    role: 'owner' as const,
    status: 'active' as const,
    joinedAt: '2025-01-01',
  },
  {
    id: '2',
    name: 'Jane Developer',
    email: 'jane@company.com',
    role: 'admin' as const,
    status: 'active' as const,
    joinedAt: '2025-06-15',
  },
  {
    id: '3',
    name: 'John Smith',
    email: 'john.smith@company.com',
    role: 'member' as const,
    status: 'active' as const,
    joinedAt: '2025-08-20',
  },
  {
    id: '4',
    email: 'pending@company.com',
    role: 'member' as const,
    status: 'pending' as const,
    joinedAt: '2026-01-15',
  },
];

export const Default: Story = {
  args: {
    members: mockMembers,
    onChangeRole: (id, role) => console.log('Change role:', id, role),
    onRemove: (id) => console.log('Remove:', id),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '900px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithRowClick: Story = {
  args: {
    members: mockMembers,
    onRowClick: (member) => console.log('Row clicked:', member),
    onChangeRole: (id, role) => console.log('Change role:', id, role),
    onRemove: (id) => console.log('Remove:', id),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '900px' }}>
        <Story />
      </div>
    ),
  ],
};

export const ReadOnly: Story = {
  args: {
    members: mockMembers,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '900px' }}>
        <Story />
      </div>
    ),
  ],
};
