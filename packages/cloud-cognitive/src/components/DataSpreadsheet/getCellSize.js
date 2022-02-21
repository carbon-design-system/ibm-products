/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  baseFontSize,
  sizeXSmall as compact,
  sizeSmall as standard,
  sizeMedium as medium,
  sizeLarge as large,
} from '@carbon/layout';

const getSizeInPixels = (carbonSize) =>
  Number(carbonSize.replace('rem', '') * baseFontSize);

export const getCellSize = (cellSize) => {
  switch (cellSize) {
    case 'compact':
      return getSizeInPixels(compact);
    case 'standard':
      return getSizeInPixels(standard);
    case 'medium':
      return getSizeInPixels(medium);
    case 'large':
      return getSizeInPixels(large);
    default:
      return getSizeInPixels(standard);
  }
};
