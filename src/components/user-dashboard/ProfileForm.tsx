import { useState } from 'react';
import './ProfileForm.css';

export interface ProfileData {
  name: string;
  email: string;
  jobTitle?: string;
  company?: string;
  bio?: string;
  avatar?: string;
}

export interface ProfileFormProps {
  /** Initial profile data */
  initialData: ProfileData;
  /** Submit handler */
  onSubmit: (data: ProfileData) => Promise<void>;
  /** Cancel handler */
  onCancel?: () => void;
  /** Additional class name */
  className?: string;
}

/**
 * ProfileForm - User profile editing form
 *
 * Allows users to update their profile information.
 */
export default function ProfileForm({
  initialData,
  onSubmit,
  onCancel,
  className = '',
}: ProfileFormProps) {
  const [formData, setFormData] = useState<ProfileData>(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const classes = ['fn-profile-form', className].filter(Boolean).join(' ');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await onSubmit(formData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update profile');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={classes} onSubmit={handleSubmit}>
      <div className="fn-profile-form__header">
        <h3 className="fn-profile-form__title">Profile Information</h3>
        <p className="fn-profile-form__description">
          Update your personal information and how others see you.
        </p>
      </div>

      {error && (
        <div className="fn-profile-form__error" role="alert">
          {error}
        </div>
      )}

      <div className="fn-profile-form__fields">
        <div className="fn-profile-form__field">
          <label htmlFor="profile-name" className="fn-profile-form__label">
            Full Name <span className="fn-profile-form__required">*</span>
          </label>
          <input
            type="text"
            id="profile-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="fn-profile-form__input"
            required
          />
        </div>

        <div className="fn-profile-form__field">
          <label htmlFor="profile-email" className="fn-profile-form__label">
            Email <span className="fn-profile-form__required">*</span>
          </label>
          <input
            type="email"
            id="profile-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="fn-profile-form__input"
            required
          />
        </div>

        <div className="fn-profile-form__row">
          <div className="fn-profile-form__field">
            <label htmlFor="profile-job-title" className="fn-profile-form__label">
              Job Title
            </label>
            <input
              type="text"
              id="profile-job-title"
              name="jobTitle"
              value={formData.jobTitle || ''}
              onChange={handleChange}
              className="fn-profile-form__input"
              placeholder="e.g., Software Engineer"
            />
          </div>

          <div className="fn-profile-form__field">
            <label htmlFor="profile-company" className="fn-profile-form__label">
              Company
            </label>
            <input
              type="text"
              id="profile-company"
              name="company"
              value={formData.company || ''}
              onChange={handleChange}
              className="fn-profile-form__input"
              placeholder="e.g., Acme Inc."
            />
          </div>
        </div>

        <div className="fn-profile-form__field">
          <label htmlFor="profile-bio" className="fn-profile-form__label">
            Bio
          </label>
          <textarea
            id="profile-bio"
            name="bio"
            value={formData.bio || ''}
            onChange={handleChange}
            className="fn-profile-form__textarea"
            rows={3}
            placeholder="Tell us a bit about yourself..."
          />
          <span className="fn-profile-form__hint">
            {formData.bio?.length || 0}/200 characters
          </span>
        </div>
      </div>

      <div className="fn-profile-form__actions">
        {onCancel && (
          <button
            type="button"
            className="fn-profile-form__button fn-profile-form__button--secondary"
            onClick={onCancel}
            disabled={isSubmitting}
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          className="fn-profile-form__button fn-profile-form__button--primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </form>
  );
}

// Named export
export { ProfileForm };
