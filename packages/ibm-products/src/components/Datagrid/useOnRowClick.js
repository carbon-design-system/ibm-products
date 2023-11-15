/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2020, 2023
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */

import { pkg, carbon } from '../../settings';

const useOnRowClick = (hooks) => {
  const useInstance = (rowInstance) => {
    const { onRowClick } = rowInstance;
    const getRowProps = (props, datagridState) => {
      const { isFetching, row, instance } = datagridState;
      const { id, toggleRowSelected } = row;
      const { withSelectRows, tableId } = instance;
      const onClick = (event) => {
        if (!isFetching && onRowClick) {
          onRowClick(row, event);
          // We do not want to change the list of selected rows if using the useSelectedRows hook, otherwise clicking on an entire row will mark the row as checked

          // Remove selected class from all other clickable rows as only one clickable row can be selected at a time
          const clickableSelectedRows = document.querySelectorAll(
            `#${tableId}.${pkg.prefix}--datagrid .${carbon.prefix}--data-table--selected:not(.${pkg.prefix}--datagrid__active-row)`
          );
          if (clickableSelectedRows.length) {
            Array.from(clickableSelectedRows).forEach((row) => {
              row.classList.remove(`${carbon.prefix}--data-table--selected`);
            });
          }
          const closestRow = event.target.closest(
            `.${pkg.prefix}--datagrid__carbon-row`
          );
          closestRow.classList.add(`${carbon.prefix}--data-table--selected`);

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
          onClick(event);
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
