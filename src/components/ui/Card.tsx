import { ReactNode, forwardRef, HTMLAttributes } from 'react';
import './Card.css';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  topBar?: boolean;
  padding?: 'none' | 'compact' | 'default' | 'spacious';
  hoverable?: boolean;
  variant?: 'default' | 'outlined' | 'elevated';
}

export const Card = forwardRef<HTMLDivElement, CardProps>(({
  children,
  className = '',
  topBar = false,
  padding = 'default',
  hoverable = false,
  variant = 'default',
  ...props
}, ref) => {
  const paddingClass = padding !== 'default' ? `fn-card--padding-${padding}` : '';
  const topBarClass = topBar ? 'fn-card--with-topbar' : '';
  const hoverableClass = hoverable ? 'fn-card--hoverable' : '';
  const variantClass = variant !== 'default' ? `fn-card--${variant}` : '';

  return (
    <div
      ref={ref}
      className={`fn-card ${paddingClass} ${topBarClass} ${hoverableClass} ${variantClass} ${className}`.trim()}
      {...props}
    >
      {topBar && <div className="fn-card__topbar" />}
      {children}
    </div>
  );
});

Card.displayName = 'Card';

// Sub-components
export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(({
  children,
  className = '',
  ...props
}, ref) => (
  <div ref={ref} className={`fn-card__header ${className}`.trim()} {...props}>
    {children}
  </div>
));

CardHeader.displayName = 'CardHeader';

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(({
  children,
  className = '',
  as: Tag = 'h3',
  ...props
}, ref) => (
  <Tag ref={ref} className={`fn-card__title ${className}`.trim()} {...props}>
    {children}
  </Tag>
));

CardTitle.displayName = 'CardTitle';

export interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(({
  children,
  className = '',
  ...props
}, ref) => (
  <p ref={ref} className={`fn-card__description ${className}`.trim()} {...props}>
    {children}
  </p>
));

CardDescription.displayName = 'CardDescription';

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(({
  children,
  className = '',
  ...props
}, ref) => (
  <div ref={ref} className={`fn-card__content ${className}`.trim()} {...props}>
    {children}
  </div>
));

CardContent.displayName = 'CardContent';

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(({
  children,
  className = '',
  ...props
}, ref) => (
  <div ref={ref} className={`fn-card__footer ${className}`.trim()} {...props}>
    {children}
  </div>
));

CardFooter.displayName = 'CardFooter';
