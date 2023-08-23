/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const COLUMN_RESIZE_START = 'columnStartResizing';
const COLUMN_RESIZING = 'columnResizing';
const COLUMN_RESIZE_END = 'columnDoneResizing';

export const handleColumnResizeStartEvent = (dispatch) => {
  dispatch({ type: COLUMN_RESIZE_START });
};

export const handleColumnResizeEndEvent = (dispatch) => {
  dispatch({ type: COLUMN_RESIZE_END });
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
    case COLUMN_RESIZE_START: {
      return {
        ...newState,
        isResizing: true,
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
      return {
        ...newState,
        isResizing: true,
        columnResizing: {
          ...newState.columnResizing,
          columnWidth: defaultWidth,
          columnWidths: {
            ...newState.columnResizing.columnWidths,
            ...newColumnWidth,
          },
          headerIdWidths: [headerId, newWidth],
        },
      };
    }
    case COLUMN_RESIZE_END: {
      return {
        ...newState,
        isResizing: false,
      };
    }
  }
};
