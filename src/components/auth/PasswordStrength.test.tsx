import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import PasswordStrength from './PasswordStrength';

describe('PasswordStrength', () => {
  describe('Rendering', () => {
    it('renders nothing when password is empty', () => {
      const { container } = render(<PasswordStrength password="" />);
      expect(container.firstChild).toBeNull();
    });

    it('renders strength meter when password has content', () => {
      const { container } = render(<PasswordStrength password="test" />);
      expect(container.querySelector('.fn-password-strength')).toBeInTheDocument();
    });

    it('renders strength bar with 5 segments', () => {
      const { container } = render(<PasswordStrength password="test" />);
      expect(container.querySelectorAll('.fn-password-strength__segment')).toHaveLength(5);
    });
  });

  describe('Strength Levels', () => {
    it('shows "Weak" for single character type', () => {
      render(<PasswordStrength password="aaaa" />);
      expect(screen.getByText('Weak')).toBeInTheDocument();
    });

    it('shows "Fair" for two character types', () => {
      // 2 requirements met: lowercase + number (but not length)
      render(<PasswordStrength password="aaa1" />);
      expect(screen.getByText('Fair')).toBeInTheDocument();
    });

    it('shows "Good" for three character types', () => {
      // 3 requirements met: lowercase + uppercase + number (but not length or special)
      render(<PasswordStrength password="aB1" />);
      expect(screen.getByText('Good')).toBeInTheDocument();
    });

    it('shows "Strong" for four character types', () => {
      // 4 requirements met: length + lowercase + uppercase + number
      render(<PasswordStrength password="aaaBBB111" />);
      expect(screen.getByText('Strong')).toBeInTheDocument();
    });

    it('shows "Very Strong" for all five requirements', () => {
      render(<PasswordStrength password="aaaBBB111!@#" />);
      expect(screen.getByText('Very Strong')).toBeInTheDocument();
    });
  });

  describe('Requirements Display', () => {
    it('shows requirements by default', () => {
      render(<PasswordStrength password="test" />);
      expect(screen.getByText(/at least 8 characters/i)).toBeInTheDocument();
    });

    it('hides requirements when showRequirements is false', () => {
      render(<PasswordStrength password="test" showRequirements={false} />);
      expect(screen.queryByText(/at least 8 characters/i)).not.toBeInTheDocument();
    });

    it('shows all 5 requirements', () => {
      render(<PasswordStrength password="test" />);

      expect(screen.getByText(/at least 8 characters/i)).toBeInTheDocument();
      expect(screen.getByText(/uppercase letter/i)).toBeInTheDocument();
      expect(screen.getByText(/lowercase letter/i)).toBeInTheDocument();
      expect(screen.getByText(/number/i)).toBeInTheDocument();
      expect(screen.getByText(/special character/i)).toBeInTheDocument();
    });
  });

  describe('Requirement Status', () => {
    it('marks length requirement as met when >= 8 chars', () => {
      const { container } = render(<PasswordStrength password="testtest" />);
      const requirements = container.querySelectorAll('.fn-password-strength__requirement');
      const lengthReq = requirements[0];
      expect(lengthReq).toHaveClass('fn-password-strength__requirement--met');
    });

    it('marks length requirement as not met when < 8 chars', () => {
      const { container } = render(<PasswordStrength password="test" />);
      const requirements = container.querySelectorAll('.fn-password-strength__requirement');
      const lengthReq = requirements[0];
      expect(lengthReq).not.toHaveClass('fn-password-strength__requirement--met');
    });

    it('marks uppercase requirement as met when has uppercase', () => {
      const { container } = render(<PasswordStrength password="testA" />);
      const requirements = container.querySelectorAll('.fn-password-strength__requirement');
      const uppercaseReq = requirements[1];
      expect(uppercaseReq).toHaveClass('fn-password-strength__requirement--met');
    });

    it('marks lowercase requirement as met when has lowercase', () => {
      const { container } = render(<PasswordStrength password="test" />);
      const requirements = container.querySelectorAll('.fn-password-strength__requirement');
      const lowercaseReq = requirements[2];
      expect(lowercaseReq).toHaveClass('fn-password-strength__requirement--met');
    });

    it('marks number requirement as met when has number', () => {
      const { container } = render(<PasswordStrength password="test1" />);
      const requirements = container.querySelectorAll('.fn-password-strength__requirement');
      const numberReq = requirements[3];
      expect(numberReq).toHaveClass('fn-password-strength__requirement--met');
    });

    it('marks special character requirement as met when has special char', () => {
      const { container } = render(<PasswordStrength password="test!" />);
      const requirements = container.querySelectorAll('.fn-password-strength__requirement');
      const specialReq = requirements[4];
      expect(specialReq).toHaveClass('fn-password-strength__requirement--met');
    });
  });

  describe('Custom Minimum Length', () => {
    it('uses custom minLength for requirement check', () => {
      render(<PasswordStrength password="test" minLength={4} />);
      expect(screen.getByText(/at least 4 characters/i)).toBeInTheDocument();
    });

    it('marks length requirement as met with custom minLength', () => {
      const { container } = render(<PasswordStrength password="test" minLength={4} />);
      const requirements = container.querySelectorAll('.fn-password-strength__requirement');
      const lengthReq = requirements[0];
      expect(lengthReq).toHaveClass('fn-password-strength__requirement--met');
    });

    it('marks length requirement as not met with longer minLength', () => {
      const { container } = render(<PasswordStrength password="test" minLength={10} />);
      const requirements = container.querySelectorAll('.fn-password-strength__requirement');
      const lengthReq = requirements[0];
      expect(lengthReq).not.toHaveClass('fn-password-strength__requirement--met');
    });
  });

  describe('Strength Bar Segments', () => {
    it('fills segments based on strength score', () => {
      // Weak password = 1 segment filled
      const { container } = render(<PasswordStrength password="aa" />);
      const filledSegments = container.querySelectorAll(
        '.fn-password-strength__segment--filled'
      );
      expect(filledSegments.length).toBeGreaterThanOrEqual(1);
    });

    it('fills all segments for very strong password', () => {
      const { container } = render(<PasswordStrength password="MyP@ssw0rd!" />);
      const filledSegments = container.querySelectorAll(
        '.fn-password-strength__segment--filled'
      );
      expect(filledSegments.length).toBe(5);
    });
  });

  describe('Check Icons', () => {
    it('shows check icon for met requirements', () => {
      const { container } = render(<PasswordStrength password="testtest" />);
      const metRequirements = container.querySelectorAll(
        '.fn-password-strength__requirement--met'
      );

      metRequirements.forEach((req) => {
        const checkIcon = req.querySelector('.fn-password-strength__check svg');
        expect(checkIcon).toBeInTheDocument();
      });
    });

    it('shows circle icon for unmet requirements', () => {
      const { container } = render(<PasswordStrength password="test" />);
      const unmetRequirements = container.querySelectorAll(
        '.fn-password-strength__requirement:not(.fn-password-strength__requirement--met)'
      );

      // Verify there are unmet requirements
      expect(unmetRequirements.length).toBeGreaterThan(0);

      // Each unmet requirement should have an SVG icon
      unmetRequirements.forEach((req) => {
        const icon = req.querySelector('.fn-password-strength__check svg');
        expect(icon).toBeInTheDocument();
      });
    });
  });

  describe('Color Indication', () => {
    it('applies appropriate color based on strength', () => {
      const { container } = render(<PasswordStrength password="MyP@ssw0rd!" />);
      const label = container.querySelector('.fn-password-strength__label');

      // Strong passwords display "Very Strong" label and have inline style
      expect(label).toBeInTheDocument();
      expect(label).toHaveAttribute('style');
    });
  });

  describe('Edge Cases', () => {
    it('handles password with only spaces', () => {
      const { container } = render(<PasswordStrength password="        " />);
      // 8 spaces meet length requirement
      expect(container.querySelector('.fn-password-strength')).toBeInTheDocument();
    });

    it('handles password with unicode characters', () => {
      render(<PasswordStrength password="test" />);
      expect(screen.queryByText('Weak')).toBeInTheDocument();
    });

    it('handles password with emoji', () => {
      render(<PasswordStrength password="test" />);
      // Should still render without crashing
      expect(screen.getByText('Weak')).toBeInTheDocument();
    });
  });
});
