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
import mdx from './SteppedAnimatedMedia.mdx';

import {
  HowACaseIsCreated1,
  HowACaseIsCreated2,
  HowACaseIsCreated3,
} from './assets';

import styles from './_storybook-styles.scss';
const storyClass = 'stepped-animated-media-stories';

export default {
  title: getStoryTitle(SteppedAnimatedMedia.displayName),
  component: SteppedAnimatedMedia,
  // TODO: Define argTypes for props not represented by standard JS types.

  parameters: {
    styles,
    docs: {
      page: mdx,
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

/**
 * TODO: Declare template(s) for one or more scenarios.
 */
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

/**
 * TODO: Declare one or more stories, generally one per design scenario.
 * NB no need for a 'Playground' because all stories have all controls anyway.
 */
export const steppedAnimatedMedia = prepareStory(Template, {
  args: {
    className: `${storyClass}__stepped-animated-media`,
    filePaths: [HowACaseIsCreated1, HowACaseIsCreated2, HowACaseIsCreated3],
    playStep: 0,
  },
});
