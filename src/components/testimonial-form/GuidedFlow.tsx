import { useState } from 'react';
import QuestionStep, { Question } from './QuestionStep';
import './GuidedFlow.css';

export interface GuidedFlowProps {
  /** List of questions */
  questions: Question[];
  /** Complete handler with answers */
  onComplete: (answers: Record<string, string>) => void;
  /** Generate preview text from answers */
  onGeneratePreview: (answers: Record<string, string>) => string;
  /** Additional class name */
  className?: string;
}

// Arrow left icon
const ArrowLeftIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.833 10H4.167M4.167 10l5 5M4.167 10l5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Arrow right icon
const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.167 10h11.666M15.833 10l-5 5M15.833 10l-5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/**
 * GuidedFlow - Multi-step guided testimonial flow
 *
 * Walks users through questions step by step with progress indicator.
 */
export default function GuidedFlow({
  questions,
  onComplete,
  onGeneratePreview,
  className = '',
}: GuidedFlowProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const classes = ['fn-guided-flow', className].filter(Boolean).join(' ');

  const totalSteps = questions.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;
  const currentQuestion = questions[currentStep];
  const isLastStep = currentStep === totalSteps - 1;
  const canProceed = !!answers[currentQuestion.id];

  const handleAnswerChange = (value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: value,
    }));
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (!canProceed) return;

    if (isLastStep) {
      onComplete(answers);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className={classes}>
      {/* Header */}
      <div className="fn-guided-flow__header">
        <span className="fn-guided-flow__step-info">
          Step {currentStep + 1} of {totalSteps}
        </span>
        {currentStep > 0 && (
          <button
            type="button"
            className="fn-guided-flow__back"
            onClick={handleBack}
            aria-label="Go back"
          >
            <ArrowLeftIcon />
            <span>Back</span>
          </button>
        )}
      </div>

      {/* Progress bar */}
      <div className="fn-guided-flow__progress">
        <div
          className="fn-guided-flow__progress-bar"
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>

      {/* Question */}
      <QuestionStep
        question={currentQuestion}
        value={answers[currentQuestion.id] || ''}
        onChange={handleAnswerChange}
      />

      {/* Navigation */}
      <div className="fn-guided-flow__nav">
        <button
          type="button"
          className="fn-guided-flow__continue"
          onClick={handleNext}
          disabled={!canProceed}
        >
          <span>{isLastStep ? 'Generate Preview' : 'Continue'}</span>
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
}

// Named export
export { GuidedFlow };
