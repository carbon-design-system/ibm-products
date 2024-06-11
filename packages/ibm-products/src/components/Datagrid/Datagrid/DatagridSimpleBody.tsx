/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2020
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
import React from 'react';
import { TableBody } from '@carbon/react';
import cx from 'classnames';
import { pkg } from '../../../settings';
import { DataGridState } from '../types';

const blockClass = `${pkg.prefix}--datagrid`;

const DatagridSimpleBody = (datagridState: DataGridState) => {
  const { getTableBodyProps, rows, prepareRow } = datagridState;
  return (
    <TableBody
      {...getTableBodyProps({ role: undefined })}
      aria-live={undefined}
      className={cx(
        `${blockClass}__simple-body`,
        getTableBodyProps().className
      )}
    >
      {rows.map((row) => {
        prepareRow(row);
        const { key } = row.getRowProps();
        return row?.RowRenderer?.({ ...datagridState, row, key });
      })}
    </TableBody>
  );
};

export default DatagridSimpleBody;
