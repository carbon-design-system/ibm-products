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
import { MultiAddSelect } from '.';
import mdx from './MultiAddSelect.mdx';
import { Button } from 'carbon-components-react';
// import { action } from '@storybook/addon-actions';
import image from '../UserProfileImage/headshot.png'; // cspell:disable-line
import { Group24, Document16 } from '@carbon/icons-react';
import { pkg } from '../../settings';
const blockClass = `${pkg.prefix}--add-select__meta-panel`;

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
  className: 'placeholder-class',
  clearFiltersText: 'Clear filters',
  columnInputPlaceholder: 'Find',
  description: 'Select business terms from the list',
  globalSearchLabel: 'test input label',
  globalSearchPlaceholder: 'Find business terms',
  influencerTitle: 'Selected business terms',
  items: {
    entries: [
      {
        id: '1',
        value: '1',
        title: 'item 1',
        subtitle: 'item 1 subtitle',
        meta: (
          <div className={`${blockClass}-entry`}>
            <p className={`${blockClass}-entry-title`}>html support</p>
            <p className={`${blockClass}-entry-body`}>
              also supports nodes in the meta attribute
            </p>
          </div>
        ),
      },
      {
        id: '2',
        value: '2',
        title: 'item 2',
        meta: [
          {
            id: 'description',
            title: 'description',
            value: 'description text',
          },
          {
            id: 'secondary_category',
            title: 'secondary category',
            value: 'knowledge accelerator',
          },
        ],
      },
      {
        id: '3',
        value: '3',
        title: 'item 3',
        subtitle: 'item 3 subtitle',
      },
    ],
  },
  itemsLabel: 'Business terms',
  metaPanelTitle: 'Personal information',
  noResultsTitle: 'No results',
  noSelectionDescription:
    'Select a term to include the full set of the governance artifacts it contains in the governance scope.',
  noSelectionTitle: 'No business terms selected',
  noResultsDescription: 'Try again',
  onCloseButtonText: 'Cancel',
  onSubmit: (selections) => console.log(selections),
  onSubmitButtonText: 'Add',
  removeIconDescription: 'Remove',
  searchResultsLabel: 'Search results',
  title: 'Add business terms',
};

const Template = (args) => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <MultiAddSelect {...args} open={open} onClose={() => setOpen(false)} />
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
    globalFilters: [
      {
        id: 'fileType',
        label: 'File type',
      },
      {
        id: 'size',
        label: 'Size',
      },
      {
        id: 'tag',
        label: 'Tag',
      },
    ],
    globalFiltersIconDescription: 'Filter',
    globalFiltersPlaceholderText: 'Choose an option',
    globalFiltersPrimaryButtonText: 'Apply',
    globalFiltersSecondaryButtonText: 'Reset',
    globalSortBy: ['title'],
    items: {
      sortBy: ['title'],
      entries: [
        {
          id: '1',
          value: 'folder 1',
          title: 'folder 1',
          children: {
            sortBy: ['title', 'size'],
            filterBy: 'fileType',
            entries: [
              {
                id: '1-1',
                value: 'file1.pdf',
                title: 'file1.pdf',
                fileType: 'pdf',
                size: '100',
                icon: Document16,
                tag: 'business',
              },
              {
                id: '1-2',
                value: 'index.js',
                title: 'index.js',
                fileType: 'js',
                size: '200',
                icon: Document16,
              },
              {
                id: '1-3',
                value: 'sitemap.xml',
                title: 'sitemap.xml',
                fileType: 'xml',
                size: '10',
                icon: Document16,
              },
            ],
          },
        },
        {
          id: '2',
          value: 'folder 2',
          title: 'folder 2',
        },
      ],
    },
  },
});

export const WithModifiers = prepareStory(Template, {
  args: {
    ...defaultProps,
    items: {
      modifiers: {
        label: 'Role',
        options: ['editor', 'viewer', 'admin'],
      },
      entries: [
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
    },
  },
});

export const WithAvatars = prepareStory(Template, {
  args: {
    ...defaultProps,
    items: {
      entries: [
        {
          id: '1',
          value: '1',
          title: 'item 1',
          subtitle: 'item 1 subtitle',
          avatar: {
            src: image,
            alt: 'head shot',
          },
        },
        {
          id: '2',
          value: '2',
          title: 'item 2',
          subtitle: 'item 2 subtitle',
          avatar: {
            icon: Group24,
            backgroundColor: 'dark-green',
          },
        },
        {
          id: '3',
          value: '3',
          title: 'item 3',
          subtitle: 'item 3 subtitle',
          avatar: {
            icon: Group24,
          },
        },
      ],
    },
  },
});
