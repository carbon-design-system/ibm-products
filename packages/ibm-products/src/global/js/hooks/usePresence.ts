/**
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useEffect, useState, RefObject } from 'react';

// Used as a replacement for AnimatePresence from framer-motion,
// this hook will return a boolean value to let the component
// calling this hook to know whether it should render or not
export const usePresence = (
  open: boolean,
  ref: RefObject<HTMLElement>,
  animationName: string
) => {
  const [shouldRender, setShouldRender] = useState(open);
  useEffect(() => {
    const handleAnimationEnd = (event: AnimationEvent) => {
      if (!open && event.animationName === animationName) {
        setShouldRender(false);
      }
    };
    if (open) {
      setShouldRender(true);
    }
    if (ref?.current) {
      ref?.current.addEventListener('animationend', handleAnimationEnd);
    }

    const animatedRef = ref?.current;
    return () => {
      if (animatedRef) {
        animatedRef.removeEventListener('animationend', handleAnimationEnd);
      }
    };
  }, [open, setShouldRender, ref, animationName]);
  return { shouldRender };
};
