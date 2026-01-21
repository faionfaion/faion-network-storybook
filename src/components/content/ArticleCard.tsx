import { ReactNode } from 'react';
import { LockedBadge } from '../paywall';
import './ArticleCard.css';

export type ArticleDifficulty = 'beginner' | 'intermediate' | 'advanced';
export type ArticleCardVariant = 'default' | 'horizontal' | 'compact' | 'featured';

export interface ArticleCardProps {
  /** Article title */
  title: string;
  /** Article excerpt */
  excerpt?: string;
  /** Featured image URL */
  imageUrl?: string;
  /** Image alt text */
  imageAlt?: string;
  /** Category name */
  category?: string;
  /** Publication date */
  date?: string;
  /** Read time in minutes */
  readTime?: number;
  /** Difficulty level */
  difficulty?: ArticleDifficulty;
  /** Whether article is premium */
  isPremium?: boolean;
  /** Premium tier required */
  premiumTier?: 'plus' | 'pro' | 'team' | 'ultimate';
  /** Card variant */
  variant?: ArticleCardVariant;
  /** Click handler */
  onClick?: () => void;
  /** Article URL for link */
  href?: string;
  /** Additional class name */
  className?: string;
}

// Icons
const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const ImagePlaceholderIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
);

// Difficulty labels
const DIFFICULTY_LABELS: Record<ArticleDifficulty, string> = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
};

/**
 * ArticleCard - Card component for article previews
 *
 * Displays article with image, title, excerpt, and metadata.
 */
export default function ArticleCard({
  title,
  excerpt,
  imageUrl,
  imageAlt,
  category,
  date,
  readTime,
  difficulty,
  isPremium = false,
  premiumTier = 'plus',
  variant = 'default',
  onClick,
  href,
  className = '',
}: ArticleCardProps) {
  const classes = [
    'fn-article-card',
    `fn-article-card--${variant}`,
    className,
  ].filter(Boolean).join(' ');

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      window.location.href = href;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <article
      className={classes}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="link"
      tabIndex={0}
    >
      {/* Image */}
      <div className="fn-article-card__image">
        {imageUrl ? (
          <img src={imageUrl} alt={imageAlt || title} loading="lazy" />
        ) : (
          <div className="fn-article-card__image-placeholder">
            <div className="fn-article-card__image-placeholder-icon">
              <ImagePlaceholderIcon />
            </div>
          </div>
        )}

        {category && (
          <span className="fn-article-card__category-badge">{category}</span>
        )}

        {isPremium && (
          <div className="fn-article-card__premium-badge">
            <LockedBadge tier={premiumTier} size="small" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="fn-article-card__content">
        <h3 className="fn-article-card__title">{title}</h3>

        {excerpt && (
          <p className="fn-article-card__excerpt">{excerpt}</p>
        )}

        {/* Meta */}
        <div className="fn-article-card__meta">
          {date && (
            <span className="fn-article-card__meta-item">
              <span className="fn-article-card__meta-icon">
                <CalendarIcon />
              </span>
              {date}
            </span>
          )}

          {readTime && (
            <span className="fn-article-card__meta-item">
              <span className="fn-article-card__meta-icon">
                <ClockIcon />
              </span>
              {readTime} min read
            </span>
          )}

          {difficulty && (
            <span className={`fn-article-card__difficulty fn-article-card__difficulty--${difficulty}`}>
              {DIFFICULTY_LABELS[difficulty]}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

// Named export
export { ArticleCard };
