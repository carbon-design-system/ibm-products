/**
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {
  type PropsWithChildren,
  type ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import { PresenceContext } from './hooks/usePresenceContext';

interface TearsheetPresenceProps extends PropsWithChildren {
  /**
   * Specify whether the Tearsheet should opt in to presence mode.
   */
  open: boolean;

  /**
   * Internal property for backwards compatibility. Specify
   * whether the Tearsheet should opt in to presence mode.
   */
  _autoEnablePresence?: boolean;

  /**
   * Internal property to predefine the presence context's id
   * for exclusivity.
   */
  _presenceId?: string;
}

/**
 * TearsheetPresence is a wrapper component that manages the presence
 * of a Tearsheet in the DOM. When enabled, the Tearsheet will not mount
 * until it is opened and will unmount when it's closed, while preserving
 * exit animations.
 */
export const TearsheetPresence = ({
  open,
  _presenceId: presenceId,
  _autoEnablePresence: autoEnablePresence = true,
  children,
}: TearsheetPresenceProps): ReactElement | null => {
  const [isPresent, setIsPresent] = useState(open);
  const hasAnimatedOut = useRef(false);

  useEffect(() => {
    if (open) {
      setIsPresent(true);
      hasAnimatedOut.current = false;
    }
  }, [open]);

  // Listen for animation end to remove from DOM
  useEffect(() => {
    if (!open && isPresent && !hasAnimatedOut.current) {
      const timer = setTimeout(() => {
        hasAnimatedOut.current = true;
        setIsPresent(false);
      }, 500); // Match the tearsheet animation duration

      return () => clearTimeout(timer);
    }
  }, [open, isPresent]);

  if (!isPresent) {
    return null;
  }

  const presenceContextValue = {
    id: presenceId || `tearsheet-presence-${Date.now()}`,
  };

  return (
    <PresenceContext.Provider value={presenceContextValue}>
      {children}
    </PresenceContext.Provider>
  );
};
