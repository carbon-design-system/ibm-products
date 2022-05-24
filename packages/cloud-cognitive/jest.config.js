/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const jestConfig = require('jest-config-ibm-cloud-cognitive');
jestConfig.coverageReporters.push('text', 'text-summary');

module.exports = jestConfig;
