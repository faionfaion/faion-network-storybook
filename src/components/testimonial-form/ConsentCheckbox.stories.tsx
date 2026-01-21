import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ConsentCheckbox from './ConsentCheckbox';

const meta: Meta<typeof ConsentCheckbox> = {
  title: 'TestimonialForm/ConsentCheckbox',
  component: ConsentCheckbox,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Consent checkbox for testimonial submission.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ConsentCheckbox>;

export const Default: Story = {
  args: {
    checked: false,
    onChange: (checked) => console.log('Checked:', checked),
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
    checked: true,
    onChange: (checked) => console.log('Checked:', checked),
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
    checked: false,
    onChange: (checked) => console.log('Checked:', checked),
    error: 'You must agree to the consent before submitting.',
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
  render: function InteractiveConsentCheckbox() {
    const [checked, setChecked] = useState(false);

    return (
      <div style={{ maxWidth: '500px' }}>
        <ConsentCheckbox
          checked={checked}
          onChange={setChecked}
        />
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
          color: '#4A4A4A',
          marginTop: '16px',
        }}>
          Consent given: <strong>{checked ? 'Yes' : 'No'}</strong>
        </p>
      </div>
    );
  },
};
