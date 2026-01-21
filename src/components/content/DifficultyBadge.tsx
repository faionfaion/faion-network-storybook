import { ReactNode } from 'react';
import './DifficultyBadge.css';

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';
export type DifficultyBadgeSize = 'small' | 'medium' | 'large';

export interface DifficultyBadgeProps {
  /** Difficulty level */
  level: DifficultyLevel;
  /** Size variant */
  size?: DifficultyBadgeSize;
  /** Show icon */
  showIcon?: boolean;
  /** Use dot indicator instead of icon */
  useDot?: boolean;
  /** Outline style */
  outline?: boolean;
  /** Custom icon */
  icon?: ReactNode;
  /** Custom label */
  label?: string;
  /** Additional class name */
  className?: string;
}

// Level labels
const LEVEL_LABELS: Record<DifficultyLevel, string> = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
};

// Level icons
const LevelIcons: Record<DifficultyLevel, ReactNode> = {
  beginner: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  intermediate: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="3" />
      <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  advanced: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="3" />
      <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
};

/**
 * DifficultyBadge - Content difficulty level indicator
 *
 * Color-coded badge showing beginner (green), intermediate (yellow), or advanced (red).
 */
export default function DifficultyBadge({
  level,
  size = 'medium',
  showIcon = false,
  useDot = false,
  outline = false,
  icon,
  label,
  className = '',
}: DifficultyBadgeProps) {
  const displayLabel = label || LEVEL_LABELS[level];

  const classes = [
    'fn-difficulty-badge',
    `fn-difficulty-badge--${level}`,
    size !== 'medium' && `fn-difficulty-badge--${size}`,
    useDot && 'fn-difficulty-badge--dot',
    outline && 'fn-difficulty-badge--outline',
    className,
  ].filter(Boolean).join(' ');

  return (
    <span className={classes}>
      {useDot && <span className="fn-difficulty-badge__dot" />}
      {showIcon && !useDot && (
        <span className="fn-difficulty-badge__icon">
          {icon || LevelIcons[level]}
        </span>
      )}
      <span>{displayLabel}</span>
    </span>
  );
}

// Named export
export { DifficultyBadge };
