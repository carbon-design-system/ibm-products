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
  // { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  // ...compat.extends("eslint-config-carbon"),
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      pluginSsrFriendly,
      pluginReactHooks
    },
    rules: {
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
