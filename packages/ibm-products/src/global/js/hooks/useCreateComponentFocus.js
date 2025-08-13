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
      await wait(100);
      elm.focus();
    };

    const isNotContainedInInert = (elm) => {
      return elm && !elm.closest(`[inert]`);
    };
    // YOU ARE HERE
    /*
    SO IM TRYING TO SET THE FOCUS ON THE NEXT STEP OR PREVIOUS STEP... IT SHOULD ETHER BE A MATCH ON THE FIRSTFOCUSELEMENT PROPERTY
    OR SOME DEFAULT... 
    */
    console.log('currentStep: ', currentStep);
    if (previousState?.currentStep !== currentStep && currentStep > 0) {
      const focusElementQuery = `button, input, select, textarea, a`;
      const firstFocusEl = document.querySelector(firstFocusElement);
      const bakFocusEl = document.querySelector(focusElementQuery);
      const elm = isNotContainedInInert(firstFocusEl)
        ? firstFocusEl
        : bakFocusEl;
      console.log('elm: ', elm);
      if (elm) {
        awaitFocus(elm);
      }
    }
  }, [currentStep, previousState, blockClass, onMount, firstFocusElement]);
};
