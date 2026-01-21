import type { Meta, StoryObj } from '@storybook/react';
import TestimonialCarousel from './TestimonialCarousel';

const meta: Meta<typeof TestimonialCarousel> = {
  title: 'Testimonial/TestimonialCarousel',
  component: TestimonialCarousel,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Carousel component for displaying multiple testimonials with auto-rotation, navigation controls, and touch support.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TestimonialCarousel>;

const sampleTestimonials = [
  {
    quote:
      'The SDD methodology completely transformed how I approach building products. I went from endless planning to shipping in weeks.',
    name: 'Alex Chen',
    role: 'Founder',
    company: 'TechStartup',
    initials: 'AC',
    rating: 5,
    verified: true,
  },
  {
    quote:
      'Best investment I made for my solopreneur journey. The methodologies are practical and immediately actionable.',
    name: 'Sarah Johnson',
    role: 'Indie Maker',
    initials: 'SJ',
    rating: 5,
    verified: true,
  },
  {
    quote:
      'I went from $0 to $15K MRR in 8 months following the product methodologies. The structured approach eliminated my analysis paralysis.',
    name: 'Michael Park',
    role: 'SaaS Founder',
    company: 'CloudTools',
    initials: 'MP',
    rating: 5,
    verified: true,
  },
  {
    quote:
      'The AI methodologies helped me build and deploy my first RAG application in just 2 weeks. Incredibly detailed guides.',
    name: 'David Kumar',
    role: 'ML Engineer',
    company: 'DataCorp',
    initials: 'DK',
    rating: 5,
    verified: true,
  },
  {
    quote:
      'Finally found a resource that covers both the technical and business aspects of being a solopreneur.',
    name: 'Lisa Thompson',
    company: 'Self-employed',
    initials: 'LT',
    rating: 4,
  },
];

/**
 * Single visible card with auto-rotation
 */
export const Default: Story = {
  args: {
    testimonials: sampleTestimonials,
    autoRotateInterval: 5000,
    pauseOnHover: true,
    showArrows: true,
    showDots: true,
  },
};

/**
 * Two visible cards
 */
export const TwoCards: Story = {
  args: {
    testimonials: sampleTestimonials,
    visibleCards: 2,
    autoRotateInterval: 0,
  },
};

/**
 * Three visible cards
 */
export const ThreeCards: Story = {
  args: {
    testimonials: sampleTestimonials,
    visibleCards: 3,
    autoRotateInterval: 0,
    cardVariant: 'compact',
  },
};

/**
 * Without auto-rotation
 */
export const ManualOnly: Story = {
  args: {
    testimonials: sampleTestimonials,
    autoRotateInterval: 0,
  },
};

/**
 * Without navigation arrows
 */
export const DotsOnly: Story = {
  args: {
    testimonials: sampleTestimonials,
    showArrows: false,
    autoRotateInterval: 3000,
  },
};

/**
 * Without dots
 */
export const ArrowsOnly: Story = {
  args: {
    testimonials: sampleTestimonials,
    showDots: false,
    autoRotateInterval: 0,
  },
};

/**
 * Featured card variant
 */
export const FeaturedVariant: Story = {
  args: {
    testimonials: sampleTestimonials.slice(0, 3),
    cardVariant: 'featured',
    autoRotateInterval: 0,
  },
};

/**
 * Fast rotation
 */
export const FastRotation: Story = {
  args: {
    testimonials: sampleTestimonials,
    autoRotateInterval: 2000,
  },
};

/**
 * Single testimonial
 */
export const SingleTestimonial: Story = {
  args: {
    testimonials: [sampleTestimonials[0]],
  },
};

/**
 * Two testimonials
 */
export const TwoTestimonials: Story = {
  args: {
    testimonials: sampleTestimonials.slice(0, 2),
  },
};
