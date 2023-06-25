/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Launch16 } from '@carbon/icons-react';
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
  CoachmarkButton,
} from '..';

import mdx from './Coachmark.mdx';

import { BEACON_KIND, COACHMARK_OVERLAY_KIND } from './utils/enums';

import styles from './_storybook-styles.scss';

export default {
  title: getStoryTitle(Coachmark.displayName),
  component: Coachmark,
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
    portalSelector: {
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

/* ========================================================= | TEMPLATES | ========================================================= */

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

export const tooltip = prepareStory(Template, {
  args: {
    theme: 'dark',
    align: 'bottom',
    positionTune: { x: 0, y: 0 },
    //portalSelector: '#CoachmarkExample',
    target: (
      <CoachmarkBeacon label="Show information" kind={BEACON_KIND.DEFAULT} />
    ),
  },
});

export const floating = prepareStory(Template, {
  args: {
    theme: 'dark',
    align: 'bottom',
    overlayKind: COACHMARK_OVERLAY_KIND.FLOATING,
    target: (
      <CoachmarkButton
        kind="tertiary"
        size="md"
        renderIcon={Launch16}
        label="Show Information"
      >
        Click Me
      </CoachmarkButton>
    ),
  },
});
