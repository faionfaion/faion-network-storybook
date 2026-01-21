import './LastUpdated.css';

export interface LastUpdatedProps {
  /** Date string (ISO format or any parseable format) */
  date: string;
  /** Display format: 'long', 'short', or 'relative' */
  format?: 'long' | 'short' | 'relative';
  /** Additional class name */
  className?: string;
}

/**
 * LastUpdated - Displays last updated date for legal documents
 *
 * Shows when a policy or legal document was last modified.
 */
export default function LastUpdated({
  date,
  format = 'long',
  className = '',
}: LastUpdatedProps) {
  const parsedDate = new Date(date);
  const formattedDate = formatDate(parsedDate, format);

  const classes = ['fn-last-updated', className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <span className="fn-last-updated__label">Last updated:</span>
      <time className="fn-last-updated__date" dateTime={parsedDate.toISOString()}>
        {formattedDate}
      </time>
    </div>
  );
}

function formatDate(date: Date, format: 'long' | 'short' | 'relative'): string {
  if (isNaN(date.getTime())) {
    return 'Invalid date';
  }

  switch (format) {
    case 'long':
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    case 'short':
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    case 'relative':
      return getRelativeTime(date);
    default:
      return date.toLocaleDateString('en-US');
  }
}

function getRelativeTime(date: Date): string {
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) {
    return 'Today';
  } else if (diffInDays === 1) {
    return 'Yesterday';
  } else if (diffInDays < 7) {
    return `${diffInDays} days ago`;
  } else if (diffInDays < 30) {
    const weeks = Math.floor(diffInDays / 7);
    return weeks === 1 ? '1 week ago' : `${weeks} weeks ago`;
  } else if (diffInDays < 365) {
    const months = Math.floor(diffInDays / 30);
    return months === 1 ? '1 month ago' : `${months} months ago`;
  } else {
    const years = Math.floor(diffInDays / 365);
    return years === 1 ? '1 year ago' : `${years} years ago`;
  }
}

// Named export
export { LastUpdated };
