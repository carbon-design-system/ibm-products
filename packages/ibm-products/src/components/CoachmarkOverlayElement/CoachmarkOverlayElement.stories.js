/**
 * Copyright IBM Corp. 2023, 2024
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

import {
  Coachmark,
  CoachmarkOverlayElement,
  CoachmarkOverlayElements,
  CoachmarkBeacon,
} from '..';

import mdx from './CoachmarkOverlayElement.mdx';

import styles from './_storybook-styles.scss';

export default {
  title: getStoryTitle(CoachmarkOverlayElement.displayName),
  component: CoachmarkOverlayElement,
  tags: ['autodocs'],
  argTypes: {
    button: {
      control: { type: null },
    },

    description: {
      control: { type: null },
    },
    nextButtonText: {
      control: { type: null },
    },
    previousButtonLabel: {
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

/**
 * TODO: Declare template(s) for one or more scenarios.
 */
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
          title={'Hello World'}
          description={'this is a description test'}
        />
      </CoachmarkOverlayElements>
    </Coachmark>
  );
};

/**
 * TODO: Declare one or more stories, generally one per design scenario.
 * NB no need for a 'Playground' because all stories have all controls anyway.
 */
export const coachmarkOverlayElement = prepareStory(Template, {
  args: {
    closeButtonLabel: 'Done',
    className: 'myOverlayElement',
  },
});
