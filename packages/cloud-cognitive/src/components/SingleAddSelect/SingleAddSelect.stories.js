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
import { SingleAddSelect } from '.';
import mdx from './SingleAddSelect.mdx';
// import { action } from '@storybook/addon-actions';

export default {
  title: getStoryTitle(SingleAddSelect.displayName),
  component: SingleAddSelect,
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
  description: 'select a category lorem ipsum',
  items: [
    {
      id: '1',
      title: 'Kansas',
      value: 'kansas',
    },
    {
      id: '2',
      title: 'Texas',
      value: 'texas',
    },
    {
      id: '3',
      title: 'Florida',
      value: 'florida',
    },
  ],
  inputPlaceholder: 'Find categories',
  itemsLabel: 'Categories',
  noResultsTitle: 'No results',
  noResultsDescription: 'Try again',
  onCloseButtonText: 'Cancel',
  onSubmitButtonText: 'Select',
  textInputLabel: 'test input title',
};

const Template = (args) => {
  return <SingleAddSelect {...args} />;
};

const CustomFilterTemplate = () => {
  const props = {
    ...defaultProps,
    onSearchFilter: (item, searchTerm) =>
      Object.keys(item).some((key) => item[key].includes(searchTerm)),
  };
  return <SingleAddSelect {...props} />;
};

export const Default = prepareStory(Template, {
  args: {
    ...defaultProps,
  },
});

export const WithCustomFilter = prepareStory(CustomFilterTemplate, {
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
        title: 'California',
        value: 'california',
        children: [
          {
            id: '5',
            title: 'Los Angeles',
            value: 'la',
            children: [
              {
                id: '6',
                title: 'Third Level',
                value: 'third level',
              },
              {
                id: '7',
                title: 'another Level',
                value: 'another level',
                children: [
                  {
                    id: '8',
                    title: 'last level',
                    value: 'last level',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});
