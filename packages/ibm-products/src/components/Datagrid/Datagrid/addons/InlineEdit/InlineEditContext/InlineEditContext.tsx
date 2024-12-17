/**
 * Copyright IBM Corp. 2022, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { returnUpdatedActiveCell } from './returnUpdatedActiveCell';
import { getCellIdAsObject } from './getCellIdAsObject';

type ActionType =
  | 'ADD_GRID_ACTIVE_FOCUS'
  | 'REMOVE_GRID_ACTIVE_FOCUS'
  | 'ENTER_EDIT_MODE'
  | 'EXIT_EDIT_MODE'
  | 'UPDATE_ACTIVE_CELL_ID'
  | 'SET_FEATURE_FLAGS';

interface Action {
  type: ActionType;
  payload?: any;
}

interface ContextType {
  state: {
    activeCellId?: string | null;
    editId?: string | null;
    featureFlags?: {
      'enable-datagrid-useEditableCell'?: boolean;
      'enable-datagrid-useInlineEdit'?: boolean;
      'enable-datagrid-useCustomizeColumns'?: boolean;
    };
    gridActive?: boolean;
    previousActiveCellId?: string | null;
  };
  dispatch: React.Dispatch<Action>;
}

export const InlineEditContext = createContext<ContextType>({} as ContextType);

const inlineEditReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_GRID_ACTIVE_FOCUS': {
      return {
        ...state,
        gridActive: true,
        activeCellId: action.payload, // set default active cell when grid receives focus
        previousActiveCellId: null,
      };
    }
    case 'REMOVE_GRID_ACTIVE_FOCUS': {
      return {
        ...state,
        gridActive: false,
        editId: null,
        activeCellId: null,
        previousActiveCellId: action.payload,
      };
    }
    case 'ENTER_EDIT_MODE': {
      return {
        ...state,
        activeCellId: action.payload.activeCellId,
        editId: action.payload.editId,
      };
    }
    case 'EXIT_EDIT_MODE': {
      return {
        ...state,
        activeCellId: action.payload,
        editId: null,
      };
    }
    case 'UPDATE_ACTIVE_CELL_ID': {
      const { direction, oldId, instance } = action.payload;
      if (!action.payload.direction) {
        return {
          ...state,
          activeCellId: action.payload,
          editId: null,
        };
      }
      if (direction && typeof direction === 'string') {
        const activeCellCoords = getCellIdAsObject(oldId);
        const totalVisibleColumns = instance.visibleColumns.filter(
          (item) => item.id !== 'spacer'
        );
        return returnUpdatedActiveCell({
          activeCellCoords,
          direction,
          totalVisibleColumns,
          state,
          instance,
        });
      }
      break;
    }
    case 'SET_FEATURE_FLAGS': {
      return {
        ...state,
        featureFlags: action.payload ?? {},
      };
    }
    default:
      return state;
  }
};

export const InlineEditProvider = ({ children }) => {
  const initialState = {};
  const [state, dispatch] = useReducer(inlineEditReducer, initialState);

  return (
    <InlineEditContext.Provider value={{ state, dispatch }}>
      {children}
    </InlineEditContext.Provider>
  );
};

InlineEditProvider.propTypes = {
  children: PropTypes.element,
};
