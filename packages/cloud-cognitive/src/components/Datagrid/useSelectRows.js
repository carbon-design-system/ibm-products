/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2023
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
// @flow
import React, { useLayoutEffect, useState } from 'react';
import cx from 'classnames';
import { TableSelectRow } from 'carbon-components-react';
import { SelectAll } from './Datagrid/DatagridSelectAll';
import { selectionColumnId } from './common-column-ids';
import { pkg, carbon } from '../../settings';

const blockClass = `${pkg.prefix}--datagrid`;

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
  const getRowProps = (props, { row }) => [
    props,
    {
      className: cx(
        `${blockClass}__carbon-row`,
        row.getToggleRowSelectedProps().checked
          ? `${carbon.prefix}--data-table--selected ${blockClass}__active-row`
          : ''
      ),
    },
  ];
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
  const { onChange, ...selectProps } = row.getToggleRowSelectedProps();
  const cellProps = cell.getCellProps();
  const isFirstColumnStickyLeft =
    columns[0]?.sticky === 'left' && withStickyColumn;
  return (
    <TableSelectRow
      {...cellProps}
      {...selectProps}
      radio={radio}
      onSelect={(e) => {
        e.stopPropagation(); // avoid triggering onRowClick
        if (radio) {
          toggleAllRowsSelected(false);
          if (onRadioSelect) {
            onRadioSelect(row);
          }
        }
        onChange(e);
        onRowSelect?.(row, e);
      }}
      id={`${tableId}-${row.index}`}
      name={`${tableId}-${row.index}-name`}
      className={cx(`${blockClass}__checkbox-cell`, cellProps.className, {
        [`${blockClass}__checkbox-cell-sticky-left`]:
          isFirstColumnStickyLeft && windowSize > 671,
      })}
      ariaLabel={`${tableId}-row-${row.index}`} // TODO: aria label should be i18n'ed
      disabled={selectDisabled}
    />
  );
};

export default useSelectRows;
