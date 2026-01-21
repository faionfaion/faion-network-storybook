import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import AudioButton from './AudioButton';

const meta: Meta<typeof AudioButton> = {
  title: 'Audio/AudioButton',
  component: AudioButton,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Compact play/pause button for triggering audio playback.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AudioButton>;

export const Primary: Story = {
  args: {
    isPlaying: false,
    onClick: () => console.log('Clicked'),
    variant: 'primary',
    size: 'md',
  },
};

export const Playing: Story = {
  args: {
    isPlaying: true,
    onClick: () => console.log('Clicked'),
    variant: 'primary',
    size: 'md',
  },
};

export const Secondary: Story = {
  args: {
    isPlaying: false,
    onClick: () => console.log('Clicked'),
    variant: 'secondary',
    size: 'md',
  },
};

export const Ghost: Story = {
  args: {
    isPlaying: false,
    onClick: () => console.log('Clicked'),
    variant: 'ghost',
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    isPlaying: false,
    onClick: () => console.log('Clicked'),
    variant: 'primary',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    isPlaying: false,
    onClick: () => console.log('Clicked'),
    variant: 'primary',
    size: 'lg',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#6B6B6B', width: '100px' }}>
          Sizes:
        </span>
        <AudioButton isPlaying={false} onClick={() => {}} size="sm" />
        <AudioButton isPlaying={false} onClick={() => {}} size="md" />
        <AudioButton isPlaying={false} onClick={() => {}} size="lg" />
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#6B6B6B', width: '100px' }}>
          Variants:
        </span>
        <AudioButton isPlaying={false} onClick={() => {}} variant="primary" />
        <AudioButton isPlaying={false} onClick={() => {}} variant="secondary" />
        <AudioButton isPlaying={false} onClick={() => {}} variant="ghost" />
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#6B6B6B', width: '100px' }}>
          Playing:
        </span>
        <AudioButton isPlaying={true} onClick={() => {}} variant="primary" />
        <AudioButton isPlaying={true} onClick={() => {}} variant="secondary" />
        <AudioButton isPlaying={true} onClick={() => {}} variant="ghost" />
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  render: function InteractiveStory() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <AudioButton
          isPlaying={isPlaying}
          onClick={() => setIsPlaying(!isPlaying)}
          size="lg"
          variant="primary"
        />
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#4A4A4A' }}>
          {isPlaying ? 'Playing...' : 'Click to play'}
        </span>
      </div>
    );
  },
};
