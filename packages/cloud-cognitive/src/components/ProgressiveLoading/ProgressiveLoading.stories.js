/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
// TODO: import action to handle events if required.
// import { action } from '@storybook/addon-actions';

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';

import { ProgressiveLoading } from '.';
import mdx from './ProgressiveLoading.mdx';

import styles from './_storybook-styles.scss';

const progressLabels = {
  'No label': null,
  'Simple label': 'Loading...',
  'Show percentage': (pc) => pc ?? `${pc}%`,
  'Loading message': (pc) => (pc ? `Loading: ${pc}%` : 'Loading...'),
};

export default {
  title: getStoryTitle(ProgressiveLoading.displayName),
  component: ProgressiveLoading,
  argTypes: {
    progressLabel: {
      control: {
        type: 'select',
        labels: Object.keys(progressLabels),
      },
      options: Object.values(progressLabels).map((_k, i) => i),
      mapping: Object.values(progressLabels),
    },
  },
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

/**
 * TODO: Declare template(s) for one or more scenarios.
 */
const Template = (args) => {
  return <ProgressiveLoading {...args} />;
};

/**
 * TODO: Declare one or more stories, generally one per design scenario.
 * NB no need for a 'Playground' because all stories have all controls anyway.
 */
export const progressiveLoading = prepareStory(Template, {
  args: {},
});
