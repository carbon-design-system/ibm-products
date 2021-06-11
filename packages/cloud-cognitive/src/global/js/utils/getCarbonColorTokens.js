/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { colors } from '@carbon/colors';
// colors comes in as object depth 2
// keys are color names, values are objects
// value objects container key: intensity number, value actual color
import { formatTokenName } from '@carbon/themes';

const carbonColorPrefix = '$carbon--';
const ibmColorPrefix = '$ibm-color__';

const carbonColorTokens = [];
const ibmColorTokens = []; // deprecated

for (const key in colors) {
  const colorMap = colors[key];

  for (const index in colorMap) {
    const colorName = formatTokenName(`${key}${index}`);

    carbonColorTokens.push(`${carbonColorPrefix}${colorName}`);
    carbonColorTokens.push(`$${colorName}`);
    ibmColorTokens.push(`${ibmColorPrefix}${colorName}`);
  }
}

export { carbonColorTokens, ibmColorTokens };
