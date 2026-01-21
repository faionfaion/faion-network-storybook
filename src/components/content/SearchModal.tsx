import { useState, useEffect, useRef, useCallback } from 'react';
import './SearchModal.css';

export interface SearchResultItem {
  id: string;
  title: string;
  excerpt?: string;
  category?: string;
  href: string;
  type?: 'methodology' | 'article' | 'page' | 'term';
  icon?: React.ReactNode;
}

export interface SearchModalProps {
  /** Whether modal is open */
  isOpen: boolean;
  /** Callback to close modal */
  onClose: () => void;
  /** Search callback */
  onSearch: (query: string) => void | Promise<void>;
  /** Search results */
  results?: SearchResultItem[];
  /** Loading state */
  isLoading?: boolean;
  /** Placeholder text */
  placeholder?: string;
  /** Recent searches */
  recentSearches?: string[];
  /** Clear recent searches callback */
  onClearRecent?: () => void;
  /** Result click callback */
  onResultClick?: (result: SearchResultItem) => void;
  /** Additional class name */
  className?: string;
}

// Icons
const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const FileTextIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

const BookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const getTypeIcon = (type?: string) => {
  switch (type) {
    case 'methodology':
      return <BookIcon />;
    case 'article':
      return <FileTextIcon />;
    default:
      return <FileTextIcon />;
  }
};

/**
 * SearchModal - Full-screen search overlay with Cmd+K shortcut
 *
 * Provides fast, keyboard-accessible search experience.
 */
export default function SearchModal({
  isOpen,
  onClose,
  onSearch,
  results = [],
  isLoading = false,
  placeholder = 'Search methodologies, articles, and more...',
  recentSearches = [],
  onClearRecent,
  onResultClick,
  className = '',
}: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Handle global Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (!isOpen) {
          // Parent should handle opening
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Handle escape and navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const maxIndex = results.length > 0 ? results.length - 1 : recentSearches.length - 1;
      setSelectedIndex((prev) => Math.min(prev + 1, maxIndex));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results.length > 0 && results[selectedIndex]) {
        handleResultClick(results[selectedIndex]);
      } else if (recentSearches.length > 0 && query === '' && recentSearches[selectedIndex]) {
        setQuery(recentSearches[selectedIndex]);
        onSearch(recentSearches[selectedIndex]);
      }
    }
  }, [results, recentSearches, selectedIndex, query, onClose, onSearch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    setSelectedIndex(0);
    onSearch(newQuery);
  };

  const handleResultClick = (result: SearchResultItem) => {
    if (onResultClick) {
      onResultClick(result);
    } else if (result.href) {
      window.location.href = result.href;
    }
    onClose();
  };

  const handleRecentClick = (search: string) => {
    setQuery(search);
    onSearch(search);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const showRecent = query === '' && recentSearches.length > 0;
  const showResults = query !== '' && results.length > 0;
  const showEmpty = query !== '' && !isLoading && results.length === 0;

  const classes = [
    'fn-search-modal',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} onClick={handleBackdropClick} role="dialog" aria-modal="true" aria-label="Search">
      <div className="fn-search-modal__content">
        {/* Search input */}
        <div className="fn-search-modal__header">
          <span className="fn-search-modal__icon">
            <SearchIcon />
          </span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className="fn-search-modal__input"
            aria-label="Search"
          />
          <button
            type="button"
            className="fn-search-modal__close"
            onClick={onClose}
            aria-label="Close search"
          >
            <CloseIcon />
          </button>
          <kbd className="fn-search-modal__shortcut">ESC</kbd>
        </div>

        {/* Results area */}
        <div className="fn-search-modal__body" ref={resultsRef}>
          {/* Loading state */}
          {isLoading && (
            <div className="fn-search-modal__loading">
              <div className="fn-search-modal__spinner" />
              <span>Searching...</span>
            </div>
          )}

          {/* Recent searches */}
          {showRecent && (
            <div className="fn-search-modal__section">
              <div className="fn-search-modal__section-header">
                <span className="fn-search-modal__section-title">Recent searches</span>
                {onClearRecent && (
                  <button
                    type="button"
                    className="fn-search-modal__clear"
                    onClick={onClearRecent}
                  >
                    Clear
                  </button>
                )}
              </div>
              <ul className="fn-search-modal__list">
                {recentSearches.map((search, index) => (
                  <li key={search}>
                    <button
                      type="button"
                      className={`fn-search-modal__item ${index === selectedIndex ? 'fn-search-modal__item--selected' : ''}`}
                      onClick={() => handleRecentClick(search)}
                    >
                      <span className="fn-search-modal__item-icon">
                        <ClockIcon />
                      </span>
                      <span className="fn-search-modal__item-text">{search}</span>
                      <span className="fn-search-modal__item-arrow">
                        <ArrowRightIcon />
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Search results */}
          {showResults && (
            <div className="fn-search-modal__section">
              <div className="fn-search-modal__section-header">
                <span className="fn-search-modal__section-title">Results</span>
                <span className="fn-search-modal__count">{results.length} found</span>
              </div>
              <ul className="fn-search-modal__list">
                {results.map((result, index) => (
                  <li key={result.id}>
                    <button
                      type="button"
                      className={`fn-search-modal__item fn-search-modal__result ${index === selectedIndex ? 'fn-search-modal__item--selected' : ''}`}
                      onClick={() => handleResultClick(result)}
                    >
                      <span className="fn-search-modal__item-icon">
                        {result.icon || getTypeIcon(result.type)}
                      </span>
                      <span className="fn-search-modal__item-content">
                        <span className="fn-search-modal__item-title">{result.title}</span>
                        {result.excerpt && (
                          <span className="fn-search-modal__item-excerpt">{result.excerpt}</span>
                        )}
                      </span>
                      {result.category && (
                        <span className="fn-search-modal__item-category">{result.category}</span>
                      )}
                      <span className="fn-search-modal__item-arrow">
                        <ArrowRightIcon />
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Empty state */}
          {showEmpty && (
            <div className="fn-search-modal__empty">
              <p className="fn-search-modal__empty-title">No results found</p>
              <p className="fn-search-modal__empty-text">
                Try different keywords or browse our content
              </p>
            </div>
          )}

          {/* Initial state */}
          {!showRecent && !showResults && !showEmpty && !isLoading && (
            <div className="fn-search-modal__hint">
              <p>Type to search methodologies, articles, and more</p>
              <p className="fn-search-modal__hint-shortcuts">
                <kbd>Enter</kbd> to select
                <kbd>Arrows</kbd> to navigate
                <kbd>Esc</kbd> to close
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="fn-search-modal__footer">
          <span className="fn-search-modal__footer-hint">
            Press <kbd>Cmd</kbd> + <kbd>K</kbd> anytime to search
          </span>
        </div>
      </div>
    </div>
  );
}

// Named export
export { SearchModal };
