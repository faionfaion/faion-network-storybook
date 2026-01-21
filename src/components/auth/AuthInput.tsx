import { InputHTMLAttributes, useState, forwardRef } from 'react';
import './AuthInput.css';

export interface AuthInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Input label */
  label?: string;
  /** Error message */
  error?: string;
  /** Helper text */
  helperText?: string;
  /** Show password toggle for password fields */
  showPasswordToggle?: boolean;
  /** Left icon */
  leftIcon?: React.ReactNode;
  /** Right icon (overridden by password toggle if enabled) */
  rightIcon?: React.ReactNode;
}

// Eye icon
const EyeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

// Eye off icon
const EyeOffIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

/**
 * AuthInput - Styled input for authentication forms
 *
 * Enhanced input with label, error state, and password toggle.
 * Follows the "Digital Journal" theme.
 */
const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>(
  (
    {
      label,
      error,
      helperText,
      showPasswordToggle = false,
      leftIcon,
      rightIcon,
      type = 'text',
      className = '',
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === 'password';
    const inputType = isPassword && showPassword ? 'text' : type;

    return (
      <div className={`fn-auth-input ${className}`}>
        {label && (
          <label className="fn-auth-input__label">{label}</label>
        )}
        <div
          className={`fn-auth-input__wrapper ${error ? 'fn-auth-input__wrapper--error' : ''} ${props.disabled ? 'fn-auth-input__wrapper--disabled' : ''}`}
        >
          {leftIcon && (
            <span className="fn-auth-input__icon fn-auth-input__icon--left">
              {leftIcon}
            </span>
          )}
          <input
            ref={ref}
            type={inputType}
            className="fn-auth-input__field"
            aria-invalid={!!error}
            {...props}
          />
          {isPassword && showPasswordToggle ? (
            <button
              type="button"
              className="fn-auth-input__toggle"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              tabIndex={-1}
            >
              {showPassword ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          ) : rightIcon ? (
            <span className="fn-auth-input__icon fn-auth-input__icon--right">
              {rightIcon}
            </span>
          ) : null}
        </div>
        {error && <p className="fn-auth-input__error">{error}</p>}
        {helperText && !error && (
          <p className="fn-auth-input__helper">{helperText}</p>
        )}
      </div>
    );
  }
);

AuthInput.displayName = 'AuthInput';

export default AuthInput;
export { AuthInput };
