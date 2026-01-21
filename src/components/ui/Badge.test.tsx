import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Badge, LevelBadge, StatusBadge } from './Badge';

describe('Badge', () => {
  describe('Rendering', () => {
    it('renders badge with children', () => {
      render(<Badge>New</Badge>);
      expect(screen.getByText('New')).toBeInTheDocument();
    });

    it('renders as span element', () => {
      render(<Badge>Test</Badge>);
      expect(screen.getByText('Test').tagName).toBe('SPAN');
    });
  });

  describe('Variants', () => {
    it('applies neutral variant by default', () => {
      render(<Badge>Neutral</Badge>);
      expect(screen.getByText('Neutral')).toHaveClass('fn-badge--neutral');
    });

    it('applies accent variant', () => {
      render(<Badge variant="accent">Accent</Badge>);
      expect(screen.getByText('Accent')).toHaveClass('fn-badge--accent');
    });

    it('applies outline variant', () => {
      render(<Badge variant="outline">Outline</Badge>);
      expect(screen.getByText('Outline')).toHaveClass('fn-badge--outline');
    });

    it('applies success variant', () => {
      render(<Badge variant="success">Success</Badge>);
      expect(screen.getByText('Success')).toHaveClass('fn-badge--success');
    });

    it('applies warning variant', () => {
      render(<Badge variant="warning">Warning</Badge>);
      expect(screen.getByText('Warning')).toHaveClass('fn-badge--warning');
    });

    it('applies danger variant', () => {
      render(<Badge variant="danger">Danger</Badge>);
      expect(screen.getByText('Danger')).toHaveClass('fn-badge--danger');
    });

    it('applies info variant', () => {
      render(<Badge variant="info">Info</Badge>);
      expect(screen.getByText('Info')).toHaveClass('fn-badge--info');
    });
  });

  describe('Sizes', () => {
    it('applies default size (no extra class)', () => {
      render(<Badge>Default</Badge>);
      const badge = screen.getByText('Default');
      expect(badge).not.toHaveClass('fn-badge--small');
      expect(badge).not.toHaveClass('fn-badge--large');
    });

    it('applies small size', () => {
      render(<Badge size="small">Small</Badge>);
      expect(screen.getByText('Small')).toHaveClass('fn-badge--small');
    });

    it('applies large size', () => {
      render(<Badge size="large">Large</Badge>);
      expect(screen.getByText('Large')).toHaveClass('fn-badge--large');
    });
  });

  describe('Custom Props', () => {
    it('applies custom className', () => {
      render(<Badge className="custom-badge">Test</Badge>);
      expect(screen.getByText('Test')).toHaveClass('custom-badge');
    });

    it('passes through additional HTML attributes', () => {
      render(<Badge data-testid="test-badge" title="Badge title">Test</Badge>);

      const badge = screen.getByText('Test');
      expect(badge).toHaveAttribute('data-testid', 'test-badge');
      expect(badge).toHaveAttribute('title', 'Badge title');
    });
  });

  describe('Ref Forwarding', () => {
    it('forwards ref to span element', () => {
      const ref = vi.fn();
      render(<Badge ref={ref}>Test</Badge>);
      expect(ref).toHaveBeenCalled();
    });
  });

  describe('Base Class', () => {
    it('always has fn-badge base class', () => {
      render(<Badge>Test</Badge>);
      expect(screen.getByText('Test')).toHaveClass('fn-badge');
    });
  });
});

describe('LevelBadge', () => {
  describe('Rendering', () => {
    it('renders starter level', () => {
      render(<LevelBadge level="starter" />);
      expect(screen.getByText('STARTER')).toBeInTheDocument();
    });

    it('renders builder level', () => {
      render(<LevelBadge level="builder" />);
      expect(screen.getByText('BUILDER')).toBeInTheDocument();
    });

    it('renders scaler level', () => {
      render(<LevelBadge level="scaler" />);
      expect(screen.getByText('SCALER')).toBeInTheDocument();
    });

    it('renders geek level', () => {
      render(<LevelBadge level="geek" />);
      expect(screen.getByText('GEEK')).toBeInTheDocument();
    });
  });

  describe('Styling', () => {
    it('applies level-specific class', () => {
      render(<LevelBadge level="starter" />);
      expect(screen.getByText('STARTER')).toHaveClass('fn-level-badge--starter');
    });

    it('has base class', () => {
      render(<LevelBadge level="builder" />);
      expect(screen.getByText('BUILDER')).toHaveClass('fn-level-badge');
    });
  });

  describe('Icon', () => {
    it('renders icon when provided', () => {
      render(<LevelBadge level="starter" icon={<span data-testid="custom-icon" />} />);
      expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    });

    it('wraps icon in icon class', () => {
      const { container } = render(
        <LevelBadge level="starter" icon={<span>Icon</span>} />
      );
      expect(container.querySelector('.fn-level-badge__icon')).toBeInTheDocument();
    });
  });

  describe('Custom Props', () => {
    it('applies custom className', () => {
      render(<LevelBadge level="starter" className="custom" />);
      expect(screen.getByText('STARTER')).toHaveClass('custom');
    });
  });

  describe('Ref Forwarding', () => {
    it('forwards ref', () => {
      const ref = vi.fn();
      render(<LevelBadge level="starter" ref={ref} />);
      expect(ref).toHaveBeenCalled();
    });
  });
});

describe('StatusBadge', () => {
  describe('Rendering', () => {
    it('renders active status', () => {
      render(<StatusBadge status="active" />);
      expect(screen.getByText('Active')).toBeInTheDocument();
    });

    it('renders pending status', () => {
      render(<StatusBadge status="pending" />);
      expect(screen.getByText('Pending')).toBeInTheDocument();
    });

    it('renders inactive status', () => {
      render(<StatusBadge status="inactive" />);
      expect(screen.getByText('Inactive')).toBeInTheDocument();
    });

    it('renders error status', () => {
      render(<StatusBadge status="error" />);
      expect(screen.getByText('Error')).toBeInTheDocument();
    });

    it('renders custom children text', () => {
      render(<StatusBadge status="active">Online</StatusBadge>);
      expect(screen.getByText('Online')).toBeInTheDocument();
    });
  });

  describe('Styling', () => {
    it('applies status-specific class', () => {
      render(<StatusBadge status="active" />);
      expect(screen.getByText('Active')).toHaveClass('fn-status-badge--active');
    });

    it('has base class', () => {
      render(<StatusBadge status="pending" />);
      expect(screen.getByText('Pending')).toHaveClass('fn-status-badge');
    });
  });

  describe('Dot Indicator', () => {
    it('shows dot by default', () => {
      const { container } = render(<StatusBadge status="active" />);
      expect(container.querySelector('.fn-status-badge__dot')).toBeInTheDocument();
    });

    it('hides dot when showDot is false', () => {
      const { container } = render(<StatusBadge status="active" showDot={false} />);
      expect(container.querySelector('.fn-status-badge__dot')).not.toBeInTheDocument();
    });
  });

  describe('Custom Props', () => {
    it('applies custom className', () => {
      render(<StatusBadge status="active" className="custom" />);
      expect(screen.getByText('Active')).toHaveClass('custom');
    });
  });

  describe('Ref Forwarding', () => {
    it('forwards ref', () => {
      const ref = vi.fn();
      render(<StatusBadge status="active" ref={ref} />);
      expect(ref).toHaveBeenCalled();
    });
  });
});
