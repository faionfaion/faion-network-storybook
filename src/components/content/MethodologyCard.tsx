import { ReactNode } from 'react';
import { LockedBadge } from '../paywall';
import './MethodologyCard.css';

export type MethodologyDifficulty = 'beginner' | 'intermediate' | 'advanced';
export type MethodologyCardVariant = 'default' | 'compact' | 'featured';

export interface MethodologyCardProps {
  /** Methodology ID (e.g., M-DEV-001) */
  id: string;
  /** Methodology title */
  title: string;
  /** Description */
  description?: string;
  /** Associated skill name */
  skill?: string;
  /** Difficulty level */
  difficulty?: MethodologyDifficulty;
  /** Whether methodology is premium */
  isPremium?: boolean;
  /** Premium tier required */
  premiumTier?: 'plus' | 'pro' | 'team' | 'ultimate';
  /** Card variant */
  variant?: MethodologyCardVariant;
  /** Click handler */
  onClick?: () => void;
  /** Methodology URL for link */
  href?: string;
  /** Additional class name */
  className?: string;
  /** Custom skill icon */
  skillIcon?: ReactNode;
}

// Difficulty labels
const DIFFICULTY_LABELS: Record<MethodologyDifficulty, string> = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
};

// Default skill icon
const SkillIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

/**
 * MethodologyCard - Card component for methodology previews
 *
 * Displays methodology ID, title, description, skill, and difficulty.
 */
export default function MethodologyCard({
  id,
  title,
  description,
  skill,
  difficulty,
  isPremium = false,
  premiumTier = 'plus',
  variant = 'default',
  onClick,
  href,
  className = '',
  skillIcon,
}: MethodologyCardProps) {
  const classes = [
    'fn-methodology-card',
    `fn-methodology-card--${variant}`,
    isPremium && 'fn-methodology-card--locked',
    className,
  ].filter(Boolean).join(' ');

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      window.location.href = href;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <article
      className={classes}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="link"
      tabIndex={0}
    >
      {/* Header */}
      <div className="fn-methodology-card__header">
        <span className="fn-methodology-card__id">{id}</span>
        <div className="fn-methodology-card__badges">
          {isPremium && (
            <LockedBadge tier={premiumTier} size="small" />
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="fn-methodology-card__title">{title}</h3>

      {/* Description */}
      {description && (
        <p className="fn-methodology-card__description">{description}</p>
      )}

      {/* Footer */}
      <div className="fn-methodology-card__footer">
        {skill && (
          <span className="fn-methodology-card__skill">
            <span className="fn-methodology-card__skill-icon">
              {skillIcon || <SkillIcon />}
            </span>
            {skill}
          </span>
        )}

        {difficulty && (
          <span className={`fn-methodology-card__difficulty fn-methodology-card__difficulty--${difficulty}`}>
            {DIFFICULTY_LABELS[difficulty]}
          </span>
        )}
      </div>
    </article>
  );
}

// Named export
export { MethodologyCard };
