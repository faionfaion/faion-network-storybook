import { ReactNode } from 'react';
import './PlanComparisonTable.css';

export interface ComparisonPlan {
  /** Plan ID */
  id: string;
  /** Plan name */
  name: string;
  /** Price display */
  price: string;
  /** Is recommended */
  recommended?: boolean;
  /** CTA text */
  ctaText?: string;
  /** CTA click handler */
  onCtaClick?: () => void;
}

export interface ComparisonFeature {
  /** Feature ID */
  id: string;
  /** Feature name */
  name: string;
  /** Feature description/tooltip */
  description?: string;
  /** Value per plan (plan ID -> value) */
  values: Record<string, ReactNode | boolean>;
}

export interface FeatureCategory {
  /** Category ID */
  id: string;
  /** Category name */
  name: string;
  /** Features in this category */
  features: ComparisonFeature[];
}

export interface PlanComparisonTableProps {
  /** Plans to compare */
  plans: ComparisonPlan[];
  /** Feature categories */
  categories: FeatureCategory[];
  /** Show CTAs in header */
  showCtas?: boolean;
  /** Enable sticky header */
  stickyHeader?: boolean;
}

// Icons
const CheckIcon = () => (
  <svg
    className="fn-comparison__check"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const XIcon = () => (
  <svg
    className="fn-comparison__x"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const InfoIcon = () => (
  <svg
    className="fn-comparison__info"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

/**
 * PlanComparisonTable - Detailed plan feature comparison
 *
 * Shows all features across tiers in a table format.
 * Follows the "Digital Journal" theme.
 */
export default function PlanComparisonTable({
  plans,
  categories,
  showCtas = true,
  stickyHeader = true,
}: PlanComparisonTableProps) {
  const renderValue = (value: ReactNode | boolean) => {
    if (typeof value === 'boolean') {
      return value ? <CheckIcon /> : <XIcon />;
    }
    return value;
  };

  return (
    <div className="fn-comparison">
      <div className="fn-comparison__wrapper">
        <table className="fn-comparison__table">
          {/* Header */}
          <thead className={stickyHeader ? 'fn-comparison__thead--sticky' : ''}>
            <tr>
              <th className="fn-comparison__th fn-comparison__th--feature">
                Features
              </th>
              {plans.map((plan) => (
                <th
                  key={plan.id}
                  className={`fn-comparison__th fn-comparison__th--plan ${plan.recommended ? 'fn-comparison__th--recommended' : ''}`}
                >
                  <div className="fn-comparison__plan-header">
                    {plan.recommended && (
                      <span className="fn-comparison__badge">Most Popular</span>
                    )}
                    <span className="fn-comparison__plan-name">{plan.name}</span>
                    <span className="fn-comparison__plan-price">{plan.price}</span>
                    {showCtas && plan.ctaText && (
                      <button
                        className={`fn-comparison__cta ${plan.recommended ? 'fn-comparison__cta--primary' : 'fn-comparison__cta--secondary'}`}
                        onClick={plan.onCtaClick}
                      >
                        {plan.ctaText}
                      </button>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {categories.map((category) => (
              <>
                {/* Category Header */}
                <tr key={`cat-${category.id}`} className="fn-comparison__category-row">
                  <td
                    className="fn-comparison__category"
                    colSpan={plans.length + 1}
                  >
                    {category.name}
                  </td>
                </tr>

                {/* Features */}
                {category.features.map((feature) => (
                  <tr key={feature.id} className="fn-comparison__feature-row">
                    <td className="fn-comparison__td fn-comparison__td--feature">
                      <span className="fn-comparison__feature-name">
                        {feature.name}
                        {feature.description && (
                          <span
                            className="fn-comparison__tooltip-trigger"
                            title={feature.description}
                          >
                            <InfoIcon />
                          </span>
                        )}
                      </span>
                    </td>
                    {plans.map((plan) => (
                      <td
                        key={`${feature.id}-${plan.id}`}
                        className={`fn-comparison__td fn-comparison__td--value ${plan.recommended ? 'fn-comparison__td--recommended' : ''}`}
                      >
                        {renderValue(feature.values[plan.id])}
                      </td>
                    ))}
                  </tr>
                ))}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Named export
export { PlanComparisonTable };
