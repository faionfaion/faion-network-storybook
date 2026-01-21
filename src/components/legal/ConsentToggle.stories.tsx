import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ConsentToggle from './ConsentToggle';

const meta: Meta<typeof ConsentToggle> = {
  title: 'Legal/ConsentToggle',
  component: ConsentToggle,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Toggle switch for cookie consent preferences.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ConsentToggle>;

export const Default: Story = {
  args: {
    label: 'Analytics Cookies',
    description: 'Help us improve the site by collecting anonymous usage data.',
    checked: false,
    onChange: (checked) => console.log('Changed:', checked),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Checked: Story = {
  args: {
    label: 'Functional Cookies',
    description: 'Remember your preferences and language settings.',
    checked: true,
    onChange: (checked) => console.log('Changed:', checked),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Disabled: Story = {
  args: {
    label: 'Essential Cookies',
    description: 'Required for basic site functionality. Cannot be disabled.',
    checked: true,
    onChange: (checked) => console.log('Changed:', checked),
    disabled: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

export const AllToggles: Story = {
  render: function AllTogglesStory() {
    const [functional, setFunctional] = useState(false);
    const [analytics, setAnalytics] = useState(false);
    const [payment, setPayment] = useState(true);

    return (
      <div style={{ maxWidth: '500px' }}>
        <ConsentToggle
          label="Essential Cookies"
          description="Required for basic site functionality. Cannot be disabled."
          checked={true}
          onChange={() => {}}
          disabled
        />
        <ConsentToggle
          label="Functional Cookies"
          description="Remember your preferences and language settings."
          checked={functional}
          onChange={setFunctional}
        />
        <ConsentToggle
          label="Analytics Cookies"
          description="Help us improve the site by collecting anonymous usage data."
          checked={analytics}
          onChange={setAnalytics}
        />
        <ConsentToggle
          label="Payment Cookies"
          description="Enable secure payment processing through Stripe."
          checked={payment}
          onChange={setPayment}
        />
      </div>
    );
  },
};
