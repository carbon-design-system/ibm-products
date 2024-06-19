/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2020
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */

import { Hooks, Row, RowPropGetter, TableRowProps } from 'react-table';
import { DataGridTableInstance, DatagridRow } from './types';

interface PropGetterMeta {
  instance?: DataGridTableInstance;
  row?: Partial<Row<any> & DatagridRow<any>>;
}

const useDisableSelectRows = (hooks: Hooks) => {
  updateSelectAll(hooks);
  updatePageSelectAll(hooks);

  const getRowProps: RowPropGetter<any> = (
    props: Partial<TableRowProps>,
    { row, instance }: PropGetterMeta
  ) =>
    [
      props,
      {
        disabled: instance?.shouldDisableSelectRow?.(row),
      },
    ] as Partial<TableRowProps>[];

  hooks.getRowProps.push(getRowProps);
};

const updateSelectAll = (hooks: Hooks) => {
  const getToggleAllRowsSelectedProps: RowPropGetter<any> = (
    props: Partial<TableRowProps>,
    { instance }: PropGetterMeta
  ) => {
    const selectableRows =
      instance?.rows?.filter(
        (row) =>
          !(
            instance.shouldDisableSelectRow &&
            instance.shouldDisableSelectRow(row)
          )
      ) || [];
    const isAllRowsSelected =
      selectableRows?.length > 0 &&
      selectableRows.every(({ id }) => instance?.state?.selectedRowIds?.[id]);
    return [
      props,
      {
        onChange: (e) => {
          selectableRows.forEach((row) =>
            (row as DatagridRow)?.toggleRowSelected?.(e.target.checked)
          );
        },
        style: { cursor: 'pointer' },
        checked: isAllRowsSelected,
        disabled: instance?.disableSelectAll,
        title:
          instance?.disableSelectRowsProps?.labels?.toggleAllRowsLabel ||
          'Toggle All Rows Selected',
        indeterminate: Boolean(
          !isAllRowsSelected &&
            Object.keys(instance?.state?.selectedRowIds || {}).length
        ),
      },
    ];
  };
  hooks.getToggleAllRowsSelectedProps.push(getToggleAllRowsSelectedProps);
};

const updatePageSelectAll = (hooks: Hooks) => {
  const getToggleAllPageRowsSelectedProps = (
    props: Partial<TableRowProps>,
    { instance }: PropGetterMeta
  ) => {
    const selectableRows =
      instance?.page?.filter(
        (row) =>
          !(
            instance.shouldDisableSelectRow &&
            instance.shouldDisableSelectRow(row)
          )
      ) || [];
    const isAllRowsSelected =
      selectableRows?.length > 0 &&
      selectableRows.every(({ id }) => instance?.state?.selectedRowIds?.[id]);
    return [
      props,
      {
        onChange: (e) => {
          selectableRows.forEach((row) =>
            (row as DatagridRow).toggleRowSelected(e.target.checked)
          );
        },
        style: { cursor: 'pointer' },
        checked: isAllRowsSelected,
        disabled: instance?.disableSelectAll,
        title:
          instance?.disableSelectRowsProps?.labels?.toggleAllRowsLabel ||
          'Toggle All Rows Selected',
        indeterminate: Boolean(
          !isAllRowsSelected &&
            instance?.page?.some(
              ({ id }) => instance?.state?.selectedRowIds?.[id]
            )
        ),
      },
    ];
  };
  hooks.getToggleAllPageRowsSelectedProps.push(
    getToggleAllPageRowsSelectedProps
  );
};

export default useDisableSelectRows;
