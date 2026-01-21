import { ReactNode } from 'react';
import './StepByStep.css';

export interface Step {
  /** Step title */
  title: string;
  /** Step content */
  content: ReactNode;
  /** Step duration/estimate (optional) */
  duration?: string;
  /** Step icon (optional) */
  icon?: ReactNode;
}

export interface StepByStepProps {
  /** List of steps */
  steps: Step[];
  /** Variant */
  variant?: 'default' | 'compact' | 'cards';
  /** Show step numbers */
  showNumbers?: boolean;
  /** Orientation */
  orientation?: 'vertical' | 'horizontal';
  /** Additional class name */
  className?: string;
}

// Default number icon
const NumberIcon = ({ number }: { number: number }) => (
  <span className="fn-step-by-step__number">{number}</span>
);

/**
 * StepByStep - Numbered process steps for MDX
 *
 * Displays a sequence of steps with numbers, titles, and content.
 */
export default function StepByStep({
  steps,
  variant = 'default',
  showNumbers = true,
  orientation = 'vertical',
  className = '',
}: StepByStepProps) {
  const classes = [
    'fn-step-by-step',
    `fn-step-by-step--${variant}`,
    `fn-step-by-step--${orientation}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isLast = index === steps.length - 1;

        return (
          <div
            key={index}
            className={`fn-step-by-step__step ${isLast ? 'fn-step-by-step__step--last' : ''}`}
          >
            {/* Indicator */}
            <div className="fn-step-by-step__indicator">
              {step.icon ? (
                <span className="fn-step-by-step__icon">{step.icon}</span>
              ) : showNumbers ? (
                <NumberIcon number={stepNumber} />
              ) : (
                <span className="fn-step-by-step__dot" />
              )}
              {!isLast && <div className="fn-step-by-step__line" />}
            </div>

            {/* Content */}
            <div className="fn-step-by-step__content">
              <div className="fn-step-by-step__header">
                <h3 className="fn-step-by-step__title">{step.title}</h3>
                {step.duration && (
                  <span className="fn-step-by-step__duration">{step.duration}</span>
                )}
              </div>
              <div className="fn-step-by-step__body">{step.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Named export
export { StepByStep };
