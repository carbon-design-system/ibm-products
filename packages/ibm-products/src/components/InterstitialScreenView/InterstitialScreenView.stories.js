/**
 * Copyright IBM Corp. 2023, 2023
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

import { InterstitialScreenView } from '.';
import mdx from './InterstitialScreenView.mdx';

import styles from './_storybook-styles.scss';

export default {
  title: getStoryTitle(InterstitialScreenView.displayName),
  component: InterstitialScreenView,
  // TODO: Define argTypes for props not represented by standard JS types.
  argTypes: {
    children: { control: { disable: true } },
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
  return (
    <InterstitialScreenView
      // TODO: handle events with action or local handler.
      // onTodo={action('onTodo log action')}
      {...args}
    >
      <div>Hello world</div>
    </InterstitialScreenView>
  );
};

/**
 * TODO: Declare one or more stories, generally one per design scenario.
 * NB no need for a 'Playground' because all stories have all controls anyway.
 */
export const interstitialScreenView = prepareStory(Template, {
  args: {
    stepTitle: 'Step 1',
  },
});
