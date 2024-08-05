/**
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import DatagridRow from './Datagrid/DatagridRow';

const useRowRenderer = (hooks) => {
  const useInstance = (instance) => {
    const { rows } = instance;
    const addRowRenderer = (row) =>
      Object.assign(row, {
        RowRenderer: DatagridRow,
        subRows: (row.subRows || []).map(addRowRenderer),
      });
    const rowsWithRenderer = rows.map(addRowRenderer);
    Object.assign(instance, { rows: rowsWithRenderer });
  };
  hooks.useInstance.push(useInstance);
};

export default useRowRenderer;
