import { useState, useEffect } from 'react';
import './Header.css';
import Monogram from './Monogram';

export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

export interface HeaderProps {
  /** Navigation links */
  links?: NavLink[];
  /** Current active page */
  currentPage?: string;
  /** Callback when nav item clicked */
  onNavigate?: (href: string) => void;
  /** Show login button */
  showLogin?: boolean;
  /** CTA button text */
  ctaText?: string;
  /** Callback when CTA clicked */
  onCtaClick?: () => void;
  /** Callback when login clicked */
  onLoginClick?: () => void;
}

// Icons
const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const defaultLinks: NavLink[] = [
  { label: 'Methodologies', href: '/methodologies' },
  { label: 'AI Agent', href: '/agent' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Docs', href: '/docs' },
];

export default function Header({
  links = defaultLinks,
  currentPage = '',
  onNavigate,
  showLogin = true,
  ctaText = 'Get Started',
  onCtaClick,
  onLoginClick,
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (href: string) => {
    onNavigate?.(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`fn-header ${isScrolled ? 'fn-header--scrolled' : ''}`}>
        <nav className="fn-header__nav">
          {/* Logo - Left Side */}
          <Monogram size="medium" onClick={() => handleNavigate('/')} />

          {/* Navigation Links - Center */}
          <div className="fn-header__links">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavigate(link.href)}
                className={`fn-header__link ${
                  currentPage === link.href || link.active ? 'fn-header__link--active' : ''
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Auth buttons - Right Side */}
          <div className="fn-header__auth">
            {showLogin && (
              <button className="fn-header__login" onClick={onLoginClick}>
                Log In
              </button>
            )}
            <button className="fn-header__cta" onClick={onCtaClick}>
              {ctaText}
            </button>

            {/* Mobile menu button */}
            <button
              className="fn-header__menu-btn"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <MenuIcon />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div className={`fn-mobile-menu ${isMobileMenuOpen ? 'fn-mobile-menu--open' : ''}`}>
        <div className="fn-mobile-menu__header">
          <Monogram size="medium" onClick={() => handleNavigate('/')} />
          <button
            className="fn-mobile-menu__close"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>
        </div>

        <nav className="fn-mobile-menu__nav">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavigate(link.href)}
              className={`fn-mobile-menu__link ${
                currentPage === link.href || link.active ? 'fn-mobile-menu__link--active' : ''
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="fn-mobile-menu__footer">
          <button className="fn-mobile-menu__cta" onClick={onCtaClick}>
            {ctaText}
          </button>
          {showLogin && (
            <button className="fn-mobile-menu__login" onClick={onLoginClick}>
              Log In
            </button>
          )}
        </div>
      </div>
    </>
  );
}

// Named export for composition
export { Header };
