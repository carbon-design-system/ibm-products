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
  active: boolean('Active (active)', true),
  ariaLabel: text(
      'ARIA label for content (ariaLabel)',
      'Active loading indicator'
  ),
  className: 'some-class',
  small: false
};

/**
 * TODO: Declare template(s) for one or more scenarios.
 */
const Template = (args) => {
  return <LoadingBar {...args} />;
};

const TemplateWithState = (args) => {
  const [small, setSmall] = useState(false);
  return (
      <div style={{ margin: '2rem 1rem 1rem 1rem', width: '24rem' }}>
          <LoadingBar 
            // TODO: handle events with action or local handler.
            // onTodo={action('onTodo log action')}
            {...args}
            small={small}
          />
      </div>
    )
};

export const WithStateManager = TemplateWithState.bind({});
WithStateManager.args = {
  ...defaultProps,
};

/**
 * TODO: Declare one or more stories, generally one per design scenario.
 * NB no need for a 'Playground' because all stories have all controls anyway.
 */
export const loadingBar = Template.bind({});
loadingBar.args = {
  // TODO: Component args - https://storybook.js.org/docs/react/writing-stories/args#LoadingBar-args
  ...defaultProps,
};
