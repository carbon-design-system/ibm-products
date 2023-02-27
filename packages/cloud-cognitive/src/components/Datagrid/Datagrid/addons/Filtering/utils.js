/**
 * Copyright IBM Corp. 2022, 2023
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
        value: [null, null],
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
