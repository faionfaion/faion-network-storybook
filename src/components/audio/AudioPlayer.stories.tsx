import type { Meta, StoryObj } from '@storybook/react';
import AudioPlayer from './AudioPlayer';

const meta: Meta<typeof AudioPlayer> = {
  title: 'Audio/AudioPlayer',
  component: AudioPlayer,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Full audio player with play/pause, progress bar, and speed controls.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AudioPlayer>;

// Note: Using a placeholder URL - in real usage, this would be an actual audio file
const sampleAudioUrl = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';

export const Default: Story = {
  args: {
    src: sampleAudioUrl,
    title: 'Listen to this article',
    onPlay: () => console.log('Playing'),
    onPause: () => console.log('Paused'),
    onComplete: () => console.log('Completed'),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithoutTitle: Story = {
  args: {
    src: sampleAudioUrl,
    onPlay: () => console.log('Playing'),
    onPause: () => console.log('Paused'),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithPresetDuration: Story = {
  args: {
    src: sampleAudioUrl,
    title: 'SDD Methodology Overview',
    duration: 750, // 12:30
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

export const InArticleContext: Story = {
  render: () => (
    <div style={{ maxWidth: '700px', fontFamily: 'Georgia, serif' }}>
      <h1 style={{ fontSize: '32px', color: '#1C1C1E', marginBottom: '16px' }}>
        Getting Started with SDD
      </h1>
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#4A4A4A', marginBottom: '24px' }}>
        Learn the fundamentals of Specification-Driven Development and how it can transform your workflow.
      </p>
      <AudioPlayer
        src={sampleAudioUrl}
        title="Listen to this article"
        duration={450}
      />
      <div style={{ marginTop: '32px', fontFamily: 'Inter, sans-serif', fontSize: '15px', lineHeight: 1.7, color: '#4A4A4A' }}>
        <p>
          Specification-Driven Development (SDD) is a methodology that puts specifications at the center of
          your development workflow. Instead of diving straight into code, you start by defining what you're
          building in clear, measurable terms...
        </p>
      </div>
    </div>
  ),
};
