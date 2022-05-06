/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2020
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
import React from 'react';
import { DataTable } from '@carbon/react';
import { pkg } from '../../../settings';

const blockClass = `${pkg.prefix}--datagrid`;

const { TableToolbar } = DataTable;

const DatagridToolbar = (datagridState) => {
  const { DatagridActions, DatagridBatchActions } = datagridState;

  return DatagridActions || DatagridBatchActions ? (
    <div className={`${blockClass}__table-toolbar`}>
      <TableToolbar>
        {DatagridActions && DatagridActions(datagridState)}
        {DatagridBatchActions && DatagridBatchActions(datagridState)}
      </TableToolbar>
    </div>
  ) : null;
};

export default DatagridToolbar;
