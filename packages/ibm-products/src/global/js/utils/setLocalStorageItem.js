/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const setLocalStorageItem = (key, parsedData, updatedData) => {
  if (typeof window === 'undefined') {
    return;
  }
  window.localStorage.setItem(
    key,
    JSON.stringify(Object.assign(parsedData, updatedData))
  );
};
