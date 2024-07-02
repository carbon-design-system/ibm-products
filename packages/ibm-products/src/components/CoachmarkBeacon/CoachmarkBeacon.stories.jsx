/**
 * Copyright IBM Corp. 2023, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useRef } from 'react';

import { getSelectedCarbonTheme } from '../../global/js/utils/story-helper';

import {
  Coachmark,
  CoachmarkOverlayElement,
  CoachmarkOverlayElements,
  CoachmarkBeacon,
} from '..';

import mdx from './CoachmarkBeacon.mdx';

import styles from './_storybook-styles.scss?inline';
import { BEACON_KIND } from '../Coachmark/utils/enums';

export default {
  title: 'IBM Products/Onboarding/Coachmark/Coachmark elements/CoachmarkBeacon',
  component: CoachmarkBeacon,
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

/**
 * TODO: Declare template(s) for one or more scenarios.
 */
const Template = (args) => {
  const ref = useRef();

  useEffect(() => {
    console.log(ref);
    ref?.current?.scrollIntoView({ block: 'center', inline: 'center' });
  });
  const theme = getSelectedCarbonTheme();
  return (
    <div style={{ width: '5000px', height: '5000px' }}>
      <div
        style={{
          position: 'absolute',
          top: '2500px',
          left: '2500px',
        }}
        ref={ref}
      >
        <Coachmark
          align={'bottom'}
          target={<CoachmarkBeacon {...args} />}
          theme={theme}
        >
          <CoachmarkOverlayElements closeButtonLabel="Done">
            <CoachmarkOverlayElement
              title="Hello World"
              description="this is a description test"
            />
          </CoachmarkOverlayElements>
        </Coachmark>
      </div>
    </div>
  );
};

/**
 * TODO: Declare one or more stories, generally one per design scenario.
 * NB no need for a 'Playground' because all stories have all controls anyway.
 */
export const coachmarkBeacon = Template.bind({});
coachmarkBeacon.args = {
  className: 'myBeacon',
  kind: BEACON_KIND.DEFAULT,
  label: 'Show information',
};
