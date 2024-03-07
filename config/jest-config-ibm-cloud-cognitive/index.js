/**
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

module.exports = {
  collectCoverageFrom: ['src/**/*.js', '!**/*.stories.js'],
  coverageReporters: [
    [
      'html',
      {
        skipEmpty: true,
        // this next part doesn't actually seem to work
        // see https://github.com/facebook/jest/issues/9734
        watermark: {
          statements: [80, 100],
          lines: [80, 100],
          functions: [80, 100],
          branches: [80, 100],
        },
      },
    ],
    'text',
    'text-summary',
  ],
  // set the global coverage threshold, because that supplies the default for
  // the upper watermark, then nullify the global coverage threshold so it
  // doesn't actually cause jest to fail whenever anything falls short of 100%!
  // This can be removed if/when there's a way to set reporter watermarks directly.
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
    '**/*.js': {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  resolver: require.resolve('./setup/resolver.js'),
  moduleFileExtensions: ['tsx', 'ts', 'js', 'json', 'node'],
  moduleNameMapper: {
    // This mapping is the result of updating to Jest 28. We currently require
    // this as the version of uuid that gets resolved is ESM but we would like
    // to work in CommonJS until Jest lands support for ESM in stable
    // Reference: https://github.com/microsoft/accessibility-insights-web/pull/5421#issuecomment-1109168149
    '^uuid$': require.resolve('uuid'),
    // This mapping is added to resolve the alias that is set in our webpack config
    // otherwise the webpack alias does not work in the jest environment
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  modulePathIgnorePatterns: ['/build/', '/es/', '/lib/', '/umd/', '/examples/'],
  reporters: ['default'],
  setupFiles: [require.resolve('./setup/setupFiles.js')],
  setupFilesAfterEnv: [require.resolve('./setup/setupFilesAfterEnv.js')],
  testMatch: [
    '<rootDir>/**/__tests__/**/*.js?(x)',
    '<rootDir>/**/*.(spec|test).js?(x)',
    '<rootDir>/**/*-(spec|test).js?(x)',
  ],
  transform: {
    '^.+\\.(mjs|cjs|js|jsx|ts|tsx)$': require.resolve(
      './transform/javascript.js'
    ),
    '^.+\\.s?css$': require.resolve('./transform/css.js'),
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': require.resolve(
      './transform/file.js'
    ),
  },
  testEnvironment: 'jsdom',
  testRunner: 'jest-circus/runner',
  testPathIgnorePatterns: [
    '/.avt/',
    '/cjs/',
    '/dist/',
    '/es/',
    '/lib/',
    '/build/',
    'e2e',
    'examples',
    '/umd/',
    '/vendor/',
    '/scripts/',
  ],
  transformIgnorePatterns: [
    '/build/',
    '/es/',
    '/lib/',
    '/umd/',
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$',
    'ace-node\\.js',
  ],
  watchPathIgnorePatterns: [
    '/.avt/',
    '/cjs/',
    '/dist/',
    '/es/',
    '/examples/',
    '/lib/',
    '/storybook/',
    '/results/',
    '/scripts/',
  ],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  testTimeout: 120000,
};
