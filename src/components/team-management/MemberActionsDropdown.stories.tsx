import type { Meta, StoryObj } from '@storybook/react';
import MemberActionsDropdown from './MemberActionsDropdown';

const meta: Meta<typeof MemberActionsDropdown> = {
  title: 'TeamManagement/MemberActionsDropdown',
  component: MemberActionsDropdown,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Dropdown menu with role change and remove actions for team members.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MemberActionsDropdown>;

export const AdminRole: Story = {
  args: {
    memberId: '123',
    memberRole: 'admin',
    onChangeRole: (role) => console.log('Change role to:', role),
    onRemove: () => console.log('Remove member'),
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px', display: 'flex', justifyContent: 'flex-end' }}>
        <Story />
      </div>
    ),
  ],
};

export const MemberRole: Story = {
  args: {
    memberId: '456',
    memberRole: 'member',
    onChangeRole: (role) => console.log('Change role to:', role),
    onRemove: () => console.log('Remove member'),
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px', display: 'flex', justifyContent: 'flex-end' }}>
        <Story />
      </div>
    ),
  ],
};

export const Disabled: Story = {
  args: {
    memberId: '789',
    memberRole: 'admin',
    onChangeRole: (role) => console.log('Change role to:', role),
    onRemove: () => console.log('Remove member'),
    disabled: true,
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px', display: 'flex', justifyContent: 'flex-end' }}>
        <Story />
      </div>
    ),
  ],
};

export const InContext: Story = {
  render: () => (
    <div style={{ maxWidth: '400px', background: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '8px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#E5E5E0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600, color: '#4A4A4A' }}>
            JD
          </div>
          <div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500, color: '#1C1C1E' }}>
              Jane Developer
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#6B6B6B' }}>
              jane@company.com
            </div>
          </div>
        </div>
        <MemberActionsDropdown
          memberId="123"
          memberRole="admin"
          onChangeRole={(role) => console.log('Change role to:', role)}
          onRemove={() => console.log('Remove member')}
        />
      </div>
    </div>
  ),
};
