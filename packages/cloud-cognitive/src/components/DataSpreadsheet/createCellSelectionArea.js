/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { px } from '@carbon/layout';
import { deepCloneObject } from '../../global/js/utils/deepCloneObject';

export const createCellSelectionArea = ({
  area,
  blockClass,
  selectionAreas,
  setSelectionAreas,
}) => {
  const greatestRow = Math.max(area.point1.row, area.point2.row);
  const greatestColumn = Math.max(area.point1.column, area.point2.column);
  const lowestRowIndex = Math.min(area.point1.row, area.point2.row);
  const lowestColumnIndex = Math.min(area.point1.column, area.point2.column);
  const point1Element = document.querySelector(
    `[data-row-index="${area.point1.row}"][data-column-index="${area.point1.column}"]`
  );
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
    top:
      placementElement.getBoundingClientRect().top -
      bodyContainer.getBoundingClientRect().top,
    left:
      placementElement.getBoundingClientRect().left -
      bodyContainer.getBoundingClientRect().left,
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
