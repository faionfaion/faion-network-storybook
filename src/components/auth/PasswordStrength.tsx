import { useMemo } from 'react';
import './PasswordStrength.css';

export interface PasswordStrengthProps {
  /** Password to evaluate */
  password: string;
  /** Show requirements list */
  showRequirements?: boolean;
  /** Minimum length requirement */
  minLength?: number;
}

interface StrengthResult {
  score: number;
  label: string;
  color: string;
}

interface Requirement {
  label: string;
  met: boolean;
}

/**
 * PasswordStrength - Password strength indicator
 *
 * Shows visual strength meter and requirements checklist.
 * Follows the "Digital Journal" theme.
 */
export default function PasswordStrength({
  password,
  showRequirements = true,
  minLength = 8,
}: PasswordStrengthProps) {
  const { strength, requirements } = useMemo(() => {
    const reqs: Requirement[] = [
      { label: `At least ${minLength} characters`, met: password.length >= minLength },
      { label: 'Contains uppercase letter', met: /[A-Z]/.test(password) },
      { label: 'Contains lowercase letter', met: /[a-z]/.test(password) },
      { label: 'Contains number', met: /[0-9]/.test(password) },
      { label: 'Contains special character', met: /[^A-Za-z0-9]/.test(password) },
    ];

    const metCount = reqs.filter((r) => r.met).length;
    let strengthResult: StrengthResult;

    if (password.length === 0) {
      strengthResult = { score: 0, label: '', color: 'transparent' };
    } else if (metCount <= 1) {
      strengthResult = { score: 1, label: 'Weak', color: '#dc2626' };
    } else if (metCount <= 2) {
      strengthResult = { score: 2, label: 'Fair', color: '#f59e0b' };
    } else if (metCount <= 3) {
      strengthResult = { score: 3, label: 'Good', color: '#eab308' };
    } else if (metCount === 4) {
      strengthResult = { score: 4, label: 'Strong', color: '#22c55e' };
    } else {
      strengthResult = { score: 5, label: 'Very Strong', color: '#16a34a' };
    }

    return { strength: strengthResult, requirements: reqs };
  }, [password, minLength]);

  if (password.length === 0) {
    return null;
  }

  return (
    <div className="fn-password-strength">
      {/* Strength Meter */}
      <div className="fn-password-strength__meter">
        <div className="fn-password-strength__bar">
          {[1, 2, 3, 4, 5].map((level) => (
            <div
              key={level}
              className={`fn-password-strength__segment ${level <= strength.score ? 'fn-password-strength__segment--filled' : ''}`}
              style={{
                backgroundColor: level <= strength.score ? strength.color : undefined,
              }}
            />
          ))}
        </div>
        {strength.label && (
          <span
            className="fn-password-strength__label"
            style={{ color: strength.color }}
          >
            {strength.label}
          </span>
        )}
      </div>

      {/* Requirements List */}
      {showRequirements && (
        <ul className="fn-password-strength__requirements">
          {requirements.map((req, index) => (
            <li
              key={index}
              className={`fn-password-strength__requirement ${req.met ? 'fn-password-strength__requirement--met' : ''}`}
            >
              <span className="fn-password-strength__check">
                {req.met ? (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                )}
              </span>
              <span className="fn-password-strength__text">{req.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Named export
export { PasswordStrength };
