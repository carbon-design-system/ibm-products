/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * TODO: import action to handle events
 */
// import { action } from '@storybook/addon-actions';

import { pkg } from '../../settings';
import '../../enable-all'; // must come before component is imported

import { HTTPErrors } from '.';
import { HTTPError403 } from './HTTPError403';
import { getStorybookPrefix } from '../../../config';
const storybookPrefix = getStorybookPrefix(pkg, HTTPErrors.displayName);

import page from './HTTPErrors.mdx';
import styles from './_storybook-styles.scss';

export default {
  title: `${storybookPrefix}/HTTPErrors/${HTTPErrors.displayName}`,
  component: HTTPErrors,
  subcomponents: {
    HTTPError403,
  },
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
