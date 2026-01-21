import { ReactNode, useState } from 'react';
import './PricingSection.css';

export interface PricingPlanFeature {
  text: string;
  included: boolean;
  tooltip?: string;
}

export interface PricingPlan {
  /** Plan ID */
  id: string;
  /** Plan name */
  name: string;
  /** Plan description */
  description?: string;
  /** Monthly price */
  monthlyPrice: string;
  /** Annual price (per month) */
  annualPrice: string;
  /** Price period display */
  period?: string;
  /** Is this the recommended plan */
  recommended?: boolean;
  /** Badge text for recommended */
  recommendedText?: string;
  /** Custom badge (overrides recommendedText) */
  badge?: ReactNode;
  /** Features list */
  features: PricingPlanFeature[];
  /** CTA button text */
  ctaText?: string;
  /** Click handler */
  onCtaClick?: () => void;
  /** Is CTA disabled */
  disabled?: boolean;
}

export interface PricingSectionProps {
  /** Section headline */
  headline?: ReactNode;
  /** Section subheadline */
  subheadline?: string;
  /** Pricing plans */
  plans?: PricingPlan[];
  /** Default billing period */
  defaultAnnual?: boolean;
  /** Monthly label for toggle */
  monthlyLabel?: string;
  /** Annual label for toggle */
  annualLabel?: string;
  /** Discount badge for annual */
  discountBadge?: string;
  /** Hide toggle */
  hideToggle?: boolean;
  /** Footer text */
  footerText?: ReactNode;
}

// Icons
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

/**
 * PricingSection - Landing page pricing display
 *
 * Shows all pricing tiers with monthly/annual toggle.
 * Follows the "Digital Journal" theme.
 */
export default function PricingSection({
  headline = 'Choose Your Plan',
  subheadline = 'Start free, upgrade when you need more.',
  plans = [],
  defaultAnnual = false,
  monthlyLabel = 'Monthly',
  annualLabel = 'Annual',
  discountBadge = 'Save 20%',
  hideToggle = false,
  footerText,
}: PricingSectionProps) {
  const [isAnnual, setIsAnnual] = useState(defaultAnnual);

  return (
    <section className="fn-pricing-section">
      <div className="fn-pricing-section__container">
        {/* Header */}
        <div className="fn-pricing-section__header">
          <h2 className="fn-pricing-section__headline">{headline}</h2>
          {subheadline && (
            <p className="fn-pricing-section__subheadline">{subheadline}</p>
          )}

          {/* Toggle */}
          {!hideToggle && (
            <div className="fn-pricing-section__toggle">
              <button
                className={`fn-pricing-section__toggle-option ${!isAnnual ? 'fn-pricing-section__toggle-option--active' : ''}`}
                onClick={() => setIsAnnual(false)}
                type="button"
              >
                {monthlyLabel}
              </button>
              <button
                className={`fn-pricing-section__toggle-option ${isAnnual ? 'fn-pricing-section__toggle-option--active' : ''}`}
                onClick={() => setIsAnnual(true)}
                type="button"
              >
                {annualLabel}
                {discountBadge && (
                  <span className="fn-pricing-section__toggle-badge">{discountBadge}</span>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Plans Grid */}
        {plans.length > 0 && (
          <div className={`fn-pricing-section__grid fn-pricing-section__grid--${plans.length}`}>
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`fn-pricing-section__card ${plan.recommended ? 'fn-pricing-section__card--recommended' : ''}`}
              >
                {/* Badge */}
                {(plan.recommended || plan.badge) && (
                  <div className="fn-pricing-section__badge">
                    {plan.badge || plan.recommendedText || 'Most Popular'}
                  </div>
                )}

                {/* Header */}
                <div className="fn-pricing-section__card-header">
                  <h3 className="fn-pricing-section__card-name">{plan.name}</h3>
                  {plan.description && (
                    <p className="fn-pricing-section__card-description">{plan.description}</p>
                  )}
                </div>

                {/* Price */}
                <div className="fn-pricing-section__card-price">
                  <span className="fn-pricing-section__card-amount">
                    {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="fn-pricing-section__card-period">
                    {plan.period || (plan.monthlyPrice === 'Free' || plan.monthlyPrice === '$0' ? '' : '/month')}
                  </span>
                </div>

                {/* Annual billing note */}
                {isAnnual && plan.monthlyPrice !== 'Free' && plan.monthlyPrice !== '$0' && (
                  <p className="fn-pricing-section__card-billing">Billed annually</p>
                )}

                {/* CTA */}
                <button
                  className={`fn-pricing-section__card-cta ${plan.recommended ? 'fn-pricing-section__card-cta--primary' : 'fn-pricing-section__card-cta--secondary'}`}
                  onClick={plan.onCtaClick}
                  disabled={plan.disabled}
                >
                  {plan.ctaText || 'Get Started'}
                </button>

                {/* Features */}
                <ul className="fn-pricing-section__card-features">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className={`fn-pricing-section__card-feature ${feature.included ? '' : 'fn-pricing-section__card-feature--excluded'}`}
                      title={feature.tooltip}
                    >
                      <span className="fn-pricing-section__card-feature-icon">
                        {feature.included ? <CheckIcon /> : <XIcon />}
                      </span>
                      <span className="fn-pricing-section__card-feature-text">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        {footerText && (
          <div className="fn-pricing-section__footer">
            {footerText}
          </div>
        )}
      </div>
    </section>
  );
}

// Named export
export { PricingSection };
