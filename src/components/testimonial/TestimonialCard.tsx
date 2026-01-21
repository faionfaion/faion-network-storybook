import { ReactNode } from 'react';
import './TestimonialCard.css';

export interface TestimonialCardProps {
  /** Quote text */
  quote: string;
  /** Person's name */
  name: string;
  /** Role or title */
  role?: string;
  /** Company name */
  company?: string;
  /** Avatar image URL */
  avatar?: string;
  /** Avatar initials (fallback) */
  initials?: string;
  /** Star rating (1-5) */
  rating?: number;
  /** Show verified badge */
  verified?: boolean;
  /** Custom badge */
  badge?: ReactNode;
  /** Card variant */
  variant?: 'default' | 'featured' | 'compact';
  /** Click handler */
  onClick?: () => void;
}

// Star icon
const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    className={`fn-testimonial__star ${filled ? 'fn-testimonial__star--filled' : ''}`}
    viewBox="0 0 24 24"
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth="2"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

// Verified badge icon
const VerifiedIcon = () => (
  <svg
    className="fn-testimonial__verified-icon"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path
      d="M9 12l2 2 4-4"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Quote icon
const QuoteIcon = () => (
  <svg
    className="fn-testimonial__quote-icon"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

/**
 * TestimonialCard - Customer testimonial display
 *
 * Shows customer quotes with avatar, attribution, and optional rating.
 * Follows the "Digital Journal" theme.
 */
export default function TestimonialCard({
  quote,
  name,
  role,
  company,
  avatar,
  initials,
  rating,
  verified = false,
  badge,
  variant = 'default',
  onClick,
}: TestimonialCardProps) {
  const renderStars = () => {
    if (!rating) return null;
    return (
      <div className="fn-testimonial__rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <StarIcon key={star} filled={star <= rating} />
        ))}
      </div>
    );
  };

  return (
    <div
      className={`fn-testimonial fn-testimonial--${variant}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {/* Quote Icon */}
      <QuoteIcon />

      {/* Rating */}
      {renderStars()}

      {/* Quote */}
      <blockquote className="fn-testimonial__quote">{quote}</blockquote>

      {/* Attribution */}
      <div className="fn-testimonial__attribution">
        <div className="fn-testimonial__avatar">
          {avatar ? (
            <img src={avatar} alt={name} />
          ) : (
            <span>{initials || name.charAt(0)}</span>
          )}
        </div>
        <div className="fn-testimonial__info">
          <div className="fn-testimonial__name-row">
            <span className="fn-testimonial__name">{name}</span>
            {verified && (
              <span className="fn-testimonial__verified" title="Verified customer">
                <VerifiedIcon />
              </span>
            )}
          </div>
          {(role || company) && (
            <span className="fn-testimonial__role">
              {role}
              {role && company && ' at '}
              {company}
            </span>
          )}
        </div>
        {badge && <div className="fn-testimonial__badge">{badge}</div>}
      </div>
    </div>
  );
}

// Named export
export { TestimonialCard };
