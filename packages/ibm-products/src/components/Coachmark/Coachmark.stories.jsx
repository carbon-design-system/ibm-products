/**
 * Copyright IBM Corp. 2023, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
// TODO: import action to handle events if required.
// import { action } from '@storybook/addon-actions';
import { Crossroads } from '@carbon/react/icons';
import { getSelectedCarbonTheme } from '../../global/js/utils/story-helper';

import {
  Coachmark,
  CoachmarkOverlayElement,
  CoachmarkOverlayElements,
  CoachmarkBeacon,
  CoachmarkButton,
} from '..';

import { BEACON_KIND, COACHMARK_OVERLAY_KIND } from './utils/enums';

import mdx from './Coachmark.mdx';

import styles from './_storybook-styles.scss?inline';

export default {
  title: 'IBM Products/Onboarding/Coachmark',
  component: Coachmark,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: { type: null },
    },
    target: {
      control: { type: null },
    },
    children: {
      control: { type: null },
    },
    onClose: {
      control: { type: null },
    },
    overlayKind: {
      control: { type: null },
    },
    overlayRef: {
      control: { type: null },
    },
    portalTarget: {
      control: { type: null },
    },
    overlayClassName: {
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
  const theme = getSelectedCarbonTheme();
  return (
    <Coachmark {...args} theme={theme}>
      <CoachmarkOverlayElements closeButtonLabel="Done">
        <CoachmarkOverlayElement
          title="Hello World"
          description="this is a description test"
        />
      </CoachmarkOverlayElements>
    </Coachmark>
  );
};

/**
 * TODO: Declare one or more stories, generally one per design scenario.
 * NB no need for a 'Playground' because all stories have all controls anyway.
 */
export const tooltip = Template.bind({});
tooltip.args = {
  theme: 'dark',
  align: 'bottom',
  positionTune: { x: 0, y: 0 },
  target: (
    <CoachmarkBeacon label="Show information" kind={BEACON_KIND.DEFAULT} />
  ),
};

export const floating = Template.bind({});
floating.args = {
  theme: 'dark',
  align: 'bottom',
  overlayKind: COACHMARK_OVERLAY_KIND.FLOATING,
  target: (
    <CoachmarkButton
      kind="tertiary"
      size="md"
      label="Show information"
      renderIcon={Crossroads}
    >
      Click Me
    </CoachmarkButton>
  ),
};
