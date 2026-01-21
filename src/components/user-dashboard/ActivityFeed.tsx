import './ActivityFeed.css';

export interface ActivityItem {
  id: string;
  type: 'read' | 'completed' | 'saved' | 'started' | 'achievement';
  title: string;
  description?: string;
  href?: string;
  timestamp: string;
}

export interface ActivityFeedProps {
  /** Activity items to display */
  items: ActivityItem[];
  /** Maximum items to show */
  maxItems?: number;
  /** Show "View all" link */
  showViewAll?: boolean;
  /** View all link href */
  viewAllHref?: string;
  /** Additional class name */
  className?: string;
}

/**
 * ActivityFeed - Shows recent user activity
 *
 * Displays a timeline of recent actions like reading, completing, or saving content.
 */
export default function ActivityFeed({
  items,
  maxItems = 5,
  showViewAll = true,
  viewAllHref = '/activity',
  className = '',
}: ActivityFeedProps) {
  const classes = ['fn-activity-feed', className].filter(Boolean).join(' ');
  const displayItems = items.slice(0, maxItems);

  if (items.length === 0) {
    return (
      <div className={classes}>
        <h3 className="fn-activity-feed__title">Recent Activity</h3>
        <div className="fn-activity-feed__empty">
          <EmptyIcon />
          <p>No activity yet. Start exploring to see your history here.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={classes}>
      <h3 className="fn-activity-feed__title">Recent Activity</h3>

      <div className="fn-activity-feed__list">
        {displayItems.map((item) => (
          <div key={item.id} className="fn-activity-feed__item">
            <div className={`fn-activity-feed__icon fn-activity-feed__icon--${item.type}`}>
              <ActivityIcon type={item.type} />
            </div>
            <div className="fn-activity-feed__content">
              {item.href ? (
                <a href={item.href} className="fn-activity-feed__item-title">
                  {item.title}
                </a>
              ) : (
                <span className="fn-activity-feed__item-title">{item.title}</span>
              )}
              {item.description && (
                <span className="fn-activity-feed__item-description">{item.description}</span>
              )}
              <span className="fn-activity-feed__timestamp">
                {formatRelativeTime(item.timestamp)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {showViewAll && items.length > maxItems && (
        <div className="fn-activity-feed__footer">
          <a href={viewAllHref} className="fn-activity-feed__view-all">
            View all activity
          </a>
        </div>
      )}
    </div>
  );
}

function ActivityIcon({ type }: { type: ActivityItem['type'] }) {
  switch (type) {
    case 'read':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      );
    case 'completed':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      );
    case 'saved':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>
      );
    case 'started':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polygon points="10 8 16 12 10 16 10 8" />
        </svg>
      );
    case 'achievement':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      );
    default:
      return null;
  }
}

function EmptyIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function formatRelativeTime(timestamp: string): string {
  const date = new Date(timestamp);
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInMinutes < 1) {
    return 'Just now';
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes}m ago`;
  } else if (diffInHours < 24) {
    return `${diffInHours}h ago`;
  } else if (diffInDays < 7) {
    return `${diffInDays}d ago`;
  } else {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  }
}

// Named export
export { ActivityFeed };
