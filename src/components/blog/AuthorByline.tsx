import './AuthorByline.css';

export interface AuthorBylineProps {
  /** Author name */
  name: string;
  /** Author avatar URL */
  avatar?: string;
  /** Link to author page */
  href?: string;
  /** Publication date (ISO string) */
  publishedAt?: string;
  /** Read time in minutes */
  readTime?: number;
  /** Additional class name */
  className?: string;
}

/**
 * AuthorByline - Compact inline author credit
 *
 * Displays author avatar, name, and optional publication metadata.
 * Used in article headers and post listings.
 */
export default function AuthorByline({
  name,
  avatar,
  href,
  publishedAt,
  readTime,
  className = '',
}: AuthorBylineProps) {
  const classes = ['fn-author-byline', className].filter(Boolean).join(' ');

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const AuthorContent = (
    <>
      {avatar && (
        <img
          src={avatar}
          alt={name}
          className="fn-author-byline__avatar"
        />
      )}
      <span className="fn-author-byline__name">{name}</span>
    </>
  );

  return (
    <div className={classes}>
      {href ? (
        <a href={href} className="fn-author-byline__link">
          {AuthorContent}
        </a>
      ) : (
        <span className="fn-author-byline__author">{AuthorContent}</span>
      )}
      {(publishedAt || readTime) && (
        <div className="fn-author-byline__meta">
          {publishedAt && (
            <span className="fn-author-byline__date">{formatDate(publishedAt)}</span>
          )}
          {publishedAt && readTime && (
            <span className="fn-author-byline__separator">·</span>
          )}
          {readTime && (
            <span className="fn-author-byline__read-time">{readTime} min read</span>
          )}
        </div>
      )}
    </div>
  );
}

// Named export
export { AuthorByline };
