import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchModal, { type SearchResultItem } from './SearchModal';

describe('SearchModal', () => {
  const mockOnClose = vi.fn();
  const mockOnSearch = vi.fn();
  const mockOnResultClick = vi.fn();
  const mockOnClearRecent = vi.fn();

  const defaultProps = {
    isOpen: true,
    onClose: mockOnClose,
    onSearch: mockOnSearch,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Rendering', () => {
    it('renders when isOpen is true', () => {
      render(<SearchModal {...defaultProps} />);
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('does not render when isOpen is false', () => {
      render(<SearchModal {...defaultProps} isOpen={false} />);
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('renders search input', () => {
      render(<SearchModal {...defaultProps} />);
      expect(screen.getByRole('textbox', { name: /search/i })).toBeInTheDocument();
    });

    it('renders with custom placeholder', () => {
      render(<SearchModal {...defaultProps} placeholder="Find something..." />);
      expect(screen.getByPlaceholderText('Find something...')).toBeInTheDocument();
    });

    it('renders close button', () => {
      render(<SearchModal {...defaultProps} />);
      expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();
    });

    it('applies custom className', () => {
      const { container } = render(
        <SearchModal {...defaultProps} className="custom-class" />
      );
      expect(container.querySelector('.custom-class')).toBeInTheDocument();
    });
  });

  describe('Search Input', () => {
    it('focuses input when modal opens', () => {
      render(<SearchModal {...defaultProps} />);
      const input = screen.getByRole('textbox', { name: /search/i });
      expect(document.activeElement).toBe(input);
    });

    it('calls onSearch when typing', async () => {
      const user = userEvent.setup();
      render(<SearchModal {...defaultProps} />);

      const input = screen.getByRole('textbox', { name: /search/i });
      await user.type(input, 'test');

      expect(mockOnSearch).toHaveBeenCalledWith('t');
      expect(mockOnSearch).toHaveBeenCalledWith('te');
      expect(mockOnSearch).toHaveBeenCalledWith('tes');
      expect(mockOnSearch).toHaveBeenCalledWith('test');
    });

    it('clears query when modal reopens', () => {
      const { rerender } = render(<SearchModal {...defaultProps} />);

      const input = screen.getByRole('textbox', { name: /search/i }) as HTMLInputElement;
      fireEvent.change(input, { target: { value: 'test' } });

      rerender(<SearchModal {...defaultProps} isOpen={false} />);
      rerender(<SearchModal {...defaultProps} isOpen={true} />);

      const newInput = screen.getByRole('textbox', { name: /search/i }) as HTMLInputElement;
      expect(newInput.value).toBe('');
    });
  });

  describe('Close Behavior', () => {
    it('calls onClose when close button clicked', async () => {
      const user = userEvent.setup();
      render(<SearchModal {...defaultProps} />);

      await user.click(screen.getByRole('button', { name: /close/i }));
      expect(mockOnClose).toHaveBeenCalled();
    });

    it('calls onClose when backdrop clicked', async () => {
      const user = userEvent.setup();
      render(<SearchModal {...defaultProps} />);

      const dialog = screen.getByRole('dialog');
      await user.click(dialog);
      expect(mockOnClose).toHaveBeenCalled();
    });

    it('does not close when clicking modal content', async () => {
      const user = userEvent.setup();
      render(<SearchModal {...defaultProps} />);

      const input = screen.getByRole('textbox', { name: /search/i });
      await user.click(input);
      expect(mockOnClose).not.toHaveBeenCalled();
    });

    it('calls onClose when Escape key pressed', () => {
      render(<SearchModal {...defaultProps} />);

      const input = screen.getByRole('textbox', { name: /search/i });
      fireEvent.keyDown(input, { key: 'Escape' });

      expect(mockOnClose).toHaveBeenCalled();
    });
  });

  describe('Recent Searches', () => {
    const recentSearches = ['React', 'TypeScript', 'Testing'];

    it('shows recent searches when input is empty', () => {
      render(
        <SearchModal {...defaultProps} recentSearches={recentSearches} />
      );

      expect(screen.getByText('Recent searches')).toBeInTheDocument();
      recentSearches.forEach((search) => {
        expect(screen.getByText(search)).toBeInTheDocument();
      });
    });

    it('hides recent searches when typing', async () => {
      const user = userEvent.setup();
      render(
        <SearchModal {...defaultProps} recentSearches={recentSearches} />
      );

      const input = screen.getByRole('textbox', { name: /search/i });
      await user.type(input, 'test');

      expect(screen.queryByText('Recent searches')).not.toBeInTheDocument();
    });

    it('fills input when clicking recent search', async () => {
      const user = userEvent.setup();
      render(
        <SearchModal {...defaultProps} recentSearches={recentSearches} />
      );

      await user.click(screen.getByText('React'));

      const input = screen.getByRole('textbox', { name: /search/i }) as HTMLInputElement;
      expect(input.value).toBe('React');
      expect(mockOnSearch).toHaveBeenCalledWith('React');
    });

    it('shows clear button when onClearRecent provided', () => {
      render(
        <SearchModal
          {...defaultProps}
          recentSearches={recentSearches}
          onClearRecent={mockOnClearRecent}
        />
      );

      expect(screen.getByText('Clear')).toBeInTheDocument();
    });

    it('calls onClearRecent when clear clicked', async () => {
      const user = userEvent.setup();
      render(
        <SearchModal
          {...defaultProps}
          recentSearches={recentSearches}
          onClearRecent={mockOnClearRecent}
        />
      );

      await user.click(screen.getByText('Clear'));
      expect(mockOnClearRecent).toHaveBeenCalled();
    });
  });

  describe('Search Results', () => {
    const results: SearchResultItem[] = [
      { id: '1', title: 'Result 1', href: '/result-1', type: 'methodology' },
      { id: '2', title: 'Result 2', excerpt: 'Description', href: '/result-2', type: 'article' },
      { id: '3', title: 'Result 3', category: 'Guide', href: '/result-3' },
    ];

    it('shows results when provided and query is not empty', async () => {
      const user = userEvent.setup();
      render(<SearchModal {...defaultProps} results={results} />);

      const input = screen.getByRole('textbox', { name: /search/i });
      await user.type(input, 'test');

      expect(screen.getByText('Results')).toBeInTheDocument();
      expect(screen.getByText('3 found')).toBeInTheDocument();
      results.forEach((result) => {
        expect(screen.getByText(result.title)).toBeInTheDocument();
      });
    });

    it('shows result excerpt when provided', async () => {
      const user = userEvent.setup();
      render(<SearchModal {...defaultProps} results={results} />);

      const input = screen.getByRole('textbox', { name: /search/i });
      await user.type(input, 'test');

      expect(screen.getByText('Description')).toBeInTheDocument();
    });

    it('shows result category when provided', async () => {
      const user = userEvent.setup();
      render(<SearchModal {...defaultProps} results={results} />);

      const input = screen.getByRole('textbox', { name: /search/i });
      await user.type(input, 'test');

      expect(screen.getByText('Guide')).toBeInTheDocument();
    });

    it('calls onResultClick when result clicked', async () => {
      const user = userEvent.setup();
      render(
        <SearchModal
          {...defaultProps}
          results={results}
          onResultClick={mockOnResultClick}
        />
      );

      const input = screen.getByRole('textbox', { name: /search/i });
      await user.type(input, 'test');
      await user.click(screen.getByText('Result 1'));

      expect(mockOnResultClick).toHaveBeenCalledWith(results[0]);
    });

    it('closes modal after result click', async () => {
      const user = userEvent.setup();
      render(
        <SearchModal
          {...defaultProps}
          results={results}
          onResultClick={mockOnResultClick}
        />
      );

      const input = screen.getByRole('textbox', { name: /search/i });
      await user.type(input, 'test');
      await user.click(screen.getByText('Result 1'));

      expect(mockOnClose).toHaveBeenCalled();
    });
  });

  describe('Empty State', () => {
    it('shows empty state when no results and query is not empty', async () => {
      const user = userEvent.setup();
      render(<SearchModal {...defaultProps} results={[]} />);

      const input = screen.getByRole('textbox', { name: /search/i });
      await user.type(input, 'nonexistent');

      expect(screen.getByText('No results found')).toBeInTheDocument();
      expect(screen.getByText(/try different keywords/i)).toBeInTheDocument();
    });
  });

  describe('Loading State', () => {
    it('shows loading indicator when isLoading is true', () => {
      render(<SearchModal {...defaultProps} isLoading />);
      expect(screen.getByText('Searching...')).toBeInTheDocument();
    });

    it('hides results when loading', async () => {
      const user = userEvent.setup();
      const results: SearchResultItem[] = [
        { id: '1', title: 'Result 1', href: '/result-1' },
      ];

      render(<SearchModal {...defaultProps} results={results} isLoading />);

      const input = screen.getByRole('textbox', { name: /search/i });
      await user.type(input, 'test');

      expect(screen.getByText('Searching...')).toBeInTheDocument();
    });
  });

  describe('Keyboard Navigation', () => {
    const results: SearchResultItem[] = [
      { id: '1', title: 'Result 1', href: '/result-1' },
      { id: '2', title: 'Result 2', href: '/result-2' },
      { id: '3', title: 'Result 3', href: '/result-3' },
    ];

    it('handles arrow down navigation', async () => {
      const user = userEvent.setup();
      render(
        <SearchModal
          {...defaultProps}
          results={results}
          onResultClick={mockOnResultClick}
        />
      );

      const input = screen.getByRole('textbox', { name: /search/i });
      await user.type(input, 'test');

      // Arrow down should change selection
      fireEvent.keyDown(input, { key: 'ArrowDown' });

      // Selection changed - pressing Enter should select something
      fireEvent.keyDown(input, { key: 'Enter' });

      expect(mockOnResultClick).toHaveBeenCalled();
    });

    it('handles arrow up navigation', async () => {
      const user = userEvent.setup();
      render(
        <SearchModal
          {...defaultProps}
          results={results}
          onResultClick={mockOnResultClick}
        />
      );

      const input = screen.getByRole('textbox', { name: /search/i });
      await user.type(input, 'test');

      // Navigate down twice then up once
      fireEvent.keyDown(input, { key: 'ArrowDown' });
      fireEvent.keyDown(input, { key: 'ArrowDown' });
      fireEvent.keyDown(input, { key: 'ArrowUp' });
      fireEvent.keyDown(input, { key: 'Enter' });

      expect(mockOnResultClick).toHaveBeenCalled();
    });

    it('selects first result with Enter when no navigation', async () => {
      const user = userEvent.setup();
      render(
        <SearchModal
          {...defaultProps}
          results={results}
          onResultClick={mockOnResultClick}
        />
      );

      const input = screen.getByRole('textbox', { name: /search/i });
      await user.type(input, 'test');

      fireEvent.keyDown(input, { key: 'Enter' });

      expect(mockOnResultClick).toHaveBeenCalledWith(results[0]);
    });

    it('handles many arrow down presses without error', async () => {
      const user = userEvent.setup();
      render(
        <SearchModal
          {...defaultProps}
          results={results}
          onResultClick={mockOnResultClick}
        />
      );

      const input = screen.getByRole('textbox', { name: /search/i });
      await user.type(input, 'test');

      // Navigate past the end - should not crash
      for (let i = 0; i < 10; i++) {
        fireEvent.keyDown(input, { key: 'ArrowDown' });
      }
      fireEvent.keyDown(input, { key: 'Enter' });

      // Should select the last result (clamped to max)
      expect(mockOnResultClick).toHaveBeenCalledWith(results[2]);
    });

    it('handles arrow up at start without error', async () => {
      const user = userEvent.setup();
      render(
        <SearchModal
          {...defaultProps}
          results={results}
          onResultClick={mockOnResultClick}
        />
      );

      const input = screen.getByRole('textbox', { name: /search/i });
      await user.type(input, 'test');

      // Try to go above first item
      fireEvent.keyDown(input, { key: 'ArrowUp' });
      fireEvent.keyDown(input, { key: 'Enter' });

      expect(mockOnResultClick).toHaveBeenCalledWith(results[0]);
    });
  });

  describe('Accessibility', () => {
    it('has dialog role', () => {
      render(<SearchModal {...defaultProps} />);
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('has aria-modal attribute', () => {
      render(<SearchModal {...defaultProps} />);
      expect(screen.getByRole('dialog')).toHaveAttribute('aria-modal', 'true');
    });

    it('has aria-label for search', () => {
      render(<SearchModal {...defaultProps} />);
      expect(screen.getByRole('dialog')).toHaveAttribute('aria-label', 'Search');
    });

    it('search input has aria-label', () => {
      render(<SearchModal {...defaultProps} />);
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-label', 'Search');
    });

    it('close button has aria-label', () => {
      render(<SearchModal {...defaultProps} />);
      expect(screen.getByRole('button', { name: /close search/i })).toBeInTheDocument();
    });
  });

  describe('Initial Hint', () => {
    it('shows hint when no recent searches and no query', () => {
      render(<SearchModal {...defaultProps} />);
      expect(screen.getByText(/type to search/i)).toBeInTheDocument();
    });

    it('shows keyboard shortcuts hint', () => {
      render(<SearchModal {...defaultProps} />);
      expect(screen.getByText('Enter')).toBeInTheDocument();
      expect(screen.getByText('Arrows')).toBeInTheDocument();
      expect(screen.getByText('Esc')).toBeInTheDocument();
    });
  });

  describe('Footer', () => {
    it('shows keyboard shortcut hint in footer', () => {
      render(<SearchModal {...defaultProps} />);
      expect(screen.getByText('Cmd')).toBeInTheDocument();
      expect(screen.getByText('K')).toBeInTheDocument();
    });
  });
});
