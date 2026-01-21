import type { Meta, StoryObj } from '@storybook/react';
import TestimonialCard from './TestimonialCard';

const meta: Meta<typeof TestimonialCard> = {
  title: 'Testimonial/TestimonialCard',
  component: TestimonialCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Testimonial card displaying customer quotes with avatar, attribution, and optional star rating.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TestimonialCard>;

/**
 * Default testimonial card
 */
export const Default: Story = {
  args: {
    quote:
      'The SDD methodology completely transformed how I approach building products. I went from endless planning to shipping in weeks.',
    name: 'Alex Chen',
    role: 'Founder',
    company: 'TechStartup',
    initials: 'AC',
    verified: true,
  },
};

/**
 * With star rating
 */
export const WithRating: Story = {
  args: {
    quote:
      'Best investment I made for my solopreneur journey. The methodologies are practical and immediately actionable.',
    name: 'Sarah Johnson',
    role: 'Indie Maker',
    initials: 'SJ',
    rating: 5,
    verified: true,
  },
};

/**
 * Featured variant
 */
export const Featured: Story = {
  args: {
    quote:
      'I went from $0 to $15K MRR in 8 months following the product methodologies. The structured approach eliminated my analysis paralysis.',
    name: 'Michael Park',
    role: 'SaaS Founder',
    company: 'CloudTools',
    initials: 'MP',
    rating: 5,
    verified: true,
    variant: 'featured',
  },
};

/**
 * Compact variant
 */
export const Compact: Story = {
  args: {
    quote: 'Game changer for my workflow. Highly recommend!',
    name: 'Emma Wilson',
    role: 'Freelance Developer',
    initials: 'EW',
    rating: 5,
    variant: 'compact',
  },
};

/**
 * With avatar image
 */
export const WithAvatar: Story = {
  args: {
    quote:
      'The AI methodologies helped me build and deploy my first RAG application in just 2 weeks. The step-by-step guides are incredibly detailed.',
    name: 'David Kumar',
    role: 'ML Engineer',
    company: 'DataCorp',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    rating: 5,
    verified: true,
  },
};

/**
 * Without rating or verification
 */
export const Simple: Story = {
  args: {
    quote:
      'Finally found a resource that covers both the technical and business aspects of being a solopreneur.',
    name: 'Lisa Thompson',
    company: 'Self-employed',
    initials: 'LT',
  },
};

/**
 * With custom badge
 */
export const WithBadge: Story = {
  args: {
    quote:
      'The marketing methodologies helped me get my first 1000 email subscribers in just 3 weeks.',
    name: 'Ryan Martinez',
    role: 'Content Creator',
    initials: 'RM',
    verified: true,
    badge: (
      <span
        style={{
          fontSize: '12px',
          fontWeight: 600,
          padding: '4px 8px',
          backgroundColor: '#5D1F2D',
          color: 'white',
          borderRadius: '4px',
        }}
      >
        Pro User
      </span>
    ),
  },
};

/**
 * Long quote
 */
export const LongQuote: Story = {
  args: {
    quote:
      'I was skeptical at first, but after going through the product management methodologies, everything clicked. The RICE framework section alone saved me months of building the wrong features. Now I validate every idea before writing a single line of code. My conversion rate tripled after implementing the landing page optimization guide.',
    name: 'Jennifer Adams',
    role: 'Product Manager',
    company: 'StartupXYZ',
    initials: 'JA',
    rating: 5,
    verified: true,
  },
};

/**
 * Grid of testimonials
 */
export const Grid: Story = {
  args: {
    quote: 'Changed how I think about building products.',
    name: 'Alex Chen',
    role: 'Founder',
    initials: 'AC',
    rating: 5,
    variant: 'compact',
  },
  decorators: [
    () => (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
        <TestimonialCard
          quote="Changed how I think about building products."
          name="Alex Chen"
          role="Founder"
          initials="AC"
          rating={5}
          variant="compact"
        />
        <TestimonialCard
          quote="Best solopreneur resource I've found."
          name="Sarah Kim"
          role="Indie Maker"
          initials="SK"
          rating={5}
          variant="compact"
          verified
        />
        <TestimonialCard
          quote="The AI methodologies are incredibly practical."
          name="Mike Ross"
          role="Developer"
          initials="MR"
          rating={4}
          variant="compact"
        />
      </div>
    ),
  ],
};
