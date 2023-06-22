/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
// TODO: import action to handle events if required.
import { action } from '@storybook/addon-actions';

import cx from 'classnames';

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';

import { InlineTip, InlineTipButton, InlineTipLink } from '.';
import mdx from './InlineTip.mdx';

import styles from './_storybook-styles.scss';
import InlineTipImage from './assets/inline-tip-image.png';
const InlineTipAnimation = new URL(
  './assets/inline-tip-animation',
  import.meta.url
).pathname;

export default {
  title: getStoryTitle(InlineTip.displayName),
  component: InlineTip,
  parameters: {
    styles,
    layout: 'padded',
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    media: {
      options: ['None', 'Render a static image', 'Render an animation'],
      control: { type: 'radio' },
    },
    secondaryButton: {
      options: ['None', '<InlineTipButton>', '<InlineTipLink>'],
      control: { type: 'radio' },
    },
  },
};

const defaultProps = {
  // TODO: Component args - https://storybook.js.org/docs/react/writing-stories/args#InlineTip-args
  children:
    'Use case-specific content that explains the concept or adds context. Use case-specific content that explains the concept or adds context. Use case-specific content that explains the concept or adds context.',
  closeIconDescription: 'Close',
  collapseButtonLabel: 'Read less',
  collapsible: false,
  expandButtonLabel: 'Read more',
  media: 'None',
  narrow: false,
  secondaryButton: 'None',
  title: 'Use case-specific heading',
};

/**
 * TODO: Declare template(s) for one or more scenarios.
 */
const Template = (args) => {
  const { media, narrow, secondaryButton } = args;

  const selectedMedia = (function () {
    switch (media) {
      case 'Render a static image':
        return { render: () => <img alt="img" src={InlineTipImage} /> };
      case 'Render an animation':
        return {
          filePaths: [InlineTipAnimation],
        };
      default:
        return null;
    }
  })();
  const selectedSecondaryButton = (function () {
    switch (secondaryButton) {
      case '<InlineTipButton>':
        return (
          <InlineTipButton onClick={action(`Clicked the ghost button`)}>
            Click me
          </InlineTipButton>
        );
      case '<InlineTipLink>':
        return (
          <InlineTipLink href="https://www.ibm.com" target="_blank">
            Learn more
          </InlineTipLink>
        );
      default:
        return null;
    }
  })();

  return (
    <div className={cx([narrow ? 'inline-tip-narrow' : 'inline-tip-wide'])}>
      <InlineTip
        // TODO: handle events with action or local handler.
        // onTodo={action('onTodo log action')}
        {...args}
        media={selectedMedia}
        secondaryButton={selectedSecondaryButton}
      />
    </div>
  );
};

/**
 * TODO: Declare one or more stories, generally one per design scenario.
 * NB no need for a 'Playground' because all stories have all controls anyway.
 */
export const inlineTip = prepareStory(Template, {
  args: {
    ...defaultProps,
  },
});

export const withCloseButtons = prepareStory(Template, {
  args: {
    ...defaultProps,
    closeButtonLabel: 'Show me',
    onClose: action(`Clicked a close button`),
  },
});
