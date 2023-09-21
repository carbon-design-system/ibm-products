/**
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';
import { BasicHeader } from './BasicHeader';

const breadcrumbs = {
  'No breadcrumb': null,
  'A single breadcrumb': [{ href: '/', key: '0', label: 'Home page' }],
  'Two breadcrumbs': [
    { key: '0', href: '/', label: 'Home page' },
    { key: '1', href: '/', label: 'Application name' },
  ],
};

export default {
  title: getStoryTitle(BasicHeader.displayName),
  component: BasicHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
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
const Template = (args) => <BasicHeader {...args} />;

export const Default = prepareStory(Template, {
  args: {
    title: 'Page title',
    noTrailingSlash: false,
    className: 'custom-classname',
    breadcrumbs: 2,
  },
});
