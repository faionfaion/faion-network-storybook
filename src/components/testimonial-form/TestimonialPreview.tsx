import './TestimonialPreview.css';

export interface TestimonialPreviewProps {
  /** Testimonial content text */
  content: string;
  /** Display name */
  displayName: string;
  /** Job title */
  jobTitle?: string;
  /** Company name */
  company?: string;
  /** Edit handler */
  onEdit: () => void;
  /** Additional class name */
  className?: string;
}

// Quote icon
const QuoteIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 12H5.333v-2a3 3 0 013-3h.5V5h-.5a5 5 0 00-5 5v6a2 2 0 002 2h3a2 2 0 002-2v-2a2 2 0 00-2-2zM19 12h-2.667v-2a3 3 0 013-3h.5V5h-.5a5 5 0 00-5 5v6a2 2 0 002 2h3a2 2 0 002-2v-2a2 2 0 00-2-2z" fill="currentColor"/>
  </svg>
);

// Edit icon
const EditIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.333 2L14 4.667 5.333 13.333H2.667v-2.666L11.333 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/**
 * TestimonialPreview - Preview of testimonial before submission
 *
 * Shows how the testimonial will appear with option to edit.
 */
export default function TestimonialPreview({
  content,
  displayName,
  jobTitle,
  company,
  onEdit,
  className = '',
}: TestimonialPreviewProps) {
  const classes = ['fn-testimonial-preview', className].filter(Boolean).join(' ');

  const getAttribution = () => {
    const parts = [displayName];
    if (jobTitle) parts.push(jobTitle);
    if (company) parts.push(`at ${company}`);
    return parts.join(', ');
  };

  return (
    <div className={classes}>
      <div className="fn-testimonial-preview__header">
        <h3 className="fn-testimonial-preview__title">Preview</h3>
        <button
          type="button"
          className="fn-testimonial-preview__edit"
          onClick={onEdit}
        >
          <EditIcon />
          <span>Edit</span>
        </button>
      </div>

      <div className="fn-testimonial-preview__card">
        <span className="fn-testimonial-preview__quote-icon" aria-hidden="true">
          <QuoteIcon />
        </span>
        <blockquote className="fn-testimonial-preview__content">
          {content}
        </blockquote>
        <footer className="fn-testimonial-preview__footer">
          <cite className="fn-testimonial-preview__attribution">
            {getAttribution()}
          </cite>
        </footer>
      </div>

      <p className="fn-testimonial-preview__note">
        This is how your testimonial will appear on our website.
      </p>
    </div>
  );
}

// Named export
export { TestimonialPreview };
