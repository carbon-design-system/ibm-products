/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { deepCloneObject } from '../../../global/js/utils/deepCloneObject';

export const includesShift = (arr) => {
  if (arr.includes('ShiftLeft') || arr.includes('ShiftRight')) {
    return true;
  }
  return false;
};

const includesMeta = (arr) => {
  if (arr.includes('MetaLeft') || arr.includes('MetaRight')) {
    return true;
  }
  return false;
};

const includesControl = (arr) => {
  if (arr.includes('ControlLeft') || arr.includes('ControlRight')) {
    return true;
  }
  return false;
};

export const handleMultipleKeys = ({
  activeCellCoordinates,
  event,
  keysPressedList,
  selectionAreas,
  currentMatcher,
  rows,
  setSelectionAreas,
  columns,
}) => {
  const selectionAreasClone = deepCloneObject(selectionAreas);
  const indexOfCurrentArea = selectionAreasClone.findIndex(
    (item) => item.matcher === currentMatcher
  );
  const pointToUpdate = selectionAreasClone[indexOfCurrentArea]?.point2
    ? selectionAreasClone[indexOfCurrentArea].point2
    : selectionAreasClone[indexOfCurrentArea].point1;
  // Down + Shift
  if (
    includesShift(keysPressedList) &&
    keysPressedList.includes('ArrowDown') &&
    keysPressedList.length === 2
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
    includesShift(keysPressedList) &&
    keysPressedList.includes('ArrowRight') &&
    keysPressedList.length === 2
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
    includesShift(keysPressedList) &&
    keysPressedList.includes('ArrowUp') &&
    keysPressedList.length === 2
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
    includesShift(keysPressedList) &&
    keysPressedList.includes('ArrowLeft') &&
    keysPressedList.length === 2
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
  // CMD + a (select all)
  if (includesMeta(keysPressedList) && keysPressedList.includes('KeyA')) {
    event.preventDefault();
    const selectionPoint1 = {
      row: 0,
      column: 0,
    };
    const selectionPoint2 = {
      row: rows.length - 1,
      column: columns.length - 1,
    };
    selectionAreasClone[indexOfCurrentArea].point1 = selectionPoint1;
    selectionAreasClone[indexOfCurrentArea].point2 = selectionPoint2;
    selectionAreasClone[indexOfCurrentArea].areaCreated = false;
    setSelectionAreas(selectionAreasClone);
  }
  // CONTROL + SPACE (Select current column)
  if (includesControl(keysPressedList) && keysPressedList.includes('Space')) {
    const selectionPoint1 = {
      row: 0,
      column: activeCellCoordinates?.column,
    };
    const selectionPoint2 = {
      row: rows.length - 1,
      column: activeCellCoordinates?.column,
    };
    selectionAreasClone[indexOfCurrentArea].point1 = selectionPoint1;
    selectionAreasClone[indexOfCurrentArea].point2 = selectionPoint2;
    selectionAreasClone[indexOfCurrentArea].areaCreated = false;
    setSelectionAreas(selectionAreasClone);
  }
  // Shift + SPACE (Select current row)
  if (includesShift(keysPressedList) && keysPressedList.includes('Space')) {
    const selectionPoint1 = {
      row: activeCellCoordinates?.row,
      column: 0,
    };
    const selectionPoint2 = {
      row: activeCellCoordinates?.row,
      column: columns.length - 1,
    };
    selectionAreasClone[indexOfCurrentArea].point1 = selectionPoint1;
    selectionAreasClone[indexOfCurrentArea].point2 = selectionPoint2;
    selectionAreasClone[indexOfCurrentArea].areaCreated = false;
    setSelectionAreas(selectionAreasClone);
  }
};
