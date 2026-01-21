import { useState } from 'react';
import './InviteModal.css';

export interface InviteModalProps {
  /** Whether modal is open */
  isOpen: boolean;
  /** Close handler */
  onClose: () => void;
  /** Invite handler */
  onInvite: (emails: string[], role: 'admin' | 'member') => Promise<void>;
  /** Available seats remaining */
  availableSeats?: number;
  /** Additional class name */
  className?: string;
}

/**
 * InviteModal - Modal for inviting team members
 *
 * Allows inviting multiple email addresses with role selection.
 */
export default function InviteModal({
  isOpen,
  onClose,
  onInvite,
  availableSeats,
  className = '',
}: InviteModalProps) {
  const [emails, setEmails] = useState('');
  const [role, setRole] = useState<'admin' | 'member'>('member');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const classes = ['fn-invite-modal', className].filter(Boolean).join(' ');

  const parseEmails = (input: string): string[] => {
    return input
      .split(/[,\n]/)
      .map((email) => email.trim().toLowerCase())
      .filter((email) => email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const parsedEmails = parseEmails(emails);

    if (parsedEmails.length === 0) {
      setError('Please enter at least one valid email address');
      return;
    }

    if (availableSeats !== undefined && parsedEmails.length > availableSeats) {
      setError(`You can only invite ${availableSeats} more member${availableSeats !== 1 ? 's' : ''}`);
      return;
    }

    setIsSubmitting(true);

    try {
      await onInvite(parsedEmails, role);
      setEmails('');
      setRole('member');
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send invitations');
    } finally {
      setIsSubmitting(false);
    }
  };

  const parsedCount = parseEmails(emails).length;

  return (
    <div className="fn-invite-modal__overlay" onClick={onClose}>
      <div
        className={classes}
        role="dialog"
        aria-modal="true"
        aria-labelledby="invite-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="fn-invite-modal__header">
          <h2 id="invite-modal-title" className="fn-invite-modal__title">
            Invite Team Members
          </h2>
          <button
            type="button"
            className="fn-invite-modal__close"
            onClick={onClose}
            aria-label="Close"
          >
            <CloseIcon />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="fn-invite-modal__content">
            {error && (
              <div className="fn-invite-modal__error" role="alert">
                {error}
              </div>
            )}

            <div className="fn-invite-modal__field">
              <label htmlFor="invite-emails" className="fn-invite-modal__label">
                Email Addresses
              </label>
              <textarea
                id="invite-emails"
                className="fn-invite-modal__textarea"
                value={emails}
                onChange={(e) => {
                  setEmails(e.target.value);
                  setError(null);
                }}
                placeholder="Enter email addresses, separated by commas or new lines"
                rows={4}
              />
              <div className="fn-invite-modal__hint">
                {parsedCount > 0 && (
                  <span>{parsedCount} valid email{parsedCount !== 1 ? 's' : ''}</span>
                )}
                {availableSeats !== undefined && (
                  <span>{availableSeats} seat{availableSeats !== 1 ? 's' : ''} available</span>
                )}
              </div>
            </div>

            <div className="fn-invite-modal__field">
              <label htmlFor="invite-role" className="fn-invite-modal__label">
                Role
              </label>
              <select
                id="invite-role"
                className="fn-invite-modal__select"
                value={role}
                onChange={(e) => setRole(e.target.value as 'admin' | 'member')}
              >
                <option value="member">Member - Can use the product</option>
                <option value="admin">Admin - Can manage team members</option>
              </select>
            </div>
          </div>

          <div className="fn-invite-modal__footer">
            <button
              type="button"
              className="fn-invite-modal__button fn-invite-modal__button--secondary"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="fn-invite-modal__button fn-invite-modal__button--primary"
              disabled={isSubmitting || parsedCount === 0}
            >
              {isSubmitting ? 'Sending...' : `Send Invite${parsedCount > 1 ? 's' : ''}`}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// Named export
export { InviteModal };
