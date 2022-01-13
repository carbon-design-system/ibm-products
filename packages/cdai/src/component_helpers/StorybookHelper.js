//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import { getPathForComponent } from '../../../core/story-structure';

export const getComponentLabel = (componentName) => {
  const title =
    // if the component isn't in the master structure, put it in a lost+found section
    getPathForComponent('a', componentName) ||
    `CD&AI Legacy/Lost + found/${componentName}`;

  return title;
};
