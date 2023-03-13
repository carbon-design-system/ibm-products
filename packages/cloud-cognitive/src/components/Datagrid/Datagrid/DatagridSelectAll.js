/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2020
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
// @flow
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { DataTable } from '@carbon/react';
=======
import { DataTable } from 'carbon-components-react';
>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8
=======
import { TableSelectAll } from '@carbon/react';
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
import cx from 'classnames';
import { pkg } from '../../../settings';

const blockClass = `${pkg.prefix}--datagrid`;

const SelectAll = (datagridState) => {
  const {
    isFetching,
    getToggleAllRowsSelectedProps,
    getToggleAllPageRowsSelectedProps,
    tableId,
    hideSelectAll,
    DatagridPagination,
    radio,
    columns,
    withStickyColumn,
  } = datagridState;
  const isFirstColumnStickyLeft =
    columns[0]?.sticky === 'left' && withStickyColumn;
  if (hideSelectAll || radio) {
    return (
      <div
        className={cx(`${blockClass}__head-hidden-select-all`, {
          [`${blockClass}__select-all-sticky-left`]: isFirstColumnStickyLeft,
        })}
      />
    );
  }
  const getProps = DatagridPagination
    ? getToggleAllPageRowsSelectedProps
    : getToggleAllRowsSelectedProps;
  const { onChange, ...selectProps } = getProps();
  return (
    <div
      className={cx(
        `${blockClass}__head-select-all`,
        `${blockClass}__checkbox-cell`,
        {
          [`${blockClass}__checkbox-cell-sticky-left`]: isFirstColumnStickyLeft,
        }
      )}
    >
      <TableSelectAll
        {...selectProps}
        name={`${tableId}-select-all-checkbox-name`}
        onSelect={onChange}
        disabled={isFetching || selectProps.disabled}
        id={`${tableId}-select-all-checkbox-id`}
      />
    </div>
  );
};

export { SelectAll };
