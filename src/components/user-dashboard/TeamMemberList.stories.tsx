import type { Meta, StoryObj } from '@storybook/react';
import TeamMemberList from './TeamMemberList';

const meta: Meta<typeof TeamMemberList> = {
  title: 'UserDashboard/TeamMemberList',
  component: TeamMemberList,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Displays organization team members with role management.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TeamMemberList>;

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
  },
  {
    id: '5',
    name: 'Alex Johnson',
    email: 'alex@company.com',
    role: 'member' as const,
    status: 'active' as const,
    joinedAt: '2025-10-01',
  },
];

export const Default: Story = {
  args: {
    members: mockMembers,
    currentUserId: '1',
    onChangeRole: (id, role) => console.log('Change role:', id, role),
    onRemove: (id) => console.log('Remove:', id),
    onResendInvite: (id) => console.log('Resend invite:', id),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '800px' }}>
        <Story />
      </div>
    ),
  ],
};

export const AsAdmin: Story = {
  args: {
    members: mockMembers,
    currentUserId: '2',
    onChangeRole: (id, role) => console.log('Change role:', id, role),
    onRemove: (id) => console.log('Remove:', id),
    onResendInvite: (id) => console.log('Resend invite:', id),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '800px' }}>
        <Story />
      </div>
    ),
  ],
};

export const ReadOnly: Story = {
  args: {
    members: mockMembers,
    currentUserId: '3',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '800px' }}>
        <Story />
      </div>
    ),
  ],
};

export const SmallTeam: Story = {
  args: {
    members: mockMembers.slice(0, 2),
    currentUserId: '1',
    onChangeRole: (id, role) => console.log('Change role:', id, role),
    onRemove: (id) => console.log('Remove:', id),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '800px' }}>
        <Story />
      </div>
    ),
  ],
};
