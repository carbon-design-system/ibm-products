/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { pkg } from '../../../settings';
import { deepCloneObject } from '../../../global/js/utils/deepCloneObject';
import { useEffect } from 'react';

export const useSpreadsheetMouseUp = ({
  currentMatcher,
  setSelectionAreas,
  setClickAndHoldActive,
  setValidStartingPoint,
  validStartingPoint,
  blockClass = `${pkg.prefix}--data-spreadsheet`,
  ref,
  setHeaderCellHoldActive,
}) => {
  useEffect(() => {
    const handleMouseUp = (event) => {
      // Remove the cloned selection area on mouse up
      if (!validStartingPoint) {
        setHeaderCellHoldActive(false);
        const selectionAreaCloneElement = ref.current.querySelector(
          `.${blockClass}__selection-area--element-cloned`
        );
        selectionAreaCloneElement?.remove();
        const newColumnIndex = event.target?.getAttribute('data-column-index');
        console.log('mouse up from header cell', newColumnIndex);
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
  ]);
};
