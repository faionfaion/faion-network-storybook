import { ReactNode } from 'react';
import './PaywallCTA.css';

export interface PaywallCTAFeature {
  text: string;
}

export interface PaywallCTAProps {
  /** Compelling headline */
  headline?: string;
  /** Brief value proposition */
  valueProp?: string;
  /** Price amount (e.g., "$19") */
  price?: string;
  /** Price period (e.g., "/month") */
  period?: string;
  /** Original price if discounted */
  originalPrice?: string;
  /** List of features */
  features?: PaywallCTAFeature[];
  /** Primary CTA button text */
  ctaText?: string;
  /** Primary CTA click handler */
  onCtaClick?: () => void;
  /** Secondary link text */
  secondaryText?: string;
  /** Secondary link click handler */
  onSecondaryClick?: () => void;
  /** Whether to show icon */
  showIcon?: boolean;
  /** Custom icon */
  icon?: ReactNode;
  /** Optional badge text */
  badge?: string;
  /** Highlighted style */
  highlighted?: boolean;
}

// Default unlock icon
const UnlockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 9.9-1" />
  </svg>
);

// Check icon
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/**
 * PaywallCTA - CTA component for paywall prompts
 *
 * A standalone CTA card with compelling message, pricing info,
 * and action button for converting visitors to subscribers.
 */
export default function PaywallCTA({
  headline = 'Unlock Premium Content',
  valueProp = 'Get access to 500+ methodologies, templates, and step-by-step guides.',
  price = '$19',
  period = '/month',
  originalPrice,
  features = [],
  ctaText = 'Get Started',
  onCtaClick,
  secondaryText = 'See all plans',
  onSecondaryClick,
  showIcon = true,
  icon,
  badge,
  highlighted = false,
}: PaywallCTAProps) {
  return (
    <div className={`fn-paywall-cta ${highlighted ? 'fn-paywall-cta--highlighted' : ''}`}>
      {badge && <div className="fn-paywall-cta__badge">{badge}</div>}

      {showIcon && (
        <div className="fn-paywall-cta__icon">
          {icon || <UnlockIcon />}
        </div>
      )}

      <h3 className="fn-paywall-cta__headline">{headline}</h3>
      <p className="fn-paywall-cta__value-prop">{valueProp}</p>

      {/* Price */}
      <div className="fn-paywall-cta__price">
        {originalPrice && (
          <span className="fn-paywall-cta__price-original">{originalPrice}</span>
        )}
        <span className="fn-paywall-cta__price-amount">{price}</span>
        {period && <span className="fn-paywall-cta__price-period">{period}</span>}
      </div>

      {/* Features */}
      {features.length > 0 && (
        <ul className="fn-paywall-cta__features">
          {features.map((feature, index) => (
            <li key={index} className="fn-paywall-cta__feature">
              <span className="fn-paywall-cta__feature-icon">
                <CheckIcon />
              </span>
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
      )}

      <button className="fn-paywall-cta__button" onClick={onCtaClick}>
        {ctaText}
      </button>

      {secondaryText && (
        <a
          href="#"
          className="fn-paywall-cta__secondary"
          onClick={(e) => {
            e.preventDefault();
            onSecondaryClick?.();
          }}
        >
          {secondaryText}
        </a>
      )}
    </div>
  );
}

// Named export
export { PaywallCTA };
