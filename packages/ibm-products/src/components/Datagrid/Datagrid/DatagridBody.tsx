/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2021
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
import React from 'react';
import DatagridEmptyBody from './DatagridEmptyBody';
import DatagridVirtualBody from './DatagridVirtualBody';
import DatagridSimpleBody from './DatagridSimpleBody';
import DatagridRefBody from './DatagridRefBody';
import { DataGridState } from '../types';

const DatagridBody = (datagridState: DataGridState) => {
  const {
    isFetching,
    rows = [],
    withVirtualScroll,
    withStickyColumn,
  } = datagridState;

  if (!isFetching && rows.length === 0) {
    return <DatagridEmptyBody {...datagridState} />;
  }
  if (withVirtualScroll) {
    return <DatagridVirtualBody {...datagridState} />;
  }
  if (withStickyColumn) {
    return <DatagridRefBody {...datagridState} />;
  }
  return <DatagridSimpleBody {...datagridState} />;
};

export default DatagridBody;
