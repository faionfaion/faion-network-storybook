import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ReadTimeBadge from './ReadTimeBadge';

describe('ReadTimeBadge', () => {
  describe('Rendering', () => {
    it('renders badge with read time', () => {
      render(<ReadTimeBadge minutes={5} />);
      expect(screen.getByText('5 min read')).toBeInTheDocument();
    });

    it('renders as span element', () => {
      const { container } = render(<ReadTimeBadge minutes={5} />);
      expect(container.firstChild?.nodeName).toBe('SPAN');
    });

    it('applies base class', () => {
      const { container } = render(<ReadTimeBadge minutes={5} />);
      expect(container.querySelector('.fn-read-time-badge')).toBeInTheDocument();
    });
  });

  describe('Time Formatting', () => {
    it('displays "< 1 min read" for less than 1 minute', () => {
      render(<ReadTimeBadge minutes={0} />);
      expect(screen.getByText('< 1 min read')).toBeInTheDocument();
    });

    it('displays "1 min read" for exactly 1 minute', () => {
      render(<ReadTimeBadge minutes={1} />);
      expect(screen.getByText('1 min read')).toBeInTheDocument();
    });

    it('displays plural for multiple minutes', () => {
      render(<ReadTimeBadge minutes={10} />);
      expect(screen.getByText('10 min read')).toBeInTheDocument();
    });

    it('handles large numbers', () => {
      render(<ReadTimeBadge minutes={120} />);
      expect(screen.getByText('120 min read')).toBeInTheDocument();
    });
  });

  describe('Custom Format', () => {
    it('uses custom format function when provided', () => {
      const customFormat = (minutes: number) => `${minutes} minutes`;
      render(<ReadTimeBadge minutes={5} formatLabel={customFormat} />);
      expect(screen.getByText('5 minutes')).toBeInTheDocument();
    });

    it('passes minutes to custom format function', () => {
      const customFormat = (minutes: number) => `Approximately ${minutes * 60} seconds`;
      render(<ReadTimeBadge minutes={2} formatLabel={customFormat} />);
      expect(screen.getByText('Approximately 120 seconds')).toBeInTheDocument();
    });
  });

  describe('Icon', () => {
    it('shows icon by default', () => {
      const { container } = render(<ReadTimeBadge minutes={5} />);
      expect(container.querySelector('.fn-read-time-badge__icon')).toBeInTheDocument();
    });

    it('hides icon when showIcon is false', () => {
      const { container } = render(<ReadTimeBadge minutes={5} showIcon={false} />);
      expect(container.querySelector('.fn-read-time-badge__icon')).not.toBeInTheDocument();
    });

    it('renders default clock icon', () => {
      const { container } = render(<ReadTimeBadge minutes={5} />);
      expect(container.querySelector('.fn-read-time-badge__icon svg')).toBeInTheDocument();
    });

    it('renders custom icon when provided', () => {
      render(
        <ReadTimeBadge
          minutes={5}
          icon={<span data-testid="custom-icon">Clock</span>}
        />
      );
      expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    });
  });

  describe('Sizes', () => {
    it('applies medium size by default (no extra class)', () => {
      const { container } = render(<ReadTimeBadge minutes={5} />);
      expect(container.querySelector('.fn-read-time-badge--small')).not.toBeInTheDocument();
      expect(container.querySelector('.fn-read-time-badge--large')).not.toBeInTheDocument();
    });

    it('applies small size class', () => {
      const { container } = render(<ReadTimeBadge minutes={5} size="small" />);
      expect(container.querySelector('.fn-read-time-badge--small')).toBeInTheDocument();
    });

    it('applies large size class', () => {
      const { container } = render(<ReadTimeBadge minutes={5} size="large" />);
      expect(container.querySelector('.fn-read-time-badge--large')).toBeInTheDocument();
    });
  });

  describe('Background', () => {
    it('does not show background by default', () => {
      const { container } = render(<ReadTimeBadge minutes={5} />);
      expect(
        container.querySelector('.fn-read-time-badge--background')
      ).not.toBeInTheDocument();
    });

    it('shows background when showBackground is true', () => {
      const { container } = render(<ReadTimeBadge minutes={5} showBackground />);
      expect(container.querySelector('.fn-read-time-badge--background')).toBeInTheDocument();
    });
  });

  describe('Custom className', () => {
    it('applies custom className', () => {
      const { container } = render(<ReadTimeBadge minutes={5} className="custom-badge" />);
      expect(container.querySelector('.custom-badge')).toBeInTheDocument();
    });

    it('merges custom className with default classes', () => {
      const { container } = render(
        <ReadTimeBadge minutes={5} size="small" className="custom-badge" />
      );
      const badge = container.querySelector('.fn-read-time-badge');
      expect(badge).toHaveClass('custom-badge');
      expect(badge).toHaveClass('fn-read-time-badge--small');
    });
  });
});
