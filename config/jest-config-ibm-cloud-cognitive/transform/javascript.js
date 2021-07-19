/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// babel-jest is changing module pattern, see https://github.com/facebook/jest/issues/11444
const babelJestMd = require('babel-jest');
const babelJest = babelJestMd.__esModule ? babelJestMd.default : babelJestMd;
const babelOptions = require('babel-preset-ibm-cloud-cognitive');

module.exports = babelJest.createTransformer(babelOptions());
