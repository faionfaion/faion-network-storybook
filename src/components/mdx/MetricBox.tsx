import './MetricBox.css';

export interface MetricBoxProps {
  /** Main value (number or text) */
  value: string;
  /** Label describing the metric */
  label: string;
  /** Change indicator (e.g., "+15%", "-3%") */
  change?: string;
  /** Type of change for styling */
  changeType?: 'positive' | 'negative' | 'neutral';
  /** Additional class name */
  className?: string;
}

// Arrow up icon
const ArrowUpIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 12V4M8 4l-4 4M8 4l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Arrow down icon
const ArrowDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 4v8M8 12l-4-4M8 12l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/**
 * MetricBox - Single metric display for MDX
 *
 * Displays a key metric with optional change indicator.
 * Useful for dashboards, statistics sections, and KPI displays.
 */
export default function MetricBox({
  value,
  label,
  change,
  changeType = 'neutral',
  className = '',
}: MetricBoxProps) {
  const classes = ['fn-metric-box', className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div className="fn-metric-box__value">{value}</div>
      <div className="fn-metric-box__label">{label}</div>
      {change && (
        <div className={`fn-metric-box__change fn-metric-box__change--${changeType}`}>
          {changeType === 'positive' && <ArrowUpIcon />}
          {changeType === 'negative' && <ArrowDownIcon />}
          <span>{change}</span>
        </div>
      )}
    </div>
  );
}

// Named export
export { MetricBox };
