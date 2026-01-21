import './SSOStatusIndicator.css';

export interface SSOStatusIndicatorProps {
  /** Whether SSO is connected */
  connected: boolean;
  /** SSO provider name */
  provider?: string;
  /** Additional class name */
  className?: string;
}

/**
 * SSOStatusIndicator - Shows SSO connection status
 *
 * Displays whether SSO is configured and which provider is connected.
 */
export default function SSOStatusIndicator({
  connected,
  provider,
  className = '',
}: SSOStatusIndicatorProps) {
  const classes = [
    'fn-sso-status',
    connected ? 'fn-sso-status--connected' : 'fn-sso-status--disconnected',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div className="fn-sso-status__indicator">
        {connected ? <ConnectedIcon /> : <DisconnectedIcon />}
      </div>
      <div className="fn-sso-status__content">
        <span className="fn-sso-status__label">
          {connected ? 'SSO Connected' : 'SSO Not Configured'}
        </span>
        {connected && provider && (
          <span className="fn-sso-status__provider">via {provider}</span>
        )}
      </div>
    </div>
  );
}

function ConnectedIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function DisconnectedIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  );
}

// Named export
export { SSOStatusIndicator };
