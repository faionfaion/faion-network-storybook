import './FavoritesList.css';

export interface FavoriteItem {
  id: string;
  title: string;
  category: string;
  href: string;
}

export interface FavoritesListProps {
  /** Favorite items to display */
  items: FavoriteItem[];
  /** Maximum items to show */
  maxItems?: number;
  /** Handler for removing a favorite */
  onRemove?: (id: string) => void;
  /** Show "View all" link */
  showViewAll?: boolean;
  /** View all link href */
  viewAllHref?: string;
  /** Additional class name */
  className?: string;
}

/**
 * FavoritesList - Shows user's saved/favorited content
 *
 * Displays a list of bookmarked methodologies or articles.
 */
export default function FavoritesList({
  items,
  maxItems = 5,
  onRemove,
  showViewAll = true,
  viewAllHref = '/favorites',
  className = '',
}: FavoritesListProps) {
  const classes = ['fn-favorites-list', className].filter(Boolean).join(' ');
  const displayItems = items.slice(0, maxItems);

  if (items.length === 0) {
    return (
      <div className={classes}>
        <h3 className="fn-favorites-list__title">Favorites</h3>
        <div className="fn-favorites-list__empty">
          <BookmarkIcon />
          <p>No favorites yet. Save methodologies to access them quickly.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={classes}>
      <h3 className="fn-favorites-list__title">Favorites</h3>

      <div className="fn-favorites-list__items">
        {displayItems.map((item) => (
          <div key={item.id} className="fn-favorites-list__item">
            <a href={item.href} className="fn-favorites-list__item-link">
              <span className="fn-favorites-list__item-title">{item.title}</span>
              <span className="fn-favorites-list__item-category">{item.category}</span>
            </a>
            {onRemove && (
              <button
                type="button"
                className="fn-favorites-list__remove"
                onClick={() => onRemove(item.id)}
                aria-label={`Remove ${item.title} from favorites`}
              >
                <RemoveIcon />
              </button>
            )}
          </div>
        ))}
      </div>

      {showViewAll && items.length > maxItems && (
        <div className="fn-favorites-list__footer">
          <a href={viewAllHref} className="fn-favorites-list__view-all">
            View all {items.length} favorites
          </a>
        </div>
      )}
    </div>
  );
}

function BookmarkIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function RemoveIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// Named export
export { FavoritesList };
