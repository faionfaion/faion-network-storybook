import { ReactNode } from 'react';
import LockedBadge, { LockedBadgeTier } from './LockedBadge';
import './PremiumContent.css';

export interface PremiumContentProps {
  /** Content to display */
  children: ReactNode;
  /** Whether content is locked */
  isLocked?: boolean;
  /** Required tier for access */
  tier?: LockedBadgeTier;
  /** Label text above content */
  label?: string;
  /** Show header with badge */
  showHeader?: boolean;
  /** Highlighted border */
  highlighted?: boolean;
  /** Unlock prompt title */
  unlockTitle?: string;
  /** Unlock prompt text */
  unlockText?: string;
  /** Unlock button text */
  unlockButtonText?: string;
  /** Unlock button click handler */
  onUnlockClick?: () => void;
  /** Additional class name */
  className?: string;
}

// Lock icon
const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

/**
 * PremiumContent - Wrapper for premium content sections
 *
 * Visual indicator that content is premium with unlock prompt.
 */
export default function PremiumContent({
  children,
  isLocked = false,
  tier = 'plus',
  label = 'Premium Content',
  showHeader = true,
  highlighted = false,
  unlockTitle = 'Unlock This Content',
  unlockText = 'Subscribe to get full access to this section.',
  unlockButtonText = 'Get Access',
  onUnlockClick,
  className = '',
}: PremiumContentProps) {
  const classes = [
    'fn-premium-content',
    isLocked && 'fn-premium-content--locked',
    !showHeader && 'fn-premium-content--no-header',
    highlighted && 'fn-premium-content--highlighted',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {showHeader && (
        <div className="fn-premium-content__header">
          <span className="fn-premium-content__label">{label}</span>
          <LockedBadge tier={tier} size="small" />
        </div>
      )}

      <div className="fn-premium-content__body">
        {children}
      </div>

      {isLocked && (
        <div className="fn-premium-content__unlock-overlay">
          <div className="fn-premium-content__unlock-icon">
            <LockIcon />
          </div>
          <h4 className="fn-premium-content__unlock-title">{unlockTitle}</h4>
          <p className="fn-premium-content__unlock-text">{unlockText}</p>
          <button
            className="fn-premium-content__unlock-button"
            onClick={onUnlockClick}
          >
            {unlockButtonText}
          </button>
        </div>
      )}
    </div>
  );
}

// Named export
export { PremiumContent };
