/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
/**
 * TODO: import action to handle events
 */
// import { action } from '@storybook/addon-actions';

import { pkg } from '../../../settings';
import '../../../enable-all'; // must come before component is imported

import { HTTPError403 } from '.';
import { HTTPErrors } from '../index';
import { getStorybookPrefix } from '../../../../config';
const storybookPrefix = getStorybookPrefix(pkg, HTTPErrors.displayName);

import page from '../HTTPErrors.mdx';
import styles from '../_storybook-styles.scss';

export default {
  title: `${storybookPrefix}/HTTPErrors/${HTTPError403.displayName}`,
  component: HTTPError403,
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
    <HTTPError403
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
  errorCodeLabel: 'Error 403',
  title: 'Forbidden',
  description: 'You are not authorized to access this resource.',
  links: [
    {
      text: 'Carbon Design System',
      url: 'https://www.carbondesignsystem.com',
    },
    {
      text: 'IBM Cloud and Cognitive component library',
      url: 'https://github.com/carbon-design-system/ibm-cloud-cognitive',
    },
  ],
};
