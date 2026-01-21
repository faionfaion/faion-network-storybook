import { ReactNode } from 'react';
import './ContentSection.css';

export interface ContentPreviewItem {
  /** Unique identifier */
  id: string;
  /** Item title */
  title: string;
  /** Category name */
  category: string;
  /** Brief description */
  description: string;
  /** Reading time in minutes */
  readTime?: number;
  /** Difficulty level */
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  /** Whether item is premium/locked */
  isPremium?: boolean;
  /** Optional thumbnail URL */
  thumbnail?: string;
  /** Click handler */
  onClick?: () => void;
}

export interface ContentCategory {
  /** Category ID */
  id: string;
  /** Category name */
  name: string;
  /** Item count */
  count: number;
}

export interface ContentSectionProps {
  /** Section headline */
  headline?: ReactNode;
  /** Section subheadline */
  subheadline?: string;
  /** Featured content item */
  featuredItem?: ContentPreviewItem;
  /** Content preview items */
  items?: ContentPreviewItem[];
  /** Available categories */
  categories?: ContentCategory[];
  /** Currently active category filter */
  activeCategory?: string;
  /** Category filter change handler */
  onCategoryChange?: (categoryId: string) => void;
  /** Browse all CTA text */
  browseAllText?: string;
  /** Browse all click handler */
  onBrowseAllClick?: () => void;
}

/**
 * ContentSection - Landing page content preview section
 *
 * Shows methodology previews, category filtering, and featured content.
 * Follows the "Digital Journal" theme.
 */
export default function ContentSection({
  headline = 'Explore Our Methodologies',
  subheadline = 'From idea validation to scaling your business, we cover every stage of the solopreneur journey.',
  featuredItem,
  items = [],
  categories = [],
  activeCategory = 'all',
  onCategoryChange,
  browseAllText = 'Browse All Content',
  onBrowseAllClick,
}: ContentSectionProps) {
  const getDifficultyLabel = (difficulty?: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'Beginner';
      case 'intermediate':
        return 'Intermediate';
      case 'advanced':
        return 'Advanced';
      default:
        return null;
    }
  };

  const getDifficultyClass = (difficulty?: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'fn-content__difficulty--beginner';
      case 'intermediate':
        return 'fn-content__difficulty--intermediate';
      case 'advanced':
        return 'fn-content__difficulty--advanced';
      default:
        return '';
    }
  };

  return (
    <section className="fn-content">
      <div className="fn-content__container">
        {/* Header */}
        <div className="fn-content__header">
          <h2 className="fn-content__headline">{headline}</h2>
          {subheadline && (
            <p className="fn-content__subheadline">{subheadline}</p>
          )}
        </div>

        {/* Category Filters */}
        {categories.length > 0 && (
          <div className="fn-content__categories">
            <button
              className={`fn-content__category ${activeCategory === 'all' ? 'fn-content__category--active' : ''}`}
              onClick={() => onCategoryChange?.('all')}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`fn-content__category ${activeCategory === cat.id ? 'fn-content__category--active' : ''}`}
                onClick={() => onCategoryChange?.(cat.id)}
              >
                {cat.name}
                <span className="fn-content__category-count">{cat.count}</span>
              </button>
            ))}
          </div>
        )}

        {/* Featured Item */}
        {featuredItem && (
          <div className="fn-content__featured" onClick={featuredItem.onClick}>
            <div className="fn-content__featured-badge">Featured</div>
            {featuredItem.thumbnail && (
              <div className="fn-content__featured-image">
                <img src={featuredItem.thumbnail} alt={featuredItem.title} />
              </div>
            )}
            <div className="fn-content__featured-content">
              <span className="fn-content__featured-category">{featuredItem.category}</span>
              <h3 className="fn-content__featured-title">{featuredItem.title}</h3>
              <p className="fn-content__featured-description">{featuredItem.description}</p>
              <div className="fn-content__featured-meta">
                {featuredItem.readTime && (
                  <span className="fn-content__meta-item">
                    {featuredItem.readTime} min read
                  </span>
                )}
                {featuredItem.difficulty && (
                  <span className={`fn-content__difficulty ${getDifficultyClass(featuredItem.difficulty)}`}>
                    {getDifficultyLabel(featuredItem.difficulty)}
                  </span>
                )}
                {featuredItem.isPremium && (
                  <span className="fn-content__premium-badge">Premium</span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Content Grid */}
        {items.length > 0 && (
          <div className="fn-content__grid">
            {items.map((item) => (
              <div key={item.id} className="fn-content__card" onClick={item.onClick}>
                {item.thumbnail && (
                  <div className="fn-content__card-image">
                    <img src={item.thumbnail} alt={item.title} />
                  </div>
                )}
                <div className="fn-content__card-content">
                  <span className="fn-content__card-category">{item.category}</span>
                  <h4 className="fn-content__card-title">{item.title}</h4>
                  <p className="fn-content__card-description">{item.description}</p>
                  <div className="fn-content__card-meta">
                    {item.readTime && (
                      <span className="fn-content__meta-item">
                        {item.readTime} min
                      </span>
                    )}
                    {item.difficulty && (
                      <span className={`fn-content__difficulty ${getDifficultyClass(item.difficulty)}`}>
                        {getDifficultyLabel(item.difficulty)}
                      </span>
                    )}
                    {item.isPremium && (
                      <span className="fn-content__premium-badge">Premium</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Browse All CTA */}
        {onBrowseAllClick && (
          <div className="fn-content__cta">
            <button className="fn-content__cta-button" onClick={onBrowseAllClick}>
              {browseAllText}
              <svg
                className="fn-content__cta-icon"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 10H16M16 10L11 5M16 10L11 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// Named export
export { ContentSection };
