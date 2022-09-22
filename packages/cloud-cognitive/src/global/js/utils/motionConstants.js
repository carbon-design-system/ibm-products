/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { getBezierValues } from './getBezierValues';

export const DURATIONS = {
  // Micro-interactions such as button and toggle
  fast01: 0.07, // '70ms'
  // Micro-interactions such as fade
  fast02: 0.11, // '110ms'
  // Micro-interactions, small expansion, short distance movements
  moderate01: 0.15, // '150ms'
  // Expansion, system communication, toast
  moderate02: 0.24, // '240ms'
  // Large expansion, important system notifications
  slow01: 0.4, // '400ms'
  //  Background dimming
  slow02: 0.7, // '700ms'
};

export const EASINGS = {
  productive: {
    entrance: getBezierValues('entrance', 'productive'),
    standard: getBezierValues('standard', 'productive'),
    exit: getBezierValues('exit', 'productive'),
  },
  expressive: {
    entrance: getBezierValues('entrance', 'expressive'),
    standard: getBezierValues('standard', 'expressive'),
    exit: getBezierValues('exit', 'expressive'),
  },
};
