/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';
import { FilterSummary } from '.';

import styles from './_storybook-styles.scss';
import { DisplayBox } from '../../global/js/utils/DisplayBox';

export default {
  title: getStoryTitle(FilterSummary.displayName),
  component: FilterSummary,
  tags: ['autodocs'],
  parameters: {
    styles,
  },
  argTypes: {
    containerWidth: {
      control: { type: 'range', min: 320, max: 800, step: 10 },
    },
  },
  decorators: [(story) => <DisplayBox>{story()}</DisplayBox>],
};

const Template = (args) => {
  const [filters, setFilters] = useState(args.filters);
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
    containerWidth: 500,
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
    containerWidth: 500,
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
    containerWidth: 500,
  },
});
