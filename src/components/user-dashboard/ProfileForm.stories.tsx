import type { Meta, StoryObj } from '@storybook/react';
import ProfileForm, { ProfileData } from './ProfileForm';

const meta: Meta<typeof ProfileForm> = {
  title: 'UserDashboard/ProfileForm',
  component: ProfileForm,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Form for editing user profile information.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProfileForm>;

const mockSubmit = async (data: ProfileData): Promise<void> => {
  // eslint-disable-next-line no-console -- Storybook demo
  console.log('Submitting:', data);
  await new Promise((resolve) => setTimeout(resolve, 1500));
};

const mockSubmitError = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  throw new Error('Failed to update profile. Please try again.');
};

export const Default: Story = {
  args: {
    initialData: {
      name: 'Ruslan Faion',
      email: 'ruslan@faion.net',
      jobTitle: 'Software Developer',
      company: 'Faion Network',
      bio: 'Building tools for solopreneurs.',
    },
    onSubmit: mockSubmit,
    onCancel: () => console.log('Cancelled'),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

export const MinimalData: Story = {
  args: {
    initialData: {
      name: 'John Doe',
      email: 'john@example.com',
    },
    onSubmit: mockSubmit,
    onCancel: () => console.log('Cancelled'),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithError: Story = {
  args: {
    initialData: {
      name: 'Ruslan Faion',
      email: 'ruslan@faion.net',
    },
    onSubmit: mockSubmitError,
    onCancel: () => console.log('Cancelled'),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithoutCancel: Story = {
  args: {
    initialData: {
      name: 'Ruslan Faion',
      email: 'ruslan@faion.net',
      jobTitle: 'Founder',
      company: 'Faion Network',
    },
    onSubmit: mockSubmit,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '500px' }}>
        <Story />
      </div>
    ),
  ],
};
