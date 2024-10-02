import { defineConfig } from 'vitest/config';
import { litStyleLoader, litTemplateLoader } from '@mordech/vite-lit-loader';
import sass from 'sass';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
  plugins: [
    // @ts-ignore
    litStyleLoader(),
    // @ts-ignore
    litTemplateLoader(),
  ],
  test: {
    environment: 'happy-dom',
    include: ['**/*.{test,spec}.{js,ts}'],
    // Lit recommends using browser environment for testing
    // https://lit.dev/docs/tools/testing/#testing-in-the-browser
    browser: {
      provider: 'playwright',
      enabled: true,
      headless: true,
      name: 'chromium',
    },
  },
});
