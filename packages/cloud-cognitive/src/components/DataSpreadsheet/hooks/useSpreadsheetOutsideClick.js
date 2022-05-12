/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useEffect } from 'react';
import { pkg } from '../../../settings';
import { removeCellSelections } from '../utils/removeCellSelections';

// Click outside useEffect for spreadsheet
export const useSpreadsheetOutsideClick = ({
  spreadsheetRef,
  blockClass = `${pkg.prefix}--data-spreadsheet`,
  setActiveCellCoordinates,
  setSelectionAreas,
  removeActiveCell,
  setContainerHasFocus,
  removeCellEditor,
}) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        !spreadsheetRef.current ||
        spreadsheetRef.current.contains(event.target) ||
        event.target.classList.contains(
          `${blockClass}__active-cell--highlight`
        ) ||
        event.target.classList.contains(
          `${blockClass}--interactive-cell-element`
        )
      ) {
        return;
      }
      setActiveCellCoordinates(null);
      setSelectionAreas([]);
      removeActiveCell();
      removeCellSelections({ spreadsheetRef });
      setContainerHasFocus(false);
      removeCellEditor();
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [
    spreadsheetRef,
    removeActiveCell,
    blockClass,
    setActiveCellCoordinates,
    setContainerHasFocus,
    setSelectionAreas,
    removeCellEditor,
  ]);
};
