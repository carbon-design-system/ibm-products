import { useState, useEffect, useCallback, useRef } from 'react';
import { useResizeObserver } from '../../global/js/hooks/useResizeObserver';
import { TagOverflowItem } from './TagOverflow';

const useOverflow = ({
  items,
  containingElementRef,
  containerRef,
  multiline,
  measurementOffset,
  overflowRef,
  maxVisible,
  onOverflowTagChange,
}) => {
  const itemRefs = useRef<Map<string, string> | null>(null);
  // itemOffset is the value of margin applied on each items
  // This value is required for calculating how many items will fit within the container
  const itemOffset = 4;
  const overflowIndicatorWidth = 40;

  const resizeElm =
    containingElementRef && containingElementRef.current
      ? containingElementRef
      : containerRef;
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [visibleItems, setVisibleItems] = useState<TagOverflowItem[]>([]);
  const [overflowItems, setOverflowItems] = useState<TagOverflowItem[]>([]);

  const handleResize = () => {
    if (typeof resizeElm !== 'function' && resizeElm.current) {
      setContainerWidth(resizeElm.current.offsetWidth);
    }
  };

  useResizeObserver(resizeElm, handleResize);

  const getMap = () => {
    if (!itemRefs.current) {
      itemRefs.current = new Map();
    }
    return itemRefs.current;
  };

  const itemRefHandler = (id, node) => {
    const map = getMap();
    if (id && node && map.get(id) !== node.offsetWidth) {
      map.set(id, node.offsetWidth);
    }
  };

  const getVisibleItems = useCallback(() => {
    if (!itemRefs.current) {
      return items;
    }

    if (multiline) {
      const visibleItems = maxVisible ? items?.slice(0, maxVisible) : items;
      return visibleItems;
    }

    const map = getMap();
    const optionalContainingElement = containingElementRef?.current;
    const measurementOffsetValue =
      typeof measurementOffset === 'number' ? measurementOffset : 0;
    const spaceAvailable = optionalContainingElement
      ? optionalContainingElement.offsetWidth - measurementOffsetValue
      : containerWidth;

    const overflowContainerWidth =
      overflowRef &&
      overflowRef.current &&
      overflowRef.current.offsetWidth > overflowIndicatorWidth
        ? overflowRef.current.offsetWidth
        : overflowIndicatorWidth;
    const maxWidth = spaceAvailable - overflowContainerWidth;

    let childrenWidth = 0;
    let maxReached = false;

    return items.reduce((prev, cur) => {
      if (!maxReached) {
        const itemWidth = (map ? Number(map.get(cur.id)) : 0) + itemOffset;
        const fits = itemWidth + childrenWidth < maxWidth;

        if (fits) {
          childrenWidth += itemWidth;
          prev.push(cur);
        } else {
          maxReached = true;
        }
      }
      return prev;
    }, []);
  }, [
    containerWidth,
    containingElementRef,
    items,
    maxVisible,
    measurementOffset,
    multiline,
    overflowRef,
  ]);

  useEffect(() => {
    let visibleItemsArr = getVisibleItems();

    if (maxVisible && maxVisible < visibleItemsArr.length) {
      visibleItemsArr = visibleItemsArr?.slice(0, maxVisible);
    }

    const hiddenItems = items?.slice(visibleItemsArr.length);
    const overflowItemsArr = hiddenItems?.map(({ tagType, ...other }) => {
      return { type: tagType, ...other };
    });

    setVisibleItems(visibleItemsArr);
    setOverflowItems(overflowItemsArr);
    onOverflowTagChange?.(overflowItemsArr);
  }, [getVisibleItems, items, maxVisible, onOverflowTagChange]);

  return {
    visibleItems,
    itemRefHandler,
    overflowItems,
  };
};

export default useOverflow;
