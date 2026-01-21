import { ReactNode } from 'react';
import './HeroSection.css';

export interface SocialProofAvatar {
  src?: string;
  alt: string;
  initials?: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroSectionProps {
  /** Main headline */
  headline: ReactNode;
  /** Subheadline text */
  subheadline?: string;
  /** Primary CTA button text */
  primaryCta?: string;
  /** Secondary CTA button text */
  secondaryCta?: string;
  /** Primary CTA click handler */
  onPrimaryClick?: () => void;
  /** Secondary CTA click handler */
  onSecondaryClick?: () => void;
  /** Social proof avatars */
  avatars?: SocialProofAvatar[];
  /** Social proof text */
  socialProofText?: string;
  /** Statistics to display */
  stats?: HeroStat[];
}

/**
 * HeroSection - Landing page hero component
 *
 * Full-width section with headline, subheadline, CTAs, and social proof.
 * Follows the "Digital Journal" theme with Warm Alabaster background.
 */
export default function HeroSection({
  headline,
  subheadline,
  primaryCta = 'Get Started',
  secondaryCta,
  onPrimaryClick,
  onSecondaryClick,
  avatars = [],
  socialProofText,
  stats = [],
}: HeroSectionProps) {
  return (
    <section className="fn-hero">
      <div className="fn-hero__container">
        {/* Content */}
        <div className="fn-hero__content">
          <h1 className="fn-hero__headline">{headline}</h1>

          {subheadline && (
            <p className="fn-hero__subheadline">{subheadline}</p>
          )}

          {/* CTAs */}
          <div className="fn-hero__ctas">
            <button className="fn-hero__cta fn-hero__cta--primary" onClick={onPrimaryClick}>
              {primaryCta}
            </button>
            {secondaryCta && (
              <button className="fn-hero__cta fn-hero__cta--secondary" onClick={onSecondaryClick}>
                {secondaryCta}
              </button>
            )}
          </div>

          {/* Social Proof */}
          {(avatars.length > 0 || socialProofText) && (
            <div className="fn-hero__social-proof">
              {avatars.length > 0 && (
                <div className="fn-hero__avatars">
                  {avatars.slice(0, 5).map((avatar, index) => (
                    <div
                      key={index}
                      className="fn-hero__avatar"
                      style={{ zIndex: avatars.length - index }}
                    >
                      {avatar.src ? (
                        <img src={avatar.src} alt={avatar.alt} />
                      ) : (
                        <span>{avatar.initials || avatar.alt.charAt(0)}</span>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {socialProofText && (
                <p className="fn-hero__social-text">{socialProofText}</p>
              )}
            </div>
          )}
        </div>

        {/* Stats */}
        {stats.length > 0 && (
          <div className="fn-hero__stats">
            {stats.map((stat, index) => (
              <div key={index} className="fn-hero__stat">
                <span className="fn-hero__stat-value">{stat.value}</span>
                <span className="fn-hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// Named export
export { HeroSection };
