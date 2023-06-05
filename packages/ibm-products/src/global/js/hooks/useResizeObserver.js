/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { useRef, useState, useLayoutEffect, useEffect } from 'react';

export const useResizeObserver = (ref, callback) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const entriesToHandle = useRef(null);
  const cb = useRef(callback);

  useEffect(() => {
    // ref for callback removes it as dependency fro useLayoutEffect
    // This significantly reduces repeated calls if a function is redefined on every
    // render
    cb.current = callback;
  }, [callback]);

  useLayoutEffect(() => {
    if (!ref?.current) {
      return;
    }

    const doCallbacks = () => {
      if (!ref?.current || !Array.isArray(entriesToHandle?.current)) {
        return;
      }

      const entry = entriesToHandle.current[0];

      setWidth(entry.contentRect.width);
      setHeight(entry.contentRect.height);

      cb.current && cb.current(entry.contentRect);
    };

    let observer = new ResizeObserver((entries) => {
      // always update entriesToHandle
      entriesToHandle.current = entries;

      window.requestAnimationFrame(() => {
        // do callbacks
        doCallbacks();
      });
    });

    // observe all refs passed
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
      observer = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return { width, height };
};
