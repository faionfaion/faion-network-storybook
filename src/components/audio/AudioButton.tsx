import './AudioButton.css';

export interface AudioButtonProps {
  /** Whether audio is playing */
  isPlaying: boolean;
  /** Click handler */
  onClick: () => void;
  /** Button size */
  size?: 'sm' | 'md' | 'lg';
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'ghost';
  /** Additional class name */
  className?: string;
}

/**
 * AudioButton - Play/pause button for audio
 *
 * Compact button for triggering audio playback.
 */
export default function AudioButton({
  isPlaying,
  onClick,
  size = 'md',
  variant = 'primary',
  className = '',
}: AudioButtonProps) {
  const classes = [
    'fn-audio-button',
    `fn-audio-button--${size}`,
    `fn-audio-button--${variant}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
    >
      {isPlaying ? <PauseIcon /> : <PlayIcon />}
    </button>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <rect x="6" y="4" width="4" height="16" />
      <rect x="14" y="4" width="4" height="16" />
    </svg>
  );
}

// Named export
export { AudioButton };
