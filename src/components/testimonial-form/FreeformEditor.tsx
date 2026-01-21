import './FreeformEditor.css';

export interface FreeformEditorProps {
  /** Current text value */
  value: string;
  /** Value change handler */
  onChange: (value: string) => void;
  /** Minimum character length */
  minLength?: number;
  /** Maximum character length */
  maxLength?: number;
  /** Placeholder text */
  placeholder?: string;
  /** Additional class name */
  className?: string;
}

/**
 * FreeformEditor - Text area for free-form testimonial writing
 *
 * Rich text area with character counter and validation.
 */
export default function FreeformEditor({
  value,
  onChange,
  minLength = 50,
  maxLength = 1000,
  placeholder = 'Share your experience with Faion Network...',
  className = '',
}: FreeformEditorProps) {
  const classes = ['fn-freeform-editor', className].filter(Boolean).join(' ');

  const charCount = value.length;
  const isTooShort = charCount > 0 && charCount < minLength;
  const isTooLong = charCount > maxLength;
  const isValid = charCount >= minLength && charCount <= maxLength;

  return (
    <div className={classes}>
      <label className="fn-freeform-editor__label">
        Write your testimonial
      </label>
      <div className="fn-freeform-editor__wrapper">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`fn-freeform-editor__textarea ${isTooLong ? 'fn-freeform-editor__textarea--error' : ''}`}
          rows={8}
          maxLength={maxLength + 100} // Allow some overflow to show error
        />
      </div>
      <div className="fn-freeform-editor__footer">
        {isTooShort && (
          <span className="fn-freeform-editor__hint">
            {minLength - charCount} more characters needed
          </span>
        )}
        {isTooLong && (
          <span className="fn-freeform-editor__error">
            {charCount - maxLength} characters over limit
          </span>
        )}
        {isValid && (
          <span className="fn-freeform-editor__success">
            Looking great!
          </span>
        )}
        <span className={`fn-freeform-editor__count ${isTooLong ? 'fn-freeform-editor__count--error' : ''}`}>
          {charCount} / {maxLength}
        </span>
      </div>
    </div>
  );
}

// Named export
export { FreeformEditor };
