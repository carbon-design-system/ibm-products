/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';
import styles from './_storybook-styles.scss';
import { CreateTearsheet } from './CreateTearsheet';
import { CreateTearsheetStep } from './CreateTearsheetStep';
import { MultiStepTearsheet } from './preview-components/MultiStepTearsheet';
import { MultiStepWithIntro } from './preview-components/MultiStepWithIntro';
import mdx from './CreateTearsheet.mdx';

export default {
  title: getStoryTitle(CreateTearsheet.displayName),
  component: CreateTearsheet,
  subcomponents: {
    CreateTearsheetStep,
  },
  argTypes: {
    description: { control: { type: 'text' } },
    label: { control: { type: 'text' } },
    title: { control: { type: 'text' } },
    onClose: { control: { disable: true } },
    navigation: { control: { disable: true } },
    open: { control: { disable: true } },
  },
  parameters: {
    styles,
    docs: { page: mdx },
  },
};

const createTearsheetProps = {
  title: 'Create topic',
  description: 'Specify details for the new topic you want to create',
  submitButtonText: 'Create',
  cancelButtonText: 'Cancel',
  backButtonText: 'Back',
  nextButtonText: 'Next',
  className: 'test-class-name',
  label: '',
  influencerWidth: 'narrow',
  firstFocusElement: '#tearsheet-multi-step-story-text-input-multi-step-1',
};

export const multiStepTearsheet = prepareStory(MultiStepTearsheet, {
  storyName: 'Create tearsheet',
  args: {
    ...createTearsheetProps,
  },
});

export const withIntroStep = prepareStory(MultiStepWithIntro, {
  storyName: 'Create tearsheet with intro step',
  args: {
    ...createTearsheetProps,
  },
});
