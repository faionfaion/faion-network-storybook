import './PlaybackSpeed.css';

export interface PlaybackSpeedProps {
  /** Current playback speed */
  value: number;
  /** Change handler */
  onChange: (speed: number) => void;
  /** Available speed options */
  options?: number[];
  /** Additional class name */
  className?: string;
}

/**
 * PlaybackSpeed - Speed selector for audio/video playback
 *
 * Allows selecting playback speed from predefined options.
 */
export default function PlaybackSpeed({
  value,
  onChange,
  options = [0.5, 0.75, 1, 1.25, 1.5, 2],
  className = '',
}: PlaybackSpeedProps) {
  const classes = ['fn-playback-speed', className].filter(Boolean).join(' ');

  return (
    <div className={classes} role="group" aria-label="Playback speed">
      {options.map((speed) => (
        <button
          key={speed}
          type="button"
          className={`fn-playback-speed__option ${value === speed ? 'fn-playback-speed__option--active' : ''}`}
          onClick={() => onChange(speed)}
          aria-pressed={value === speed}
        >
          {speed}x
        </button>
      ))}
    </div>
  );
}

// Named export
export { PlaybackSpeed };
