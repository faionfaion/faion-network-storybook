import './ConsentCheckbox.css';

export interface ConsentCheckboxProps {
  /** Checked state */
  checked: boolean;
  /** Change handler */
  onChange: (checked: boolean) => void;
  /** Error message */
  error?: string;
  /** Additional class name */
  className?: string;
}

// Check icon
const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.667 3.5L5.25 9.917 2.333 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/**
 * ConsentCheckbox - Consent checkbox for testimonial submission
 *
 * Required consent before submitting a testimonial.
 */
export default function ConsentCheckbox({
  checked,
  onChange,
  error,
  className = '',
}: ConsentCheckboxProps) {
  const classes = [
    'fn-consent-checkbox',
    error ? 'fn-consent-checkbox--error' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <label className="fn-consent-checkbox__label">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="fn-consent-checkbox__input"
        />
        <span className={`fn-consent-checkbox__box ${checked ? 'fn-consent-checkbox__box--checked' : ''}`}>
          {checked && <CheckIcon />}
        </span>
        <span className="fn-consent-checkbox__text">
          I consent to having my testimonial displayed on the Faion Network website.
          I understand my name (as entered above) and testimonial will be publicly visible.
        </span>
      </label>
      {error && (
        <p className="fn-consent-checkbox__error">{error}</p>
      )}
    </div>
  );
}

// Named export
export { ConsentCheckbox };
