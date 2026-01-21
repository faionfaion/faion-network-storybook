import { useState, ReactNode } from 'react';
import Monogram from '../Monogram';
import '../Monogram.css';
import './DashboardLayout.css';

export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon?: ReactNode;
  badge?: string;
}

export interface NavSection {
  title?: string;
  items: NavItem[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface UserInfo {
  name: string;
  email: string;
  avatarUrl?: string;
  initials?: string;
}

export interface DashboardLayoutProps {
  /** Navigation sections */
  navigation: NavSection[];
  /** Current active nav item id */
  activeNavId?: string;
  /** Breadcrumbs */
  breadcrumbs?: BreadcrumbItem[];
  /** User info for header */
  user?: UserInfo;
  /** Main content */
  children: ReactNode;
  /** Callback when nav item clicked */
  onNavigate?: (href: string) => void;
  /** Callback when user menu clicked */
  onUserMenuClick?: () => void;
  /** Callback when logo clicked */
  onLogoClick?: () => void;
}

// Default icons
const DashboardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="7" height="9" rx="1" />
    <rect x="14" y="3" width="7" height="5" rx="1" />
    <rect x="14" y="12" width="7" height="9" rx="1" />
    <rect x="3" y="16" width="7" height="5" rx="1" />
  </svg>
);

const ChevronIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

/**
 * DashboardLayout - Layout for authenticated dashboard pages
 *
 * Features:
 * - Sidebar navigation component
 * - Header with user avatar/name
 * - Collapsible sidebar on mobile
 * - Proper content area spacing
 * - Breadcrumbs support
 */
export default function DashboardLayout({
  navigation,
  activeNavId,
  breadcrumbs,
  user,
  children,
  onNavigate,
  onUserMenuClick,
  onLogoClick,
}: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleNavClick = (href: string) => {
    onNavigate?.(href);
    setIsSidebarOpen(false);
  };

  return (
    <div className="fn-dashboard-layout">
      {/* Sidebar */}
      <aside className={`fn-dashboard-sidebar ${isSidebarOpen ? 'fn-dashboard-sidebar--open' : ''}`}>
        <div className="fn-dashboard-sidebar__header">
          <Monogram size="medium" onClick={onLogoClick} />
          <button
            className="fn-dashboard-sidebar__close"
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            <CloseIcon />
          </button>
        </div>

        <nav className="fn-dashboard-sidebar__nav">
          {navigation.map((section, sectionIndex) => (
            <div key={sectionIndex} className="fn-dashboard-sidebar__section">
              {section.title && (
                <h3 className="fn-dashboard-sidebar__section-title">{section.title}</h3>
              )}
              <ul className="fn-dashboard-sidebar__list">
                {section.items.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className={`fn-dashboard-sidebar__link ${
                        activeNavId === item.id ? 'fn-dashboard-sidebar__link--active' : ''
                      }`}
                    >
                      <span className="fn-dashboard-sidebar__link-icon">
                        {item.icon || <DashboardIcon />}
                      </span>
                      <span className="fn-dashboard-sidebar__link-label">{item.label}</span>
                      {item.badge && (
                        <span className="fn-dashboard-sidebar__link-badge">{item.badge}</span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Area */}
      <div className="fn-dashboard-main">
        {/* Header */}
        <header className="fn-dashboard-header">
          <div className="fn-dashboard-header__left">
            <button
              className="fn-dashboard-header__menu-btn"
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Open menu"
            >
              <MenuIcon />
            </button>

            {/* Breadcrumbs */}
            {breadcrumbs && breadcrumbs.length > 0 && (
              <nav className="fn-dashboard-breadcrumbs" aria-label="Breadcrumb">
                <ol className="fn-dashboard-breadcrumbs__list">
                  {breadcrumbs.map((item, index) => (
                    <li key={index} className="fn-dashboard-breadcrumbs__item">
                      {index > 0 && (
                        <span className="fn-dashboard-breadcrumbs__separator">
                          <ChevronIcon />
                        </span>
                      )}
                      {item.href ? (
                        <button
                          onClick={() => onNavigate?.(item.href!)}
                          className="fn-dashboard-breadcrumbs__link"
                        >
                          {item.label}
                        </button>
                      ) : (
                        <span className="fn-dashboard-breadcrumbs__current">{item.label}</span>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            )}
          </div>

          {/* User */}
          {user && (
            <button className="fn-dashboard-user" onClick={onUserMenuClick}>
              <div className="fn-dashboard-user__avatar">
                {user.avatarUrl ? (
                  <img src={user.avatarUrl} alt={user.name} />
                ) : (
                  <span>{user.initials || user.name.charAt(0)}</span>
                )}
              </div>
              <div className="fn-dashboard-user__info">
                <span className="fn-dashboard-user__name">{user.name}</span>
                <span className="fn-dashboard-user__email">{user.email}</span>
              </div>
            </button>
          )}
        </header>

        {/* Content */}
        <main className="fn-dashboard-content">
          {children}
        </main>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fn-dashboard-overlay"
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
}

// Named export
export { DashboardLayout };
