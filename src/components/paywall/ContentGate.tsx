import { ReactNode } from 'react';
import './ContentGate.css';

export type SubscriptionTier = 'free' | 'plus' | 'pro' | 'team' | 'ultimate';

export interface ContentGateProps {
  /** Premium content to show for authorized users */
  children: ReactNode;
  /** Fallback content for non-premium users */
  fallback?: ReactNode;
  /** Minimum required tier to access content */
  requiredTier?: SubscriptionTier;
  /** Current user's subscription tier */
  currentTier?: SubscriptionTier;
  /** Loading state while checking authorization */
  isLoading?: boolean;
  /** Custom loading component */
  loadingComponent?: ReactNode;
  /** Override access check (for demo/preview purposes) */
  hasAccess?: boolean;
}

// Tier hierarchy for comparison
const TIER_HIERARCHY: Record<SubscriptionTier, number> = {
  free: 0,
  plus: 1,
  pro: 2,
  team: 3,
  ultimate: 4,
};

/**
 * Checks if the current tier has access to the required tier
 */
function hasTierAccess(currentTier: SubscriptionTier, requiredTier: SubscriptionTier): boolean {
  return TIER_HIERARCHY[currentTier] >= TIER_HIERARCHY[requiredTier];
}

/**
 * ContentGate - Content gating component
 *
 * Conditionally renders premium vs free content based on subscription status.
 * Accepts children for premium content and fallback for non-premium users.
 */
export default function ContentGate({
  children,
  fallback,
  requiredTier = 'plus',
  currentTier = 'free',
  isLoading = false,
  loadingComponent,
  hasAccess: hasAccessOverride,
}: ContentGateProps) {
  // Check if user has access
  const hasAccess = hasAccessOverride !== undefined
    ? hasAccessOverride
    : hasTierAccess(currentTier, requiredTier);

  // Loading state
  if (isLoading) {
    return (
      <div className="fn-content-gate fn-content-gate--loading">
        {loadingComponent || (
          <div className="fn-content-gate__loading">
            <div className="fn-content-gate__spinner" aria-label="Loading..." />
          </div>
        )}
      </div>
    );
  }

  // Render based on access
  return (
    <div className="fn-content-gate">
      {/* Premium content */}
      <div
        className={`fn-content-gate__content ${
          hasAccess ? 'fn-content-gate__content--visible' : 'fn-content-gate__content--hidden'
        }`}
        aria-hidden={!hasAccess}
      >
        {hasAccess && children}
      </div>

      {/* Fallback content */}
      {fallback && (
        <div
          className={`fn-content-gate__fallback ${
            !hasAccess ? 'fn-content-gate__fallback--visible' : 'fn-content-gate__fallback--hidden'
          }`}
          aria-hidden={hasAccess}
        >
          {!hasAccess && fallback}
        </div>
      )}

      {/* If no fallback and no access, render nothing */}
      {!fallback && !hasAccess && null}
    </div>
  );
}

// Named exports
export { ContentGate, hasTierAccess, TIER_HIERARCHY };
