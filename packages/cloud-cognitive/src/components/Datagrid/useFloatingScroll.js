/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2021
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
import { useEffect } from 'react';
import cx from 'classnames';
import { pkg } from '../../settings';

const blockClass = `${pkg.prefix}--datagrid`;

const useFloatingScroll = (hooks) => {
  const useInstance = (instance) => {
    const { tableId, withVirtualScroll, ExpandedRowContentComponent } =
      instance;
    useEffect(() => {
      // Floating scroll doesn't work with expanded rows and virtual scroll
      if (withVirtualScroll || ExpandedRowContentComponent) {
        return;
      }
      const datagrid = document.getElementById(tableId);
      // eslint-disable-next-line no-unused-expressions
      datagrid?.classList.add(`${blockClass}__sticky`);
    }, [ExpandedRowContentComponent, tableId, withVirtualScroll]);
  };
  const useAddStickyClass = (instance) => {
    const { withVirtualScroll, ExpandedRowContentComponent } = instance;
    // Floating scroll doesn't work with expanded rows and virtual scroll
    if (withVirtualScroll || ExpandedRowContentComponent) {
      return;
    }
    const addStickyClass = (props) => [
      props,
      {
        className: cx(props.className, `${blockClass}__sticky`),
      },
    ];
    hooks.getTableProps.push(addStickyClass);
    hooks.getTableBodyProps.push(addStickyClass);
    hooks.getHeaderGroupProps.push(addStickyClass);
  };
  const useAddScrollListener = (instance) => {
    const { withVirtualScroll, ExpandedRowContentComponent, tableId } =
      instance;
    // Floating scroll doesn't work with expanded rows and virtual scroll
    if (withVirtualScroll || ExpandedRowContentComponent) {
      return;
    }
    let memoHead;
    const addOnScroll = (props) => [
      props,
      {
        onScroll: (e) => {
          let simpleThead;
          if (memoHead) {
            simpleThead = memoHead;
          } else {
            const datagrid = document.getElementById(tableId);
            simpleThead = datagrid?.querySelector(
              `.${blockClass}__table-simple thead > div`
            );
            memoHead = simpleThead;
          }
          if (simpleThead) {
            simpleThead.scrollLeft = e.target.scrollLeft;
          }
        },
      },
    ];
    hooks.getTableBodyProps.push(addOnScroll);
  };
  hooks.useInstance.push(useAddStickyClass);
  hooks.useInstance.push(useAddScrollListener);
  hooks.useInstance.push(useInstance);
};

export default useFloatingScroll;
