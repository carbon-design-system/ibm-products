/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { px } from '@carbon/layout';

export const getSpreadsheetWidth = ({
  type,
  headerGroup,
  scrollBarSizeValue,
  totalVisibleColumns,
  defaultColumn,
  totalColumnsWidth,
  visibleColumns,
}) => {
  const additionalWidth = scrollBarSizeValue + defaultColumn.rowHeaderWidth;
  if (!totalVisibleColumns) {
    if (type === 'header') {
      return px(
        parseInt(headerGroup.getHeaderGroupProps().style.width) +
          additionalWidth
      );
    }
    if (type !== 'header') {
      return totalColumnsWidth + additionalWidth;
    }
  }
  if (totalVisibleColumns) {
    let totalVisibleColumnWidth = 0;
    visibleColumns.forEach((col, index) => {
      if (index <= totalVisibleColumns - 1) {
        totalVisibleColumnWidth += col.width || defaultColumn?.width;
      }
    });
    return totalVisibleColumnWidth + additionalWidth;
  }
};
