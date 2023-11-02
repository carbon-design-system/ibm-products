/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { pkg } from '../../../../settings';

const COLUMN_RESIZE_START = 'columnStartResizing';
const COLUMN_RESIZING = 'columnResizing';
const COLUMN_RESIZE_END = 'columnDoneResizing';
const INIT = 'init';
const blockClass = `${pkg.prefix}--datagrid`;

export const handleColumnResizeEndEvent = (
  dispatch,
  onColResizeEnd,
  headerId,
  isKeyEvent
) => {
  dispatch({
    type: COLUMN_RESIZE_END,
    payload: { onColResizeEnd, headerId, isKeyEvent },
  });
};

export const handleColumnResizingEvent = (
  dispatch,
  header,
  newWidth,
  isKeyEvent
) => {
  if (isKeyEvent) {
    dispatch({
      type: COLUMN_RESIZE_START,
      payload: {
        newWidth,
        headerId: header.id,
        defaultWidth: header.originalWidth,
      },
    });
  }
  dispatch({
    type: COLUMN_RESIZING,
    payload: {
      newWidth,
      headerId: header.id,
      defaultWidth: header.originalWidth,
    },
  });
};

export const stateReducer = (newState, action) => {
  switch (action.type) {
    case INIT: {
      return {
        ...newState,
        isResizing: false,
      };
    }
    case COLUMN_RESIZE_START: {
      const { headerId } = action.payload || {};
      return {
        ...newState,
        isResizing: headerId,
      };
    }
    case COLUMN_RESIZING: {
      const { headerId, newWidth, defaultWidth } = action.payload || {};
      const newColumnWidth = {};
      if (typeof headerId === 'undefined') {
        return {
          ...newState,
        };
      }
      newColumnWidth[headerId] = newWidth;
      const cleanedWidths = Object.fromEntries(
        Object.entries(newState.columnResizing.columnWidths).filter(
          ([_, value]) => !isNaN(value)
        )
      );
      const headerIdArray = newState.columnResizing.headerIdWidths || [];
      return {
        ...newState,
        isResizing: headerId,
        columnResizing: {
          ...newState.columnResizing,
          columnWidth: defaultWidth,
          columnWidths: {
            ...cleanedWidths,
            ...newColumnWidth,
          },
          headerIdWidths: [...headerIdArray, [headerId, newWidth]],
        },
      };
    }
    case COLUMN_RESIZE_END: {
      const { onColResizeEnd, headerId, isKeyEvent } = action.payload || {};
      const currentColumn = {};
      currentColumn[headerId] = newState.columnResizing.columnWidths[headerId];
      const allChangedColumns = newState.columnResizing.columnWidths;
      const { isResizing } = newState;
      if (isResizing) {
        onColResizeEnd?.(currentColumn, allChangedColumns);
      }
      if (!isKeyEvent) {
        if (typeof isKeyEvent === 'undefined') {
          // Blur resizer input if it has focus and is not from a key event resize
          if (
            document.activeElement.classList.contains(
              `${blockClass}__col-resizer-range`
            )
          ) {
            document?.activeElement?.blur();
          }
          return;
        }
      }
      return {
        ...newState,
        isResizing: false,
        columnResizing: {
          ...newState.columnResizing,
          isResizingColumn: false,
          startX: null,
        },
      };
    }
  }
};
