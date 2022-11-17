/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { DATE, DROPDOWN, NUMBER, RADIO, CHECKBOX } from './constants';

export const FilterContext = createContext();

const prepareFiltersForTags = (filters) => {
  const tags = [];

  filters.forEach(({ id, type, value }) => {
    if (type === DROPDOWN || type === RADIO || type === NUMBER) {
      tags.push({ key: id, value });
    } else if (type === DATE) {
      const [startDate, endDate] = value;
      tags.push({
        key: id,
        value: `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`,
      });
    } else if (type === CHECKBOX) {
      value.forEach((checkbox) => {
        if (checkbox.selected) {
          tags.push({ key: id, value: checkbox.value });
        }
      });
    }
  });

  return tags;
};

export const FilterProvider = ({ children, filters }) => {
  const filterTags = prepareFiltersForTags(filters);

  const onClearFilters = (callback) => callback();

  const value = { filterTags, onClearFilters };

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
