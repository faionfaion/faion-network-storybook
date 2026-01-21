import { useState } from 'react';
import './QuestionStep.css';

export interface QuestionOption {
  label: string;
  value: string;
}

export interface Question {
  id: string;
  question: string;
  options: QuestionOption[];
  allowCustom?: boolean;
}

export interface QuestionStepProps {
  /** Question configuration */
  question: Question;
  /** Current selected value */
  value: string;
  /** Value change handler */
  onChange: (value: string) => void;
  /** Additional class name */
  className?: string;
}

/**
 * QuestionStep - Single question in guided testimonial flow
 *
 * Displays a question with predefined options and optional custom input.
 */
export default function QuestionStep({
  question,
  value,
  onChange,
  className = '',
}: QuestionStepProps) {
  const [customValue, setCustomValue] = useState('');
  const [showCustom, setShowCustom] = useState(false);

  const classes = ['fn-question-step', className].filter(Boolean).join(' ');

  const handleOptionSelect = (optionValue: string) => {
    setShowCustom(false);
    onChange(optionValue);
  };

  const handleCustomSelect = () => {
    setShowCustom(true);
    onChange(customValue);
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setCustomValue(newValue);
    if (showCustom) {
      onChange(newValue);
    }
  };

  return (
    <div className={classes}>
      <h3 className="fn-question-step__question">{question.question}</h3>
      <div className="fn-question-step__options" role="radiogroup">
        {question.options.map((option) => (
          <label
            key={option.value}
            className={`fn-question-step__option ${!showCustom && value === option.value ? 'fn-question-step__option--selected' : ''}`}
          >
            <input
              type="radio"
              name={question.id}
              value={option.value}
              checked={!showCustom && value === option.value}
              onChange={() => handleOptionSelect(option.value)}
              className="fn-question-step__radio"
            />
            <span className="fn-question-step__radio-circle" />
            <span className="fn-question-step__option-label">{option.label}</span>
          </label>
        ))}
        {question.allowCustom && (
          <label
            className={`fn-question-step__option fn-question-step__option--custom ${showCustom ? 'fn-question-step__option--selected' : ''}`}
          >
            <input
              type="radio"
              name={question.id}
              value="custom"
              checked={showCustom}
              onChange={handleCustomSelect}
              className="fn-question-step__radio"
            />
            <span className="fn-question-step__radio-circle" />
            <span className="fn-question-step__option-label">Other:</span>
            <input
              type="text"
              value={customValue}
              onChange={handleCustomChange}
              onFocus={handleCustomSelect}
              placeholder="Type your answer..."
              className="fn-question-step__custom-input"
            />
          </label>
        )}
      </div>
    </div>
  );
}

// Named export
export { QuestionStep };
