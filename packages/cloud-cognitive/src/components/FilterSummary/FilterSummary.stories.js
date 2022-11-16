//cspell: disable
/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import { getStoryTitle } from '../../global/js/utils/story-helper';
import { FilterSummary } from '.';

import styles from './_storybook-styles.scss';

export default {
  title: getStoryTitle(FilterSummary.displayName),
  component: FilterSummary,
  parameters: {
    styles,
  },
};

// eslint-disable-next-line react/prop-types
export const Default = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [filters, setFilters] = useState({
    name: 'Thor',
    location: 'Asgard',
    weapon: 'Mjölnir',
  });

  const onTagClose = (key) => {
    const newFilters = { ...filters };
    delete newFilters[key];
    setFilters(newFilters);
  };

  const clearFilters = () => setFilters({});

  return (
    <FilterSummary
      clearFiltersText="Clear filters"
      filters={filters}
      onClose={onTagClose}
      clearFilters={clearFilters}
      tagSize="md"
    />
  );
};

// eslint-disable-next-line react/prop-types
export const WithManyTags = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [filters, setFilters] = useState({
    Project: 'Goldmember',
    Owner: 'Austin Powers',
    'Middle name': 'Danger',
    Spy: 'True',
    Title: 'International man of mystery',
  });

  const onTagClose = (key) => {
    const newFilters = { ...filters };
    delete newFilters[key];
    setFilters(newFilters);
  };

  const clearFilters = () => setFilters({});

  return (
    <FilterSummary
      clearFiltersText="Clear filters"
      filters={filters}
      onClose={onTagClose}
      clearFilters={clearFilters}
      tagSize="md"
    />
  );
};
