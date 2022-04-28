/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { deepCloneObject } from '../../../global/js/utils/deepCloneObject';

export const checkSelectedHeaderCell = (
  headerIndex,
  selectionAreas,
  headerType
) => {
  const areasCloned = deepCloneObject(selectionAreas);
  const isSelectedHeader = areasCloned.some((area) => {
    return (
      area?.header?.type === headerType && headerIndex === area?.header?.index
    );
  });
  return isSelectedHeader;
};
