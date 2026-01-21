import './RelatedMethodologies.css';

export interface Methodology {
  /** Methodology ID (e.g., M-DEV-001) */
  id: string;
  /** Methodology title */
  title: string;
  /** Category/skill name */
  category: string;
  /** Link to methodology page */
  href?: string;
}

export interface RelatedMethodologiesProps {
  /** List of related methodologies */
  methodologies: Methodology[];
  /** Section title */
  title?: string;
  /** Additional class name */
  className?: string;
}

// Arrow icon
const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.333 8h9.334M9 4.667L12.667 8 9 11.333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/**
 * RelatedMethodologies - Related content links for MDX
 *
 * Displays a list of related methodologies with category badges.
 * Useful for cross-linking content and improving navigation.
 */
export default function RelatedMethodologies({
  methodologies,
  title = 'Related Methodologies',
  className = '',
}: RelatedMethodologiesProps) {
  const classes = ['fn-related-methodologies', className].filter(Boolean).join(' ');

  if (methodologies.length === 0) {
    return null;
  }

  return (
    <div className={classes}>
      <h3 className="fn-related-methodologies__title">{title}</h3>
      <ul className="fn-related-methodologies__list">
        {methodologies.map((methodology) => {
          const Component = methodology.href ? 'a' : 'div';
          return (
            <li key={methodology.id} className="fn-related-methodologies__item">
              <Component
                className="fn-related-methodologies__link"
                {...(methodology.href ? { href: methodology.href } : {})}
              >
                <div className="fn-related-methodologies__info">
                  <span className="fn-related-methodologies__category">
                    {methodology.category}
                  </span>
                  <span className="fn-related-methodologies__name">
                    {methodology.title}
                  </span>
                </div>
                {methodology.href && (
                  <span className="fn-related-methodologies__arrow">
                    <ArrowIcon />
                  </span>
                )}
              </Component>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// Named export
export { RelatedMethodologies };
