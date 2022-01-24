/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { getPathForComponent } from '../../story-structure';
import styles from './_storybook-styles.scss';

import App from './ComponentPlayground';

export default {
  title: getPathForComponent('o', 'Examples'),
  parameters: {
    styles,
    layout: 'fullscreen',
  },
};

export const playground = () => <App />;
playground.storyName = 'Component playground';
