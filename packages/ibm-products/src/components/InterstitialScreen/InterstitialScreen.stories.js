/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
// TODO: import action to handle events if required.
// import { action } from '@storybook/addon-actions';
import { Button, Grid, Row, Column } from 'carbon-components-react';
import { ExpressiveCard } from '..';
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
  InterstitialExampleImgG10,
} from './assets';
import styles from './_storybook-styles.scss';

export default {
  title: getStoryTitle(InterstitialScreen.displayName),
  component: InterstitialScreen,
  // TODO: Define argTypes for props not represented by standard JS types.
  argTypes: {
    media: { control: { disable: true } },
    children: { control: { disable: true } },
  },
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};
const StoryCardTemplate = ({ title }) => {
  return (
    <div className="storyCardExample">
      <span>{title}</span>
    </div>
  );
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
        <InterstitialScreenView stepTitle="Step 1">
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
        <InterstitialScreenView stepTitle="Step 1">
          <InterstitialScreenViewModule
            title="Use case-specific heading"
            description={
              'Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept.'
            }
          />
        </InterstitialScreenView>
        <InterstitialScreenView stepTitle="Step 2">
          <InterstitialScreenViewModule
            title="Use case-specific heading"
            description={
              'Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept.'
            }
          />
        </InterstitialScreenView>
        <InterstitialScreenView stepTitle="Step 3">
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
        <InterstitialScreenView stepTitle="Step 1">
          <InterstitialScreenViewModule
            title="Use case-specific heading"
            description={
              'Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept.'
            }
          />
        </InterstitialScreenView>
        <InterstitialScreenView stepTitle="Step 2">
          <InterstitialScreenViewModule
            title="Use case-specific heading"
            description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
          />
        </InterstitialScreenView>
        <InterstitialScreenView stepTitle="Step 3">
          <InterstitialScreenViewModule
            title="Use case-specific heading"
            description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
          />
        </InterstitialScreenView>
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
        <InterstitialScreenView stepTitle="Step 1">
          <InterstitialScreenViewModule
            title="Use case-specific heading"
            description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
          />
        </InterstitialScreenView>
      </InterstitialScreen>
    </>
  );
};

const GenerateExampleObjects = ({ total, startValue, copyPrefix }) => {
  const allElements = [];
  for (let i = startValue; i < startValue + total; i++) {
    allElements.push(<StoryCardTemplate title={`${copyPrefix} ${i}`} />);
  }
  return allElements;
};

const TemplateFullScreenMultipleCardGrids = (args) => {
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
        <InterstitialScreenView stepTitle="Step 1">
          <div className="CustomLayout">
            <GenerateExampleObjects
              total={18}
              startValue={1}
              copyPrefix="Card Element"
            />
          </div>
        </InterstitialScreenView>
        <InterstitialScreenView stepTitle="Step 2">
          <div className="CustomLayout">
            <GenerateExampleObjects
              total={18}
              startValue={19}
              copyPrefix="Card Element"
            />
          </div>
        </InterstitialScreenView>
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
    breakpoints: { xlg: 4, lg: 4 },
  },
};

const defaultPropsImage = {
  domainName: 'IBM',
  productName: 'Product',
  previousButtonLabel: 'Back',
  nextButtonLabel: 'Next',
  startButtonLabel: 'Get started',
  skipButtonLabel: 'Skip to homepage',
  media: {
    render: () => (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: `top left / contain no-repeat url(${InterstitialExampleImgG10}) `,
        }}
      />
    ),
    breakpoints: { xlg: 6, lg: 6 },
  },
};
const defaultPropsNoMedia = {
  domainName: 'IBM',
  productName: 'Product',
  previousButtonLabel: 'Back',
  nextButtonLabel: 'Next',
  startButtonLabel: 'Get started',
  skipButtonLabel: 'Skip to homepage',
};

/**
 * TODO: Declare one or more stories, generally one per design scenario.
 * NB no need for a 'Playground' because all stories have all controls anyway.
 */
export const interstitialScreenModal = prepareStory(TemplateModal, {
  args: {
    ...defaultPropsImage,
    hideProgressIndicator: true,
  },
});

export const interstitialScreenModalMultiples = prepareStory(
  TemplateModalMultipleChildren,
  {
    args: {
      ...defaultProps,
      hideProgressIndicator: false,
    },
  }
);

export const interstitialScreenFullScreen = prepareStory(TemplateFullScreen, {
  args: {
    ...defaultPropsImage,
    hideProgressIndicator: true,
  },
});
export const interstitialScreenFullScreenMultiples = prepareStory(
  TemplateFullScreenMultiples,
  {
    args: {
      ...defaultProps,
      hideProgressIndicator: false,
    },
  }
);

export const interstitialScreenFullScreenNoMedia = prepareStory(
  TemplateFullScreenMultiples,
  {
    args: {
      ...defaultPropsNoMedia,
      hideProgressIndicator: false,
    },
  }
);

export const interstitialScreenFullScreenNoMediaWithHeader = prepareStory(
  TemplateFullScreenMultiples,
  {
    args: {
      ...defaultPropsNoMedia,
      renderHeader: () => <h2>Personalize your experience</h2>,
      headerClassName: 'MyInterstitialHeader',
      hideProgressIndicator: false,
    },
  }
);

export const interstitialScreenFullScreenNoMediaWithCards = prepareStory(
  TemplateFullScreenMultipleCardGrids,
  {
    args: {
      ...defaultPropsNoMedia,
      renderHeader: () => <h2>Personalize your experience</h2>,
      headerClassName: 'MyInterstitialHeader',
      hideProgressIndicator: false,
    },
  }
);
