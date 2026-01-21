import { ReactNode } from 'react';
import './KeyTakeaways.css';

export interface KeyTakeawaysProps {
  /** Title text */
  title?: string;
  /** Array of takeaway points or children */
  takeaways?: string[];
  /** Children content (alternative to takeaways prop) */
  children?: ReactNode;
  /** Compact variant */
  compact?: boolean;
  /** Additional class name */
  className?: string;
}

// Key icon
const KeyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v7" />
    <path d="M12 15v7" />
    <path d="M2 12h7" />
    <path d="M15 12h7" />
  </svg>
);

// Check icon for bullets
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/**
 * KeyTakeaways - MDX component for key points summary
 *
 * Styled box with bullet points summarizing main points.
 */
export default function KeyTakeaways({
  title = 'Key Takeaways',
  takeaways = [],
  children,
  compact = false,
  className = '',
}: KeyTakeawaysProps) {
  const classes = [
    'fn-key-takeaways',
    compact && 'fn-key-takeaways--compact',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div className="fn-key-takeaways__header">
        <span className="fn-key-takeaways__icon">
          <KeyIcon />
        </span>
        <h4 className="fn-key-takeaways__title">{title}</h4>
      </div>

      {takeaways.length > 0 ? (
        <ul className="fn-key-takeaways__list">
          {takeaways.map((item, index) => (
            <li key={index} className="fn-key-takeaways__item">
              <span className="fn-key-takeaways__bullet">
                <CheckIcon />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        children
      )}
    </div>
  );
}

// Named export
export { KeyTakeaways };
