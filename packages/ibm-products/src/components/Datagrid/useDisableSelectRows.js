/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2020
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */

const useDisableSelectRows = (hooks) => {
  updateSelectAll(hooks);
  updatePageSelectAll(hooks);

  const getRowProps = (props, { row, instance }) => [
    props,
    {
      selectDisabled:
        instance.shouldDisableSelectRow && instance.shouldDisableSelectRow(row),
    },
  ];
  hooks.getRowProps.push(getRowProps);
};

const updateSelectAll = (hooks) => {
  const getToggleAllRowsSelectedProps = (props, { instance }) => {
    const selectableRows = instance.rows.filter(
      (row) =>
        !(
          instance.shouldDisableSelectRow &&
          instance.shouldDisableSelectRow(row)
        )
    );
    const isAllRowsSelected =
      selectableRows.length > 0 &&
      selectableRows.every(({ id }) => instance.state.selectedRowIds[id]);
    return [
      props,
      {
        onChange: (e) => {
          selectableRows.forEach((row) =>
            row.toggleRowSelected(e.target.checked)
          );
        },
        style: { cursor: 'pointer' },
        checked: isAllRowsSelected,
        disabled: instance.disableSelectAll,
        title:
          instance?.disableSelectRowsProps?.labels?.toggleAllRowsLabel ||
          'Toggle All Rows Selected',
        indeterminate: Boolean(
          !isAllRowsSelected &&
            Object.keys(instance.state.selectedRowIds).length
        ),
      },
    ];
  };
  hooks.getToggleAllRowsSelectedProps.push(getToggleAllRowsSelectedProps);
};

const updatePageSelectAll = (hooks) => {
  const getToggleAllPageRowsSelectedProps = (props, { instance }) => {
    const selectableRows = instance.page.filter(
      (row) =>
        !(
          instance.shouldDisableSelectRow &&
          instance.shouldDisableSelectRow(row)
        )
    );
    const isAllRowsSelected =
      selectableRows.length > 0 &&
      selectableRows.every(({ id }) => instance.state.selectedRowIds[id]);
    return [
      props,
      {
        onChange: (e) => {
          selectableRows.forEach((row) =>
            row.toggleRowSelected(e.target.checked)
          );
        },
        style: { cursor: 'pointer' },
        checked: isAllRowsSelected,
        disabled: instance.disableSelectAll,
        title:
          instance?.disableSelectRowsProps?.labels?.toggleAllRowsLabel ||
          'Toggle All Rows Selected',
        indeterminate: Boolean(
          !isAllRowsSelected &&
            instance.page.some(({ id }) => instance.state.selectedRowIds[id])
        ),
      },
    ];
  };
  hooks.getToggleAllPageRowsSelectedProps.push(
    getToggleAllPageRowsSelectedProps
  );
};

export default useDisableSelectRows;
