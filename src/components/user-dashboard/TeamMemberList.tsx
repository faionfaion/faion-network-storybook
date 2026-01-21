import './TeamMemberList.css';

export interface TeamMember {
  id: string;
  name?: string;
  email: string;
  role: 'owner' | 'admin' | 'member';
  status: 'active' | 'pending';
  avatar?: string;
  joinedAt?: string;
}

export interface TeamMemberListProps {
  /** List of team members */
  members: TeamMember[];
  /** Current user ID (to prevent self-actions) */
  currentUserId?: string;
  /** Handler for role change */
  onChangeRole?: (memberId: string, newRole: 'admin' | 'member') => void;
  /** Handler for removing member */
  onRemove?: (memberId: string) => void;
  /** Handler for resending invite */
  onResendInvite?: (memberId: string) => void;
  /** Additional class name */
  className?: string;
}

/**
 * TeamMemberList - Displays organization team members
 *
 * Shows team members with role management and action controls.
 */
export default function TeamMemberList({
  members,
  currentUserId,
  onChangeRole,
  onRemove,
  onResendInvite,
  className = '',
}: TeamMemberListProps) {
  const classes = ['fn-team-member-list', className].filter(Boolean).join(' ');

  const roleColors: Record<string, string> = {
    owner: 'fn-team-member-list__role--owner',
    admin: 'fn-team-member-list__role--admin',
    member: 'fn-team-member-list__role--member',
  };

  return (
    <div className={classes}>
      <div className="fn-team-member-list__header">
        <h3 className="fn-team-member-list__title">Team Members</h3>
        <span className="fn-team-member-list__count">{members.length} members</span>
      </div>

      <div className="fn-team-member-list__table-wrapper">
        <table className="fn-team-member-list__table">
          <thead>
            <tr>
              <th>Member</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => {
              const isSelf = member.id === currentUserId;
              const isOwner = member.role === 'owner';
              const canManage = !isSelf && !isOwner;

              return (
                <tr key={member.id}>
                  <td>
                    <div className="fn-team-member-list__member">
                      <div className="fn-team-member-list__avatar">
                        {member.avatar ? (
                          <img src={member.avatar} alt="" />
                        ) : (
                          <span>{getInitials(member.name || member.email)}</span>
                        )}
                      </div>
                      <div className="fn-team-member-list__info">
                        <span className="fn-team-member-list__name">
                          {member.name || 'Pending'}
                          {isSelf && <span className="fn-team-member-list__you">(you)</span>}
                        </span>
                        <span className="fn-team-member-list__email">{member.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className={`fn-team-member-list__role ${roleColors[member.role]}`}>
                      {member.role.charAt(0).toUpperCase() + member.role.slice(1)}
                    </span>
                  </td>
                  <td>
                    <span className={`fn-team-member-list__status fn-team-member-list__status--${member.status}`}>
                      {member.status === 'active' ? 'Active' : 'Pending'}
                    </span>
                  </td>
                  <td>
                    <div className="fn-team-member-list__actions">
                      {canManage && member.status === 'pending' && onResendInvite && (
                        <button
                          type="button"
                          className="fn-team-member-list__action"
                          onClick={() => onResendInvite(member.id)}
                        >
                          Resend
                        </button>
                      )}
                      {canManage && onChangeRole && (
                        <select
                          className="fn-team-member-list__role-select"
                          value={member.role}
                          onChange={(e) => onChangeRole(member.id, e.target.value as 'admin' | 'member')}
                        >
                          <option value="admin">Admin</option>
                          <option value="member">Member</option>
                        </select>
                      )}
                      {canManage && onRemove && (
                        <button
                          type="button"
                          className="fn-team-member-list__action fn-team-member-list__action--danger"
                          onClick={() => onRemove(member.id)}
                        >
                          Remove
                        </button>
                      )}
                      {!canManage && (
                        <span className="fn-team-member-list__no-actions">-</span>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function getInitials(name: string): string {
  return name
    .split(/[\s@]/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || '')
    .join('');
}

// Named export
export { TeamMemberList };
