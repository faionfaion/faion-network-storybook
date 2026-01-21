import type { Meta, StoryObj } from '@storybook/react';
import PasswordForm from './PasswordForm';

const meta: Meta<typeof PasswordForm> = {
  title: 'UserDashboard/PasswordForm',
  component: PasswordForm,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Form for changing account password with strength indicator.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PasswordForm>;

const mockSubmit = async (currentPassword: string, newPassword: string) => {
  console.log('Changing password:', { currentPassword, newPassword });
  await new Promise((resolve) => setTimeout(resolve, 1500));
};

const mockSubmitError = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  throw new Error('Current password is incorrect');
};

export const Default: Story = {
  args: {
    onSubmit: mockSubmit,
    minLength: 8,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const LongerMinLength: Story = {
  args: {
    onSubmit: mockSubmit,
    minLength: 12,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithError: Story = {
  args: {
    onSubmit: mockSubmitError,
    minLength: 8,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};
