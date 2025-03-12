import React, { useState } from 'react';
import {
  InterstitialScreen,
  InterstitialScreenView,
  InterstitialScreenViewModule,
} from '@carbon/ibm-products';
import { Button } from '@carbon/react';

import './_example.scss';
import { SteppedAnimatedMedia } from '../SteppedAnimatedMedia/SteppedAnimatedMedia';
const HowACaseIsCreated1 = new URL(
  '../SteppedAnimatedMedia/assets/illustrations/how-a-case-is-created-1.json',
  import.meta.url
).pathname;
const HowACaseIsCreated2 = new URL(
  '../SteppedAnimatedMedia/assets/illustrations/how-a-case-is-created-2.json',
  import.meta.url
).pathname;
const HowACaseIsCreated3 = new URL(
  '../SteppedAnimatedMedia/assets/illustrations/how-a-case-is-created-3.json',
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
        breakpointsWithMedia={{ xlg: 8, lg: 8 }}
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
        <InterstitialScreenView stepTitle="Step 1">
          <InterstitialScreenViewModule
            size="md"
            title="Use case-specific heading 1"
            description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
          />
        </InterstitialScreenView>
        <InterstitialScreenView stepTitle="Step 2">
          <InterstitialScreenViewModule
            size="md"
            title="Use case-specific heading 2"
            description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
          />
        </InterstitialScreenView>
        <InterstitialScreenView stepTitle="Step 3">
          <InterstitialScreenViewModule
            size="md"
            title="Use case-specific heading 3"
            description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
          />
        </InterstitialScreenView>
      </InterstitialScreen>
    </>
  );
};

export default Example;
