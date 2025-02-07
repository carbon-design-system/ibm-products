/**
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { clamp } from '../clamp';

describe('clamp', () => {
  it('should return the given number if in range', () => {
    const clampedNumber = clamp(10, 5, 15);
    expect(clampedNumber).toEqual(10);
  });
  it('should return the lower bound if value is lower than the min', () => {
    const clampedNumber = clamp(1, 5, 15);
    expect(clampedNumber).toEqual(5);
  });
  it('should return the upper bound if value is higher than the max', () => {
    const clampedNumber = clamp(20, 5, 15);
    expect(clampedNumber).toEqual(15);
  });
});
