/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { getPathForComponent } from '../../../../packages/core/story-structure';

import App from './App';

import styles from './_storybook-styles.scss';

export default {
  title: getPathForComponent('o', 'Examples'),
  parameters: {
    styles,
  },
};

export const c4pGallery = () => <App />;
c4pGallery.storyName = 'on CodeSandbox';
c4pGallery.parameters = { options: { showPanel: false } };
