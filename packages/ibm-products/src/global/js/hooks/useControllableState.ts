/**
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useState, useCallback } from 'react';

type Callback<T> = (value: T) => void;

export function useControllableState<T>(
  value: T,
  onChange?: Callback<T>
): [T, Callback<T>] {
  if (typeof value === 'function') {
    throw new TypeError('Functions are not supported');
  }

  const [uncontrolledValue, setUncontrolledValue] = useState(value);

  const onControlledChange = useCallback(
    (controlledValue: T) => {
      onChange?.(controlledValue);
    },
    [onChange]
  );

  if (typeof onChange === 'function') {
    return [value, onControlledChange];
  }

  return [uncontrolledValue, setUncontrolledValue];
}
