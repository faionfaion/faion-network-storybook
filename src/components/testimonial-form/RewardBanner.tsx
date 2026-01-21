import './RewardBanner.css';

export interface RewardBannerProps {
  /** Banner title */
  title: string;
  /** Banner description */
  description: string;
  /** Additional class name */
  className?: string;
}

// Gift icon
const GiftIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 12v10H4V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 7H2v5h20V7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 22V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 7H7.5a2.5 2.5 0 110-5C11 2 12 7 12 7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 7h4.5a2.5 2.5 0 100-5C13 2 12 7 12 7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/**
 * RewardBanner - Reward incentive banner for testimonials
 *
 * Shows the reward/incentive for submitting a testimonial.
 */
export default function RewardBanner({
  title,
  description,
  className = '',
}: RewardBannerProps) {
  const classes = ['fn-reward-banner', className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <span className="fn-reward-banner__icon" aria-hidden="true">
        <GiftIcon />
      </span>
      <div className="fn-reward-banner__content">
        <h4 className="fn-reward-banner__title">{title}</h4>
        <p className="fn-reward-banner__description">{description}</p>
      </div>
    </div>
  );
}

// Named export
export { RewardBanner };
