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
