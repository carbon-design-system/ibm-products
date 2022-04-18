/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const handleActiveCellInSelection = ({
  activeCellInsideSelectionArea,
  activeCellCoordinates,
  activeCellRef,
  selectionAreas,
  updateActiveCellCoordinates,
}) => {
  if (!activeCellInsideSelectionArea) {
    return;
  }
  const activeCellSelectionId =
    activeCellRef.current.getAttribute('data-selection-id');
  const activeCellIndexInSelectionAreas = selectionAreas.findIndex(
    (item) => item.matcher === activeCellSelectionId
  );
  const selectionAreaToNavigate =
    selectionAreas[activeCellIndexInSelectionAreas];
  const greatestRowIndex = Math.max(
    selectionAreaToNavigate.point1.row,
    selectionAreaToNavigate.point2.row
  );
  const greatestColumnIndex = Math.max(
    selectionAreaToNavigate.point1.column,
    selectionAreaToNavigate.point2.column
  );
  const lowestRowIndex = Math.min(
    selectionAreaToNavigate.point1.row,
    selectionAreaToNavigate.point2.row
  );
  const lowestColumnIndex = Math.min(
    selectionAreaToNavigate.point1.column,
    selectionAreaToNavigate.point2.column
  );
  // Move active cell down one row if possible
  const coordinatesClone = { ...activeCellCoordinates };
  if (activeCellCoordinates?.row < greatestRowIndex) {
    updateActiveCellCoordinates({
      coords: coordinatesClone,
      updatedValue: { row: coordinatesClone?.row + 1 },
      optOutOfSelectionAreaUpdate: true,
    });
  }
  // Move active cell to next column of selection area if it exists
  // If not, find the next selection area and update active cell to
  // be the first cell in that selection
  if (activeCellCoordinates?.row === greatestRowIndex) {
    if (activeCellCoordinates?.column < greatestColumnIndex) {
      updateActiveCellCoordinates({
        coords: coordinatesClone,
        updatedValue: {
          column: coordinatesClone?.column + 1,
          row: lowestRowIndex,
        },
        optOutOfSelectionAreaUpdate: true,
      });
    }
    // Move to next selection area if there is one, or back to
    // the beginning of the current selection
    if (activeCellCoordinates?.column === greatestColumnIndex) {
      if (selectionAreas.length > 1) {
        if (selectionAreas[activeCellIndexInSelectionAreas + 1]) {
          // Update activeCellRef data-selection-id attribute to the matcher of the next selection area
          activeCellRef.current.setAttribute(
            'data-selection-id',
            selectionAreas[activeCellIndexInSelectionAreas + 1].matcher
          );
          const nextSelectionArea =
            selectionAreas[activeCellIndexInSelectionAreas + 1];
          const nextSelectionLowestRowIndex = Math.min(
            nextSelectionArea.point1.row,
            nextSelectionArea.point2.row
          );
          const nextSelectionLowestColumnIndex = Math.min(
            nextSelectionArea.point1.column,
            nextSelectionArea.point2.column
          );
          updateActiveCellCoordinates({
            coords: coordinatesClone,
            updatedValue: {
              column: nextSelectionLowestColumnIndex,
              row: nextSelectionLowestRowIndex,
            },
            optOutOfSelectionAreaUpdate: true,
          });
          return;
        } else {
          // There are multiple selection areas and the active cell is in the last one
          // So we need to move the active cell to the first cell in the first selection area
          activeCellRef.current.setAttribute(
            'data-selection-id',
            selectionAreas[0].matcher
          );
          const firstSelectionArea = selectionAreas[0];
          const firstSelectionLowestRowIndex = Math.min(
            firstSelectionArea.point1.row,
            firstSelectionArea.point2.row
          );
          const firstSelectionLowestColumnIndex = Math.min(
            firstSelectionArea.point1.column,
            firstSelectionArea.point2.column
          );
          updateActiveCellCoordinates({
            coords: coordinatesClone,
            updatedValue: {
              column: firstSelectionLowestColumnIndex,
              row: firstSelectionLowestRowIndex,
            },
            optOutOfSelectionAreaUpdate: true,
          });
        }
      }
      // Only one selection area, go back to first cell in the selection
      if (selectionAreas.length === 1) {
        return updateActiveCellCoordinates({
          coords: coordinatesClone,
          updatedValue: {
            column: lowestColumnIndex,
            row: lowestRowIndex,
          },
          optOutOfSelectionAreaUpdate: true,
        });
      }
    }
  }
};
