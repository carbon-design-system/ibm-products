/**
 * Copyright IBM Corp. 2023, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  DURATIONS,
  EASINGS,
} from '../../../../../../global/js/utils/motionConstants';
import { ACTION_SET_HEIGHT, PANEL_WIDTH } from '../constants';

export const panelVariants = {
  hidden: (shouldReduceMotion) => ({
    width: 0,
    overflow: 'hidden',
    transition: {
      duration: shouldReduceMotion ? 0 : DURATIONS.fast02,
      ease: shouldReduceMotion ? 0 : EASINGS.productive.exit,
      when: 'afterChildren',
    },
  }),
  visible: (shouldReduceMotion) => ({
    width: PANEL_WIDTH,
    overflow: 'visible',
    transition: {
      duration: shouldReduceMotion ? 0 : DURATIONS.moderate02,
      ease: shouldReduceMotion ? 0 : EASINGS.productive.entrance,
      when: 'beforeChildren',
    },
  }),
};

export const innerContainerVariants = {
  hidden: (shouldReduceMotion) => ({
    opacity: 0,
    transition: {
      duration: shouldReduceMotion ? 0 : DURATIONS.fast01,
      ease: shouldReduceMotion ? 0 : EASINGS.productive.exit,
    },
  }),
  visible: (shouldReduceMotion) => ({
    opacity: 1,
    transition: {
      duration: shouldReduceMotion ? 0 : DURATIONS.fast02,
      ease: shouldReduceMotion ? 0 : EASINGS.productive.entrance,
      when: 'beforeChildren',
    },
  }),
};

export const actionSetVariants = {
  hidden: (shouldReduceMotion) => ({
    y: ACTION_SET_HEIGHT,
    transition: {
      duration: shouldReduceMotion ? 0 : DURATIONS.fast01,
      ease: shouldReduceMotion ? 0 : EASINGS.productive.exit,
    },
  }),
  visible: (shouldReduceMotion) => ({
    y: 0,
    transition: {
      duration: shouldReduceMotion ? 0 : DURATIONS.fast02,
      ease: shouldReduceMotion ? 0 : EASINGS.productive.entrance,
    },
  }),
};
