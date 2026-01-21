import { ReactNode } from 'react';
import './LockedBadge.css';

export type LockedBadgeTier = 'plus' | 'pro' | 'team' | 'ultimate';
export type LockedBadgeSize = 'small' | 'medium' | 'large';

export interface LockedBadgeProps {
  /** Text to display */
  text?: string;
  /** Tier variant */
  tier?: LockedBadgeTier;
  /** Size variant */
  size?: LockedBadgeSize;
  /** Outline style */
  outline?: boolean;
  /** Show lock icon */
  showIcon?: boolean;
  /** Custom icon */
  icon?: ReactNode;
  /** Additional class name */
  className?: string;
}

// Default tier labels
const TIER_LABELS: Record<LockedBadgeTier, string> = {
  plus: 'Plus',
  pro: 'Pro',
  team: 'Team',
  ultimate: 'Ultimate',
};

// Lock icon
const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
  </svg>
);

/**
 * LockedBadge - Badge indicating locked/premium content
 *
 * Displays a lock icon with tier text (Premium, Pro, etc.)
 */
export default function LockedBadge({
  text,
  tier = 'plus',
  size = 'medium',
  outline = false,
  showIcon = true,
  icon,
  className = '',
}: LockedBadgeProps) {
  const displayText = text || TIER_LABELS[tier];

  const classes = [
    'fn-locked-badge',
    `fn-locked-badge--${tier}`,
    size !== 'medium' && `fn-locked-badge--${size}`,
    outline && 'fn-locked-badge--outline',
    className,
  ].filter(Boolean).join(' ');

  return (
    <span className={classes}>
      {showIcon && (
        <span className="fn-locked-badge__icon">
          {icon || <LockIcon />}
        </span>
      )}
      <span>{displayText}</span>
    </span>
  );
}

// Named export
export { LockedBadge };
