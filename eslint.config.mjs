/**
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import globals from 'globals';
import { fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import react from 'eslint-plugin-react';
import pluginSsrFriendly from 'eslint-plugin-ssr-friendly';
import tsEslint from 'typescript-eslint';

import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslint.configs.recommended,
  allConfig: eslint.configs.all,
});

export default tsEslint.config(
  ...compat.extends('eslint-config-carbon').map((c) => {
    if (c.plugins?.['@typescript-eslint']) {
      return {};
    }
    return c;
  }),
  eslint.configs.recommended,
  tsEslint.configs.recommended,
  react.configs.flat.recommended,
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      parser: {
        meta: {
          name: 'Ignore Without Parsing',
        },

        // Ignore Parsing error
        parse: function () {
          return {
            type: 'Program',
            loc: {},
            comments: [],
            range: [0, 0],
            body: [],
            tokens: [],
          };
        },
      },
      parserOptions: {
        sourceType: 'script',
      },
    },
    rules: {
      'no-duplicate-imports': 'error',
    },
  },
  {
    ignores: [
      'packages/*/build',
      'packages/*/lib/*',
      'packages/*/es/*',
      'packages/*/examples/*/build',
      '**/build/',
      '**/es/',
      '**/lib/',
      '**/es-custom/',
      '**/dist/',
      '**/umd/',
      'examples',
      'node_modules',
      'packages/*/examples/*',
      '**/node_modules/**',
      '**/storybook-static/**',
      '*.stories.*',
      '**/coverage/**',
      'packages/ibm-products/scripts/generate/templates/**/*.js*',
      'scripts/example-gallery-builder/update-example/**/*.js*',
    ],
  },
  {
    plugins: {
      'ssr-friendly': fixupPluginRules(pluginSsrFriendly),
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/ban-ts-comment': 0,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-unused-expressions': 0,
      '@typescript-eslint/no-unused-vars': 0,
      '@typescript-eslint/no-empty-object-type': 2,
      'react/display-name': 0,
      'react-hooks/exhaustive-deps': 2,
      'jsx-a11y/no-noninteractive-tabindex': 1,
      'jsx-a11y/no-static-element-interactions': 1,
      'jsx-a11y/click-events-have-key-events': 1,
      'jsdoc/check-tag-names': [
        'error',
        { definedTags: ['element', 'slot', 'csspart'] },
      ],
      'ssr-friendly/no-dom-globals-in-module-scope': 2,
      'react/prop-types': 2,
      'react/forbid-dom-props': [
        2,
        {
          forbid: [
            {
              propName: 'style',
              disallowedFor: ['Datagrid', 'Carousel', 'Checklist', 'Coachmark'],
              message: 'Avoid using style prop',
            },
          ],
        },
      ],
    },
  }
);
