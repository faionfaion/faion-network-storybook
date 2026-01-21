import { useState, useRef, useEffect, ReactNode } from 'react';
import './Term.css';

export interface TermProps {
  /** Term being defined */
  term: string;
  /** Definition of the term */
  definition: string;
  /** Optional link to full glossary entry */
  href?: string;
  /** Term text to display (defaults to term) */
  children: ReactNode;
}

/**
 * Term - Inline term with tooltip for MDX
 *
 * Displays a term with a definition tooltip on hover/focus.
 * Useful for technical terms, acronyms, and jargon.
 */
export default function Term({
  term,
  definition,
  href,
  children,
}: TermProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState<'top' | 'bottom'>('top');
  const termRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible && termRef.current && tooltipRef.current) {
      const termRect = termRef.current.getBoundingClientRect();
      const tooltipHeight = tooltipRef.current.offsetHeight;
      const spaceAbove = termRect.top;

      // If not enough space above, show below
      if (spaceAbove < tooltipHeight + 16) {
        setPosition('bottom');
      } else {
        setPosition('top');
      }
    }
  }, [isVisible]);

  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);
  const handleFocus = () => setIsVisible(true);
  const handleBlur = () => setIsVisible(false);

  const content = (
    <>
      <span className="fn-term__text">{children}</span>
      <span
        ref={tooltipRef}
        className={`fn-term__tooltip fn-term__tooltip--${position} ${isVisible ? 'fn-term__tooltip--visible' : ''}`}
        role="tooltip"
        aria-hidden={!isVisible}
      >
        <span className="fn-term__tooltip-term">{term}</span>
        <span className="fn-term__tooltip-definition">{definition}</span>
        {href && (
          <span className="fn-term__tooltip-link">View in glossary</span>
        )}
      </span>
    </>
  );

  const commonProps = {
    ref: termRef,
    className: 'fn-term',
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onFocus: handleFocus,
    onBlur: handleBlur,
    tabIndex: 0,
    'aria-describedby': isVisible ? `term-${term}` : undefined,
  };

  if (href) {
    return (
      <a {...commonProps} href={href}>
        {content}
      </a>
    );
  }

  return <span {...commonProps}>{content}</span>;
}

// Named export
export { Term };
