/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { defineConfig, configDefaults } from 'vitest/config';
import { litStyleLoader, litTemplateLoader } from '@mordech/vite-lit-loader';

export default defineConfig({
  plugins: [litStyleLoader(), litTemplateLoader()],
  test: {
    environment: 'happy-dom',
    include: ['src/**/*.test.ts'],
    exclude: [...configDefaults.exclude],
    // Lit recommends using browser environment for testing
    // https://lit.dev/docs/tools/testing/#testing-in-the-browser
    browser: {
      provider: 'playwright',
      enabled: true,
      headless: true,
      name: 'chromium',
    },
    coverage: {
      provider: 'v8',
      include: ['src/**/*'],
      exclude: ['src/**/*.stories.{js,ts}'],
      reporter: ['text', 'html'],
    },
  },
});
