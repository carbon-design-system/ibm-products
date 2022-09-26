/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { getBezierValues } from './getBezierValues';
import {
  fast01,
  fast02,
  moderate01,
  moderate02,
  slow01,
  slow02,
} from '@carbon/motion';

const cleanMotionValue = (val) => parseInt(val) / 1000;

export const DURATIONS = {
  // Micro-interactions such as button and toggle
  fast01: cleanMotionValue(fast01), // '70ms'
  // Micro-interactions such as fade
  fast02: cleanMotionValue(fast02), // '110ms'
  // Micro-interactions, small expansion, short distance movements
  moderate01: cleanMotionValue(moderate01), // '150ms'
  // Expansion, system communication, toast
  moderate02: cleanMotionValue(moderate02), // '240ms'
  // Large expansion, important system notifications
  slow01: cleanMotionValue(slow01), // '400ms'
  //  Background dimming
  slow02: cleanMotionValue(slow02), // '700ms'
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
