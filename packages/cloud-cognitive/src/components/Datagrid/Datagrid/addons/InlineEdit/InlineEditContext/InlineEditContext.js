/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import { returnUpdatedActiveCell } from "./returnUpdatedActiveCell";
import { getCellIdAsObject } from "./getCellIdAsObject";

export const InlineEditContext = createContext();

const inlineEditReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_GRID_ACTIVE_FOCUS': {
      return {
        ...state,
        gridActive: true,
        activeCellId: 'column-0-row-0', // set default active cell when grid receives focus
      }
    }
    case 'REMOVE_GRID_ACTIVE_FOCUS': {
      return {
        ...state,
        gridActive: false,
        editId: null,
        activeCellId: null,
      }
    }
    case 'ENTER_EDIT_MODE': {
      return {
        ...state,
        activeCellId: action.payload.activeCellId,
        editId: action.payload.editId
      }
    }
    case 'EXIT_EDIT_MODE': {
      return {
        ...state,
        activeCellId: action.payload,
        editId: null
      }
    }
    case 'UPDATE_ACTIVE_CELL_ID': {
      const { direction, oldId, instance } = action.payload;
      if (!action.payload.direction) {
        return {
          ...state,
          activeCellId: action.payload
        }
      }
      if (direction && typeof direction === 'string') {
        const activeCellCoords = getCellIdAsObject(oldId);
        const totalVisibleColumns = instance.visibleColumns.filter(item => item.id !== 'spacer');
        return returnUpdatedActiveCell({ activeCellCoords, direction, totalVisibleColumns, state, instance });
      }
      break;
    }
    default:
      return state;
  }
}

export const InlineEditProvider = ({ children }) => {
  const initialState = {};
  const [state, dispatch] = useReducer(inlineEditReducer, initialState);

  return (
    <InlineEditContext.Provider value={{ state, dispatch }}>
      {children}
    </InlineEditContext.Provider>
  )
}

InlineEditProvider.propTypes = {
  children: PropTypes.element,
};
