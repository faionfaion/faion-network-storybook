import { useState } from 'react';
import './CodeExample.css';

export interface CodeExampleProps {
  /** Code content */
  code: string;
  /** Programming language */
  language?: string;
  /** Optional filename */
  filename?: string;
  /** Show line numbers */
  showLineNumbers?: boolean;
  /** Lines to highlight (1-indexed) */
  highlightLines?: number[];
  /** Show copy button */
  showCopy?: boolean;
  /** Max height with scroll */
  maxHeight?: string;
  /** Caption or description */
  caption?: string;
  /** Additional class name */
  className?: string;
}

// Icons
const CopyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const FileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);

// Language display names
const languageNames: Record<string, string> = {
  js: 'JavaScript',
  javascript: 'JavaScript',
  ts: 'TypeScript',
  typescript: 'TypeScript',
  jsx: 'JSX',
  tsx: 'TSX',
  py: 'Python',
  python: 'Python',
  bash: 'Bash',
  shell: 'Shell',
  sh: 'Shell',
  json: 'JSON',
  yaml: 'YAML',
  yml: 'YAML',
  css: 'CSS',
  html: 'HTML',
  md: 'Markdown',
  markdown: 'Markdown',
  sql: 'SQL',
  go: 'Go',
  rust: 'Rust',
  java: 'Java',
  cpp: 'C++',
  c: 'C',
};

/**
 * CodeExample - Syntax-highlighted code block for MDX
 *
 * Displays code with optional line numbers, highlighting, and copy button.
 */
export default function CodeExample({
  code,
  language = 'text',
  filename,
  showLineNumbers = true,
  highlightLines = [],
  showCopy = true,
  maxHeight,
  caption,
  className = '',
}: CodeExampleProps) {
  const [copied, setCopied] = useState(false);

  const lines = code.split('\n');
  const displayLanguage = languageNames[language.toLowerCase()] || language;
  const highlightSet = new Set(highlightLines);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const classes = [
    'fn-code-example',
    showLineNumbers && 'fn-code-example--with-lines',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {/* Header */}
      <div className="fn-code-example__header">
        <div className="fn-code-example__info">
          {filename ? (
            <>
              <span className="fn-code-example__file-icon">
                <FileIcon />
              </span>
              <span className="fn-code-example__filename">{filename}</span>
            </>
          ) : (
            <span className="fn-code-example__language">{displayLanguage}</span>
          )}
        </div>
        {showCopy && (
          <button
            type="button"
            className={`fn-code-example__copy ${copied ? 'fn-code-example__copy--copied' : ''}`}
            onClick={handleCopy}
            aria-label={copied ? 'Copied!' : 'Copy code'}
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        )}
      </div>

      {/* Code content */}
      <div
        className="fn-code-example__content"
        style={maxHeight ? { maxHeight, overflowY: 'auto' } : undefined}
      >
        <pre className="fn-code-example__pre">
          <code className={`fn-code-example__code language-${language}`}>
            {lines.map((line, index) => {
              const lineNumber = index + 1;
              const isHighlighted = highlightSet.has(lineNumber);

              return (
                <div
                  key={index}
                  className={`fn-code-example__line ${isHighlighted ? 'fn-code-example__line--highlighted' : ''}`}
                >
                  {showLineNumbers && (
                    <span className="fn-code-example__line-number">{lineNumber}</span>
                  )}
                  <span className="fn-code-example__line-content">{line || ' '}</span>
                </div>
              );
            })}
          </code>
        </pre>
      </div>

      {/* Caption */}
      {caption && (
        <div className="fn-code-example__caption">{caption}</div>
      )}
    </div>
  );
}

// Named export
export { CodeExample };
