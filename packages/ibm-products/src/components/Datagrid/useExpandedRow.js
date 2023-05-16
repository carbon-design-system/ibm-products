/**
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useEffect, useState } from 'react';
import { pkg } from '../../settings';
import DatagridExpandedRow from './Datagrid/DatagridExpandedRow';
import useRowExpander from './useRowExpander';

const useExpandedRow = (hooks) => {
  useEffect(() => {
    pkg.checkReportFeatureEnabled('Datagrid.useExpandedRow');
  }, []);

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
