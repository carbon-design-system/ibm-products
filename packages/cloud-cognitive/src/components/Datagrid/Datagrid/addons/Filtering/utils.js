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

  if (variation === FLYOUT) {
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
  } else if (variation === PANEL) {
    filters.forEach(({ title: sectionTitle, subsections }) => {
      if (!initialFilterState[sectionTitle]) {
        initialFilterState[sectionTitle] = {};
      }

      subsections.forEach(({ title: subSectionTitle, filters }) => {
        if (!initialFilterState[sectionTitle][subSectionTitle]) {
          initialFilterState[sectionTitle][subSectionTitle] = {};
        }
        filters.forEach(({ type, column, props }) => {
          if (type === 'checkbox') {
            initialFilterState[sectionTitle][subSectionTitle][column] =
              props.Checkbox.map(({ id, labelText, value }) => ({
                id,
                labelText,
                value,
                selected: false,
              }));
          } else if (type === 'date') {
            initialFilterState[sectionTitle][subSectionTitle][column] = [
              undefined,
              undefined,
            ];
          } else if (type === 'number') {
            initialFilterState[sectionTitle][subSectionTitle][column] = '';
          } else if (type === 'radio') {
            initialFilterState[sectionTitle][subSectionTitle][column] = '';
          } else if (type === 'dropdown') {
            initialFilterState[sectionTitle][subSectionTitle][column] = '';
          }
        });
      });
    });
  } else {
    console.error('No variation passed into useInitialStateFromFilters');
  }

  return initialFilterState;
};
