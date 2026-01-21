import './NotificationSettings.css';

export interface NotificationPreferences {
  email_updates: boolean;
  email_marketing: boolean;
  email_product: boolean;
  email_security: boolean;
}

export interface NotificationSettingsProps {
  /** Current notification preferences */
  preferences: NotificationPreferences;
  /** Change handler */
  onChange: (preferences: NotificationPreferences) => void;
  /** Additional class name */
  className?: string;
}

/**
 * NotificationSettings - Email notification preferences
 *
 * Allows users to manage their email notification preferences.
 */
export default function NotificationSettings({
  preferences,
  onChange,
  className = '',
}: NotificationSettingsProps) {
  const classes = ['fn-notification-settings', className].filter(Boolean).join(' ');

  const handleChange = (key: keyof NotificationPreferences) => {
    onChange({
      ...preferences,
      [key]: !preferences[key],
    });
  };

  const settings = [
    {
      key: 'email_updates' as const,
      label: 'Product Updates',
      description: 'New features, improvements, and platform updates.',
    },
    {
      key: 'email_marketing' as const,
      label: 'Marketing & Promotions',
      description: 'Special offers, discounts, and promotional content.',
    },
    {
      key: 'email_product' as const,
      label: 'New Content',
      description: 'New methodologies, articles, and learning resources.',
    },
    {
      key: 'email_security' as const,
      label: 'Security Alerts',
      description: 'Account security notifications and login alerts.',
      disabled: true,
      hint: 'Required for account security',
    },
  ];

  return (
    <div className={classes}>
      <div className="fn-notification-settings__header">
        <h3 className="fn-notification-settings__title">Email Notifications</h3>
        <p className="fn-notification-settings__description">
          Choose which emails you'd like to receive from us.
        </p>
      </div>

      <div className="fn-notification-settings__list">
        {settings.map((setting) => (
          <div key={setting.key} className="fn-notification-settings__item">
            <div className="fn-notification-settings__item-content">
              <span className="fn-notification-settings__item-label">{setting.label}</span>
              <span className="fn-notification-settings__item-description">
                {setting.description}
              </span>
              {setting.hint && (
                <span className="fn-notification-settings__item-hint">{setting.hint}</span>
              )}
            </div>
            <label className="fn-notification-settings__toggle">
              <input
                type="checkbox"
                checked={preferences[setting.key]}
                onChange={() => handleChange(setting.key)}
                disabled={setting.disabled}
              />
              <span className="fn-notification-settings__toggle-track">
                <span className="fn-notification-settings__toggle-thumb" />
              </span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

// Named export
export { NotificationSettings };
