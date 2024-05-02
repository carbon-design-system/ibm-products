// safety checks for remix env
// https://remix.run/docs/en/main/guides/gotchas#typeof-window-checks

import { useState, useEffect } from 'react';
import { hasDocument } from '../utils/window';

const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (hasDocument()) {
      const { matches } = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(matches);
    }
  }, []);

  return prefersReducedMotion;
};

export default usePrefersReducedMotion;
