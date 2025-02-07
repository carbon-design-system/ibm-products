/**
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// clamp utility, replacing lodash.clamp
// If it's lower than the lower bound, we pick the lower bound.
// If it's higher than the upper bound, we pick the upper bound.
// Otherwise, we pick the number passed in.
export const clamp = (value: number, min: number, max: number): number =>
  Math.min(Math.max(value, min), max);
