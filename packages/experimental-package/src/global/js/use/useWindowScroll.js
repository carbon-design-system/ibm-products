import { useRef, useLayoutEffect } from 'react';

const windowExists = typeof window !== `undefined`;

const getScrollPosition = () => {
  if (!windowExists) return { scrollX: 0, scrollY: 0 };

  const { scrollX, scrollY } = { ...window };

  return { scrollX, scrollY };
};

export function useWindowScroll(effect, deps, throttleInterval = 0) {
  const scrollPosition = useRef(getScrollPosition());
  const throttleTimeout = useRef(null);

  const doGetScrollPosition = () => {
    const newScrollPosition = getScrollPosition();

    // call effect
    effect({ previous: scrollPosition.current, current: newScrollPosition });
    scrollPosition.current = newScrollPosition;
    throttleTimeout.current = null;
  };

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (throttleInterval) {
        if (throttleTimeout.current === null) {
          throttleTimeout.current = setTimeout(
            doGetScrollPosition,
            throttleInterval
          );
        }
      } else {
        doGetScrollPosition();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, deps);
}
