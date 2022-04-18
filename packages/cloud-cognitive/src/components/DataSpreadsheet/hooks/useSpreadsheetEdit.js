// /**
//  * Copyright IBM Corp. 2022, 2022
//  *
//  * This source code is licensed under the Apache-2.0 license found in the
//  * LICENSE file in the root directory of this source tree.
//  */

import { useEffect } from 'react';
import { px } from '@carbon/layout';

export const useSpreadsheetEdit = ({
  isEditing,
  rows,
  activeCellCoordinates,
  activeCellRef,
  cellEditorRef,
  cellEditorRulerRef,
  columns,
  defaultColumn,
  cellEditorValue,
}) => {
  useEffect(() => {
    if (isEditing) {
      const cellProps =
        rows[activeCellCoordinates?.row]?.cells[activeCellCoordinates?.column];
      const activeCellLeftPosition = activeCellRef?.current.style.left;
      const activeCellTopPosition = activeCellRef?.current.style.top;
      cellEditorRef.current.style.left = activeCellLeftPosition;
      cellEditorRef.current.style.top = activeCellTopPosition;
      cellEditorRef.current.style.display = 'block';
      cellEditorRef.current.style.width = activeCellRef?.current.style.width;
      cellEditorRef.current.style.height = activeCellRef?.current.style.height;
      cellEditorRef.current.style.paddingTop = `${
        (parseInt(activeCellRef?.current.style.height) - 16) / 2 - 1
      }px`; // calculate paddingTop based on cellHeight which could be variable depending on the cellSize prop
      cellEditorRef.current.style.textAlign =
        cellProps?.column?.placement === 'right' ? 'right' : 'left';
      cellEditorRef.current?.focus();
      const rulerWidth = cellEditorRulerRef.current.offsetWidth;
      const cellWidth = activeCellRef.current.offsetWidth;
      if (rulerWidth >= cellWidth) {
        const widthMultiplier = Math.floor(rulerWidth / cellWidth) + 1;
        const startingColumnPosition = activeCellCoordinates?.column;
        const startingRowPosition = activeCellCoordinates?.row;
        const totalColumns = columns.length;
        const totalRows = rows.length;
        const totalMultiplierPossible = totalColumns - startingColumnPosition;
        const totalCellEditorMaxHeight =
          (totalRows - startingRowPosition) * defaultColumn.rowHeight;
        cellEditorRef.current.style.maxHeight = px(totalCellEditorMaxHeight);
        cellEditorRef.current.style.width = px(
          cellWidth *
            (widthMultiplier <= totalMultiplierPossible
              ? widthMultiplier
              : totalMultiplierPossible)
        );
        cellEditorRef.current.style.height = px(
          cellEditorRef.current.scrollHeight
        ); // adds dynamic height to cell editor
        // Cell editor has reached max height, we need to add the scrolling back.
        // We also need to subtract 1 to account for the fact that the cell editor
        // is placed one pixel below the cell being edited to account for the border
        if (
          cellEditorRef.current.clientHeight ===
          totalCellEditorMaxHeight - 1
        ) {
          cellEditorRef.current.style.overflow = 'auto';
        } else {
          cellEditorRef.current.style.overflow = 'hidden';
        }
      }
    }
    if (!isEditing) {
      cellEditorRef.current.style.overflow = 'hidden';
      cellEditorRef.current.style.display = 'none';
      cellEditorRef.current.blur();
      activeCellRef.current.focus();
    }
  }, [
    isEditing,
    activeCellCoordinates,
    rows,
    cellEditorValue,
    columns.length,
    defaultColumn,
    cellEditorValue,
    activeCellRef,
    cellEditorRef,
    cellEditorRulerRef,
  ]);
};
