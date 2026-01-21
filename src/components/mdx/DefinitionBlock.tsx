import { ReactNode } from 'react';
import './DefinitionBlock.css';

export interface DefinitionBlockProps {
  /** The term being defined */
  term: string;
  /** Definition text or children */
  definition?: string;
  /** Children content (alternative to definition prop) */
  children?: ReactNode;
  /** Optional phonetic spelling */
  phonetic?: string;
  /** Optional category/tag */
  category?: string;
  /** Optional example usage */
  example?: string;
  /** Unique ID for anchor link */
  id?: string;
  /** Compact variant */
  compact?: boolean;
  /** Inline variant for glossary lists */
  inline?: boolean;
  /** Additional class name */
  className?: string;
}

// Link icon for anchor
const LinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

// Generate slug from term for ID
const generateSlug = (term: string): string => {
  return term
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

/**
 * DefinitionBlock - MDX component for term definitions
 *
 * Styled block with term and definition, linkable for glossary.
 */
export default function DefinitionBlock({
  term,
  definition,
  children,
  phonetic,
  category,
  example,
  id,
  compact = false,
  inline = false,
  className = '',
}: DefinitionBlockProps) {
  const anchorId = id || generateSlug(term);
  const definitionContent = definition || children;

  const classes = [
    'fn-definition-block',
    compact && 'fn-definition-block--compact',
    inline && 'fn-definition-block--inline',
    className,
  ].filter(Boolean).join(' ');

  // Inline variant (simple term: definition)
  if (inline) {
    return (
      <div className={classes} id={anchorId}>
        <div className="fn-definition-block__header">
          <dt className="fn-definition-block__term">{term}</dt>
        </div>
        <dd className="fn-definition-block__definition">
          {definitionContent}
        </dd>
      </div>
    );
  }

  return (
    <div className={classes}>
      <span id={anchorId} className="fn-definition-block__anchor" />

      <div className="fn-definition-block__header">
        <h4 className="fn-definition-block__term">{term}</h4>
        <a
          href={`#${anchorId}`}
          className="fn-definition-block__link"
          aria-label={`Link to ${term} definition`}
          title="Copy link to this definition"
        >
          <LinkIcon />
        </a>
      </div>

      {phonetic && (
        <p className="fn-definition-block__phonetic">{phonetic}</p>
      )}

      <p className="fn-definition-block__definition">
        {definitionContent}
      </p>

      {category && (
        <span className="fn-definition-block__category">{category}</span>
      )}

      {example && (
        <div className="fn-definition-block__example">
          <p className="fn-definition-block__example-label">Example</p>
          <p className="fn-definition-block__example-text">{example}</p>
        </div>
      )}
    </div>
  );
}

// Named export
export { DefinitionBlock };
