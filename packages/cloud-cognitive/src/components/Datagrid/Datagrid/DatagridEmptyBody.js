/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2020
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
import React from 'react';
import { pkg } from '../../../settings';
import { DataTable } from 'carbon-components-react';
import { NoDataEmptyState } from '../../EmptyStates/NoDataEmptyState';

const blockClass = `${pkg.prefix}--datagrid`;

const { TableBody, TableRow, TableCell } = DataTable;

const DatagridEmptyBody = (datagridState) => {
  const {
    getTableBodyProps,
    headers,
    emptyStateTitle,
    emptyStateDescription,
    emptyStateSize,
    illustrationTheme,
  } = datagridState;

  return (
    <TableBody
      {...getTableBodyProps()}
      className={`${blockClass}__empty-state-body`}
    >
      <TableRow>
        <TableCell colSpan={headers.length}>
          <NoDataEmptyState
            illustrationTheme={illustrationTheme}
            size={emptyStateSize}
            title={emptyStateTitle}
            subtitle={emptyStateDescription}
          />
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default DatagridEmptyBody;
