import './FeatureList.css';

export type FeatureStatus = 'included' | 'excluded' | 'limited' | 'coming';

export interface FeatureItem {
  /** Feature name/text */
  text: string;
  /** Feature status */
  status?: FeatureStatus;
  /** Tooltip text for more details */
  tooltip?: string;
  /** Limited text (e.g., "up to 3") */
  limitText?: string;
}

export interface FeatureListProps {
  /** List of features */
  features: (string | FeatureItem)[];
  /** List variant */
  variant?: 'default' | 'compact' | 'detailed';
  /** Icon style */
  iconStyle?: 'check' | 'bullet' | 'number';
  /** Max items to show before "and X more" */
  maxVisible?: number;
  /** Show expand button when truncated */
  expandable?: boolean;
  /** Column layout */
  columns?: 1 | 2;
  /** Additional class name */
  className?: string;
}

// Icons
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const MinusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const InfoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

// Normalize feature to FeatureItem
const normalizeFeature = (feature: string | FeatureItem): FeatureItem => {
  if (typeof feature === 'string') {
    return { text: feature, status: 'included' };
  }
  return { status: 'included', ...feature };
};

// Get icon for feature status
const getStatusIcon = (status: FeatureStatus, iconStyle: string, index: number) => {
  if (iconStyle === 'number') {
    return <span className="fn-feature-list__number">{index + 1}</span>;
  }

  if (iconStyle === 'bullet') {
    return <span className="fn-feature-list__bullet" />;
  }

  switch (status) {
    case 'included':
      return <CheckIcon />;
    case 'excluded':
      return <XIcon />;
    case 'limited':
      return <MinusIcon />;
    case 'coming':
      return <ClockIcon />;
    default:
      return <CheckIcon />;
  }
};

/**
 * FeatureList - Displays a list of features with check/x icons
 *
 * Used in pricing cards to show included and excluded features.
 */
export default function FeatureList({
  features,
  variant = 'default',
  iconStyle = 'check',
  maxVisible,
  expandable = false,
  columns = 1,
  className = '',
}: FeatureListProps) {
  const normalizedFeatures = features.map(normalizeFeature);
  const visibleFeatures = maxVisible ? normalizedFeatures.slice(0, maxVisible) : normalizedFeatures;
  const hiddenCount = maxVisible ? normalizedFeatures.length - maxVisible : 0;

  const classes = [
    'fn-feature-list',
    `fn-feature-list--${variant}`,
    `fn-feature-list--cols-${columns}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <ul className={classes}>
      {visibleFeatures.map((feature, index) => {
        const statusClass = `fn-feature-list__item--${feature.status}`;

        return (
          <li
            key={index}
            className={`fn-feature-list__item ${statusClass}`}
          >
            <span className={`fn-feature-list__icon fn-feature-list__icon--${feature.status}`}>
              {getStatusIcon(feature.status || 'included', iconStyle, index)}
            </span>
            <span className="fn-feature-list__text">
              {feature.text}
              {feature.limitText && (
                <span className="fn-feature-list__limit">{feature.limitText}</span>
              )}
            </span>
            {feature.tooltip && (
              <span className="fn-feature-list__tooltip-trigger" title={feature.tooltip}>
                <InfoIcon />
              </span>
            )}
          </li>
        );
      })}

      {hiddenCount > 0 && (
        <li className="fn-feature-list__more">
          {expandable ? (
            <button type="button" className="fn-feature-list__expand">
              + {hiddenCount} more features
            </button>
          ) : (
            <span>+ {hiddenCount} more features</span>
          )}
        </li>
      )}
    </ul>
  );
}

// Named export
export { FeatureList };
