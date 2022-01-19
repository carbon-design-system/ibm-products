/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { getPathForComponent } from '../../../../packages/core/story-structure';
import App from './App';

export default {
  title: getPathForComponent('o', 'Examples on CodePen.io'),
};

export const OneStory = () => <App />;
OneStory.storyName = 'IBM Products';
OneStory.parameters = { options: { showPanel: false } };
