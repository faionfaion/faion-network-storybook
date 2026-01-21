import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import StarRating from './StarRating';

describe('StarRating', () => {
  describe('Rendering', () => {
    it('renders star rating component', () => {
      const { container } = render(<StarRating rating={3} />);
      expect(container.querySelector('.fn-star-rating')).toBeInTheDocument();
    });

    it('renders 5 stars by default', () => {
      const { container } = render(<StarRating rating={3} />);
      expect(container.querySelectorAll('.fn-star-rating__star')).toHaveLength(5);
    });

    it('has img role for accessibility', () => {
      render(<StarRating rating={3} />);
      expect(screen.getByRole('img')).toBeInTheDocument();
    });
  });

  describe('Star Count', () => {
    it('renders custom number of stars', () => {
      const { container } = render(<StarRating rating={3} maxStars={10} />);
      expect(container.querySelectorAll('.fn-star-rating__star')).toHaveLength(10);
    });

    it('renders 3 stars when maxStars is 3', () => {
      const { container } = render(<StarRating rating={2} maxStars={3} />);
      expect(container.querySelectorAll('.fn-star-rating__star')).toHaveLength(3);
    });
  });

  describe('Rating Values', () => {
    it('shows all full stars for max rating', () => {
      const { container } = render(<StarRating rating={5} />);
      // Each star should contain a filled polygon
      const stars = container.querySelectorAll('.fn-star-rating__star');
      stars.forEach((star) => {
        const svg = star.querySelector('svg');
        expect(svg).toHaveAttribute('fill', 'currentColor');
      });
    });

    it('shows all empty stars for zero rating', () => {
      const { container } = render(<StarRating rating={0} />);
      const stars = container.querySelectorAll('.fn-star-rating__star');
      stars.forEach((star) => {
        const svg = star.querySelector('svg');
        expect(svg).toHaveAttribute('fill', 'none');
      });
    });

    it('clamps rating to maxStars', () => {
      render(<StarRating rating={10} maxStars={5} />);
      // Should still only render 5 stars, all filled
      const ratingImg = screen.getByRole('img');
      expect(ratingImg).toHaveAttribute('aria-label', 'Rating: 5 out of 5 stars');
    });

    it('clamps negative rating to 0', () => {
      render(<StarRating rating={-5} />);
      const ratingImg = screen.getByRole('img');
      expect(ratingImg).toHaveAttribute('aria-label', 'Rating: 0 out of 5 stars');
    });
  });

  describe('Half Stars', () => {
    it('shows half star when enabled and rating has .5', () => {
      const { container } = render(<StarRating rating={3.5} halfStars />);
      // Check for linearGradient (half star uses gradient)
      expect(container.querySelector('linearGradient')).toBeInTheDocument();
    });

    it('rounds to nearest half when halfStars enabled', () => {
      const { container } = render(<StarRating rating={3.7} halfStars />);
      // 3.7 should show 3 full stars and 1 half star
      expect(container.querySelector('linearGradient')).toBeInTheDocument();
    });

    it('does not show half stars when disabled', () => {
      const { container } = render(<StarRating rating={3.5} halfStars={false} />);
      // Should not have half star gradient
      expect(container.querySelector('linearGradient')).not.toBeInTheDocument();
    });
  });

  describe('Numeric Value Display', () => {
    it('does not show value by default', () => {
      const { container } = render(<StarRating rating={3.5} />);
      expect(container.querySelector('.fn-star-rating__value')).not.toBeInTheDocument();
    });

    it('shows value when showValue is true', () => {
      render(<StarRating rating={3.5} showValue />);
      expect(screen.getByText('3.5')).toBeInTheDocument();
    });

    it('shows value formatted with one decimal', () => {
      render(<StarRating rating={4} showValue />);
      expect(screen.getByText('4.0')).toBeInTheDocument();
    });

    it('shows clamped value when out of range', () => {
      render(<StarRating rating={10} maxStars={5} showValue />);
      expect(screen.getByText('5.0')).toBeInTheDocument();
    });
  });

  describe('Size Variants', () => {
    it('applies medium size by default', () => {
      const { container } = render(<StarRating rating={3} />);
      expect(container.querySelector('.fn-star-rating--md')).toBeInTheDocument();
    });

    it('applies small size class', () => {
      const { container } = render(<StarRating rating={3} size="sm" />);
      expect(container.querySelector('.fn-star-rating--sm')).toBeInTheDocument();
    });

    it('applies large size class', () => {
      const { container } = render(<StarRating rating={3} size="lg" />);
      expect(container.querySelector('.fn-star-rating--lg')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has default aria-label', () => {
      render(<StarRating rating={3} />);
      const ratingImg = screen.getByRole('img');
      expect(ratingImg).toHaveAttribute('aria-label', 'Rating: 3 out of 5 stars');
    });

    it('has custom aria-label when provided', () => {
      render(<StarRating rating={3} ariaLabel="User rating: 3 stars" />);
      const ratingImg = screen.getByRole('img');
      expect(ratingImg).toHaveAttribute('aria-label', 'User rating: 3 stars');
    });

    it('includes max stars in aria-label', () => {
      render(<StarRating rating={3} maxStars={10} />);
      const ratingImg = screen.getByRole('img');
      expect(ratingImg).toHaveAttribute('aria-label', 'Rating: 3 out of 10 stars');
    });

    it('uses clamped value in aria-label', () => {
      render(<StarRating rating={7} maxStars={5} />);
      const ratingImg = screen.getByRole('img');
      expect(ratingImg).toHaveAttribute('aria-label', 'Rating: 5 out of 5 stars');
    });
  });

  describe('Edge Cases', () => {
    it('handles 0 rating', () => {
      render(<StarRating rating={0} showValue />);
      expect(screen.getByText('0.0')).toBeInTheDocument();
    });

    it('handles decimal ratings', () => {
      render(<StarRating rating={3.7} showValue />);
      expect(screen.getByText('3.7')).toBeInTheDocument();
    });

    it('handles 1 star max', () => {
      const { container } = render(<StarRating rating={1} maxStars={1} />);
      expect(container.querySelectorAll('.fn-star-rating__star')).toHaveLength(1);
    });
  });
});
