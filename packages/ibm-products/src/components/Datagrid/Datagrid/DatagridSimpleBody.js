/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2020
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
import React from 'react';
import { DataTable } from 'carbon-components-react';
import cx from 'classnames';
import { pkg } from '../../../settings';

const blockClass = `${pkg.prefix}--datagrid`;

const { TableBody } = DataTable;

const DatagridSimpleBody = (datagridState) => {
  const { getTableBodyProps, rows, prepareRow } = datagridState;
  return (
    <TableBody
      {...getTableBodyProps({ role: false })}
      className={cx(
        `${blockClass}__simple-body`,
        getTableBodyProps().className
      )}
    >
      {rows.map((row) => {
        prepareRow(row);
        return row.RowRenderer({ ...datagridState, row });
      })}
    </TableBody>
  );
};

export default DatagridSimpleBody;
