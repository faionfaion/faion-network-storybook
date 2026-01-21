import { ReactNode } from 'react';
import './CategoryBadge.css';

export type CategoryType =
  | 'product'
  | 'business'
  | 'marketing'
  | 'development'
  | 'devops'
  | 'design'
  | 'ai'
  | 'methodology'
  | 'tool'
  | 'case-study'
  | 'guide'
  | 'research'
  | 'project'
  | 'sdd'
  | 'default';

export type CategoryBadgeSize = 'small' | 'medium' | 'large';

export interface CategoryBadgeProps {
  /** Category name to display */
  name: string;
  /** Category type (for color) */
  type?: CategoryType;
  /** Size variant */
  size?: CategoryBadgeSize;
  /** Whether badge is clickable */
  clickable?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Link URL */
  href?: string;
  /** Custom icon */
  icon?: ReactNode;
  /** Show icon */
  showIcon?: boolean;
  /** Additional class name */
  className?: string;
}

// Default category icons
const CategoryIcons: Partial<Record<CategoryType, ReactNode>> = {
  product: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  ),
  development: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  methodology: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),
};

/**
 * CategoryBadge - Color-coded category badge
 *
 * Displays a category name with optional icon and color based on type.
 */
export default function CategoryBadge({
  name,
  type = 'default',
  size = 'medium',
  clickable = false,
  onClick,
  href,
  icon,
  showIcon = false,
  className = '',
}: CategoryBadgeProps) {
  const isClickable = clickable || !!onClick || !!href;

  const classes = [
    'fn-category-badge',
    `fn-category-badge--${type}`,
    size !== 'medium' && `fn-category-badge--${size}`,
    isClickable && 'fn-category-badge--clickable',
    className,
  ].filter(Boolean).join(' ');

  const displayIcon = icon || CategoryIcons[type];

  const content = (
    <>
      {showIcon && displayIcon && (
        <span className="fn-category-badge__icon">{displayIcon}</span>
      )}
      <span>{name}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {content}
      </a>
    );
  }

  if (isClickable) {
    return (
      <button type="button" className={classes} onClick={onClick}>
        {content}
      </button>
    );
  }

  return (
    <span className={classes}>
      {content}
    </span>
  );
}

// Named export
export { CategoryBadge };
