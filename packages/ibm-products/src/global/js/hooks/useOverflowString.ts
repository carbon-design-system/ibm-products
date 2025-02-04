/**
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { RefObject, useCallback, useEffect, useState } from 'react';

export const useOverflowStringWidth = (elementRef: RefObject<HTMLElement>) => {
  const innerText = elementRef?.current?.innerText;
  const [overflowInfo, setOverflowInfo] = useState<boolean>();

  const checkWidthOverflow = useCallback(() => {
    const offsetWidth = elementRef?.current?.offsetWidth;
    const scrollWidth = elementRef?.current?.scrollWidth;

    const _isWidthOverflowing =
      offsetWidth && scrollWidth ? offsetWidth < scrollWidth : false;

    setOverflowInfo(_isWidthOverflowing);
  }, [elementRef]);

  useEffect(() => {
    checkWidthOverflow();
  }, [checkWidthOverflow, elementRef, innerText]);

  return overflowInfo;
};

export const useOverflowStringHeight = (elementRef: RefObject<HTMLElement>) => {
  const innerText = elementRef?.current?.innerText;
  const [overflowInfo, setOverflowInfo] = useState<boolean>();

  const checkHeightOverflow = useCallback(() => {
    const offsetHeight = elementRef?.current?.offsetHeight;
    const scrollHeight = elementRef?.current?.scrollHeight;

    const _isHeightOverflowing =
      offsetHeight && scrollHeight ? offsetHeight < scrollHeight : false;

    setOverflowInfo(_isHeightOverflowing);
  }, [elementRef]);

  useEffect(() => {
    checkHeightOverflow();
  }, [checkHeightOverflow, elementRef, innerText]);

  return overflowInfo;
};
