import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CookiePreferencesModal, { CookiePreferences } from './CookiePreferencesModal';

const meta: Meta<typeof CookiePreferencesModal> = {
  title: 'Legal/CookiePreferencesModal',
  component: CookiePreferencesModal,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Modal for managing cookie consent preferences by category.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CookiePreferencesModal>;

const defaultPreferences: CookiePreferences = {
  essential: true,
  functional: false,
  analytics: false,
  marketing: false,
};

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => console.log('Closed'),
    onSave: (prefs) => console.log('Saved preferences:', prefs),
    initialPreferences: defaultPreferences,
  },
};

export const AllEnabled: Story = {
  args: {
    isOpen: true,
    onClose: () => console.log('Closed'),
    onSave: (prefs) => console.log('Saved preferences:', prefs),
    initialPreferences: {
      essential: true,
      functional: true,
      analytics: true,
      marketing: true,
    },
  },
};

export const Interactive: Story = {
  render: function InteractiveStory() {
    const [isOpen, setIsOpen] = useState(false);
    const [savedPrefs, setSavedPrefs] = useState<CookiePreferences>(defaultPreferences);

    return (
      <div style={{ padding: '40px', background: '#FAF9F6', minHeight: '400px' }}>
        <div style={{ maxWidth: '600px' }}>
          <h2 style={{ fontFamily: 'Georgia, serif', color: '#1C1C1E', marginBottom: '16px' }}>
            Cookie Settings Demo
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', color: '#4A4A4A', marginBottom: '24px' }}>
            Click the button below to open the cookie preferences modal.
          </p>
          <button
            onClick={() => setIsOpen(true)}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              padding: '10px 20px',
              background: '#5D1F2D',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Manage Cookie Preferences
          </button>

          <div style={{ marginTop: '32px', padding: '16px', background: '#FFFFFF', borderRadius: '8px' }}>
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600, color: '#1C1C1E', marginBottom: '12px' }}>
              Current Preferences:
            </h3>
            <ul style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#4A4A4A', margin: 0, paddingLeft: '20px' }}>
              <li>Essential: {savedPrefs.essential ? 'Enabled' : 'Disabled'}</li>
              <li>Functional: {savedPrefs.functional ? 'Enabled' : 'Disabled'}</li>
              <li>Analytics: {savedPrefs.analytics ? 'Enabled' : 'Disabled'}</li>
              <li>Marketing: {savedPrefs.marketing ? 'Enabled' : 'Disabled'}</li>
            </ul>
          </div>
        </div>

        <CookiePreferencesModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onSave={(prefs) => {
            setSavedPrefs(prefs);
            console.log('Saved:', prefs);
          }}
          initialPreferences={savedPrefs}
        />
      </div>
    );
  },
};
