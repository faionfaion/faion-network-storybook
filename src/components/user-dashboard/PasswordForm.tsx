import { useState } from 'react';
import './PasswordForm.css';

export interface PasswordFormProps {
  /** Submit handler */
  onSubmit: (currentPassword: string, newPassword: string) => Promise<void>;
  /** Minimum password length */
  minLength?: number;
  /** Additional class name */
  className?: string;
}

/**
 * PasswordForm - Change password form
 *
 * Allows users to update their account password with validation.
 */
export default function PasswordForm({
  onSubmit,
  minLength = 8,
  className = '',
}: PasswordFormProps) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPasswords, setShowPasswords] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const classes = ['fn-password-form', className].filter(Boolean).join(' ');

  const passwordStrength = getPasswordStrength(newPassword, minLength);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (newPassword.length < minLength) {
      setError(`Password must be at least ${minLength} characters`);
      return;
    }

    setIsSubmitting(true);

    try {
      await onSubmit(currentPassword, newPassword);
      setSuccess(true);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update password');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={classes} onSubmit={handleSubmit}>
      <div className="fn-password-form__header">
        <h3 className="fn-password-form__title">Change Password</h3>
        <p className="fn-password-form__description">
          Update your password to keep your account secure.
        </p>
      </div>

      {error && (
        <div className="fn-password-form__error" role="alert">
          {error}
        </div>
      )}

      {success && (
        <div className="fn-password-form__success" role="status">
          Password updated successfully!
        </div>
      )}

      <div className="fn-password-form__fields">
        <div className="fn-password-form__field">
          <label htmlFor="current-password" className="fn-password-form__label">
            Current Password
          </label>
          <div className="fn-password-form__input-wrapper">
            <input
              type={showPasswords ? 'text' : 'password'}
              id="current-password"
              value={currentPassword}
              onChange={(e) => {
                setCurrentPassword(e.target.value);
                setError(null);
              }}
              className="fn-password-form__input"
              required
            />
          </div>
        </div>

        <div className="fn-password-form__field">
          <label htmlFor="new-password" className="fn-password-form__label">
            New Password
          </label>
          <div className="fn-password-form__input-wrapper">
            <input
              type={showPasswords ? 'text' : 'password'}
              id="new-password"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
                setError(null);
              }}
              className="fn-password-form__input"
              minLength={minLength}
              required
            />
          </div>
          {newPassword && (
            <div className="fn-password-form__strength">
              <div className="fn-password-form__strength-bar">
                <div
                  className={`fn-password-form__strength-fill fn-password-form__strength-fill--${passwordStrength.level}`}
                  style={{ width: `${passwordStrength.percent}%` }}
                />
              </div>
              <span className={`fn-password-form__strength-label fn-password-form__strength-label--${passwordStrength.level}`}>
                {passwordStrength.label}
              </span>
            </div>
          )}
        </div>

        <div className="fn-password-form__field">
          <label htmlFor="confirm-password" className="fn-password-form__label">
            Confirm New Password
          </label>
          <div className="fn-password-form__input-wrapper">
            <input
              type={showPasswords ? 'text' : 'password'}
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setError(null);
              }}
              className="fn-password-form__input"
              minLength={minLength}
              required
            />
          </div>
        </div>

        <label className="fn-password-form__checkbox">
          <input
            type="checkbox"
            checked={showPasswords}
            onChange={(e) => setShowPasswords(e.target.checked)}
          />
          <span>Show passwords</span>
        </label>
      </div>

      <div className="fn-password-form__actions">
        <button
          type="submit"
          className="fn-password-form__button"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Updating...' : 'Update Password'}
        </button>
      </div>
    </form>
  );
}

function getPasswordStrength(password: string, minLength: number): {
  level: 'weak' | 'fair' | 'good' | 'strong';
  label: string;
  percent: number;
} {
  if (!password) {
    return { level: 'weak', label: 'Weak', percent: 0 };
  }

  let score = 0;

  // Length
  if (password.length >= minLength) score += 1;
  if (password.length >= 12) score += 1;

  // Character types
  if (/[a-z]/.test(password)) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[^a-zA-Z0-9]/.test(password)) score += 1;

  if (score <= 2) {
    return { level: 'weak', label: 'Weak', percent: 25 };
  } else if (score <= 3) {
    return { level: 'fair', label: 'Fair', percent: 50 };
  } else if (score <= 4) {
    return { level: 'good', label: 'Good', percent: 75 };
  } else {
    return { level: 'strong', label: 'Strong', percent: 100 };
  }
}

// Named export
export { PasswordForm };
