import type { Meta, StoryObj } from '@storybook/react';
import StarRating from './StarRating';

const meta: Meta<typeof StarRating> = {
  title: 'Testimonial/StarRating',
  component: StarRating,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Star rating display component showing 1-5 stars with optional half-star support.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StarRating>;

/**
 * Full 5-star rating
 */
export const FiveStars: Story = {
  args: {
    rating: 5,
  },
};

/**
 * 4.5 stars with half-star
 */
export const FourAndHalf: Story = {
  args: {
    rating: 4.5,
    halfStars: true,
  },
};

/**
 * 4 stars
 */
export const FourStars: Story = {
  args: {
    rating: 4,
  },
};

/**
 * 3.5 stars
 */
export const ThreeAndHalf: Story = {
  args: {
    rating: 3.5,
    halfStars: true,
  },
};

/**
 * Low rating
 */
export const LowRating: Story = {
  args: {
    rating: 2,
  },
};

/**
 * Small size
 */
export const SmallSize: Story = {
  args: {
    rating: 5,
    size: 'sm',
  },
};

/**
 * Large size
 */
export const LargeSize: Story = {
  args: {
    rating: 4.5,
    size: 'lg',
    halfStars: true,
  },
};

/**
 * With numeric value displayed
 */
export const WithValue: Story = {
  args: {
    rating: 4.7,
    showValue: true,
    halfStars: true,
  },
};

/**
 * Without half stars (rounds down)
 */
export const NoHalfStars: Story = {
  args: {
    rating: 4.7,
    halfStars: false,
  },
};

/**
 * All sizes comparison
 */
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <StarRating rating={5} size="sm" showValue />
      <StarRating rating={4.5} size="md" showValue halfStars />
      <StarRating rating={4} size="lg" showValue />
    </div>
  ),
};

/**
 * All ratings comparison
 */
export const AllRatings: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {[5, 4.5, 4, 3.5, 3, 2.5, 2, 1.5, 1, 0.5].map((rating) => (
        <div key={rating} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ width: '30px', textAlign: 'right' }}>{rating}</span>
          <StarRating rating={rating} halfStars />
        </div>
      ))}
    </div>
  ),
};
