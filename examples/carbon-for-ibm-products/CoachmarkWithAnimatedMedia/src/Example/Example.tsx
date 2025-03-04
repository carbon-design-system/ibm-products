import React from 'react';
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
      target={<CoachmarkBeacon label="Show information" kind={'default'} />}
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
