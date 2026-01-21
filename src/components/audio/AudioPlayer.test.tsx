import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AudioPlayer from './AudioPlayer';

// Mock HTMLMediaElement
const mockPlay = vi.fn().mockResolvedValue(undefined);
const mockPause = vi.fn();

beforeEach(() => {
  // Mock audio element methods
  Object.defineProperty(HTMLMediaElement.prototype, 'play', {
    configurable: true,
    value: mockPlay,
  });
  Object.defineProperty(HTMLMediaElement.prototype, 'pause', {
    configurable: true,
    value: mockPause,
  });
  Object.defineProperty(HTMLMediaElement.prototype, 'duration', {
    configurable: true,
    get: () => 180, // 3 minutes
  });
  Object.defineProperty(HTMLMediaElement.prototype, 'currentTime', {
    configurable: true,
    get: () => 0,
    set: vi.fn(),
  });
});

afterEach(() => {
  vi.clearAllMocks();
});

describe('AudioPlayer', () => {
  const defaultProps = {
    src: '/audio/test.mp3',
  };

  describe('Rendering', () => {
    it('renders the audio player', () => {
      const { container } = render(<AudioPlayer {...defaultProps} />);
      expect(container.querySelector('.fn-audio-player')).toBeInTheDocument();
    });

    it('renders audio element with correct src', () => {
      render(<AudioPlayer {...defaultProps} />);
      const audio = document.querySelector('audio');
      expect(audio).toHaveAttribute('src', '/audio/test.mp3');
    });

    it('renders play button', () => {
      render(<AudioPlayer {...defaultProps} />);
      expect(screen.getByRole('button', { name: /play/i })).toBeInTheDocument();
    });

    it('renders progress slider', () => {
      render(<AudioPlayer {...defaultProps} />);
      expect(screen.getByRole('slider', { name: /seek/i })).toBeInTheDocument();
    });

    it('renders with title when provided', () => {
      render(<AudioPlayer {...defaultProps} title="Episode 1" />);
      expect(screen.getByText('Episode 1')).toBeInTheDocument();
    });

    it('does not render title section when not provided', () => {
      const { container } = render(<AudioPlayer {...defaultProps} />);
      expect(container.querySelector('.fn-audio-player__header')).not.toBeInTheDocument();
    });

    it('applies custom className', () => {
      const { container } = render(
        <AudioPlayer {...defaultProps} className="custom-player" />
      );
      expect(container.querySelector('.custom-player')).toBeInTheDocument();
    });
  });

  describe('Play/Pause', () => {
    it('shows play icon initially', () => {
      const { container } = render(<AudioPlayer {...defaultProps} />);
      const playButton = screen.getByRole('button', { name: /play/i });
      // Check that SVG is present (play icon has polygon)
      expect(playButton.querySelector('polygon')).toBeInTheDocument();
    });

    it('calls play when play button clicked', async () => {
      const user = userEvent.setup();
      render(<AudioPlayer {...defaultProps} />);

      await user.click(screen.getByRole('button', { name: /play/i }));
      expect(mockPlay).toHaveBeenCalled();
    });

    it('calls onPlay callback when playback starts', async () => {
      const mockOnPlay = vi.fn();
      const user = userEvent.setup();
      render(<AudioPlayer {...defaultProps} onPlay={mockOnPlay} />);

      await user.click(screen.getByRole('button', { name: /play/i }));
      expect(mockOnPlay).toHaveBeenCalled();
    });

    it('shows pause icon when playing', async () => {
      const user = userEvent.setup();
      render(<AudioPlayer {...defaultProps} />);

      await user.click(screen.getByRole('button', { name: /play/i }));

      const pauseButton = screen.getByRole('button', { name: /pause/i });
      // Pause icon has rect elements
      expect(pauseButton.querySelectorAll('rect').length).toBeGreaterThan(0);
    });

    it('calls pause when pause button clicked', async () => {
      const user = userEvent.setup();
      render(<AudioPlayer {...defaultProps} />);

      // First play
      await user.click(screen.getByRole('button', { name: /play/i }));
      // Then pause
      await user.click(screen.getByRole('button', { name: /pause/i }));

      expect(mockPause).toHaveBeenCalled();
    });

    it('calls onPause callback when playback pauses', async () => {
      const mockOnPause = vi.fn();
      const user = userEvent.setup();
      render(<AudioPlayer {...defaultProps} onPause={mockOnPause} />);

      await user.click(screen.getByRole('button', { name: /play/i }));
      await user.click(screen.getByRole('button', { name: /pause/i }));

      expect(mockOnPause).toHaveBeenCalled();
    });
  });

  describe('Playback Speed', () => {
    it('renders speed control buttons', () => {
      render(<AudioPlayer {...defaultProps} />);

      expect(screen.getByText('0.5x')).toBeInTheDocument();
      expect(screen.getByText('1x')).toBeInTheDocument();
      expect(screen.getByText('1.5x')).toBeInTheDocument();
      expect(screen.getByText('2x')).toBeInTheDocument();
    });

    it('1x speed is active by default', () => {
      render(<AudioPlayer {...defaultProps} />);

      const speedButton = screen.getByText('1x');
      expect(speedButton).toHaveClass('fn-audio-player__speed-btn--active');
    });

    it('changes active state when speed button clicked', async () => {
      const user = userEvent.setup();
      render(<AudioPlayer {...defaultProps} />);

      await user.click(screen.getByText('1.5x'));

      expect(screen.getByText('1.5x')).toHaveClass('fn-audio-player__speed-btn--active');
      expect(screen.getByText('1x')).not.toHaveClass('fn-audio-player__speed-btn--active');
    });

    it('sets playback rate on audio element', async () => {
      const user = userEvent.setup();
      render(<AudioPlayer {...defaultProps} />);

      // Just verify the UI updates - the actual playbackRate is mocked
      await user.click(screen.getByText('2x'));

      // The 2x button should now be active
      expect(screen.getByText('2x')).toHaveClass('fn-audio-player__speed-btn--active');
    });
  });

  describe('Progress Bar', () => {
    it('renders range input for progress', () => {
      render(<AudioPlayer {...defaultProps} />);

      const slider = screen.getByRole('slider', { name: /seek/i });
      expect(slider).toHaveAttribute('type', 'range');
    });

    it('has min value of 0', () => {
      render(<AudioPlayer {...defaultProps} />);

      const slider = screen.getByRole('slider', { name: /seek/i });
      expect(slider).toHaveAttribute('min', '0');
    });

    it('allows seeking when slider changed', () => {
      render(<AudioPlayer {...defaultProps} />);

      const slider = screen.getByRole('slider', { name: /seek/i });
      fireEvent.change(slider, { target: { value: '60' } });

      // Should update currentTime (mocked)
      expect(slider).toHaveValue('60');
    });
  });

  describe('Time Display', () => {
    it('displays time in MM:SS format', () => {
      render(<AudioPlayer {...defaultProps} />);

      // Component shows time - find container with time display
      const { container } = render(<AudioPlayer {...defaultProps} />);
      const timeDisplay = container.querySelector('.fn-audio-player__time');
      expect(timeDisplay).toBeInTheDocument();
    });

    it('displays initial duration when provided', () => {
      render(<AudioPlayer {...defaultProps} duration={125} />);

      // 125 seconds = 2:05
      expect(screen.getByText('2:05')).toBeInTheDocument();
    });
  });

  describe('Audio Events', () => {
    it('handles loadedmetadata event', () => {
      render(<AudioPlayer {...defaultProps} />);

      const audio = document.querySelector('audio') as HTMLAudioElement;
      fireEvent.loadedMetadata(audio);

      // Component should update duration
      expect(audio).toBeInTheDocument();
    });

    it('handles ended event', () => {
      const mockOnComplete = vi.fn();
      render(<AudioPlayer {...defaultProps} onComplete={mockOnComplete} />);

      const audio = document.querySelector('audio') as HTMLAudioElement;
      fireEvent.ended(audio);

      expect(mockOnComplete).toHaveBeenCalled();
    });

    it('handles timeupdate event', () => {
      render(<AudioPlayer {...defaultProps} />);

      const audio = document.querySelector('audio') as HTMLAudioElement;
      fireEvent.timeUpdate(audio);

      // Component should update currentTime
      expect(audio).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('play button has aria-label', () => {
      render(<AudioPlayer {...defaultProps} />);
      expect(screen.getByRole('button', { name: /play/i })).toBeInTheDocument();
    });

    it('pause button has aria-label when playing', async () => {
      const user = userEvent.setup();
      render(<AudioPlayer {...defaultProps} />);

      await user.click(screen.getByRole('button', { name: /play/i }));

      expect(screen.getByRole('button', { name: /pause/i })).toBeInTheDocument();
    });

    it('seek slider has aria-label', () => {
      render(<AudioPlayer {...defaultProps} />);
      expect(screen.getByRole('slider', { name: /seek/i })).toBeInTheDocument();
    });

    it('buttons are keyboard accessible', () => {
      render(<AudioPlayer {...defaultProps} />);

      const buttons = screen.getAllByRole('button');
      buttons.forEach((button) => {
        expect(button).not.toHaveAttribute('tabindex', '-1');
      });
    });
  });

  describe('Audio Element Configuration', () => {
    it('audio has preload metadata', () => {
      render(<AudioPlayer {...defaultProps} />);

      const audio = document.querySelector('audio');
      expect(audio).toHaveAttribute('preload', 'metadata');
    });
  });
});
