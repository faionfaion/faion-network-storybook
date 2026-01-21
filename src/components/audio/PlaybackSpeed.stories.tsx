import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import PlaybackSpeed from './PlaybackSpeed';

const meta: Meta<typeof PlaybackSpeed> = {
  title: 'Audio/PlaybackSpeed',
  component: PlaybackSpeed,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Speed selector buttons for audio/video playback.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PlaybackSpeed>;

export const Default: Story = {
  args: {
    value: 1,
    onChange: (speed) => console.log('Speed:', speed),
  },
};

export const Selected1_5x: Story = {
  args: {
    value: 1.5,
    onChange: (speed) => console.log('Speed:', speed),
  },
};

export const CustomOptions: Story = {
  args: {
    value: 1,
    onChange: (speed) => console.log('Speed:', speed),
    options: [0.5, 1, 1.5, 2],
  },
};

export const SimpleOptions: Story = {
  args: {
    value: 1,
    onChange: (speed) => console.log('Speed:', speed),
    options: [1, 1.5, 2],
  },
};

export const Interactive: Story = {
  render: function InteractiveStory() {
    const [speed, setSpeed] = useState(1);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <PlaybackSpeed value={speed} onChange={setSpeed} />
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#4A4A4A' }}>
          Current speed: {speed}x
        </span>
      </div>
    );
  },
};

export const InContext: Story = {
  render: function InContextStory() {
    const [speed, setSpeed] = useState(1);

    return (
      <div style={{ maxWidth: '400px', background: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '12px', padding: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500, color: '#1C1C1E' }}>
            Playback Speed
          </span>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#6B6B6B' }}>
            {speed}x
          </span>
        </div>
        <PlaybackSpeed value={speed} onChange={setSpeed} />
      </div>
    );
  },
};
