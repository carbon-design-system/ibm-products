/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

module.exports = {
  preset: 'jest-config-ibm-cloud-cognitive',
  collectCoverageFrom: [
    'packages/**/src/**/*.js',
    '!packages/{cli,components}/**',
    '!packages/**/{examples,stories}/**',
    '!**/*-story.js',
  ],
  testMatch: [
    '<rootDir>/e2e/**/*-test.avt.e2e.js',
    '<rootDir>/e2e/**/*-test.vrt.e2e.js'
  ],
  testPathIgnorePatterns: [
    'examples',
    '/packages/ibm-products-community/',
    '/packages/ibm-products/',
  ],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  reporters: ['default', 'jest-junit'],
};
