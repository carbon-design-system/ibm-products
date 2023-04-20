/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';

import { NonLinearReading } from '.';
import mdx from './NonLinearReading.mdx';

import styles from './_storybook-styles.scss';

export default {
  title: getStoryTitle(NonLinearReading.displayName),
  component: NonLinearReading,
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const defaultProps = {
  theme: 'light',
};

// As a standalone component, the "story" is meaningless:
// just a pill for a term, expanding to show its definition.
// Should always be shown in context with surrounding text.
const Template = (args) => {
  return (
    <>
      XDR Connect’s correlation
      <NonLinearReading {...args} />
      creates a case by processing data from alerts across multiple security
      tools.
    </>
  );
};

export const Default = prepareStory(Template, {
  args: {
    ...defaultProps,
    children: 'engine,',
    definition:
      'This is a technical component that uses a set of rules to process alerts from your sources, and streamline threat analysis.',
  },
});
