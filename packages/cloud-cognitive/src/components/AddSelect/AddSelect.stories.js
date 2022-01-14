//
// Copyright IBM Corp. 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import {} from 'carbon-components-react';
// import { action } from '@storybook/addon-actions';
import { pkg } from '../../settings';
import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';
import { AddSelect } from '.';
import mdx from './AddSelect.mdx';
import styles from './_storybook-styles.scss'; // import index in case more files are added later.

export default {
  title: getStoryTitle(AddSelect.displayName),
  component: AddSelect,
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const defaultProps = {
  open: true,
  title: 'Select category',
  actions: [
    {
      label: 'Cancel',
      kind: 'secondary',
    },
    {
      label: 'Add',
      kind: 'primary',
    },
  ],
  description: 'select a category lorem ipsum',
  items: [
    {
      label: 'first',
      id: 1,
    },
    {
      label: 'second',
      id: 2,
    },
    {
      label: 'third',
      id: 3,
    },
  ],
  multiSelect: false,
  inputPlaceholder: 'Find categories',
  itemsLabel: 'Categories',
};

const blockClass = `${pkg.prefix}--add-select`;

const Template = (args) => {
  return <AddSelect className={blockClass} {...args} />;
};

export const SingleSelect = prepareStory(Template, {
  args: {
    ...defaultProps,
  },
});

export const MultiSelect = prepareStory(Template, {
  args: {
    ...defaultProps,
    multiSelect: true,
    title: 'Add business terms',
    itemsLabel: 'Business terms',
    influencerTitle: 'Selected business terms',
    description: 'Select business terms from the list',
    inputPlaceholder: 'Find business terms',
    noSelectionTitle: 'No business terms selected',
    noSelectionDescription:
      'Select a term to include the full set of the governance artifacts it contains in the governance scope.',
  },
});
