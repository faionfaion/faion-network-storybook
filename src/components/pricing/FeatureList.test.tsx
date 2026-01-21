import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import FeatureList, { type FeatureItem } from './FeatureList';

describe('FeatureList', () => {
  describe('Rendering', () => {
    it('renders a list of string features', () => {
      const features = ['Feature 1', 'Feature 2', 'Feature 3'];
      render(<FeatureList features={features} />);

      features.forEach((feature) => {
        expect(screen.getByText(feature)).toBeInTheDocument();
      });
    });

    it('renders a list of FeatureItem objects', () => {
      const features: FeatureItem[] = [
        { text: 'Included Feature', status: 'included' },
        { text: 'Excluded Feature', status: 'excluded' },
        { text: 'Limited Feature', status: 'limited' },
      ];
      render(<FeatureList features={features} />);

      features.forEach((feature) => {
        expect(screen.getByText(feature.text)).toBeInTheDocument();
      });
    });

    it('renders empty list without crashing', () => {
      const { container } = render(<FeatureList features={[]} />);
      expect(container.querySelector('.fn-feature-list')).toBeInTheDocument();
    });

    it('applies custom className', () => {
      const { container } = render(
        <FeatureList features={['Test']} className="custom-class" />
      );
      expect(container.querySelector('.custom-class')).toBeInTheDocument();
    });
  });

  describe('Feature Status', () => {
    it('applies correct class for included status', () => {
      render(<FeatureList features={[{ text: 'Included', status: 'included' }]} />);
      const item = screen.getByText('Included').closest('li');
      expect(item).toHaveClass('fn-feature-list__item--included');
    });

    it('applies correct class for excluded status', () => {
      render(<FeatureList features={[{ text: 'Excluded', status: 'excluded' }]} />);
      const item = screen.getByText('Excluded').closest('li');
      expect(item).toHaveClass('fn-feature-list__item--excluded');
    });

    it('applies correct class for limited status', () => {
      render(<FeatureList features={[{ text: 'Limited', status: 'limited' }]} />);
      const item = screen.getByText('Limited').closest('li');
      expect(item).toHaveClass('fn-feature-list__item--limited');
    });

    it('applies correct class for coming status', () => {
      render(<FeatureList features={[{ text: 'Coming Soon', status: 'coming' }]} />);
      const item = screen.getByText('Coming Soon').closest('li');
      expect(item).toHaveClass('fn-feature-list__item--coming');
    });

    it('defaults to included status for string features', () => {
      render(<FeatureList features={['Default Feature']} />);
      const item = screen.getByText('Default Feature').closest('li');
      expect(item).toHaveClass('fn-feature-list__item--included');
    });
  });

  describe('Variants', () => {
    it('applies default variant class', () => {
      const { container } = render(<FeatureList features={['Test']} />);
      expect(container.querySelector('.fn-feature-list--default')).toBeInTheDocument();
    });

    it('applies compact variant class', () => {
      const { container } = render(<FeatureList features={['Test']} variant="compact" />);
      expect(container.querySelector('.fn-feature-list--compact')).toBeInTheDocument();
    });

    it('applies detailed variant class', () => {
      const { container } = render(<FeatureList features={['Test']} variant="detailed" />);
      expect(container.querySelector('.fn-feature-list--detailed')).toBeInTheDocument();
    });
  });

  describe('Icon Style', () => {
    it('renders check icons by default', () => {
      const { container } = render(<FeatureList features={['Test']} iconStyle="check" />);
      expect(container.querySelector('.fn-feature-list__icon')).toBeInTheDocument();
    });

    it('renders bullet icons when iconStyle is bullet', () => {
      const { container } = render(<FeatureList features={['Test']} iconStyle="bullet" />);
      expect(container.querySelector('.fn-feature-list__bullet')).toBeInTheDocument();
    });

    it('renders numbered icons when iconStyle is number', () => {
      render(<FeatureList features={['Test']} iconStyle="number" />);
      expect(screen.getByText('1')).toBeInTheDocument();
    });

    it('renders correct numbers for multiple items', () => {
      render(<FeatureList features={['First', 'Second', 'Third']} iconStyle="number" />);
      expect(screen.getByText('1')).toBeInTheDocument();
      expect(screen.getByText('2')).toBeInTheDocument();
      expect(screen.getByText('3')).toBeInTheDocument();
    });
  });

  describe('Truncation', () => {
    it('shows all features when maxVisible is not set', () => {
      const features = ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'];
      render(<FeatureList features={features} />);

      features.forEach((feature) => {
        expect(screen.getByText(feature)).toBeInTheDocument();
      });
    });

    it('truncates features when maxVisible is set', () => {
      const features = ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'];
      render(<FeatureList features={features} maxVisible={3} />);

      expect(screen.getByText('Feature 1')).toBeInTheDocument();
      expect(screen.getByText('Feature 2')).toBeInTheDocument();
      expect(screen.getByText('Feature 3')).toBeInTheDocument();
      expect(screen.queryByText('Feature 4')).not.toBeInTheDocument();
      expect(screen.queryByText('Feature 5')).not.toBeInTheDocument();
    });

    it('shows "more features" text when truncated', () => {
      const features = ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'];
      render(<FeatureList features={features} maxVisible={3} />);

      expect(screen.getByText('+ 2 more features')).toBeInTheDocument();
    });

    it('shows expand button when expandable is true', () => {
      const features = ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'];
      render(<FeatureList features={features} maxVisible={3} expandable />);

      const expandButton = screen.getByRole('button', { name: /more features/i });
      expect(expandButton).toBeInTheDocument();
    });

    it('does not show more text when all features visible', () => {
      const features = ['Feature 1', 'Feature 2', 'Feature 3'];
      render(<FeatureList features={features} maxVisible={5} />);

      expect(screen.queryByText(/more features/i)).not.toBeInTheDocument();
    });
  });

  describe('Columns', () => {
    it('applies single column class by default', () => {
      const { container } = render(<FeatureList features={['Test']} />);
      expect(container.querySelector('.fn-feature-list--cols-1')).toBeInTheDocument();
    });

    it('applies two column class when columns=2', () => {
      const { container } = render(<FeatureList features={['Test']} columns={2} />);
      expect(container.querySelector('.fn-feature-list--cols-2')).toBeInTheDocument();
    });
  });

  describe('Feature Details', () => {
    it('shows limit text when provided', () => {
      render(
        <FeatureList
          features={[{ text: 'Storage', status: 'limited', limitText: 'up to 5GB' }]}
        />
      );
      expect(screen.getByText('up to 5GB')).toBeInTheDocument();
    });

    it('shows tooltip trigger when tooltip provided', () => {
      const { container } = render(
        <FeatureList
          features={[{ text: 'Advanced Feature', status: 'included', tooltip: 'More info' }]}
        />
      );
      expect(container.querySelector('.fn-feature-list__tooltip-trigger')).toBeInTheDocument();
    });

    it('tooltip trigger has title attribute', () => {
      const { container } = render(
        <FeatureList
          features={[{ text: 'Advanced Feature', status: 'included', tooltip: 'More info about this' }]}
        />
      );
      const trigger = container.querySelector('.fn-feature-list__tooltip-trigger');
      expect(trigger).toHaveAttribute('title', 'More info about this');
    });
  });

  describe('Accessibility', () => {
    it('renders as an unordered list', () => {
      render(<FeatureList features={['Test']} />);
      expect(screen.getByRole('list')).toBeInTheDocument();
    });

    it('renders list items', () => {
      render(<FeatureList features={['Feature 1', 'Feature 2']} />);
      expect(screen.getAllByRole('listitem')).toHaveLength(2);
    });

    it('includes "more" item in list when truncated', () => {
      const features = ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'];
      render(<FeatureList features={features} maxVisible={2} />);

      // 2 visible features + 1 "more" item
      expect(screen.getAllByRole('listitem')).toHaveLength(3);
    });
  });

  describe('Mixed Feature Types', () => {
    it('handles mix of string and object features', () => {
      const features: (string | FeatureItem)[] = [
        'Simple Feature',
        { text: 'Complex Feature', status: 'limited', limitText: '5/month' },
        'Another Simple',
      ];
      render(<FeatureList features={features} />);

      expect(screen.getByText('Simple Feature')).toBeInTheDocument();
      expect(screen.getByText('Complex Feature')).toBeInTheDocument();
      expect(screen.getByText('5/month')).toBeInTheDocument();
      expect(screen.getByText('Another Simple')).toBeInTheDocument();
    });
  });
});
