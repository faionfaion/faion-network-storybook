import { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import '../Header.css';
import '../Footer.css';
import '../Monogram.css';
import './LegalPageLayout.css';

export interface TableOfContentsItem {
  id: string;
  title: string;
  level?: 1 | 2;
}

export interface LegalPageLayoutProps {
  /** Page title */
  title: string;
  /** Last updated date */
  lastUpdated?: string;
  /** Table of contents items */
  tableOfContents?: TableOfContentsItem[];
  /** Main content */
  children: ReactNode;
  /** Callback when navigation link clicked */
  onNavigate?: (href: string) => void;
}

/**
 * LegalPageLayout - Typography-focused layout for legal pages
 *
 * Used for: Terms of Service, Privacy Policy, Cookie Policy
 * Features:
 * - Header and Footer included
 * - Content area max-width for readability
 * - Typography optimized for long-form reading
 * - Last updated date display
 * - Table of contents support
 */
export default function LegalPageLayout({
  title,
  lastUpdated,
  tableOfContents,
  children,
  onNavigate,
}: LegalPageLayoutProps) {
  return (
    <div className="fn-legal-layout">
      <Header onNavigate={onNavigate} />

      <main className="fn-legal-layout__main">
        <article className="fn-legal-layout__article">
          {/* Header */}
          <header className="fn-legal-layout__header">
            <h1 className="fn-legal-layout__title">{title}</h1>
            {lastUpdated && (
              <p className="fn-legal-layout__updated">
                Last updated: {lastUpdated}
              </p>
            )}
          </header>

          {/* Table of Contents */}
          {tableOfContents && tableOfContents.length > 0 && (
            <nav className="fn-legal-layout__toc" aria-label="Table of contents">
              <h2 className="fn-legal-layout__toc-title">Contents</h2>
              <ul className="fn-legal-layout__toc-list">
                {tableOfContents.map((item) => (
                  <li
                    key={item.id}
                    className={`fn-legal-layout__toc-item fn-legal-layout__toc-item--level-${item.level || 1}`}
                  >
                    <a href={`#${item.id}`} className="fn-legal-layout__toc-link">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {/* Content */}
          <div className="fn-legal-layout__content">
            {children}
          </div>
        </article>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}

// Named export
export { LegalPageLayout };
