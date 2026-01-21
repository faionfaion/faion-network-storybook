import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Checkbox } from '../components/ui/checkbox';
import { Switch } from '../components/ui/switch';
import '../components/ui/Checkbox.css';

const meta: Meta<typeof Checkbox> = {
  title: 'FAION/Core UI/Checkbox & Switch',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Checkbox and Switch components following the Faion "Digital Journal" aesthetic.

## Features
- Taupe Grey border (unchecked)
- Deep Burgundy fill (checked)
- Burgundy focus ring for accessibility
- Size variants (small, default, large)
- With label and description patterns
- Disabled states

## Components
- **Checkbox**: For multiple selections
- **Switch**: For on/off toggles
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

// Check icon component
const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// ========== CHECKBOX ==========

export const CheckboxDefault: StoryObj = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <div
        className={`fn-checkbox ${checked ? 'fn-checkbox--checked' : ''}`}
        onClick={() => setChecked(!checked)}
        role="checkbox"
        aria-checked={checked}
        tabIndex={0}
      >
        {checked && (
          <span className="fn-checkbox__indicator">
            <CheckIcon />
          </span>
        )}
      </div>
    );
  },
};

export const CheckboxChecked: StoryObj = {
  render: () => (
    <div className="fn-checkbox fn-checkbox--checked" role="checkbox" aria-checked="true" tabIndex={0}>
      <span className="fn-checkbox__indicator">
        <CheckIcon />
      </span>
    </div>
  ),
};

export const CheckboxDisabled: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <div className="fn-checkbox" role="checkbox" aria-checked="false" aria-disabled="true" style={{ opacity: 0.5, cursor: 'not-allowed' }}>
      </div>
      <div className="fn-checkbox fn-checkbox--checked" role="checkbox" aria-checked="true" aria-disabled="true" style={{ opacity: 0.5, cursor: 'not-allowed' }}>
        <span className="fn-checkbox__indicator">
          <CheckIcon />
        </span>
      </div>
    </div>
  ),
};

export const CheckboxWithLabel: StoryObj = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <label className="fn-checkbox-field" onClick={() => setChecked(!checked)}>
        <div
          className={`fn-checkbox ${checked ? 'fn-checkbox--checked' : ''}`}
          role="checkbox"
          aria-checked={checked}
          tabIndex={0}
        >
          {checked && (
            <span className="fn-checkbox__indicator">
              <CheckIcon />
            </span>
          )}
        </div>
        <span className="fn-checkbox-field__label">Accept terms and conditions</span>
      </label>
    );
  },
};

export const CheckboxWithDescription: StoryObj = {
  render: () => {
    const [checked, setChecked] = useState(true);
    return (
      <div style={{ width: '300px' }}>
        <label className="fn-checkbox-field" onClick={() => setChecked(!checked)}>
          <div
            className={`fn-checkbox ${checked ? 'fn-checkbox--checked' : ''}`}
            role="checkbox"
            aria-checked={checked}
            tabIndex={0}
          >
            {checked && (
              <span className="fn-checkbox__indicator">
                <CheckIcon />
              </span>
            )}
          </div>
          <div className="fn-checkbox-field__content">
            <span className="fn-checkbox-field__label">Email notifications</span>
            <span className="fn-checkbox-field__description">Receive email updates about new features and content.</span>
          </div>
        </label>
      </div>
    );
  },
};

export const CheckboxGroup: StoryObj = {
  render: () => {
    const [selected, setSelected] = useState<string[]>(['email']);
    const toggle = (id: string) => {
      setSelected(prev =>
        prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
      );
    };

    const items = [
      { id: 'email', label: 'Email notifications' },
      { id: 'sms', label: 'SMS notifications' },
      { id: 'push', label: 'Push notifications' },
    ];

    return (
      <div className="fn-checkbox-group" style={{ width: '250px' }}>
        <div className="fn-checkbox-group__label">Notification Preferences</div>
        {items.map(item => (
          <label key={item.id} className="fn-checkbox-field" onClick={() => toggle(item.id)}>
            <div
              className={`fn-checkbox ${selected.includes(item.id) ? 'fn-checkbox--checked' : ''}`}
              role="checkbox"
              aria-checked={selected.includes(item.id)}
              tabIndex={0}
            >
              {selected.includes(item.id) && (
                <span className="fn-checkbox__indicator">
                  <CheckIcon />
                </span>
              )}
            </div>
            <span className="fn-checkbox-field__label">{item.label}</span>
          </label>
        ))}
      </div>
    );
  },
};

// ========== SWITCH ==========

export const SwitchDefault: StoryObj = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <div
        className={`fn-switch ${checked ? 'fn-switch--checked' : ''}`}
        onClick={() => setChecked(!checked)}
        role="switch"
        aria-checked={checked}
        tabIndex={0}
      >
        <span className="fn-switch__thumb" />
      </div>
    );
  },
};

export const SwitchChecked: StoryObj = {
  render: () => (
    <div className="fn-switch fn-switch--checked" role="switch" aria-checked="true" tabIndex={0}>
      <span className="fn-switch__thumb" />
    </div>
  ),
};

export const SwitchDisabled: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <div className="fn-switch" role="switch" aria-checked="false" aria-disabled="true" style={{ opacity: 0.5, cursor: 'not-allowed' }}>
        <span className="fn-switch__thumb" />
      </div>
      <div className="fn-switch fn-switch--checked" role="switch" aria-checked="true" aria-disabled="true" style={{ opacity: 0.5, cursor: 'not-allowed' }}>
        <span className="fn-switch__thumb" />
      </div>
    </div>
  ),
};

export const SwitchWithLabel: StoryObj = {
  render: () => {
    const [checked, setChecked] = useState(true);
    return (
      <div style={{ width: '300px' }}>
        <label className="fn-switch-field" onClick={() => setChecked(!checked)}>
          <div className="fn-switch-field__content">
            <span className="fn-switch-field__label">Dark mode</span>
            <span className="fn-switch-field__description">Switch between light and dark themes.</span>
          </div>
          <div
            className={`fn-switch ${checked ? 'fn-switch--checked' : ''}`}
            role="switch"
            aria-checked={checked}
            tabIndex={0}
          >
            <span className="fn-switch__thumb" />
          </div>
        </label>
      </div>
    );
  },
};

// ========== SIZE VARIANTS ==========

export const CheckboxSizes: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
      <div>
        <p className="fn-story-label">SMALL</p>
        <div className="fn-checkbox fn-checkbox--small fn-checkbox--checked" role="checkbox" aria-checked="true" tabIndex={0}>
          <span className="fn-checkbox__indicator">
            <CheckIcon />
          </span>
        </div>
      </div>
      <div>
        <p className="fn-story-label">DEFAULT</p>
        <div className="fn-checkbox fn-checkbox--checked" role="checkbox" aria-checked="true" tabIndex={0}>
          <span className="fn-checkbox__indicator">
            <CheckIcon />
          </span>
        </div>
      </div>
      <div>
        <p className="fn-story-label">LARGE</p>
        <div className="fn-checkbox fn-checkbox--large fn-checkbox--checked" role="checkbox" aria-checked="true" tabIndex={0}>
          <span className="fn-checkbox__indicator">
            <CheckIcon />
          </span>
        </div>
      </div>
    </div>
  ),
  decorators: [
    (Story) => (
      <>
        <style>{`
          .fn-story-label {
            font-family: Inter, sans-serif;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: #4A4A4A;
            margin-bottom: 8px;
            font-weight: 500;
          }
        `}</style>
        <Story />
      </>
    ),
  ],
};

export const SwitchSizes: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
      <div>
        <p className="fn-story-label">SMALL</p>
        <div className="fn-switch fn-switch--small fn-switch--checked" role="switch" aria-checked="true" tabIndex={0}>
          <span className="fn-switch__thumb" />
        </div>
      </div>
      <div>
        <p className="fn-story-label">DEFAULT</p>
        <div className="fn-switch fn-switch--checked" role="switch" aria-checked="true" tabIndex={0}>
          <span className="fn-switch__thumb" />
        </div>
      </div>
      <div>
        <p className="fn-story-label">LARGE</p>
        <div className="fn-switch fn-switch--large fn-switch--checked" role="switch" aria-checked="true" tabIndex={0}>
          <span className="fn-switch__thumb" />
        </div>
      </div>
    </div>
  ),
  decorators: [
    (Story) => (
      <>
        <style>{`
          .fn-story-label {
            font-family: Inter, sans-serif;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: #4A4A4A;
            margin-bottom: 8px;
            font-weight: 500;
          }
        `}</style>
        <Story />
      </>
    ),
  ],
};

// ========== SHOWCASE ==========

export const AllStates: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '18px', marginBottom: '16px', color: '#1C1C1E' }}>Checkbox States</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div>
            <p className="fn-story-label">UNCHECKED</p>
            <div className="fn-checkbox" role="checkbox" aria-checked="false" tabIndex={0} />
          </div>
          <div>
            <p className="fn-story-label">CHECKED</p>
            <div className="fn-checkbox fn-checkbox--checked" role="checkbox" aria-checked="true" tabIndex={0}>
              <span className="fn-checkbox__indicator">
                <CheckIcon />
              </span>
            </div>
          </div>
          <div>
            <p className="fn-story-label">DISABLED</p>
            <div className="fn-checkbox" role="checkbox" aria-disabled="true" style={{ opacity: 0.5, cursor: 'not-allowed' }} />
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '18px', marginBottom: '16px', color: '#1C1C1E' }}>Switch States</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div>
            <p className="fn-story-label">OFF</p>
            <div className="fn-switch" role="switch" aria-checked="false" tabIndex={0}>
              <span className="fn-switch__thumb" />
            </div>
          </div>
          <div>
            <p className="fn-story-label">ON</p>
            <div className="fn-switch fn-switch--checked" role="switch" aria-checked="true" tabIndex={0}>
              <span className="fn-switch__thumb" />
            </div>
          </div>
          <div>
            <p className="fn-story-label">DISABLED</p>
            <div className="fn-switch" role="switch" aria-disabled="true" style={{ opacity: 0.5, cursor: 'not-allowed' }}>
              <span className="fn-switch__thumb" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  decorators: [
    (Story) => (
      <>
        <style>{`
          .fn-story-label {
            font-family: Inter, sans-serif;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: #4A4A4A;
            margin-bottom: 8px;
            font-weight: 500;
          }
        `}</style>
        <Story />
      </>
    ),
  ],
};

export const SettingsExample: StoryObj = {
  name: 'Settings Panel Example',
  render: () => {
    const [settings, setSettings] = useState({
      emailNotif: true,
      smsNotif: false,
      darkMode: false,
      autoSave: true,
    });

    const toggleSetting = (key: keyof typeof settings) => {
      setSettings(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
      <div style={{
        width: '400px',
        padding: '24px',
        backgroundColor: '#FFFFFF',
        borderRadius: '12px',
        border: '1px solid #E5E5E0'
      }}>
        <h3 style={{
          fontFamily: 'Georgia, serif',
          fontSize: '20px',
          color: '#1C1C1E',
          marginBottom: '24px'
        }}>Settings</h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <label className="fn-switch-field" onClick={() => toggleSetting('emailNotif')}>
            <div className="fn-switch-field__content">
              <span className="fn-switch-field__label">Email notifications</span>
              <span className="fn-switch-field__description">Receive updates about new content</span>
            </div>
            <div className={`fn-switch ${settings.emailNotif ? 'fn-switch--checked' : ''}`} role="switch" aria-checked={settings.emailNotif}>
              <span className="fn-switch__thumb" />
            </div>
          </label>

          <label className="fn-switch-field" onClick={() => toggleSetting('smsNotif')}>
            <div className="fn-switch-field__content">
              <span className="fn-switch-field__label">SMS notifications</span>
              <span className="fn-switch-field__description">Get important alerts via text</span>
            </div>
            <div className={`fn-switch ${settings.smsNotif ? 'fn-switch--checked' : ''}`} role="switch" aria-checked={settings.smsNotif}>
              <span className="fn-switch__thumb" />
            </div>
          </label>

          <div style={{ borderTop: '1px solid #E5E5E0', paddingTop: '20px' }}>
            <label className="fn-switch-field" onClick={() => toggleSetting('darkMode')}>
              <div className="fn-switch-field__content">
                <span className="fn-switch-field__label">Dark mode</span>
                <span className="fn-switch-field__description">Use dark theme throughout the app</span>
              </div>
              <div className={`fn-switch ${settings.darkMode ? 'fn-switch--checked' : ''}`} role="switch" aria-checked={settings.darkMode}>
                <span className="fn-switch__thumb" />
              </div>
            </label>
          </div>

          <label className="fn-switch-field" onClick={() => toggleSetting('autoSave')}>
            <div className="fn-switch-field__content">
              <span className="fn-switch-field__label">Auto-save</span>
              <span className="fn-switch-field__description">Automatically save your progress</span>
            </div>
            <div className={`fn-switch ${settings.autoSave ? 'fn-switch--checked' : ''}`} role="switch" aria-checked={settings.autoSave}>
              <span className="fn-switch__thumb" />
            </div>
          </label>
        </div>
      </div>
    );
  },
};
