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
    // FUNCTION TO ENSURE THE ELEMENT TARGETED IS NOT CONTAINED IN AN ELEMENT MARKED 'INERT'
    const isNotContainedInInert = (elm) => {
      return elm && !elm.closest(`[inert]`);
    };

    if (previousState?.currentStep !== currentStep && currentStep > 0) {
      // GET THE CURRENT STEP ELEMENT
      const containingElement =
        document.querySelectorAll(blockClass)[currentStep - 1];
      // INTERACTIVE ELEMENTS WE CAN QUERY FOR TO SET FOCUS ON
      const focusElementQuery = `button, input, select, textarea, a`;
      if (containingElement && isNotContainedInInert(containingElement)) {
        // PREFER THE USER DEFINED firstFocusElement IF IT EXISTS
        const firstFocusEl = containingElement.querySelector(firstFocusElement);
        // BACKUP TO INTERACTIVE ELEMENT LIST
        const bakFocusEl = containingElement.querySelector(focusElementQuery);
        // PRIMARY AND BACKUP ELEMENTS TO FOCUS ON
        const elm = firstFocusEl || bakFocusEl;
        if (elm) {
          awaitFocus(elm);
        }
      }
    }
  }, [currentStep, previousState, blockClass, onMount, firstFocusElement]);
};
