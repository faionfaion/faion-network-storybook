import { ReactNode } from 'react';
import './ReadTimeBadge.css';

export type ReadTimeBadgeSize = 'small' | 'medium' | 'large';

export interface ReadTimeBadgeProps {
  /** Read time in minutes */
  minutes: number;
  /** Size variant */
  size?: ReadTimeBadgeSize;
  /** Show icon */
  showIcon?: boolean;
  /** Custom icon */
  icon?: ReactNode;
  /** Custom label format */
  formatLabel?: (minutes: number) => string;
  /** Show background */
  showBackground?: boolean;
  /** Additional class name */
  className?: string;
}

// Clock icon
const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

// Default label formatter
const defaultFormatLabel = (minutes: number): string => {
  if (minutes < 1) {
    return '< 1 min read';
  }
  if (minutes === 1) {
    return '1 min read';
  }
  return `${minutes} min read`;
};

/**
 * ReadTimeBadge - Estimated read time indicator
 *
 * Displays clock icon with estimated reading time in minutes.
 */
export default function ReadTimeBadge({
  minutes,
  size = 'medium',
  showIcon = true,
  icon,
  formatLabel = defaultFormatLabel,
  showBackground = false,
  className = '',
}: ReadTimeBadgeProps) {
  const classes = [
    'fn-read-time-badge',
    size !== 'medium' && `fn-read-time-badge--${size}`,
    showBackground && 'fn-read-time-badge--background',
    className,
  ].filter(Boolean).join(' ');

  return (
    <span className={classes}>
      {showIcon && (
        <span className="fn-read-time-badge__icon">
          {icon || <ClockIcon />}
        </span>
      )}
      <span>{formatLabel(minutes)}</span>
    </span>
  );
}

// Named export
export { ReadTimeBadge };
