/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { FLYOUT, PANEL } from './constants';

// This functions takes the filters passed in and makes an object to track it's state
export const getInitialStateFromFilters = (filters, variation = FLYOUT) => {
  const initialFilterState = {};

  const setInitialState = ({ type, column, props }) => {
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
  };

  if (variation === FLYOUT) {
    filters.forEach(setInitialState);
  } else if (variation === PANEL) {
    filters.forEach(({ filters: sections = [] }) => {
      sections.forEach(({ filter }) => setInitialState(filter));
    });
  } else {
    console.error('No variation passed into useInitialStateFromFilters');
  }

  return initialFilterState;
};

// This functions checks if the filter state is the initial state the component starts with
export const isInitialState = (state) => {
  // Gets all the values of the state
  const values = Object.values(state);

  return values.every((val) => {
    const valueIsDateOrCheckbox = Array.isArray(val);

    // Check if it state is a checkbox or date
    if (valueIsDateOrCheckbox) {
      const isDate = val[0] === undefined || val[0] instanceof Date;
      const isCheckbox = typeof val[0] === 'object' && 'selected' in val[0];

      if (isDate && val[1] === undefined) {
        return true;
      } else if (isCheckbox) {
        return val.every(({ selected }) => selected === false);
      }
    } else if (val === '') {
      return true;
    }
    return false;
  });
};
