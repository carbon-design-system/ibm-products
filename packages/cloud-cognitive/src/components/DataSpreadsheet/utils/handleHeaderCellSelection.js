/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { deepCloneObject } from '../../../global/js/utils/deepCloneObject';
import uuidv4 from '../../../global/js/utils/uuidv4';
import { removeCellSelections } from './removeCellSelections';
import { checkActiveHeaderCell } from './checkActiveHeaderCell';

export const handleHeaderCellSelection = ({
  type,
  activeCellCoordinates,
  rows,
  columns,
  setActiveCellCoordinates,
  setCurrentMatcher,
  setSelectionAreas,
  spreadsheetRef,
  index,
  isKeyboard,
  setSelectionAreaData,
  isHoldingCommandKey,
}) => {
  if (!isHoldingCommandKey) {
    setSelectionAreaData([]);
    removeCellSelections({ spreadsheetRef });
  }
  const rowValue = isKeyboard ? activeCellCoordinates?.row : index;
  const columnValue = isKeyboard ? activeCellCoordinates?.column : index;
  const point1 = {
    row: type === 'column' ? 0 : rowValue,
    column: type === 'column' ? columnValue : 0,
  };
  const point2 = {
    row: type === 'column' ? rows.length - 1 : rowValue, // going to always be the last row
    column: type === 'column' ? columnValue : columns.length - 1,
  };
  const tempMatcher = uuidv4();
  setActiveCellCoordinates({
    row: type === 'column' ? 0 : rowValue,
    column: type === 'column' ? columnValue : 0,
  });
  setCurrentMatcher(tempMatcher);
  const newSelectionArea = {
    point1,
    point2,
    areaCreated: false,
    matcher: tempMatcher,
    header: {
      type,
      index: type === 'column' ? columnValue : rowValue,
    },
  };
  setSelectionAreas((prev) => {
    const selectionsClone = deepCloneObject(prev);
    if (isHoldingCommandKey) {
      const selectionsFromHeaderCell = selectionsClone.filter(
        (item) => item.header?.type
      );
      const previouslyCreatedHeaderSelection = selectionsFromHeaderCell.filter(
        (item) => item.header?.type === type
      );
      const isHeaderPartOfPreviousSelection = checkActiveHeaderCell(
        index,
        previouslyCreatedHeaderSelection,
        type
      );
      // Prevents row/column header selections from being created multiple times
      if (
        previouslyCreatedHeaderSelection.length &&
        isHeaderPartOfPreviousSelection
      ) {
        return prev;
      }
      return [...prev, newSelectionArea];
    }
    return [newSelectionArea];
  });
};
