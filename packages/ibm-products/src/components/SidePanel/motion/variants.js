/**
 * Copyright IBM Corp. 2022, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { DURATIONS, EASINGS } from '../../../global/js/utils/motionConstants';

export const overlayVariants = {
  visible: {
    opacity: 1,
    transition: {
      duration: DURATIONS.moderate02,
      ease: EASINGS.productive.standard,
    },
  },
  hidden: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
  },
};

export const panelVariants = {
  visible: ({ shouldReduceMotion }) => ({
    x: 0,
    transition: {
      duration: DURATIONS.moderate02,
      ease: EASINGS.productive.standard,
    },
    opacity: shouldReduceMotion && 1,
  }),
  hidden: ({ placement, shouldReduceMotion }) => ({
    x:
      placement === 'right'
        ? shouldReduceMotion
          ? 0
          : '100%'
        : shouldReduceMotion
        ? 0
        : -320,
    opacity: shouldReduceMotion && 0,
  }),
  exit: ({ placement, shouldReduceMotion }) => ({
    x:
      placement === 'right'
        ? shouldReduceMotion
          ? 0
          : '100%'
        : shouldReduceMotion
        ? 0
        : -320,
    transition: {
      duration: DURATIONS.moderate01,
      ease: EASINGS.productive.exit,
    },
    opacity: shouldReduceMotion && 0,
  }),
};

export const actionSetVariants = {
  hidden: (shouldReduceMotion) => ({
    opacity: shouldReduceMotion ? 0 : 1,
    transition: {
      duration: shouldReduceMotion ? DURATIONS.moderate01 : DURATIONS.fast01,
      ease: shouldReduceMotion ? 0 : EASINGS.productive.exit,
    },
  }),
  visible: (shouldReduceMotion) => ({
    opacity: 1,
    transition: {
      duration: shouldReduceMotion ? DURATIONS.moderate01 : DURATIONS.fast02,
      ease: shouldReduceMotion ? 0 : EASINGS.productive.entrance,
      delay: shouldReduceMotion ? 0.075 : 0,
    },
  }),
};
