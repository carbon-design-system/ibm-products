/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
// TODO: import action to handle events if required.
// import { action } from '@storybook/addon-actions';

import { pkg } from '../../settings';
import '../../utils/enable-all'; // must come before component is imported (directly or indirectly)
import { getStorybookPrefix } from '../../../config';

import { LoadingBar } from '.';
import mdx from './LoadingBar.mdx';

import styles from './_storybook-styles.scss';

const storybookPrefix = getStorybookPrefix(pkg, LoadingBar.displayName);

export default {
  title: `${storybookPrefix}/${LoadingBar.displayName}`,
  component: LoadingBar,
  // TODO: Define argTypes for props not represented by standard JS types.
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
  className: 'some-class'
};

/**
 * TODO: Declare template(s) for one or more scenarios.
 */
const TemplateIndeterminate = (args) => {
  return (
      <div style={{ margin: '2rem 1rem 1rem 1rem', width: '24rem' }}>
          <LoadingBar
            {...args}
          />
      </div>
    )
};

const TemplateDeterminate = (args) => {
const percentageIndicatorText = 'Loading ' + args.percentage + '%';
  return (
      <div style={{ margin: '2rem 1rem 1rem 1rem', width: '24rem' }}>
          <LoadingBar
            {...args}
            percentageIndicatorText={percentageIndicatorText}
          />
      </div>
    )
};

export const WithStateManager = TemplateIndeterminate.bind({});
WithStateManager.args = {
  percentage: undefined,
  showPercentageIndicator: false,
  ...defaultProps,
};

/**
 * TODO: Declare one or more stories, generally one per design scenario.
 * NB no need for a 'Playground' because all stories have all controls anyway.
 */
export const loadingBar = TemplateDeterminate.bind({});
loadingBar.args = {
  // TODO: Component args - https://storybook.js.org/docs/react/writing-stories/args#LoadingBar-args
  percentage: 67,
  showPercentageIndicator: true,
  ...defaultProps,
};
