/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { usePrefix } from '@carbon/react';
import { pkg } from '../../../settings';
import { useCallback, useEffect } from 'react';
import wait from '../utils/wait';

export const getSpecificElement = (parentEl, elementId) => {
  const element = parentEl?.querySelector(elementId);

  return elementId && !element?.disabled ? element : null;
};

export const useFocus = (modalRef, selectorPrimaryFocus) => {
  const carbonPrefix = usePrefix();
  const tearsheetBaseClass = `${pkg.prefix}--tearsheet`;
  const sidePanelBaseClass = `${pkg.prefix}--side-panel`;
  // Querying focusable element in the modal
  // Query to exclude hidden elements in the modal from querySelectorAll() method
  // feel free to include more if needed :)
  const notQuery = `:not(.${carbonPrefix}--visually-hidden,.${tearsheetBaseClass}__header--no-close-icon,.${carbonPrefix}--btn--disabled,[aria-hidden="true"],[tabindex="-1"],[disabled])`;
  // Queries to include element types button, input, select, textarea
  const queryButton = `button${notQuery}`;
  const queryInput = `input${notQuery}`;
  const querySelect = `select${notQuery}`;
  const queryTextarea = `textarea${notQuery}`;
  const queryLink = `[href]${notQuery}`;
  const queryTabIndex = `[tabindex="0"]${notQuery}`;
  const querySidePanelScroll = `.${sidePanelBaseClass}--scrolls`;
  // Final query
  const query = `${queryButton},${queryLink},${queryInput},${querySelect},${queryTextarea},${queryTabIndex},${querySidePanelScroll}`;

  const modalEl = modalRef?.current;

  const getFocusable = useCallback(() => {
    // Selecting all focusable elements based on the above conditions
    let focusableElements = modalEl?.querySelectorAll(`${query}`);
    if (focusableElements?.length) {
      focusableElements = Array.prototype.filter.call(
        focusableElements,
        (el) => window?.getComputedStyle(el)?.display !== 'none'
      );
    }

    const first = focusableElements?.[0];
    const last = focusableElements?.[focusableElements?.length - 1];
    const all = focusableElements;
    const specified = getSpecificElement(modalEl, selectorPrimaryFocus);

    return {
      first,
      last,
      all,
      specified,
    };
  }, [modalEl, query, selectorPrimaryFocus]);

  useEffect(() => {
    getFocusable();
  }, [getFocusable]);

  const handleKeyDown = async (event) => {
    // Checking whether the key is tab or not
    if (event.key === 'Tab') {
      // updating the focusable elements list
      const { first, last, all } = getFocusable();

      await wait(1);
      if (
        event.shiftKey &&
        !Array.prototype.includes.call(all, document?.activeElement)
      ) {
        // Prevents the default "Tab" behavior
        event.preventDefault();
        // if the user press shift+tab and the current element not in focusable items
        last?.focus();
      } else if (!Array.prototype.includes.call(all, document?.activeElement)) {
        event.preventDefault();
        // user pressing tab key only then
        // focusing the first element if the current element is not in focusable items
        first?.focus();
      }
    }
  };

  return {
    firstElement: getFocusable().first,
    lastElement: getFocusable().last,
    allElements: getFocusable().all,
    specifiedElement: getFocusable().specified,
    keyDownListener: handleKeyDown,
    getFocusable: getFocusable,
  };
};
