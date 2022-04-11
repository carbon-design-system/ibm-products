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
import image from '../UserProfileImage/headshot.png'; // cspell:disable-line
import { Group24, Document16 } from '@carbon/icons-react';

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
  items: {
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
  onSubmit: (selections) => console.log(selections),
  searchResultsLabel: 'Search results',
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
        property: 'role',
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
