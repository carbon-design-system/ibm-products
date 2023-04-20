/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2020
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
import React from 'react';
import cx from 'classnames';
import { pkg } from '../../settings';

const blockClass = `${pkg.prefix}--datagrid`;

const useColumnRightAlign = (hooks) => {
  const RightAlignRenderer = (tableProps, column) => (
    <div
      className={cx(`${blockClass}__right-align-cell-renderer`, {
        sortDisabled:
          !tableProps.isTableSortable ||
          tableProps.column.disableSortBy === true,
      })}
    >
      {column.Cell(tableProps)}
    </div>
  );

  const RightAlignHeader = (headerProp, column) => (
    <div className={`${blockClass}__right-align-header`}>
      {typeof column.Header === 'function'
        ? column.Header(headerProp)
        : column.Header}
    </div>
  );

  const rightAlignedColumns = (columns) => {
    const columnsWithDefaultCells = columns.map((column) => ({
      ...column,
      Cell: column.rightAlignedColumn
        ? (tableProp) => RightAlignRenderer(tableProp, column)
        : column.Cell,
      Header: column.rightAlignedColumn
        ? (headerProp) => RightAlignHeader(headerProp, column)
        : column.Header,
    }));
    return [...columnsWithDefaultCells];
  };
  hooks.visibleColumns.push(rightAlignedColumns);
};

export default useColumnRightAlign;
