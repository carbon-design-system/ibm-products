/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2020
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
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
