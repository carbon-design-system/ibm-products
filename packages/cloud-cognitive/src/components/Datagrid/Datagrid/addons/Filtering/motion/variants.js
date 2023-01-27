import {
  DURATIONS,
  EASINGS,
} from '../../../../../../global/js/utils/motionConstants';
import { ACTION_SET_HEIGHT, PANEL_WIDTH } from '../constants';

export const panelVariants = {
  hidden: {
    width: 0,
    overflow: 'hidden',
    transition: {
      duration: DURATIONS.fast02,
      ease: EASINGS.productive.exit,
      when: 'afterChildren',
    },
  },
  visible: {
    width: PANEL_WIDTH,
    overflow: 'visible',
    transition: {
      duration: DURATIONS.moderate02,
      ease: EASINGS.productive.entrance,
      when: 'beforeChildren',
    },
  },
};

export const innerContainerVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: DURATIONS.fast01,
      ease: EASINGS.productive.exit,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: DURATIONS.fast02,
      ease: EASINGS.productive.entrance,
      when: 'beforeChildren',
    },
  },
};

export const actionSetVariants = {
  hidden: {
    y: ACTION_SET_HEIGHT,
    transition: {
      duration: DURATIONS.fast01,
      ease: EASINGS.productive.exit,
    },
  },
  visible: {
    y: 0,
    transition: {
      duration: DURATIONS.fast02,
      ease: EASINGS.productive.entrance,
    },
  },
};
