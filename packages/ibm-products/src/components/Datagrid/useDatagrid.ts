/**
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useMemo } from 'react';
import {
  useTable,
  useFlexLayout,
  useResizeColumns,
  useExpanded,
  useRowSelect,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
  TableInstance,
} from 'react-table';
import uniqueId from 'lodash/uniqueId';
import useSkeletonRows from './useSkeletonRows';
import useDefaultStringRenderer from './useDefaultStringRenderer';
import useRowRenderer from './useRowRenderer';
import useRowSize from './useRowSize';
import useHeaderRow from './Datagrid/DatagridHeaderRow';
import useFlexResize from './useFlexResize';
import useFloatingScroll from './useFloatingScroll';
import { stateReducer } from './Datagrid/addons/stateReducer';

const useDatagrid = (params, ...plugins): TableInstance => {
  const defaultPlugins = [
    useFlexLayout,
    useHeaderRow,
    useSkeletonRows,
    useResizeColumns,
    useRowRenderer,
    useDefaultStringRenderer,
    useRowSize,
    useFilters,
    useGlobalFilter,
    useSortBy,
    useExpanded,
  ];

  // Disable resizing
  if (params.disableResizing) {
    const resizeIndex = defaultPlugins.findIndex(
      (p) => p?.['pluginName'] === 'useResizeColumns'
    );
    defaultPlugins.splice(resizeIndex, 1);
  }
  const defaultEndPlugins = [
    usePagination,
    useRowSelect,
    useFlexResize,
    useFloatingScroll,
  ];
  const clientEndPlugins = params.endPlugins || [];

  const defaultColumn = {
    minWidth: 50,
  };

  const tableId = useMemo(() => uniqueId('datagrid-table-id'), []);
  const tableState = useTable(
    { tableId, ...params, stateReducer, defaultColumn },
    ...defaultPlugins,
    ...plugins,
    ...defaultEndPlugins,
    ...clientEndPlugins
  );

  return tableState;
};

export default useDatagrid;
