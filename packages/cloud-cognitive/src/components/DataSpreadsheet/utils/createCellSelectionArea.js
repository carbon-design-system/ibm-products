/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { px } from '@carbon/layout';
import { deepCloneObject } from '../../../global/js/utils/deepCloneObject';

export const createCellSelectionArea = ({
  area,
  blockClass,
  defaultColumn,
  selectionAreas,
  setSelectionAreas,
  spreadsheetRef,
}) => {
  const greatestRow = Math.max(area.point1.row, area.point2.row);
  const greatestColumn = Math.max(area.point1.column, area.point2.column);
  const lowestRowIndex = Math.min(area.point1.row, area.point2.row);
  const lowestColumnIndex = Math.min(area.point1.column, area.point2.column);
  const activeCellElement = spreadsheetRef.current.querySelector(
    `.${blockClass}__active-cell--highlight`
  );
  if (
    greatestRow - lowestRowIndex > 0 ||
    greatestColumn - lowestColumnIndex > 0
  ) {
    activeCellElement.classList.add(
      `${blockClass}__active-cell--with-selection`
    );
  } else {
    activeCellElement.classList.remove(
      `${blockClass}__active-cell--with-selection`
    );
  }
  const point1Element =
    document.querySelector(
      `[data-row-index="${area.point1.row}"][data-column-index="${area.point1.column}"]`
    ) || document.querySelector(`.${blockClass}__body--td`); // if we can't find the point1 element (this can happen in the case where a virtualized row is not present anymore in the DOM), we get the default height/width of the first body cell we find
  const selectionAreaCellWidth = point1Element.offsetWidth;
  const selectionAreaCellHeight = point1Element.offsetHeight;
  const selectionAreaTotalWidth =
    selectionAreaCellWidth * (greatestColumn - lowestColumnIndex + 1);
  const selectionAreaTotalHeight =
    selectionAreaCellHeight * (greatestRow - lowestRowIndex + 1);
  const bodyContainer = document.querySelector(
    `.${blockClass}__list--container`
  ).firstElementChild;
  const placementElement = bodyContainer.querySelector(
    `[data-row-index="${lowestRowIndex}"][data-column-index="${lowestColumnIndex}"]`
  );
  const relativePosition = {
    top: placementElement
      ? placementElement.getBoundingClientRect().top -
        bodyContainer.getBoundingClientRect().top
      : lowestRowIndex === 0
      ? 0
      : selectionAreaCellHeight * lowestRowIndex, // calculate top value here if virtualized row is not in DOM
    left: placementElement
      ? placementElement.getBoundingClientRect().left -
        bodyContainer.getBoundingClientRect().left
      : lowestColumnIndex === 0
      ? 0 + (defaultColumn.rowHeaderWidth - 4)
      : selectionAreaCellWidth * lowestColumnIndex +
        (defaultColumn.rowHeaderWidth - 4), // calculate left value here if virtualized row is not in DOM, accounting for row header cell width (including borders)
  };
  const selectionAreaElement =
    document.querySelector(`[data-matcher-id="${area.matcher}"]`) ||
    document.createElement('div');
  selectionAreaElement.classList.add(`${blockClass}__selection-area--element`);
  selectionAreaElement.setAttribute('data-matcher-id', area.matcher);
  selectionAreaElement.style.width = px(selectionAreaTotalWidth);
  selectionAreaElement.style.height = px(selectionAreaTotalHeight);
  selectionAreaElement.style.left = px(relativePosition.left);
  selectionAreaElement.style.top = px(relativePosition.top);
  bodyContainer.appendChild(selectionAreaElement);
  const selectionAreasClone = deepCloneObject(selectionAreas);
  const indexOfCurrentArea = selectionAreasClone.findIndex(
    (item) => item.matcher === area.matcher
  );
  // We need to add another property to the selectionAreas object array to
  // let us know if an area has been created for each item already, ie createdArea: true
  selectionAreasClone[indexOfCurrentArea].areaCreated = true;
  setSelectionAreas(selectionAreasClone);
};
