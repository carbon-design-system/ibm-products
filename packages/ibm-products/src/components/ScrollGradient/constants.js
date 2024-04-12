import { useState, useLayoutEffect, useEffect, useCallback } from 'react';

export const ScrollDirection = { X: 'X', Y: 'Y' };

export const ScrollStates = {
  // No scrolling required because content fits within container.
  NONE: 'NONE',
  // Scroll position is a the start of the scrollable content.
  INITIAL: 'INITIAL',
  // Scroll position is neither at start or end of scrollable content.
  STARTED: 'STARTED',
  // Scroll position is a the end of the scrollable content.
  END: 'END',
};

// FUNCTIONS

export const getScrollState = (element, scrollDirection) => {
  // console.log('getScrollState - element: ', element);
  // console.log('getScrollState - scrollDirection: ', scrollDirection);
  // console.log('-------------------------------------------------');
  switch (scrollDirection) {
    case ScrollDirection.X: {
      if (element.scrollWidth === element.clientWidth) {
        return ScrollStates.NONE;
      }
      if (element.scrollLeft === 0) {
        return ScrollStates.INITIAL;
      }
      if (element.scrollLeft + element.clientWidth === element.scrollWidth) {
        return ScrollStates.END;
      }
      return ScrollStates.STARTED;
    }

    case ScrollDirection.Y:
    default: {
      if (element.scrollHeight === element.clientHeight) {
        return ScrollStates.NONE;
      }
      if (element.scrollTop === 0) {
        return ScrollStates.INITIAL;
      }
      if (element.scrollTop + element.clientHeight === element.scrollHeight) {
        return ScrollStates.END;
      }
      return ScrollStates.STARTED;
    }
  }
};

export const useIsOverflow = (ref) => {
  const [isHorizontallyScrollable, setIsHorizontallyScrollable] = useState();
  const [isVerticallyScrollable, setIsVerticallyScrollable] = useState();
  const [mutationObserver, setMutationObserver] = useState();
  const [resizeObserver, setResizeObserver] = useState();

  const checkOverflow = useCallback(() => {
    if (!ref.current) {
      return;
    }
    setIsHorizontallyScrollable(
      ref.current.scrollWidth > ref.current.clientWidth
    );
    setIsVerticallyScrollable(
      ref.current.scrollHeight > ref.current.clientHeight
    );
  }, [ref]);

  useEffect(() => {
    if (!mutationObserver) {
      return;
    }

    return () => {
      if (mutationObserver) {
        mutationObserver.disconnect();
      }
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  });

  useLayoutEffect(() => {
    const { current } = ref;
    if (current) {
      if ('ResizeObserver' in window && !resizeObserver) {
        setResizeObserver(new ResizeObserver(checkOverflow).observe(current));
      }
      if ('MutationObserver' in window && !mutationObserver) {
        setMutationObserver(
          new MutationObserver(checkOverflow).observe(current, {
            attributes: false,
            childList: true,
            subtree: false,
          })
        );
      }
      checkOverflow();
    }
  }, [ref, checkOverflow, mutationObserver, resizeObserver]);

  return {
    xScrollable: isHorizontallyScrollable,
    yScrollable: isVerticallyScrollable,
  };
};
