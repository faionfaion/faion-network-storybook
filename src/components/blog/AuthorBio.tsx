import './AuthorBio.css';

export interface AuthorSocial {
  twitter?: string;
  linkedin?: string;
  github?: string;
}

export interface Author {
  /** Author name */
  name: string;
  /** Author bio */
  bio: string;
  /** Author avatar URL */
  avatar: string;
  /** Social media links */
  social?: AuthorSocial;
}

export interface AuthorBioProps {
  /** Author information */
  author: Author;
  /** Additional class name */
  className?: string;
}

// Twitter icon
const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.9 5.04c-.68.3-1.4.5-2.17.6a3.77 3.77 0 001.66-2.08c-.72.43-1.53.74-2.39.91A3.75 3.75 0 0013.27 3c-2.07 0-3.75 1.68-3.75 3.75 0 .29.03.58.09.85a10.65 10.65 0 01-7.73-3.92 3.72 3.72 0 00-.51 1.89c0 1.3.66 2.45 1.67 3.12a3.73 3.73 0 01-1.7-.47v.05c0 1.82 1.29 3.33 3 3.68a3.76 3.76 0 01-1.69.06 3.75 3.75 0 003.5 2.6A7.54 7.54 0 011 15.96a10.63 10.63 0 005.75 1.69c6.9 0 10.67-5.72 10.67-10.67l-.01-.49c.73-.53 1.37-1.19 1.87-1.94l.62-.41z" fill="currentColor"/>
  </svg>
);

// LinkedIn icon
const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.04 17.04h-2.96v-4.64c0-1.11-.02-2.53-1.54-2.53-1.54 0-1.78 1.2-1.78 2.45v4.72h-2.96V7.5h2.84v1.3h.04a3.11 3.11 0 012.8-1.54c3 0 3.56 1.97 3.56 4.54v5.24zM4.45 6.2a1.72 1.72 0 110-3.44 1.72 1.72 0 010 3.44zm1.48 10.84h-2.97V7.5h2.97v9.54zM18.52 0H1.48A1.46 1.46 0 000 1.44v17.12C0 19.34.66 20 1.48 20h17.04c.81 0 1.48-.66 1.48-1.44V1.44C20 .66 19.34 0 18.52 0z" fill="currentColor"/>
  </svg>
);

// GitHub icon
const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0110 4.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.138 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" fill="currentColor"/>
  </svg>
);

/**
 * AuthorBio - Full author biography section
 *
 * Displays author avatar, name, bio, and social media links.
 * Used at the end of blog posts and on author pages.
 */
export default function AuthorBio({
  author,
  className = '',
}: AuthorBioProps) {
  const classes = ['fn-author-bio', className].filter(Boolean).join(' ');

  const hasSocial = author.social && (
    author.social.twitter || author.social.linkedin || author.social.github
  );

  return (
    <div className={classes}>
      <img
        src={author.avatar}
        alt={author.name}
        className="fn-author-bio__avatar"
      />
      <div className="fn-author-bio__content">
        <h3 className="fn-author-bio__name">{author.name}</h3>
        <p className="fn-author-bio__bio">{author.bio}</p>
        {hasSocial && (
          <div className="fn-author-bio__social">
            {author.social?.twitter && (
              <a
                href={author.social.twitter}
                className="fn-author-bio__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${author.name} on Twitter`}
              >
                <TwitterIcon />
              </a>
            )}
            {author.social?.linkedin && (
              <a
                href={author.social.linkedin}
                className="fn-author-bio__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${author.name} on LinkedIn`}
              >
                <LinkedInIcon />
              </a>
            )}
            {author.social?.github && (
              <a
                href={author.social.github}
                className="fn-author-bio__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${author.name} on GitHub`}
              >
                <GitHubIcon />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// Named export
export { AuthorBio };
