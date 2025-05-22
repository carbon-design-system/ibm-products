/**
 * Copyright IBM Corp. 2023, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Example from './Example.tsx';


export default {
  title: 'Experimental/Onboarding/InterstitialScreen',
  parameters: {
    layout: 'fullscreen',
    options: {
      showPanel: false,
    },
  },
};

export const overview = () => <Example />;
overview.storyName = 'With Animated Media';
