import './VerifiedBadge.css';

export interface VerifiedBadgeProps {
  /** Show text label */
  showLabel?: boolean;
  /** Custom label text */
  labelText?: string;
  /** Tooltip text */
  tooltip?: string;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Badge variant */
  variant?: 'default' | 'outlined' | 'subtle';
}

// Checkmark icon
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="currentColor" />
    <path
      d="M9 12l2 2 4-4"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * VerifiedBadge - Verification indicator
 *
 * Shows verified status for testimonials and reviews.
 * Follows the "Digital Journal" theme.
 */
export default function VerifiedBadge({
  showLabel = true,
  labelText = 'Verified',
  tooltip = 'This review is from a verified customer',
  size = 'md',
  variant = 'default',
}: VerifiedBadgeProps) {
  return (
    <span
      className={`fn-verified fn-verified--${size} fn-verified--${variant}`}
      title={tooltip}
    >
      <span className="fn-verified__icon">
        <CheckIcon />
      </span>
      {showLabel && (
        <span className="fn-verified__label">{labelText}</span>
      )}
    </span>
  );
}

// Named export
export { VerifiedBadge };
