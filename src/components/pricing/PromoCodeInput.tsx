import { useState, FormEvent } from 'react';
import './PromoCodeInput.css';

export interface PromoCodeInputProps {
  /** Apply promo code handler */
  onApply: (code: string) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Button text */
  buttonText?: string;
  /** Is loading */
  isLoading?: boolean;
  /** Error message */
  error?: string;
  /** Success message */
  success?: string;
  /** Disabled state */
  disabled?: boolean;
}

/**
 * PromoCodeInput - Input for applying promo codes
 *
 * Used in checkout/pricing flows for discount codes.
 */
export default function PromoCodeInput({
  onApply,
  placeholder = 'Enter promo code',
  buttonText = 'Apply',
  isLoading = false,
  error,
  success,
  disabled = false,
}: PromoCodeInputProps) {
  const [code, setCode] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (code.trim() && !isLoading && !disabled) {
      onApply(code.trim().toUpperCase());
    }
  };

  return (
    <div className="fn-promo-input">
      <form className="fn-promo-input__form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder={placeholder}
          className={`fn-promo-input__field ${error ? 'fn-promo-input__field--error' : ''} ${success ? 'fn-promo-input__field--success' : ''}`}
          disabled={disabled || isLoading}
        />
        <button
          type="submit"
          className="fn-promo-input__button"
          disabled={!code.trim() || isLoading || disabled}
        >
          {isLoading ? (
            <span className="fn-promo-input__spinner" />
          ) : (
            buttonText
          )}
        </button>
      </form>

      {error && (
        <p className="fn-promo-input__message fn-promo-input__message--error">
          {error}
        </p>
      )}

      {success && (
        <p className="fn-promo-input__message fn-promo-input__message--success">
          {success}
        </p>
      )}
    </div>
  );
}

// Named export
export { PromoCodeInput };
