/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useEffect, useRef, useState } from 'react';
import { checkHeightOverflow } from '../../global/js/utils/checkForOverflow';

interface Params {
  lines?: number;
  value?: string;
  expanded?: boolean;
}

export default function useTruncatedText({ lines, value, expanded }: Params) {
  const [truncated, setTruncated] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (ref.current && !expanded) {
        setTruncated(checkHeightOverflow(ref.current));
      }
    });

    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [lines, value, expanded]);

  return { ref, truncated };
}
