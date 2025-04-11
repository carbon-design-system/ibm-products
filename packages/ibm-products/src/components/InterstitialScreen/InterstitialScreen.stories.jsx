/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import { Button } from '@carbon/react';

import { InterstitialScreen } from '.';
import mdx from './InterstitialScreen.mdx';
import styles from './_storybook-styles.scss?inline';
import { clamp } from '../../global/js/utils/clamp';
import { ArrowRight } from '@carbon/react/icons';
import { pkg } from '../../settings';
import { InterstitialScreenView } from './_story-assets/InterstitialScreenView/InterstitialScreenView';
import { InterstitialScreenViewModule } from './_story-assets/InterstitialScreenViewModule/InterstitialScreenViewModule';
const storyClass = 'interstitial-stories';

// cspell:words Terminé Partiel Actuel valide

const blockClass = `${pkg.prefix}--interstitial-screen`;

export default {
  title: 'Experimental/Onboarding/InterstitialScreen',
  component: InterstitialScreen,
  tags: ['autodocs'],
  subcomponents: {
    Header: InterstitialScreen.Header,
    Body: InterstitialScreen.Body,
    Footer: InterstitialScreen.Footer,
  },
  decorators: [
    (Story) => {
      return <div className={`${storyClass}__viewport`}>{Story()}</div>;
    },
  ],
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};
const translations = {
  'carbon.progress-step.complete': 'Terminé',
  'carbon.progress-step.incomplete': 'Partiel',
  'carbon.progress-step.current': 'Actuel',
  'carbon.progress-step.invalid': 'Non valide',
};

const getMultipleContent = ({ handleGotoStep }) => {
  return (
    <>
      <InterstitialScreenView
        stepTitle="Step 1"
        translateWithId={(id) => translations[id] ?? id}
      >
        <InterstitialScreenViewModule
          size="md"
          title="Use case-specific heading 1"
          description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
        />
      </InterstitialScreenView>
      <InterstitialScreenView
        stepTitle="Step 2"
        translateWithId={(id) => translations[id] ?? id}
      >
        <InterstitialScreenViewModule
          size="md"
          title="Use case-specific heading 2"
          description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
        />
      </InterstitialScreenView>
      <InterstitialScreenView
        stepTitle="Step 3"
        translateWithId={(id) => translations[id] ?? id}
      >
        <InterstitialScreenViewModule
          size="md"
          title="Use case-specific heading 3"
          description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
        />
      </InterstitialScreenView>
      <InterstitialScreenView
        stepTitle="Step 4"
        translateWithId={(id) => translations[id] ?? id}
      >
        <InterstitialScreenViewModule
          size="md"
          title="Use case-specific heading 4"
          description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
        />
      </InterstitialScreenView>
      <InterstitialScreenView
        stepTitle="Step 5"
        translateWithId={(id) => translations[id] ?? id}
      >
        <InterstitialScreenViewModule
          size="md"
          title="Use case-specific heading 5"
          description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
        />
      </InterstitialScreenView>
    </>
  );
};

const getSingleContent = (
  { handleGotoStep, disableActionButton },
  includeDisableButton,
  isFullScreen
) => {
  return (
    <>
      <InterstitialScreenView stepTitle="Step 1">
        <InterstitialScreenViewModule
          className={isFullScreen ? 'GenericView' : ''}
          title="Use case-specific heading"
          description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
          disableActionButton={
            includeDisableButton ? disableActionButton : null
          }
        />
      </InterstitialScreenView>
    </>
  );
};

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* * * * * * * * * * * * * * | STORIES | * * * * * * * * * * * * * * */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

const defaultProps = {
  headerTitle: 'Use case-specific title',
  headerSubTitle: 'Use case-specific sub title',
  interstitialAriaLabel: 'Interstitial Screen',
};
export const Modal = () => {
  const [showInterstitialScreen, setShowInterstitialScreen] = useState(true);

  return (
    <>
      <Button
        onClick={() => {
          setShowInterstitialScreen(true);
        }}
      >
        Show Interstitial modal
      </Button>

      <InterstitialScreen
        isOpen={showInterstitialScreen}
        onClose={() => {
          setShowInterstitialScreen(false);
        }}
        interstitialAriaLabel={defaultProps.interstitialAriaLabel}
      >
        <InterstitialScreen.Header
          headerTitle={defaultProps.headerTitle}
          headerSubTitle={defaultProps.headerSubTitle}
          hideProgressIndicator={true}
        ></InterstitialScreen.Header>
        <InterstitialScreen.Body
          contentRenderer={(internalConfig) => {
            return getSingleContent(internalConfig, true);
          }}
        />
        <InterstitialScreen.Footer />
      </InterstitialScreen>
    </>
  );
};

export const ModalWithMultipleSteps = () => {
  const [showInterstitialScreen, setShowInterstitialScreen] = useState(true);

  return (
    <>
      <Button
        onClick={() => {
          setShowInterstitialScreen(true);
        }}
      >
        Show Interstitial modal
      </Button>

      <InterstitialScreen
        isOpen={showInterstitialScreen}
        onClose={() => {
          setShowInterstitialScreen(false);
        }}
        interstitialAriaLabel={defaultProps.interstitialAriaLabel}
      >
        <InterstitialScreen.Header
          headerTitle={defaultProps.headerTitle}
          headerSubTitle={defaultProps.headerSubTitle}
        ></InterstitialScreen.Header>
        <InterstitialScreen.Body
          contentRenderer={(internalConfig) => {
            return getMultipleContent(internalConfig);
          }}
        />
        <InterstitialScreen.Footer />
      </InterstitialScreen>
    </>
  );
};

export const ModalWithCustomActionButtons = () => {
  const [showInterstitialScreen, setShowInterstitialScreen] = useState(true);

  return (
    <>
      <Button
        onClick={() => {
          setShowInterstitialScreen(true);
        }}
      >
        Show Interstitial modal
      </Button>

      <InterstitialScreen
        isOpen={showInterstitialScreen}
        onClose={() => {
          setShowInterstitialScreen(false);
        }}
        interstitialAriaLabel={defaultProps.interstitialAriaLabel}
      >
        <InterstitialScreen.Header
          headerTitle={defaultProps.headerTitle}
          headerSubTitle={defaultProps.headerSubTitle}
        ></InterstitialScreen.Header>
        <InterstitialScreen.Body
          contentRenderer={(internalConfig) => {
            return getMultipleContent(internalConfig);
          }}
        />
        <InterstitialScreen.Footer
          actionButtonRenderer={({ handleGotoStep, progStep, stepCount }) => {
            return (
              <>
                <Button
                  className={`${blockClass}--skip-btn`}
                  kind="ghost"
                  size="lg"
                  title={'Explore on my own'}
                  onClick={() => setShowInterstitialScreen(false)}
                >
                  Explore on my own
                </Button>
                <div className={`${blockClass}--footer-controls`}>
                  {progStep > 0 && (
                    <Button
                      className={`${blockClass}--prev-btn`}
                      kind="secondary"
                      size="lg"
                      title={'Previous'}
                      onClick={() => {
                        const progStepFloor = 0;
                        const progStepCeil = stepCount - 1;
                        const targetStep = clamp(
                          progStep - 1,
                          progStepFloor,
                          progStepCeil
                        );
                        handleGotoStep(targetStep);
                      }}
                    >
                      Previous
                    </Button>
                  )}

                  {progStep < stepCount - 1 && (
                    <Button
                      className={`${blockClass}--next-btn`}
                      renderIcon={ArrowRight}
                      size="lg"
                      title={'Next'}
                      onClick={() => {
                        const progStepFloor = 0;
                        const progStepCeil = stepCount - 1;
                        const targetStep = clamp(
                          progStep + 1,
                          progStepFloor,
                          progStepCeil
                        );
                        handleGotoStep(targetStep);
                      }}
                    >
                      Next
                    </Button>
                  )}

                  {progStep === stepCount - 1 && (
                    <Button
                      className={`${blockClass}--start-btn`}
                      renderIcon={ArrowRight}
                      size="lg"
                      title={'Start'}
                      onClick={() => setShowInterstitialScreen(false)}
                    >
                      Start
                    </Button>
                  )}
                </div>
              </>
            );
          }}
        />
      </InterstitialScreen>
    </>
  );
};

export const fullScreen = () => {
  const [showInterstitialScreen, setShowInterstitialScreen] = useState(true);
  useState(true);
  return (
    <>
      <Button
        onClick={() => {
          setShowInterstitialScreen(true);
        }}
      >
        Show Interstitial full screen
      </Button>
      <InterstitialScreen
        isOpen={showInterstitialScreen}
        onClose={() => {
          setShowInterstitialScreen(false);
        }}
        isFullScreen={true}
        interstitialAriaLabel={defaultProps.interstitialAriaLabel}
      >
        <InterstitialScreen.Header
          headerTitle={defaultProps.headerTitle}
          headerSubTitle={defaultProps.headerSubTitle}
        ></InterstitialScreen.Header>
        <InterstitialScreen.Body
          contentRenderer={(internalConfig) => {
            return getSingleContent(internalConfig, true, true);
          }}
        />
        <InterstitialScreen.Footer />
      </InterstitialScreen>
    </>
  );
};

export const fullScreenWithMultipleSteps = () => {
  const [showInterstitialScreen, setShowInterstitialScreen] = useState(true);
  useState(true);
  return (
    <>
      <Button
        onClick={() => {
          setShowInterstitialScreen(true);
        }}
      >
        Show Interstitial full screen
      </Button>
      <InterstitialScreen
        isOpen={showInterstitialScreen}
        onClose={() => {
          setShowInterstitialScreen(false);
        }}
        isFullScreen={true}
        interstitialAriaLabel={defaultProps.interstitialAriaLabel}
      >
        <InterstitialScreen.Header
          headerTitle={defaultProps.headerTitle}
          headerSubTitle={defaultProps.headerSubTitle}
        ></InterstitialScreen.Header>
        <InterstitialScreen.Body
          contentRenderer={(internalConfig) => {
            return getMultipleContent(internalConfig, true);
          }}
        />
        <InterstitialScreen.Footer />
      </InterstitialScreen>
    </>
  );
};
