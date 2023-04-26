/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { useRef, useState, useLayoutEffect } from 'react';

export const useResizeObserver = (
  ref,
  options = { callback: null, throttleInterval: 0 }
) => {
  const { callback, throttleInterval } = options;
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const throttleTimeout = useRef(null);
  const entriesToHandle = useRef(null);

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

      throttleTimeout.current = null;

      callback && callback(entry.contentRect);
    };

    let observer = new ResizeObserver((entries) => {
      // always update entriesToHandle
      entriesToHandle.current = entries;

      if (throttleInterval) {
        // if a throttleInterval check for running timeout
        if (throttleTimeout.current === null) {
          // no live timeout set entries to handle and move on

          // set up throttle
          throttleTimeout.current = setTimeout(() => {
            // do callbacks
            doCallbacks();
            // reset throttle
            throttleTimeout.current = null;
          }, throttleInterval);
        }
      } else {
        // no throttle do callbacks every time
        doCallbacks();
      }
    });

    // observe all refs passed
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
      observer = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, options]);

  return { width, height };
};
