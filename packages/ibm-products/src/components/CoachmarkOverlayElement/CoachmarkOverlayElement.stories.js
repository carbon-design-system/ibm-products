/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {
  getStoryTitle,
  getSelectedCarbonTheme,
  prepareStory,
} from '../../global/js/utils/story-helper';

import { Coachmark, CoachmarkOverlayElements, CoachmarkBeacon } from '..';

import { CoachmarkOverlayElement } from '.';
import mdx from './CoachmarkOverlayElement.mdx';

import styles from './_storybook-styles.scss';

export default {
  title: getStoryTitle(CoachmarkOverlayElement.displayName),
  component: CoachmarkOverlayElement,
  // TODO: Define argTypes for props not represented by standard JS types.
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

export const coachmarkOverlayElement = prepareStory(Template, {
  args: {
    closeButtonLabel: 'Done',
    className: 'myOverlayElement',
  },
});
