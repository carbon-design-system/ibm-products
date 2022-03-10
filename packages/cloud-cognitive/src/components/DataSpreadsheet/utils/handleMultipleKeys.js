/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { deepCloneObject } from '../../../global/js/utils/deepCloneObject';

export const handleMultipleKeys = ({
  activeKeys,
  selectionAreas,
  currentMatcher,
  rows,
  setSelectionAreas,
  columns,
}) => {
  const activeKeyValues = activeKeys.current;
  const selectionAreasClone = deepCloneObject(selectionAreas);
  const indexOfCurrentArea = selectionAreasClone.findIndex(
    (item) => item.matcher === currentMatcher
  );
  const pointToUpdate = selectionAreasClone[indexOfCurrentArea]?.point2
    ? selectionAreasClone[indexOfCurrentArea].point2
    : selectionAreasClone[indexOfCurrentArea].point1;
  // Down + Shift
  if (
    activeKeyValues.includes('Shift') &&
    activeKeyValues.includes('ArrowDown')
  ) {
    if (rows.length - 1 === pointToUpdate.row) {
      return;
    }
    const newPoint = {
      row: pointToUpdate.row + 1,
      column: pointToUpdate.column,
    };
    selectionAreasClone[indexOfCurrentArea].point2 = newPoint;
    selectionAreasClone[indexOfCurrentArea].areaCreated = false;
    setSelectionAreas(selectionAreasClone);
  }
  // Right + Shift
  if (
    activeKeyValues.includes('Shift') &&
    activeKeyValues.includes('ArrowRight')
  ) {
    if (columns.length - 1 === pointToUpdate.column) {
      return;
    }
    const newPoint = {
      row: pointToUpdate.row,
      column: pointToUpdate.column + 1,
    };
    selectionAreasClone[indexOfCurrentArea].point2 = newPoint;
    selectionAreasClone[indexOfCurrentArea].areaCreated = false;
    setSelectionAreas(selectionAreasClone);
  }
  // Up + Shift
  if (
    activeKeyValues.includes('Shift') &&
    activeKeyValues.includes('ArrowUp')
  ) {
    if (pointToUpdate.row === 0) {
      return;
    }
    const newPoint = {
      row: pointToUpdate.row - 1,
      column: pointToUpdate.column,
    };
    selectionAreasClone[indexOfCurrentArea].point2 = newPoint;
    selectionAreasClone[indexOfCurrentArea].areaCreated = false;
    setSelectionAreas(selectionAreasClone);
  }
  // Left + Shift
  if (
    activeKeyValues.includes('Shift') &&
    activeKeyValues.includes('ArrowLeft')
  ) {
    if (pointToUpdate.column === 0) {
      return;
    }
    const newPoint = {
      row: pointToUpdate.row,
      column: pointToUpdate.column - 1,
    };
    selectionAreasClone[indexOfCurrentArea].point2 = newPoint;
    selectionAreasClone[indexOfCurrentArea].areaCreated = false;
    setSelectionAreas(selectionAreasClone);
  }
};
