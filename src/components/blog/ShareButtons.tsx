import { useState } from 'react';
import './ShareButtons.css';

export type SharePlatform = 'twitter' | 'linkedin' | 'facebook' | 'copy';

export interface ShareButtonsProps {
  /** URL to share */
  url: string;
  /** Title for sharing */
  title: string;
  /** Platforms to display */
  platforms?: SharePlatform[];
  /** Additional class name */
  className?: string;
}

// Twitter/X icon
const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.27 1.67h2.97l-6.49 7.42 7.63 10.08h-5.98l-4.68-6.12-5.36 6.12H.39l6.94-7.93L0 1.67h6.13l4.23 5.6 4.91-5.6zm-1.04 15.72h1.65L5.87 3.36H4.1l10.13 14.03z" fill="currentColor"/>
  </svg>
);

// LinkedIn icon
const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.04 17.04h-2.96v-4.64c0-1.11-.02-2.53-1.54-2.53-1.54 0-1.78 1.2-1.78 2.45v4.72h-2.96V7.5h2.84v1.3h.04a3.11 3.11 0 012.8-1.54c3 0 3.56 1.97 3.56 4.54v5.24zM4.45 6.2a1.72 1.72 0 110-3.44 1.72 1.72 0 010 3.44zm1.48 10.84h-2.97V7.5h2.97v9.54zM18.52 0H1.48A1.46 1.46 0 000 1.44v17.12C0 19.34.66 20 1.48 20h17.04c.81 0 1.48-.66 1.48-1.44V1.44C20 .66 19.34 0 18.52 0z" fill="currentColor"/>
  </svg>
);

// Facebook icon
const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.9 0H1.1C.49 0 0 .49 0 1.1v17.8c0 .61.49 1.1 1.1 1.1h9.58v-7.75H8.08v-3.02h2.6V6.98c0-2.57 1.57-3.97 3.86-3.97 1.1 0 2.04.08 2.31.12v2.69h-1.59c-1.24 0-1.48.59-1.48 1.46v1.92h2.97l-.39 3.02h-2.58V20h5.06c.61 0 1.1-.49 1.1-1.1V1.1C20 .49 19.51 0 18.9 0z" fill="currentColor"/>
  </svg>
);

// Copy/Link icon
const CopyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.33 11.67a4.17 4.17 0 005.89 0l2.5-2.5a4.16 4.16 0 00-5.89-5.89l-1.43 1.43" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.67 8.33a4.17 4.17 0 00-5.89 0l-2.5 2.5a4.16 4.16 0 005.89 5.89l1.42-1.43" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Check icon
const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const platformConfig: Record<SharePlatform, { icon: React.FC; label: string; getUrl: (url: string, title: string) => string | null }> = {
  twitter: {
    icon: TwitterIcon,
    label: 'Share on X',
    getUrl: (url, title) => `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
  },
  linkedin: {
    icon: LinkedInIcon,
    label: 'Share on LinkedIn',
    getUrl: (url, title) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  },
  facebook: {
    icon: FacebookIcon,
    label: 'Share on Facebook',
    getUrl: (url) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  copy: {
    icon: CopyIcon,
    label: 'Copy link',
    getUrl: () => null,
  },
};

/**
 * ShareButtons - Social sharing buttons
 *
 * Displays buttons for sharing content on social media platforms.
 * Includes copy to clipboard functionality.
 */
export default function ShareButtons({
  url,
  title,
  platforms = ['twitter', 'linkedin', 'copy'],
  className = '',
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const classes = ['fn-share-buttons', className].filter(Boolean).join(' ');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleShare = (platform: SharePlatform) => {
    if (platform === 'copy') {
      handleCopy();
      return;
    }

    const shareUrl = platformConfig[platform].getUrl(url, title);
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'noopener,noreferrer,width=600,height=400');
    }
  };

  return (
    <div className={classes}>
      <span className="fn-share-buttons__label">Share</span>
      <div className="fn-share-buttons__buttons">
        {platforms.map((platform) => {
          const config = platformConfig[platform];
          const Icon = platform === 'copy' && copied ? CheckIcon : config.icon;
          return (
            <button
              key={platform}
              type="button"
              className={`fn-share-buttons__button fn-share-buttons__button--${platform} ${platform === 'copy' && copied ? 'fn-share-buttons__button--copied' : ''}`}
              onClick={() => handleShare(platform)}
              aria-label={platform === 'copy' && copied ? 'Link copied!' : config.label}
              title={platform === 'copy' && copied ? 'Link copied!' : config.label}
            >
              <Icon />
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Named export
export { ShareButtons };
