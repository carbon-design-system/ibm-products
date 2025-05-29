/**
 * Copyright IBM Corp. 2021, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
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
import { StringFormatter } from '../StringFormatter/StringFormatter.js';

export default {
  title: 'Patterns/Prebuilt patterns/Create flows/CreateTearsheet',
  component: CreateTearsheet,
  tags: ['autodocs'],
  argTypes: {
    description: {
      control: {
        type: 'select',
        labels: {
          0: 'With plain String',
          1: 'With StringFormatter and 1 line',
          2: 'With StringFormatter and 2 lines',
        },
        default: 0,
      },
      description:
        'A description of the flow, displayed in the header area of the tearsheet.\n Note: `StringFormatter` can be passed as a React node to apply custom text formatting, including ellipsis truncation and a definition tooltip when the content is too long.',
      options: [0, 1, 2],
      mapping: {
        0: 'Specify details for the new topic you want to create',
        1: (
          <StringFormatter
            lines={1}
            truncate={true}
            value="This is a description for the tearsheet, providing an opportunity to describe the flow over a couple of lines in the header of the tearsheet."
            tooltipDirection="bottom"
          />
        ),
        2: (
          <StringFormatter
            lines={2}
            truncate={true}
            value="This is a description for the tearsheet, providing an opportunity to describe the flow over a couple of lines in the header of the tearsheet."
            tooltipDirection="bottom"
          />
        ),
      },
    },
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
  description: 0,
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
