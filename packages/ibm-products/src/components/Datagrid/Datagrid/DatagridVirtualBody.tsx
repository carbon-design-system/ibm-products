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
    onVirtualScroll,
  } = datagridState;

  const headWrapRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const fakeScrollRef = useRef<HTMLDivElement | null>(null);

  /* istanbul ignore next */
  const handleVirtualGridResize = () => {
    const gridRefElement = gridRef?.current;
    // isHidden checks for an edge case where if the table is hidden by something like a Tab that the width can't be calculated to 0
    const isHidden = gridRefElement?.offsetParent === null;
    if (gridRefElement && !isHidden) {
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
  }, [listRef, rowHeight]);

  const visibleRows = ((DatagridPagination && page) || rows) as DatagridRow[];
  const testRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  useEffect(() => {
    const testScrollEl = testRef.current;
    const fakeScrollEl = fakeScrollRef.current;

    if (testScrollEl && fakeScrollEl) {
      let isSyncing = false;

      const syncScroll = (source, target) => {
        if (!isSyncing) {
          isSyncing = true;
          target.scrollTop = source.scrollTop;
          isSyncing = false;
        }
      };

      const handleTestScroll = () => syncScroll(testScrollEl, fakeScrollEl);
      const handleFakeScroll = () => syncScroll(fakeScrollEl, testScrollEl);

      testScrollEl.addEventListener('scroll', handleTestScroll);
      fakeScrollEl.addEventListener('scroll', handleFakeScroll);

      return () => {
        testScrollEl.removeEventListener('scroll', handleTestScroll);
        fakeScrollEl.removeEventListener('scroll', handleFakeScroll);
      };
    }
  }, []);

  return (
    <>
      <div className={`${blockClass}__head-wrap`} ref={headWrapRef}>
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
          className={`${blockClass}__virtual-container`}
        >
          {({ index, style }) => {
            const row = visibleRows[index];
            prepareRow(row);
            const { key } = row.getRowProps();
            return (
              <div
                ref={innerRef}
                style={{
                  ...style,
                }}
              >
                {row?.RowRenderer?.({ ...datagridState, row, key })}
              </div>
            );
          }}
        </VariableSizeList>
        <div
          className="fake-scrollbar"
          ref={fakeScrollRef}
          style={{
            position: 'absolute',
            overflow: 'auto',
            right: 0,
            bottom: 0,
            height: 'calc(100% - 48px)',
            width: '16px',
          }}
        >
          <div
            style={{
              height: testRef.current?.children[0]?.clientHeight,
              width: '16px',
            }}
          ></div>
        </div>
      </TableBody>
    </>
  );
};

export default DatagridVirtualBody;
