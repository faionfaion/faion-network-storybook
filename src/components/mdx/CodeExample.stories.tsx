import type { Meta, StoryObj } from '@storybook/react';
import CodeExample from './CodeExample';

const meta: Meta<typeof CodeExample> = {
  title: 'MDX/CodeExample',
  component: CodeExample,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Syntax-highlighted code block with copy button, line numbers, and highlighting support.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    showLineNumbers: {
      control: 'boolean',
      description: 'Show line numbers',
    },
    showCopy: {
      control: 'boolean',
      description: 'Show copy button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CodeExample>;

const jsCode = `function greet(name) {
  const greeting = \`Hello, \${name}!\`;
  console.log(greeting);
  return greeting;
}

// Usage
greet('World');`;

const tsCode = `interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

async function fetchUser(id: string): Promise<User> {
  const response = await fetch(\`/api/users/\${id}\`);
  return response.json();
}`;

const pythonCode = `def calculate_fibonacci(n: int) -> list[int]:
    """Generate Fibonacci sequence up to n numbers."""
    if n <= 0:
        return []
    if n == 1:
        return [0]

    fib = [0, 1]
    while len(fib) < n:
        fib.append(fib[-1] + fib[-2])

    return fib

# Generate first 10 Fibonacci numbers
result = calculate_fibonacci(10)
print(result)`;

const bashCode = `#!/bin/bash

# Deploy script for faion.net
echo "Starting deployment..."

npm run build
rsync -avz ./dist/ user@server:/var/www/faion.net/

echo "Deployment complete!"`;

export const Default: Story = {
  args: {
    code: jsCode,
    language: 'javascript',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '700px' }}>
        <Story />
      </div>
    ),
  ],
};

export const TypeScript: Story = {
  args: {
    code: tsCode,
    language: 'typescript',
    filename: 'api/users.ts',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '700px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Python: Story = {
  args: {
    code: pythonCode,
    language: 'python',
    filename: 'fibonacci.py',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '700px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Bash: Story = {
  args: {
    code: bashCode,
    language: 'bash',
    filename: 'deploy.sh',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '700px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithHighlightedLines: Story = {
  args: {
    code: tsCode,
    language: 'typescript',
    highlightLines: [7, 8, 9],
    caption: 'Lines 7-9 show the async fetch implementation',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '700px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithoutLineNumbers: Story = {
  args: {
    code: jsCode,
    language: 'javascript',
    showLineNumbers: false,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '700px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithMaxHeight: Story = {
  args: {
    code: `// Long code example
${Array.from({ length: 30 }, (_, i) => `console.log('Line ${i + 1}');`).join('\n')}`,
    language: 'javascript',
    maxHeight: '300px',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '700px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithCaption: Story = {
  args: {
    code: jsCode,
    language: 'javascript',
    caption: 'Example: A simple greeting function',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '700px' }}>
        <Story />
      </div>
    ),
  ],
};

export const InArticle: Story = {
  render: () => (
    <article style={{ maxWidth: '700px', fontFamily: 'Inter, sans-serif' }}>
      <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '24px', marginBottom: '16px', color: '#1C1C1E' }}>
        Creating a Simple API Endpoint
      </h2>
      <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#4A4A4A', marginBottom: '24px' }}>
        In this example, we will create a simple TypeScript function to fetch user data from an API.
        This pattern is commonly used in modern web applications.
      </p>

      <CodeExample
        code={tsCode}
        language="typescript"
        filename="api/users.ts"
        highlightLines={[7, 8, 9]}
        caption="The fetchUser function demonstrates async/await pattern"
      />

      <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#4A4A4A', marginTop: '24px' }}>
        Notice how we use TypeScript interfaces to define the shape of our data.
        This provides type safety and better developer experience.
      </p>
    </article>
  ),
};
