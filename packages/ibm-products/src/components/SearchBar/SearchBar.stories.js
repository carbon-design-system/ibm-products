/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
// TODO: import action to handle events if required.
import { action } from '@storybook/addon-actions';

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';

import { SearchBar } from '.';
import mdx from './SearchBar.mdx';

import styles from './_storybook-styles.scss';

export default {
  title: getStoryTitle(SearchBar.displayName),
  component: SearchBar,
  tags: ['autodocs'],
  // TODO: Define argTypes for props not represented by standard JS types.
  // argTypes: {
  //   egProp: { control: 'color' },
  // },
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

/**
 * TODO: Declare template(s) for one or more scenarios.
 */
const Template = ({...args}) => {
  return (
    <SearchBar
      {...args}
      onChange={(newVal) => action('onChange')(newVal.value)}
    />
  );
};

/**
 * TODO: Declare one or more stories, generally one per design scenario.
 * NB no need for a 'Playground' because all stories have all controls anyway.
 */
export const searchBar = prepareStory(Template, {
  args: {
    clearButtonLabelText: 'Clear',
    labelText: 'Label Text',
    placeHolderText: 'Search...',
    submitLabel: 'Search'
  },
});
