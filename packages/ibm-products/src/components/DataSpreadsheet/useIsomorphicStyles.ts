import { useRef } from 'react';
import { useIsomorphicEffect } from '../../global/js/hooks';

function useIsomorphicStyles<ElementType>(cb, dependencyArray) {
  const ref = useRef<Array<{ el: ElementType | null; data: any }>>([]);

  const aggregator = (el, data) => ref.current.push({ el, data });

  useIsomorphicEffect(() => cb(ref), [dependencyArray, cb]);

  return [ref, aggregator];
}

export default useIsomorphicStyles;
