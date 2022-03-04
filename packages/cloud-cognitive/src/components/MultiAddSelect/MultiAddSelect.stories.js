//
// Copyright IBM Corp. 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import styles from './_storybook-styles.scss'; // import index in case more files are added later.
import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';
import { MultiAddSelect } from '.';
import mdx from './MultiAddSelect.mdx';
// import { action } from '@storybook/addon-actions';

export default {
  title: getStoryTitle(MultiAddSelect.displayName),
  component: MultiAddSelect,
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const defaultProps = {
  open: true,
  items: [
    {
      id: '1',
      value: '1',
      title: 'item 1',
      subtitle: 'item 1 subtitle',
    },
    {
      id: '2',
      value: '2',
      title: 'item 2',
    },
    {
      id: '3',
      value: '3',
      title: 'item 3',
      subtitle: 'item 3 subtitle',
    },
  ],
  title: 'Add business terms',
  description: 'Select business terms from the list',
  inputPlaceholder: 'Find business terms',
  itemsLabel: 'Business terms',
  influencerTitle: 'Selected business terms',
  noSelectionTitle: 'No business terms selected',
  noSelectionDescription:
    'Select a term to include the full set of the governance artifacts it contains in the governance scope.',
  noResultsTitle: 'No results',
  noResultsDescription: 'Try again',
  onCloseButtonText: 'Cancel',
  onSubmitButtonText: 'Add',
  removeIconDescription: 'Remove',
  textInputLabel: 'test input label',
  columnInputPlaceholder: 'Find',
};

const Template = (args) => {
  return <MultiAddSelect {...args} />;
};

export const Default = prepareStory(Template, {
  args: {
    ...defaultProps,
  },
});

export const WithHierarchy = prepareStory(Template, {
  args: {
    ...defaultProps,
    items: [
      {
        id: '1',
        value: '1',
        title: 'item 1',
        children: [
          {
            id: '1-1',
            value: '1-1',
            title: 'item 1-1',
            children: [
              {
                id: '1-1-1',
                value: '1-1-1',
                title: 'item 1-1-1',
              },
              {
                id: '1-1-2',
                value: '1-1-2',
                title: 'item 1-1-2',
              },
            ],
          },
          {
            id: '1-2',
            value: '1-2',
            title: 'item 1-2',
            children: [
              {
                id: '1-2-1',
                value: '1-2-1',
                title: 'item 1-2-1',
              },
            ],
          },
        ],
      },
      {
        id: '2',
        value: '2',
        title: 'item 2',
      },
      {
        id: '3',
        value: '3',
        title: 'item 3',
        children: [
          {
            id: '3-1',
            value: '3-1',
            title: 'item 3-1',
          },
        ],
      },
      {
        id: '4',
        value: '4',
        title: 'item 4',
      },
      {
        id: '5',
        value: '5',
        title: 'item 5',
      },
      {
        id: '6',
        value: '6',
        title: 'item 6',
      },
      {
        id: '7',
        value: '7',
        title: 'item 7',
      },
      {
        id: '8',
        value: '8',
        title: 'item 8',
      },
      {
        id: '9',
        value: '9',
        title: 'item 9',
      },
      {
        id: '10',
        value: '10',
        title: 'item 10',
      },
    ],
  },
});
