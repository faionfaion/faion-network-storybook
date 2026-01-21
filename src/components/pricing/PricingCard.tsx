import { ReactNode } from 'react';
import './PricingCard.css';

export interface PricingFeature {
  text: string;
  included: boolean;
  tooltip?: string;
}

export interface PricingCardProps {
  /** Plan name */
  name: string;
  /** Plan description */
  description?: string;
  /** Price amount */
  price: string;
  /** Price period (e.g., "/month", "/year") */
  period?: string;
  /** Original price if discounted */
  originalPrice?: string;
  /** Features list */
  features: PricingFeature[];
  /** CTA button text */
  ctaText?: string;
  /** CTA click handler */
  onCtaClick?: () => void;
  /** Is this the recommended plan */
  recommended?: boolean;
  /** Recommended badge text */
  recommendedText?: string;
  /** Is the CTA disabled */
  disabled?: boolean;
  /** Custom badge */
  badge?: ReactNode;
}

// Check icon
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// X icon
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

/**
 * PricingCard - Individual pricing plan card
 *
 * Displays plan details, features, and CTA.
 */
export default function PricingCard({
  name,
  description,
  price,
  period = '/month',
  originalPrice,
  features,
  ctaText = 'Get Started',
  onCtaClick,
  recommended = false,
  recommendedText = 'Most Popular',
  disabled = false,
  badge,
}: PricingCardProps) {
  return (
    <div className={`fn-pricing-card ${recommended ? 'fn-pricing-card--recommended' : ''}`}>
      {/* Badge */}
      {(recommended || badge) && (
        <div className="fn-pricing-card__badge">
          {badge || recommendedText}
        </div>
      )}

      {/* Header */}
      <div className="fn-pricing-card__header">
        <h3 className="fn-pricing-card__name">{name}</h3>
        {description && (
          <p className="fn-pricing-card__description">{description}</p>
        )}
      </div>

      {/* Price */}
      <div className="fn-pricing-card__price">
        {originalPrice && (
          <span className="fn-pricing-card__original">{originalPrice}</span>
        )}
        <span className="fn-pricing-card__amount">{price}</span>
        {period && <span className="fn-pricing-card__period">{period}</span>}
      </div>

      {/* CTA */}
      <button
        className={`fn-pricing-card__cta ${recommended ? 'fn-pricing-card__cta--primary' : 'fn-pricing-card__cta--secondary'}`}
        onClick={onCtaClick}
        disabled={disabled}
      >
        {ctaText}
      </button>

      {/* Features */}
      <ul className="fn-pricing-card__features">
        {features.map((feature, index) => (
          <li
            key={index}
            className={`fn-pricing-card__feature ${feature.included ? '' : 'fn-pricing-card__feature--excluded'}`}
            title={feature.tooltip}
          >
            <span className="fn-pricing-card__feature-icon">
              {feature.included ? <CheckIcon /> : <XIcon />}
            </span>
            <span className="fn-pricing-card__feature-text">{feature.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Named export
export { PricingCard };
