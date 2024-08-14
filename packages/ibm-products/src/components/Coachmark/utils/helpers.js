/* eslint-disable max-len */
/**
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Clamp the given value between the upper bound `max` and the lower bound `min`
 * @param {number} max
 * @param {number} min
 * @param {number} value
 */
export function clamp(max, min, value) {
  return Math.min(max, Math.max(min, value));
}
