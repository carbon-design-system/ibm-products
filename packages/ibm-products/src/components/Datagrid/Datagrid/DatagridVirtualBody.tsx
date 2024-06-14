/**
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { MutableRefObject, useEffect, useRef } from 'react';
import { VariableSizeList } from 'react-window';
import { TableBody } from '@carbon/react';
import { pkg } from '../../../settings';
import DatagridHead from './DatagridHead';
import { useResizeObserver } from '../../../global/js/hooks/useResizeObserver';
import { DataGridState, DatagridRow } from '../types';

const blockClass = `${pkg.prefix}--datagrid`;

const rowSizeMap = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 64,
};

const defaultRowHeight = rowSizeMap.lg;

const DatagridVirtualBody = (datagridState: DataGridState) => {
  const {
    getTableBodyProps,
    rows,
    prepareRow,
    onScroll,
    innerListRef,
    tableHeight = 400,
    virtualHeight,
    listRef,
    rowSize,
    DatagridPagination,
    page,
    handleResize,
    gridRef,
    tableId,
    onVirtualScroll,
  } = datagridState;

  /* istanbul ignore next */
  const handleVirtualGridResize = () => {
    const gridRefElement = gridRef?.current;
    if (gridRefElement) {
      gridRefElement.style.width = gridRefElement?.clientWidth?.toString();
    }
  };

  useResizeObserver(gridRef, handleVirtualGridResize);

  useEffect(() => {
    handleResize?.();
  }, [handleResize]);

  const rowHeight = (rowSize && rowSizeMap[rowSize]) || defaultRowHeight;

  useEffect(() => {
    if (listRef && listRef.current) {
      listRef.current.resetAfterIndex(0);
    }
  }, [listRef]);

  const visibleRows = ((DatagridPagination && page) || rows) as DatagridRow[];
  const testRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  // Sync the scrollLeft position of the virtual body to the table header
  useEffect(() => {
    function handleScroll(event) {
      const virtualBody = event.target;
      const headWrapEl = document?.querySelector(
        `#${tableId} .${blockClass}__head-wrap`
      );
      if (headWrapEl) {
        headWrapEl.scrollLeft = virtualBody?.scrollLeft;
      }
    }

    const testRefValue = testRef?.current;
    testRefValue?.addEventListener('scroll', handleScroll);

    return () => {
      testRefValue?.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <>
      <div
        className={`${blockClass}__head-wrap`}
        style={{ width: gridRef?.current?.clientWidth, overflow: 'hidden' }}
      >
        <DatagridHead {...datagridState} />
      </div>
      <TableBody
        {...getTableBodyProps({ role: undefined })}
        aria-live={undefined}
      >
        <VariableSizeList
          height={virtualHeight || tableHeight}
          itemCount={visibleRows.length}
          itemSize={(index) =>
            visibleRows[index]?.isExpanded
              ? (visibleRows[index].expandedContentHeight || 0) + rowHeight
              : rowHeight
          }
          estimatedItemSize={rowHeight}
          onScroll={onScroll}
          onItemsRendered={(e) => onVirtualScroll?.(e)}
          innerRef={innerListRef}
          outerRef={testRef}
          ref={listRef}
          className={`${blockClass}__virtual-scrollbar`}
          style={{ width: gridRef?.current?.clientWidth }}
        >
          {({ index, style }) => {
            const row = visibleRows[index];
            prepareRow(row);
            const { key } = row.getRowProps();
            return (
              <div
                style={{
                  ...style,
                }}
              >
                {row?.RowRenderer?.({ ...datagridState, row, key })}
              </div>
            );
          }}
        </VariableSizeList>
      </TableBody>
    </>
  );
};

export default DatagridVirtualBody;
