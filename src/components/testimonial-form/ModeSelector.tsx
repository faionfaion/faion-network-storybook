import './ModeSelector.css';

export type TestimonialMode = 'guided' | 'freeform';

export interface ModeSelectorProps {
  /** Current selected mode */
  value: TestimonialMode;
  /** Mode change handler */
  onChange: (mode: TestimonialMode) => void;
  /** Additional class name */
  className?: string;
}

// Guided icon
const GuidedIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.667 8h10.666M10.667 13.333h10.666M10.667 18.667h5.333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M26.667 16a10.667 10.667 0 11-21.334 0 10.667 10.667 0 0121.334 0z" stroke="currentColor" strokeWidth="2"/>
    <circle cx="21" cy="21" r="4" fill="currentColor"/>
    <path d="M19.5 21l1 1 2-2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Freeform icon
const FreeformIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.667 6.667L25.333 9.333 11.333 23.333H8.667v-2.666L22.667 6.667z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 28h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

/**
 * ModeSelector - Toggle between guided and freeform testimonial modes
 *
 * Allows users to choose between answering guided questions or writing freely.
 */
export default function ModeSelector({
  value,
  onChange,
  className = '',
}: ModeSelectorProps) {
  const classes = ['fn-mode-selector', className].filter(Boolean).join(' ');

  return (
    <div className={classes} role="radiogroup" aria-label="Testimonial mode">
      <button
        type="button"
        className={`fn-mode-selector__option ${value === 'guided' ? 'fn-mode-selector__option--active' : ''}`}
        onClick={() => onChange('guided')}
        role="radio"
        aria-checked={value === 'guided'}
      >
        <span className="fn-mode-selector__icon">
          <GuidedIcon />
        </span>
        <span className="fn-mode-selector__content">
          <span className="fn-mode-selector__title">Guided</span>
          <span className="fn-mode-selector__description">
            Answer questions step by step
          </span>
          <span className="fn-mode-selector__badge">Recommended</span>
        </span>
      </button>

      <button
        type="button"
        className={`fn-mode-selector__option ${value === 'freeform' ? 'fn-mode-selector__option--active' : ''}`}
        onClick={() => onChange('freeform')}
        role="radio"
        aria-checked={value === 'freeform'}
      >
        <span className="fn-mode-selector__icon">
          <FreeformIcon />
        </span>
        <span className="fn-mode-selector__content">
          <span className="fn-mode-selector__title">Free-form</span>
          <span className="fn-mode-selector__description">
            Write your own testimonial
          </span>
        </span>
      </button>
    </div>
  );
}

// Named export
export { ModeSelector };
