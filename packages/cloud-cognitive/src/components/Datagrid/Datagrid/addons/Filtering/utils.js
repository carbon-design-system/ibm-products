/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This functions takes the filters passed in and makes an object to track it's state
export const getInitialStateFromFilters = (filters) => {
  const initialFilterState = {};

  filters.forEach(({ type, column, props }) => {
    if (type === 'checkbox') {
      initialFilterState[column] = props.Checkbox.map(
        ({ id, labelText, value }) => ({
          id,
          labelText,
          value,
          selected: false,
        })
      );
    } else if (type === 'date') {
      initialFilterState[column] = [undefined, undefined];
    } else if (type === 'number') {
      initialFilterState[column] = '';
    } else if (type === 'radio') {
      initialFilterState[column] = '';
    } else if (type === 'dropdown') {
      initialFilterState[column] = '';
    }
  });

  return initialFilterState;
};
