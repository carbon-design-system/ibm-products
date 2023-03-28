/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2020
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
import { useRef, useState } from 'react';

const useParentDimensions = (hooks) => {
  const rootRef = useRef();
  const headRef = useRef();
  const innerListRef = useRef();
  const listRef = useRef();
  const gridRef = useRef();
  const [tableHeight, setTableHeight] = useState();

  const useInstance = (instance) => {
    const {
      DatagridActions,
      DatagridBatchActions,
      totalColumnsWidth,
      DatagridPagination,
    } = instance;

    const handleResize = () => {
      const parent =
        rootRef && rootRef.current && rootRef.current.parentElement;
      if (!parent) {
        return;
      }
      const parentHeight = parent.clientHeight;
      const parentWidth = parent.clientWidth;
      const headHeight =
        headRef && headRef.current && headRef.current.clientHeight;
      const parentStyles = window.getComputedStyle(parent);
      const parentMarginBottom = parseFloat(
        parentStyles.getPropertyValue('margin-bottom')
      );
      const parentPaddingBottom = parseFloat(
        parentStyles.getPropertyValue('padding-bottom')
      );
      const parentMarginTop = parseFloat(
        parentStyles.getPropertyValue('margin-top')
      );
      const parentPaddingTop = parseFloat(
        parentStyles.getPropertyValue('padding-top')
      );
      const datagridActionsHeight =
        DatagridActions || DatagridBatchActions ? 48 : 0;
      const datagridPaginationHeight = DatagridPagination ? 48 : 0;
      const hasHorizontalScrollbar = parentWidth < totalColumnsWidth;
      const horizontalScrollbarHolder = hasHorizontalScrollbar ? 16 : 0;
      const newHeight =
        parentHeight -
        headHeight -
        parentMarginBottom -
        parentPaddingBottom -
        parentMarginTop -
        parentPaddingTop -
        datagridActionsHeight -
        datagridPaginationHeight -
        horizontalScrollbarHolder;
      setTableHeight(newHeight);
    };

    Object.assign(instance, {
      tableHeight,
      rootRef,
      headRef,
      innerListRef,
      handleResize,
      listRef,
      gridRef,
    });
  };
  hooks.useInstance.push(useInstance);
};

export default useParentDimensions;
