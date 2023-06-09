/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
// TODO: import action to handle events if required.
// import { action } from '@storybook/addon-actions';
import { Launch16 } from '@carbon/icons-react';
import { Link as CarbonLink } from 'carbon-components-react';
import {
  getStoryTitle,
  getSelectedCarbonTheme,
  prepareStory,
} from '../../global/js/utils/story-helper';

import {
  Coachmark,
  CoachmarkOverlayElements,
  CoachmarkOverlayElement,
  CoachmarkBeacon,
  CoachmarkFixed,
  // CoachmarkStack,
} from '..';
import mdx from './Coachmark.mdx';

import { BEACON_KIND } from './utils/enums';

import styles from './_storybook-styles.scss';

export default {
  title: getStoryTitle(Coachmark.displayName),
  component: Coachmark,
  argTypes: {
    definition: {
      table: {
        disable: true,
      },
    },
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

const BaseTemplate = (args) => {
  const theme = getSelectedCarbonTheme();
  return (
    <Coachmark
      // TODO: handle events with action or local handler.
      // onTodo={action('onTodo log action')}
      {...args}
      theme={theme}
    >
      <CoachmarkOverlayElements closeButtonLabel="Done">
        <CoachmarkOverlayElement
          title="Hello World"
          description="this is a description test"
        />
      </CoachmarkOverlayElements>
    </Coachmark>
  );
};

const FixedTemplate = (args) => {
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
            <CarbonLink
              href="https://www.ibm.com"
              renderIcon={Launch16}
              target="_blank"
            >
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

const StackedTemplate = (args) => {
  const theme = getSelectedCarbonTheme();
  return (
    <Coachmark
      // TODO: handle events with action or local handler.
      // onTodo={action('onTodo log action')}
      {...args}
      theme={theme}
    >
      <CoachmarkOverlayElements closeButtonLabel="Done">
        <CoachmarkOverlayElement
          title="Hello World"
          description="this is a description test"
        />
      </CoachmarkOverlayElements>
    </Coachmark>
  );
};

/* ========================================================= | STORIES | ========================================================= */

export const coachmark = prepareStory(BaseTemplate, {
  args: {
    theme: 'dark',
    align: 'top',
    positionTune: { x: 0, y: 0 },
    // portalSelector:
    //   '#story--ibm-products-novice-to-pro-coachmark-canary--coachmark',
    target: (
      <CoachmarkBeacon label="Show information" kind={BEACON_KIND.DEFAULT} />
    ),
  },
});

export const coachmarkFixed = prepareStory(FixedTemplate, {
  args: {
    tagline: 'Why are there two types of severity scores?',
    onClose: () => console.log('CLOSE'),
  },
});

export const coachmarkStacked = prepareStory(StackedTemplate, {
  args: {
    theme: 'dark',
    align: 'top',
    positionTune: { x: 0, y: 0 },
    // portalSelector:
    //   '#story--ibm-products-novice-to-pro-coachmark-canary--coachmark',
    target: (
      <CoachmarkBeacon label="Show information" kind={BEACON_KIND.DEFAULT} />
    ),
  },
});
