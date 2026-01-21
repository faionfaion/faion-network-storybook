import './AuthDivider.css';

export interface AuthDividerProps {
  /** Divider text */
  text?: string;
}

/**
 * AuthDivider - Separator for auth forms
 *
 * "Or continue with" style divider between form sections.
 * Follows the "Digital Journal" theme.
 */
export default function AuthDivider({ text = 'or' }: AuthDividerProps) {
  return (
    <div className="fn-auth-divider">
      <div className="fn-auth-divider__line" />
      <span className="fn-auth-divider__text">{text}</span>
      <div className="fn-auth-divider__line" />
    </div>
  );
}

// Named export
export { AuthDivider };
