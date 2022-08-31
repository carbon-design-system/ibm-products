/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { pkg } from '../../../../../settings';

const blockClass = `${pkg.prefix}--datagrid`;

export const handleGridKeyPress = (event, dispatch, state, instance) => {
  const { key } = event;
  const { gridActive, activeCellId, editId } = state;
  // Stop grid key listener when in edit mode
  const isEditing = document.activeElement.id === activeCellId;
  if (isEditing || !gridActive) {
    return;
  }
  // Command keys need to be returned as there is default browser behavior with these keys
  if (key === 'Meta' || key === 'Control') {
    return;
  }
  // Prevent arrow keys, home key, and end key from scrolling the page when the data spreadsheet container has focus
  if (
    [
      'End',
      'Home',
      'ArrowLeft',
      'ArrowUp',
      'ArrowRight',
      'ArrowDown',
    ].indexOf(key) > -1 &&
    !isEditing
  ) {
    event.preventDefault();
  }
  const focusedCell = document.querySelector(`#${instance.tableId} .${blockClass}__table-with-inline-edit [data-cell-id="${activeCellId}"]`);
  const isDisabledCell = !!focusedCell.getAttribute('data-disabled');
  const sharedUpdateParams = {
    oldId: activeCellId,
    instance,
  }
  switch (key) {
    case 'Tab': {
      dispatch({ type: 'REMOVE_GRID_ACTIVE_FOCUS' });
      break;
    }
    case 'ArrowRight': {
      dispatch({ type: 'UPDATE_ACTIVE_CELL_ID', payload: {
        direction: 'right',
        ...sharedUpdateParams
      }});
      break;
    }
    case 'ArrowLeft': {
      dispatch({ type: 'UPDATE_ACTIVE_CELL_ID', payload: {
        direction: 'left',
        ...sharedUpdateParams
      }});
      break;
    }
    case 'ArrowUp': {
      dispatch({ type: 'UPDATE_ACTIVE_CELL_ID', payload: {
        direction: 'up',
        ...sharedUpdateParams
      }});
      break;
    }
    case 'ArrowDown': {
      dispatch({ type: 'UPDATE_ACTIVE_CELL_ID', payload: {
        direction: 'down',
        ...sharedUpdateParams
      }});
      break;
    }
    case 'Enter': {
      // Disabled cells are not allowed to go into edit mode
      if (isDisabledCell) {
        return;
      }
      // Only go into edit mode if there is no editId, meaning that we're not already in edit mode
      if (!editId) {
        dispatch({ type: 'ENTER_EDIT_MODE', payload: {
          activeCellId,
          editId: activeCellId
        } })
      }
    }
  }
}