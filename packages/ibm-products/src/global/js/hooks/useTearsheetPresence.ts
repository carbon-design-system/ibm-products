/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useEffect, useState, useRef, RefObject } from 'react';
import { useFeatureFlag } from '../../../components/FeatureFlags';

/**
 * Custom hook to manage presence mode for tearsheets
 * Keeps the component mounted during exit animations by listening to animationend events
 *
 * @param open - Whether the tearsheet should be open
 * @param ref - Ref to the animated element (optional, will use timeout fallback if not provided)
 * @param exitAnimationName - Name of the exit animation to listen for (optional)
 * @returns Object with enablePresence, isPresent and isExiting
 */
export const useTearsheetPresence = (
  open: boolean | undefined,
  ref?: RefObject<HTMLElement>,
  exitAnimationName?: string
) => {
  const enablePresence = useFeatureFlag('enable-presence');
  const [isExiting, setIsExiting] = useState(false);
  const [isPresent, setIsPresent] = useState(!!open);
  const prevOpenRef = useRef<boolean | undefined>(undefined);
  const fallbackTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle open/close state changes
  useEffect(() => {
    // If presence mode is disabled, immediately sync isPresent with open
    if (!enablePresence) {
      setIsPresent(!!open);
      setIsExiting(false);
      if (fallbackTimeoutRef.current) {
        clearTimeout(fallbackTimeoutRef.current);
        fallbackTimeoutRef.current = null;
      }
      prevOpenRef.current = open;
      return;
    }

    const wasOpen = prevOpenRef.current;
    const isOpen = !!open;

    // Opening: immediately show
    if (wasOpen === false && isOpen) {
      setIsPresent(true);
      setIsExiting(false);

      if (fallbackTimeoutRef.current) {
        clearTimeout(fallbackTimeoutRef.current);
        fallbackTimeoutRef.current = null;
      }
    }

    // Closing: start exit animation, keep present
    if (wasOpen === true && !isOpen) {
      setIsExiting(true);

      // Get actual animation duration from element's computed styles
      // Use requestAnimationFrame to ensure CSS classes are applied before reading duration
      const element = ref?.current;

      requestAnimationFrame(() => {
        const computedStyles = getComputedStyle(element!);
        const animationDuration =
          parseFloat(computedStyles.transitionDuration) * 1000;

        // Uses actual CSS transition duration to determine when to unmount
        const timeoutDuration = animationDuration ? animationDuration : 300; // Fallback if duration cannot be determined

        fallbackTimeoutRef.current = setTimeout(() => {
          setIsPresent(false);
          setIsExiting(false);
          fallbackTimeoutRef.current = null;
        }, timeoutDuration);
      });
    }

    prevOpenRef.current = open;
  }, [open, enablePresence, ref]);

  // Listen for animation end to unmount (preferred method)
  useEffect(() => {
    const handleAnimationEnd = (event: AnimationEvent) => {
      // Only unmount if we're exiting and the animation matches (if specified)
      if (
        isExiting &&
        (!exitAnimationName || event.animationName === exitAnimationName)
      ) {
        setIsPresent(false);
        setIsExiting(false);

        // Clear fallback timeout since animation completed
        if (fallbackTimeoutRef.current) {
          clearTimeout(fallbackTimeoutRef.current);
          fallbackTimeoutRef.current = null;
        }
      }
    };

    const element = ref?.current;
    if (element && isExiting) {
      element.addEventListener('animationend', handleAnimationEnd);
      return () => {
        element.removeEventListener('animationend', handleAnimationEnd);
      };
    }
  }, [isExiting, ref, exitAnimationName]);

  // Note: We intentionally do NOT clear the timeout on unmount
  // The timeout needs to complete so isPresent can become false
  // React will ignore the state update if component is unmounted

  return {
    /**
     * Whether presence mode is enabled via feature flag
     */
    enablePresence,

    /**
     * Whether the component should be present in the DOM
     */
    isPresent,

    /**
     * Whether the component is currently exiting (playing exit animation)
     */
    isExiting,
  };
};
