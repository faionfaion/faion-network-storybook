import { ReactNode } from 'react';
import './DashboardCard.css';

export interface DashboardCardProps {
  /** Card title */
  title: string;
  /** Card content */
  children: ReactNode;
  /** Optional action button */
  action?: {
    label: string;
    onClick: () => void;
  };
  /** Additional class name */
  className?: string;
}

/**
 * DashboardCard - Container card for dashboard sections
 *
 * Used for organizing content in admin/team dashboards.
 */
export default function DashboardCard({
  title,
  children,
  action,
  className = '',
}: DashboardCardProps) {
  const classes = ['fn-dashboard-card', className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div className="fn-dashboard-card__header">
        <h3 className="fn-dashboard-card__title">{title}</h3>
        {action && (
          <button
            type="button"
            className="fn-dashboard-card__action"
            onClick={action.onClick}
          >
            {action.label}
          </button>
        )}
      </div>
      <div className="fn-dashboard-card__content">
        {children}
      </div>
    </div>
  );
}

// Named export
export { DashboardCard };
