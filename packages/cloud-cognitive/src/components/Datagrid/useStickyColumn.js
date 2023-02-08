/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2021
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */

import { useEffect, useRef, useLayoutEffect, useState } from 'react';
import debounce from 'lodash/debounce';
import cx from 'classnames';
import { pkg } from '../../settings';

const blockClass = `${pkg.prefix}--datagrid`;

const styleClassPrefix = `${blockClass}__right-sticky-column`;
const leftStickyStyleClassPrefix = `${blockClass}__left-sticky-column`;
const OFFSET_SCROLL_CLASS = `${styleClassPrefix}-offset-scroll`;

const useStickyColumn = (hooks) => {
  const tableBodyRef = useRef();
  const stickyHeaderCellRef = useRef();

  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useLayoutEffect(() => {
    function updateSize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  hooks.getCellProps.push(changeProps.bind(null, 'cell', null, windowSize));
  hooks.getHeaderProps.push(
    changeProps.bind(null, 'header', stickyHeaderCellRef, windowSize)
  );
  hooks.getTableBodyProps.push(addTableBodyProps.bind(null, tableBodyRef));
  hooks.getHeaderGroupProps.push((props) => [
    props,
    {
      style: {
        ...props.style,
        minWidth: 'unset', // unset the min-width calculated by sum of all column min-width
      },
    },
  ]);
  const useEventListener = (instance) => {
    useEffect(() => {
      const tableBodyElement = tableBodyRef.current;
      const headerCellElement = stickyHeaderCellRef.current;
      if (hasVertScroll(tableBodyElement) && headerCellElement) {
        headerCellElement.classList.add(OFFSET_SCROLL_CLASS);
      }
      const boundListener = debounce(
        onBodyResize.bind(null, tableBodyElement, headerCellElement),
        250
      );
      window.addEventListener('resize', boundListener);
      return () => {
        window.removeEventListener('resize', boundListener);
      };
    }, [instance.rows, instance.isFetching]);
    useEffect(() => {
      const tableBodyElement = tableBodyRef.current;
      const headerCellElement = stickyHeaderCellRef.current;
      const listener = (evt) => {
        toggleStickyShadow(evt.target, headerCellElement);
      };
      toggleStickyShadow(tableBodyElement, headerCellElement);
      if (tableBodyElement) {
        tableBodyElement.addEventListener('scroll', listener);
      }
      return () => {
        if (tableBodyElement) {
          tableBodyElement.removeEventListener('scroll', listener);
        }
      };
    }, [instance.rows, instance.isFetching]);
  };
  const useCheckScroll = (instance) => {
    const tableBodyElement = tableBodyRef.current;
    const headerCellElement = stickyHeaderCellRef.current;
    useEffect(() => {
      onBodyResize(tableBodyElement, headerCellElement);
    }, [instance.rows, headerCellElement, tableBodyElement]);
  };
  hooks.useInstance.push(useEventListener);
  hooks.useInstance.push(useCheckScroll);
  hooks.useInstance.push((instance) => {
    Object.assign(instance, {
      withStickyColumn: true,
    });
  });
  hooks.useInstance.push((instance) => {
    // sticky column is defined by consumer
    // it will always comes after the spacer which is defined by useFlexResize
    // swap them here to use the spacer to push
    // sticky column to the right when there are few
    // columns defined
    const newColumns = instance.visibleColumns;
    let spacerIdx = newColumns.findIndex((col) => col.id === 'spacer');
    let stickyIdx = newColumns.findIndex((col) => col.sticky === 'right');
    if (spacerIdx >= 0 && stickyIdx >= 0 && stickyIdx < spacerIdx) {
      const temp = newColumns[spacerIdx];
      newColumns[spacerIdx] = newColumns[stickyIdx];
      newColumns[stickyIdx] = temp;
    }
    const newHeaders = instance.headers;
    spacerIdx = newHeaders.findIndex((col) => col.id === 'spacer');
    stickyIdx = newHeaders.findIndex((col) => col.sticky === 'right');

    if (spacerIdx >= 0 && stickyIdx >= 0 && stickyIdx < spacerIdx) {
      const temp = newHeaders[spacerIdx];
      newHeaders[spacerIdx] = newHeaders[stickyIdx];
      newHeaders[spacerIdx].canResize = false;
      newHeaders[spacerIdx].disableResizing = true;
      delete newHeaders[spacerIdx].getResizerProps;
      newHeaders[stickyIdx] = temp;
    }
  });
};

const addTableBodyProps = (tableBodyRef, props) => [
  props,
  {
    ref: tableBodyRef,
  },
];

const changeProps = (elementName, headerCellRef, windowSize, props, data) => {
  const column = data.column || data.cell.column;
  if (column.sticky === 'right') {
    return [
      props,
      {
        className: cx({
          [`${styleClassPrefix}-${elementName}`]: true,
          [`${blockClass}__resizableColumn`]: false,
          [`${blockClass}__sortableColumn`]: false,
        }),
        ...(headerCellRef && {
          ref: headerCellRef,
        }),
      },
    ];
  }
  if (column.sticky === 'left') {
    return [
      props,
      {
        className: cx(`${blockClass}__cell`, {
          [`${leftStickyStyleClassPrefix}`]: true && windowSize > 671,
          [`${leftStickyStyleClassPrefix}-${elementName}`]:
            true && windowSize > 671,
          [`${leftStickyStyleClassPrefix}--sticky-border`]:
            column?.selectColumn &&
            column?.sticky === 'left' &&
            windowSize > 671,
          [`${leftStickyStyleClassPrefix}--sticky-border`]:
            data?.instance?.columns[1]?.id === column.id && windowSize > 671,
        }),
        ...(headerCellRef && {
          ref: headerCellRef,
        }),
      },
    ];
  }
  return [props];
};

const onBodyResize = (tableBodyEle, headerCellEle) => {
  if (headerCellEle) {
    if (hasVertScroll(tableBodyEle)) {
      headerCellEle.classList.add(OFFSET_SCROLL_CLASS);
    } else {
      headerCellEle.classList.remove(OFFSET_SCROLL_CLASS);
    }
    toggleStickyShadow(tableBodyEle, headerCellEle);
  }
};

const toggleStickyShadow = (tableBodyEle, headerCellEle) => {
  if (tableBodyEle && headerCellEle) {
    const isScrolledToRight =
      tableBodyEle.scrollLeft + tableBodyEle.clientWidth ===
      tableBodyEle.scrollWidth;
    if (isScrolledToRight) {
      headerCellEle.classList.add(`${blockClass}__sticky-noShadow`);
      tableBodyEle.classList.add(`${blockClass}__sticky-column-noShadow`);
    } else {
      headerCellEle.classList.remove(`${blockClass}__sticky-noShadow`);
      tableBodyEle.classList.remove(`${blockClass}__sticky-column-noShadow`);
    }
  }
};
const hasVertScroll = (element) => {
  if (!element) {
    return false;
  }
  const { scrollHeight, clientHeight } = element;
  return scrollHeight > clientHeight;
};

export default useStickyColumn;
