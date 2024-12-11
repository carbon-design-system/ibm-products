//
// Copyright IBM Corp. 2024, 2024
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import { RefObject } from 'react';

/**
 * These functions are used to calculate if the content of an area is overflowing it's parent.
 * Ideally used to replace an element with another if it's overflowing and vice versa.
 * Check PageHeader.tsx and PageHeaderTitle.js for example usage.
 */

type Props = {
  /**
   * the ref for the element not overflowing
   */
  ref: RefObject<HTMLElement>;
  /**
   * the ref for the element that is overflowing
   */
  overflowRef: RefObject<HTMLElement>;
};

export const replaceOverflowWidth = ({ ref, overflowRef }: Props): boolean => {
  if (ref.current) {
    return ref.current?.offsetWidth < ref.current?.scrollWidth;
  }
  if (overflowRef.current) {
    return overflowRef.current?.offsetWidth < overflowRef.current?.scrollWidth;
  }
  return false;
};

export const replaceOverflowHeight = ({ ref, overflowRef }: Props): boolean => {
  if (ref.current) {
    return ref.current?.offsetHeight < ref.current?.scrollHeight;
  }
  if (overflowRef.current) {
    return (
      overflowRef.current?.offsetHeight < overflowRef.current?.scrollHeight
    );
  }
  return false;
};
