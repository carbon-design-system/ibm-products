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
  columns,
  visibleColumns,
  setActiveCellCoordinates,
  activeCellCoordinates,
  rows,
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
          const newColumnIndex =
            event.target?.getAttribute('data-column-index');
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
          const newColumnCoords = columnToMoveToElement.getBoundingClientRect();
          const newColumnLeftPosition = newColumnCoords.left;
          const spreadsheetCoords = ref.current.getBoundingClientRect();
          const offsetXValue = newColumnLeftPosition - spreadsheetCoords.left;
          const selectionAreaToMove = ref.current.querySelector(
            `[data-matcher-id="${currentMatcher}"]`
          );
          const activeCellElement = ref.current.querySelector(
            `.${blockClass}__active-cell--highlight`
          );
          selectionAreaToMove.style.left = px(offsetXValue);
          activeCellElement.style.left = px(offsetXValue);
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
          setColumnOrder(columnIdArrayClone); // Function provided by useTable hook to reorder columns
          const newCellCoords = {
            ...activeCellCoordinates,
            column: Number(newColumnIndex),
          };
          setActiveCellCoordinates(newCellCoords);

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
    columns,
    visibleColumns,
    setActiveCellCoordinates,
    activeCellCoordinates,
    rows,
  ]);
};
