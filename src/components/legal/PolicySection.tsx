import { useState, ReactNode } from 'react';
import './PolicySection.css';

export interface PolicySectionProps {
  /** Section title */
  title: string;
  /** Section anchor ID */
  id: string;
  /** Section content */
  children: ReactNode;
  /** Whether section is expanded by default */
  defaultExpanded?: boolean;
  /** Additional class name */
  className?: string;
}

/**
 * PolicySection - Expandable section for legal policy pages
 *
 * Used in Privacy Policy and Terms of Service pages for collapsible content sections.
 */
export default function PolicySection({
  title,
  id,
  children,
  defaultExpanded = true,
  className = '',
}: PolicySectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const classes = [
    'fn-policy-section',
    isExpanded ? 'fn-policy-section--expanded' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <section className={classes} id={id}>
      <button
        type="button"
        className="fn-policy-section__header"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        aria-controls={`${id}-content`}
      >
        <h2 className="fn-policy-section__title">{title}</h2>
        <span className="fn-policy-section__icon">
          <ChevronIcon />
        </span>
      </button>
      <div
        id={`${id}-content`}
        className="fn-policy-section__content"
        hidden={!isExpanded}
      >
        <div className="fn-policy-section__body">
          {children}
        </div>
      </div>
    </section>
  );
}

function ChevronIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

// Named export
export { PolicySection };
