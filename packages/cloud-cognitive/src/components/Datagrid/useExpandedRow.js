/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2020
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
import { useState } from 'react';
import DatagridExpandedRow from './Datagrid/DatagridExpandedRow';
import useRowExpander from './useRowExpander';

const useExpandedRow = (hooks) => {
  useRowExpander(hooks);
  const useInstance = (instance) => {
    const { rows, expandedContentHeight, ExpandedRowContentComponent } =
      instance;
    const [expandedRowsHeight, setExpandedRowsHeight] = useState({});
    const setExpandedRowHeight = (rowIndex, height) =>
      setExpandedRowsHeight({ ...expandedRowsHeight, [rowIndex]: height });
    const rowsWithExpand = rows.map((row) => ({
      ...row,
      canExpand: row.original && !row.original.notExpandable,
      expandedContentHeight:
        expandedRowsHeight[row.index] || expandedContentHeight,
      // RowRenderer: DatagridExpandedRow(row.RowRenderer, expansionRenderer),
      RowRenderer: DatagridExpandedRow(
        row.RowRenderer,
        ExpandedRowContentComponent
      ),
    }));
    Object.assign(instance, { rows: rowsWithExpand, setExpandedRowHeight });
  };
  hooks.useInstance.push(useInstance);
};

export default useExpandedRow;
