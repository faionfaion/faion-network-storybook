import type { Meta, StoryObj } from '@storybook/react';
import RoleBadge from './RoleBadge';

const meta: Meta<typeof RoleBadge> = {
  title: 'TeamManagement/RoleBadge',
  component: RoleBadge,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Color-coded badge for displaying team member roles.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RoleBadge>;

export const Owner: Story = {
  args: {
    role: 'owner',
  },
};

export const Admin: Story = {
  args: {
    role: 'admin',
  },
};

export const Member: Story = {
  args: {
    role: 'member',
  },
};

export const AllRoles: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <RoleBadge role="owner" />
      <RoleBadge role="admin" />
      <RoleBadge role="member" />
    </div>
  ),
};
