/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2020 - 2021
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
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
} from 'react-table';
import uniqueId from 'lodash/uniqueId';
import useSkeletonRows from './useSkeletonRows';
import useDefaultStringRenderer from './useDefaultStringRenderer';
import useRowRenderer from './useRowRenderer';
import useRowSize from './useRowSize';
import useHeaderRow from './Datagrid/DatagridHeaderRow';
import useFlexResize from './useFlexResize';
import useFloatingScroll from './useFloatingScroll';

const useDatagrid = (params, ...plugins) => {
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
  const defaultEndPlugins = [
    usePagination,
    useRowSelect,
    useFlexResize,
    useFloatingScroll,
  ];
  const clientEndPlugins = params.endPlugins || [];

  const filterTypes = useMemo(
    () => ({
      betweenDates: (rows, id, [startDate, endDate]) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          if (
            rowValue.getTime() <= endDate.getTime() &&
            rowValue.getTime() >= startDate.getTime()
          ) {
            // In date range
            return true;
          } else {
            // Not in date range
            return false;
          }
        });
      },
    }),
    []
  );

  const tableId = useMemo(() => uniqueId('datagrid-table-id'), []);
  const tableState = useTable(
    { tableId, ...params, filterTypes },
    ...defaultPlugins,
    ...plugins,
    ...defaultEndPlugins,
    ...clientEndPlugins
  );
  return tableState;
};

export default useDatagrid;
