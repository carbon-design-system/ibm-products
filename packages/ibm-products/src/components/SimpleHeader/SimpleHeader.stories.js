/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';
import { SimpleHeader } from './SimpleHeader';

import DocsPage from './SimpleHeader.docs-page';

const breadcrumbs = {
  'No breadcrumb': null,
  'A single breadcrumb': [{ href: '/', key: '0', label: 'Home page' }],
  'Two breadcrumbs': [
    { key: '0', href: '/', label: 'Breadcrumb 1' },
    { key: '1', href: '/', label: 'Breadcrumb 2' },
    { key: '2', label: 'Breadcrumb 3', isCurrentPage: true },
  ],
};

export default {
  title: getStoryTitle(SimpleHeader.displayName),
  component: SimpleHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: { page: DocsPage },
  },
  argTypes: {
    breadcrumbs: {
      control: {
        type: 'select',
        labels: Object.keys(breadcrumbs),
      },
      options: Object.values(breadcrumbs).map((_k, i) => i),
      mapping: Object.values(breadcrumbs),
    },
  },
};

// eslint-disable-next-line no-unused-vars -- args not used in this template
const Template = (args) => <SimpleHeader {...args} />;

export const simpleHeader = prepareStory(Template, {
  args: {
    title: 'Page title',
    noTrailingSlash: true,
    className: 'custom-classname',
    breadcrumbs: 2,
    overflowAriaLabel: 'Open and close additional breadcrumb item list.',
  },
});

export const simpleHeaderWithTitleOnly = prepareStory(Template, {
  args: {
    title: 'Page title',
    className: 'custom-classname',
  },
});

export const simpleHeaderWithBreadcrumbsOnly = prepareStory(Template, {
  args: {
    noTrailingSlash: true,
    className: 'custom-classname',
    breadcrumbs: 2,
    overflowAriaLabel: 'Open and close additional breadcrumb item list.',
  },
});

export const simpleHeaderWithOverflowBreadcrumbs = prepareStory(Template, {
  args: {
    noTrailingSlash: true,
    className: 'custom-classname',
    breadcrumbs: 2,
    maxVisible: 2,
    overflowAriaLabel: 'Open and close additional breadcrumb item list.',
  },
});
