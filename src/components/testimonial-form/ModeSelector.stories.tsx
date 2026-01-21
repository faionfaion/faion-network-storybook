import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ModeSelector, { TestimonialMode } from './ModeSelector';

const meta: Meta<typeof ModeSelector> = {
  title: 'TestimonialForm/ModeSelector',
  component: ModeSelector,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Toggle between guided and freeform testimonial submission modes.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ModeSelector>;

export const Default: Story = {
  args: {
    value: 'guided',
    onChange: (mode) => console.log('Mode changed:', mode),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

export const FreeformSelected: Story = {
  args: {
    value: 'freeform',
    onChange: (mode) => console.log('Mode changed:', mode),
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
  render: function InteractiveModeSelector() {
    const [mode, setMode] = useState<TestimonialMode>('guided');

    return (
      <div style={{ maxWidth: '500px' }}>
        <ModeSelector value={mode} onChange={setMode} />
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
          color: '#4A4A4A',
          marginTop: '16px',
        }}>
          Selected mode: <strong>{mode}</strong>
        </p>
      </div>
    );
  },
};
