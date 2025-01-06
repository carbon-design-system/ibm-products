/**
 * Copyright IBM Corp. 2024, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useState, useRef, ForwardedRef } from 'react';
import { useResizeObserver } from './useResizeObserver';

type Item = {
  id: string;
};

export function useOverflowItems<T extends Item>(
  items: T[] = [],
  ref?: ForwardedRef<HTMLDivElement>,
  maxVisible?: number,
  onChange?: (hiddenItems: T[]) => void,
  additionalOffset = 0
) {
  const localRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Map<number, number> | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const containerRef = ref || localRef;
  const visibleItemCount = useRef<number>(0);

  const handleResize = () => {
    if (typeof containerRef !== 'function' && containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  };

  const getMap = (): Map<string | number, number> => {
    if (!itemRefs.current) {
      itemRefs.current = new Map();
    }
    return itemRefs.current;
  };

  const itemRefHandler = (
    id: string | number,
    node: HTMLElement | null
  ): void => {
    const map = getMap();
    if (node && !map.get(id)) {
      const style = getComputedStyle?.(node);
      const totalWidth = style
        ? parseInt(style.marginLeft) +
          parseInt(style.marginRight) +
          node.offsetWidth
        : node.offsetWidth;
      map.set(id, totalWidth);
    }
  };

  const getItems = (): T[] => {
    const map = getMap();
    if (!containerWidth) {
      return items;
    }
    const spaceAvailable = containerWidth - additionalOffset;
    let maxReached = false;
    let totalWidth = 0;

    return items.reduce((prev, cur) => {
      if (maxVisible && prev.length >= maxVisible) {
        maxReached = true;
      }
      if (maxReached === false) {
        const itemWidth = map.get(cur.id) || 0;
        const willFit = itemWidth + totalWidth <= spaceAvailable;
        if (willFit) {
          totalWidth += itemWidth;
          prev.push(cur);
        } else {
          maxReached = true;
        }
      }
      return prev;
    }, [] as T[]);
  };

  useResizeObserver(containerRef, handleResize);

  const visibleItems = getItems();
  const visibleItemsNum = visibleItems.length;
  const hiddenItems = items.slice(visibleItemsNum);
  // only call the change handler when the number of visible items has changed
  if (visibleItemsNum !== visibleItemCount.current) {
    visibleItemCount.current = visibleItemsNum;
    onChange?.(hiddenItems);
  }

  return {
    visibleItems,
    hiddenItems,
    containerRef,
    itemRefHandler,
  };
}
