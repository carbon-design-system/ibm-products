module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  plugins: ['ssr-friendly'],
  ignorePatterns: ['packages/ibm-products-web-components/**/*'],
  extends: ['carbon', 'plugin:ssr-friendly/recommended'],
  rules: {
    'react/display-name': [0],
    'react/forbid-component-props': [
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
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended'],
      parser: '@typescript-eslint/parser',
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            args: 'after-used',
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
      },
    },
  ],
};
