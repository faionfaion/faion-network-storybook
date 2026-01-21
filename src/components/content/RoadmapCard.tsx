import { ReactNode } from 'react';
import './RoadmapCard.css';

export type RoadmapCardState = 'pending' | 'active' | 'completed' | 'locked';
export type RoadmapCardVariant = 'default' | 'compact';

export interface RoadmapCardProps {
  /** Step number */
  step: number;
  /** Step title */
  title: string;
  /** Step description */
  description?: string;
  /** Step state */
  state?: RoadmapCardState;
  /** Card variant */
  variant?: RoadmapCardVariant;
  /** Meta content (badges, read time, etc.) */
  meta?: ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Link URL */
  href?: string;
  /** Additional class name */
  className?: string;
}

// Check icon for completed
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// Arrow icon
const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

// Lock icon
const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

/**
 * RoadmapCard - Card for roadmap steps
 *
 * Displays step number, title, description, and progress state.
 */
export default function RoadmapCard({
  step,
  title,
  description,
  state = 'pending',
  variant = 'default',
  meta,
  onClick,
  href,
  className = '',
}: RoadmapCardProps) {
  const isClickable = state !== 'locked' && (!!onClick || !!href);

  const classes = [
    'fn-roadmap-card',
    `fn-roadmap-card--${state}`,
    variant !== 'default' && `fn-roadmap-card--${variant}`,
    className,
  ].filter(Boolean).join(' ');

  const handleClick = (e: React.MouseEvent) => {
    if (state === 'locked') {
      e.preventDefault();
      return;
    }
    onClick?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (state === 'locked') return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.();
    }
  };

  const content = (
    <>
      <div className="fn-roadmap-card__step">
        {state === 'completed' ? <CheckIcon /> : step}
      </div>

      <div className="fn-roadmap-card__content">
        <h3 className="fn-roadmap-card__title">{title}</h3>
        {description && (
          <p className="fn-roadmap-card__description">{description}</p>
        )}
        {meta && (
          <div className="fn-roadmap-card__meta">{meta}</div>
        )}
      </div>

      <div className="fn-roadmap-card__indicator">
        {state === 'completed' && <CheckIcon />}
        {state === 'active' && <ArrowIcon />}
        {state === 'locked' && <LockIcon />}
        {state === 'pending' && <ArrowIcon />}
      </div>
    </>
  );

  if (href && state !== 'locked') {
    return (
      <a
        href={href}
        className={classes}
        onClick={handleClick}
      >
        {content}
      </a>
    );
  }

  return (
    <article
      className={classes}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={isClickable ? 'link' : undefined}
      tabIndex={isClickable ? 0 : undefined}
    >
      {content}
    </article>
  );
}

// Named export
export { RoadmapCard };
