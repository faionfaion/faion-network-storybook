import { useState, useRef, useEffect } from 'react';
import './MemberActionsDropdown.css';

export interface MemberActionsDropdownProps {
  /** Member ID */
  memberId: string;
  /** Member role */
  memberRole: 'admin' | 'member';
  /** Handler for role change */
  onChangeRole: (role: 'admin' | 'member') => void;
  /** Handler for removing member */
  onRemove: () => void;
  /** Whether dropdown is disabled */
  disabled?: boolean;
  /** Additional class name */
  className?: string;
}

/**
 * MemberActionsDropdown - Actions menu for team members
 *
 * Dropdown menu with role change and remove actions.
 */
export default function MemberActionsDropdown({
  memberId,
  memberRole,
  onChangeRole,
  onRemove,
  disabled = false,
  className = '',
}: MemberActionsDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const classes = [
    'fn-member-actions',
    disabled ? 'fn-member-actions--disabled' : '',
    className,
  ].filter(Boolean).join(' ');

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleRoleChange = (role: 'admin' | 'member') => {
    onChangeRole(role);
    setIsOpen(false);
  };

  const handleRemove = () => {
    onRemove();
    setIsOpen(false);
  };

  return (
    <div className={classes} ref={dropdownRef}>
      <button
        type="button"
        className="fn-member-actions__trigger"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label={`Actions for member ${memberId}`}
      >
        <MoreIcon />
      </button>

      {isOpen && (
        <div className="fn-member-actions__menu" role="menu">
          <div className="fn-member-actions__section">
            <span className="fn-member-actions__section-label">Change Role</span>
            <button
              type="button"
              className={`fn-member-actions__item ${memberRole === 'admin' ? 'fn-member-actions__item--active' : ''}`}
              onClick={() => handleRoleChange('admin')}
              role="menuitem"
            >
              <span>Admin</span>
              {memberRole === 'admin' && <CheckIcon />}
            </button>
            <button
              type="button"
              className={`fn-member-actions__item ${memberRole === 'member' ? 'fn-member-actions__item--active' : ''}`}
              onClick={() => handleRoleChange('member')}
              role="menuitem"
            >
              <span>Member</span>
              {memberRole === 'member' && <CheckIcon />}
            </button>
          </div>
          <div className="fn-member-actions__divider" />
          <button
            type="button"
            className="fn-member-actions__item fn-member-actions__item--danger"
            onClick={handleRemove}
            role="menuitem"
          >
            Remove from team
          </button>
        </div>
      )}
    </div>
  );
}

function MoreIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="19" r="1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

// Named export
export { MemberActionsDropdown };
