import './BlogPostCard.css';

export interface BlogPostAuthor {
  /** Author name */
  name: string;
  /** Author avatar URL */
  avatar?: string;
}

export interface BlogPostCardProps {
  /** Post title */
  title: string;
  /** Post excerpt/summary */
  excerpt: string;
  /** Featured image URL */
  image: string;
  /** Post category */
  category: string;
  /** Post author */
  author: BlogPostAuthor;
  /** Publication date (ISO string) */
  publishedAt: string;
  /** Read time in minutes */
  readTime: number;
  /** Link to full post */
  href: string;
  /** Additional class name */
  className?: string;
}

/**
 * BlogPostCard - Card for displaying blog post preview
 *
 * Shows post image, category, title, excerpt, author, and read time.
 * Used in blog listing pages and featured post sections.
 */
export default function BlogPostCard({
  title,
  excerpt,
  image,
  category,
  author,
  publishedAt,
  readTime,
  href,
  className = '',
}: BlogPostCardProps) {
  const classes = ['fn-blog-post-card', className].filter(Boolean).join(' ');

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <article className={classes}>
      <a href={href} className="fn-blog-post-card__link">
        <div className="fn-blog-post-card__image-wrapper">
          <img
            src={image}
            alt={title}
            className="fn-blog-post-card__image"
            loading="lazy"
          />
          <span className="fn-blog-post-card__category">{category}</span>
        </div>
        <div className="fn-blog-post-card__content">
          <h3 className="fn-blog-post-card__title">{title}</h3>
          <p className="fn-blog-post-card__excerpt">{excerpt}</p>
          <div className="fn-blog-post-card__meta">
            <div className="fn-blog-post-card__author">
              {author.avatar && (
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="fn-blog-post-card__avatar"
                />
              )}
              <span className="fn-blog-post-card__author-name">{author.name}</span>
            </div>
            <div className="fn-blog-post-card__details">
              <span className="fn-blog-post-card__date">{formatDate(publishedAt)}</span>
              <span className="fn-blog-post-card__separator">·</span>
              <span className="fn-blog-post-card__read-time">{readTime} min read</span>
            </div>
          </div>
        </div>
      </a>
    </article>
  );
}

// Named export
export { BlogPostCard };
