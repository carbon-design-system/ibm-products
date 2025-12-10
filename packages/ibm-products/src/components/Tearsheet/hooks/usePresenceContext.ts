/**
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import { useFeatureFlag } from '../../FeatureFlags';
import { useIsomorphicEffect } from '../../../global/js/hooks';

export interface PresenceContextValue {
  id: string;
}

export const PresenceContext = createContext<PresenceContextValue | null>(null);

export const usePresenceContext = (open: boolean) => {
  const context = useContext(PresenceContext);
  const enablePresence = useFeatureFlag('enablePresence');
  const [exitState, setExitState] = useState<'active' | 'idle' | 'finished'>(
    'finished' // Always start as finished
  );
  const [shouldBeOpen, setShouldBeOpen] = useState(open);
  const isInitialMount = useRef(true);

  // Handle shouldBeOpen state - runs when open or enablePresence changes
  useIsomorphicEffect(() => {
    if (!enablePresence) {
      // When presence is disabled, immediately mirror open state
      setShouldBeOpen(open);
      isInitialMount.current = false;
      return;
    }

    if (open) {
      // On initial mount with open=true, defer state update to trigger animation
      if (isInitialMount.current) {
        isInitialMount.current = false;
        // Defer to next tick to ensure DOM is ready for animation
        // Using Promise.resolve for universal compatibility (works in SSR, tests, and browsers)
        Promise.resolve().then(() => {
          setShouldBeOpen(true);
        });
      } else {
        setShouldBeOpen(true);
      }
    } else {
      isInitialMount.current = false;
      setShouldBeOpen(false);
    }
  }, [open, enablePresence]);

  // Handle exitState transitions - only when enablePresence is true
  useEffect(() => {
    if (!enablePresence) {
      return;
    }

    if (open) {
      setExitState('active');
    } else if (exitState === 'active') {
      setExitState('idle');
    }
  }, [open, enablePresence, exitState]);

  const handleExitComplete = useCallback(() => {
    if (!open) {
      setExitState('finished');
    }
  }, [open]);

  // Component is present when open OR when exit animation hasn't finished
  // If enablePresence is false, always present
  const isPresent = context
    ? true
    : !enablePresence || open || exitState !== 'finished';
  const isExiting = enablePresence && !open && exitState === 'idle';

  return {
    isPresent,
    isExiting,
    shouldBeOpen,
    handleExitComplete,
  };
};
