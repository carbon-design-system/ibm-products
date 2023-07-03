/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';

import { FilterSummary } from '.';
import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';
import styles from './_storybook-styles.scss';

export default {
  title: getStoryTitle(FilterSummary.displayName),
  component: FilterSummary,
  parameters: {
    styles,
  },
};

// eslint-disable-next-line react/prop-types
export const Template = (args) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [filters, setFilters] = useState([
    { key: 'name', value: 'Thor' },
    { key: 'location', value: 'Asgard' },
    //cspell: disable
    { key: 'weapon', value: 'Mjölnir' },
    //cspell: enable
  ]);

  const clearFilters = () => setFilters([]);

  return (
    <div style={{ width: args.containerWidth }}>
      <FilterSummary
        clearFiltersText={args.clearFiltersText}
        filters={filters}
        clearFilters={clearFilters}
        renderLabel={args.renderLabel}
      />
    </div>
  );
};

// eslint-disable-next-line react/prop-types
export const Default = prepareStory(Template, {
  args: {
    clearFiltersText: 'Clear filters',
    filters: [
      { key: 'name', value: 'Thor' },
      { key: 'location', value: 'Asgard' },
      //cspell: disable
      { key: 'weapon', value: 'Mjölnir' },
      //cspell: enable
    ],
  },
});

// eslint-disable-next-line react/prop-types
export const WithManyTags = prepareStory(Template, {
  args: {
    clearFiltersText: 'Clear filters',
    filters: [
      //cspell: disable
      { key: 'project', value: 'Goldmember' },
      //cspell: enable
      { key: 'owner', value: 'Austin Powers' },
      { key: 'middle name', value: 'Danger' },
      { key: 'spy', value: true },
      { key: 'title', value: 'International man of mystery' },
    ],
  },
});

export const WithCustomLabel = prepareStory(Template, {
  args: {
    clearFiltersText: 'Clear filters',
    renderLabel: (key, value) => {
      // Here in this function you can control how you want the label to be displayed, you can supply your own Sentence or Title case function
      return `${key.toUpperCase()}: ${String(value).toUpperCase()}`;
    },
    filters: [
      //cspell: disable
      { key: 'project', value: 'Goldmember' },
      //cspell: enable
      { key: 'owner', value: 'Austin Powers' },
      { key: 'middle name', value: 'Danger' },
      { key: 'spy', value: true },
      { key: 'title', value: 'International man of mystery' },
    ],
  },
});
