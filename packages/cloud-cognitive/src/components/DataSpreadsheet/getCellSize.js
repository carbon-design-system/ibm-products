/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const getCellSize = (cellSize) => {
  switch (cellSize) {
    case 'compact':
      return 24;
    case 'standard':
      return 32;
    case 'medium':
      return 40;
    case 'large':
      return 48;
    default:
      return 32;
  }
};
