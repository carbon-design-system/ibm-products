/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2021
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
import React from 'react';
import cx from 'classnames';
import { pkg } from '../../../settings';

const blockClass = `${pkg.prefix}--datagrid`;

// TableBody from carbon is a functional component
// hence no way to pass the ref to html element without changes in carbon side
// define html directly here.
// ref should be passed in thru getTableBodyProps
const DatagridRefBody = (datagridState) => {
  const { getTableBodyProps, rows, prepareRow } = datagridState;
  return (
    <tbody
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
    </tbody>
  );
};

export default DatagridRefBody;
