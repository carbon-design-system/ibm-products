/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2020, 2023
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */

const useOnRowClick = (hooks) => {
  const useInstance = (rowInstance) => {
    const { onRowClick } = rowInstance;
    const getRowProps = (props, datagridState) => {
      const { isFetching, row, instance } = datagridState;
      const { id, toggleRowSelected } = row;
      const { withSelectRows } = instance;
      const onClick = (event) => {
        if (!isFetching && onRowClick) {
          onRowClick(row, event);
          // We do not want to change the list of selected rows if using the useSelectedRows hook, otherwise clicking on an entire row will mark the row as checked
          if (!withSelectRows) {
            instance.selectedFlatRows &&
              instance.selectedFlatRows.map((toggleRow) =>
                toggleRow.toggleRowSelected(false)
              );
            toggleRowSelected(id, true);
          }
        }
      };

      const onKeyDown = (event) => {
        const { key } = event;
        if (key === 'Enter') {
          onClick();
        }
      };

      return [
        props,
        { onClick, onKeyDown },
        {
          tabIndex: 0,
          style: {
            cursor: 'pointer',
          },
        },
      ];
    };

    hooks.getRowProps.push(getRowProps);
  };
  hooks.useInstance.push(useInstance);
};

export default useOnRowClick;
