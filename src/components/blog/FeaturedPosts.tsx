import BlogPostCard, { BlogPostCardProps } from './BlogPostCard';
import './FeaturedPosts.css';

export interface FeaturedPostsProps {
  /** List of featured posts */
  posts: BlogPostCardProps[];
  /** Section title */
  title?: string;
  /** Additional class name */
  className?: string;
}

/**
 * FeaturedPosts - Featured posts grid section
 *
 * Displays a grid of featured blog posts with an optional section title.
 * First post is displayed larger as the hero post.
 */
export default function FeaturedPosts({
  posts,
  title = 'Featured Posts',
  className = '',
}: FeaturedPostsProps) {
  const classes = ['fn-featured-posts', className].filter(Boolean).join(' ');

  if (posts.length === 0) {
    return null;
  }

  const [heroPost, ...otherPosts] = posts;

  return (
    <section className={classes}>
      {title && <h2 className="fn-featured-posts__title">{title}</h2>}
      <div className="fn-featured-posts__grid">
        <div className="fn-featured-posts__hero">
          <BlogPostCard {...heroPost} className="fn-featured-posts__hero-card" />
        </div>
        {otherPosts.length > 0 && (
          <div className="fn-featured-posts__sidebar">
            {otherPosts.slice(0, 3).map((post, index) => (
              <BlogPostCard
                key={index}
                {...post}
                className="fn-featured-posts__sidebar-card"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// Named export
export { FeaturedPosts };
