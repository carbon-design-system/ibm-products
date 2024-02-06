/**
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { usePrefix } from '@carbon/react';
import { pkg } from '../../../settings';

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
  // Selecting all focusable elements based on the above conditions
  const focusableElements = modalEl?.querySelectorAll(`${query}`);

  return {
    first: focusableElements?.[0],
    last: focusableElements?.[focusableElements?.length - 1],
    all: focusableElements,
  };
};
