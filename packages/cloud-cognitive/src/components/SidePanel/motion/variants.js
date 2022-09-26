/**
 * Copyright IBM Corp. 2022, 2022
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
  visible: {
    x: 0,
    transition: {
      duration: DURATIONS.moderate02,
      ease: EASINGS.productive.standard,
    },
  },
  hidden: (placement) => ({
    x: placement === 'right' ? '100%' : -320,
  }),
  exit: (placement) => ({
    x: placement === 'right' ? '100%' : -320,
    transition: {
      duration: DURATIONS.moderate01,
      ease: EASINGS.productive.exit,
    },
  }),
};
