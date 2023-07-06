/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Link as CarbonLink } from 'carbon-components-react';
import {
  getStoryTitle,
  getSelectedCarbonTheme,
  prepareStory,
} from '../../global/js/utils/story-helper';
import { CoachmarkOverlayElement, CoachmarkOverlayElements } from '..';
import { CoachmarkFixed } from '.';
import mdx from './CoachmarkFixed.mdx';

import styles from './_storybook-styles.scss';

export default {
  title: getStoryTitle(CoachmarkFixed.displayName),
  component: CoachmarkFixed,
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
    <CoachmarkFixed {...args} theme={theme}>
      <CoachmarkOverlayElements
        closeButtonLabel="Done"
        nextButtonLabel="Next"
        previousButtonLabel="Back"
      >
        <CoachmarkOverlayElement
          title="Hello World"
          description="Link opens in new tab."
          button={
            <CarbonLink href="https://www.ibm.com" target="_blank">
              Learn more
            </CarbonLink>
          }
        />
        <CoachmarkOverlayElement
          title="Hello World 2"
          description="Link opens on this page."
          button={
            <CarbonLink href="https://www.ibm.com">Learn more</CarbonLink>
          }
        />
      </CoachmarkOverlayElements>
    </CoachmarkFixed>
  );
};

export const coachmarkFixed = prepareStory(Template, {
  args: {
    tagline: 'Why are there two types of severity scores?',
    onClose: () => console.log('CLOSE'),
    portalTarget: '#root:not([hidden="true"])',
  },
});
