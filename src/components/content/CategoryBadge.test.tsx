import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CategoryBadge from './CategoryBadge';

describe('CategoryBadge', () => {
  const mockOnClick = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Rendering', () => {
    it('renders badge with name', () => {
      render(<CategoryBadge name="Development" />);
      expect(screen.getByText('Development')).toBeInTheDocument();
    });

    it('renders as span by default', () => {
      render(<CategoryBadge name="Development" />);
      expect(screen.getByText('Development').tagName).toBe('SPAN');
    });

    it('applies base class', () => {
      const { container } = render(<CategoryBadge name="Development" />);
      expect(container.querySelector('.fn-category-badge')).toBeInTheDocument();
    });
  });

  describe('Category Types', () => {
    it('applies default type class', () => {
      const { container } = render(<CategoryBadge name="General" />);
      expect(container.querySelector('.fn-category-badge--default')).toBeInTheDocument();
    });

    it('applies product type class', () => {
      const { container } = render(<CategoryBadge name="Product" type="product" />);
      expect(container.querySelector('.fn-category-badge--product')).toBeInTheDocument();
    });

    it('applies business type class', () => {
      const { container } = render(<CategoryBadge name="Business" type="business" />);
      expect(container.querySelector('.fn-category-badge--business')).toBeInTheDocument();
    });

    it('applies marketing type class', () => {
      const { container } = render(<CategoryBadge name="Marketing" type="marketing" />);
      expect(container.querySelector('.fn-category-badge--marketing')).toBeInTheDocument();
    });

    it('applies development type class', () => {
      const { container } = render(<CategoryBadge name="Dev" type="development" />);
      expect(container.querySelector('.fn-category-badge--development')).toBeInTheDocument();
    });

    it('applies devops type class', () => {
      const { container } = render(<CategoryBadge name="DevOps" type="devops" />);
      expect(container.querySelector('.fn-category-badge--devops')).toBeInTheDocument();
    });

    it('applies design type class', () => {
      const { container } = render(<CategoryBadge name="Design" type="design" />);
      expect(container.querySelector('.fn-category-badge--design')).toBeInTheDocument();
    });

    it('applies ai type class', () => {
      const { container } = render(<CategoryBadge name="AI" type="ai" />);
      expect(container.querySelector('.fn-category-badge--ai')).toBeInTheDocument();
    });

    it('applies methodology type class', () => {
      const { container } = render(<CategoryBadge name="SDD" type="methodology" />);
      expect(container.querySelector('.fn-category-badge--methodology')).toBeInTheDocument();
    });

    it('applies sdd type class', () => {
      const { container } = render(<CategoryBadge name="SDD" type="sdd" />);
      expect(container.querySelector('.fn-category-badge--sdd')).toBeInTheDocument();
    });
  });

  describe('Sizes', () => {
    it('applies medium size by default (no extra class)', () => {
      const { container } = render(<CategoryBadge name="Test" />);
      expect(container.querySelector('.fn-category-badge--small')).not.toBeInTheDocument();
      expect(container.querySelector('.fn-category-badge--large')).not.toBeInTheDocument();
    });

    it('applies small size class', () => {
      const { container } = render(<CategoryBadge name="Test" size="small" />);
      expect(container.querySelector('.fn-category-badge--small')).toBeInTheDocument();
    });

    it('applies large size class', () => {
      const { container } = render(<CategoryBadge name="Test" size="large" />);
      expect(container.querySelector('.fn-category-badge--large')).toBeInTheDocument();
    });
  });

  describe('Clickable Badge', () => {
    it('renders as button when clickable', () => {
      render(<CategoryBadge name="Test" clickable />);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('renders as button when onClick provided', () => {
      render(<CategoryBadge name="Test" onClick={mockOnClick} />);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('calls onClick when clicked', async () => {
      const user = userEvent.setup();
      render(<CategoryBadge name="Test" onClick={mockOnClick} />);

      await user.click(screen.getByRole('button'));
      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('applies clickable class', () => {
      const { container } = render(<CategoryBadge name="Test" clickable />);
      expect(container.querySelector('.fn-category-badge--clickable')).toBeInTheDocument();
    });

    it('has type="button" attribute', () => {
      render(<CategoryBadge name="Test" clickable />);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
    });
  });

  describe('Link Badge', () => {
    it('renders as anchor when href provided', () => {
      render(<CategoryBadge name="Test" href="/category/test" />);
      expect(screen.getByRole('link')).toBeInTheDocument();
    });

    it('has correct href attribute', () => {
      render(<CategoryBadge name="Test" href="/category/test" />);
      expect(screen.getByRole('link')).toHaveAttribute('href', '/category/test');
    });

    it('applies clickable class when href provided', () => {
      const { container } = render(<CategoryBadge name="Test" href="/category" />);
      expect(container.querySelector('.fn-category-badge--clickable')).toBeInTheDocument();
    });

    it('calls onClick when link clicked', async () => {
      const user = userEvent.setup();
      render(<CategoryBadge name="Test" href="/category" onClick={mockOnClick} />);

      await user.click(screen.getByRole('link'));
      expect(mockOnClick).toHaveBeenCalled();
    });
  });

  describe('Icon', () => {
    it('does not show icon by default', () => {
      const { container } = render(<CategoryBadge name="Test" type="development" />);
      expect(container.querySelector('.fn-category-badge__icon')).not.toBeInTheDocument();
    });

    it('shows default icon when showIcon is true', () => {
      const { container } = render(
        <CategoryBadge name="Development" type="development" showIcon />
      );
      expect(container.querySelector('.fn-category-badge__icon')).toBeInTheDocument();
    });

    it('shows custom icon when provided', () => {
      render(
        <CategoryBadge
          name="Custom"
          showIcon
          icon={<span data-testid="custom-icon">Icon</span>}
        />
      );
      expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    });

    it('shows icon for known category types', () => {
      const { container } = render(<CategoryBadge name="AI" type="ai" showIcon />);
      expect(container.querySelector('.fn-category-badge__icon svg')).toBeInTheDocument();
    });

    it('shows icon for methodology type', () => {
      const { container } = render(<CategoryBadge name="Method" type="methodology" showIcon />);
      expect(container.querySelector('.fn-category-badge__icon svg')).toBeInTheDocument();
    });
  });

  describe('Custom className', () => {
    it('applies custom className', () => {
      const { container } = render(<CategoryBadge name="Test" className="custom-badge" />);
      expect(container.querySelector('.custom-badge')).toBeInTheDocument();
    });

    it('merges custom className with default classes', () => {
      const { container } = render(
        <CategoryBadge name="Test" type="ai" className="custom-badge" />
      );
      const badge = container.querySelector('.fn-category-badge');
      expect(badge).toHaveClass('custom-badge');
      expect(badge).toHaveClass('fn-category-badge--ai');
    });
  });

  describe('Accessibility', () => {
    it('button is keyboard accessible', async () => {
      const user = userEvent.setup();
      render(<CategoryBadge name="Test" onClick={mockOnClick} />);

      const button = screen.getByRole('button');
      button.focus();
      await user.keyboard('[Enter]');

      expect(mockOnClick).toHaveBeenCalled();
    });

    it('link is focusable', () => {
      render(<CategoryBadge name="Test" href="/test" />);
      const link = screen.getByRole('link');
      link.focus();
      expect(document.activeElement).toBe(link);
    });
  });
});
