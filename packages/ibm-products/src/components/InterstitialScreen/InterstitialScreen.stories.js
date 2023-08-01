/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
// TODO: import action to handle events if required.
// import { action } from '@storybook/addon-actions';
import { Button } from 'carbon-components-react';
import { InterstitialScreenView } from '..';
import { InterstitialScreenViewModule } from '..';
import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';

import { InterstitialScreen } from '.';
import mdx from './InterstitialScreen.mdx';
import {
  HowACaseIsCreated1,
  HowACaseIsCreated2,
  HowACaseIsCreated3,
} from './assets';
import styles from './_storybook-styles.scss';

export default {
  title: getStoryTitle(InterstitialScreen.displayName),
  component: InterstitialScreen,
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
const TemplateModal = (args) => {
  const [showInterstitialModal, setShowInterstitialModal] = useState(false);

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
        // TODO: handle events with action or local handler.
        // onTodo={action('onTodo log action')}
        {...args}
      >
        <InterstitialScreenView stepTitle="Use case-specific step title">
          <InterstitialScreenViewModule
            title="Use case-specific heading"
            description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
          />
        </InterstitialScreenView>
      </InterstitialScreen>
    </>
  );
};

const TemplateModalMultipleChildren = (args) => {
  const [showInterstitialModal, setShowInterstitialModal] = useState(false);

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
        // TODO: handle events with action or local handler.
        // onTodo={action('onTodo log action')}
        {...args}
      >
        <InterstitialScreenView stepTitle="Use case-specific step title">
          <InterstitialScreenViewModule
            title="Use case-specific heading"
            description={
              'Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept.'
            }
          />
        </InterstitialScreenView>
        <InterstitialScreenView stepTitle="Use case-specific step title">
          <InterstitialScreenViewModule
            title="Use case-specific heading"
            description={
              'Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept.'
            }
          />
        </InterstitialScreenView>
        <InterstitialScreenView stepTitle="Use case-specific step title">
          <InterstitialScreenViewModule
            title="Use case-specific heading"
            description={
              'Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept.'
            }
          />
        </InterstitialScreenView>
      </InterstitialScreen>
    </>
  );
};

const TemplateFullScreenMultiples = (args) => {
  const [showInterstitialModal, setShowInterstitialModal] = useState(false);
  const [showInterstitialFullScreen, setShowInterstitialFullScreen] =
    useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setShowInterstitialFullScreen(true);
        }}
      >
        Show Interstitial full screen
      </Button>
      <InterstitialScreen
        isOpen={showInterstitialModal || showInterstitialFullScreen}
        isFullScreen={showInterstitialFullScreen}
        onClose={() => {
          setShowInterstitialModal(false);
          setShowInterstitialFullScreen(false);
        }}
        // TODO: handle events with action or local handler.
        // onTodo={action('onTodo log action')}
        {...args}
      >
        <InterstitialScreenView stepTitle="Use case-specific step title">
          <InterstitialScreenViewModule
            title="Use case-specific heading"
            description={
              'Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept.'
            }
          />
        </InterstitialScreenView>
        <InterstitialScreenView stepTitle="Use case-specific step title">
          <InterstitialScreenViewModule
            title="Use case-specific heading"
            description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
          />
        </InterstitialScreenView>
        <InterstitialScreenView stepTitle="Use case-specific step title">
          <InterstitialScreenViewModule
            title="Use case-specific heading"
            description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
          />
        </InterstitialScreenView>
        <div>
          <h3>Hello</h3>
          <p>Some text goes here...</p>
        </div>
      </InterstitialScreen>
    </>
  );
};

const TemplateFullScreen = (args) => {
  const [showInterstitialModal, setShowInterstitialModal] = useState(false);
  const [showInterstitialFullScreen, setShowInterstitialFullScreen] =
    useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setShowInterstitialFullScreen(true);
        }}
      >
        Show Interstitial full screen
      </Button>
      <InterstitialScreen
        isOpen={showInterstitialModal || showInterstitialFullScreen}
        isFullScreen={showInterstitialFullScreen}
        onClose={() => {
          setShowInterstitialModal(false);
          setShowInterstitialFullScreen(false);
        }}
        // TODO: handle events with action or local handler.
        // onTodo={action('onTodo log action')}
        {...args}
      >
        <InterstitialScreenView
          title="Use case-specific heading"
          description={
            'Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept.'
          }
          stepTitle="Use case-specific step title"
        />
      </InterstitialScreen>
    </>
  );
};

const defaultProps = {
  domainName: 'IBM',
  productName: 'Product',
  previousButtonLabel: 'Back',
  nextButtonLabel: 'Next',
  startButtonLabel: 'Get started',
  skipButtonLabel: 'Skip to homepage',
  media: {
    filePaths: [HowACaseIsCreated1, HowACaseIsCreated2, HowACaseIsCreated3],
  },
};
/**
 * TODO: Declare one or more stories, generally one per design scenario.
 * NB no need for a 'Playground' because all stories have all controls anyway.
 */
export const interstitialScreenModal = prepareStory(TemplateModal, {
  args: {
    ...defaultProps,
    // TODO: Component args - https://storybook.js.org/docs/react/writing-stories/args#InterstitialScreen-args
  },
});

export const interstitialScreenModalMultiples = prepareStory(
  TemplateModalMultipleChildren,
  {
    args: {
      ...defaultProps,
      // TODO: Component args - https://storybook.js.org/docs/react/writing-stories/args#InterstitialScreen-args
    },
  }
);

export const interstitialScreenFullScreen = prepareStory(TemplateFullScreen, {
  args: {
    ...defaultProps,
    // TODO: Component args - https://storybook.js.org/docs/react/writing-stories/args#InterstitialScreen-args
  },
});
export const interstitialScreenFullScreenMultiples = prepareStory(
  TemplateFullScreenMultiples,
  {
    args: {
      ...defaultProps,
      // TODO: Component args - https://storybook.js.org/docs/react/writing-stories/args#InterstitialScreen-args
    },
  }
);
