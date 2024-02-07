/**
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { pkg, carbon } from '../../../settings';
import { useCallback, useEffect } from 'react';

export const useFocus = (modalRef) => {
  const tearsheetBaseClass = `${pkg.prefix}--tearsheet`;
  // Querying focusable element in the modal
  // Query to exclude hidden elements in the modal from querySelectorAll() method
  // feel free to include more if needed :)
  const notQuery = `:not(.${carbon.prefix}--visually-hidden,.${tearsheetBaseClass}__header--no-close-icon,.${carbon.prefix}--btn--disabled,[aria-hidden="true"],[tabindex="-1"])`;
  // Queries to include element types button, input, select, textarea
  const queryButton = `button${notQuery}`;
  const queryInput = `input${notQuery}`;
  const querySelect = `select${notQuery}`;
  const queryTextarea = `textarea${notQuery}`;
  const queryLink = `[href]${notQuery}`;
  // Final query
  const query = `${queryButton},${queryLink},${queryInput},${querySelect},${queryTextarea}`;

  const getFocusable = useCallback(() => {
    // Selecting all focusable elements based on the above conditions
    const focusableElements =
      modalRef?.current?.innerModal?.current?.querySelectorAll(`${query}`);
    const first = focusableElements?.[0];
    const last = focusableElements?.[focusableElements?.length - 1];
    const all = focusableElements;

    return {
      first,
      last,
      all,
    };
  }, [modalRef, query]);

  useEffect(() => {
    getFocusable();
  }, [getFocusable]);

  const handleKeyDown = (event) => {
    // Checking whether the key is tab or not
    if (event.key === 'Tab') {
      // updating the focusable elements list
      const { first, last, all } = getFocusable();
      event.persist();

      setTimeout(() => {
        if (
          event.shiftKey &&
          !Array.prototype.includes.call(all, document?.activeElement)
        ) {
          // Prevents the default "Tab" behavior
          event.preventDefault();
          // if the user press shift+tab and the current element not in focusable items
          last?.focus();
        } else if (
          !Array.prototype.includes.call(all, document?.activeElement)
        ) {
          event.preventDefault();
          // user pressing tab key only then
          // focusing the first element if the current element is not in focusable items
          first?.focus();
        }
      }, 0);
    }
  };

  return {
    firstElement: getFocusable().first,
    lastElement: getFocusable().last,
    allElements: getFocusable().all,
    keyDownListener: handleKeyDown,
    getFocusable: getFocusable,
  };
};
