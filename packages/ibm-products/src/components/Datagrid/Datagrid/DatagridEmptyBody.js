/**
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { pkg } from '../../../settings';
import { DataTable } from 'carbon-components-react';
import {
  NoDataEmptyState,
  ErrorEmptyState,
  NotFoundEmptyState,
} from '../../EmptyStates';

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
    emptyStateAction,
    emptyStateLink,
  } = datagridState;

  const emptyStateProps = {
    illustrationTheme,
    size: emptyStateSize,
    title: emptyStateTitle,
    subtitle: emptyStateDescription,
    action: emptyStateAction,
    link: emptyStateLink,
  };

  return (
    <TableBody
      {...getTableBodyProps({ role: false })}
      className={`${blockClass}__empty-state-body`}
    >
      <TableRow>
        <TableCell colSpan={headers.length}>
          {emptyStateType === 'error' && (
            <ErrorEmptyState {...emptyStateProps} />
          )}
          {emptyStateType === 'noData' && (
            <NoDataEmptyState {...emptyStateProps} />
          )}
          {emptyStateType === 'notFound' && (
            <NotFoundEmptyState {...emptyStateProps} />
          )}
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default DatagridEmptyBody;
