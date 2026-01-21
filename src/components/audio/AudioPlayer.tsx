import { useState, useRef, useEffect } from 'react';
import './AudioPlayer.css';

export interface AudioPlayerProps {
  /** Audio source URL */
  src: string;
  /** Title of the audio */
  title?: string;
  /** Duration in seconds (optional, for display before loading) */
  duration?: number;
  /** Called when playback starts */
  onPlay?: () => void;
  /** Called when playback pauses */
  onPause?: () => void;
  /** Called when playback completes */
  onComplete?: () => void;
  /** Additional class name */
  className?: string;
}

/**
 * AudioPlayer - Full audio player with controls
 *
 * Displays audio playback controls with progress bar and speed options.
 */
export default function AudioPlayer({
  src,
  title,
  duration: initialDuration,
  onPlay,
  onPause,
  onComplete,
  className = '',
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(initialDuration || 0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  const classes = ['fn-audio-player', className].filter(Boolean).join(' ');

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
      setIsLoaded(true);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
      onComplete?.();
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [onComplete]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      onPause?.();
    } else {
      audio.play();
      onPlay?.();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = parseFloat(e.target.value);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleSpeedChange = (speed: number) => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.playbackRate = speed;
    setPlaybackSpeed(speed);
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className={classes}>
      <audio ref={audioRef} src={src} preload="metadata" />

      {title && (
        <div className="fn-audio-player__header">
          <HeadphonesIcon />
          <span className="fn-audio-player__title">{title}</span>
        </div>
      )}

      <div className="fn-audio-player__controls">
        <button
          type="button"
          className="fn-audio-player__play-btn"
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>

        <div className="fn-audio-player__progress-container">
          <input
            type="range"
            className="fn-audio-player__progress"
            min={0}
            max={duration || 100}
            value={currentTime}
            onChange={handleSeek}
            style={{ '--progress': `${progress}%` } as React.CSSProperties}
            aria-label="Seek"
          />
          <div className="fn-audio-player__time">
            <span>{formatTime(currentTime)}</span>
            <span>/</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>

      <div className="fn-audio-player__speed">
        {[0.5, 1, 1.5, 2].map((speed) => (
          <button
            key={speed}
            type="button"
            className={`fn-audio-player__speed-btn ${playbackSpeed === speed ? 'fn-audio-player__speed-btn--active' : ''}`}
            onClick={() => handleSpeedChange(speed)}
          >
            {speed}x
          </button>
        ))}
      </div>
    </div>
  );
}

function PlayIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <rect x="6" y="4" width="4" height="16" />
      <rect x="14" y="4" width="4" height="16" />
    </svg>
  );
}

function HeadphonesIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  );
}

// Named export
export { AudioPlayer };
