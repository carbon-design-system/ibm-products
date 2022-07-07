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

const useColumnCenterAlign = (hooks) => {
  const centerAlignRenderer = (tableProps, column) => (
    <div
      className={cx(`${blockClass}__center-align-cell-renderer`, {
        sortDisabled:
          !tableProps.isTableSortable ||
          tableProps.column.disableSortBy === true,
      })}
    >
      {column.Cell(tableProps)}
    </div>
  );

  const centerAlignHeader = (headerProp, column) => (
    <div className={`${blockClass}__center-align-header`}>
      {typeof column.Header === 'function'
        ? column.Header(headerProp)
        : column.Header}
    </div>
  );

  const centerAlignedColumns = (columns) => {
    const columnsWithDefaultCells = columns.map((column) => ({
      ...column,
      Cell: column.centerAlignedColumn
        ? (tableProp) => centerAlignRenderer(tableProp, column)
        : column.Cell,
      Header: column.centerAlignedColumn
        ? (headerProp) => centerAlignHeader(headerProp, column)
        : column.Header,
    }));
    return [...columnsWithDefaultCells];
  };

  hooks.visibleColumns.push(centerAlignedColumns);
};

export default useColumnCenterAlign;
