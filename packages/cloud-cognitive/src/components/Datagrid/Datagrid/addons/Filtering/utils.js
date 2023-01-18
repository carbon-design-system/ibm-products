/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { CHECKBOX, DATE, FLYOUT, PANEL } from './constants';

// This functions takes the filters passed in and makes an object to track it's state
export const getInitialStateFromFilters = (filters, variation = FLYOUT) => {
  const initialFilterState = {};

  const setInitialState = ({ type, column, props }) => {
    if (type === 'checkbox') {
      initialFilterState[column] = {
        value: props.Checkbox.map(({ id, labelText, value }) => ({
          id,
          labelText,
          value,
          selected: false,
        })),
        type,
      };
    } else if (type === 'date') {
      initialFilterState[column] = {
        value: [undefined, undefined],
        type,
      };
    } else if (type === 'number') {
      initialFilterState[column] = {
        value: '',
        type,
      };
    } else if (type === 'radio') {
      initialFilterState[column] = {
        value: '',
        type,
      };
    } else if (type === 'dropdown') {
      initialFilterState[column] = {
        value: '',
        type,
      };
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

  const isEachStateInItsInitialValue = values.every(({ value, type }) => {
    if (type === CHECKBOX) {
      // Checks to see if each checkbox state is set to selected = false
      return value.every(({ selected }) => selected === false);
    } else if (type === DATE) {
      // Checks to see if the start and end value aren't date objects
      return !(value[1] instanceof Date);
    } else {
      return value === '';
    }
  });

  return isEachStateInItsInitialValue;
};
