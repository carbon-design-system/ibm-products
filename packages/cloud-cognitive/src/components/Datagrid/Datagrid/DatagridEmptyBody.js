/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2020
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
import React from 'react';
import { pkg } from '../../../settings';
<<<<<<< HEAD
import { DataTable } from '@carbon/react';
import { NoDataEmptyState } from '../../EmptyStates/NoDataEmptyState';
=======
import { DataTable } from 'carbon-components-react';
import { NoDataEmptyState, ErrorEmptyState } from '../../EmptyStates';
>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8

const blockClass = `${pkg.prefix}--datagrid`;

const { TableBody, TableRow, TableCell } = DataTable;

const DatagridEmptyBody = (datagridState) => {
  const {
    getTableBodyProps,
    headers,
    emptyStateTitle,
    emptyStateDescription,
    emptyStateSize,
    emptyStateType = 'noData',
    illustrationTheme,
  } = datagridState;

  return (
    <TableBody
      {...getTableBodyProps()}
      className={`${blockClass}__empty-state-body`}
    >
      <TableRow>
        <TableCell colSpan={headers.length}>
          {emptyStateType === 'error' && (
            <ErrorEmptyState
              illustrationTheme={illustrationTheme}
              size={emptyStateSize}
              title={emptyStateTitle}
              subtitle={emptyStateDescription}
            />
          )}
          {emptyStateType === 'noData' && (
            <NoDataEmptyState
              illustrationTheme={illustrationTheme}
              size={emptyStateSize}
              title={emptyStateTitle}
              subtitle={emptyStateDescription}
            />
          )}
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default DatagridEmptyBody;
