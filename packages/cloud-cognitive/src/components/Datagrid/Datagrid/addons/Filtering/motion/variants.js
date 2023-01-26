import {
  DURATIONS,
  EASINGS,
} from '../../../../../../global/js/utils/motionConstants';

export const panelVariants = {
  hidden: {
    x: '-100%',
    transition: {
      duration: DURATIONS.fast02,
      ease: EASINGS.productive.exit,
    },
  },
  visible: {
    x: 0,
    transition: {
      duration: DURATIONS.fast02,
      ease: EASINGS.productive.entrance,
    },
  },
};
