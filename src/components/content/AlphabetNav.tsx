import './AlphabetNav.css';

export interface AlphabetNavProps {
  /** Currently selected letter */
  activeLetter?: string;
  /** Callback when letter is selected */
  onLetterClick: (letter: string) => void;
  /** Letters that have content (others will be disabled) */
  availableLetters?: string[];
  /** Show "All" option */
  showAll?: boolean;
  /** "All" label text */
  allLabel?: string;
  /** Variant */
  variant?: 'default' | 'compact' | 'sticky';
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  /** Disabled state */
  disabled?: boolean;
  /** Additional class name */
  className?: string;
}

// Default alphabet
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

/**
 * AlphabetNav - A-Z navigation for glossary and alphabetical content
 *
 * Used in the Terminology Dictionary for quick letter navigation.
 */
export default function AlphabetNav({
  activeLetter,
  onLetterClick,
  availableLetters,
  showAll = true,
  allLabel = 'All',
  variant = 'default',
  size = 'md',
  disabled = false,
  className = '',
}: AlphabetNavProps) {
  const availableSet = availableLetters
    ? new Set(availableLetters.map((l) => l.toUpperCase()))
    : null;

  const handleClick = (letter: string | null) => {
    if (!disabled) {
      onLetterClick(letter || '');
    }
  };

  const isLetterAvailable = (letter: string) => {
    if (!availableSet) return true;
    return availableSet.has(letter);
  };

  const classes = [
    'fn-alphabet-nav',
    `fn-alphabet-nav--${variant}`,
    `fn-alphabet-nav--${size}`,
    disabled && 'fn-alphabet-nav--disabled',
    className,
  ].filter(Boolean).join(' ');

  return (
    <nav className={classes} aria-label="Alphabetical navigation">
      {/* All button */}
      {showAll && (
        <button
          type="button"
          className={`fn-alphabet-nav__button fn-alphabet-nav__button--all ${
            !activeLetter ? 'fn-alphabet-nav__button--active' : ''
          }`}
          onClick={() => handleClick(null)}
          disabled={disabled}
          aria-label="Show all"
          aria-pressed={!activeLetter}
        >
          {allLabel}
        </button>
      )}

      {/* Letter buttons */}
      <div className="fn-alphabet-nav__letters">
        {ALPHABET.map((letter) => {
          const isAvailable = isLetterAvailable(letter);
          const isActive = activeLetter?.toUpperCase() === letter;

          return (
            <button
              key={letter}
              type="button"
              className={`fn-alphabet-nav__button ${
                isActive ? 'fn-alphabet-nav__button--active' : ''
              } ${!isAvailable ? 'fn-alphabet-nav__button--disabled' : ''}`}
              onClick={() => isAvailable && handleClick(letter)}
              disabled={disabled || !isAvailable}
              aria-label={`Show items starting with ${letter}`}
              aria-pressed={isActive}
            >
              {letter}
            </button>
          );
        })}
      </div>

      {/* Numbers/symbols button (optional) */}
      <button
        type="button"
        className={`fn-alphabet-nav__button fn-alphabet-nav__button--other ${
          activeLetter === '#' ? 'fn-alphabet-nav__button--active' : ''
        }`}
        onClick={() => handleClick('#')}
        disabled={disabled}
        aria-label="Show items starting with numbers or symbols"
        aria-pressed={activeLetter === '#'}
      >
        #
      </button>
    </nav>
  );
}

// Named export
export { AlphabetNav };
