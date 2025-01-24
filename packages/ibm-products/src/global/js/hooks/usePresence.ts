/**
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useEffect, useState } from 'react';

// Used as a replacement for AnimatePresence from framer-motion,
// this hook will return a boolean value to let the component
// calling this hook to know whether it should render or not
export const usePresence = (
  open: boolean,
  duration: number = 1000
): { shouldRender: boolean } => {
  const [shouldRender, setShouldRender] = useState(open);
  useEffect(() => {
    if (!open) {
      const timeout = setTimeout(() => {
        setShouldRender(false);
      }, duration); // animation duration

      return () => clearTimeout(timeout);
    } else {
      setShouldRender(true);
    }
  }, [open, setShouldRender, duration]);
  return { shouldRender };
};
