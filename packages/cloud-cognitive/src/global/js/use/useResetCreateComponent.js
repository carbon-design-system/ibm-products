/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useEffect } from 'react';

/**
 * Resets the current step of the create component if it has been closed.
 * @param {object} previousState
 * @param {boolean} open
 * @param {Function} setCurrentStep
 */
export const useResetCreateComponent = (
  previousState,
  open,
  setCurrentStep
) => {
  useEffect(() => {
    if (!previousState?.open && open) {
      setCurrentStep(1);
    }
  }, [open, previousState, setCurrentStep]);
};
