/**
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// https://github.com/IBMa/equal-access/blob/master/accessibility-checker/boilerplates/jest/matchers/toBeAccessible.js
import {
  assertCompliance,
  getCompliance,
  stringifyResults,
} from 'accessibility-checker';

export default async (node, label) => {
  const { report } = await getCompliance(node, label);

  return {
    message: () => stringifyResults(report),
    pass: assertCompliance(report) === 0,
  };
};
