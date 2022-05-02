/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useEffect } from 'react';
import { px } from '@carbon/layout';

import { pkg } from '../../../settings';
import { deepCloneObject } from '../../../global/js/utils/deepCloneObject';

export const useSpreadsheetMouseUp = ({
  currentMatcher,
  setSelectionAreas,
  setClickAndHoldActive,
  setValidStartingPoint,
  validStartingPoint,
  blockClass = `${pkg.prefix}--data-spreadsheet`,
  ref,
  setHeaderCellHoldActive,
  setColumnOrder,
  visibleColumns,
  setActiveCellCoordinates,
  activeCellCoordinates,
  rows,
  defaultColumn,
}) => {
  useEffect(() => {
    const handleMouseUp = (event) => {
      // Remove the cloned selection area on mouse up
      if (!validStartingPoint) {
        setHeaderCellHoldActive(false);
        const selectionAreaCloneElement = ref.current.querySelector(
          `.${blockClass}__selection-area--element-cloned`
        );
        if (!selectionAreaCloneElement) {
          return;
        }
        // Mouse up while a cloned selection area exists/a column is being reordered
        if (selectionAreaCloneElement) {
          const closestCell = event.target.closest(
            `.${blockClass}--interactive-cell-element`
          );
          const newColumnIndex = closestCell?.getAttribute('data-column-index');
          const originalColumnIndex = selectionAreaCloneElement?.getAttribute(
            'data-column-index-original'
          );
          const columnToMoveToElement = ref.current.querySelector(
            `[data-row-index="header"][data-column-index="${newColumnIndex}"]`
          );
          // Mouse up element was not part of the spreadsheet component
          if (!columnToMoveToElement) {
            return;
          }
          const selectionAreaToMove = ref.current.querySelector(
            `[data-matcher-id="${currentMatcher}"]`
          );
          const spreadsheetPosition = ref.current.getBoundingClientRect();
          const newIndexPosition =
            columnToMoveToElement.getBoundingClientRect();
          const relativeNewPosition =
            newIndexPosition.left - spreadsheetPosition.left;
          const cloneColumnWidth = selectionAreaCloneElement.offsetWidth;
          let columnsWidthUpToNewIndex = 0;
          const newIndexLessThanStarting = newColumnIndex < originalColumnIndex;
          visibleColumns.forEach((item, index) => {
            if (
              newIndexLessThanStarting &&
              index === visibleColumns.length - 1
            ) {
              return;
            }
            if (index <= newColumnIndex) {
              columnsWidthUpToNewIndex += item?.width || defaultColumn?.width;
            }
          });
          const updatedSelectionAreaPlacement = newIndexLessThanStarting
            ? relativeNewPosition
            : columnsWidthUpToNewIndex -
              cloneColumnWidth +
              defaultColumn?.rowHeaderWidth;
          selectionAreaToMove.style.left = px(updatedSelectionAreaPlacement);
          setSelectionAreas((prev) => {
            const selectionAreaClone = deepCloneObject(prev);
            if (originalColumnIndex === newColumnIndex) {
              return prev;
            }
            const indexOfItemToUpdate = selectionAreaClone.findIndex(
              (item) => item.matcher === currentMatcher
            );
            if (indexOfItemToUpdate === -1) {
              return prev;
            }
            selectionAreaClone[indexOfItemToUpdate].header.index =
              Number(newColumnIndex);
            selectionAreaClone[indexOfItemToUpdate].point1.column =
              Number(newColumnIndex);
            selectionAreaClone[indexOfItemToUpdate].point2.column =
              Number(newColumnIndex);
            return selectionAreaClone;
          });
          const columnIdArray = visibleColumns.map((column) => column.id);
          const columnIdArrayClone = [...columnIdArray];
          // Remove one element at the original index
          columnIdArrayClone.splice(originalColumnIndex, 1);
          // Add one element at the new index
          columnIdArrayClone.splice(
            newColumnIndex,
            0,
            columnIdArray[originalColumnIndex]
          );
          setColumnOrder(columnIdArrayClone); // Function provided by useTable (react-table) hook to reorder columns
          const newCellCoords = {
            ...activeCellCoordinates,
            column: Number(newColumnIndex),
          };
          setActiveCellCoordinates(newCellCoords);
          // Remove the cloned column
          selectionAreaCloneElement?.remove();
        }
      }
      // Mouse up was on a spreadsheet body cell which is a valid
      // start/end point for creating a selection area
      if (validStartingPoint) {
        setClickAndHoldActive(false);
        setValidStartingPoint(false);
        const cellButton = event.target.closest(`.${blockClass}__body--td`);
        if (cellButton) {
          const endCellCoordinates = {
            row: Number(cellButton.getAttribute('data-row-index')),
            column: Number(cellButton.getAttribute('data-column-index')),
          };
          setSelectionAreas((prev) => {
            const selectionAreaClone = deepCloneObject(prev);
            const indexOfItemToUpdate = selectionAreaClone.findIndex(
              (item) => item.matcher === currentMatcher
            );
            // No items in the array have an object that matches the value of currentMatcher
            if (indexOfItemToUpdate === -1) {
              return prev;
            }
            selectionAreaClone[indexOfItemToUpdate].point2 = endCellCoordinates;
            selectionAreaClone[indexOfItemToUpdate].areaCreated = false;
            return selectionAreaClone;
          });
        }
      }
    };
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [
    blockClass,
    currentMatcher,
    setSelectionAreas,
    setClickAndHoldActive,
    setValidStartingPoint,
    validStartingPoint,
    ref,
    setHeaderCellHoldActive,
    setColumnOrder,
    visibleColumns,
    setActiveCellCoordinates,
    activeCellCoordinates,
    rows,
    defaultColumn,
  ]);
};
