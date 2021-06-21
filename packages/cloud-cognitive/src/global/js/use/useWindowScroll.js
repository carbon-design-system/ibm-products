import { useRef, useLayoutEffect } from 'react';

const windowExists = typeof window !== `undefined`;

const getScrollPosition = () => {
  if (!windowExists) {
    return { scrollX: -1, scrollY: -1 };
  } //

  const { scrollX, scrollY } = { ...window };

  return { scrollX, scrollY };
};

export function useWindowScroll(effect, deps, throttleInterval = 0) {
  const scrollPosition = useRef({});
  const throttleTimeout = useRef(null);

  const doGetScrollPosition = () => {
    const newVal = {
      previous: scrollPosition.current,
      current: getScrollPosition(),
    };

    // call effect
    effect(newVal);

    scrollPosition.current = newVal.current;
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
    doGetScrollPosition();

    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
