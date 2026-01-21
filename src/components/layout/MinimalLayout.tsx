import { ReactNode } from 'react';
import Monogram from '../Monogram';
import '../Monogram.css';
import './MinimalLayout.css';

export interface MinimalLayoutProps {
  /** Content to render inside the layout */
  children: ReactNode;
  /** Max width of the content area */
  maxWidth?: 'narrow' | 'default' | 'wide';
  /** Show the monogram */
  showMonogram?: boolean;
  /** Callback when monogram clicked */
  onLogoClick?: () => void;
  /** Optional footer content */
  footer?: ReactNode;
}

/**
 * MinimalLayout - Clean centered layout for auth pages
 *
 * Used for: Login, Signup, Password Reset, Email Verification
 * Features:
 * - Centered card layout
 * - FN Monogram at top
 * - Warm Alabaster background
 * - Proper vertical centering
 * - Responsive (full-width on mobile)
 */
export default function MinimalLayout({
  children,
  maxWidth = 'default',
  showMonogram = true,
  onLogoClick,
  footer,
}: MinimalLayoutProps) {
  const maxWidthClass = {
    narrow: 'fn-minimal-layout__content--narrow',
    default: 'fn-minimal-layout__content--default',
    wide: 'fn-minimal-layout__content--wide',
  }[maxWidth];

  return (
    <div className="fn-minimal-layout">
      <main className="fn-minimal-layout__main">
        {showMonogram && (
          <div className="fn-minimal-layout__logo">
            <Monogram size="large" onClick={onLogoClick} />
          </div>
        )}

        <div className={`fn-minimal-layout__content ${maxWidthClass}`}>
          {children}
        </div>
      </main>

      {footer && (
        <footer className="fn-minimal-layout__footer">
          {footer}
        </footer>
      )}
    </div>
  );
}

// Named export
export { MinimalLayout };
