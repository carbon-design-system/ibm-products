/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
// TODO: import action to handle events if required.
// import { action } from '@storybook/addon-actions';
import { Crossroads } from '@carbon/react/icons';
import { COACHMARK_OVERLAY_KIND } from '../Coachmark';
import {
  getStoryTitle,
  prepareStory,
  getSelectedCarbonTheme,
} from '../../global/js/utils/story-helper';
import {
  Coachmark,
  CoachmarkOverlayElement,
  CoachmarkOverlayElements,
} from '..';
import { CoachmarkButton } from '.';
import mdx from './CoachmarkButton.mdx';

import styles from './_storybook-styles.scss';

export default {
  title: getStoryTitle(CoachmarkButton.displayName),
  component: CoachmarkButton,
  tags: ['autodocs'],
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

const Template = (args) => {
  const theme = getSelectedCarbonTheme();
  return (
    <Coachmark
      align={'bottom'}
      overlayKind={COACHMARK_OVERLAY_KIND.FLOATING}
      target={
        <CoachmarkButton
          kind="tertiary"
          label="Show information"
          size="md"
          renderIcon={Crossroads}
          {...args}
        />
      }
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

/**
 * TODO: Declare one or more stories, generally one per design scenario.
 * NB no need for a 'Playground' because all stories have all controls anyway.
 */
export const coachmarkButton = prepareStory(Template, {
  args: {
    label: 'Click Me',
    className: 'myButton',
  },
});
