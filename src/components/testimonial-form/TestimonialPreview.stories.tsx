import type { Meta, StoryObj } from '@storybook/react';
import TestimonialPreview from './TestimonialPreview';

const meta: Meta<typeof TestimonialPreview> = {
  title: 'TestimonialForm/TestimonialPreview',
  component: TestimonialPreview,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Preview of testimonial before submission with edit option.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TestimonialPreview>;

export const Default: Story = {
  args: {
    content: 'Faion Network has been a game-changer for my solopreneur journey. The SDD methodology helped me ship my first product in half the time I expected. I cannot recommend it enough!',
    displayName: 'Ruslan Faion',
    jobTitle: 'Founder',
    company: 'Faion Network',
    onEdit: () => console.log('Edit clicked'),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithoutCompany: Story = {
  args: {
    content: 'The AI agents and skills are incredibly helpful. I use them daily for product development, marketing, and project management.',
    displayName: 'Jane Developer',
    jobTitle: 'Full-Stack Developer',
    onEdit: () => console.log('Edit clicked'),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const NameOnly: Story = {
  args: {
    content: 'Simple yet powerful. Exactly what I needed to get my business off the ground.',
    displayName: 'Alex K.',
    onEdit: () => console.log('Edit clicked'),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const LongTestimonial: Story = {
  args: {
    content: 'Before Faion Network, I was struggling to organize my workflow and deliver products on time. The SDD methodology changed everything. Now I have a clear process from idea to launch. The AI agents handle the tedious parts while I focus on what matters. My productivity has increased by at least 3x, and I finally feel in control of my solopreneur business. If you are serious about building products, this is a must-have.',
    displayName: 'Sarah Chen',
    jobTitle: 'Product Designer',
    company: 'Indie Studios',
    onEdit: () => console.log('Edit clicked'),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};
