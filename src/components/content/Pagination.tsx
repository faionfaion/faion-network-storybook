import './Pagination.css';

export interface PaginationProps {
  /** Current page (1-indexed) */
  currentPage: number;
  /** Total number of pages */
  totalPages: number;
  /** Callback when page changes */
  onPageChange: (page: number) => void;
  /** Number of page buttons to show */
  siblingCount?: number;
  /** Show first/last buttons */
  showFirstLast?: boolean;
  /** Show prev/next buttons */
  showPrevNext?: boolean;
  /** Variant */
  variant?: 'default' | 'compact' | 'simple';
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  /** Disabled state */
  disabled?: boolean;
  /** Additional class name */
  className?: string;
}

// Icons
const ChevronLeftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const ChevronsLeftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="11 17 6 12 11 7" />
    <polyline points="18 17 13 12 18 7" />
  </svg>
);

const ChevronsRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="13 17 18 12 13 7" />
    <polyline points="6 17 11 12 6 7" />
  </svg>
);

// Generate page range
const generatePageRange = (
  currentPage: number,
  totalPages: number,
  siblingCount: number
): (number | 'ellipsis')[] => {
  const totalNumbers = siblingCount * 2 + 5; // siblings + first + last + current + 2 ellipsis

  if (totalNumbers >= totalPages) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

  const showLeftEllipsis = leftSiblingIndex > 2;
  const showRightEllipsis = rightSiblingIndex < totalPages - 1;

  if (!showLeftEllipsis && showRightEllipsis) {
    const leftItemCount = 3 + 2 * siblingCount;
    const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
    return [...leftRange, 'ellipsis', totalPages];
  }

  if (showLeftEllipsis && !showRightEllipsis) {
    const rightItemCount = 3 + 2 * siblingCount;
    const rightRange = Array.from(
      { length: rightItemCount },
      (_, i) => totalPages - rightItemCount + i + 1
    );
    return [1, 'ellipsis', ...rightRange];
  }

  if (showLeftEllipsis && showRightEllipsis) {
    const middleRange = Array.from(
      { length: rightSiblingIndex - leftSiblingIndex + 1 },
      (_, i) => leftSiblingIndex + i
    );
    return [1, 'ellipsis', ...middleRange, 'ellipsis', totalPages];
  }

  return [];
};

/**
 * Pagination - Page navigation component
 *
 * Supports prev/next, first/last, and numbered page buttons.
 */
export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  showFirstLast = true,
  showPrevNext = true,
  variant = 'default',
  size = 'md',
  disabled = false,
  className = '',
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = generatePageRange(currentPage, totalPages, siblingCount);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePageClick = (page: number) => {
    if (!disabled && page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const classes = [
    'fn-pagination',
    `fn-pagination--${variant}`,
    `fn-pagination--${size}`,
    disabled && 'fn-pagination--disabled',
    className,
  ].filter(Boolean).join(' ');

  // Simple variant
  if (variant === 'simple') {
    return (
      <nav className={classes} aria-label="Pagination">
        <button
          type="button"
          className="fn-pagination__button fn-pagination__button--prev"
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={disabled || isFirstPage}
          aria-label="Previous page"
        >
          <ChevronLeftIcon />
          <span>Previous</span>
        </button>
        <span className="fn-pagination__info">
          Page {currentPage} of {totalPages}
        </span>
        <button
          type="button"
          className="fn-pagination__button fn-pagination__button--next"
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={disabled || isLastPage}
          aria-label="Next page"
        >
          <span>Next</span>
          <ChevronRightIcon />
        </button>
      </nav>
    );
  }

  return (
    <nav className={classes} aria-label="Pagination">
      {/* First button */}
      {showFirstLast && (
        <button
          type="button"
          className="fn-pagination__button fn-pagination__button--first"
          onClick={() => handlePageClick(1)}
          disabled={disabled || isFirstPage}
          aria-label="First page"
        >
          <ChevronsLeftIcon />
        </button>
      )}

      {/* Previous button */}
      {showPrevNext && (
        <button
          type="button"
          className="fn-pagination__button fn-pagination__button--prev"
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={disabled || isFirstPage}
          aria-label="Previous page"
        >
          <ChevronLeftIcon />
        </button>
      )}

      {/* Page numbers */}
      {variant !== 'compact' && (
        <div className="fn-pagination__pages">
          {pages.map((page, index) => {
            if (page === 'ellipsis') {
              return (
                <span key={`ellipsis-${index}`} className="fn-pagination__ellipsis">
                  ...
                </span>
              );
            }

            return (
              <button
                key={page}
                type="button"
                className={`fn-pagination__page ${page === currentPage ? 'fn-pagination__page--active' : ''}`}
                onClick={() => handlePageClick(page)}
                disabled={disabled}
                aria-label={`Page ${page}`}
                aria-current={page === currentPage ? 'page' : undefined}
              >
                {page}
              </button>
            );
          })}
        </div>
      )}

      {/* Compact info */}
      {variant === 'compact' && (
        <span className="fn-pagination__info">
          {currentPage} / {totalPages}
        </span>
      )}

      {/* Next button */}
      {showPrevNext && (
        <button
          type="button"
          className="fn-pagination__button fn-pagination__button--next"
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={disabled || isLastPage}
          aria-label="Next page"
        >
          <ChevronRightIcon />
        </button>
      )}

      {/* Last button */}
      {showFirstLast && (
        <button
          type="button"
          className="fn-pagination__button fn-pagination__button--last"
          onClick={() => handlePageClick(totalPages)}
          disabled={disabled || isLastPage}
          aria-label="Last page"
        >
          <ChevronsRightIcon />
        </button>
      )}
    </nav>
  );
}

// Named export
export { Pagination };
