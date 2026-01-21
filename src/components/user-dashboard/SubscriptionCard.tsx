import './SubscriptionCard.css';

export interface SubscriptionCardProps {
  /** Current plan name */
  plan: string;
  /** Plan tier: free, plus, pro, team, ultimate */
  tier: 'free' | 'plus' | 'pro' | 'team' | 'ultimate';
  /** Billing cycle */
  billing?: 'monthly' | 'annual';
  /** Price amount */
  price?: number;
  /** Next billing date (ISO string) */
  nextBillingDate?: string;
  /** Whether subscription is active */
  isActive?: boolean;
  /** Handler for manage subscription */
  onManage?: () => void;
  /** Handler for upgrade */
  onUpgrade?: () => void;
  /** Additional class name */
  className?: string;
}

/**
 * SubscriptionCard - Displays current subscription status
 *
 * Shows plan details, billing info, and subscription management actions.
 */
export default function SubscriptionCard({
  plan,
  tier,
  billing,
  price,
  nextBillingDate,
  isActive = true,
  onManage,
  onUpgrade,
  className = '',
}: SubscriptionCardProps) {
  const classes = [
    'fn-subscription-card',
    `fn-subscription-card--${tier}`,
    !isActive ? 'fn-subscription-card--inactive' : '',
    className,
  ].filter(Boolean).join(' ');

  const formattedDate = nextBillingDate
    ? new Date(nextBillingDate).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : null;

  const showUpgrade = tier === 'free' || tier === 'plus';

  return (
    <div className={classes}>
      <div className="fn-subscription-card__header">
        <div className="fn-subscription-card__plan-info">
          <span className="fn-subscription-card__label">Current Plan</span>
          <div className="fn-subscription-card__plan-row">
            <h3 className="fn-subscription-card__plan-name">{plan}</h3>
            <span className={`fn-subscription-card__status fn-subscription-card__status--${isActive ? 'active' : 'inactive'}`}>
              {isActive ? 'Active' : 'Inactive'}
            </span>
          </div>
        </div>
        <TierIcon tier={tier} />
      </div>

      {(price !== undefined || formattedDate) && (
        <div className="fn-subscription-card__details">
          {price !== undefined && (
            <div className="fn-subscription-card__detail">
              <span className="fn-subscription-card__detail-label">Price</span>
              <span className="fn-subscription-card__detail-value">
                ${price}/{billing === 'annual' ? 'year' : 'month'}
              </span>
            </div>
          )}
          {formattedDate && (
            <div className="fn-subscription-card__detail">
              <span className="fn-subscription-card__detail-label">Next billing</span>
              <span className="fn-subscription-card__detail-value">{formattedDate}</span>
            </div>
          )}
        </div>
      )}

      <div className="fn-subscription-card__actions">
        {showUpgrade && onUpgrade && (
          <button
            type="button"
            className="fn-subscription-card__button fn-subscription-card__button--primary"
            onClick={onUpgrade}
          >
            Upgrade Plan
          </button>
        )}
        {onManage && tier !== 'free' && (
          <button
            type="button"
            className="fn-subscription-card__button fn-subscription-card__button--secondary"
            onClick={onManage}
          >
            Manage Subscription
          </button>
        )}
      </div>
    </div>
  );
}

function TierIcon({ tier }: { tier: string }) {
  const icons: Record<string, React.ReactNode> = {
    free: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v8" />
        <path d="M8 12h8" />
      </svg>
    ),
    plus: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    pro: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    team: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    ultimate: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    ),
  };

  return (
    <div className={`fn-subscription-card__icon fn-subscription-card__icon--${tier}`}>
      {icons[tier] || icons.free}
    </div>
  );
}

// Named export
export { SubscriptionCard };
