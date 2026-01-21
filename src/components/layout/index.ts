/**
 * Layout Components
 * Faion Network Design System
 */

export { default as MinimalLayout, MinimalLayout as MinimalLayoutComponent } from './MinimalLayout';
export type { MinimalLayoutProps } from './MinimalLayout';

export { default as LegalPageLayout, LegalPageLayout as LegalPageLayoutComponent } from './LegalPageLayout';
export type { LegalPageLayoutProps, TableOfContentsItem } from './LegalPageLayout';

export { default as DashboardLayout, DashboardLayout as DashboardLayoutComponent } from './DashboardLayout';
export type {
  DashboardLayoutProps,
  NavItem,
  NavSection,
  BreadcrumbItem,
  UserInfo
} from './DashboardLayout';

export { default as LanguageSelector, LanguageSelector as LanguageSelectorComponent, DEFAULT_LANGUAGES } from './LanguageSelector';
export type { LanguageSelectorProps, Language, LanguageCode } from './LanguageSelector';
