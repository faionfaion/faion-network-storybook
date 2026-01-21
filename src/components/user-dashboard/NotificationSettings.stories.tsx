import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import NotificationSettings, { NotificationPreferences } from './NotificationSettings';

const meta: Meta<typeof NotificationSettings> = {
  title: 'UserDashboard/NotificationSettings',
  component: NotificationSettings,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Settings panel for managing email notification preferences.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NotificationSettings>;

export const Default: Story = {
  args: {
    preferences: {
      email_updates: true,
      email_marketing: false,
      email_product: true,
      email_security: true,
    },
    onChange: (prefs) => console.log('Changed:', prefs),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

export const AllEnabled: Story = {
  args: {
    preferences: {
      email_updates: true,
      email_marketing: true,
      email_product: true,
      email_security: true,
    },
    onChange: (prefs) => console.log('Changed:', prefs),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

export const MinimalEnabled: Story = {
  args: {
    preferences: {
      email_updates: false,
      email_marketing: false,
      email_product: false,
      email_security: true,
    },
    onChange: (prefs) => console.log('Changed:', prefs),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Interactive: Story = {
  render: function InteractiveStory() {
    const [preferences, setPreferences] = useState<NotificationPreferences>({
      email_updates: true,
      email_marketing: false,
      email_product: true,
      email_security: true,
    });

    return (
      <div style={{ maxWidth: '500px' }}>
        <NotificationSettings
          preferences={preferences}
          onChange={(newPrefs) => {
            setPreferences(newPrefs);
            console.log('Updated preferences:', newPrefs);
          }}
        />
      </div>
    );
  },
};
