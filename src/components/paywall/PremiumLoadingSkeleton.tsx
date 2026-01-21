import './PremiumLoadingSkeleton.css';

export type SkeletonLayout = 'article' | 'card' | 'grid' | 'custom';
export type GridColumns = 2 | 3;

export interface PremiumLoadingSkeletonProps {
  /** Layout preset */
  layout?: SkeletonLayout;
  /** Number of lines to show */
  lines?: number;
  /** Show title skeleton */
  showTitle?: boolean;
  /** Show media skeleton */
  showMedia?: boolean;
  /** Media aspect ratio */
  mediaAspect?: 'video' | 'square' | 'wide';
  /** Grid columns (for grid layout) */
  columns?: GridColumns;
  /** Number of cards (for grid layout) */
  cardCount?: number;
  /** Additional class name */
  className?: string;
}

/**
 * Skeleton line component
 */
function SkeletonLine({ width = 'full' }: { width?: 'short' | 'medium' | 'full' }) {
  return (
    <div className={`fn-premium-skeleton__item fn-premium-skeleton__line fn-premium-skeleton__line--${width}`} />
  );
}

/**
 * Skeleton paragraph component
 */
function SkeletonParagraph({ lines = 3 }: { lines?: number }) {
  return (
    <div className="fn-premium-skeleton__paragraph">
      {Array.from({ length: lines }).map((_, index) => (
        <SkeletonLine
          key={index}
          width={index === lines - 1 ? 'short' : index % 2 === 0 ? 'full' : 'medium'}
        />
      ))}
    </div>
  );
}

/**
 * Skeleton card component
 */
function SkeletonCard() {
  return (
    <div className="fn-premium-skeleton__card">
      <div className="fn-premium-skeleton__item fn-premium-skeleton__media fn-premium-skeleton__media--video" />
      <div className="fn-premium-skeleton__item fn-premium-skeleton__title" style={{ width: '80%' }} />
      <SkeletonLine width="full" />
      <SkeletonLine width="medium" />
    </div>
  );
}

/**
 * PremiumLoadingSkeleton - Loading skeleton for premium content
 *
 * Animated placeholder while checking subscription status.
 */
export default function PremiumLoadingSkeleton({
  layout = 'article',
  lines = 4,
  showTitle = true,
  showMedia = false,
  mediaAspect = 'video',
  columns = 2,
  cardCount = 4,
  className = '',
}: PremiumLoadingSkeletonProps) {
  // Grid layout
  if (layout === 'grid') {
    return (
      <div className={`fn-premium-skeleton fn-premium-skeleton--grid fn-premium-skeleton--grid-${columns} ${className}`}>
        {Array.from({ length: cardCount }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }

  // Card layout
  if (layout === 'card') {
    return (
      <div className={`fn-premium-skeleton ${className}`}>
        <SkeletonCard />
      </div>
    );
  }

  // Article layout (default)
  return (
    <div className={`fn-premium-skeleton fn-premium-skeleton--article ${className}`}>
      {showTitle && (
        <div className="fn-premium-skeleton__item fn-premium-skeleton__title" />
      )}

      {showMedia && (
        <div className={`fn-premium-skeleton__item fn-premium-skeleton__media fn-premium-skeleton__media--${mediaAspect === 'video' ? '' : mediaAspect}`} />
      )}

      <SkeletonParagraph lines={lines} />
      <SkeletonParagraph lines={lines > 2 ? lines - 1 : lines} />
    </div>
  );
}

// Named exports
export { PremiumLoadingSkeleton, SkeletonLine, SkeletonParagraph, SkeletonCard };
