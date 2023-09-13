/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
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
  InterstitialExampleImg,
} from './assets';
import styles from './_storybook-styles.scss';

export default {
  title: getStoryTitle(InterstitialScreen.displayName),
  component: InterstitialScreen,
  argTypes: {
    media: {
      options: ['None', 'Render a static image', 'Render an animation'],
      control: { type: 'radio' },
    },
    children: { control: { disable: true } },
  },
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const getSelectedMedia = (media) => {
  switch (media) {
    case 'Render a static image':
      return {
        render: () => (
          <div
            style={{
              width: '100%',
              height: '100%',
              background: `center center / contain no-repeat url(${InterstitialExampleImg}) `,
            }}
          />
        ),
        breakpoints: { xlg: 6, lg: 6 },
      };
    case 'Render an animation':
      return {
        filePaths: [HowACaseIsCreated1, HowACaseIsCreated2, HowACaseIsCreated3],
        breakpoints: { xlg: 6, lg: 6 },
      };
    default:
      return null;
  }
};

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* * * * * * * | UTILITY COMPONENTS FOR THIS STORYBOOK | * * * * * * */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

const StoryCardTemplate = ({ title }) => {
  return (
    <div className="storyCardExample">
      <span>{title}</span>
    </div>
  );
};

const GenerateExampleObjects = ({ total, startValue, copyPrefix }) => {
  const allElements = [];
  for (let i = startValue; i < startValue + total; i++) {
    allElements.push(<StoryCardTemplate title={`${copyPrefix} ${i}`} />);
  }
  return allElements;
};

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* * * * * * * * * * * * * * | TEMPLATES | * * * * * * * * * * * * * * */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

const TemplateModal = ({ children, ...args }) => {
  const [showInterstitialModal, setShowInterstitialModal] = useState(true);

  const { media } = args;
  const selectedMedia = getSelectedMedia(media);
  console.log('selectedMedia', selectedMedia);

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
        {...args}
        media={selectedMedia}
      >
        {children}
      </InterstitialScreen>
    </>
  );
};

const TemplateModalMultipleChildren = ({ children, ...args }) => {
  const [showInterstitialModal, setShowInterstitialModal] = useState(true);

  const { media } = args;
  const selectedMedia = getSelectedMedia(media);

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
        {...args}
        media={selectedMedia}
      >
        {children.props.children}
      </InterstitialScreen>
    </>
  );
};

const TemplateFullScreenMultiples = ({ children, ...args }) => {
  const [showInterstitialModal, setShowInterstitialModal] = useState(true);
  const [showInterstitialFullScreen, setShowInterstitialFullScreen] =
    useState(true);
  const { media } = args;
  const selectedMedia = getSelectedMedia(media);

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
        {...args}
        media={selectedMedia}
      >
        {children.props.children}
      </InterstitialScreen>
    </>
  );
};

const TemplateFullScreen = ({ children, ...args }) => {
  const [showInterstitialModal, setShowInterstitialModal] = useState(true);
  const [showInterstitialFullScreen, setShowInterstitialFullScreen] =
    useState(true);
  const { media } = args;
  const selectedMedia = getSelectedMedia(media);

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
        {...args}
        media={selectedMedia}
      >
        {children}
      </InterstitialScreen>
    </>
  );
};

const TemplateFullScreenMultipleCardGrids = ({ children, ...args }) => {
  const [showInterstitialModal, setShowInterstitialModal] = useState(true);
  const [showInterstitialFullScreen, setShowInterstitialFullScreen] =
    useState(true);
  const { media } = args;
  const selectedMedia = getSelectedMedia(media);

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
        {...args}
        media={selectedMedia}
      >
        {children.props.children}
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
  skipButtonLabel: 'Skip',
  media: 'None', // sets media's default radio button selection
};

const defaultPropsImage = {
  ...defaultProps,
  media: 'Render a static image',
};

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* * * * * * * * * * * * * * | STORIES | * * * * * * * * * * * * * * */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

export const interstitialScreenModal = prepareStory(TemplateModal, {
  storyName: 'Modal',
  args: {
    ...defaultProps,
    hideProgressIndicator: true,
    children: (
      <InterstitialScreenView
        stepTitle="Step 1"
        className="NoImageExampleModal"
      >
        <InterstitialScreenViewModule
          className="GenericModalView"
          title="Use case-specific heading"
          description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
        />
      </InterstitialScreenView>
    ),
  },
});
export const interstitialScreenModalWithImage = prepareStory(TemplateModal, {
  storyName: 'Modal with image',
  args: {
    ...defaultPropsImage,
    hideProgressIndicator: true,
    children: (
      <InterstitialScreenView stepTitle="Step 1">
        <InterstitialScreenViewModule
          className="GenericModalView"
          title="Use case-specific heading"
          description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
        />
      </InterstitialScreenView>
    ),
  },
});

export const interstitialScreenModalMultiples = prepareStory(
  TemplateModalMultipleChildren,
  {
    storyName: 'Modal, multi-step',
    args: {
      ...defaultProps,
      hideProgressIndicator: false,
      children: (
        <>
          <InterstitialScreenView
            stepTitle="Step 1"
            className="NoImageExampleModal"
          >
            <InterstitialScreenViewModule
              className="GenericModalView"
              title="Use case-specific heading"
              description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
            />
          </InterstitialScreenView>
          <InterstitialScreenView
            stepTitle="Step 2"
            className="NoImageExampleModal"
          >
            <InterstitialScreenViewModule
              className="GenericModalView"
              title="Use case-specific heading"
              description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
            />
          </InterstitialScreenView>
          <InterstitialScreenView
            stepTitle="Step 3"
            className="NoImageExampleModal"
          >
            <InterstitialScreenViewModule
              className="GenericModalView"
              title="Use case-specific heading"
              description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
            />
          </InterstitialScreenView>
        </>
      ),
    },
  }
);

export const interstitialScreenModalMultiplesHeader = prepareStory(
  TemplateModalMultipleChildren,
  {
    storyName: 'Modal, multi-step with title & image',
    args: {
      ...defaultPropsImage,
      hideProgressIndicator: false,
      headerTitle: 'Use case-specific title',
      children: (
        <>
          <InterstitialScreenView stepTitle="Step 1">
            <InterstitialScreenViewModule
              className="GenericModalView"
              title="Use case-specific heading"
              description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
            />
          </InterstitialScreenView>
          <InterstitialScreenView stepTitle="Step 2">
            <InterstitialScreenViewModule
              className="GenericModalView"
              title="Use case-specific heading"
              description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
            />
          </InterstitialScreenView>
          <InterstitialScreenView stepTitle="Step 3">
            <InterstitialScreenViewModule
              className="GenericModalView"
              title="Use case-specific heading"
              description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
            />
          </InterstitialScreenView>
        </>
      ),
    },
  }
);

export const interstitialScreenFullScreen = prepareStory(TemplateFullScreen, {
  storyName: 'Full screen',
  args: {
    ...defaultProps,
    hideProgressIndicator: true,
    children: (
      <InterstitialScreenView
        stepTitle="Step 1"
        className="NoImageExampleFullScreen"
      >
        <InterstitialScreenViewModule
          className="GenericView"
          title="Use case-specific heading"
          description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
        />
      </InterstitialScreenView>
    ),
  },
});

export const interstitialScreenFullScreenImage = prepareStory(
  TemplateFullScreen,
  {
    storyName: 'Full screen with image',
    args: {
      ...defaultPropsImage,
      hideProgressIndicator: true,
      children: (
        <InterstitialScreenView stepTitle="Step 1">
          <InterstitialScreenViewModule
            className="GenericView"
            title="Use case-specific heading"
            description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
          />
        </InterstitialScreenView>
      ),
    },
  }
);

export const interstitialScreenFullScreenMultiples = prepareStory(
  TemplateFullScreenMultiples,
  {
    storyName: 'Full screen, multi-step',
    args: {
      ...defaultProps,
      hideProgressIndicator: false,
      children: (
        <>
          <InterstitialScreenView
            stepTitle="Step 1"
            className="NoImageExampleFullScreen"
          >
            <InterstitialScreenViewModule
              className="GenericView"
              title="Use case-specific heading 1"
              description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
            />
          </InterstitialScreenView>
          <InterstitialScreenView
            stepTitle="Step 2"
            className="NoImageExampleFullScreen"
          >
            <InterstitialScreenViewModule
              className="GenericView"
              title="Use case-specific heading"
              description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
            />
          </InterstitialScreenView>
          <InterstitialScreenView
            stepTitle="Step 3"
            className="NoImageExampleFullScreen"
          >
            <InterstitialScreenViewModule
              className="GenericView"
              title="Use case-specific heading"
              description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
            />
          </InterstitialScreenView>
        </>
      ),
    },
  }
);

export const interstitialScreenFullScreenHeaderWithImage = prepareStory(
  TemplateFullScreenMultiples,
  {
    storyName: 'Full screen, with title & image',
    args: {
      ...defaultPropsImage,
      headerTitle: 'Use case-specific title',
      headerClassName: 'MyInterstitialHeader',
      hideProgressIndicator: false,
      children: (
        <>
          <InterstitialScreenView stepTitle="Step 1">
            <InterstitialScreenViewModule
              className="GenericView"
              title="Use case-specific heading"
              description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
            />
          </InterstitialScreenView>
          <InterstitialScreenView stepTitle="Step 2">
            <InterstitialScreenViewModule
              className="GenericView"
              title="Use case-specific heading"
              description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
            />
          </InterstitialScreenView>
          <InterstitialScreenView stepTitle="Step 3">
            <InterstitialScreenViewModule
              className="GenericView"
              title="Use case-specific heading"
              description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
            />
          </InterstitialScreenView>
        </>
      ),
    },
  }
);

export const interstitialScreenFullScreenNoMediaWithCards = prepareStory(
  TemplateFullScreenMultipleCardGrids,
  {
    storyName: 'Full screen, custom layout',
    args: {
      ...defaultProps,
      headerTitle: 'Use case-specific title',
      headerClassName: 'MyInterstitialHeader',
      hideProgressIndicator: false,
      children: (
        <>
          <InterstitialScreenView stepTitle="Step 1">
            <div className="CustomLayout">
              <GenerateExampleObjects
                total={8}
                startValue={1}
                copyPrefix="Custom Element"
              />
            </div>
          </InterstitialScreenView>
          <InterstitialScreenView stepTitle="Step 2">
            <div className="CustomLayout">
              <GenerateExampleObjects
                total={8}
                startValue={9}
                copyPrefix="Custom Element"
              />
            </div>
          </InterstitialScreenView>
        </>
      ),
    },
  }
);
