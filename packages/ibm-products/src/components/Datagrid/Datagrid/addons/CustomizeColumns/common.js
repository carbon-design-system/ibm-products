/**
 * Copyright IBM Corp. 2022, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import isBoolean from 'lodash/isBoolean';

export const isColumnVisible = (colDef) =>
  isBoolean(colDef.isVisible) ? colDef.isVisible : true;
