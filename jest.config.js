/**
 * Copyright IBM Corp. 2020, 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

module.exports = async () => {
  const config = await import('jest-config-ibm-cloud-cognitive');
  return config.default;
};
