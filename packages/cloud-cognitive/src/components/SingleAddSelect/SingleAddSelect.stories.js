//
// Copyright IBM Corp. 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useState } from 'react';
import styles from './_storybook-styles.scss'; // import index in case more files are added later.
import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';
import { SingleAddSelect } from '.';
import mdx from './SingleAddSelect.mdx';
import { Button } from 'carbon-components-react';
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
  className: 'placeholder-class',
  description: 'select a category lorem ipsum',
  globalSearchLabel: 'test input title',
  globalSearchPlaceholder: 'Find categories',
  items: {
    entries: [
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
  },
  itemsLabel: 'Categories',
  navIconDescription: 'View children',
  noResultsTitle: 'No results',
  noResultsDescription: 'Try again',
  onCloseButtonText: 'Cancel',
  onSubmit: (selection) => console.log(selection),
  onSubmitButtonText: 'Select',
  searchResultsLabel: 'Search results',
  title: 'Select category',
};

const Template = (args) => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <SingleAddSelect {...args} open={open} onClose={() => setOpen(false)} />
      <Button onClick={() => setOpen(true)}>Launch AddSelect</Button>
    </>
  );
};

export const Default = prepareStory(Template, {
  args: {
    ...defaultProps,
  },
});

export const WithHierarchy = prepareStory(Template, {
  args: {
    ...defaultProps,
    items: {
      entries: [
        ...defaultProps.items.entries,
        {
          id: '4',
          title: 'California',
          value: 'california',
          children: {
            entries: [
              {
                id: '5',
                title: 'Los Angeles',
                value: 'la',
                children: {
                  entries: [
                    {
                      id: '6',
                      title: 'Third Level',
                      value: 'third level',
                    },
                    {
                      id: '7',
                      title: 'another Level',
                      value: 'another level',
                      children: {
                        entries: [
                          {
                            id: '8',
                            title: 'last level',
                            value: 'last level',
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  },
});
