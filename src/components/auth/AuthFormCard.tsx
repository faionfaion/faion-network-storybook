import { ReactNode } from 'react';
import './AuthFormCard.css';

export interface AuthFormCardProps {
  /** Card title */
  title?: ReactNode;
  /** Subtitle or description */
  subtitle?: string;
  /** Logo element */
  logo?: ReactNode;
  /** Main content (form) */
  children: ReactNode;
  /** Footer content (alternate actions) */
  footer?: ReactNode;
  /** Max width variant */
  maxWidth?: 'sm' | 'md' | 'lg';
}

/**
 * AuthFormCard - Container for authentication forms
 *
 * Styled wrapper for login, signup, and password reset forms.
 * Follows the "Digital Journal" theme.
 */
export default function AuthFormCard({
  title,
  subtitle,
  logo,
  children,
  footer,
  maxWidth = 'sm',
}: AuthFormCardProps) {
  return (
    <div className={`fn-auth-card fn-auth-card--${maxWidth}`}>
      {/* Header */}
      {(logo || title || subtitle) && (
        <div className="fn-auth-card__header">
          {logo && <div className="fn-auth-card__logo">{logo}</div>}
          {title && <h1 className="fn-auth-card__title">{title}</h1>}
          {subtitle && <p className="fn-auth-card__subtitle">{subtitle}</p>}
        </div>
      )}

      {/* Content */}
      <div className="fn-auth-card__content">{children}</div>

      {/* Footer */}
      {footer && <div className="fn-auth-card__footer">{footer}</div>}
    </div>
  );
}

// Named export
export { AuthFormCard };
