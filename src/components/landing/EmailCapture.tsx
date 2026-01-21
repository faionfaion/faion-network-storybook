import { useState, FormEvent, ReactNode } from 'react';
import './EmailCapture.css';

export interface EmailCaptureProps {
  /** Headline text */
  headline?: ReactNode;
  /** Description text */
  description?: string;
  /** Placeholder for email input */
  placeholder?: string;
  /** Submit button text */
  buttonText?: string;
  /** Privacy notice text */
  privacyText?: ReactNode;
  /** Success message */
  successMessage?: string;
  /** Error message (overrides validation errors) */
  errorMessage?: string;
  /** Loading state */
  isLoading?: boolean;
  /** Success state (form submitted) */
  isSuccess?: boolean;
  /** Form submit handler */
  onSubmit?: (email: string) => void | Promise<void>;
  /** Layout variant */
  variant?: 'inline' | 'stacked' | 'centered';
}

/**
 * EmailCapture - Newsletter signup form
 *
 * Clean email capture with validation and states.
 * Follows the "Digital Journal" theme.
 */
export default function EmailCapture({
  headline,
  description,
  placeholder = 'Enter your email',
  buttonText = 'Subscribe',
  privacyText,
  successMessage = 'Thanks for subscribing! Check your inbox.',
  errorMessage,
  isLoading = false,
  isSuccess = false,
  onSubmit,
  variant = 'inline',
}: EmailCaptureProps) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      await onSubmit?.(email);
      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  const showSuccess = isSuccess || submitted;
  const displayError = errorMessage || error;

  return (
    <div className={`fn-email-capture fn-email-capture--${variant}`}>
      {/* Header */}
      {(headline || description) && (
        <div className="fn-email-capture__header">
          {headline && (
            <h3 className="fn-email-capture__headline">{headline}</h3>
          )}
          {description && (
            <p className="fn-email-capture__description">{description}</p>
          )}
        </div>
      )}

      {/* Success State */}
      {showSuccess ? (
        <div className="fn-email-capture__success">
          <span className="fn-email-capture__success-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </span>
          <p className="fn-email-capture__success-text">{successMessage}</p>
        </div>
      ) : (
        <>
          {/* Form */}
          <form className="fn-email-capture__form" onSubmit={handleSubmit}>
            <div className="fn-email-capture__input-wrapper">
              <input
                type="email"
                className={`fn-email-capture__input ${displayError ? 'fn-email-capture__input--error' : ''}`}
                placeholder={placeholder}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError(null);
                }}
                disabled={isLoading}
                aria-label="Email address"
                aria-invalid={!!displayError}
              />
              <button
                type="submit"
                className="fn-email-capture__button"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="fn-email-capture__spinner" />
                ) : (
                  buttonText
                )}
              </button>
            </div>

            {/* Error Message */}
            {displayError && (
              <p className="fn-email-capture__error">{displayError}</p>
            )}
          </form>

          {/* Privacy Notice */}
          {privacyText && (
            <p className="fn-email-capture__privacy">{privacyText}</p>
          )}
        </>
      )}
    </div>
  );
}

// Named export
export { EmailCapture };
