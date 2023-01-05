/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useEffect } from 'react';
import wait from '../utils/wait';

// Focus the first focusable element and call the onMount prop for the current step if one is provided
export const useCreateComponentFocus = ({
  previousState,
  currentStep,
  blockClass,
  onMount,
  firstFocusElement,
}) => {
  useEffect(() => {
    if (typeof onMount === 'function') {
      onMount();
    }
  }, [onMount]);
  useEffect(() => {
    // because of how handleStackChange.claimFocus in TearsheetShell works a timeout is required to focus on specific elements
    const awaitFocus = async (elm) => {
      await wait(10);
      elm.focus();
    };
    if (previousState?.currentStep !== currentStep && currentStep > 0) {
      if (firstFocusElement) {
        const elm = document.querySelector(firstFocusElement);
        if (elm) {
          awaitFocus(elm);
        }
      }
    }
  }, [currentStep, previousState, blockClass, onMount, firstFocusElement]);
};
