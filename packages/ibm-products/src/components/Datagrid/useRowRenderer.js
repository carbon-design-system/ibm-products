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
    const { rows, state } = instance;
    console.log(rows, state.dynamicRowSkeleton);
    let newRows = null;
    if (state?.dynamicRowSkeleton) {
      const depthIndexArray = state?.dynamicRowSkeleton?.id
        .split('')
        .filter((r) => r !== '.');
      if (depthIndexArray.length > 1) {
        let subRows;
        let finalRow;
        // This will find the subRow that requested to find dynamic rows
        // and will apply the skeleton row after that row
        depthIndexArray.map((depthIndex, index) => {
          if (index === 0) {
            subRows = rows[depthIndex].subRows;
            return;
          }
          if (depthIndexArray.length - 1 === index) {
            finalRow = subRows.find((r) => r.index === parseInt(depthIndex));
            subRows.splice(finalRow.index + 1, 0, state?.dynamicRowSkeleton); // + 1 because we want to add the skeleton row after the row initiating the dynamic request
            return;
          }
          const foundRow = subRows.find(
            (r) => r.index === parseInt(depthIndex)
          );
          subRows = foundRow.subRows;
        });
      }
      const rootRowIndexWithDynamicRow = rows.findIndex(
        (r) => r.id === state?.dynamicRowSkeleton?.id
      );
      console.log(rootRowIndexWithDynamicRow);
      if (rootRowIndexWithDynamicRow > -1) {
        newRows = [
          ...rows.slice(0, rootRowIndexWithDynamicRow + 1), // + 1 because we want to add the skeleton row after the row initiating the dynamic request
          state?.dynamicRowSkeleton,
          ...rows.slice(rootRowIndexWithDynamicRow + 1),
        ];
      }
    }
    newRows = newRows ?? rows;
    console.log(newRows);
    const addRowRenderer = (row) =>
      Object.assign(row, {
        RowRenderer: DatagridRow,
        subRows: (row.subRows || []).map(addRowRenderer),
      });
    const rowsWithRenderer = newRows.map(addRowRenderer);
    Object.assign(instance, { rows: rowsWithRenderer });
  };
  hooks.useInstance.push(useInstance);
};

export default useRowRenderer;
