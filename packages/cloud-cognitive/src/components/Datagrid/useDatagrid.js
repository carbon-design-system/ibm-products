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

  // Start of the refactor
  const checkIfPascalCase = (word) => {
    const pattern = /^[A-Z][A-Za-z]*$/;
    return pattern.test(word);
  };

  // Create a new object to seperate props that we own vs react-table
  const c4pParams = {};

  // Check each key in the params sent in by the user
  Object.keys(params).forEach((key) => {
    // For each key check if the key is pascal case, if it is pascal case
    // we can assume that the value is a component
    if (checkIfPascalCase(key)) {
      // Add it to our own seperate obj
      c4pParams[key] = params[key];

      // TODO: use prepareProps here
      // Delete it from the original object
      delete params[key];
    }
  });

  // End of the refactor

  const tableId = useMemo(() => uniqueId('datagrid-table-id'), []);
  const tableState = useTable(
    { tableId, ...params },
    ...defaultPlugins,
    ...plugins,
    ...defaultEndPlugins,
    ...clientEndPlugins
  );

  return {
    ...tableState,
    ...c4pParams,
  };
};

export default useDatagrid;
