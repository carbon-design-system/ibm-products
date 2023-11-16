/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2020
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
// @flow
import React, { useLayoutEffect, useState } from 'react';
import cx from 'classnames';
import { TableSelectRow } from '@carbon/react';
import { SelectAll } from './Datagrid/DatagridSelectAll';
import { selectionColumnId } from './common-column-ids';
import { pkg, carbon } from '../../settings';
import { handleToggleRowSelected } from './Datagrid/addons/stateReducer';

const blockClass = `${pkg.prefix}--datagrid`;
const checkboxClass = `${pkg.prefix}--datagrid__checkbox-cell`;

const useSelectRows = (hooks) => {
  useHighlightSelection(hooks);
  const useInstance = (instance) => {
    const { rows } = instance;
    const rowsWithSelect = rows.map((row) => ({ ...row, isSelectable: true }));
    Object.assign(instance, { rows: rowsWithSelect });
  };
  hooks.useInstance.push(useInstance);
  hooks.useInstance.push((instance) => {
    Object.assign(instance, {
      withSelectRows: true,
    });
  });
  hooks.visibleColumns.push((columns) => [
    {
      id: selectionColumnId,
      Header: (gridState) => <SelectAll {...gridState} />,
      Cell: (gridState) => <SelectRow {...gridState} />,
    },
    ...columns,
  ]);
};

const useHighlightSelection = (hooks) => {
  const getRowProps = (props, { row }) => {
    const { checked } = row.getToggleRowSelectedProps();
    return [
      props,
      {
        className: cx([
          `${blockClass}__carbon-row`,
          {
            [`${carbon.prefix}--data-table--selected`]: checked,
            [`${blockClass}__active-row`]: checked,
          },
        ]),
      },
    ];
  };
  hooks.getRowProps.push(getRowProps);
};

const SelectRow = (datagridState) => {
  const {
    isFetching = false,
    tableId,
    row,
    cell,
    radio,
    toggleAllRowsSelected,
    onRadioSelect,
    onRowSelect,
    columns,
    withStickyColumn,
    dispatch,
  } = datagridState;

  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useLayoutEffect(() => {
    function updateSize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const onSelectHandler = (e) => {
    e.stopPropagation(); // avoid triggering onRowClick
    if (radio) {
      toggleAllRowsSelected(false);
      if (onRadioSelect) {
        onRadioSelect(row);
      }
    }
    onChange(e);
    onRowSelect?.(row, e);
    handleToggleRowSelected(dispatch, row);
  };

  const selectDisabled = isFetching || row.getRowProps().disabled;
  const { onChange, title, ...selectProps } = row.getToggleRowSelectedProps();
  const cellProps = cell.getCellProps();
  const isFirstColumnStickyLeft =
    columns[0]?.sticky === 'left' && withStickyColumn;
  const rowId = `${tableId}-${row.index}`;
  return (
    <TableSelectRow
      {...cellProps}
      {...selectProps}
      radio={radio}
      onSelect={onSelectHandler}
      id={rowId}
      name={`${rowId}-name`}
      className={cx([
        checkboxClass,
        cellProps.className,
        {
          [`${checkboxClass}-sticky-left`]:
            isFirstColumnStickyLeft && windowSize > 671,
        },
      ])}
      ariaLabel={title}
      disabled={selectDisabled}
    />
  );
};

export default useSelectRows;
