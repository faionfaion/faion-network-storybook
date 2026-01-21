import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import InviteModal from './InviteModal';

const meta: Meta<typeof InviteModal> = {
  title: 'TeamManagement/InviteModal',
  component: InviteModal,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Modal for inviting team members with email input and role selection.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InviteModal>;

const mockInvite = async (emails: string[], role: string) => {
  console.log('Inviting:', emails, 'with role:', role);
  await new Promise((resolve) => setTimeout(resolve, 1500));
};

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => console.log('Close'),
    onInvite: mockInvite,
  },
};

export const WithSeatLimit: Story = {
  args: {
    isOpen: true,
    onClose: () => console.log('Close'),
    onInvite: mockInvite,
    availableSeats: 3,
  },
};

export const NoSeatsAvailable: Story = {
  args: {
    isOpen: true,
    onClose: () => console.log('Close'),
    onInvite: mockInvite,
    availableSeats: 0,
  },
};

export const Interactive: Story = {
  render: function InteractiveStory() {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div style={{ padding: '40px', background: '#FAF9F6', minHeight: '300px' }}>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            fontWeight: 500,
            padding: '10px 20px',
            background: '#5D1F2D',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Invite Team Members
        </button>

        <InviteModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onInvite={async (emails, role) => {
            await mockInvite(emails, role);
            setIsOpen(false);
          }}
          availableSeats={5}
        />
      </div>
    );
  },
};
