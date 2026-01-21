import { useState } from 'react';
import './MCPSetupGuide.css';

export interface MCPSetupGuideProps {
  /** User's license key */
  licenseKey: string;
  /** MCP server URL */
  serverUrl?: string;
  /** Additional class name */
  className?: string;
}

/**
 * MCPSetupGuide - Step-by-step guide for MCP configuration
 *
 * Shows instructions for configuring Claude Code with MCP server access.
 */
export default function MCPSetupGuide({
  licenseKey,
  serverUrl = 'https://mcp.faion.net/sse',
  className = '',
}: MCPSetupGuideProps) {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);
  const [expandedStep, setExpandedStep] = useState<number>(1);

  const classes = ['fn-mcp-setup', className].filter(Boolean).join(' ');

  const configJson = `{
  "mcpServers": {
    "faion-network": {
      "url": "${serverUrl}",
      "headers": {
        "Authorization": "Bearer ${licenseKey}"
      }
    }
  }
}`;

  const handleCopy = async (text: string, step: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStep(step);
      setTimeout(() => setCopiedStep(null), 2000);
    } catch {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopiedStep(step);
      setTimeout(() => setCopiedStep(null), 2000);
    }
  };

  const steps = [
    {
      number: 1,
      title: 'Open Claude Code Settings',
      content: (
        <>
          <p>Open your Claude Code settings file located at:</p>
          <div className="fn-mcp-setup__code-block">
            <code>~/.claude/settings.json</code>
            <button
              type="button"
              className="fn-mcp-setup__copy-btn"
              onClick={() => handleCopy('~/.claude/settings.json', 1)}
              aria-label="Copy path"
            >
              {copiedStep === 1 ? <CheckIcon /> : <CopyIcon />}
            </button>
          </div>
        </>
      ),
    },
    {
      number: 2,
      title: 'Add MCP Configuration',
      content: (
        <>
          <p>Add the following configuration to your settings file:</p>
          <div className="fn-mcp-setup__code-block fn-mcp-setup__code-block--multiline">
            <pre><code>{configJson}</code></pre>
            <button
              type="button"
              className="fn-mcp-setup__copy-btn"
              onClick={() => handleCopy(configJson, 2)}
              aria-label="Copy configuration"
            >
              {copiedStep === 2 ? <CheckIcon /> : <CopyIcon />}
            </button>
          </div>
        </>
      ),
    },
    {
      number: 3,
      title: 'Restart Claude Code',
      content: (
        <>
          <p>Restart Claude Code to apply the changes. You can do this by:</p>
          <ul>
            <li>Closing and reopening your terminal</li>
            <li>Or running <code>claude --restart</code></li>
          </ul>
        </>
      ),
    },
    {
      number: 4,
      title: 'Verify Connection',
      content: (
        <>
          <p>Test your connection by running a Faion Network skill:</p>
          <div className="fn-mcp-setup__code-block">
            <code>/faion-net</code>
            <button
              type="button"
              className="fn-mcp-setup__copy-btn"
              onClick={() => handleCopy('/faion-net', 4)}
              aria-label="Copy command"
            >
              {copiedStep === 4 ? <CheckIcon /> : <CopyIcon />}
            </button>
          </div>
          <p className="fn-mcp-setup__note">
            If successful, you'll see the Faion Network skill interface.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className={classes}>
      <div className="fn-mcp-setup__header">
        <h3 className="fn-mcp-setup__title">MCP Setup Guide</h3>
        <p className="fn-mcp-setup__description">
          Follow these steps to connect Claude Code to your Faion Network subscription.
        </p>
      </div>

      <div className="fn-mcp-setup__steps">
        {steps.map((step) => (
          <div
            key={step.number}
            className={`fn-mcp-setup__step ${expandedStep === step.number ? 'fn-mcp-setup__step--expanded' : ''}`}
          >
            <button
              type="button"
              className="fn-mcp-setup__step-header"
              onClick={() => setExpandedStep(expandedStep === step.number ? 0 : step.number)}
              aria-expanded={expandedStep === step.number}
            >
              <span className="fn-mcp-setup__step-number">{step.number}</span>
              <span className="fn-mcp-setup__step-title">{step.title}</span>
              <ChevronIcon />
            </button>
            {expandedStep === step.number && (
              <div className="fn-mcp-setup__step-content">
                {step.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function CopyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

// Named export
export { MCPSetupGuide };
