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

import { SteppedAnimatedMedia } from '.';

import {
  HowACaseIsCreated1,
  HowACaseIsCreated2,
  HowACaseIsCreated3,
} from './assets';

import styles from './_storybook-styles.scss';
const storyClass = 'stepped-animated-media-stories';
import DocsPage from './SteppedAnimatedMedia.docs-page';

export default {
  title: getStoryTitle(SteppedAnimatedMedia.displayName),
  component: SteppedAnimatedMedia,
  tags: ['autodocs'],
  parameters: {
    styles,
    docs: {
      page: DocsPage,
    },
  },
  argTypes: {
    definition: {
      table: {
        disable: true,
      },
    },
    playStep: {
      control: { type: 'number', min: 0, max: 2, step: 1 },
    },
    className: {
      control: { type: null },
    },
  },
};

const Template = (args) => {
  return (
    <div className={`${storyClass}__viewport`}>
      <SteppedAnimatedMedia
        // TODO: handle events with action or local handler.
        // onTodo={action('onTodo log action')}
        {...args}
      />
    </div>
  );
};

export const steppedAnimatedMedia = prepareStory(Template, {
  args: {
    className: `${storyClass}__stepped-animated-media`,
    filePaths: [HowACaseIsCreated1, HowACaseIsCreated2, HowACaseIsCreated3],
    playStep: 0,
  },
});
