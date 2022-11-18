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
      tags.push({ [id]: value });
    } else if (type === DATE) {
      const [startDate, endDate] = value;
      tags.push({
        [id]: `${startDate.toLocaleString()} - ${endDate.toLocaleString()}`,
      });
    } else if (type === CHECKBOX) {
      value.forEach((checkbox) => {
        tags.push({ [id]: checkbox.value });
      });
    }
  });

  return tags;
};

export const FilterProvider = ({ children, filters }) => {
  console.log(filters);

  const filterTags = prepareFiltersForTags(filters);

  console.log({ filterTags });

  const value = { filterTags };

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

[
  {
    id: 'joined',
    value: ['2022-10-02T04:00:00.000Z', '2022-10-26T04:00:00.000Z'],
    type: 'date',
  },
  {
    id: 'visits',
    value: '1',
    type: 'number',
  },
  {
    id: 'passwordStrength',
    value: [
      {
        id: 'normal',
        labelText: 'Normal',
        value: 'normal',
        selected: true,
      },
      {
        id: 'minor-warning',
        labelText: 'Minor warning',
        value: 'minor-warning',
        selected: true,
      },
      {
        id: 'critical',
        labelText: 'Critical',
        value: 'critical',
        selected: false,
      },
    ],
    type: 'checkbox',
  },
  {
    id: 'role',
    value: 'developer',
    type: 'radio',
  },
  {
    id: 'status',
    value: 'complicated',
    type: 'dropdown',
  },
];
