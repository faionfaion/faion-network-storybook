import { ReactNode } from 'react';
import './FrameworkSection.css';

export interface FrameworkStep {
  number?: string;
  title: string;
  description: string;
  icon?: ReactNode;
}

export interface FrameworkSectionProps {
  /** Section eyebrow text */
  eyebrow?: string;
  /** Section headline */
  headline: string;
  /** Optional subheadline */
  subheadline?: string;
  /** Framework steps */
  steps: FrameworkStep[];
  /** Background variant */
  variant?: 'default' | 'cream';
  /** Show numbered steps */
  showNumbers?: boolean;
}

/**
 * FrameworkSection - Landing page section showing methodology/framework
 *
 * Displays a numbered or icon-based step process.
 */
export default function FrameworkSection({
  eyebrow,
  headline,
  subheadline,
  steps,
  variant = 'default',
  showNumbers = true,
}: FrameworkSectionProps) {
  return (
    <section className={`fn-framework fn-framework--${variant}`}>
      <div className="fn-framework__container">
        {/* Header */}
        <div className="fn-framework__header">
          {eyebrow && <span className="fn-framework__eyebrow">{eyebrow}</span>}
          <h2 className="fn-framework__headline">{headline}</h2>
          {subheadline && <p className="fn-framework__subheadline">{subheadline}</p>}
        </div>

        {/* Steps */}
        <div className="fn-framework__steps">
          {steps.map((step, index) => (
            <div key={index} className="fn-framework__step">
              <div className="fn-framework__step-marker">
                {showNumbers ? (
                  <span className="fn-framework__step-number">
                    {step.number || String(index + 1).padStart(2, '0')}
                  </span>
                ) : step.icon ? (
                  <span className="fn-framework__step-icon">{step.icon}</span>
                ) : (
                  <span className="fn-framework__step-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                )}
              </div>
              <div className="fn-framework__step-content">
                <h3 className="fn-framework__step-title">{step.title}</h3>
                <p className="fn-framework__step-desc">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="fn-framework__step-connector" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Named export
export { FrameworkSection };
