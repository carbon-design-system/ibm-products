/**
 * Copyright IBM Corp. 2023, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
// TODO: import action to handle events if required.
// import { action } from '@storybook/addon-actions';
import { Link as CarbonLink } from '@carbon/react';
import { getSelectedCarbonTheme } from '../../global/js/utils/story-helper';

import { CoachmarkOverlayElement, CoachmarkOverlayElements } from '..';
import { CoachmarkFixed } from '.';
import mdx from './CoachmarkFixed.mdx';

import styles from './_storybook-styles.scss?inline';

export default {
  title: 'IBM Products/Onboarding/Coachmark/CoachmarkFixed',
  component: CoachmarkFixed,
  tags: ['autodocs'],
  // TODO: Define argTypes for props not represented by standard JS types.
  argTypes: {
    children: {
      control: { type: null },
    },
    portalTarget: {
      control: { type: null },
    },
    theme: {
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
    <CoachmarkFixed {...args} theme={theme}>
      <CoachmarkOverlayElements
        closeButtonLabel="Done"
        nextButtonText="Next"
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

/**
 * TODO: Declare one or more stories, generally one per design scenario.
 * NB no need for a 'Playground' because all stories have all controls anyway.
 */
export const coachmarkFixed = Template.bind({});
coachmarkFixed.args = {
  tagline: 'Why are there two types of severity scores?',
  onClose: () => console.log('CLOSE'),
  portalTarget: '#root:not([hidden="true"])',
  className: 'myCoachmarkFixed',
};
