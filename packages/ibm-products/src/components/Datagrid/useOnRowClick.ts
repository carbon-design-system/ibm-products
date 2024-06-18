/**
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Hooks, TableInstance } from 'react-table';
import { pkg, carbon } from '../../settings';
import { DataGridState } from './types';

const useOnRowClick = (hooks: Hooks) => {
  const useInstance = (rowInstance: TableInstance) => {
    const { onRowClick } = rowInstance as DataGridState;
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
          const closestRow = event.currentTarget.closest('tr');
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
