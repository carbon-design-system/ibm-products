/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import {
  getSelectedCarbonTheme,
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
  argTypes: {
    definition: {
      table: {
        disable: true,
      },
    },
    theme: {
      control: { type: null },
    },
  },
};

const defaultProps = {
  definition: (
    <>
      This is a technical component that uses a set of rules to process alerts
      from your{' '}
      <a href="https://www.ibm.com/" target="_blank" rel="noreferrer">
        sources
      </a>
      , and streamline threat analysis.
    </>
  ),
  theme: 'light',
};

// As a standalone component, the "story" is meaningless:
// just a pill for a keyword, expanding to show its definition.
// Should always be shown in context with surrounding text.
const Template = (args) => {
  const theme = getSelectedCarbonTheme();

  return (
    <>
      XDR Connect’s correlation
      <NonLinearReading {...args} theme={theme} />
      creates a case by processing data from alerts across multiple security
      tools.
    </>
  );
};
const TemplateGradientBG = (args) => {
  return (
    <div>
      Some other Novice to pro components use a gradient background as shown
      below.
      <br />
      If using NonLinearReading inside one of these components, always use{' '}
      <code>theme=&quot;dark&quot;</code>.
      <br />
      <br />
      <div className="gradient-bg">
        XDR Connect’s correlation
        <NonLinearReading {...args} theme="dark" />
        creates a case by processing data from alerts across multiple security
        tools.
      </div>
    </div>
  );
};

export const Default = prepareStory(Template, {
  args: {
    ...defaultProps,
    children: 'engine,',
  },
});

export const GradientBG = prepareStory(TemplateGradientBG, {
  args: {
    ...defaultProps,
    children: 'engine,',
  },
});
