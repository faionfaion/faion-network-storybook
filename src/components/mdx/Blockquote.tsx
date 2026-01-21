import { ReactNode } from 'react';
import './Blockquote.css';

export interface BlockquoteProps {
  /** Quote content */
  children: ReactNode;
  /** Quote author name */
  author?: string;
  /** Source of the quote (book, article, etc.) */
  source?: string;
  /** Additional class name */
  className?: string;
}

// Quote icon
const QuoteIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.667 16h-4v-2.667a4 4 0 014-4h.666v-2.666h-.666a6.667 6.667 0 00-6.667 6.666v8a2.667 2.667 0 002.667 2.667h4a2.667 2.667 0 002.666-2.667v-2.666a2.667 2.667 0 00-2.666-2.667zM25.333 16h-4v-2.667a4 4 0 014-4H26v-2.666h-.667a6.667 6.667 0 00-6.666 6.666v8a2.667 2.667 0 002.666 2.667h4a2.667 2.667 0 002.667-2.667v-2.666a2.667 2.667 0 00-2.667-2.667z" fill="currentColor"/>
  </svg>
);

/**
 * Blockquote - Styled quote block for MDX
 *
 * Displays a prominent quote with optional attribution.
 * Supports author name and source reference.
 */
export default function Blockquote({
  children,
  author,
  source,
  className = '',
}: BlockquoteProps) {
  const classes = ['fn-blockquote', className].filter(Boolean).join(' ');

  return (
    <blockquote className={classes}>
      <span className="fn-blockquote__icon" aria-hidden="true">
        <QuoteIcon />
      </span>
      <div className="fn-blockquote__content">{children}</div>
      {(author || source) && (
        <footer className="fn-blockquote__footer">
          {author && <cite className="fn-blockquote__author">{author}</cite>}
          {author && source && <span className="fn-blockquote__separator">,</span>}
          {source && <span className="fn-blockquote__source">{source}</span>}
        </footer>
      )}
    </blockquote>
  );
}

// Named export
export { Blockquote };
