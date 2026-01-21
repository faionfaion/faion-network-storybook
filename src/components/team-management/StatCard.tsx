import { ReactNode } from 'react';
import './StatCard.css';

export interface StatCardProps {
  /** Stat label */
  label: string;
  /** Stat value */
  value: string | number;
  /** Change indicator (e.g., "+12%") */
  change?: string;
  /** Type of change */
  changeType?: 'positive' | 'negative' | 'neutral';
  /** Optional icon */
  icon?: ReactNode;
  /** Additional class name */
  className?: string;
}

/**
 * StatCard - Single statistic display card
 *
 * Shows a key metric with optional change indicator.
 */
export default function StatCard({
  label,
  value,
  change,
  changeType = 'neutral',
  icon,
  className = '',
}: StatCardProps) {
  const classes = ['fn-stat-card', className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {icon && (
        <div className="fn-stat-card__icon">
          {icon}
        </div>
      )}
      <div className="fn-stat-card__content">
        <span className="fn-stat-card__label">{label}</span>
        <div className="fn-stat-card__value-row">
          <span className="fn-stat-card__value">{value}</span>
          {change && (
            <span className={`fn-stat-card__change fn-stat-card__change--${changeType}`}>
              {change}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

// Named export
export { StatCard };
