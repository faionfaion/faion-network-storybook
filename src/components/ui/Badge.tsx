import { ReactNode, forwardRef, HTMLAttributes } from 'react';
import './Badge.css';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: 'neutral' | 'accent' | 'outline' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'small' | 'default' | 'large';
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(({
  children,
  variant = 'neutral',
  size = 'default',
  className = '',
  ...props
}, ref) => {
  const sizeClass = size !== 'default' ? `fn-badge--${size}` : '';

  return (
    <span
      ref={ref}
      className={`fn-badge fn-badge--${variant} ${sizeClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </span>
  );
});

Badge.displayName = 'Badge';

// Level badges for learning path indicators
export interface LevelBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  level: 'starter' | 'builder' | 'scaler' | 'geek';
  icon?: ReactNode;
}

export const LevelBadge = forwardRef<HTMLSpanElement, LevelBadgeProps>(({
  level,
  icon,
  className = '',
  ...props
}, ref) => {
  const labels = {
    starter: 'STARTER',
    builder: 'BUILDER',
    scaler: 'SCALER',
    geek: 'GEEK',
  };

  return (
    <span
      ref={ref}
      className={`fn-level-badge fn-level-badge--${level} ${className}`.trim()}
      {...props}
    >
      {icon && <span className="fn-level-badge__icon">{icon}</span>}
      {labels[level]}
    </span>
  );
});

LevelBadge.displayName = 'LevelBadge';

// Status badge for dynamic status indicators
export interface StatusBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  status: 'active' | 'pending' | 'inactive' | 'error';
  showDot?: boolean;
}

export const StatusBadge = forwardRef<HTMLSpanElement, StatusBadgeProps>(({
  status,
  showDot = true,
  className = '',
  children,
  ...props
}, ref) => {
  const labels = {
    active: 'Active',
    pending: 'Pending',
    inactive: 'Inactive',
    error: 'Error',
  };

  return (
    <span
      ref={ref}
      className={`fn-status-badge fn-status-badge--${status} ${className}`.trim()}
      {...props}
    >
      {showDot && <span className="fn-status-badge__dot" />}
      {children || labels[status]}
    </span>
  );
});

StatusBadge.displayName = 'StatusBadge';
