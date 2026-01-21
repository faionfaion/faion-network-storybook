import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LanguageSelector, {
  DEFAULT_LANGUAGES,
  type LanguageCode,
  type Language,
} from './LanguageSelector';

describe('LanguageSelector', () => {
  const mockOnChange = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Rendering', () => {
    it('renders with default props', () => {
      render(<LanguageSelector value="en" onChange={mockOnChange} />);
      expect(screen.getByRole('button', { name: /select language/i })).toBeInTheDocument();
    });

    it('renders selected language flag and name', () => {
      render(<LanguageSelector value="uk" onChange={mockOnChange} />);
      const trigger = screen.getByRole('button', { name: /select language/i });
      expect(trigger).toHaveTextContent('Українська');
    });

    it('shows English name when showNativeName is false', () => {
      render(
        <LanguageSelector
          value="uk"
          onChange={mockOnChange}
          showNativeName={false}
        />
      );
      const trigger = screen.getByRole('button', { name: /select language/i });
      expect(trigger).toHaveTextContent('Ukrainian');
    });

    it('renders minimal variant with globe icon and code', () => {
      render(
        <LanguageSelector
          value="en"
          onChange={mockOnChange}
          variant="minimal"
        />
      );
      const trigger = screen.getByRole('button', { name: /select language/i });
      expect(trigger).toHaveTextContent('EN');
    });

    it('applies custom className', () => {
      const { container } = render(
        <LanguageSelector
          value="en"
          onChange={mockOnChange}
          className="custom-class"
        />
      );
      expect(container.querySelector('.custom-class')).toBeInTheDocument();
    });

    it('applies size classes', () => {
      const { container } = render(
        <LanguageSelector value="en" onChange={mockOnChange} size="lg" />
      );
      expect(container.querySelector('.fn-language-selector--lg')).toBeInTheDocument();
    });
  });

  describe('Dropdown Interaction', () => {
    it('opens dropdown when trigger is clicked', async () => {
      const user = userEvent.setup();
      render(<LanguageSelector value="en" onChange={mockOnChange} />);

      const trigger = screen.getByRole('button', { name: /select language/i });
      await user.click(trigger);

      expect(screen.getByRole('listbox')).toBeInTheDocument();
      expect(trigger).toHaveAttribute('aria-expanded', 'true');
    });

    it('shows all default languages in dropdown', async () => {
      const user = userEvent.setup();
      render(<LanguageSelector value="en" onChange={mockOnChange} />);

      await user.click(screen.getByRole('button', { name: /select language/i }));

      DEFAULT_LANGUAGES.forEach((lang) => {
        expect(screen.getByRole('option', { name: new RegExp(lang.nativeName) })).toBeInTheDocument();
      });
    });

    it('highlights currently selected language', async () => {
      const user = userEvent.setup();
      render(<LanguageSelector value="uk" onChange={mockOnChange} />);

      await user.click(screen.getByRole('button', { name: /select language/i }));

      const selectedOption = screen.getByRole('option', { name: /Українська/i });
      expect(selectedOption).toHaveAttribute('aria-selected', 'true');
    });

    it('closes dropdown when option is selected', async () => {
      const user = userEvent.setup();
      render(<LanguageSelector value="en" onChange={mockOnChange} />);

      await user.click(screen.getByRole('button', { name: /select language/i }));
      await user.click(screen.getByRole('option', { name: /Українська/i }));

      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    it('calls onChange with selected language code', async () => {
      const user = userEvent.setup();
      render(<LanguageSelector value="en" onChange={mockOnChange} />);

      await user.click(screen.getByRole('button', { name: /select language/i }));
      await user.click(screen.getByRole('option', { name: /Українська/i }));

      expect(mockOnChange).toHaveBeenCalledWith('uk');
    });
  });

  describe('Keyboard Navigation', () => {
    it('opens dropdown on Enter key', async () => {
      render(<LanguageSelector value="en" onChange={mockOnChange} />);

      const trigger = screen.getByRole('button', { name: /select language/i });
      trigger.focus();
      fireEvent.keyDown(trigger, { key: 'Enter' });

      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });

    it('opens dropdown on Space key', async () => {
      render(<LanguageSelector value="en" onChange={mockOnChange} />);

      const trigger = screen.getByRole('button', { name: /select language/i });
      trigger.focus();
      fireEvent.keyDown(trigger, { key: ' ' });

      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });

    it('closes dropdown on Escape key', async () => {
      const user = userEvent.setup();
      render(<LanguageSelector value="en" onChange={mockOnChange} />);

      await user.click(screen.getByRole('button', { name: /select language/i }));
      expect(screen.getByRole('listbox')).toBeInTheDocument();

      fireEvent.keyDown(document, { key: 'Escape' });

      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    it('selects option with Enter key', async () => {
      const user = userEvent.setup();
      render(<LanguageSelector value="en" onChange={mockOnChange} />);

      await user.click(screen.getByRole('button', { name: /select language/i }));

      const ukOption = screen.getByRole('option', { name: /Українська/i });
      fireEvent.keyDown(ukOption, { key: 'Enter' });

      expect(mockOnChange).toHaveBeenCalledWith('uk');
    });
  });

  describe('Disabled State', () => {
    it('renders disabled trigger', () => {
      render(<LanguageSelector value="en" onChange={mockOnChange} disabled />);

      const trigger = screen.getByRole('button', { name: /select language/i });
      expect(trigger).toBeDisabled();
    });

    it('does not open dropdown when disabled', async () => {
      const user = userEvent.setup();
      render(<LanguageSelector value="en" onChange={mockOnChange} disabled />);

      const trigger = screen.getByRole('button', { name: /select language/i });
      await user.click(trigger);

      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    it('applies disabled class', () => {
      const { container } = render(
        <LanguageSelector value="en" onChange={mockOnChange} disabled />
      );
      expect(container.querySelector('.fn-language-selector--disabled')).toBeInTheDocument();
    });
  });

  describe('Click Outside', () => {
    it('closes dropdown when clicking outside', async () => {
      const user = userEvent.setup();
      render(
        <div>
          <LanguageSelector value="en" onChange={mockOnChange} />
          <button>Outside Button</button>
        </div>
      );

      await user.click(screen.getByRole('button', { name: /select language/i }));
      expect(screen.getByRole('listbox')).toBeInTheDocument();

      fireEvent.mouseDown(screen.getByText('Outside Button'));

      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });
  });

  describe('Custom Languages', () => {
    const customLanguages: Language[] = [
      { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
      { code: 'uk', name: 'Ukrainian', nativeName: 'Українська', flag: '🇺🇦' },
    ];

    it('renders custom language list', async () => {
      const user = userEvent.setup();
      render(
        <LanguageSelector
          value="en"
          onChange={mockOnChange}
          languages={customLanguages}
        />
      );

      await user.click(screen.getByRole('button', { name: /select language/i }));

      expect(screen.getAllByRole('option')).toHaveLength(2);
    });

    it('falls back to first language if value not in list', () => {
      render(
        <LanguageSelector
          value={'fr' as LanguageCode}
          onChange={mockOnChange}
          languages={customLanguages}
        />
      );

      const trigger = screen.getByRole('button', { name: /select language/i });
      expect(trigger).toHaveTextContent('English');
    });
  });

  describe('Accessibility', () => {
    it('has correct aria attributes on trigger', () => {
      render(<LanguageSelector value="en" onChange={mockOnChange} />);

      const trigger = screen.getByRole('button', { name: /select language/i });
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
      expect(trigger).toHaveAttribute('aria-haspopup', 'listbox');
    });

    it('has correct aria-label describing current selection', () => {
      render(<LanguageSelector value="en" onChange={mockOnChange} />);

      const trigger = screen.getByRole('button');
      expect(trigger).toHaveAttribute('aria-label', expect.stringContaining('English'));
    });

    it('dropdown has listbox role', async () => {
      const user = userEvent.setup();
      render(<LanguageSelector value="en" onChange={mockOnChange} />);

      await user.click(screen.getByRole('button', { name: /select language/i }));

      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });

    it('options have correct role and aria-selected', async () => {
      const user = userEvent.setup();
      render(<LanguageSelector value="uk" onChange={mockOnChange} />);

      await user.click(screen.getByRole('button', { name: /select language/i }));

      const options = screen.getAllByRole('option');
      expect(options.length).toBeGreaterThan(0);

      const selectedOption = screen.getByRole('option', { name: /Українська/i });
      expect(selectedOption).toHaveAttribute('aria-selected', 'true');
    });
  });
});
