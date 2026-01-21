import './RoleBadge.css';

export interface RoleBadgeProps {
  /** Member role */
  role: 'owner' | 'admin' | 'member';
  /** Additional class name */
  className?: string;
}

/**
 * RoleBadge - Displays team member role
 *
 * Color-coded badge for owner/admin/member roles.
 */
export default function RoleBadge({
  role,
  className = '',
}: RoleBadgeProps) {
  const classes = [
    'fn-role-badge',
    `fn-role-badge--${role}`,
    className,
  ].filter(Boolean).join(' ');

  const labels: Record<string, string> = {
    owner: 'Owner',
    admin: 'Admin',
    member: 'Member',
  };

  return (
    <span className={classes}>
      {labels[role]}
    </span>
  );
}

// Named export
export { RoleBadge };
