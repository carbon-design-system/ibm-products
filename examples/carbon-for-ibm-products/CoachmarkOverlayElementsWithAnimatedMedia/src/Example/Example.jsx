// cspell:words grafana

import React from 'react';

// ----------------------------------------------------
// This is an example showing use of the
// AboutModal component
// from the @carbon/ibm-products component library.
// ----------------------------------------------------

import {
  CoachmarkOverlayElements,
  Coachmark,
  CoachmarkOverlayElement,
  CoachmarkBeacon,
} from '@carbon/ibm-products';

import './_example.scss';
import { SteppedAnimatedMedia } from '../SteppedAnimatedMedia/SteppedAnimatedMedia';
const Anim1 = new URL(
  '../SteppedAnimatedMedia/assets/illustrations/anim1.json',
  import.meta.url
).pathname;
const Anim2 = new URL(
  '../SteppedAnimatedMedia/assets/illustrations/anim2.json',
  import.meta.url
).pathname;

export const Example = () => {
  return (
    <Coachmark
      align={'bottom'}
      positionTune={{ x: 0, y: 0 }}
      target={<CoachmarkBeacon label="Show information" kind={'default'} />}
      //theme={theme}
    >
      <CoachmarkOverlayElements
        renderMedia={({ playStep }) => (
          <SteppedAnimatedMedia
            filePaths={[Anim1, Anim2]}
            playStep={playStep}
          />
        )}
      >
        <CoachmarkOverlayElement
          title="Example 1"
          description="This is an example description."
        />
        <CoachmarkOverlayElement
          title="Example 2"
          description="This is another example description."
        />
      </CoachmarkOverlayElements>
    </Coachmark>
  );
};

export default Example;
