// cspell:words grafana

import React from 'react';

// ----------------------------------------------------
// This is an example showing use of the
// AboutModal component
// from the @carbon/ibm-products component library.
// ----------------------------------------------------

import { CoachmarkOverlayElements } from '@carbon/ibm-products';

import './_example.scss';
import { SteppedAnimatedMedia } from '../SteppedAnimatedMedia/SteppedAnimatedMedia';
const Anim1 = new URL('../SteppedAnimatedMedia/assets/illustrations/anim1.json', import.meta.url).pathname;
const Anim2 = new URL('../SteppedAnimatedMedia/assets/illustrations/anim2.json', import.meta.url).pathname;

export const Example = () => {
  return <CoachmarkOverlayElements renderMedia= {({ playStep }) => (
    <SteppedAnimatedMedia filePaths={[Anim1, Anim2]} playStep={playStep} />
  )} />;
};

export default Example;
