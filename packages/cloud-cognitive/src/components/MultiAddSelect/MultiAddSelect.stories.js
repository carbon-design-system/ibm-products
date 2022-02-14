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
      label: 'Kansas',
      value: 'kansas',
    },
    {
      id: '2',
      label: 'Texas',
      value: 'texas',
    },
    {
      id: '3',
      label: 'Florida',
      value: 'florida',
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
      ...defaultProps.items,
      {
        id: '4',
        label: 'California',
        value: 'california',
        children: [
          {
            id: '5',
            label: 'Los Angeles',
            value: 'la',
            children: [
              {
                id: '453',
                label: 'Something',
                value: 'something',
                tags: 'list of tags',
              },
            ],
          },
        ],
      },
    ],
  },
});
