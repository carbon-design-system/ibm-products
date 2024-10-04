/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { defineConfig, configDefaults } from 'vitest/config';
import { litStyleLoader, litTemplateLoader } from '@mordech/vite-lit-loader';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // @ts-ignore
    litStyleLoader(),
    // @ts-ignore
    litTemplateLoader(),
  ],
  test: {
    environment: 'happy-dom',
    include: ['./src/**/*.{test,spec}.{js,ts}'],
    exclude: [...configDefaults.exclude],
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
