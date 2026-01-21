import { ReactNode, forwardRef, HTMLAttributes } from 'react';
import './Typography.css';

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
}

// Display H1 - Hero Headlines (64px serif)
export const DisplayH1 = forwardRef<HTMLHeadingElement, TypographyProps>(({
  children,
  className = '',
  ...props
}, ref) => (
  <h1 ref={ref} className={`fn-display-h1 ${className}`.trim()} {...props}>
    {children}
  </h1>
));
DisplayH1.displayName = 'DisplayH1';

// Heading H2 - Section Headlines (40px serif)
export const HeadingH2 = forwardRef<HTMLHeadingElement, TypographyProps>(({
  children,
  className = '',
  ...props
}, ref) => (
  <h2 ref={ref} className={`fn-heading-h2 ${className}`.trim()} {...props}>
    {children}
  </h2>
));
HeadingH2.displayName = 'HeadingH2';

// Heading H3 - Subsection Headlines (24px serif)
export const HeadingH3 = forwardRef<HTMLHeadingElement, TypographyProps>(({
  children,
  className = '',
  ...props
}, ref) => (
  <h3 ref={ref} className={`fn-heading-h3 ${className}`.trim()} {...props}>
    {children}
  </h3>
));
HeadingH3.displayName = 'HeadingH3';

// Heading H4 - Card/Component Headlines (20px serif)
export const HeadingH4 = forwardRef<HTMLHeadingElement, TypographyProps>(({
  children,
  className = '',
  ...props
}, ref) => (
  <h4 ref={ref} className={`fn-heading-h4 ${className}`.trim()} {...props}>
    {children}
  </h4>
));
HeadingH4.displayName = 'HeadingH4';

// Body Text - Regular paragraphs (16px sans-serif)
export const BodyText = forwardRef<HTMLParagraphElement, TypographyProps>(({
  children,
  className = '',
  ...props
}, ref) => (
  <p ref={ref} className={`fn-body-text ${className}`.trim()} {...props}>
    {children}
  </p>
));
BodyText.displayName = 'BodyText';

// Body Large - Emphasized paragraphs (18px sans-serif)
export const BodyLarge = forwardRef<HTMLParagraphElement, TypographyProps>(({
  children,
  className = '',
  ...props
}, ref) => (
  <p ref={ref} className={`fn-body-large ${className}`.trim()} {...props}>
    {children}
  </p>
));
BodyLarge.displayName = 'BodyLarge';

// Body Small - Secondary text (14px sans-serif)
export const BodySmall = forwardRef<HTMLParagraphElement, TypographyProps>(({
  children,
  className = '',
  ...props
}, ref) => (
  <p ref={ref} className={`fn-body-small ${className}`.trim()} {...props}>
    {children}
  </p>
));
BodySmall.displayName = 'BodySmall';

// Label - Uppercase tracking (12px sans-serif)
export const Label = forwardRef<HTMLSpanElement, TypographyProps>(({
  children,
  className = '',
  ...props
}, ref) => (
  <span ref={ref} className={`fn-label ${className}`.trim()} {...props}>
    {children}
  </span>
));
Label.displayName = 'Label';

// Stat Number - Big metrics (56px serif)
export const StatNumber = forwardRef<HTMLSpanElement, TypographyProps>(({
  children,
  className = '',
  ...props
}, ref) => (
  <span ref={ref} className={`fn-stat-number ${className}`.trim()} {...props}>
    {children}
  </span>
));
StatNumber.displayName = 'StatNumber';

// Caption - Small descriptive text (12px sans-serif)
export const Caption = forwardRef<HTMLSpanElement, TypographyProps>(({
  children,
  className = '',
  ...props
}, ref) => (
  <span ref={ref} className={`fn-caption ${className}`.trim()} {...props}>
    {children}
  </span>
));
Caption.displayName = 'Caption';

// Quote - Blockquote styling (italic serif)
export const Quote = forwardRef<HTMLQuoteElement, TypographyProps>(({
  children,
  className = '',
  ...props
}, ref) => (
  <blockquote ref={ref} className={`fn-quote ${className}`.trim()} {...props}>
    {children}
  </blockquote>
));
Quote.displayName = 'Quote';

// Overline - Small uppercase label (11px sans-serif)
export const Overline = forwardRef<HTMLSpanElement, TypographyProps>(({
  children,
  className = '',
  ...props
}, ref) => (
  <span ref={ref} className={`fn-overline ${className}`.trim()} {...props}>
    {children}
  </span>
));
Overline.displayName = 'Overline';
