import './FinalCTASection.css';

export interface FinalCTASectionProps {
  /** Section headline */
  headline: string;
  /** Optional subheadline */
  subheadline?: string;
  /** Primary CTA button text */
  primaryCta?: string;
  /** Secondary CTA button text */
  secondaryCta?: string;
  /** Primary CTA click handler */
  onPrimaryClick?: () => void;
  /** Secondary CTA click handler */
  onSecondaryClick?: () => void;
  /** Background variant */
  variant?: 'default' | 'burgundy';
}

/**
 * FinalCTASection - Landing page final call-to-action section
 *
 * Strong closing section encouraging conversion.
 */
export default function FinalCTASection({
  headline,
  subheadline,
  primaryCta = 'Get Started Now',
  secondaryCta,
  onPrimaryClick,
  onSecondaryClick,
  variant = 'default',
}: FinalCTASectionProps) {
  return (
    <section className={`fn-final-cta fn-final-cta--${variant}`}>
      <div className="fn-final-cta__container">
        <h2 className="fn-final-cta__headline">{headline}</h2>

        {subheadline && (
          <p className="fn-final-cta__subheadline">{subheadline}</p>
        )}

        <div className="fn-final-cta__buttons">
          <button className="fn-final-cta__btn fn-final-cta__btn--primary" onClick={onPrimaryClick}>
            {primaryCta}
          </button>
          {secondaryCta && (
            <button className="fn-final-cta__btn fn-final-cta__btn--secondary" onClick={onSecondaryClick}>
              {secondaryCta}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

// Named export
export { FinalCTASection };
