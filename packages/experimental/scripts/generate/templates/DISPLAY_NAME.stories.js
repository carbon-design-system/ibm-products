/**
 * Copyright IBM Corp. FULL_YEAR, FULL_YEAR
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
/**
 * TODO: import action to handle events
 */
// import { action } from '@storybook/addon-actions';

import { DISPLAY_NAME } from '.';

import { pkg } from '../../settings';
import '../../enable-all'; // must come before component is imported (directly or indirectly)
import { getStorybookPrefix } from '../../../config';
const storybookPrefix = getStorybookPrefix(pkg, DISPLAY_NAME.displayName);

import page from './DISPLAY_NAME.mdx';
import styles from './_storybook-styles.scss';

export default {
  title: `${storybookPrefix}/${DISPLAY_NAME.displayName}`,
  component: DISPLAY_NAME,
  // TODO: Define argTypes for props not represented by standard JS types
  // argTypes: {
  //   egProp: { control: 'color' },
  // },
  parameters: {
    docs: {
      page,
    },
    styles,
  },
};

/**
 * TODO: Declare template(s) that (one or more scenarios)
 */
const Template = (args) => {
  return (
    <DISPLAY_NAME
      {...args}
      // TODO: handle events with action or local handler
      // onTodo={action('onTodo log action')}
    />
  );
};

/**
 * TODO: Declare one or more examples per template.
 * NOTE: Complete list of examples should match designed use cases
 */
export const ExampleOne = Template.bind({});
ExampleOne.args = {
  // TODO: Component args - https://storybook.js.org/docs/react/writing-stories/args#DISPLAY_NAME-args
  children: name,
};
