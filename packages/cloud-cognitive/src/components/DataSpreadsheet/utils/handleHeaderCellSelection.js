/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import uuidv4 from '../../../global/js/utils/uuidv4';
import { removeCellSelections } from './removeCellSelections';

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
}) => {
  setSelectionAreaData([]);
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
  removeCellSelections({ spreadsheetRef });
  setSelectionAreas([
    {
      point1,
      point2,
      areaCreated: false,
      matcher: tempMatcher,
    },
  ]);
};
