import './StarRating.css';

export interface StarRatingProps {
  /** Rating value (0-5) */
  rating: number;
  /** Maximum stars */
  maxStars?: number;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Show half stars */
  halfStars?: boolean;
  /** Show numeric value */
  showValue?: boolean;
  /** Custom aria label */
  ariaLabel?: string;
}

// Star icons
const FullStar = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const EmptyStar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const HalfStar = () => (
  <svg viewBox="0 0 24 24">
    <defs>
      <linearGradient id="halfGrad">
        <stop offset="50%" stopColor="currentColor" />
        <stop offset="50%" stopColor="transparent" />
      </linearGradient>
    </defs>
    <polygon
      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      fill="url(#halfGrad)"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

/**
 * StarRating - Rating display component
 *
 * Shows 1-5 stars with optional half-star support.
 * Follows the "Digital Journal" theme.
 */
export default function StarRating({
  rating,
  maxStars = 5,
  size = 'md',
  halfStars = true,
  showValue = false,
  ariaLabel,
}: StarRatingProps) {
  const clampedRating = Math.min(Math.max(0, rating), maxStars);

  const renderStar = (index: number) => {
    const starIndex = index + 1;
    const diff = clampedRating - index;

    if (diff >= 1) {
      return <FullStar />;
    } else if (halfStars && diff >= 0.5) {
      return <HalfStar />;
    } else {
      return <EmptyStar />;
    }
  };

  const label = ariaLabel || `Rating: ${clampedRating} out of ${maxStars} stars`;

  return (
    <div
      className={`fn-star-rating fn-star-rating--${size}`}
      role="img"
      aria-label={label}
    >
      <div className="fn-star-rating__stars">
        {Array.from({ length: maxStars }).map((_, index) => (
          <span key={index} className="fn-star-rating__star">
            {renderStar(index)}
          </span>
        ))}
      </div>
      {showValue && (
        <span className="fn-star-rating__value">{clampedRating.toFixed(1)}</span>
      )}
    </div>
  );
}

// Named export
export { StarRating };
