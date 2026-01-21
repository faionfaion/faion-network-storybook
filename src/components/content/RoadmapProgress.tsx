import './RoadmapProgress.css';

export type RoadmapProgressVariant = 'default' | 'compact' | 'large';

export interface RoadmapProgressProps {
  /** Number of completed steps */
  completed: number;
  /** Total number of steps */
  total: number;
  /** Label text */
  label?: string;
  /** Show percentage */
  showPercentage?: boolean;
  /** Show step count */
  showCount?: boolean;
  /** Show step markers */
  showMarkers?: boolean;
  /** Variant */
  variant?: RoadmapProgressVariant;
  /** Animated fill on mount */
  animated?: boolean;
  /** Additional class name */
  className?: string;
}

/**
 * RoadmapProgress - Progress bar for roadmap completion
 *
 * Visual indicator of completed steps with percentage and count.
 */
export default function RoadmapProgress({
  completed,
  total,
  label = 'Progress',
  showPercentage = false,
  showCount = true,
  showMarkers = false,
  variant = 'default',
  animated = true,
  className = '',
}: RoadmapProgressProps) {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  const classes = [
    'fn-roadmap-progress',
    `fn-roadmap-progress--${variant}`,
    animated && 'fn-roadmap-progress--animated',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {variant !== 'compact' && (showCount || label) && (
        <div className="fn-roadmap-progress__header">
          <span className="fn-roadmap-progress__label">{label}</span>
          {showCount && (
            <span className="fn-roadmap-progress__count">
              <span>{completed}</span> / {total} completed
            </span>
          )}
        </div>
      )}

      <div className="fn-roadmap-progress__bar">
        <div
          className="fn-roadmap-progress__fill"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>

      {showMarkers && total > 0 && (
        <div className="fn-roadmap-progress__markers">
          {Array.from({ length: total }).map((_, index) => {
            const position = ((index + 0.5) / total) * 100;
            const isCompleted = index < completed;
            const isCurrent = index === completed;

            return (
              <div
                key={index}
                className={`fn-roadmap-progress__marker ${
                  isCompleted ? 'fn-roadmap-progress__marker--completed' : ''
                } ${isCurrent ? 'fn-roadmap-progress__marker--current' : ''}`}
                style={{ left: `${position}%` }}
              />
            );
          })}
        </div>
      )}

      {showPercentage && (
        <div className="fn-roadmap-progress__percentage">{percentage}%</div>
      )}
    </div>
  );
}

// Named export
export { RoadmapProgress };
