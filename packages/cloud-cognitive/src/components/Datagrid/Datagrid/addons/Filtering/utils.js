/**
<<<<<<< HEAD
 * Copyright IBM Corp. 2022, 2022
=======
 * Copyright IBM Corp. 2022, 2023
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

<<<<<<< HEAD
// This functions takes the filters passed in and makes an object to track it's state
export const getInitialStateFromFilters = (filters) => {
  const initialFilterState = {};

  filters.forEach(({ type, column, props }) => {
    if (type === 'checkbox') {
      initialFilterState[column] = props.Checkbox.map(
        ({ id, labelText, value }) => ({
=======
import {
  CHECKBOX,
  DATE,
  DROPDOWN,
  FLYOUT,
  NUMBER,
  PANEL,
  RADIO,
} from './constants';

// This functions takes the filters passed in and makes an object to track it's state
export const getInitialStateFromFilters = (filters, variation = FLYOUT) => {
  const initialFilterState = {};

  const setInitialState = ({ type, column, props }) => {
    if (type === CHECKBOX) {
      initialFilterState[column] = {
        value: props.Checkbox.map(({ id, labelText, value }) => ({
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
          id,
          labelText,
          value,
          selected: false,
<<<<<<< HEAD
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
=======
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
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212

  return initialFilterState;
};
