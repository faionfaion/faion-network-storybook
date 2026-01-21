import { useState } from 'react';
import './FAQ.css';

export interface FAQItem {
  /** Question text */
  question: string;
  /** Answer text or JSX */
  answer: string;
}

export interface FAQProps {
  /** List of FAQ items */
  items: FAQItem[];
  /** Enable JSON-LD schema markup for SEO */
  schemaMarkup?: boolean;
  /** Additional class name */
  className?: string;
}

// Chevron icon
const ChevronIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/**
 * FAQ - Frequently Asked Questions accordion for MDX
 *
 * Displays a collapsible list of questions and answers.
 * Supports JSON-LD schema markup for SEO.
 */
export default function FAQ({
  items,
  schemaMarkup = true,
  className = '',
}: FAQProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const classes = ['fn-faq', className].filter(Boolean).join(' ');

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  // Generate JSON-LD schema for SEO
  const schemaData = schemaMarkup
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <div className={classes}>
      {schemaMarkup && schemaData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      )}
      <div className="fn-faq__list">
        {items.map((item, index) => {
          const isOpen = openItems.has(index);
          return (
            <div
              key={index}
              className={`fn-faq__item ${isOpen ? 'fn-faq__item--open' : ''}`}
            >
              <button
                type="button"
                className="fn-faq__question"
                onClick={() => toggleItem(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="fn-faq__question-text">{item.question}</span>
                <span className={`fn-faq__icon ${isOpen ? 'fn-faq__icon--open' : ''}`}>
                  <ChevronIcon />
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className="fn-faq__answer"
                role="region"
                aria-labelledby={`faq-question-${index}`}
                hidden={!isOpen}
              >
                <div className="fn-faq__answer-content">{item.answer}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Named export
export { FAQ };
