/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { InterstitialScreenViewModule } from '.';
import mdx from './InterstitialScreenViewModule.mdx';

import styles from './_storybook-styles.scss?inline';

export default {
  title:
    'IBM Products/Onboarding/Interstitial screen/InterstitialScreenViewModule',
  component: InterstitialScreenViewModule,
  tags: ['autodocs'],
  argTypes: {
    //   egProp: { control: 'color' },
    //
    title: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
    className: {
      control: { type: 'text' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
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
  return (
    <InterstitialScreenViewModule
      // TODO: handle events with action or local handler.
      // onTodo={action('onTodo log action')}
      {...args}
    />
  );
};

/**
 * TODO: Declare one or more stories, generally one per design scenario.
 * NB no need for a 'Playground' because all stories have all controls anyway.
 */
export const interstitialScreenViewModule = Template.bind({});
interstitialScreenViewModule.args = {
  // TODO: Component args - https://storybook.js.org/docs/react/writing-stories/args#InterstitialScreenViewModule-args
  className: 'MyInterstitialScreenViewModule',
  title: 'Example title',
  description: 'This is an example of a description',
};
