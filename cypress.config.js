import {defineConfig} from 'cypress';

export default defineConfig({
  // Viewport settings overridden for component tests
  component: {
    viewportWidth: 800,
    viewportHeight: 600,
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },

  // These settings apply everywhere unless overridden
  defaultCommandTimeout: 5000,
  viewportWidth: 1000,
  viewportHeight: 600,

  // Command timeout overridden for E2E tests
  e2e: {
    baseUrl: 'http://localhost:3000',
    downloadsFolder: 'cypress/downloads',
    defaultCommandTimeout: 10000
  },
});
