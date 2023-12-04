/**
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useLayoutEffect, useState } from 'react';
import cx from 'classnames';
import { TableSelectRow } from 'carbon-components-react';
import { SelectAll } from './Datagrid/DatagridSelectAll';
import { selectionColumnId } from './common-column-ids';
import { pkg, carbon } from '../../settings';
import { handleToggleRowSelected } from './Datagrid/addons/stateReducer';

const blockClass = `${pkg.prefix}--datagrid`;
const checkboxClass = `${blockClass}__checkbox-cell`;

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
  hooks.visibleColumns.push((columns) => {
    // Ensures that the first column is the row expander in the
    // case of selected rows and expandable rows being used together
    const newColOrder = [...columns];
    const expanderColumnIndex = newColOrder.findIndex(
      (col) => col.id === 'expander'
    );
    const expanderCol =
      expanderColumnIndex > -1
        ? newColOrder.splice(expanderColumnIndex, 1)
        : [];
    return [
      ...(expanderColumnIndex > -1 && expanderCol && expanderCol.length
        ? expanderCol
        : []),
      {
        id: selectionColumnId,
        Header: (gridState) => <SelectAll {...gridState} />,
        Cell: (gridState) => <SelectRow {...gridState} />,
      },
      ...newColOrder,
    ];
  });
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
    getRowId,
  } = datagridState;

  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useLayoutEffect(() => {
    function updateSize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const selectDisabled = isFetching || row.getRowProps().selectDisabled;
  const { onChange, title, ...selectProps } = row.getToggleRowSelectedProps();
  const cellProps = cell.getCellProps();
  const isFirstColumnStickyLeft =
    columns[0]?.sticky === 'left' && withStickyColumn;
  const onSelectHandler = (event) => {
    event.stopPropagation(); // avoid triggering onRowClick
    if (radio) {
      toggleAllRowsSelected(false);
      if (onRadioSelect) {
        onRadioSelect(row);
      }
    }
    onChange(event);
    onRowSelect?.(row, event);
    handleToggleRowSelected({
      dispatch,
      rowData: row,
      isChecked: event.target.checked,
      getRowId,
    });
  };
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
        `${checkboxClass}__checkbox-cell`,
        cellProps.className,
        {
          [`${checkboxClass}-sticky-left`]:
            isFirstColumnStickyLeft && windowSize > 671,
        },
      ])}
      ariaLabel={title} // TODO: aria label should be i18n'ed
      disabled={selectDisabled}
    />
  );
};

export default useSelectRows;
