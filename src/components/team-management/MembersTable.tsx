import './MembersTable.css';

export interface TableMember {
  id: string;
  email: string;
  name?: string;
  role: 'owner' | 'admin' | 'member';
  status: 'active' | 'pending';
  joinedAt: string;
}

export interface MembersTableProps {
  /** List of team members */
  members: TableMember[];
  /** Handler for row click */
  onRowClick?: (member: TableMember) => void;
  /** Handler for removing member */
  onRemove?: (id: string) => void;
  /** Handler for role change */
  onChangeRole?: (id: string, role: 'admin' | 'member') => void;
  /** Additional class name */
  className?: string;
}

/**
 * MembersTable - Table view of team members
 *
 * Full table layout for displaying team members with actions.
 */
export default function MembersTable({
  members,
  onRowClick,
  onRemove,
  onChangeRole,
  className = '',
}: MembersTableProps) {
  const classes = ['fn-members-table', className].filter(Boolean).join(' ');

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className={classes}>
      <table className="fn-members-table__table">
        <thead>
          <tr>
            <th>Member</th>
            <th>Role</th>
            <th>Status</th>
            <th>Joined</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr
              key={member.id}
              onClick={() => onRowClick?.(member)}
              className={onRowClick ? 'fn-members-table__row--clickable' : ''}
            >
              <td>
                <div className="fn-members-table__member">
                  <div className="fn-members-table__avatar">
                    {getInitials(member.name || member.email)}
                  </div>
                  <div className="fn-members-table__info">
                    <span className="fn-members-table__name">{member.name || 'Pending'}</span>
                    <span className="fn-members-table__email">{member.email}</span>
                  </div>
                </div>
              </td>
              <td>
                <span className={`fn-members-table__role fn-members-table__role--${member.role}`}>
                  {member.role.charAt(0).toUpperCase() + member.role.slice(1)}
                </span>
              </td>
              <td>
                <span className={`fn-members-table__status fn-members-table__status--${member.status}`}>
                  <span className="fn-members-table__status-dot" />
                  {member.status === 'active' ? 'Active' : 'Pending'}
                </span>
              </td>
              <td>
                <span className="fn-members-table__date">{formatDate(member.joinedAt)}</span>
              </td>
              <td>
                <div className="fn-members-table__actions" onClick={(e) => e.stopPropagation()}>
                  {member.role !== 'owner' && onChangeRole && (
                    <select
                      className="fn-members-table__role-select"
                      value={member.role}
                      onChange={(e) => onChangeRole(member.id, e.target.value as 'admin' | 'member')}
                    >
                      <option value="admin">Admin</option>
                      <option value="member">Member</option>
                    </select>
                  )}
                  {member.role !== 'owner' && onRemove && (
                    <button
                      type="button"
                      className="fn-members-table__remove"
                      onClick={() => onRemove(member.id)}
                    >
                      Remove
                    </button>
                  )}
                  {member.role === 'owner' && (
                    <span className="fn-members-table__no-actions">-</span>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
export { MembersTable };
