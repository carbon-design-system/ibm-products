/**
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { usePrefix } from '@carbon/react';
import { pkg } from '../../../settings';
import { useCallback, useEffect, useState } from 'react';

export const useFocus = (modalRef) => {
  const carbonPrefix = usePrefix();
  const bc = `${pkg.prefix}--tearsheet`;
  // Querying focusable element in the tearsheet
  // Query to exclude hidden elements in the tearsheet from querySelectorAll() method
  const notQuery = `:not(.${carbonPrefix}--visually-hidden,.${bc}__header--no-close-icon,.${carbonPrefix}--btn--disabled,[aria-hidden="true"],[tabindex="-1"])`;
  // Queries to include element types button, input, select, textarea
  const queryButton = `button${notQuery}`;
  const queryInput = `input${notQuery}`;
  const querySelect = `select${notQuery}`;
  const queryTextarea = `textarea${notQuery}`;
  const queryLink = `[href]${notQuery}`;
  // Final query
  const query = `${queryButton},${queryLink},${queryInput},${querySelect},${queryTextarea}`;

  const modalEl = modalRef?.current;

  const getFocusable = useCallback(() => {
    // Selecting all focusable elements based on the above conditions
    const focusableElements = modalEl?.querySelectorAll(`${query}`);
    const first = focusableElements?.[0];
    const last = focusableElements?.[focusableElements?.length - 1];
    const all = focusableElements;

    return {
      first,
      last,
      all,
    };
  }, [modalEl, query]);

  useEffect(() => {
    getFocusable();
  }, [getFocusable]);

  const handleKeyDown = (event) => {
    // Checking whether the key is tab or not
    if (event.key === 'Tab') {
      // updating the focusable elements list
      const {first, last, all } = getFocusable();

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
