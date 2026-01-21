import { ReactNode } from 'react';
import './SuccessStoriesSection.css';

export interface SuccessMetric {
  /** Label for the metric */
  label: string;
  /** Before value */
  before: string;
  /** After value */
  after: string;
}

export interface SuccessStory {
  /** Unique identifier */
  id: string;
  /** Person's name */
  name: string;
  /** Role or title */
  role: string;
  /** Company or business name */
  company?: string;
  /** Avatar URL */
  avatar?: string;
  /** Avatar initials (fallback) */
  initials?: string;
  /** Brief story excerpt */
  excerpt: string;
  /** Key metrics */
  metrics: SuccessMetric[];
  /** Optional link to full case study */
  caseStudyUrl?: string;
  /** Click handler */
  onClick?: () => void;
}

export interface SuccessStoriesSectionProps {
  /** Section headline */
  headline?: ReactNode;
  /** Section subheadline */
  subheadline?: string;
  /** Success stories */
  stories?: SuccessStory[];
  /** CTA text for viewing all stories */
  viewAllText?: string;
  /** View all click handler */
  onViewAllClick?: () => void;
}

/**
 * SuccessStoriesSection - Landing page success stories showcase
 *
 * Displays real solopreneur outcomes with before/after metrics.
 * Follows the "Digital Journal" theme.
 */
export default function SuccessStoriesSection({
  headline = 'Real Results from Real Solopreneurs',
  subheadline = 'See how others transformed their careers using our methodologies.',
  stories = [],
  viewAllText = 'View All Success Stories',
  onViewAllClick,
}: SuccessStoriesSectionProps) {
  return (
    <section className="fn-success">
      <div className="fn-success__container">
        {/* Header */}
        <div className="fn-success__header">
          <h2 className="fn-success__headline">{headline}</h2>
          {subheadline && (
            <p className="fn-success__subheadline">{subheadline}</p>
          )}
        </div>

        {/* Stories Grid */}
        {stories.length > 0 && (
          <div className="fn-success__grid">
            {stories.map((story) => (
              <div
                key={story.id}
                className="fn-success__card"
                onClick={story.onClick}
                role={story.onClick ? 'button' : undefined}
                tabIndex={story.onClick ? 0 : undefined}
              >
                {/* Person Info */}
                <div className="fn-success__person">
                  <div className="fn-success__avatar">
                    {story.avatar ? (
                      <img src={story.avatar} alt={story.name} />
                    ) : (
                      <span>{story.initials || story.name.charAt(0)}</span>
                    )}
                  </div>
                  <div className="fn-success__person-info">
                    <span className="fn-success__name">{story.name}</span>
                    <span className="fn-success__role">
                      {story.role}
                      {story.company && ` at ${story.company}`}
                    </span>
                  </div>
                </div>

                {/* Excerpt */}
                <p className="fn-success__excerpt">"{story.excerpt}"</p>

                {/* Metrics */}
                {story.metrics.length > 0 && (
                  <div className="fn-success__metrics">
                    {story.metrics.map((metric, index) => (
                      <div key={index} className="fn-success__metric">
                        <span className="fn-success__metric-label">{metric.label}</span>
                        <div className="fn-success__metric-values">
                          <span className="fn-success__metric-before">{metric.before}</span>
                          <span className="fn-success__metric-arrow">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4 10H16M16 10L11 5M16 10L11 15"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <span className="fn-success__metric-after">{metric.after}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Case Study Link */}
                {story.caseStudyUrl && (
                  <a
                    href={story.caseStudyUrl}
                    className="fn-success__link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Read Full Story
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 8H13M13 8L9 4M13 8L9 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        )}

        {/* View All CTA */}
        {onViewAllClick && (
          <div className="fn-success__cta">
            <button className="fn-success__cta-button" onClick={onViewAllClick}>
              {viewAllText}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// Named export
export { SuccessStoriesSection };
