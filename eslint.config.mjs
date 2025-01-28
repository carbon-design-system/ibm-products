import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginSsrFriendly from 'eslint-plugin-ssr-friendly';
import pluginReactHooks from 'eslint-plugin-react-hooks';

import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})


/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    languageOptions: {
      globals: {
          ...globals.browser,
          ...globals.jest,
          ...globals.node,
      }
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  // ...compat.extends("eslint-config-carbon").map(c => {
  //   console.log(c.plugins)
  // }),
  pluginReact.configs.flat.recommended,
  {
    ignores: [
      'build',
      'packages/*/build',
      'packages/*/examples/*/build',
      'es',
      'lib',
      'dist',
      'umd',
      'examples',
      'node_modules',
      'packages/*/examples/*',
      '**/node_modules/**',
      '**/storybook-static/**',
      '*.stories.*',
      '**/coverage/**',
      'packages/ibm-products/scripts/generate/templates/**/*.js*',
      'scripts/example-gallery-builder/update-example/**/*.js*'
    ]
  },
  {
    plugins: {
      pluginSsrFriendly,
      pluginReactHooks
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-unused-expressions': ['error', { allowTernary: true }],
      'ssr-friendly/no-dom-globals-in-module-scope': [
        0
      ],
      'react/display-name': [
        0
      ],
      'react/forbid-component-props': [
        2,
        {
          'forbid': [
            {
              'propName': 'style',
              'disallowedFor': [
                'Datagrid',
                'Carousel',
                'Checklist',
                'Coachmark'
              ],
            'message': 'Avoid using style prop'
            }
          ]
        }
      ],
      'react/forbid-dom-props': [
        2,
        {
          'forbid': [
            {
              'propName': 'style',
              'disallowedFor': [
                'Datagrid',
                'Carousel',
                'Checklist',
                'Coachmark'
              ],
              'message': 'Avoid using style prop'
            }
          ]
        }
      ]
    }
  }
];
