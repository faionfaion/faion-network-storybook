import './FAQSection.css';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSectionProps {
  /** Section eyebrow text */
  eyebrow?: string;
  /** Section headline */
  headline: string;
  /** Optional subheadline */
  subheadline?: string;
  /** FAQ items */
  items: FAQItem[];
  /** Background variant */
  variant?: 'default' | 'cream';
}

/**
 * FAQSection - Landing page FAQ accordion section
 *
 * Displays frequently asked questions in an accordion format.
 */
export default function FAQSection({
  eyebrow,
  headline,
  subheadline,
  items,
  variant = 'default',
}: FAQSectionProps) {
  return (
    <section className={`fn-faq-section fn-faq-section--${variant}`}>
      <div className="fn-faq-section__container">
        {/* Header */}
        <div className="fn-faq-section__header">
          {eyebrow && <span className="fn-faq-section__eyebrow">{eyebrow}</span>}
          <h2 className="fn-faq-section__headline">{headline}</h2>
          {subheadline && <p className="fn-faq-section__subheadline">{subheadline}</p>}
        </div>

        {/* FAQ Items */}
        <div className="fn-faq-section__items">
          {items.map((item, index) => (
            <details key={index} className="fn-faq-section__item">
              <summary className="fn-faq-section__question">
                <span>{item.question}</span>
                <span className="fn-faq-section__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </summary>
              <div className="fn-faq-section__answer">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// Named export
export { FAQSection };
