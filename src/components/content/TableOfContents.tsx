import { useState, useEffect, useCallback, useRef } from 'react';
import './TableOfContents.css';

export interface TocHeading {
  /** Unique ID for the heading (used for anchor) */
  id: string;
  /** Heading text */
  text: string;
  /** Heading level (2 for H2, 3 for H3, etc.) */
  level: number;
}

export interface TableOfContentsProps {
  /** List of headings to display */
  headings?: TocHeading[];
  /** Container element to observe (for auto-extraction) */
  containerRef?: React.RefObject<HTMLElement>;
  /** Whether to auto-extract headings from containerRef */
  autoExtract?: boolean;
  /** Title for the TOC */
  title?: string;
  /** Whether to use sticky positioning */
  sticky?: boolean;
  /** Whether to show reading progress */
  showProgress?: boolean;
  /** Initial collapsed state (for mobile) */
  defaultCollapsed?: boolean;
  /** Offset for scroll calculations (e.g., for fixed header) */
  scrollOffset?: number;
  /** Callback when active heading changes */
  onActiveChange?: (id: string | null) => void;
  /** Additional class name */
  className?: string;
}

// Chevron icon
const ChevronIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

/**
 * Extracts headings from a container element
 */
function extractHeadings(container: HTMLElement): TocHeading[] {
  const headingElements = container.querySelectorAll('h2, h3, h4');
  const headings: TocHeading[] = [];

  headingElements.forEach((el) => {
    const id = el.id || el.textContent?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') || '';
    const text = el.textContent || '';
    const level = parseInt(el.tagName.charAt(1), 10);

    if (id && text) {
      // Ensure the element has an ID for scrolling
      if (!el.id) {
        el.id = id;
      }
      headings.push({ id, text, level });
    }
  });

  return headings;
}

/**
 * TableOfContents - Scrollspy navigation sidebar
 *
 * Displays a list of headings and highlights the current section as user scrolls.
 */
export default function TableOfContents({
  headings: providedHeadings,
  containerRef,
  autoExtract = false,
  title = 'On this page',
  sticky = true,
  showProgress = false,
  defaultCollapsed = false,
  scrollOffset = 100,
  onActiveChange,
  className = '',
}: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TocHeading[]>(providedHeadings || []);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const [progress, setProgress] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Auto-extract headings from container
  useEffect(() => {
    if (autoExtract && containerRef?.current) {
      const extracted = extractHeadings(containerRef.current);
      setHeadings(extracted);
    } else if (providedHeadings) {
      setHeadings(providedHeadings);
    }
  }, [autoExtract, containerRef, providedHeadings]);

  // Set up IntersectionObserver for active state
  useEffect(() => {
    if (headings.length === 0) return;

    const observerCallback: IntersectionObserverCallback = (entries) => {
      // Find the first heading that is intersecting
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);

      if (visibleEntries.length > 0) {
        // Sort by position and take the topmost one
        const sorted = visibleEntries.sort((a, b) => {
          const aRect = a.boundingClientRect;
          const bRect = b.boundingClientRect;
          return aRect.top - bRect.top;
        });

        const newActiveId = sorted[0].target.id;
        setActiveId(newActiveId);
        onActiveChange?.(newActiveId);
      }
    };

    observerRef.current = new IntersectionObserver(observerCallback, {
      rootMargin: `-${scrollOffset}px 0px -70% 0px`,
      threshold: 0,
    });

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observerRef.current?.observe(element);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [headings, scrollOffset, onActiveChange]);

  // Calculate reading progress
  useEffect(() => {
    if (!showProgress || !containerRef?.current) return;

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const containerTop = rect.top;
      const containerHeight = rect.height;

      // Calculate progress
      const scrolled = Math.max(0, -containerTop + windowHeight * 0.5);
      const totalScrollable = containerHeight - windowHeight * 0.5;
      const progressPercent = Math.min(100, Math.max(0, (scrolled / totalScrollable) * 100));

      setProgress(progressPercent);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showProgress, containerRef]);

  // Handle click on heading
  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - scrollOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, [scrollOffset]);

  // Toggle collapse
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  if (headings.length === 0) {
    return null;
  }

  const classes = [
    'fn-toc',
    sticky && 'fn-toc--sticky',
    isCollapsed && 'fn-toc--collapsed',
    className,
  ].filter(Boolean).join(' ');

  return (
    <nav className={classes} aria-label="Table of contents">
      <div className="fn-toc__header">
        <h4 className="fn-toc__title">{title}</h4>
        <button
          className="fn-toc__toggle"
          onClick={toggleCollapse}
          aria-expanded={!isCollapsed}
          aria-label={isCollapsed ? 'Expand table of contents' : 'Collapse table of contents'}
        >
          <ChevronIcon />
        </button>
      </div>

      <ul className="fn-toc__nav">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={`fn-toc__item fn-toc__item--level-${heading.level}`}
          >
            <a
              href={`#${heading.id}`}
              className={`fn-toc__link ${activeId === heading.id ? 'fn-toc__link--active' : ''}`}
              onClick={(e) => handleClick(e, heading.id)}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>

      {showProgress && (
        <div className="fn-toc__progress" role="progressbar" aria-valuenow={progress}>
          <div
            className="fn-toc__progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </nav>
  );
}

// Named export
export { TableOfContents, extractHeadings };
