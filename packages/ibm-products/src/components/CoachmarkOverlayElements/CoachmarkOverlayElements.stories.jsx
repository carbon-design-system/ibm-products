/**
 * Copyright IBM Corp. 2023, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
// TODO: import action to handle events if required.
// import { action } from '@storybook/addon-actions';

import { getSelectedCarbonTheme } from '../../global/js/utils/story-helper';
import { Coachmark, CoachmarkOverlayElement, CoachmarkBeacon } from '..';
import { CoachmarkOverlayElements } from '.';
import mdx from './CoachmarkOverlayElements.mdx';

import styles from './_storybook-styles.scss?inline';

export default {
  title:
    'IBM Products/Onboarding/Coachmark/Coachmark elements/CoachmarkOverlayElements',
  component: CoachmarkOverlayElements,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: null },
    },
    media: {
      control: { type: null },
    },
  },
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

export const coachmarkOverlayElements = Template.bind({});
coachmarkOverlayElements.args = {
  closeButtonLabel: 'Done',
  nextButtonText: 'Next',
  previousButtonLabel: 'Back',
  className: 'myOverlayElements',
  media: { filePaths: [Anim1, Anim2] },
};
