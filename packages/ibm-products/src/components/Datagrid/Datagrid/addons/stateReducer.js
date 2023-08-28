/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const COLUMN_RESIZE_START = 'columnStartResizing';
const COLUMN_RESIZING = 'columnResizing';
const COLUMN_RESIZE_END = 'columnDoneResizing';
const INIT = 'init';

export const handleColumnResizeStartEvent = (dispatch, headerId) => {
  dispatch({ type: COLUMN_RESIZE_START, payload: { headerId } });
};

export const handleColumnResizeEndEvent = (
  dispatch,
  onColResizeEnd,
  headerId
) => {
  dispatch({ type: COLUMN_RESIZE_END, payload: { onColResizeEnd, headerId } });
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
      const { headerId } = action.payload;
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
          headerIdWidths: [headerId, newWidth],
        },
      };
    }
    case COLUMN_RESIZE_END: {
      const { onColResizeEnd, headerId } = action.payload;
      const currentColumn = {};
      currentColumn[headerId] = newState.columnResizing.columnWidths[headerId];
      const allChangedColumns = newState.columnResizing.columnWidths;
      const { isResizing } = newState;
      if (isResizing) {
        onColResizeEnd?.(currentColumn, allChangedColumns);
      }
      return {
        ...newState,
        isResizing: false,
      };
    }
  }
};
