/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2020 - 2021
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
import React, { useEffect } from 'react';
import { VariableSizeList } from 'react-window';
import { DataTable } from 'carbon-components-react';
import { carbon, pkg } from '../../../settings';
import DatagridHead from './DatagridHead';

const blockClass = `${pkg.prefix}--datagrid`;

const { TableBody } = DataTable;

const rowSizeMap = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 64,
  // TODO: deprecate the below values in next major release (v8) on carbon-components-react
  short: 32,
  compact: 24,
  normal: 48,
  tall: 64,
};

const defaultRowHeight = rowSizeMap.lg;

const DatagridVirtualBody = (datagridState) => {
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
  } = datagridState;

  useEffect(() => {
    handleResize();
  }, [handleResize]);

  const rowHeight = (rowSize && rowSizeMap[rowSize]) || defaultRowHeight;
  if (listRef && listRef.current) {
    listRef.current.resetAfterIndex(0);
  }
  const virtualBodyWidth = document.getElementsByClassName(
    `${carbon.prefix}--data-table-content`
  )[0].offsetWidth;

  const visibleRows = (DatagridPagination && page) || rows;
  return (
    <div style={{ width: virtualBodyWidth }}>
      <DatagridHead {...datagridState} />
      <TableBody {...getTableBodyProps()} onScroll={onScroll}>
        <VariableSizeList
          height={virtualHeight || tableHeight}
          itemCount={visibleRows.length}
          itemSize={(index) =>
            visibleRows[index].isExpanded
              ? (visibleRows[index].expandedContentHeight || 0) + rowHeight
              : rowHeight
          }
          estimatedItemSize={rowHeight}
          onScroll={onScroll}
          innerRef={innerListRef}
          ref={listRef}
          className={`${blockClass}__virtual-scrollbar`}
          style={{ width: virtualBodyWidth }}
        >
          {({ index, style }) => {
            const row = visibleRows[index];
            prepareRow(row);
            return (
              <div
                style={{
                  ...style,
                }}
              >
                {row.RowRenderer({ ...datagridState, row })}
              </div>
            );
          }}
        </VariableSizeList>
      </TableBody>
    </div>
  );
};

export default DatagridVirtualBody;
