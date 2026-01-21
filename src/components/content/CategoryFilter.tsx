import { useState, useRef, useEffect } from 'react';
import './CategoryFilter.css';

export interface CategoryOption {
  /** Unique ID */
  id: string;
  /** Display name */
  name: string;
  /** Item count (optional) */
  count?: number;
}

export interface CategoryFilterProps {
  /** Available categories */
  categories: CategoryOption[];
  /** Currently selected category ID(s) */
  selected?: string | string[];
  /** Selection change handler */
  onChange?: (selected: string | string[]) => void;
  /** Allow multiple selection */
  multiSelect?: boolean;
  /** Show "All" option */
  showAll?: boolean;
  /** "All" option label */
  allLabel?: string;
  /** Show counts */
  showCounts?: boolean;
  /** Compact variant */
  compact?: boolean;
  /** Additional class name */
  className?: string;
}

/**
 * CategoryFilter - Horizontal filter pills
 *
 * Horizontal scrollable list of category pills for filtering content.
 */
export default function CategoryFilter({
  categories,
  selected = '',
  onChange,
  multiSelect = false,
  showAll = true,
  allLabel = 'All',
  showCounts = false,
  compact = false,
  className = '',
}: CategoryFilterProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollState, setScrollState] = useState({ left: false, right: false });

  // Normalize selected to array for internal logic
  const selectedArray = Array.isArray(selected) ? selected : selected ? [selected] : [];
  const isAllSelected = selectedArray.length === 0;

  // Check scroll position for fade indicators
  const updateScrollState = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setScrollState({
        left: scrollLeft > 0,
        right: scrollLeft < scrollWidth - clientWidth - 1,
      });
    }
  };

  useEffect(() => {
    updateScrollState();
    window.addEventListener('resize', updateScrollState);
    return () => window.removeEventListener('resize', updateScrollState);
  }, []);

  // Handle category click
  const handleClick = (id: string) => {
    if (multiSelect) {
      const newSelected = selectedArray.includes(id)
        ? selectedArray.filter((s) => s !== id)
        : [...selectedArray, id];
      onChange?.(newSelected);
    } else {
      onChange?.(id === (Array.isArray(selected) ? '' : selected) ? '' : id);
    }
  };

  // Handle "All" click
  const handleAllClick = () => {
    onChange?.(multiSelect ? [] : '');
  };

  const classes = [
    'fn-category-filter',
    compact && 'fn-category-filter--compact',
    scrollState.left && 'fn-category-filter--scrollable-left',
    scrollState.right && 'fn-category-filter--scrollable-right',
    className,
  ].filter(Boolean).join(' ');

  // Calculate total count
  const totalCount = categories.reduce((sum, cat) => sum + (cat.count || 0), 0);

  return (
    <div className={classes}>
      <div
        ref={scrollRef}
        className="fn-category-filter__scroll"
        onScroll={updateScrollState}
      >
        {/* All option */}
        {showAll && (
          <button
            type="button"
            className={`fn-category-filter__item ${isAllSelected ? 'fn-category-filter__item--active' : ''}`}
            onClick={handleAllClick}
          >
            {allLabel}
            {showCounts && totalCount > 0 && (
              <span className="fn-category-filter__count">{totalCount}</span>
            )}
          </button>
        )}

        {/* Category options */}
        {categories.map((category) => {
          const isActive = selectedArray.includes(category.id);
          return (
            <button
              key={category.id}
              type="button"
              className={`fn-category-filter__item ${isActive ? 'fn-category-filter__item--active' : ''}`}
              onClick={() => handleClick(category.id)}
            >
              {category.name}
              {showCounts && category.count !== undefined && (
                <span className="fn-category-filter__count">{category.count}</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Named export
export { CategoryFilter };
