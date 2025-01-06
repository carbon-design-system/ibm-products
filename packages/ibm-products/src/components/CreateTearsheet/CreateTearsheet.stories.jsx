/**
 * Copyright IBM Corp. 2021, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  decoratorArgTypes,
  slugArgTypes,
} from '../../global/js/story-parts/decorator';
import styles from './_storybook-styles.scss?inline';
import { CreateTearsheet } from './CreateTearsheet';
import DocsPage from './CreateTearsheet.docs-page';
import { MultiStepTearsheet } from './preview-components/MultiStepTearsheet';
import { MultiStepWithIntro } from './preview-components/MultiStepWithIntro';
import { MultiStepWithStepInErrorState } from './preview-components/MultiStepWithStepInErrorState';

export default {
  title: 'IBM Products/Patterns/Create flows/CreateTearsheet',
  component: CreateTearsheet,
  tags: ['autodocs'],
  argTypes: {
    description: { control: { type: 'text' } },
    label: { control: { type: 'text' } },
    title: { control: { type: 'text' } },
    onClose: { control: { disable: true } },
    navigation: { control: { disable: true } },
    open: { control: { disable: true } },
    children: { control: { disable: true } },
    ...slugArgTypes(),
    ...decoratorArgTypes(),
  },
  parameters: {
    styles,
    docs: { page: DocsPage },
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
};

export const multiStepTearsheet = MultiStepTearsheet.bind({});
multiStepTearsheet.storyName = 'Create tearsheet';
multiStepTearsheet.args = {
  ...createTearsheetProps,
};

export const withIntroStep = MultiStepWithIntro.bind({});
withIntroStep.storyName = 'Create tearsheet with intro step';
withIntroStep.args = {
  ...createTearsheetProps,
};

export const withErrorState = MultiStepWithStepInErrorState.bind({});
withErrorState.storyName = 'Create tearsheet with step in error state';
withErrorState.args = {
  ...createTearsheetProps,
};
