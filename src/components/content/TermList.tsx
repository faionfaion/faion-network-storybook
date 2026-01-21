import './TermList.css';

export interface Term {
  /** Unique identifier */
  id: string;
  /** Term name */
  term: string;
  /** Short definition */
  definition: string;
  /** Full description (optional) */
  description?: string;
  /** Category or tag */
  category?: string;
  /** Link to full article */
  href?: string;
  /** Related terms */
  relatedTerms?: string[];
}

export interface TermListProps {
  /** List of terms */
  terms: Term[];
  /** List variant */
  variant?: 'default' | 'compact' | 'detailed' | 'cards';
  /** Group by first letter */
  groupByLetter?: boolean;
  /** Show category badges */
  showCategory?: boolean;
  /** Expandable definitions */
  expandable?: boolean;
  /** Search highlight query */
  highlightQuery?: string;
  /** Click handler for terms */
  onTermClick?: (term: Term) => void;
  /** Additional class name */
  className?: string;
}

// Icons
const ChevronDownIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const LinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

// Highlight text matching query
const highlightText = (text: string, query?: string): React.ReactNode => {
  if (!query || query.trim() === '') return text;

  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const parts = text.split(regex);

  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="fn-term-list__highlight">{part}</mark>
    ) : (
      part
    )
  );
};

// Group terms by first letter
const groupTerms = (terms: Term[]): Map<string, Term[]> => {
  const groups = new Map<string, Term[]>();

  terms.forEach((term) => {
    const letter = term.term[0].toUpperCase();
    if (!groups.has(letter)) {
      groups.set(letter, []);
    }
    groups.get(letter)!.push(term);
  });

  // Sort groups alphabetically
  const sortedGroups = new Map(
    [...groups.entries()].sort((a, b) => a[0].localeCompare(b[0]))
  );

  return sortedGroups;
};

/**
 * TermList - Displays a list of glossary terms with definitions
 *
 * Used in the Terminology Dictionary to display terms grouped by letter.
 */
export default function TermList({
  terms,
  variant = 'default',
  groupByLetter = false,
  showCategory = true,
  expandable = false,
  highlightQuery,
  onTermClick,
  className = '',
}: TermListProps) {
  const classes = [
    'fn-term-list',
    `fn-term-list--${variant}`,
    className,
  ].filter(Boolean).join(' ');

  const handleTermClick = (term: Term) => {
    if (onTermClick) {
      onTermClick(term);
    } else if (term.href) {
      window.location.href = term.href;
    }
  };

  const renderTerm = (term: Term) => {
    const TermWrapper = onTermClick || term.href ? 'button' : 'div';

    return (
      <TermWrapper
        key={term.id}
        className={`fn-term-list__item ${expandable ? 'fn-term-list__item--expandable' : ''}`}
        onClick={onTermClick || term.href ? () => handleTermClick(term) : undefined}
        type={TermWrapper === 'button' ? 'button' : undefined}
      >
        <div className="fn-term-list__header">
          <h3 className="fn-term-list__term">
            {highlightText(term.term, highlightQuery)}
          </h3>
          {showCategory && term.category && (
            <span className="fn-term-list__category">{term.category}</span>
          )}
          {(onTermClick || term.href) && (
            <span className="fn-term-list__arrow">
              <ArrowRightIcon />
            </span>
          )}
          {expandable && (
            <span className="fn-term-list__expand">
              <ChevronDownIcon />
            </span>
          )}
        </div>
        <p className="fn-term-list__definition">
          {highlightText(term.definition, highlightQuery)}
        </p>
        {variant === 'detailed' && term.description && (
          <p className="fn-term-list__description">{term.description}</p>
        )}
        {variant === 'detailed' && term.relatedTerms && term.relatedTerms.length > 0 && (
          <div className="fn-term-list__related">
            <span className="fn-term-list__related-label">
              <LinkIcon /> Related:
            </span>
            {term.relatedTerms.map((related, i) => (
              <span key={i} className="fn-term-list__related-term">{related}</span>
            ))}
          </div>
        )}
      </TermWrapper>
    );
  };

  // Grouped view
  if (groupByLetter) {
    const groups = groupTerms(terms);

    return (
      <div className={classes}>
        {[...groups.entries()].map(([letter, letterTerms]) => (
          <div key={letter} className="fn-term-list__group">
            <h2 className="fn-term-list__letter" id={`letter-${letter}`}>
              {letter}
            </h2>
            <div className="fn-term-list__items">
              {letterTerms.map(renderTerm)}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Flat view
  return (
    <div className={classes}>
      <div className="fn-term-list__items">
        {terms.map(renderTerm)}
      </div>
    </div>
  );
}

// Named export
export { TermList };
