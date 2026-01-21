import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.test.{ts,tsx}'],
    exclude: ['node_modules', 'build', 'storybook-static'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/components/**/*.tsx'],
      exclude: [
        'src/components/**/*.stories.tsx',
        'src/components/**/*.css',
        'node_modules',
      ],
      thresholds: {
        // P0 components should have 80%+ coverage
        // P1 components should have 70%+ coverage
        // Overall minimum
        statements: 50,
        branches: 50,
        functions: 50,
        lines: 50,
      },
    },
  },
});
