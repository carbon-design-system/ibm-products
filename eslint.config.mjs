import babelParser from '@babel/eslint-parser';
import ssrFriendly from 'eslint-plugin-ssr-friendly';
import carbon from 'eslint-config-carbon';

export default [
  carbon,
  {
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        babelOptions: {
          presets: ['@babel/preset-react']
        }
      }
    }
  },
  {
    ignores: [
      // Build folders
      '/build',
      ',packages/*/build/',
      ',packages/*/examples/*/build/',
      ',es',
      ',lib',
      ',dist',
      ',umd',
      ',examples',

      'node_modules',
      '**/node_modules/**',
      'packages/*/examples/*',

      // React
      '**/storybook-static/**',

      // Web components
      'packages/ibm-products-web-components/**/*',

      // Story files
      '*.stories.*',

      // Ignore template files
      'packages/ibm-products/scripts/generate/templates/**/*.js*',
      'scripts/example-gallery-builder/update-example/**/*.js*'
    ]
  },
  {
    plugins: {
      ssrFriendly
    }
  },
  {
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
    },
  },
];
