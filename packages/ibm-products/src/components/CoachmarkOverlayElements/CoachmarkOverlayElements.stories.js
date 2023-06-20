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
  getSelectedCarbonTheme,
  prepareStory,
} from '../../global/js/utils/story-helper';

import { Coachmark, CoachmarkOverlayElement, CoachmarkBeacon } from '..';
import { CoachmarkOverlayElements } from '.';
import mdx from './CoachmarkOverlayElements.mdx';

import styles from './_storybook-styles.scss';

export default {
  title: getStoryTitle(CoachmarkOverlayElements.displayName),
  component: CoachmarkOverlayElements,
  // TODO: Define argTypes for props not represented by standard JS types.
  // argTypes: {
  //   egProp: { control: 'color' },
  // },
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const Anim1 = new URL('./assets/anim1.json', import.meta.url).pathname;
const Anim2 = new URL('./assets/anim2.json', import.meta.url).pathname;

const Template = (args) => {
  const theme = getSelectedCarbonTheme();
  return (
    <Coachmark
      align={'bottom'}
      positionTune={{ x: 0, y: 0 }}
      target={<CoachmarkBeacon label="Show information" kind={'default'} />}
      theme={theme}
    >
      <CoachmarkOverlayElements {...args}>
        <CoachmarkOverlayElement
          title="Example 1"
          description="This is an example description."
        />
        <CoachmarkOverlayElement
          title="Example 2"
          description="This is another example description."
        />
      </CoachmarkOverlayElements>
    </Coachmark>
  );
};

export const coachmarkOverlayElements = prepareStory(Template, {
  args: {
    closeButtonLabel: 'Done',
    nextButtonLabel: 'Next',
    previousButtonLabel: 'Back',
    className: 'myOverlayElements',
    media: { filePaths: [Anim1, Anim2] },
  },
});
