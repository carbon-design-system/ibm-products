/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2020
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
// @flow
import React from 'react';
import { DataTable } from 'carbon-components-react';
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
  } = datagridState;
  if (hideSelectAll || radio) {
    return <div className={`${blockClass}__head-hidden-select-all`} />;
  }
  const getProps = DatagridPagination
    ? getToggleAllPageRowsSelectedProps
    : getToggleAllRowsSelectedProps;
  const { onChange, ...selectProps } = getProps();
  return (
    <div
      className={`${blockClass}__head-select-all ${blockClass}__checkbox-cell`}
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

const { TableSelectAll } = DataTable;

export { SelectAll };
