/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const getLocalStorageItem = (key) => {
  if (typeof window === 'undefined') {
    return;
  }
  const localStorageData = window.localStorage.getItem(key);
  const parsedData = JSON.parse(localStorageData) || {};
  return parsedData;
};
