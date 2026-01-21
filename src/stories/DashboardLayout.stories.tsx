import type { Meta, StoryObj } from '@storybook/react';
import DashboardLayout, { NavSection } from '../components/layout/DashboardLayout';
import '../components/layout/DashboardLayout.css';
import '../components/Monogram.css';

// Custom icons for navigation
const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const BookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const CreditCardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);

const SettingsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const HelpIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const defaultNavigation: NavSection[] = [
  {
    items: [
      { id: 'dashboard', label: 'Dashboard', href: '/dashboard', icon: <HomeIcon /> },
      { id: 'methodologies', label: 'Methodologies', href: '/methodologies', icon: <BookIcon />, badge: '502' },
      { id: 'favorites', label: 'Favorites', href: '/favorites', icon: <StarIcon /> },
    ],
  },
  {
    title: 'Account',
    items: [
      { id: 'profile', label: 'Profile', href: '/profile', icon: <UserIcon /> },
      { id: 'billing', label: 'Billing', href: '/billing', icon: <CreditCardIcon /> },
      { id: 'settings', label: 'Settings', href: '/settings', icon: <SettingsIcon /> },
    ],
  },
  {
    title: 'Support',
    items: [
      { id: 'help', label: 'Help Center', href: '/help', icon: <HelpIcon /> },
    ],
  },
];

const meta: Meta<typeof DashboardLayout> = {
  title: 'FAION/Layout/DashboardLayout',
  component: DashboardLayout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Layout for authenticated dashboard pages.

## Features
- Sidebar navigation with sections
- Header with user avatar and breadcrumbs
- Collapsible sidebar on mobile
- Badge support for nav items
- Custom icons support

## Use Cases
- User dashboard
- Methodology library
- Settings pages
- Billing management
- Profile pages
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    activeNavId: {
      control: 'select',
      options: ['dashboard', 'methodologies', 'favorites', 'profile', 'billing', 'settings', 'help'],
      description: 'Currently active navigation item',
    },
    onNavigate: { action: 'navigate' },
    onUserMenuClick: { action: 'user-menu-click' },
    onLogoClick: { action: 'logo-click' },
  },
};

export default meta;
type Story = StoryObj<typeof DashboardLayout>;

export const Default: Story = {
  args: {
    navigation: defaultNavigation,
    activeNavId: 'dashboard',
    user: {
      name: 'Ruslan Faion',
      email: 'ruslan@faion.net',
      initials: 'RF',
    },
    breadcrumbs: [
      { label: 'Dashboard' },
    ],
    children: (
      <div>
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '32px', color: '#1C1C1E', margin: '0 0 8px 0' }}>
          Welcome back, Ruslan
        </h1>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#4A4A4A', margin: '0 0 32px 0' }}>
          Here's what's happening with your account today.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {['Methodologies', 'Favorites', 'Progress'].map((title) => (
            <div key={title} style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '8px', padding: '24px' }}>
              <p style={{ fontFamily: 'Inter', fontSize: '12px', color: '#4A4A4A', margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{title}</p>
              <p style={{ fontFamily: 'Georgia', fontSize: '36px', color: '#1C1C1E', margin: 0 }}>{Math.floor(Math.random() * 500)}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
};

export const MethodologiesPage: Story = {
  name: 'Methodologies Page',
  args: {
    navigation: defaultNavigation,
    activeNavId: 'methodologies',
    user: {
      name: 'Ruslan Faion',
      email: 'ruslan@faion.net',
      initials: 'RF',
    },
    breadcrumbs: [
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Methodologies' },
    ],
    children: (
      <div>
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '32px', color: '#1C1C1E', margin: '0 0 24px 0' }}>
          Methodologies
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {['SDD Workflow', 'RICE Prioritization', 'User Story Mapping', 'RAG Pipeline Design'].map((title) => (
            <div key={title} style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '8px', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: 'Inter', fontSize: '14px', color: '#1C1C1E' }}>{title}</span>
              <button style={{ padding: '8px 16px', backgroundColor: 'transparent', border: '1px solid #E5E5E0', borderRadius: '6px', fontFamily: 'Inter', fontSize: '12px', cursor: 'pointer' }}>View</button>
            </div>
          ))}
        </div>
      </div>
    ),
  },
};

export const SettingsPage: Story = {
  name: 'Settings Page',
  args: {
    navigation: defaultNavigation,
    activeNavId: 'settings',
    user: {
      name: 'Ruslan Faion',
      email: 'ruslan@faion.net',
      initials: 'RF',
    },
    breadcrumbs: [
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Account', href: '/account' },
      { label: 'Settings' },
    ],
    children: (
      <div style={{ maxWidth: '600px' }}>
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '32px', color: '#1C1C1E', margin: '0 0 24px 0' }}>
          Settings
        </h1>
        <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '8px', padding: '24px' }}>
          <h2 style={{ fontFamily: 'Inter', fontSize: '14px', fontWeight: '600', color: '#1C1C1E', margin: '0 0 16px 0' }}>Notifications</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['Email notifications', 'Product updates', 'New methodologies'].map((label) => (
              <label key={label} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontFamily: 'Inter', fontSize: '14px', color: '#4A4A4A' }}>
                <input type="checkbox" defaultChecked />
                {label}
              </label>
            ))}
          </div>
        </div>
      </div>
    ),
  },
};

export const WithoutUser: Story = {
  name: 'Without User Info',
  args: {
    navigation: defaultNavigation,
    activeNavId: 'dashboard',
    breadcrumbs: [
      { label: 'Dashboard' },
    ],
    children: (
      <div>
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '32px', color: '#1C1C1E', margin: '0 0 24px 0' }}>
          Dashboard
        </h1>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#4A4A4A' }}>
          Content area without user info in header.
        </p>
      </div>
    ),
  },
};

export const MobileView: Story = {
  name: 'Mobile View',
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'On mobile, the sidebar is hidden by default. Click the hamburger menu to reveal it.',
      },
    },
  },
  args: {
    navigation: defaultNavigation,
    activeNavId: 'dashboard',
    user: {
      name: 'Ruslan Faion',
      email: 'ruslan@faion.net',
      initials: 'RF',
    },
    breadcrumbs: [
      { label: 'Dashboard' },
    ],
    children: (
      <div>
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '28px', color: '#1C1C1E', margin: '0 0 16px 0' }}>
          Dashboard
        </h1>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#4A4A4A' }}>
          Click the menu button to open the sidebar.
        </p>
      </div>
    ),
  },
};
