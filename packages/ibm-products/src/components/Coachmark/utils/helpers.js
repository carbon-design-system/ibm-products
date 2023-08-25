/* eslint-disable max-len */

/**
 * Clamp the given value between the upper bound `max` and the lower bound `min`
 * @param {number} max
 * @param {number} min
 * @param {number} value
 */
export function clamp(max, min, value) {
  return Math.min(max, Math.max(min, value));
}
