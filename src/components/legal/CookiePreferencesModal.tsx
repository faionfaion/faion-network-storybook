import { useState } from 'react';
import './CookiePreferencesModal.css';
import ConsentToggle from './ConsentToggle';

export interface CookiePreferences {
  essential: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

export interface CookiePreferencesModalProps {
  /** Whether modal is open */
  isOpen: boolean;
  /** Close handler */
  onClose: () => void;
  /** Save handler with preferences */
  onSave: (preferences: CookiePreferences) => void;
  /** Initial cookie preferences */
  initialPreferences: CookiePreferences;
  /** Additional class name */
  className?: string;
}

/**
 * CookiePreferencesModal - Modal for managing cookie preferences
 *
 * Allows users to customize their cookie consent preferences by category.
 */
export default function CookiePreferencesModal({
  isOpen,
  onClose,
  onSave,
  initialPreferences,
  className = '',
}: CookiePreferencesModalProps) {
  const [preferences, setPreferences] = useState<CookiePreferences>(initialPreferences);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(preferences);
    onClose();
  };

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      essential: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    onSave(allAccepted);
    onClose();
  };

  const handleRejectAll = () => {
    const onlyEssential: CookiePreferences = {
      essential: true,
      functional: false,
      analytics: false,
      marketing: false,
    };
    onSave(onlyEssential);
    onClose();
  };

  const classes = ['fn-cookie-modal', className].filter(Boolean).join(' ');

  return (
    <div className="fn-cookie-modal__overlay" onClick={onClose}>
      <div
        className={classes}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="fn-cookie-modal__header">
          <h2 id="cookie-modal-title" className="fn-cookie-modal__title">
            Cookie Preferences
          </h2>
          <button
            type="button"
            className="fn-cookie-modal__close"
            onClick={onClose}
            aria-label="Close"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="fn-cookie-modal__content">
          <p className="fn-cookie-modal__description">
            We use cookies to provide you with the best possible experience. You can customize your
            preferences below. Essential cookies cannot be disabled as they are required for the
            website to function properly.
          </p>

          <div className="fn-cookie-modal__toggles">
            <ConsentToggle
              label="Essential Cookies"
              description="Required for basic site functionality like page navigation and secure areas. Cannot be disabled."
              checked={preferences.essential}
              onChange={() => {}}
              disabled
            />
            <ConsentToggle
              label="Functional Cookies"
              description="Remember your preferences, language settings, and provide enhanced features."
              checked={preferences.functional}
              onChange={(checked) => setPreferences({ ...preferences, functional: checked })}
            />
            <ConsentToggle
              label="Analytics Cookies"
              description="Help us understand how visitors interact with our website to improve user experience."
              checked={preferences.analytics}
              onChange={(checked) => setPreferences({ ...preferences, analytics: checked })}
            />
            <ConsentToggle
              label="Marketing Cookies"
              description="Used to track visitors across websites to display relevant advertisements."
              checked={preferences.marketing}
              onChange={(checked) => setPreferences({ ...preferences, marketing: checked })}
            />
          </div>
        </div>

        <div className="fn-cookie-modal__footer">
          <div className="fn-cookie-modal__footer-left">
            <button
              type="button"
              className="fn-cookie-modal__button fn-cookie-modal__button--text"
              onClick={handleRejectAll}
            >
              Reject All
            </button>
          </div>
          <div className="fn-cookie-modal__footer-right">
            <button
              type="button"
              className="fn-cookie-modal__button fn-cookie-modal__button--secondary"
              onClick={handleAcceptAll}
            >
              Accept All
            </button>
            <button
              type="button"
              className="fn-cookie-modal__button fn-cookie-modal__button--primary"
              onClick={handleSave}
            >
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CloseIcon() {
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
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// Named export
export { CookiePreferencesModal };
