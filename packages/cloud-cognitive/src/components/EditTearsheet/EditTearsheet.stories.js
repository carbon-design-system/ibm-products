/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';

import { EditTearsheet } from '.';
import { CreateTearsheet } from '../CreateTearsheet/CreateTearsheet';
import { CreateTearsheetStep } from '../CreateTearsheet/CreateTearsheetStep';
import { MultiStepTearsheet } from './preview-components/MultiStepTearsheet';
import { MultiStepWithIntro } from './preview-components/MultiStepWithIntro';
import mdx from './EditTearsheet.mdx';

import styles from '../CreateTearsheet/_storybook-styles.scss';

export default {
  title: getStoryTitle(EditTearsheet.displayName),
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
  parameters: { styles, docs: { page: mdx } },
};

const createTearsheetProps = {
  title: 'Create topic',
  description: 'Enter details of the topic you want to edit',
  submitButtonText: 'Update',
  cancelButtonText: 'Cancel',
  backButtonText: 'Back',
  nextButtonText: 'Next',
  className: 'test-class-name',
  label: '',
  influencerWidth: 'narrow',
};

export const multiStepTearsheet = prepareStory(MultiStepTearsheet, {
  storyName: 'Edit tearsheet',
  args: {
    ...createTearsheetProps,
  },
});

export const withIntroStep = prepareStory(MultiStepWithIntro, {
  storyName: 'Edit tearsheet with intro step',
  args: {
    ...createTearsheetProps,
  },
});
