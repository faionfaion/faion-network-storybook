import './ComparisonTable.css';

export interface ComparisonTableProps {
  /** Column headers */
  headers: string[];
  /** Table rows with feature name and values */
  rows: Array<{
    feature: string;
    values: (string | boolean)[];
  }>;
  /** Additional class name */
  className?: string;
}

// Check icon
const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// X icon
const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/**
 * ComparisonTable - Feature comparison table for MDX
 *
 * Displays a comparison table with boolean (check/x) or text values.
 * Useful for plan comparisons, feature matrices, and pros/cons tables.
 */
export default function ComparisonTable({
  headers,
  rows,
  className = '',
}: ComparisonTableProps) {
  const classes = ['fn-comparison-table', className].filter(Boolean).join(' ');

  const renderValue = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <span className="fn-comparison-table__check">
          <CheckIcon />
        </span>
      ) : (
        <span className="fn-comparison-table__x">
          <XIcon />
        </span>
      );
    }
    return <span className="fn-comparison-table__text">{value}</span>;
  };

  return (
    <div className={classes}>
      <table className="fn-comparison-table__table">
        <thead>
          <tr className="fn-comparison-table__header-row">
            <th className="fn-comparison-table__header fn-comparison-table__header--feature">
              Feature
            </th>
            {headers.map((header, index) => (
              <th key={index} className="fn-comparison-table__header">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="fn-comparison-table__row">
              <td className="fn-comparison-table__cell fn-comparison-table__cell--feature">
                {row.feature}
              </td>
              {row.values.map((value, valueIndex) => (
                <td key={valueIndex} className="fn-comparison-table__cell">
                  {renderValue(value)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Named export
export { ComparisonTable };
