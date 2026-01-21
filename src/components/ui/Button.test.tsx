import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
  describe('Rendering', () => {
    it('renders button with children', () => {
      render(<Button>Click me</Button>);
      expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
    });

    it('renders as button element', () => {
      render(<Button>Test</Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('has type="button" by default', () => {
      render(<Button>Test</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
    });

    it('can override type attribute', () => {
      render(<Button type="submit">Submit</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
    });
  });

  describe('Variants', () => {
    it('applies primary variant by default', () => {
      render(<Button>Primary</Button>);
      expect(screen.getByRole('button')).toHaveClass('fn-button--primary');
    });

    it('applies secondary variant', () => {
      render(<Button variant="secondary">Secondary</Button>);
      expect(screen.getByRole('button')).toHaveClass('fn-button--secondary');
    });

    it('applies ghost variant', () => {
      render(<Button variant="ghost">Ghost</Button>);
      expect(screen.getByRole('button')).toHaveClass('fn-button--ghost');
    });

    it('applies outline variant', () => {
      render(<Button variant="outline">Outline</Button>);
      expect(screen.getByRole('button')).toHaveClass('fn-button--outline');
    });

    it('applies link variant', () => {
      render(<Button variant="link">Link</Button>);
      expect(screen.getByRole('button')).toHaveClass('fn-button--link');
    });

    it('applies destructive variant', () => {
      render(<Button variant="destructive">Delete</Button>);
      expect(screen.getByRole('button')).toHaveClass('fn-button--destructive');
    });
  });

  describe('Sizes', () => {
    it('applies medium size by default (no extra class)', () => {
      render(<Button>Medium</Button>);
      const button = screen.getByRole('button');
      expect(button).not.toHaveClass('fn-button--small');
      expect(button).not.toHaveClass('fn-button--large');
    });

    it('applies small size', () => {
      render(<Button size="small">Small</Button>);
      expect(screen.getByRole('button')).toHaveClass('fn-button--small');
    });

    it('applies large size', () => {
      render(<Button size="large">Large</Button>);
      expect(screen.getByRole('button')).toHaveClass('fn-button--large');
    });

    it('applies icon size', () => {
      render(<Button size="icon">Icon</Button>);
      expect(screen.getByRole('button')).toHaveClass('fn-button--icon');
    });
  });

  describe('Full Width', () => {
    it('does not have full width by default', () => {
      render(<Button>Normal</Button>);
      expect(screen.getByRole('button')).not.toHaveClass('fn-button--full');
    });

    it('applies full width class', () => {
      render(<Button fullWidth>Full Width</Button>);
      expect(screen.getByRole('button')).toHaveClass('fn-button--full');
    });
  });

  describe('Disabled State', () => {
    it('is not disabled by default', () => {
      render(<Button>Enabled</Button>);
      expect(screen.getByRole('button')).not.toBeDisabled();
    });

    it('can be disabled', () => {
      render(<Button disabled>Disabled</Button>);
      expect(screen.getByRole('button')).toBeDisabled();
    });
  });

  describe('Click Handling', () => {
    it('calls onClick when clicked', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(<Button onClick={handleClick}>Click</Button>);
      await user.click(screen.getByRole('button'));

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick when disabled', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(<Button onClick={handleClick} disabled>Click</Button>);
      await user.click(screen.getByRole('button'));

      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('Custom Props', () => {
    it('passes through additional HTML attributes', () => {
      render(<Button data-testid="custom-button" aria-label="Custom">Test</Button>);

      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('data-testid', 'custom-button');
      expect(button).toHaveAttribute('aria-label', 'Custom');
    });

    it('applies custom className', () => {
      render(<Button className="custom-class">Test</Button>);
      expect(screen.getByRole('button')).toHaveClass('custom-class');
    });

    it('merges custom className with default classes', () => {
      render(<Button className="custom-class" variant="secondary">Test</Button>);

      const button = screen.getByRole('button');
      expect(button).toHaveClass('custom-class');
      expect(button).toHaveClass('fn-button--secondary');
    });
  });

  describe('Ref Forwarding', () => {
    it('forwards ref to button element', () => {
      const ref = vi.fn();
      render(<Button ref={ref}>Test</Button>);
      expect(ref).toHaveBeenCalled();
    });
  });

  describe('Base Class', () => {
    it('always has fn-button base class', () => {
      render(<Button>Test</Button>);
      expect(screen.getByRole('button')).toHaveClass('fn-button');
    });
  });
});
