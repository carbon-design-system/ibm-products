/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { defineConfig } from 'vite';
import { resolve } from 'path';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default defineConfig({
  build: {
    // Library mode builds: Vite will use Rollup under the hood.
    lib: {
      entry: resolve(__dirname, 'src/index.ts'), // main entry file
      name: 'MyLibrary', // global name (if UMD/IIFE formats are used)
      fileName: 'bundle', // resulting file will be bundle.[format].js
      formats: ['es'], // output as an ES module
    },
    sourcemap: true, // Enable source maps
    rollupOptions: {
      // Additional Rollup plugins: you only need commonjs and terser if required.
      plugins: [
        commonjs({
          include: /node_modules/, // Convert CommonJS modules to ES6 if needed
        }),
        terser(), // Minify the bundle
      ],
      output: {
        // Optionally, set other Rollup output options here.
        // For example, if you need to rename or customize asset file names:
        entryFileNames: 'bundle.js',
        assetFileNames: 'styles.css', // explicitly name CSS output
      },
    },
  },
});
