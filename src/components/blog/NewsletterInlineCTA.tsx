import { useState } from 'react';
import './NewsletterInlineCTA.css';

export interface NewsletterInlineCTAProps {
  /** CTA text */
  text: string;
  /** Submit handler */
  onSubscribe: (email: string) => Promise<void>;
  /** Success message */
  successMessage?: string;
  /** Additional class name */
  className?: string;
}

// Arrow icon
const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.333 8h9.334M9 4.667L12.667 8 9 11.333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Check icon
const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.333 4L6 11.333 2.667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/**
 * NewsletterInlineCTA - Compact inline newsletter signup
 *
 * Inline CTA for newsletter subscription within article content.
 * More subtle than the full section, designed for mid-content placement.
 */
export default function NewsletterInlineCTA({
  text,
  onSubscribe,
  successMessage = 'Thanks! Check your inbox.',
  className = '',
}: NewsletterInlineCTAProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const classes = ['fn-newsletter-inline', className].filter(Boolean).join(' ');

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
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    }
  };

  if (status === 'success') {
    return (
      <div className={`${classes} fn-newsletter-inline--success`}>
        <span className="fn-newsletter-inline__success-icon">
          <CheckIcon />
        </span>
        <span className="fn-newsletter-inline__success-text">{successMessage}</span>
      </div>
    );
  }

  return (
    <div className={classes}>
      <p className="fn-newsletter-inline__text">{text}</p>
      <form onSubmit={handleSubmit} className="fn-newsletter-inline__form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="fn-newsletter-inline__input"
          required
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          className="fn-newsletter-inline__button"
          disabled={status === 'loading' || !email}
          aria-label="Subscribe"
        >
          {status === 'loading' ? (
            <span className="fn-newsletter-inline__loading">...</span>
          ) : (
            <ArrowIcon />
          )}
        </button>
      </form>
      {status === 'error' && (
        <p className="fn-newsletter-inline__error">{error}</p>
      )}
    </div>
  );
}

// Named export
export { NewsletterInlineCTA };
