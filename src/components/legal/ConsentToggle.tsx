import './ConsentToggle.css';

export interface ConsentToggleProps {
  /** Toggle label */
  label: string;
  /** Toggle description */
  description: string;
  /** Checked state */
  checked: boolean;
  /** Change handler */
  onChange: (checked: boolean) => void;
  /** Disabled state */
  disabled?: boolean;
  /** Additional class name */
  className?: string;
}

/**
 * ConsentToggle - Toggle switch for cookie consent preferences
 *
 * Used in cookie preference modals for toggling consent categories.
 */
export default function ConsentToggle({
  label,
  description,
  checked,
  onChange,
  disabled = false,
  className = '',
}: ConsentToggleProps) {
  const classes = [
    'fn-consent-toggle',
    disabled ? 'fn-consent-toggle--disabled' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div className="fn-consent-toggle__content">
        <span className="fn-consent-toggle__label">{label}</span>
        <span className="fn-consent-toggle__description">{description}</span>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        className={`fn-consent-toggle__switch ${checked ? 'fn-consent-toggle__switch--on' : ''}`}
        onClick={() => !disabled && onChange(!checked)}
        disabled={disabled}
      >
        <span className="fn-consent-toggle__thumb" />
      </button>
    </div>
  );
}

// Named export
export { ConsentToggle };
