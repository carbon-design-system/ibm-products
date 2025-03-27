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

import InterstitialExampleImg from './_story-assets/illustrations/interstitial-ph.png';

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

import styles from './_storybook-styles.scss?inline';
const storyClass = 'interstitial-stories';

// cspell:words Terminé Partiel Actuel valide

export default {
  title: 'Experimental/Onboarding/Interstitial screen/InterstitialScreen',
  component: InterstitialScreen,
  tags: ['autodocs'],
  argTypes: {
    renderMedia: {
      options: ['None', 'With a static image'],
      control: { type: 'select' },
      description:
        'Optional prop to render any media like images or any animated media. This is a callback prop where you need to return the component with media to be rendered',
    },
    breakpointsWithMedia: {
      description:
        'Breakpoints are used to set the media content column size as well as the remainder for the main content areas column size. Medium and small breakpoints will be set to 0 internally to focus on the main content area.',
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
const translations = {
  'carbon.progress-step.complete': 'Terminé',
  'carbon.progress-step.incomplete': 'Partiel',
  'carbon.progress-step.current': 'Actuel',
  'carbon.progress-step.invalid': 'Non valide',
};
const getSelectedMedia = (media) => {
  switch (media) {
    case 'With a static image':
      return () => (
        <div
          style={{
            width: '100%',
            height: '100%',
            background: `center center / contain no-repeat url("${InterstitialExampleImg}") `,
          }}
        />
      );
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

  const { renderMedia } = args;

  const selectedMedia = getSelectedMedia(renderMedia);

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
        renderMedia={selectedMedia}
      >
        {children}
      </InterstitialScreen>
    </>
  );
};

const TemplateModalMultipleChildren = ({ children, ...args }) => {
  const [showInterstitialModal, setShowInterstitialModal] = useState(true);

  const { renderMedia } = args;
  const selectedMedia = getSelectedMedia(renderMedia);

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
        renderMedia={selectedMedia}
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
  const { renderMedia } = args;
  const selectedMedia = getSelectedMedia(renderMedia);

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
        renderMedia={selectedMedia}
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
  const { renderMedia } = args;
  const selectedMedia = getSelectedMedia(renderMedia);

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
        renderMedia={selectedMedia}
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
  const { renderMedia } = args;
  const selectedMedia = getSelectedMedia(renderMedia);

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
        renderMedia={selectedMedia}
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
  renderMedia: 'None', // sets media's default radio button selection
  breakpointsWithMedia: { xlg: 8, lg: 8 },
};

const defaultPropsImage = {
  ...defaultProps,
  renderMedia: 'With a static image',
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
    <InterstitialScreenView
      stepTitle="Step 1"
      translateWithId={(id) => translations[id] ?? id}
    >
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
