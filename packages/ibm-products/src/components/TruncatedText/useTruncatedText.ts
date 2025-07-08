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
