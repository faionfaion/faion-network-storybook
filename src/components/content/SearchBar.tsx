import { useState, useRef, useEffect, useCallback } from 'react';
import './SearchBar.css';

export type SearchBarSize = 'default' | 'compact';

export interface SearchBarProps {
  /** Current search value */
  value?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Change handler */
  onChange?: (value: string) => void;
  /** Submit handler (on Enter) */
  onSubmit?: (value: string) => void;
  /** Whether search is loading */
  isLoading?: boolean;
  /** Size variant */
  size?: SearchBarSize;
  /** Show keyboard shortcut hint */
  showShortcut?: boolean;
  /** Keyboard shortcut */
  shortcut?: string;
  /** Expandable mode (click to expand) */
  expandable?: boolean;
  /** Auto-focus on mount */
  autoFocus?: boolean;
  /** Additional class name */
  className?: string;
  /** Input ID for accessibility */
  id?: string;
  /** Input name */
  name?: string;
}

// Search icon
const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

// Clear icon
const ClearIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

/**
 * SearchBar - Search input component
 *
 * Search input with icon, clear button, and keyboard shortcut hint.
 */
export default function SearchBar({
  value: controlledValue,
  placeholder = 'Search...',
  onChange,
  onSubmit,
  isLoading = false,
  size = 'default',
  showShortcut = true,
  shortcut = 'K',
  expandable = false,
  autoFocus = false,
  className = '',
  id,
  name,
}: SearchBarProps) {
  const [internalValue, setInternalValue] = useState('');
  const [isExpanded, setIsExpanded] = useState(!expandable);
  const inputRef = useRef<HTMLInputElement>(null);

  const value = controlledValue !== undefined ? controlledValue : internalValue;
  const hasValue = value.length > 0;

  // Handle value change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  // Handle clear
  const handleClear = () => {
    if (controlledValue === undefined) {
      setInternalValue('');
    }
    onChange?.('');
    inputRef.current?.focus();
  };

  // Handle submit
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit?.(value);
    }
    if (e.key === 'Escape') {
      if (expandable && hasValue) {
        handleClear();
      } else if (expandable) {
        setIsExpanded(false);
        inputRef.current?.blur();
      }
    }
  };

  // Handle expand button click
  const handleExpandClick = () => {
    setIsExpanded(true);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  // Handle blur for expandable mode
  const handleBlur = () => {
    if (expandable && !hasValue) {
      setIsExpanded(false);
    }
  };

  // Keyboard shortcut listener
  useEffect(() => {
    if (!showShortcut) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === shortcut.toLowerCase()) {
        e.preventDefault();
        if (expandable) {
          setIsExpanded(true);
        }
        inputRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [showShortcut, shortcut, expandable]);

  const classes = [
    'fn-search-bar',
    `fn-search-bar--${size}`,
    isLoading && 'fn-search-bar--loading',
    expandable && 'fn-search-bar--expandable',
    isExpanded && 'fn-search-bar--expanded',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div className="fn-search-bar__wrapper">
        {/* Expand button (for expandable mode) */}
        {expandable && !isExpanded && (
          <button
            type="button"
            className="fn-search-bar__expand-btn"
            onClick={handleExpandClick}
            aria-label="Open search"
          >
            <SearchIcon />
          </button>
        )}

        {/* Search icon or spinner */}
        {!isLoading ? (
          <span className="fn-search-bar__icon">
            <SearchIcon />
          </span>
        ) : (
          <span className="fn-search-bar__spinner" />
        )}

        {/* Input */}
        <input
          ref={inputRef}
          type="search"
          id={id}
          name={name}
          className="fn-search-bar__input"
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          autoFocus={autoFocus}
          autoComplete="off"
          aria-label="Search"
        />

        {/* Keyboard hint (only when no value) */}
        {showShortcut && !hasValue && !isLoading && (
          <span className="fn-search-bar__hint">
            <kbd>{navigator.platform.includes('Mac') ? 'Cmd' : 'Ctrl'}</kbd>
            <span>+</span>
            <kbd>{shortcut}</kbd>
          </span>
        )}

        {/* Clear button (only when has value) */}
        {hasValue && !isLoading && (
          <button
            type="button"
            className="fn-search-bar__clear"
            onClick={handleClear}
            aria-label="Clear search"
          >
            <ClearIcon />
          </button>
        )}
      </div>
    </div>
  );
}

// Named export
export { SearchBar };
