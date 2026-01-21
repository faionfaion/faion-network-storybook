import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TestimonialForm from './TestimonialForm';

// Mock child components to simplify testing
vi.mock('./ModeSelector', () => ({
  default: ({ value, onChange }: { value: string; onChange: (v: string) => void }) => (
    <div data-testid="mode-selector">
      <button onClick={() => onChange('guided')} data-active={value === 'guided'}>Guided</button>
      <button onClick={() => onChange('freeform')} data-active={value === 'freeform'}>Freeform</button>
    </div>
  ),
}));

vi.mock('./GuidedFlow', () => ({
  default: ({ onComplete }: { onComplete: (answers: Record<string, string>) => void }) => (
    <div data-testid="guided-flow">
      <button onClick={() => onComplete({ role: 'developer', feature: 'sdd', impact: 'time' })}>
        Complete Guided
      </button>
    </div>
  ),
}));

vi.mock('./FreeformEditor', () => ({
  default: ({ value, onChange }: { value: string; onChange: (v: string) => void }) => (
    <div data-testid="freeform-editor">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        data-testid="freeform-input"
      />
    </div>
  ),
}));

vi.mock('./TestimonialPreview', () => ({
  default: ({ content, onEdit }: { content: string; onEdit: () => void }) => (
    <div data-testid="testimonial-preview">
      <p>{content}</p>
      <button onClick={onEdit}>Edit</button>
    </div>
  ),
}));

vi.mock('./ConsentCheckbox', () => ({
  default: ({ checked, onChange, error }: { checked: boolean; onChange: (v: boolean) => void; error?: string }) => (
    <div data-testid="consent-checkbox">
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          data-testid="consent-input"
        />
        I consent
      </label>
      {error && <span data-testid="consent-error">{error}</span>}
    </div>
  ),
}));

vi.mock('./RewardBanner', () => ({
  default: ({ title, description }: { title: string; description: string }) => (
    <div data-testid="reward-banner">
      <strong>{title}</strong>
      <p>{description}</p>
    </div>
  ),
}));

describe('TestimonialForm', () => {
  const mockOnSubmit = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    mockOnSubmit.mockResolvedValue(undefined);
  });

  describe('Rendering', () => {
    it('renders the form with title', () => {
      render(<TestimonialForm onSubmit={mockOnSubmit} />);
      expect(screen.getByText('Share Your Experience')).toBeInTheDocument();
    });

    it('renders subtitle', () => {
      render(<TestimonialForm onSubmit={mockOnSubmit} />);
      expect(screen.getByText(/help others discover/i)).toBeInTheDocument();
    });

    it('renders mode selector initially', () => {
      render(<TestimonialForm onSubmit={mockOnSubmit} />);
      expect(screen.getByTestId('mode-selector')).toBeInTheDocument();
    });

    it('renders continue button in mode step', () => {
      render(<TestimonialForm onSubmit={mockOnSubmit} />);
      expect(screen.getByRole('button', { name: /continue/i })).toBeInTheDocument();
    });

    it('renders reward banner when reward prop provided', () => {
      render(
        <TestimonialForm
          onSubmit={mockOnSubmit}
          reward={{ title: 'Get 20% off', description: 'As a thank you' }}
        />
      );
      expect(screen.getByTestId('reward-banner')).toBeInTheDocument();
      expect(screen.getByText('Get 20% off')).toBeInTheDocument();
    });

    it('applies custom className', () => {
      const { container } = render(
        <TestimonialForm onSubmit={mockOnSubmit} className="custom-form" />
      );
      expect(container.querySelector('.custom-form')).toBeInTheDocument();
    });
  });

  describe('Mode Selection Step', () => {
    it('proceeds to content step when Continue clicked', async () => {
      const user = userEvent.setup();
      render(<TestimonialForm onSubmit={mockOnSubmit} />);

      await user.click(screen.getByRole('button', { name: /continue/i }));

      // Should show guided flow by default
      expect(screen.getByTestId('guided-flow')).toBeInTheDocument();
    });

    it('shows freeform editor when freeform mode selected', async () => {
      const user = userEvent.setup();
      render(<TestimonialForm onSubmit={mockOnSubmit} />);

      await user.click(screen.getByText('Freeform'));
      await user.click(screen.getByRole('button', { name: /continue/i }));

      expect(screen.getByTestId('freeform-editor')).toBeInTheDocument();
    });
  });

  describe('Guided Flow', () => {
    it('shows preview after completing guided flow', async () => {
      const user = userEvent.setup();
      render(<TestimonialForm onSubmit={mockOnSubmit} />);

      await user.click(screen.getByRole('button', { name: /continue/i }));
      await user.click(screen.getByText('Complete Guided'));

      expect(screen.getByTestId('testimonial-preview')).toBeInTheDocument();
    });
  });

  describe('Freeform Flow', () => {
    it('shows preview button when content is long enough', async () => {
      const user = userEvent.setup();
      render(<TestimonialForm onSubmit={mockOnSubmit} />);

      await user.click(screen.getByText('Freeform'));
      await user.click(screen.getByRole('button', { name: /continue/i }));

      const input = screen.getByTestId('freeform-input');
      // Enter 50+ characters
      fireEvent.change(input, {
        target: { value: 'This is a test testimonial that is longer than fifty characters total.' },
      });

      expect(screen.getByRole('button', { name: /preview/i })).not.toBeDisabled();
    });

    it('disables preview button when content is too short', async () => {
      const user = userEvent.setup();
      render(<TestimonialForm onSubmit={mockOnSubmit} />);

      await user.click(screen.getByText('Freeform'));
      await user.click(screen.getByRole('button', { name: /continue/i }));

      const input = screen.getByTestId('freeform-input');
      fireEvent.change(input, { target: { value: 'Short' } });

      expect(screen.getByRole('button', { name: /preview/i })).toBeDisabled();
    });
  });

  describe('Preview Step', () => {
    it('allows editing from preview', async () => {
      const user = userEvent.setup();
      render(<TestimonialForm onSubmit={mockOnSubmit} />);

      await user.click(screen.getByRole('button', { name: /continue/i }));
      await user.click(screen.getByText('Complete Guided'));
      await user.click(screen.getByText('Edit'));

      expect(screen.getByTestId('guided-flow')).toBeInTheDocument();
    });

    it('proceeds to details step', async () => {
      const user = userEvent.setup();
      render(<TestimonialForm onSubmit={mockOnSubmit} />);

      await user.click(screen.getByRole('button', { name: /continue/i }));
      await user.click(screen.getByText('Complete Guided'));
      await user.click(screen.getByRole('button', { name: /continue to details/i }));

      expect(screen.getByText('Your Information')).toBeInTheDocument();
    });
  });

  describe('Details Step', () => {
    const navigateToDetails = async () => {
      const user = userEvent.setup();
      render(<TestimonialForm onSubmit={mockOnSubmit} userName="John Doe" />);

      await user.click(screen.getByRole('button', { name: /continue/i }));
      await user.click(screen.getByText('Complete Guided'));
      await user.click(screen.getByRole('button', { name: /continue to details/i }));

      return user;
    };

    it('shows display name options', async () => {
      await navigateToDetails();

      expect(screen.getByText('How to display your name')).toBeInTheDocument();
      expect(screen.getByLabelText(/John Doe/)).toBeInTheDocument();
      expect(screen.getByLabelText(/Anonymous/)).toBeInTheDocument();
    });

    it('shows job title input', async () => {
      await navigateToDetails();

      expect(screen.getByPlaceholderText(/founder, developer/i)).toBeInTheDocument();
    });

    it('shows company input', async () => {
      await navigateToDetails();

      expect(screen.getByPlaceholderText(/acme inc/i)).toBeInTheDocument();
    });

    it('shows consent checkbox', async () => {
      await navigateToDetails();

      expect(screen.getByTestId('consent-checkbox')).toBeInTheDocument();
    });

    it('shows submit button', async () => {
      await navigateToDetails();

      expect(screen.getByRole('button', { name: /submit testimonial/i })).toBeInTheDocument();
    });
  });

  describe('Form Submission', () => {
    const navigateToSubmit = async () => {
      const user = userEvent.setup();
      render(<TestimonialForm onSubmit={mockOnSubmit} userName="John Doe" />);

      await user.click(screen.getByRole('button', { name: /continue/i }));
      await user.click(screen.getByText('Complete Guided'));
      await user.click(screen.getByRole('button', { name: /continue to details/i }));

      return user;
    };

    it('shows error when submitting without consent', async () => {
      const user = await navigateToSubmit();

      await user.click(screen.getByRole('button', { name: /submit testimonial/i }));

      expect(screen.getByTestId('consent-error')).toBeInTheDocument();
      expect(mockOnSubmit).not.toHaveBeenCalled();
    });

    it('calls onSubmit with consent checked', async () => {
      const user = await navigateToSubmit();

      await user.click(screen.getByTestId('consent-input'));
      await user.click(screen.getByRole('button', { name: /submit testimonial/i }));

      await waitFor(() => {
        expect(mockOnSubmit).toHaveBeenCalled();
      });
    });

    it('shows success state after submission', async () => {
      const user = await navigateToSubmit();

      await user.click(screen.getByTestId('consent-input'));
      await user.click(screen.getByRole('button', { name: /submit testimonial/i }));

      await waitFor(() => {
        expect(screen.getByText('Thank You!')).toBeInTheDocument();
      });
    });

    it('shows error message on submission failure', async () => {
      mockOnSubmit.mockRejectedValueOnce(new Error('Network error'));
      const user = await navigateToSubmit();

      await user.click(screen.getByTestId('consent-input'));
      await user.click(screen.getByRole('button', { name: /submit testimonial/i }));

      await waitFor(() => {
        expect(screen.getByText('Network error')).toBeInTheDocument();
      });
    });

    it('shows generic error for non-Error throws', async () => {
      mockOnSubmit.mockRejectedValueOnce('Unknown error');
      const user = await navigateToSubmit();

      await user.click(screen.getByTestId('consent-input'));
      await user.click(screen.getByRole('button', { name: /submit testimonial/i }));

      await waitFor(() => {
        expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
      });
    });

    it('shows submitting state during submission', async () => {
      mockOnSubmit.mockImplementationOnce(() => new Promise(() => {})); // Never resolves
      const user = await navigateToSubmit();

      await user.click(screen.getByTestId('consent-input'));
      await user.click(screen.getByRole('button', { name: /submit testimonial/i }));

      await waitFor(() => {
        expect(screen.getByText('Submitting...')).toBeInTheDocument();
      });
    });
  });

  describe('Display Name Options', () => {
    const navigateToDetails = async () => {
      const user = userEvent.setup();
      render(<TestimonialForm onSubmit={mockOnSubmit} userName="John Doe" />);

      await user.click(screen.getByRole('button', { name: /continue/i }));
      await user.click(screen.getByText('Complete Guided'));
      await user.click(screen.getByRole('button', { name: /continue to details/i }));

      return user;
    };

    it('allows selecting full name option', async () => {
      const user = await navigateToDetails();

      const fullNameRadio = screen.getByLabelText(/John Doe/);
      expect(fullNameRadio).toBeChecked();
    });

    it('allows selecting first name only option', async () => {
      const user = await navigateToDetails();

      await user.click(screen.getByLabelText(/first name only/i));

      const radio = screen.getByLabelText(/first name only/i);
      expect(radio).toBeChecked();
    });

    it('allows selecting anonymous option', async () => {
      const user = await navigateToDetails();

      await user.click(screen.getByLabelText(/anonymous/i));

      const radio = screen.getByLabelText(/anonymous/i);
      expect(radio).toBeChecked();
    });
  });
});
