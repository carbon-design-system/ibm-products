/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  CHECKBOX,
  DATE,
  DROPDOWN,
  FLYOUT,
  NUMBER,
  PANEL,
  RADIO,
} from './constants';

const applyInitialFilters = (filterState, initialFilters) => {
  Object.keys(filterState).forEach((key) => {
    const hasInitialFilter = initialFilters.find((filter) => filter.id === key);

    if (hasInitialFilter) {
      filterState[key].value = hasInitialFilter.value;
    }
  });
};

// This functions takes the filters passed in and makes an object to track it's state
export const getInitialStateFromFilters = (
  filters,
  variation = FLYOUT,
  initialFilters = []
) => {
  const initialFilterState = {};

  const setInitialState = ({ type, column, props }) => {
    if (type === CHECKBOX) {
      initialFilterState[column] = {
        value: props.Checkbox.map(({ id, labelText, value }) => ({
          id,
          labelText,
          value,
          selected: false,
        })),
        type,
      };
    } else if (type === DATE) {
      initialFilterState[column] = {
        value: [null, null],
        type,
      };
    } else if (type === NUMBER) {
      initialFilterState[column] = {
        value: '',
        type,
      };
    } else if (type === RADIO) {
      initialFilterState[column] = {
        value: '',
        type,
      };
    } else if (type === DROPDOWN) {
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

  if (initialFilters.length > 0) {
    applyInitialFilters(initialFilterState, initialFilters);
  }

  return initialFilterState;
};
