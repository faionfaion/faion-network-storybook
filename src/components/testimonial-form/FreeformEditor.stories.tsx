import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import FreeformEditor from './FreeformEditor';

const meta: Meta<typeof FreeformEditor> = {
  title: 'TestimonialForm/FreeformEditor',
  component: FreeformEditor,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Text area for free-form testimonial writing with character limits.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FreeformEditor>;

export const Default: Story = {
  args: {
    value: '',
    onChange: (value) => console.log('Value:', value),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithContent: Story = {
  args: {
    value: 'Faion Network has been a game-changer for my solopreneur journey. The SDD methodology helped me ship my first product in half the time I expected.',
    onChange: (value) => console.log('Value:', value),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const TooShort: Story = {
  args: {
    value: 'Great product!',
    onChange: (value) => console.log('Value:', value),
    minLength: 50,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const AtMaxLength: Story = {
  args: {
    value: 'A'.repeat(1000),
    onChange: (value) => console.log('Value:', value),
    maxLength: 1000,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Interactive: Story = {
  render: function InteractiveFreeformEditor() {
    const [value, setValue] = useState('');

    return (
      <div style={{ maxWidth: '600px' }}>
        <FreeformEditor
          value={value}
          onChange={setValue}
          minLength={50}
          maxLength={500}
        />
      </div>
    );
  },
};
