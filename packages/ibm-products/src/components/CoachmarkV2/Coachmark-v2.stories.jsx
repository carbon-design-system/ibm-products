/**
 * Copyright IBM Corp. 2023, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { CoachmarkV2 } from './Coachmark-v2';
import './CoachmarkBubble';
import mdx from './Coachmark-v2.mdx';

import styles from './_storybook-styles.scss?inline';
import { Button, Theme } from '@carbon/react';
import CoachmarkContent from './CoachmarkContent';
import { CoachmarkBeacon } from './CoachmarkBeacon';

export default {
  title: 'Experimental/Onboarding/CoachmarkV2/CoachmarkV2',
  component: CoachmarkV2,
  tags: ['autodocs', 'Onboarding'],
  argTypes: {
    children: {
      control: { type: null },
    },
    onClose: {
      control: { type: null },
    },
    align: {
      options: [
        'top',
        'top-left',
        'top-right',
        'bottom',
        'bottom-left',
        'bottom-right',
        'left',
        'left-bottom',
        'left-top',
        'right',
        'right-bottom',
        'right-top',
      ],
      control: { type: 'select' },
    },
    className: {
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
  return (
    <CoachmarkV2 positionTune={{ x: 151, y: 155 }} {...args}>
      <CoachmarkV2.Trigger>
        <CoachmarkBeacon
          id="CoachmarkBtn"
          label="Show information"
        ></CoachmarkBeacon>
      </CoachmarkV2.Trigger>
      <Theme theme="white">
        <CoachmarkV2.Content highContrast={true}>
          <CoachmarkContent.Header></CoachmarkContent.Header>
          <CoachmarkContent.Body>
            <h2>Hello World</h2>
            <p>this is a description test</p>
            <Button size="sm">Done</Button>
          </CoachmarkContent.Body>
        </CoachmarkV2.Content>
      </Theme>
    </CoachmarkV2>
  );
};

/**
 * TODO: Declare one or more stories, generally one per design scenario.
 * NB no need for a 'Playground' because all stories have all controls anyway.
 */
export const Tooltip = Template.bind({});
Tooltip.args = {
  isOpenByDefault: true,
  align: 'top',
};
