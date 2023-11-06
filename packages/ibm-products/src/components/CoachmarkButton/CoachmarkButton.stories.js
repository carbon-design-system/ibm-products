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
import { COACHMARK_OVERLAY_KIND } from '../Coachmark';
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

/**
 * TODO: Declare template(s) for one or more scenarios.
 */
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
          renderIcon={Launch16}
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
