import './ProgressOverview.css';

export interface ProgressItem {
  id: string;
  label: string;
  current: number;
  total: number;
  href?: string;
}

export interface ProgressOverviewProps {
  /** Title of the progress section */
  title?: string;
  /** Progress items to display */
  items: ProgressItem[];
  /** Additional class name */
  className?: string;
}

/**
 * ProgressOverview - Shows user progress across different content areas
 *
 * Displays progress bars for methodologies, roadmaps, or other tracked content.
 */
export default function ProgressOverview({
  title = 'Your Progress',
  items,
  className = '',
}: ProgressOverviewProps) {
  const classes = ['fn-progress-overview', className].filter(Boolean).join(' ');

  const totalProgress = items.reduce((acc, item) => acc + item.current, 0);
  const totalItems = items.reduce((acc, item) => acc + item.total, 0);
  const overallPercent = totalItems > 0 ? Math.round((totalProgress / totalItems) * 100) : 0;

  return (
    <div className={classes}>
      <div className="fn-progress-overview__header">
        <h3 className="fn-progress-overview__title">{title}</h3>
        <span className="fn-progress-overview__overall">
          {overallPercent}% Complete
        </span>
      </div>

      <div className="fn-progress-overview__items">
        {items.map((item) => {
          const percent = item.total > 0 ? Math.round((item.current / item.total) * 100) : 0;

          return (
            <div key={item.id} className="fn-progress-overview__item">
              <div className="fn-progress-overview__item-header">
                {item.href ? (
                  <a href={item.href} className="fn-progress-overview__item-label fn-progress-overview__item-label--link">
                    {item.label}
                  </a>
                ) : (
                  <span className="fn-progress-overview__item-label">{item.label}</span>
                )}
                <span className="fn-progress-overview__item-count">
                  {item.current}/{item.total}
                </span>
              </div>
              <div className="fn-progress-overview__bar">
                <div
                  className="fn-progress-overview__bar-fill"
                  style={{ width: `${percent}%` }}
                  role="progressbar"
                  aria-valuenow={item.current}
                  aria-valuemin={0}
                  aria-valuemax={item.total}
                  aria-label={`${item.label}: ${percent}% complete`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Named export
export { ProgressOverview };
