/**
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
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
