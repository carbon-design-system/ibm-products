/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

module.exports = {
  collectCoverageFrom: ['src/**/*.js', '!**/*.stories.js'],
  coverageReporters: [['html', 'text', { skipEmpty: true }]],
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
