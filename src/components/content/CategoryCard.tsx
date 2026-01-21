import { ReactNode } from 'react';
import './CategoryCard.css';

export type CategoryCardVariant = 'default' | 'compact' | 'featured';

export interface CategoryCardProps {
  /** Category name */
  name: string;
  /** Category description */
  description?: string;
  /** Item count (articles/methodologies) */
  count?: number;
  /** Category icon */
  icon?: ReactNode;
  /** Card variant */
  variant?: CategoryCardVariant;
  /** Click handler */
  onClick?: () => void;
  /** Link URL */
  href?: string;
  /** Show arrow on hover */
  showArrow?: boolean;
  /** Additional class name */
  className?: string;
}

// Default category icon
const DefaultIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 3h7v7H3z" />
    <path d="M14 3h7v7h-7z" />
    <path d="M14 14h7v7h-7z" />
    <path d="M3 14h7v7H3z" />
  </svg>
);

// Arrow icon
const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

/**
 * CategoryCard - Card for category overview
 *
 * Displays category with icon, name, description, and item count.
 */
export default function CategoryCard({
  name,
  description,
  count,
  icon,
  variant = 'default',
  onClick,
  href,
  showArrow = true,
  className = '',
}: CategoryCardProps) {
  const classes = [
    'fn-category-card',
    `fn-category-card--${variant}`,
    className,
  ].filter(Boolean).join(' ');

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.();
    }
  };

  const content = variant === 'compact' ? (
    <>
      <div className="fn-category-card__icon">
        {icon || <DefaultIcon />}
      </div>
      <div className="fn-category-card__content">
        <div className="fn-category-card__header">
          <h3 className="fn-category-card__name">{name}</h3>
          {count !== undefined && (
            <span className="fn-category-card__count">{count}</span>
          )}
        </div>
        {description && (
          <p className="fn-category-card__description">{description}</p>
        )}
      </div>
      {showArrow && (
        <div className="fn-category-card__arrow">
          <ArrowIcon />
        </div>
      )}
    </>
  ) : (
    <>
      <div className="fn-category-card__icon">
        {icon || <DefaultIcon />}
      </div>
      <div className="fn-category-card__header">
        <h3 className="fn-category-card__name">{name}</h3>
        {count !== undefined && (
          <span className="fn-category-card__count">{count}</span>
        )}
      </div>
      {description && (
        <p className="fn-category-card__description">{description}</p>
      )}
      {showArrow && (
        <div className="fn-category-card__arrow">
          <ArrowIcon />
        </div>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={handleClick}
      >
        {content}
      </a>
    );
  }

  return (
    <article
      className={classes}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="link"
      tabIndex={0}
    >
      {content}
    </article>
  );
}

// Named export
export { CategoryCard };
