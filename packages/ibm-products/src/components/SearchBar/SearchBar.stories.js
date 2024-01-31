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

const scopes = [
  {
    id: 'scope-2',
    text: 'Scope 2',
  },
  {
    id: 'scope-1',
    text: 'Scope 1',
  },
  {
    id: 'scope-3',
    text: 'Scope 3',
  },
];

const defaultProps = {
  clearButtonLabelText: 'Clear',
  labelText: 'Label Text',
  placeHolderText: 'Search...',
  submitLabel: 'Search',
  onChange: (newVal) => action('onChange')(newVal),
};

const DefaultTemplate = ({ ...args }) => {
  return <SearchBar {...args} />;
};

const ScopesTemplate = ({ ...args }) => {
  return <SearchBar {...args} />;
};

export const Default = prepareStory(DefaultTemplate, {
  args: {
    ...defaultProps,
  },
});

export const Scopes = prepareStory(ScopesTemplate, {
  args: {
    ...defaultProps,
    scopes,
    scopesTypeLabel: 'Scopes',
    scopeToString: (item) => (item ? item.text : ''),
  },
});
