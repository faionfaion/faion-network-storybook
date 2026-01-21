import './CategoryNav.css';

export interface Category {
  /** Category ID */
  id: string;
  /** Category display name */
  name: string;
  /** Number of posts in category */
  count: number;
}

export interface CategoryNavProps {
  /** List of categories */
  categories: Category[];
  /** Currently active category ID */
  activeCategory?: string;
  /** Callback when category changes */
  onChange: (categoryId: string) => void;
  /** Show "All" option */
  showAll?: boolean;
  /** Additional class name */
  className?: string;
}

/**
 * CategoryNav - Category filter navigation for blog
 *
 * Displays a horizontal list of category pills for filtering blog posts.
 * Includes optional "All" category and post counts.
 */
export default function CategoryNav({
  categories,
  activeCategory,
  onChange,
  showAll = true,
  className = '',
}: CategoryNavProps) {
  const classes = ['fn-category-nav', className].filter(Boolean).join(' ');

  const totalCount = categories.reduce((sum, cat) => sum + cat.count, 0);

  return (
    <nav className={classes} aria-label="Blog categories">
      <ul className="fn-category-nav__list">
        {showAll && (
          <li className="fn-category-nav__item">
            <button
              type="button"
              className={`fn-category-nav__button ${!activeCategory ? 'fn-category-nav__button--active' : ''}`}
              onClick={() => onChange('')}
              aria-current={!activeCategory ? 'true' : undefined}
            >
              <span className="fn-category-nav__name">All</span>
              <span className="fn-category-nav__count">{totalCount}</span>
            </button>
          </li>
        )}
        {categories.map((category) => (
          <li key={category.id} className="fn-category-nav__item">
            <button
              type="button"
              className={`fn-category-nav__button ${activeCategory === category.id ? 'fn-category-nav__button--active' : ''}`}
              onClick={() => onChange(category.id)}
              aria-current={activeCategory === category.id ? 'true' : undefined}
            >
              <span className="fn-category-nav__name">{category.name}</span>
              <span className="fn-category-nav__count">{category.count}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// Named export
export { CategoryNav };
