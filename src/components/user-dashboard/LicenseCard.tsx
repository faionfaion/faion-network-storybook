import { useState } from 'react';
import './LicenseCard.css';

export interface LicenseCardProps {
  /** License key */
  licenseKey: string;
  /** License type */
  type: 'personal' | 'commercial' | 'team';
  /** License status */
  status: 'active' | 'expired' | 'revoked';
  /** Expiration date (ISO string) */
  expiresAt?: string;
  /** Number of seats (for team licenses) */
  seats?: number;
  /** Number of active connections */
  activeConnections?: number;
  /** Max connections allowed */
  maxConnections?: number;
  /** Handler for regenerate key */
  onRegenerate?: () => void;
  /** Additional class name */
  className?: string;
}

/**
 * LicenseCard - Displays MCP license information
 *
 * Shows license key, status, and connection details for MCP access.
 */
export default function LicenseCard({
  licenseKey,
  type,
  status,
  expiresAt,
  seats,
  activeConnections = 0,
  maxConnections = 1,
  onRegenerate,
  className = '',
}: LicenseCardProps) {
  const [copied, setCopied] = useState(false);
  const [showKey, setShowKey] = useState(false);

  const classes = [
    'fn-license-card',
    `fn-license-card--${status}`,
    className,
  ].filter(Boolean).join(' ');

  const maskedKey = showKey ? licenseKey : `${licenseKey.slice(0, 8)}${'*'.repeat(24)}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(licenseKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = licenseKey;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const formattedExpiry = expiresAt
    ? new Date(expiresAt).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : null;

  const typeLabels: Record<string, string> = {
    personal: 'Personal License',
    commercial: 'Commercial License',
    team: 'Team License',
  };

  return (
    <div className={classes}>
      <div className="fn-license-card__header">
        <div className="fn-license-card__type-info">
          <span className="fn-license-card__label">MCP License</span>
          <h3 className="fn-license-card__type">{typeLabels[type]}</h3>
        </div>
        <span className={`fn-license-card__status fn-license-card__status--${status}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>

      <div className="fn-license-card__key-section">
        <span className="fn-license-card__key-label">License Key</span>
        <div className="fn-license-card__key-row">
          <code className="fn-license-card__key">{maskedKey}</code>
          <button
            type="button"
            className="fn-license-card__key-action"
            onClick={() => setShowKey(!showKey)}
            aria-label={showKey ? 'Hide license key' : 'Show license key'}
          >
            {showKey ? <EyeOffIcon /> : <EyeIcon />}
          </button>
          <button
            type="button"
            className="fn-license-card__key-action"
            onClick={handleCopy}
            aria-label="Copy license key"
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
          </button>
        </div>
      </div>

      <div className="fn-license-card__details">
        {formattedExpiry && (
          <div className="fn-license-card__detail">
            <span className="fn-license-card__detail-label">Expires</span>
            <span className="fn-license-card__detail-value">{formattedExpiry}</span>
          </div>
        )}
        {seats && (
          <div className="fn-license-card__detail">
            <span className="fn-license-card__detail-label">Seats</span>
            <span className="fn-license-card__detail-value">{seats}</span>
          </div>
        )}
        <div className="fn-license-card__detail">
          <span className="fn-license-card__detail-label">Connections</span>
          <span className="fn-license-card__detail-value">
            {activeConnections}/{maxConnections}
          </span>
        </div>
      </div>

      {onRegenerate && status === 'active' && (
        <div className="fn-license-card__actions">
          <button
            type="button"
            className="fn-license-card__button"
            onClick={onRegenerate}
          >
            Regenerate Key
          </button>
        </div>
      )}
    </div>
  );
}

function EyeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
      <path d="M1 1l22 22" />
      <path d="M8.71 8.71a4 4 0 1 0 5.66 5.66" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

// Named export
export { LicenseCard };
