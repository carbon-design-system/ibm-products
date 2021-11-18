/**
 * Copyright IBM Corp. 2020, 2020
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
  moduleFileExtensions: ['js', 'json', 'node'],
  reporters: ['default'],
  setupFiles: [require.resolve('./setup/setupFiles')],
  setupFilesAfterEnv: [require.resolve('./setup/setupFilesAfterEnv')],
  snapshotSerializers: [],
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>/**/__tests__/**/*.js?(x)',
    '<rootDir>/**/*.(spec|test).js?(x)',
    '<rootDir>/**/*-(spec|test).js?(x)',
  ],
  testTimeout: 120000,
  transform: {
    '^.+\\.(js|jsx)$': require.resolve('./transform/javascript.js'),
    '^.+\\.css$': require.resolve('./transform/css.js'),
    '^(?!.*\\.(js|jsx|css|json)$)': require.resolve('./transform/file.js'),
  },
  testRunner: 'jest-circus/runner',
  testPathIgnorePatterns: [
    '/cjs/',
    '/dist/',
    '/es/',
    '/lib/',
    '/build/',
    'e2e',
    'examples',
    'templates',
    '/umd/',
  ],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  watchPathIgnorePatterns: [
    '/cjs/',
    '/dist/',
    '/es/',
    '/examples/',
    '/lib/',
    '/storybook/',
    '/results/',
  ],
};
