import './PricingToggle.css';

export interface PricingToggleProps {
  /** Is annual billing selected */
  isAnnual: boolean;
  /** Toggle change handler */
  onChange: (isAnnual: boolean) => void;
  /** Monthly label */
  monthlyLabel?: string;
  /** Annual label */
  annualLabel?: string;
  /** Discount badge text */
  discountBadge?: string;
}

/**
 * PricingToggle - Monthly/Annual billing toggle
 *
 * Allows users to switch between billing periods.
 */
export default function PricingToggle({
  isAnnual,
  onChange,
  monthlyLabel = 'Monthly',
  annualLabel = 'Annual',
  discountBadge = 'Save 20%',
}: PricingToggleProps) {
  return (
    <div className="fn-pricing-toggle">
      <button
        className={`fn-pricing-toggle__option ${!isAnnual ? 'fn-pricing-toggle__option--active' : ''}`}
        onClick={() => onChange(false)}
        type="button"
      >
        {monthlyLabel}
      </button>

      <button
        className={`fn-pricing-toggle__option ${isAnnual ? 'fn-pricing-toggle__option--active' : ''}`}
        onClick={() => onChange(true)}
        type="button"
      >
        {annualLabel}
        {discountBadge && (
          <span className="fn-pricing-toggle__badge">{discountBadge}</span>
        )}
      </button>
    </div>
  );
}

// Named export
export { PricingToggle };
