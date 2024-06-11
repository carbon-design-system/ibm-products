/**
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useLayoutEffect, useState } from 'react';
import { TableSelectAll } from '@carbon/react';
import cx from 'classnames';
import { pkg } from '../../../settings';
import { handleSelectAllRowData } from './addons/stateReducer';
import { DataGridState, DataGridToggleAllRowsProps } from '../types';

const blockClass = `${pkg.prefix}--datagrid`;

const SelectAll = (datagridState: DataGridState) => {
  const [windowSize, setWindowSize] = useState(
    typeof window !== 'undefined' ? window.innerWidth : ''
  );
  useLayoutEffect(() => {
    /* istanbul ignore next */
    function updateSize() {
      setWindowSize(window.innerWidth);
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateSize);
    }
    return () => window.removeEventListener('resize', updateSize);
  }, []);

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
    dispatch,
    rows,
    getRowId,
    toggleAllRowsSelected,
    onAllRowSelect,
  } = datagridState;
  const isFirstColumnStickyLeft =
    columns[0]?.sticky === 'left' && withStickyColumn;
  if (hideSelectAll || radio) {
    return (
      <div
        className={cx(`${blockClass}__head-hidden-select-all`, {
          [`${blockClass}__select-all-sticky-left`]:
            /* istanbul ignore next */
            isFirstColumnStickyLeft && Number(windowSize) > 671,
        })}
      />
    );
  }
  const getProps = DatagridPagination
    ? getToggleAllPageRowsSelectedProps
    : getToggleAllRowsSelectedProps;
  const { onChange, ...selectProps } = getProps() as DataGridToggleAllRowsProps;
  const { indeterminate } = selectProps;

  const handleSelectAllChange = (event) => {
    if (indeterminate) {
      handleSelectAllRowData({
        dispatch,
        rows,
        getRowId,
        indeterminate: true,
        isChecked: undefined,
      });
      toggleAllRowsSelected(false);
      onAllRowSelect?.(rows, event);

      return onChange?.({
        target: { checked: false },
      } as any);
    }
    handleSelectAllRowData({
      dispatch,
      rows,
      getRowId,
      isChecked: event.target.checked,
      indeterminate,
    });
    onAllRowSelect?.(rows, event);
    return onChange?.(event);
  };

  return (
    <div
      className={cx(
        `${blockClass}__head-select-all`,
        `${blockClass}__checkbox-cell`,
        {
          [`${blockClass}__checkbox-cell-sticky-left`]:
            /* istanbul ignore next */
            isFirstColumnStickyLeft && Number(windowSize) > 671,
        }
      )}
    >
      <TableSelectAll
        {...selectProps}
        name={`${tableId}-select-all-checkbox-name`}
        onSelect={handleSelectAllChange}
        disabled={isFetching || selectProps?.disabled}
        id={`${tableId}-select-all-checkbox-id`}
      />
    </div>
  );
};

export { SelectAll };
