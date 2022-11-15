/**
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { DataTable } from 'carbon-components-react';

const { TableHead } = DataTable;

const DatagridHead = (datagridState) => {
  const { headerGroups = [], headRef, HeaderRow } = datagridState;
  return (
    <TableHead>
      {headerGroups.map((headerGroup, index) => (
        // doesn't support header grouping.
        <HeaderRow
          datagridState={datagridState}
          headerGroup={headerGroup}
          ref={headRef}
          key={`header__${index}`}
        />
      ))}
    </TableHead>
  );
};

export default DatagridHead;
