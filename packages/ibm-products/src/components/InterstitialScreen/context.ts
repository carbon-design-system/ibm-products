/**
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { createContext } from 'react';
import { InterstitialScreenContextType } from './InterstitialScreen';
import { pkg } from '../../settings';

// The block part of our conventional BEM class names (blockClass__E--M).
export const blockClass = `${pkg.prefix}--interstitial-screen`;

export const InterstitialScreenContext =
  createContext<InterstitialScreenContextType>({ progStep: 0, stepCount: 0 });
