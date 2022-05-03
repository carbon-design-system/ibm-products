/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { px } from '@carbon/layout';
import { pkg } from '../../../settings';

export const moveColumnIndicatorLine = ({
  blockClass = `${pkg.prefix}--data-spreadsheet`,
  clonedSelectionElement,
  ref,
  spreadsheetCoords,
}) => {
  const closestCell = event.target.closest(
    `.${blockClass}--interactive-cell-element`
  );
  const newColumnIndex = closestCell?.getAttribute('data-column-index');
  const originalColumnIndex = clonedSelectionElement?.getAttribute(
    'data-column-index-original'
  );
  const closestCellCoords = closestCell.getBoundingClientRect();
  const indicatorLineElement = ref.current.querySelector(
    `.${blockClass}__reorder-indicator-line`
  );
  const matcherId = clonedSelectionElement?.getAttribute('data-matcher-id');
  const selectionAreaOrigin = ref.current.querySelector(
    `[data-matcher-id="${matcherId}"]`
  );
  if (Number(newColumnIndex) > Number(originalColumnIndex)) {
    indicatorLineElement.style.left = px(
      closestCellCoords.left -
        spreadsheetCoords.left +
        closestCell.offsetWidth -
        2
    );
  }
  if (Number(newColumnIndex) < Number(originalColumnIndex)) {
    indicatorLineElement.style.left = px(
      closestCellCoords.left - spreadsheetCoords.left
    );
  }
  if (Number(newColumnIndex) === Number(originalColumnIndex)) {
    indicatorLineElement.style.left = selectionAreaOrigin.style.left;
  }
};
