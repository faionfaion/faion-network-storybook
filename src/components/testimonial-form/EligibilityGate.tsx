import './EligibilityGate.css';

export type EligibilityReason = 'not_authenticated' | 'not_paid' | 'already_submitted';

export interface TestimonialData {
  mode: 'guided' | 'freeform';
  content: string;
  guidedAnswers?: Record<string, string>;
  displayName: 'full' | 'first_initial' | 'anonymous';
  jobTitle?: string;
  company?: string;
  consentGiven: boolean;
}

export interface EligibilityGateProps {
  /** Reason for ineligibility */
  reason: EligibilityReason;
  /** Existing testimonial if already submitted */
  existingTestimonial?: TestimonialData;
  /** Additional class name */
  className?: string;
}

// Lock icon
const LockIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5.333" y="14.667" width="21.334" height="14.666" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M9.333 14.667V9.333a6.667 6.667 0 1113.334 0v5.334" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Check circle icon
const CheckCircleIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2"/>
    <path d="M11 16l3.5 3.5 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// User icon
const UserIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="10.667" r="5.333" stroke="currentColor" strokeWidth="2"/>
    <path d="M5.333 28c0-5.891 4.776-10.667 10.667-10.667S26.667 22.11 26.667 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const gateConfig: Record<EligibilityReason, { icon: React.FC; title: string; description: string; cta?: { text: string; href: string } }> = {
  not_authenticated: {
    icon: UserIcon,
    title: 'Sign in to Submit',
    description: 'You need to be signed in to your account to submit a testimonial.',
    cta: { text: 'Sign In', href: '/login' },
  },
  not_paid: {
    icon: LockIcon,
    title: 'Paid Subscribers Only',
    description: 'Testimonials are only available to paid subscribers. Upgrade your plan to share your experience.',
    cta: { text: 'View Plans', href: '/pricing' },
  },
  already_submitted: {
    icon: CheckCircleIcon,
    title: 'Thanks for Your Testimonial!',
    description: 'You have already submitted a testimonial. We appreciate your support!',
  },
};

/**
 * EligibilityGate - Gating component for testimonial eligibility
 *
 * Shows appropriate message when user is not eligible to submit.
 */
export default function EligibilityGate({
  reason,
  existingTestimonial,
  className = '',
}: EligibilityGateProps) {
  const classes = ['fn-eligibility-gate', className].filter(Boolean).join(' ');

  const config = gateConfig[reason];
  const Icon = config.icon;

  return (
    <div className={classes}>
      <span className={`fn-eligibility-gate__icon fn-eligibility-gate__icon--${reason}`}>
        <Icon />
      </span>
      <h3 className="fn-eligibility-gate__title">{config.title}</h3>
      <p className="fn-eligibility-gate__description">{config.description}</p>

      {reason === 'already_submitted' && existingTestimonial && (
        <div className="fn-eligibility-gate__existing">
          <blockquote className="fn-eligibility-gate__quote">
            "{existingTestimonial.content}"
          </blockquote>
        </div>
      )}

      {config.cta && (
        <a href={config.cta.href} className="fn-eligibility-gate__cta">
          {config.cta.text}
        </a>
      )}
    </div>
  );
}

// Named export
export { EligibilityGate };
