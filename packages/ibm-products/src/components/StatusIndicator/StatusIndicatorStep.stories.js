/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';

import { StatusIndicatorStep } from '.';
import mdx from './StatusIndicatorStep.mdx';

import styles from './_storybook-styles.scss';

export default {
  title: getStoryTitle(StatusIndicatorStep.displayName),
  component: StatusIndicatorStep,
  tags: ['autodocs'],
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    styles,
    layout: 'padded',
    docs: {
      page: mdx,
    },
  },
};

const Template = (args) => {
  return (
    <ul>
      <StatusIndicatorStep {...args} />
    </ul>
  );
};

export const statusIndicatorStep = prepareStory(Template, {
  storyName: 'StatusIndicatorStep',
  args: {
    description: 'Descriptive text',
    errorMessage: 'Error message.',
    status: 'inactive',
  },
});
