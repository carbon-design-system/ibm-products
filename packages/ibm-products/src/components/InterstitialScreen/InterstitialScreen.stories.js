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
  InterstitialExampleImgG10,
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
              background: `center center / contain no-repeat url(${InterstitialExampleImgG10}) `,
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
/*
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

*/
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

{
  /*

<InterstitialScreenView stepTitle="Step 1">
          <InterstitialScreenViewModule
            title="Use case-specific heading"
            description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
          />
        </InterstitialScreenView>
      </InterstitialScreen>

*/
}

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

/*

        */

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

const defaultPropsAnimation = {
  ...defaultProps,
  media: 'Render an animation',
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
      <InterstitialScreenView stepTitle="Step 1">
        <div className="GenericView">
          <span>Generic view</span>
        </div>
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
          <InterstitialScreenView stepTitle="Step 1">
            <div className="GenericView">
              <span>Generic view 1</span>
            </div>
          </InterstitialScreenView>
          <InterstitialScreenView stepTitle="Step 2">
            <div className="GenericView">
              <span>Generic view 2</span>
            </div>
          </InterstitialScreenView>
          <InterstitialScreenView stepTitle="Step 3">
            <div className="GenericView">
              <span>Generic view 3</span>
            </div>
          </InterstitialScreenView>
        </>
      ),
    },
  }
);

export const interstitialScreenFullScreen = prepareStory(TemplateFullScreen, {
  storyName: 'Full screen',
  args: {
    ...defaultPropsImage,
    hideProgressIndicator: true,
    children: (
      <InterstitialScreenView stepTitle="Step 1">
        <div className="GenericView">
          <span>Generic view</span>
        </div>
      </InterstitialScreenView>
    ),
  },
});

// export const interstitialScreenFullScreen = prepareStory(TemplateFullScreen, {
//   storyName: 'Full screen',
//   args: {
//     ...defaultPropsImage,
//     hideProgressIndicator: true,
//   },
// });
export const interstitialScreenFullScreenMultiples = prepareStory(
  TemplateFullScreenMultiples,
  {
    storyName: 'Full screen, multi-step',
    args: {
      ...defaultPropsAnimation,
      hideProgressIndicator: false,
      children: (
        <>
          <InterstitialScreenView stepTitle="Step 1">
            <div className="GenericView">
              <span>Generic view 1</span>
            </div>
          </InterstitialScreenView>
          <InterstitialScreenView stepTitle="Step 2">
            <div className="GenericView">
              <span>Generic view 2</span>
            </div>
          </InterstitialScreenView>
          <InterstitialScreenView stepTitle="Step 3">
            <div className="GenericView">
              <span>Generic view 3</span>
            </div>
          </InterstitialScreenView>
        </>
      ),
    },
  }
);

export const interstitialScreenFullScreenNoMediaWithHeader = prepareStory(
  TemplateFullScreenMultiples,
  {
    storyName: 'Full screen, with header',
    args: {
      ...defaultPropsImage,
      headerTitle: 'Personalize your experience',
      headerClassName: 'MyInterstitialHeader',
      hideProgressIndicator: false,
      children: (
        <>
          <InterstitialScreenView stepTitle="Step 1">
            <div className="GenericView">
              <span>Generic view 1</span>
            </div>
          </InterstitialScreenView>
          <InterstitialScreenView stepTitle="Step 2">
            <div className="GenericView">
              <span>Generic view 2</span>
            </div>
          </InterstitialScreenView>
          <InterstitialScreenView stepTitle="Step 3">
            <div className="GenericView">
              <span>Generic view 3</span>
            </div>
          </InterstitialScreenView>
        </>
      ),
    },
  }
);

export const interstitialScreenFullScreenNoMediaWithCards = prepareStory(
  TemplateFullScreenMultipleCardGrids,
  {
    storyName: 'Full screen, with cards',
    args: {
      ...defaultProps,
      headerTitle: 'Personalize your experience',
      headerClassName: 'MyInterstitialHeader',
      hideProgressIndicator: false,
      children: (
        <>
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
        </>
      ),
    },
  }
);
