import { ReactNode } from 'react';
import './TipBox.css';

export type TipBoxVariant = 'tip' | 'warning' | 'info' | 'success' | 'error';

export interface TipBoxProps {
  /** Variant type */
  variant?: TipBoxVariant;
  /** Optional title */
  title?: string;
  /** Content text or children */
  children: ReactNode;
  /** Compact size */
  compact?: boolean;
  /** Custom icon */
  icon?: ReactNode;
  /** Additional class name */
  className?: string;
}

// Variant icons
const VariantIcons: Record<TipBoxVariant, ReactNode> = {
  tip: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
    </svg>
  ),
  warning: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  info: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  ),
  success: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  error: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  ),
};

// Default titles per variant
const DefaultTitles: Record<TipBoxVariant, string> = {
  tip: 'Tip',
  warning: 'Warning',
  info: 'Note',
  success: 'Success',
  error: 'Error',
};

/**
 * TipBox - MDX callout component with variants
 *
 * Styled boxes for important information: tip, warning, info, success, error.
 */
export default function TipBox({
  variant = 'tip',
  title,
  children,
  compact = false,
  icon,
  className = '',
}: TipBoxProps) {
  const displayTitle = title !== undefined ? title : DefaultTitles[variant];
  const showTitle = displayTitle !== '';

  const classes = [
    'fn-tip-box',
    `fn-tip-box--${variant}`,
    compact && 'fn-tip-box--compact',
    !showTitle && 'fn-tip-box--no-title',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} role="note">
      <span className="fn-tip-box__icon">
        {icon || VariantIcons[variant]}
      </span>
      <div className="fn-tip-box__content">
        {showTitle && (
          <p className="fn-tip-box__title">{displayTitle}</p>
        )}
        <div className="fn-tip-box__text">{children}</div>
      </div>
    </div>
  );
}

// Named export
export { TipBox };
