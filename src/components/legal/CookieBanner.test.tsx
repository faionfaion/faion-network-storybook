import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CookieBanner from './CookieBanner';

describe('CookieBanner', () => {
  const mockOnAcceptAll = vi.fn();
  const mockOnRejectAll = vi.fn();
  const mockOnCustomize = vi.fn();

  const defaultProps = {
    onAcceptAll: mockOnAcceptAll,
    onRejectAll: mockOnRejectAll,
    onCustomize: mockOnCustomize,
    privacyPolicyUrl: '/privacy',
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Rendering', () => {
    it('renders the cookie banner', () => {
      render(<CookieBanner {...defaultProps} />);
      expect(screen.getByRole('dialog', { name: /cookie consent/i })).toBeInTheDocument();
    });

    it('renders the cookie message', () => {
      render(<CookieBanner {...defaultProps} />);
      expect(screen.getByText(/we use cookies/i)).toBeInTheDocument();
    });

    it('renders Privacy Policy link with correct href', () => {
      render(<CookieBanner {...defaultProps} />);
      const link = screen.getByRole('link', { name: /privacy policy/i });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '/privacy');
    });

    it('renders all three action buttons', () => {
      render(<CookieBanner {...defaultProps} />);

      expect(screen.getByRole('button', { name: /reject all/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /customize/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /accept all/i })).toBeInTheDocument();
    });

    it('applies custom className', () => {
      const { container } = render(
        <CookieBanner {...defaultProps} className="custom-banner" />
      );
      expect(container.querySelector('.custom-banner')).toBeInTheDocument();
    });

    it('renders cookie icon', () => {
      const { container } = render(<CookieBanner {...defaultProps} />);
      expect(container.querySelector('svg')).toBeInTheDocument();
    });
  });

  describe('Button Interactions', () => {
    it('calls onAcceptAll when Accept All button clicked', async () => {
      const user = userEvent.setup();
      render(<CookieBanner {...defaultProps} />);

      await user.click(screen.getByRole('button', { name: /accept all/i }));
      expect(mockOnAcceptAll).toHaveBeenCalledTimes(1);
    });

    it('calls onRejectAll when Reject All button clicked', async () => {
      const user = userEvent.setup();
      render(<CookieBanner {...defaultProps} />);

      await user.click(screen.getByRole('button', { name: /reject all/i }));
      expect(mockOnRejectAll).toHaveBeenCalledTimes(1);
    });

    it('calls onCustomize when Customize button clicked', async () => {
      const user = userEvent.setup();
      render(<CookieBanner {...defaultProps} />);

      await user.click(screen.getByRole('button', { name: /customize/i }));
      expect(mockOnCustomize).toHaveBeenCalledTimes(1);
    });

    it('buttons have correct type attribute', () => {
      render(<CookieBanner {...defaultProps} />);

      const buttons = screen.getAllByRole('button');
      buttons.forEach((button) => {
        expect(button).toHaveAttribute('type', 'button');
      });
    });
  });

  describe('Accessibility', () => {
    it('has dialog role', () => {
      render(<CookieBanner {...defaultProps} />);
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('has aria-label for cookie consent', () => {
      render(<CookieBanner {...defaultProps} />);
      expect(screen.getByRole('dialog')).toHaveAttribute('aria-label', 'Cookie consent');
    });

    it('has aria-modal set to false (non-blocking)', () => {
      render(<CookieBanner {...defaultProps} />);
      expect(screen.getByRole('dialog')).toHaveAttribute('aria-modal', 'false');
    });

    it('all buttons are keyboard accessible', () => {
      render(<CookieBanner {...defaultProps} />);

      const buttons = screen.getAllByRole('button');
      buttons.forEach((button) => {
        expect(button).not.toHaveAttribute('tabindex', '-1');
      });
    });
  });

  describe('Button Styling', () => {
    it('Accept All button has primary styling class', () => {
      render(<CookieBanner {...defaultProps} />);

      const acceptButton = screen.getByRole('button', { name: /accept all/i });
      expect(acceptButton).toHaveClass('fn-cookie-banner__button--primary');
    });

    it('Reject All button has secondary styling class', () => {
      render(<CookieBanner {...defaultProps} />);

      const rejectButton = screen.getByRole('button', { name: /reject all/i });
      expect(rejectButton).toHaveClass('fn-cookie-banner__button--secondary');
    });

    it('Customize button has secondary styling class', () => {
      render(<CookieBanner {...defaultProps} />);

      const customizeButton = screen.getByRole('button', { name: /customize/i });
      expect(customizeButton).toHaveClass('fn-cookie-banner__button--secondary');
    });
  });

  describe('Privacy Policy URL', () => {
    it('renders with different privacy policy URLs', () => {
      render(<CookieBanner {...defaultProps} privacyPolicyUrl="/legal/privacy" />);
      expect(screen.getByRole('link', { name: /privacy policy/i })).toHaveAttribute(
        'href',
        '/legal/privacy'
      );
    });

    it('renders with full URL', () => {
      render(
        <CookieBanner
          {...defaultProps}
          privacyPolicyUrl="https://example.com/privacy"
        />
      );
      expect(screen.getByRole('link', { name: /privacy policy/i })).toHaveAttribute(
        'href',
        'https://example.com/privacy'
      );
    });
  });

  describe('Layout Structure', () => {
    it('renders content section', () => {
      const { container } = render(<CookieBanner {...defaultProps} />);
      expect(container.querySelector('.fn-cookie-banner__content')).toBeInTheDocument();
    });

    it('renders actions section', () => {
      const { container } = render(<CookieBanner {...defaultProps} />);
      expect(container.querySelector('.fn-cookie-banner__actions')).toBeInTheDocument();
    });

    it('renders icon section', () => {
      const { container } = render(<CookieBanner {...defaultProps} />);
      expect(container.querySelector('.fn-cookie-banner__icon')).toBeInTheDocument();
    });

    it('renders text section', () => {
      const { container } = render(<CookieBanner {...defaultProps} />);
      expect(container.querySelector('.fn-cookie-banner__text')).toBeInTheDocument();
    });
  });
});
