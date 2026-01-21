import { useState, useRef, useEffect } from 'react';
import './LanguageSelector.css';

export type LanguageCode = 'uk' | 'en' | 'pt' | 'es' | 'fr' | 'de' | 'hi' | 'pl';

export interface Language {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
}

export interface LanguageSelectorProps {
  /** Currently selected language code */
  value: LanguageCode;
  /** Callback when language changes */
  onChange: (code: LanguageCode) => void;
  /** Available languages (defaults to all 8) */
  languages?: Language[];
  /** Selector variant */
  variant?: 'default' | 'compact' | 'minimal';
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Show native language name */
  showNativeName?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Additional class name */
  className?: string;
}

// Default supported languages (8 as per constitution)
export const DEFAULT_LANGUAGES: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'uk', name: 'Ukrainian', nativeName: 'Українська', flag: '🇺🇦' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇧🇷' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski', flag: '🇵🇱' },
];

// Icons
const ChevronDownIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/**
 * LanguageSelector - Dropdown for selecting UI language
 *
 * Supports 8 languages as defined in the constitution.
 */
export default function LanguageSelector({
  value,
  onChange,
  languages = DEFAULT_LANGUAGES,
  variant = 'default',
  size = 'md',
  showNativeName = true,
  disabled = false,
  className = '',
}: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedLanguage = languages.find(lang => lang.code === value) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (code: LanguageCode) => {
    onChange(code);
    setIsOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent, code?: LanguageCode) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (code) {
        handleSelect(code);
      } else {
        handleToggle();
      }
    }
  };

  const classes = [
    'fn-language-selector',
    `fn-language-selector--${variant}`,
    `fn-language-selector--${size}`,
    isOpen && 'fn-language-selector--open',
    disabled && 'fn-language-selector--disabled',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div
      ref={containerRef}
      className={classes}
    >
      <button
        type="button"
        className="fn-language-selector__trigger"
        onClick={handleToggle}
        onKeyDown={(e) => handleKeyDown(e)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={`Select language. Current: ${selectedLanguage.name}`}
        disabled={disabled}
      >
        {variant === 'minimal' ? (
          <>
            <span className="fn-language-selector__icon">
              <GlobeIcon />
            </span>
            <span className="fn-language-selector__code">{selectedLanguage.code.toUpperCase()}</span>
          </>
        ) : (
          <>
            <span className="fn-language-selector__flag">{selectedLanguage.flag}</span>
            <span className="fn-language-selector__text">
              {showNativeName ? selectedLanguage.nativeName : selectedLanguage.name}
            </span>
            <span className="fn-language-selector__chevron">
              <ChevronDownIcon />
            </span>
          </>
        )}
      </button>

      {isOpen && (
        <div className="fn-language-selector__dropdown" role="listbox">
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              className={`fn-language-selector__option ${lang.code === value ? 'fn-language-selector__option--selected' : ''}`}
              onClick={() => handleSelect(lang.code)}
              onKeyDown={(e) => handleKeyDown(e, lang.code)}
              role="option"
              aria-selected={lang.code === value}
            >
              <span className="fn-language-selector__option-flag">{lang.flag}</span>
              <span className="fn-language-selector__option-text">
                <span className="fn-language-selector__option-name">
                  {showNativeName ? lang.nativeName : lang.name}
                </span>
                {showNativeName && (
                  <span className="fn-language-selector__option-english">{lang.name}</span>
                )}
              </span>
              {lang.code === value && (
                <span className="fn-language-selector__option-check">
                  <CheckIcon />
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// Named export
export { LanguageSelector };
