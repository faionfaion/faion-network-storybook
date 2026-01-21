import { ReactNode } from 'react';
import './SolutionSection.css';

export interface SolutionBenefit {
  icon?: ReactNode;
  title: string;
  description: string;
}

export interface SolutionSectionProps {
  /** Section eyebrow text */
  eyebrow?: string;
  /** Section headline */
  headline: string;
  /** Optional subheadline */
  subheadline?: string;
  /** Benefits to display */
  benefits: SolutionBenefit[];
  /** Optional image or visual element */
  visual?: ReactNode;
  /** Visual position */
  visualPosition?: 'left' | 'right';
  /** Background variant */
  variant?: 'default' | 'cream';
}

// Default icons
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ZapIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const LayersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const RocketIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

const defaultIcons = [<CheckIcon />, <ZapIcon />, <LayersIcon />, <RocketIcon />];

/**
 * SolutionSection - Landing page section presenting the solution
 *
 * Shows how the product addresses the problems with clear benefits.
 */
export default function SolutionSection({
  eyebrow,
  headline,
  subheadline,
  benefits,
  visual,
  visualPosition = 'right',
  variant = 'cream',
}: SolutionSectionProps) {
  return (
    <section className={`fn-solution fn-solution--${variant}`}>
      <div className="fn-solution__container">
        {/* Header */}
        <div className="fn-solution__header">
          {eyebrow && <span className="fn-solution__eyebrow">{eyebrow}</span>}
          <h2 className="fn-solution__headline">{headline}</h2>
          {subheadline && <p className="fn-solution__subheadline">{subheadline}</p>}
        </div>

        {/* Content */}
        <div className={`fn-solution__content fn-solution__content--visual-${visualPosition}`}>
          {/* Benefits */}
          <div className="fn-solution__benefits">
            {benefits.map((benefit, index) => (
              <div key={index} className="fn-solution__benefit">
                <div className="fn-solution__benefit-icon">
                  {benefit.icon || defaultIcons[index % defaultIcons.length]}
                </div>
                <div className="fn-solution__benefit-content">
                  <h3 className="fn-solution__benefit-title">{benefit.title}</h3>
                  <p className="fn-solution__benefit-desc">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Visual */}
          {visual && (
            <div className="fn-solution__visual">
              {visual}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Named export
export { SolutionSection };
