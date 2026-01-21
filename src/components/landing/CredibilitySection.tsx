import { ReactNode } from 'react';
import './CredibilitySection.css';

export interface CredibilityLogo {
  /** Logo identifier */
  id: string;
  /** Logo name (for alt text) */
  name: string;
  /** Logo URL or SVG component */
  logo?: ReactNode;
  /** Logo image URL */
  logoUrl?: string;
  /** Optional link */
  url?: string;
}

export interface CredibilityBadge {
  /** Badge identifier */
  id: string;
  /** Badge icon */
  icon?: ReactNode;
  /** Badge text */
  text: string;
  /** Optional subtext */
  subtext?: string;
}

export interface CredibilityMetric {
  /** Metric value */
  value: string;
  /** Metric label */
  label: string;
}

export interface CredibilitySectionProps {
  /** Section headline */
  headline?: ReactNode;
  /** "As seen in" or "Trusted by" text */
  asSeenInText?: string;
  /** Partner/feature logos */
  logos?: CredibilityLogo[];
  /** Trust badges */
  badges?: CredibilityBadge[];
  /** Key metrics */
  metrics?: CredibilityMetric[];
  /** Layout variant */
  variant?: 'default' | 'minimal' | 'centered';
}

/**
 * CredibilitySection - Landing page trust/credibility section
 *
 * Builds trust with logos, badges, and social proof.
 * Follows the "Digital Journal" theme with subtle styling.
 */
export default function CredibilitySection({
  headline,
  asSeenInText = 'Trusted by solopreneurs at',
  logos = [],
  badges = [],
  metrics = [],
  variant = 'default',
}: CredibilitySectionProps) {
  return (
    <section className={`fn-credibility fn-credibility--${variant}`}>
      <div className="fn-credibility__container">
        {/* Headline */}
        {headline && (
          <h2 className="fn-credibility__headline">{headline}</h2>
        )}

        {/* Metrics */}
        {metrics.length > 0 && (
          <div className="fn-credibility__metrics">
            {metrics.map((metric, index) => (
              <div key={index} className="fn-credibility__metric">
                <span className="fn-credibility__metric-value">{metric.value}</span>
                <span className="fn-credibility__metric-label">{metric.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Logos */}
        {logos.length > 0 && (
          <div className="fn-credibility__logos-wrapper">
            {asSeenInText && (
              <p className="fn-credibility__logos-label">{asSeenInText}</p>
            )}
            <div className="fn-credibility__logos">
              {logos.map((logo) => (
                <div key={logo.id} className="fn-credibility__logo">
                  {logo.url ? (
                    <a
                      href={logo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={logo.name}
                    >
                      {logo.logo || (
                        logo.logoUrl ? (
                          <img src={logo.logoUrl} alt={logo.name} />
                        ) : (
                          <span className="fn-credibility__logo-placeholder">{logo.name}</span>
                        )
                      )}
                    </a>
                  ) : (
                    logo.logo || (
                      logo.logoUrl ? (
                        <img src={logo.logoUrl} alt={logo.name} />
                      ) : (
                        <span className="fn-credibility__logo-placeholder">{logo.name}</span>
                      )
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Trust Badges */}
        {badges.length > 0 && (
          <div className="fn-credibility__badges">
            {badges.map((badge) => (
              <div key={badge.id} className="fn-credibility__badge">
                {badge.icon && (
                  <span className="fn-credibility__badge-icon">{badge.icon}</span>
                )}
                <div className="fn-credibility__badge-content">
                  <span className="fn-credibility__badge-text">{badge.text}</span>
                  {badge.subtext && (
                    <span className="fn-credibility__badge-subtext">{badge.subtext}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// Named export
export { CredibilitySection };
