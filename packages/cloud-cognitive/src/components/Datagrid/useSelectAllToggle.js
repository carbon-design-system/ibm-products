/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2021
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
// @flow
import React from 'react';
import cx from 'classnames';
import { selectionColumnId } from './common-column-ids';
import SelectAllWithToggle from './Datagrid/DatagridSelectAllWithToggle';
import { pkg } from '../../settings';

const blockClass = `${pkg.prefix}--datagrid`;

const useSelectAllToggle = (hooks) => {
  useSelectAllWithToggleComponent(hooks);
  useAddClassNameToSelectRow(hooks);
};

const useSelectAllWithToggleComponent = (hooks) => {
  const useInstance = (instance) => {
    const { headers, DatagridPagination } = instance;
    const headersWithSelectAllToggle = headers.map((header) => {
      if (header.id === selectionColumnId && DatagridPagination) {
        Object.assign(header, {
          Header,
        });
      }
      return header;
    });
    Object.assign(instance, { headers: headersWithSelectAllToggle });
  };
  hooks.useInstance.push(useInstance);
};

const useAddClassNameToSelectRow = (hooks) => {
  hooks.getCellProps.push((props, data) => {
    const { column } = data.cell;
    const { DatagridPagination, columns, withStickyColumn } = data.instance;
    const isFirstColumnStickyLeft =
      columns[0]?.sticky === 'left' && withStickyColumn;
    if (column.id === selectionColumnId && DatagridPagination) {
      return [
        props,
        {
          className: cx(`${blockClass}__select-all-toggle-on`, {
            [`${blockClass}__select-all-sticky-left`]: isFirstColumnStickyLeft,
          }),
        },
      ];
    }
    return [props];
  });
};

const Header = (gridState) => {
  const {
    tableId,
    isFetching,
    selectAllToggle,
    getToggleAllPageRowsSelectedProps,
    getToggleAllRowsSelectedProps,
    isAllRowsSelected,
    withStickyColumn,
    columns,
  } = gridState;
  const props = {
    tableId,
    isFetching,
    selectAllToggle,
    getToggleAllPageRowsSelectedProps,
    getToggleAllRowsSelectedProps,
    isAllRowsSelected,
    withStickyColumn,
    columns,
  };
  return <SelectAllWithToggle {...props} />;
};

export default useSelectAllToggle;
