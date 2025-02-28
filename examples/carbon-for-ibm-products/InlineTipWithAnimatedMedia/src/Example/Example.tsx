import React from 'react';
import {
  InlineTip
} from '@carbon/ibm-products';

import './_example.scss';
import { SteppedAnimatedMedia } from '../SteppedAnimatedMedia/SteppedAnimatedMedia';
const InlineTipAnimation = new URL(
  './storybook_assets/inline-tip-animation',
  import.meta.url
).pathname;

export const Example = () => {
  return (
    <InlineTip
    renderMedia={({ playStep }) => (
      <SteppedAnimatedMedia
        filePaths={[InlineTipAnimation]}
        playStep={playStep}
      />
    )}
  />
  );
};

export default Example;
