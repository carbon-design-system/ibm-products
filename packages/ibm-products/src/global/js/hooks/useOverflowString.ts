/**
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { RefObject, useCallback, useEffect, useState } from 'react';

type ObserveType = 'HEIGHT' | 'WIDTH' | 'BOTH';

export const useOverflowString = (
  elementRef: RefObject<HTMLElement>,
  observe: ObserveType
) => {
  const [isWidthOverflowing, setIsWidthOverflowing] = useState<boolean>(false);
  const [isHeightOverflowing, setIsHeightOverflowing] =
    useState<boolean>(false);
  const innerText = elementRef?.current?.innerText;

  const checkOverflow = useCallback(() => {
    if (elementRef && (observe === 'WIDTH' || observe === 'BOTH')) {
      const offsetWidth = elementRef?.current?.offsetWidth;
      const scrollWidth = elementRef?.current?.scrollWidth;

      const _isWidthOverflowing =
        offsetWidth && scrollWidth ? offsetWidth < scrollWidth : false;

      setIsWidthOverflowing(_isWidthOverflowing);
    }

    if (elementRef && (observe === 'HEIGHT' || observe === 'BOTH')) {
      const offsetHeight = elementRef?.current?.offsetHeight;
      const scrollHeight = elementRef?.current?.scrollHeight;

      const _isHeightOverflowing =
        offsetHeight && scrollHeight ? offsetHeight < scrollHeight : false;

      setIsHeightOverflowing(_isHeightOverflowing);
    }
  }, [elementRef, observe]);

  useEffect(() => {
    checkOverflow();
  }, [checkOverflow, innerText]);

  return {
    widthOverflowing: isWidthOverflowing,
    heightOverflowing: isHeightOverflowing,
  };
};
