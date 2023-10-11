/**
 * Copyright IBM Corp. 2022, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { DATE, DROPDOWN, NUMBER, RADIO, CHECKBOX, CLEAR_SINGLE_FILTER } from './constants';

export const FilterContext = createContext();

const EventEmitter = {
  events: {},
  dispatch: function (event, data) {
    if (!this.events[event]) {
      return;
    }
    this.events[event].forEach((callback) => callback(data));
  },
  subscribe: function (event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    } else {
      this.events[event].push(callback);
    }
  },
};

export const clearSingleFilter = ({ key, value }, setAllFilters, state) => {
  // console.log(id, setAllFilters, state.filters);
  // const newFilters = state.filters.filter(f => f.id !== id);
  // Change filter object.values object from selected: true to selected: false if equal to value
  // setAllFilters(newFilters);
}

export const handleSingleFilterRemoval = (key, value) => {
  console.log(key, value);
  EventEmitter.dispatch(CLEAR_SINGLE_FILTER, {key, value});
};

const prepareFiltersForTags = (filters) => {
  const tags = [];
  
  filters.forEach(({ id, type, value, ...rest }) => {
    console.log({...rest});
    const sharedFilterProps = {
      filter: true,
      // onClose: () => handleSingleFilterRemoval({id, type, value})
    }

    if (type === DROPDOWN || type === RADIO || type === NUMBER) {
      tags.push({
        key: id,
        value,
        ...sharedFilterProps
      });
    } else if (type === DATE) {
      const [startDate, endDate] = value;
      tags.push({
        key: id,
        value: `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`,
        ...sharedFilterProps,
      });
    } else if (type === CHECKBOX) {
      value.forEach((checkbox) => {
        if (checkbox.selected) {
          tags.push({
            key: id,
            value: checkbox.value,
            ...sharedFilterProps,
          });
        }
      });
    }
  });

  return tags;
};

export const FilterProvider = ({ children, filters }) => {
  const filterTags = prepareFiltersForTags(filters);
  const [panelOpen, setPanelOpen] = useState(false);

  const value = { filterTags, EventEmitter, panelOpen, setPanelOpen };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

FilterProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  filters: PropTypes.arrayOf(PropTypes.object).isRequired,
};
