/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { Monster } from '@carbon/react/icons';

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';

import { TooltipTrigger } from '.';
// import { pkg } from '../../settings';
// import DocsPage from './TooltipTrigger.docs-page';

import styles from './_storybook-styles.scss';

export default {
  title: getStoryTitle(TooltipTrigger.displayName),
  component: TooltipTrigger,
  parameters: {
    styles,
  },
  tags: ['autodocs'],
};

const Template = (args) => {
  return <TooltipTrigger {...args} />;
};

export const Icon = prepareStory(Template, {
  args: {
    children: <Monster size={16} />,
  },
});

export const Text = prepareStory(Template, {
  args: {
    children: 'Text',
  },
});
