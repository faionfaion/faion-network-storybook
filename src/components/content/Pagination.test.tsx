import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pagination from './Pagination';

describe('Pagination', () => {
  const mockOnPageChange = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Rendering', () => {
    it('renders pagination nav', () => {
      render(
        <Pagination currentPage={1} totalPages={10} onPageChange={mockOnPageChange} />
      );
      expect(screen.getByRole('navigation', { name: /pagination/i })).toBeInTheDocument();
    });

    it('returns null when totalPages is 1', () => {
      const { container } = render(
        <Pagination currentPage={1} totalPages={1} onPageChange={mockOnPageChange} />
      );
      expect(container.firstChild).toBeNull();
    });

    it('returns null when totalPages is 0', () => {
      const { container } = render(
        <Pagination currentPage={1} totalPages={0} onPageChange={mockOnPageChange} />
      );
      expect(container.firstChild).toBeNull();
    });

    it('displays current page info', () => {
      render(
        <Pagination currentPage={5} totalPages={10} onPageChange={mockOnPageChange} />
      );
      expect(screen.getByRole('button', { name: /page 5/i })).toBeInTheDocument();
    });

    it('applies custom className', () => {
      const { container } = render(
        <Pagination
          currentPage={1}
          totalPages={5}
          onPageChange={mockOnPageChange}
          className="custom-class"
        />
      );
      expect(container.querySelector('.custom-class')).toBeInTheDocument();
    });
  });

  describe('Navigation Buttons', () => {
    it('renders first, prev, next, last buttons by default', () => {
      render(
        <Pagination currentPage={5} totalPages={10} onPageChange={mockOnPageChange} />
      );

      expect(screen.getByRole('button', { name: /first page/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /previous page/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /next page/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /last page/i })).toBeInTheDocument();
    });

    it('hides first/last buttons when showFirstLast is false', () => {
      render(
        <Pagination
          currentPage={5}
          totalPages={10}
          onPageChange={mockOnPageChange}
          showFirstLast={false}
        />
      );

      expect(screen.queryByRole('button', { name: /first page/i })).not.toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /last page/i })).not.toBeInTheDocument();
    });

    it('hides prev/next buttons when showPrevNext is false', () => {
      render(
        <Pagination
          currentPage={5}
          totalPages={10}
          onPageChange={mockOnPageChange}
          showPrevNext={false}
        />
      );

      expect(screen.queryByRole('button', { name: /previous page/i })).not.toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /next page/i })).not.toBeInTheDocument();
    });
  });

  describe('Disabled States', () => {
    it('disables first and prev buttons on first page', () => {
      render(
        <Pagination currentPage={1} totalPages={10} onPageChange={mockOnPageChange} />
      );

      expect(screen.getByRole('button', { name: /first page/i })).toBeDisabled();
      expect(screen.getByRole('button', { name: /previous page/i })).toBeDisabled();
    });

    it('disables next and last buttons on last page', () => {
      render(
        <Pagination currentPage={10} totalPages={10} onPageChange={mockOnPageChange} />
      );

      expect(screen.getByRole('button', { name: /next page/i })).toBeDisabled();
      expect(screen.getByRole('button', { name: /last page/i })).toBeDisabled();
    });

    it('disables all buttons when disabled prop is true', () => {
      render(
        <Pagination
          currentPage={5}
          totalPages={10}
          onPageChange={mockOnPageChange}
          disabled
        />
      );

      const buttons = screen.getAllByRole('button');
      buttons.forEach((button) => {
        expect(button).toBeDisabled();
      });
    });

    it('applies disabled class when disabled', () => {
      const { container } = render(
        <Pagination
          currentPage={5}
          totalPages={10}
          onPageChange={mockOnPageChange}
          disabled
        />
      );

      expect(container.querySelector('.fn-pagination--disabled')).toBeInTheDocument();
    });
  });

  describe('Page Change Callbacks', () => {
    it('calls onPageChange with previous page when prev clicked', async () => {
      const user = userEvent.setup();
      render(
        <Pagination currentPage={5} totalPages={10} onPageChange={mockOnPageChange} />
      );

      await user.click(screen.getByRole('button', { name: /previous page/i }));
      expect(mockOnPageChange).toHaveBeenCalledWith(4);
    });

    it('calls onPageChange with next page when next clicked', async () => {
      const user = userEvent.setup();
      render(
        <Pagination currentPage={5} totalPages={10} onPageChange={mockOnPageChange} />
      );

      await user.click(screen.getByRole('button', { name: /next page/i }));
      expect(mockOnPageChange).toHaveBeenCalledWith(6);
    });

    it('calls onPageChange with 1 when first clicked', async () => {
      const user = userEvent.setup();
      render(
        <Pagination currentPage={5} totalPages={10} onPageChange={mockOnPageChange} />
      );

      await user.click(screen.getByRole('button', { name: /first page/i }));
      expect(mockOnPageChange).toHaveBeenCalledWith(1);
    });

    it('calls onPageChange with totalPages when last clicked', async () => {
      const user = userEvent.setup();
      render(
        <Pagination currentPage={5} totalPages={10} onPageChange={mockOnPageChange} />
      );

      await user.click(screen.getByRole('button', { name: /last page/i }));
      expect(mockOnPageChange).toHaveBeenCalledWith(10);
    });

    it('calls onPageChange with page number when page button clicked', async () => {
      const user = userEvent.setup();
      render(
        <Pagination currentPage={5} totalPages={10} onPageChange={mockOnPageChange} />
      );

      // Click on page 6 (which is adjacent to current page 5)
      await user.click(screen.getByRole('button', { name: /^page 6$/i }));
      expect(mockOnPageChange).toHaveBeenCalledWith(6);
    });

    it('does not call onPageChange when clicking current page', async () => {
      const user = userEvent.setup();
      render(
        <Pagination currentPage={5} totalPages={10} onPageChange={mockOnPageChange} />
      );

      await user.click(screen.getByRole('button', { name: /^page 5$/i }));
      expect(mockOnPageChange).not.toHaveBeenCalled();
    });

    it('does not call onPageChange when disabled', async () => {
      const user = userEvent.setup();
      render(
        <Pagination
          currentPage={5}
          totalPages={10}
          onPageChange={mockOnPageChange}
          disabled
        />
      );

      const nextButton = screen.getByRole('button', { name: /next page/i });
      await user.click(nextButton);
      expect(mockOnPageChange).not.toHaveBeenCalled();
    });
  });

  describe('Page Numbers', () => {
    it('renders page numbers', () => {
      render(
        <Pagination currentPage={1} totalPages={5} onPageChange={mockOnPageChange} />
      );

      expect(screen.getByRole('button', { name: /^page 1$/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /^page 2$/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /^page 3$/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /^page 4$/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /^page 5$/i })).toBeInTheDocument();
    });

    it('marks current page as active', () => {
      render(
        <Pagination currentPage={3} totalPages={5} onPageChange={mockOnPageChange} />
      );

      const currentPageButton = screen.getByRole('button', { name: /^page 3$/i });
      expect(currentPageButton).toHaveClass('fn-pagination__page--active');
      expect(currentPageButton).toHaveAttribute('aria-current', 'page');
    });

    it('renders ellipsis for large page counts', () => {
      const { container } = render(
        <Pagination currentPage={5} totalPages={20} onPageChange={mockOnPageChange} />
      );

      expect(container.querySelectorAll('.fn-pagination__ellipsis').length).toBeGreaterThan(0);
    });

    it('respects siblingCount prop', () => {
      render(
        <Pagination
          currentPage={10}
          totalPages={20}
          onPageChange={mockOnPageChange}
          siblingCount={2}
        />
      );

      // With siblingCount=2 at page 10, we should see pages 8, 9, 10, 11, 12
      expect(screen.getByRole('button', { name: /^page 8$/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /^page 9$/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /^page 10$/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /^page 11$/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /^page 12$/i })).toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it('applies default variant class', () => {
      const { container } = render(
        <Pagination currentPage={1} totalPages={5} onPageChange={mockOnPageChange} />
      );
      expect(container.querySelector('.fn-pagination--default')).toBeInTheDocument();
    });

    it('renders compact variant without page numbers', () => {
      const { container } = render(
        <Pagination
          currentPage={1}
          totalPages={5}
          onPageChange={mockOnPageChange}
          variant="compact"
        />
      );

      expect(container.querySelector('.fn-pagination--compact')).toBeInTheDocument();
      expect(container.querySelector('.fn-pagination__pages')).not.toBeInTheDocument();
      expect(screen.getByText('1 / 5')).toBeInTheDocument();
    });

    it('renders simple variant with text buttons', () => {
      render(
        <Pagination
          currentPage={2}
          totalPages={5}
          onPageChange={mockOnPageChange}
          variant="simple"
        />
      );

      expect(screen.getByText('Previous')).toBeInTheDocument();
      expect(screen.getByText('Next')).toBeInTheDocument();
      expect(screen.getByText('Page 2 of 5')).toBeInTheDocument();
    });
  });

  describe('Size Variants', () => {
    it('applies small size class', () => {
      const { container } = render(
        <Pagination
          currentPage={1}
          totalPages={5}
          onPageChange={mockOnPageChange}
          size="sm"
        />
      );
      expect(container.querySelector('.fn-pagination--sm')).toBeInTheDocument();
    });

    it('applies medium size class by default', () => {
      const { container } = render(
        <Pagination
          currentPage={1}
          totalPages={5}
          onPageChange={mockOnPageChange}
        />
      );
      expect(container.querySelector('.fn-pagination--md')).toBeInTheDocument();
    });

    it('applies large size class', () => {
      const { container } = render(
        <Pagination
          currentPage={1}
          totalPages={5}
          onPageChange={mockOnPageChange}
          size="lg"
        />
      );
      expect(container.querySelector('.fn-pagination--lg')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has navigation role', () => {
      render(
        <Pagination currentPage={1} totalPages={5} onPageChange={mockOnPageChange} />
      );
      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('has accessible aria-label', () => {
      render(
        <Pagination currentPage={1} totalPages={5} onPageChange={mockOnPageChange} />
      );
      expect(screen.getByRole('navigation')).toHaveAttribute('aria-label', 'Pagination');
    });

    it('page buttons have accessible names', () => {
      render(
        <Pagination currentPage={1} totalPages={5} onPageChange={mockOnPageChange} />
      );

      expect(screen.getByRole('button', { name: /^page 1$/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /^page 2$/i })).toBeInTheDocument();
    });

    it('current page has aria-current', () => {
      render(
        <Pagination currentPage={3} totalPages={5} onPageChange={mockOnPageChange} />
      );

      const currentButton = screen.getByRole('button', { name: /^page 3$/i });
      expect(currentButton).toHaveAttribute('aria-current', 'page');
    });
  });
});
