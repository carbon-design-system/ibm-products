/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const handleGridFocus = (state, dispatch) => {
  const { gridActive } = state;
  if (!gridActive) {
    // Initialize grid active state
    dispatch({
      type: 'ADD_GRID_ACTIVE_FOCUS',
      payload: 'column-0-row-0',
    });
  }
};
