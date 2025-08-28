import React, { useState } from 'react';
import { InterstitialScreen } from '@carbon/ibm-products';
import { Button } from '@carbon/react';

import './_example.scss';
import { InterstitialScreenView } from './InterstitialScreenView/InterstitialScreenView';
import { InterstitialScreenViewModule } from './InterstitialScreenViewModule/InterstitialScreenViewModule';

export const Example = () => {
  // cspell:words Terminé Partiel Actuel valide
  
  const [showInterstitialModal, setShowInterstitialModal] = useState(true);

  const defaultProps = {
    headerTitle: 'Welcome, Jan!',
  };
  const translations = {
    'carbon.progress-step.complete': 'Terminé',
    'carbon.progress-step.incomplete': 'Partiel',
    'carbon.progress-step.current': 'Actuel',
    'carbon.progress-step.invalid': 'Non valide',
  };

  const getContent = () => {
    return (
      <>
        <InterstitialScreenView
          stepTitle="Step 1"
          translateWithId={(id) => translations[id] ?? id}
        >
          <InterstitialScreenViewModule
            title="Use case-specific heading 1"
            description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
          />
        </InterstitialScreenView>
        <InterstitialScreenView
          stepTitle="Step 2"
          translateWithId={(id) => translations[id] ?? id}
        >
          <InterstitialScreenViewModule
            title="Use case-specific heading 2"
            description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
          />
        </InterstitialScreenView>
        <InterstitialScreenView
          stepTitle="Step 3"
          translateWithId={(id) => translations[id] ?? id}
        >
          <InterstitialScreenViewModule
            title="Use case-specific heading 3"
            description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
          />
        </InterstitialScreenView>
      </>
    );
  };
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
        open={showInterstitialModal}
        onClose={() => {
          setShowInterstitialModal(false);
        }}
        isFullScreen={false}
      >
        <InterstitialScreen.Header
          headerTitle={defaultProps.headerTitle}
        ></InterstitialScreen.Header>
        <InterstitialScreen.Body
          contentRenderer={(internalConfig) => {
            return getContent();
          }}
        />
        <InterstitialScreen.Footer />
      </InterstitialScreen>
    </>
  );
};

export default Example;
