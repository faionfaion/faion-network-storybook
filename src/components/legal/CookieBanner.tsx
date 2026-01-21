import './CookieBanner.css';

export interface CookieBannerProps {
  /** Handler for accepting all cookies */
  onAcceptAll: () => void;
  /** Handler for rejecting all cookies */
  onRejectAll: () => void;
  /** Handler for opening cookie preferences */
  onCustomize: () => void;
  /** URL to privacy policy */
  privacyPolicyUrl: string;
  /** Additional class name */
  className?: string;
}

/**
 * CookieBanner - GDPR-compliant cookie consent banner
 *
 * Fixed bottom banner for cookie consent with accept/reject/customize options.
 */
export default function CookieBanner({
  onAcceptAll,
  onRejectAll,
  onCustomize,
  privacyPolicyUrl,
  className = '',
}: CookieBannerProps) {
  const classes = ['fn-cookie-banner', className].filter(Boolean).join(' ');

  return (
    <div className={classes} role="dialog" aria-label="Cookie consent" aria-modal="false">
      <div className="fn-cookie-banner__container">
        <div className="fn-cookie-banner__content">
          <div className="fn-cookie-banner__icon">
            <CookieIcon />
          </div>
          <div className="fn-cookie-banner__text">
            <p className="fn-cookie-banner__message">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
              Read our{' '}
              <a href={privacyPolicyUrl} className="fn-cookie-banner__link">
                Privacy Policy
              </a>{' '}
              to learn more.
            </p>
          </div>
        </div>
        <div className="fn-cookie-banner__actions">
          <button
            type="button"
            className="fn-cookie-banner__button fn-cookie-banner__button--secondary"
            onClick={onRejectAll}
          >
            Reject All
          </button>
          <button
            type="button"
            className="fn-cookie-banner__button fn-cookie-banner__button--secondary"
            onClick={onCustomize}
          >
            Customize
          </button>
          <button
            type="button"
            className="fn-cookie-banner__button fn-cookie-banner__button--primary"
            onClick={onAcceptAll}
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}

function CookieIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="8" cy="9" r="1" fill="currentColor" />
      <circle cx="15" cy="8" r="1" fill="currentColor" />
      <circle cx="10" cy="14" r="1" fill="currentColor" />
      <circle cx="16" cy="13" r="1" fill="currentColor" />
      <circle cx="12" cy="17" r="1" fill="currentColor" />
    </svg>
  );
}

// Named export
export { CookieBanner };
