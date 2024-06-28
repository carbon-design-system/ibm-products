/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import { Button } from '@carbon/react';

import { InterstitialScreenView } from '..';
import { InterstitialScreenViewModule } from '..';
import { InterstitialScreen } from '.';
import mdx from './InterstitialScreen.mdx';

import HowACaseIsCreated1 from './_story-assets/illustrations/how-a-case-is-created-1.json';
import HowACaseIsCreated2 from './_story-assets/illustrations/how-a-case-is-created-2.json';
import HowACaseIsCreated3 from './_story-assets/illustrations/how-a-case-is-created-3.json';
import InterstitialExampleImg from './_story-assets/illustrations/interstitial-ph.png';

import styles from './_storybook-styles.scss?inline';
const storyClass = 'interstitial-stories';

export default {
  title: 'IBM Products/Onboarding/Interstitial screen/InterstitialScreen',
  component: InterstitialScreen,
  tags: ['autodocs'],
  argTypes: {
    media: {
      options: ['None', 'With a static image', 'With an animation'],
      control: { type: 'select' },
    },
    children: { control: { disable: true } },
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
const getSelectedMedia = (media) => {
  console.log('Story media: ', InterstitialExampleImg);
  switch (media) {
    case 'With a static image':
      return {
        render: () => (
          <div
            style={{
              width: '100%',
              height: '100%',
              background: `center center / contain no-repeat url("${InterstitialExampleImg}") `,
            }}
          />
        ),
        breakpoints: { xlg: 8, lg: 8 },
      };
    case 'With an animation':
      return {
        filePaths: [HowACaseIsCreated1, HowACaseIsCreated2, HowACaseIsCreated3],
        breakpoints: { xlg: 8, lg: 8 },
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
    allElements.push(
      <StoryCardTemplate key={i} title={`${copyPrefix} ${i}`} />
    );
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
  media: 'With a static image',
};

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* * * * * * * * * * * * * * | STORIES | * * * * * * * * * * * * * * */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

export const interstitialScreenModalWithImage = TemplateModal.bind({});
interstitialScreenModalWithImage.storyName = 'Modal';
interstitialScreenModalWithImage.args = {
  ...defaultPropsImage,
  hideProgressIndicator: true,
  interstitialAriaLabel: 'Interstitial Screen',
  children: (
    <InterstitialScreenView stepTitle="Step 1">
      <InterstitialScreenViewModule
        size="sm"
        title="Use case-specific heading"
        description="Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept."
      />
    </InterstitialScreenView>
  ),
};

export const interstitialScreenModalMultiplesHeader =
  TemplateModalMultipleChildren.bind({});
interstitialScreenModalMultiplesHeader.storyName = 'Modal with multiple steps';
interstitialScreenModalMultiplesHeader.args = {
  ...defaultPropsImage,
  hideProgressIndicator: false,
  headerTitle: 'Use case-specific title',
  interstitialAriaLabel: 'Interstitial Screen',
  children: (
    <>
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
    </>
  ),
};

export const interstitialScreenFullScreenImage = TemplateFullScreen.bind({});
interstitialScreenFullScreenImage.storyName = 'Full screen';
interstitialScreenFullScreenImage.args = {
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
};

export const interstitialScreenFullScreenHeaderWithImage =
  TemplateFullScreenMultiples.bind({});
interstitialScreenFullScreenHeaderWithImage.storyName =
  'Full screen with multiple steps';
interstitialScreenFullScreenHeaderWithImage.args = {
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
};

export const interstitialScreenFullScreenNoMediaWithCards =
  TemplateFullScreenMultipleCardGrids.bind({});
interstitialScreenFullScreenNoMediaWithCards.storyName =
  'Full screen with custom layout';
interstitialScreenFullScreenNoMediaWithCards.args = {
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
};
