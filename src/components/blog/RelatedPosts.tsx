import './RelatedPosts.css';

export interface RelatedPost {
  /** Post title */
  title: string;
  /** Link to post */
  href: string;
  /** Post image URL */
  image?: string;
}

export interface RelatedPostsProps {
  /** List of related posts */
  posts: RelatedPost[];
  /** Section title */
  title?: string;
  /** Additional class name */
  className?: string;
}

/**
 * RelatedPosts - Related posts section
 *
 * Displays a list of related posts with optional images.
 * Used at the end of blog posts for content discovery.
 */
export default function RelatedPosts({
  posts,
  title = 'Related Posts',
  className = '',
}: RelatedPostsProps) {
  const classes = ['fn-related-posts', className].filter(Boolean).join(' ');

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className={classes}>
      <h3 className="fn-related-posts__title">{title}</h3>
      <div className="fn-related-posts__grid">
        {posts.slice(0, 3).map((post, index) => (
          <a key={index} href={post.href} className="fn-related-posts__item">
            {post.image && (
              <div className="fn-related-posts__image-wrapper">
                <img
                  src={post.image}
                  alt={post.title}
                  className="fn-related-posts__image"
                  loading="lazy"
                />
              </div>
            )}
            <h4 className="fn-related-posts__item-title">{post.title}</h4>
          </a>
        ))}
      </div>
    </section>
  );
}

// Named export
export { RelatedPosts };
