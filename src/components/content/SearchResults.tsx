import { ReactNode } from 'react';
import './SearchResults.css';

export interface SearchResultItem {
  /** Unique ID */
  id: string;
  /** Result title */
  title: string;
  /** Result excerpt/description */
  excerpt?: string;
  /** Category name */
  category?: string;
  /** Result URL */
  href?: string;
  /** Additional metadata */
  meta?: string;
}

export interface SearchResultsProps {
  /** Search results */
  results: SearchResultItem[];
  /** Search query (for highlighting) */
  query?: string;
  /** Whether results are loading */
  isLoading?: boolean;
  /** Empty state title */
  emptyTitle?: string;
  /** Empty state text */
  emptyText?: string;
  /** Custom empty state */
  emptyState?: ReactNode;
  /** Show results count */
  showCount?: boolean;
  /** Result click handler */
  onResultClick?: (result: SearchResultItem) => void;
  /** Additional class name */
  className?: string;
}

// Search icon for empty state
const SearchEmptyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="8" y1="8" x2="14" y2="14" />
    <line x1="14" y1="8" x2="8" y2="14" />
  </svg>
);

/**
 * Highlights search terms in text
 */
function highlightText(text: string, query: string): ReactNode {
  if (!query || !text) return text;

  const parts = text.split(new RegExp(`(${query})`, 'gi'));

  return parts.map((part, index) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark key={index} className="fn-search-results__highlight">
        {part}
      </mark>
    ) : (
      part
    )
  );
}

/**
 * Loading skeleton
 */
function LoadingSkeleton() {
  return (
    <div className="fn-search-results__loading">
      {[1, 2, 3].map((i) => (
        <div key={i} className="fn-search-results__loading-item">
          <div className="fn-search-results__loading-title" />
          <div className="fn-search-results__loading-text" />
          <div className="fn-search-results__loading-text fn-search-results__loading-text--short" />
        </div>
      ))}
    </div>
  );
}

/**
 * SearchResults - Search results display component
 *
 * Displays search results with highlighting, categories, and pagination.
 */
export default function SearchResults({
  results,
  query = '',
  isLoading = false,
  emptyTitle = 'No results found',
  emptyText = 'Try adjusting your search terms or browse our categories.',
  emptyState,
  showCount = true,
  onResultClick,
  className = '',
}: SearchResultsProps) {
  // Loading state
  if (isLoading) {
    return (
      <div className={`fn-search-results ${className}`}>
        <LoadingSkeleton />
      </div>
    );
  }

  // Empty state
  if (results.length === 0) {
    if (emptyState) {
      return (
        <div className={`fn-search-results ${className}`}>
          {emptyState}
        </div>
      );
    }

    return (
      <div className={`fn-search-results ${className}`}>
        <div className="fn-search-results__empty">
          <div className="fn-search-results__empty-icon">
            <SearchEmptyIcon />
          </div>
          <h3 className="fn-search-results__empty-title">{emptyTitle}</h3>
          <p className="fn-search-results__empty-text">{emptyText}</p>
        </div>
      </div>
    );
  }

  // Results
  return (
    <div className={`fn-search-results ${className}`}>
      {/* Count */}
      {showCount && (
        <div className="fn-search-results__header">
          <span className="fn-search-results__count">
            <strong>{results.length}</strong> {results.length === 1 ? 'result' : 'results'}
            {query && ` for "${query}"`}
          </span>
        </div>
      )}

      {/* Results list */}
      <ul className="fn-search-results__list">
        {results.map((result) => (
          <li key={result.id} className="fn-search-results__item">
            <a
              href={result.href || '#'}
              className="fn-search-results__link"
              onClick={(e) => {
                if (onResultClick) {
                  e.preventDefault();
                  onResultClick(result);
                }
              }}
            >
              <div className="fn-search-results__item-header">
                <h3 className="fn-search-results__item-title">
                  {highlightText(result.title, query)}
                </h3>
              </div>

              {result.excerpt && (
                <p className="fn-search-results__item-excerpt">
                  {highlightText(result.excerpt, query)}
                </p>
              )}

              <div className="fn-search-results__item-meta">
                {result.category && (
                  <span className="fn-search-results__category">
                    {result.category}
                  </span>
                )}
                {result.meta && (
                  <span>{result.meta}</span>
                )}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Named exports
export { SearchResults, highlightText };
