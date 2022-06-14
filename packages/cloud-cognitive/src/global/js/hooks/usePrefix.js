/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Temporary hooks to return Carbon prefix until their own
// usePrefix hook is made available to use in their next
// release, 6/20/22
export const usePrefix = () => {
  return 'cds';
};
