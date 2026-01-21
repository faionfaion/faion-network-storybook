import { useState } from 'react';
import ModeSelector, { TestimonialMode } from './ModeSelector';
import GuidedFlow from './GuidedFlow';
import FreeformEditor from './FreeformEditor';
import TestimonialPreview from './TestimonialPreview';
import ConsentCheckbox from './ConsentCheckbox';
import RewardBanner from './RewardBanner';
import { Question } from './QuestionStep';
import './TestimonialForm.css';

export interface TestimonialData {
  mode: TestimonialMode;
  content: string;
  guidedAnswers?: Record<string, string>;
  displayName: 'full' | 'first_initial' | 'anonymous';
  jobTitle?: string;
  company?: string;
  consentGiven: boolean;
}

export interface TestimonialFormProps {
  /** Submit handler */
  onSubmit: (data: TestimonialData) => Promise<void>;
  /** User's full name */
  userName?: string;
  /** Guided questions */
  questions?: Question[];
  /** Reward banner config */
  reward?: { title: string; description: string };
  /** Additional class name */
  className?: string;
}

const defaultQuestions: Question[] = [
  {
    id: 'role',
    question: 'What best describes your role?',
    options: [
      { label: 'Solopreneur / Founder', value: 'solopreneur' },
      { label: 'Developer / Engineer', value: 'developer' },
      { label: 'Product Manager', value: 'pm' },
      { label: 'Designer', value: 'designer' },
    ],
    allowCustom: true,
  },
  {
    id: 'feature',
    question: 'What feature did you find most valuable?',
    options: [
      { label: 'SDD Methodology', value: 'sdd' },
      { label: 'AI Agents & Skills', value: 'agents' },
      { label: 'Marketing Strategies', value: 'marketing' },
      { label: 'Product Development', value: 'product' },
    ],
    allowCustom: true,
  },
  {
    id: 'impact',
    question: 'How has Faion Network impacted your work?',
    options: [
      { label: 'Saved me significant time', value: 'time' },
      { label: 'Improved my product quality', value: 'quality' },
      { label: 'Helped me launch faster', value: 'launch' },
      { label: 'Better organized my workflow', value: 'workflow' },
    ],
    allowCustom: true,
  },
];

type FormStep = 'mode' | 'content' | 'preview' | 'details' | 'submitting' | 'success';

/**
 * TestimonialForm - Main testimonial submission form
 *
 * Multi-step form for collecting and submitting testimonials.
 */
export default function TestimonialForm({
  onSubmit,
  userName = 'User',
  questions = defaultQuestions,
  reward,
  className = '',
}: TestimonialFormProps) {
  const [step, setStep] = useState<FormStep>('mode');
  const [mode, setMode] = useState<TestimonialMode>('guided');
  const [content, setContent] = useState('');
  const [guidedAnswers, setGuidedAnswers] = useState<Record<string, string>>({});
  const [displayName, setDisplayName] = useState<'full' | 'first_initial' | 'anonymous'>('full');
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState('');
  const [submitError, setSubmitError] = useState('');

  const classes = ['fn-testimonial-form', className].filter(Boolean).join(' ');

  const generatePreviewFromAnswers = (answers: Record<string, string>): string => {
    const role = answers.role || 'user';
    const feature = answers.feature || 'features';
    const impact = answers.impact || 'helped me';
    return `As a ${role}, I found the ${feature} most valuable. It has ${impact} in my work. I would highly recommend Faion Network to anyone looking to improve their workflow!`;
  };

  const getDisplayNameText = (): string => {
    if (displayName === 'anonymous') return 'Anonymous';
    if (displayName === 'first_initial') return `${userName.split(' ')[0]} ${userName.split(' ')[1]?.[0] || ''}.`.trim();
    return userName;
  };

  const handleModeSelect = () => {
    setStep('content');
  };

  const handleGuidedComplete = (answers: Record<string, string>) => {
    setGuidedAnswers(answers);
    setContent(generatePreviewFromAnswers(answers));
    setStep('preview');
  };

  const handleFreeformContinue = () => {
    if (content.length >= 50) {
      setStep('preview');
    }
  };

  const handleEdit = () => {
    setStep('content');
  };

  const handlePreviewContinue = () => {
    setStep('details');
  };

  const handleSubmit = async () => {
    if (!consent) {
      setConsentError('You must agree to the consent before submitting.');
      return;
    }

    setConsentError('');
    setSubmitError('');
    setStep('submitting');

    try {
      await onSubmit({
        mode,
        content,
        guidedAnswers: mode === 'guided' ? guidedAnswers : undefined,
        displayName,
        jobTitle: jobTitle || undefined,
        company: company || undefined,
        consentGiven: true,
      });
      setStep('success');
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setStep('details');
    }
  };

  // Success state
  if (step === 'success') {
    return (
      <div className={classes}>
        <div className="fn-testimonial-form__success">
          <span className="fn-testimonial-form__success-icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="3"/>
              <path d="M16 24l5.5 5.5L32 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <h2 className="fn-testimonial-form__success-title">Thank You!</h2>
          <p className="fn-testimonial-form__success-text">
            Your testimonial has been submitted successfully. We will review it and publish it soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={classes}>
      <h2 className="fn-testimonial-form__title">Share Your Experience</h2>
      <p className="fn-testimonial-form__subtitle">
        Help others discover Faion Network by sharing your story.
      </p>

      {reward && <RewardBanner title={reward.title} description={reward.description} />}

      {step === 'mode' && (
        <>
          <ModeSelector value={mode} onChange={setMode} />
          <button
            type="button"
            className="fn-testimonial-form__button"
            onClick={handleModeSelect}
          >
            Continue
          </button>
        </>
      )}

      {step === 'content' && mode === 'guided' && (
        <GuidedFlow
          questions={questions}
          onComplete={handleGuidedComplete}
          onGeneratePreview={generatePreviewFromAnswers}
        />
      )}

      {step === 'content' && mode === 'freeform' && (
        <>
          <FreeformEditor
            value={content}
            onChange={setContent}
            minLength={50}
            maxLength={1000}
          />
          <button
            type="button"
            className="fn-testimonial-form__button"
            onClick={handleFreeformContinue}
            disabled={content.length < 50}
          >
            Preview
          </button>
        </>
      )}

      {step === 'preview' && (
        <>
          <TestimonialPreview
            content={content}
            displayName={getDisplayNameText()}
            jobTitle={jobTitle}
            company={company}
            onEdit={handleEdit}
          />
          <button
            type="button"
            className="fn-testimonial-form__button"
            onClick={handlePreviewContinue}
          >
            Continue to Details
          </button>
        </>
      )}

      {(step === 'details' || step === 'submitting') && (
        <>
          <div className="fn-testimonial-form__details">
            <h3 className="fn-testimonial-form__section-title">Your Information</h3>

            <div className="fn-testimonial-form__field">
              <label className="fn-testimonial-form__label">How to display your name</label>
              <div className="fn-testimonial-form__radio-group">
                <label className="fn-testimonial-form__radio">
                  <input
                    type="radio"
                    name="displayName"
                    checked={displayName === 'full'}
                    onChange={() => setDisplayName('full')}
                  />
                  <span>{userName}</span>
                </label>
                <label className="fn-testimonial-form__radio">
                  <input
                    type="radio"
                    name="displayName"
                    checked={displayName === 'first_initial'}
                    onChange={() => setDisplayName('first_initial')}
                  />
                  <span>{userName.split(' ')[0]} {userName.split(' ')[1]?.[0] || ''}.{' '}(First name only)</span>
                </label>
                <label className="fn-testimonial-form__radio">
                  <input
                    type="radio"
                    name="displayName"
                    checked={displayName === 'anonymous'}
                    onChange={() => setDisplayName('anonymous')}
                  />
                  <span>Anonymous</span>
                </label>
              </div>
            </div>

            <div className="fn-testimonial-form__field">
              <label className="fn-testimonial-form__label">Job Title (optional)</label>
              <input
                type="text"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                placeholder="e.g., Founder, Developer, Designer"
                className="fn-testimonial-form__input"
              />
            </div>

            <div className="fn-testimonial-form__field">
              <label className="fn-testimonial-form__label">Company (optional)</label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="e.g., Acme Inc."
                className="fn-testimonial-form__input"
              />
            </div>
          </div>

          <ConsentCheckbox
            checked={consent}
            onChange={setConsent}
            error={consentError}
          />

          {submitError && (
            <p className="fn-testimonial-form__error">{submitError}</p>
          )}

          <button
            type="button"
            className="fn-testimonial-form__button fn-testimonial-form__button--primary"
            onClick={handleSubmit}
            disabled={step === 'submitting'}
          >
            {step === 'submitting' ? 'Submitting...' : 'Submit Testimonial'}
          </button>
        </>
      )}
    </div>
  );
}

// Named export
export { TestimonialForm };
