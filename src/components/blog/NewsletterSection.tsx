import { useState } from 'react';
import './NewsletterSection.css';

export interface NewsletterSectionProps {
  /** Section headline */
  headline: string;
  /** Section description */
  description: string;
  /** Submit handler */
  onSubscribe: (email: string) => Promise<void>;
  /** Success message */
  successMessage?: string;
  /** Additional class name */
  className?: string;
}

// Email icon
const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.333 3.333h13.334c.916 0 1.666.75 1.666 1.667v10c0 .917-.75 1.667-1.666 1.667H3.333c-.916 0-1.666-.75-1.666-1.667V5c0-.917.75-1.667 1.666-1.667z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.333 5l-8.333 5.833L1.667 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Check icon
const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/**
 * NewsletterSection - Newsletter signup section
 *
 * Full-width section for newsletter subscription with headline and description.
 * Includes loading and success states.
 */
export default function NewsletterSection({
  headline,
  description,
  onSubscribe,
  successMessage = 'Thanks for subscribing! Check your inbox to confirm.',
  className = '',
}: NewsletterSectionProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const classes = ['fn-newsletter-section', className].filter(Boolean).join(' ');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === 'loading') return;

    setStatus('loading');
    setError('');

    try {
      await onSubscribe(email);
      setStatus('success');
      setEmail('');
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <section className={classes}>
      <div className="fn-newsletter-section__content">
        <h2 className="fn-newsletter-section__headline">{headline}</h2>
        <p className="fn-newsletter-section__description">{description}</p>

        {status === 'success' ? (
          <div className="fn-newsletter-section__success">
            <span className="fn-newsletter-section__success-icon">
              <CheckIcon />
            </span>
            <span>{successMessage}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="fn-newsletter-section__form">
            <div className="fn-newsletter-section__input-wrapper">
              <span className="fn-newsletter-section__input-icon">
                <EmailIcon />
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="fn-newsletter-section__input"
                required
                disabled={status === 'loading'}
              />
            </div>
            <button
              type="submit"
              className="fn-newsletter-section__button"
              disabled={status === 'loading' || !email}
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="fn-newsletter-section__error">{error}</p>
        )}
      </div>
    </section>
  );
}

// Named export
export { NewsletterSection };
