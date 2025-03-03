import React, { useState } from 'react';
import {
  InterstitialScreen
} from '@carbon/ibm-products';
import { Button } from '@carbon/react';

import './_example.scss';
import { SteppedAnimatedMedia } from '../SteppedAnimatedMedia/SteppedAnimatedMedia';
const HowACaseIsCreated1 = new URL(
  './_story-assets/illustrations/how-a-case-is-created-1.json',
  import.meta.url
).pathname;
const HowACaseIsCreated2 = new URL(
  './_story-assets/illustrations/how-a-case-is-created-2.json',
  import.meta.url
).pathname;
const HowACaseIsCreated3 = new URL(
  './_story-assets/illustrations/how-a-case-is-created-3.json',
  import.meta.url
).pathname;

export const Example = () => {
  const [showInterstitialModal, setShowInterstitialModal] = useState(true);

  return (
    <>
    <Button
      onClick={() => {
        setShowInterstitialModal(true);
      }}
    >
      Show Interstitial modal
    </Button>

    <InterstitialScreen
      isOpen={showInterstitialModal}
      onClose={() => {
        setShowInterstitialModal(false);
      }}
      renderMedia={({ playStep }) => (
        <SteppedAnimatedMedia
        filePaths={[
          HowACaseIsCreated1,
          HowACaseIsCreated2,
          HowACaseIsCreated3,
        ]}
        playStep={playStep}
        />
      )}
    >
     test children
    </InterstitialScreen>
  </>
   
  );
};

export default Example;
