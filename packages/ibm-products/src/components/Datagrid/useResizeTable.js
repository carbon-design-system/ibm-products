/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2020
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
import { useLayoutEffect } from 'react';

const useResizeTable = (hooks) => {
  const useInstanceBeforeDimensions = (instance) => {
    const { rootRef, handleResize } = instance;
    const parent = rootRef && rootRef.current && rootRef.current.parentElement;
    useLayoutEffect(() => {
      if (!parent) {
        return () => {};
      }
      handleResize();
      if (typeof ResizeObserver === 'function') {
        let resizeObserver = new ResizeObserver(() => {
          handleResize();
        });
        resizeObserver.observe(parent);
        return () => {
          resizeObserver.disconnect(parent);
          resizeObserver = null;
        };
      }
      return console.error(
        ' Could not resize table, no support for ResizeObserver'
      );
    }, [handleResize, parent]);
  };
  hooks.useInstanceBeforeDimensions.push(useInstanceBeforeDimensions);
};

export default useResizeTable;
