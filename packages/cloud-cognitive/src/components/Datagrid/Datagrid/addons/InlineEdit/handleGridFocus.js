/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const handleGridFocus = (state, dispatch) => {
  console.log(state);
  const activeCellPresent = !!state?.activeCellId;
  dispatch({
    type: 'ADD_GRID_ACTIVE_FOCUS',
    payload: activeCellPresent ? state.activeCellId : 'column-0-row-0'
  });
}
