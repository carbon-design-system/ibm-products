/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
//import action to handle events if required.
// import { action } from '@storybook/addon-actions';

import { pkg } from '../../settings';
import { getStorybookPrefix } from '../../../config';
import { prepareStory } from '../../global/js/utils/story-helper';

import { LoadingBar } from '.';
import mdx from './LoadingBar.mdx';

import styles from './_storybook-styles.scss';

const storybookPrefix = getStorybookPrefix(pkg, LoadingBar.displayName);

export default {
  title: `${storybookPrefix}/${LoadingBar.displayName}`,
  component: LoadingBar,
  //Define argTypes for props not represented by standard JS types.
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const defaultProps = {
  active: true,
  small: false,
  ariaLabel: 'Active loading indicator',
  className: 'some-class',
};

/**
 * Declare template(s) for one or more scenarios.
 */
const TemplateIndeterminate = (args) => {
  return (
    <div className={'loading-bar-story-wrapper'}>
      <LoadingBar {...args} />
    </div>
  );
};

const TemplateDeterminate = (args) => {
  const percentageIndicatorText = args.percentageIndicatorText
    ? args.percentageIndicatorText
    : 'Loading ' + args.percentage + '%';
  return (
    <div className={'loading-bar-story-wrapper'}>
      <LoadingBar {...args} percentageIndicatorText={percentageIndicatorText} />
    </div>
  );
};

/**
 * Declare one or more stories, generally one per design scenario.
 * NB no need for a 'Playground' because all stories have all controls anyway.
 */
export const Indeterminate = prepareStory(TemplateIndeterminate, {
  args: {
    percentage: undefined,
    showPercentageIndicator: false,
    ...defaultProps,
  },
});

export const Determinate = prepareStory(TemplateDeterminate, {
  args: {
    // Component args - https://storybook.js.org/docs/react/writing-stories/args#LoadingBar-args
    percentage: 67,
    showPercentageIndicator: true,
    ...defaultProps,
  },
});
