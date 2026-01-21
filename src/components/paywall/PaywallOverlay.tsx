import { ReactNode } from 'react';
import './PaywallOverlay.css';

export interface PaywallOverlayProps {
  /** Content to display behind the paywall */
  children: ReactNode;
  /** Title for the CTA card */
  title?: string;
  /** Description text */
  description?: string;
  /** Primary CTA button text */
  ctaText?: string;
  /** Primary CTA click handler */
  onCtaClick?: () => void;
  /** Secondary link text */
  secondaryText?: string;
  /** Secondary link click handler */
  onSecondaryClick?: () => void;
  /** Whether to show the lock icon */
  showIcon?: boolean;
  /** Custom icon to display */
  icon?: ReactNode;
}

// Default lock icon
const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

/**
 * PaywallOverlay - Blur overlay for premium content
 *
 * Creates a gradient blur effect over content with a centered CTA card
 * to encourage subscription. Top 30% of content remains visible.
 */
export default function PaywallOverlay({
  children,
  title = 'Premium Content',
  description = 'Get full access to this article and 500+ methodologies with a Plus subscription.',
  ctaText = 'Get Plus for $19/month',
  onCtaClick,
  secondaryText = 'Learn more about our plans',
  onSecondaryClick,
  showIcon = true,
  icon,
}: PaywallOverlayProps) {
  return (
    <div className="fn-paywall-overlay">
      {/* Original content */}
      <div className="fn-paywall-overlay__content">
        {children}
      </div>

      {/* Gradient blur mask */}
      <div className="fn-paywall-overlay__mask" aria-hidden="true" />

      {/* CTA Card */}
      <div className="fn-paywall-overlay__cta-container">
        <div className="fn-paywall-overlay__cta-card">
          {showIcon && (
            <div className="fn-paywall-overlay__icon">
              {icon || <LockIcon />}
            </div>
          )}

          <h3 className="fn-paywall-overlay__title">{title}</h3>
          <p className="fn-paywall-overlay__description">{description}</p>

          <button
            className="fn-paywall-overlay__cta-button"
            onClick={onCtaClick}
          >
            {ctaText}
          </button>

          {secondaryText && (
            <a
              href="#"
              className="fn-paywall-overlay__secondary-link"
              onClick={(e) => {
                e.preventDefault();
                onSecondaryClick?.();
              }}
            >
              {secondaryText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// Named export
export { PaywallOverlay };
