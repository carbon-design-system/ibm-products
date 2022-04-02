/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2020, 2021
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
import React from 'react';
import { DataTable } from 'carbon-components-react';

const { TableHead } = DataTable;

const DatagridHead = (datagridState) => {
  const { headerGroups, headRef, HeaderRow } = datagridState;

  return (
    <TableHead>
      {headerGroups.map((headerGroup, index) => (
        // doesn't support header grouping.
        <div
          {...headerGroup.getHeaderGroupProps()}
          ref={headRef}
          key={`header_${index}`}
        >
          {HeaderRow(datagridState)}
        </div>
      ))}
    </TableHead>
  );
};

export default DatagridHead;
