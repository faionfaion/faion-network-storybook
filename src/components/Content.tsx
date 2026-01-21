import { ReactNode } from 'react';
import './Content.css';

interface ContentProps {
  children: ReactNode;
  maxWidth?: 'narrow' | 'medium' | 'wide';
  className?: string;
}

interface ContentHeadingProps {
  level: 1 | 2 | 3 | 4;
  children: ReactNode;
  className?: string;
}

interface ContentTextProps {
  children: ReactNode;
  size?: 'small' | 'base' | 'large';
  className?: string;
}

interface ContentBlockquoteProps {
  children: ReactNode;
  className?: string;
}

interface ContentListProps {
  items: ReactNode[];
  ordered?: boolean;
  className?: string;
}

interface ContentLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

interface ContentDividerProps {
  className?: string;
}

interface ContentLabelProps {
  children: ReactNode;
  className?: string;
}

/**
 * Content Container - "The Book Column"
 * Responsive: 320px - 1440px
 * Limits text width for optimal readability (60-75 characters per line)
 */
export function Content({ children, maxWidth = 'medium', className = '' }: ContentProps) {
  return (
    <div className={`fn-content fn-content--${maxWidth} ${className}`}>
      {children}
    </div>
  );
}

/**
 * Content Heading - Serif typography for authority
 * Responsive font sizes: Mobile (320px) → Tablet (768px) → Desktop (1440px)
 */
export function ContentHeading({ level, children, className = '' }: ContentHeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={`fn-heading fn-heading--${level} ${className}`}>
      {children}
    </Tag>
  );
}

/**
 * Content Text - Sans-serif for readability
 * Responsive: adjusts on mobile
 */
export function ContentText({ children, size = 'base', className = '' }: ContentTextProps) {
  return (
    <p className={`fn-text fn-text--${size} ${className}`}>
      {children}
    </p>
  );
}

/**
 * Content Blockquote - Serif italic with burgundy border
 * Responsive: smaller on mobile
 */
export function ContentBlockquote({ children, className = '' }: ContentBlockquoteProps) {
  return (
    <blockquote className={`fn-blockquote ${className}`}>
      <p className="fn-blockquote__text">
        {children}
      </p>
    </blockquote>
  );
}

/**
 * Content List - Burgundy bullets/numbers
 */
export function ContentList({ items, ordered = false, className = '' }: ContentListProps) {
  const Tag = ordered ? 'ol' : 'ul';

  return (
    <Tag className={`fn-list ${ordered ? 'fn-list--ordered' : ''} ${className}`}>
      {items.map((item, idx) => (
        <li key={idx} className="fn-list__item">
          {item}
        </li>
      ))}
    </Tag>
  );
}

/**
 * Content Link - Burgundy underlined
 */
export function ContentLink({ href, children, className = '' }: ContentLinkProps) {
  return (
    <a href={href} className={`fn-link ${className}`}>
      {children}
    </a>
  );
}

/**
 * Content Divider - Chapter break
 */
export function ContentDivider({ className = '' }: ContentDividerProps) {
  return <hr className={`fn-divider ${className}`} />;
}

/**
 * Content Label - Uppercase category/section label
 */
export function ContentLabel({ children, className = '' }: ContentLabelProps) {
  return (
    <span className={`fn-label ${className}`}>
      {children}
    </span>
  );
}

export default Content;
