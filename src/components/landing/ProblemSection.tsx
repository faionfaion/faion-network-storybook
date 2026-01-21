import { ReactNode } from 'react';
import './ProblemSection.css';

export interface PainPoint {
  icon?: ReactNode;
  title: string;
  description: string;
}

export interface ProblemStat {
  value: string;
  label: string;
}

export interface ProblemSectionProps {
  /** Section eyebrow text */
  eyebrow?: string;
  /** Section headline */
  headline: string;
  /** Optional subheadline */
  subheadline?: string;
  /** Pain points to display */
  painPoints: PainPoint[];
  /** Statistics */
  stats?: ProblemStat[];
  /** Background variant */
  variant?: 'default' | 'cream';
}

// Default icons
const AlertIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const FrownIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
    <line x1="9" y1="9" x2="9.01" y2="9" />
    <line x1="15" y1="9" x2="15.01" y2="9" />
  </svg>
);

const defaultIcons = [<AlertIcon />, <ClockIcon />, <FrownIcon />];

/**
 * ProblemSection - Landing page section articulating the problem
 *
 * Empathetic messaging with pain points and supporting statistics.
 */
export default function ProblemSection({
  eyebrow,
  headline,
  subheadline,
  painPoints,
  stats,
  variant = 'default',
}: ProblemSectionProps) {
  return (
    <section className={`fn-problem fn-problem--${variant}`}>
      <div className="fn-problem__container">
        {/* Header */}
        <div className="fn-problem__header">
          {eyebrow && <span className="fn-problem__eyebrow">{eyebrow}</span>}
          <h2 className="fn-problem__headline">{headline}</h2>
          {subheadline && <p className="fn-problem__subheadline">{subheadline}</p>}
        </div>

        {/* Pain Points */}
        <div className="fn-problem__points">
          {painPoints.map((point, index) => (
            <div key={index} className="fn-problem__point">
              <div className="fn-problem__point-icon">
                {point.icon || defaultIcons[index % defaultIcons.length]}
              </div>
              <h3 className="fn-problem__point-title">{point.title}</h3>
              <p className="fn-problem__point-desc">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        {stats && stats.length > 0 && (
          <div className="fn-problem__stats">
            {stats.map((stat, index) => (
              <div key={index} className="fn-problem__stat">
                <span className="fn-problem__stat-value">{stat.value}</span>
                <span className="fn-problem__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// Named export
export { ProblemSection };
