import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import DifficultyBadge from './DifficultyBadge';

describe('DifficultyBadge', () => {
  describe('Rendering', () => {
    it('renders badge with level label', () => {
      render(<DifficultyBadge level="beginner" />);
      expect(screen.getByText('Beginner')).toBeInTheDocument();
    });

    it('renders as span element', () => {
      const { container } = render(<DifficultyBadge level="beginner" />);
      expect(container.firstChild?.nodeName).toBe('SPAN');
    });

    it('applies base class', () => {
      const { container } = render(<DifficultyBadge level="beginner" />);
      expect(container.querySelector('.fn-difficulty-badge')).toBeInTheDocument();
    });
  });

  describe('Difficulty Levels', () => {
    it('renders beginner level', () => {
      render(<DifficultyBadge level="beginner" />);
      expect(screen.getByText('Beginner')).toBeInTheDocument();
    });

    it('renders intermediate level', () => {
      render(<DifficultyBadge level="intermediate" />);
      expect(screen.getByText('Intermediate')).toBeInTheDocument();
    });

    it('renders advanced level', () => {
      render(<DifficultyBadge level="advanced" />);
      expect(screen.getByText('Advanced')).toBeInTheDocument();
    });

    it('applies level-specific class for beginner', () => {
      const { container } = render(<DifficultyBadge level="beginner" />);
      expect(container.querySelector('.fn-difficulty-badge--beginner')).toBeInTheDocument();
    });

    it('applies level-specific class for intermediate', () => {
      const { container } = render(<DifficultyBadge level="intermediate" />);
      expect(container.querySelector('.fn-difficulty-badge--intermediate')).toBeInTheDocument();
    });

    it('applies level-specific class for advanced', () => {
      const { container } = render(<DifficultyBadge level="advanced" />);
      expect(container.querySelector('.fn-difficulty-badge--advanced')).toBeInTheDocument();
    });
  });

  describe('Custom Label', () => {
    it('renders custom label when provided', () => {
      render(<DifficultyBadge level="beginner" label="Easy" />);
      expect(screen.getByText('Easy')).toBeInTheDocument();
      expect(screen.queryByText('Beginner')).not.toBeInTheDocument();
    });
  });

  describe('Sizes', () => {
    it('applies medium size by default (no extra class)', () => {
      const { container } = render(<DifficultyBadge level="beginner" />);
      expect(container.querySelector('.fn-difficulty-badge--small')).not.toBeInTheDocument();
      expect(container.querySelector('.fn-difficulty-badge--large')).not.toBeInTheDocument();
    });

    it('applies small size class', () => {
      const { container } = render(<DifficultyBadge level="beginner" size="small" />);
      expect(container.querySelector('.fn-difficulty-badge--small')).toBeInTheDocument();
    });

    it('applies large size class', () => {
      const { container } = render(<DifficultyBadge level="beginner" size="large" />);
      expect(container.querySelector('.fn-difficulty-badge--large')).toBeInTheDocument();
    });
  });

  describe('Icon', () => {
    it('does not show icon by default', () => {
      const { container } = render(<DifficultyBadge level="beginner" />);
      expect(container.querySelector('.fn-difficulty-badge__icon')).not.toBeInTheDocument();
    });

    it('shows default icon when showIcon is true', () => {
      const { container } = render(<DifficultyBadge level="beginner" showIcon />);
      expect(container.querySelector('.fn-difficulty-badge__icon')).toBeInTheDocument();
    });

    it('shows custom icon when provided', () => {
      render(
        <DifficultyBadge
          level="beginner"
          showIcon
          icon={<span data-testid="custom-icon">Star</span>}
        />
      );
      expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    });

    it('renders appropriate icon for each level', () => {
      const { container: beginnerContainer } = render(
        <DifficultyBadge level="beginner" showIcon />
      );
      const { container: intermediateContainer } = render(
        <DifficultyBadge level="intermediate" showIcon />
      );
      const { container: advancedContainer } = render(
        <DifficultyBadge level="advanced" showIcon />
      );

      expect(beginnerContainer.querySelector('.fn-difficulty-badge__icon svg')).toBeInTheDocument();
      expect(intermediateContainer.querySelector('.fn-difficulty-badge__icon svg')).toBeInTheDocument();
      expect(advancedContainer.querySelector('.fn-difficulty-badge__icon svg')).toBeInTheDocument();
    });
  });

  describe('Dot Indicator', () => {
    it('does not show dot by default', () => {
      const { container } = render(<DifficultyBadge level="beginner" />);
      expect(container.querySelector('.fn-difficulty-badge__dot')).not.toBeInTheDocument();
    });

    it('shows dot when useDot is true', () => {
      const { container } = render(<DifficultyBadge level="beginner" useDot />);
      expect(container.querySelector('.fn-difficulty-badge__dot')).toBeInTheDocument();
    });

    it('applies dot class when useDot is true', () => {
      const { container } = render(<DifficultyBadge level="beginner" useDot />);
      expect(container.querySelector('.fn-difficulty-badge--dot')).toBeInTheDocument();
    });

    it('does not show icon when useDot is true', () => {
      const { container } = render(<DifficultyBadge level="beginner" useDot showIcon />);
      expect(container.querySelector('.fn-difficulty-badge__icon')).not.toBeInTheDocument();
      expect(container.querySelector('.fn-difficulty-badge__dot')).toBeInTheDocument();
    });
  });

  describe('Outline Style', () => {
    it('does not apply outline style by default', () => {
      const { container } = render(<DifficultyBadge level="beginner" />);
      expect(container.querySelector('.fn-difficulty-badge--outline')).not.toBeInTheDocument();
    });

    it('applies outline class when outline is true', () => {
      const { container } = render(<DifficultyBadge level="beginner" outline />);
      expect(container.querySelector('.fn-difficulty-badge--outline')).toBeInTheDocument();
    });
  });

  describe('Custom className', () => {
    it('applies custom className', () => {
      const { container } = render(
        <DifficultyBadge level="beginner" className="custom-badge" />
      );
      expect(container.querySelector('.custom-badge')).toBeInTheDocument();
    });

    it('merges custom className with default classes', () => {
      const { container } = render(
        <DifficultyBadge level="advanced" size="small" className="custom-badge" />
      );
      const badge = container.querySelector('.fn-difficulty-badge');
      expect(badge).toHaveClass('custom-badge');
      expect(badge).toHaveClass('fn-difficulty-badge--advanced');
      expect(badge).toHaveClass('fn-difficulty-badge--small');
    });
  });
});
