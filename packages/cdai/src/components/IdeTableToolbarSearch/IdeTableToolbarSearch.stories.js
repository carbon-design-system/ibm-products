//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  DataTable,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
  TableToolbar,
  TableToolbarContent,
} from 'carbon-components-react';
import { IdeTableToolbarSearch } from '.';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { headers, rows } from '../IdeDataTable/fixtures/table.data.js';
import { getComponentLabel } from '../../component_helpers/StorybookHelper';
import styles from './_storybook.scss';

let displayRows = rows.slice(0, 20);

storiesOf(getComponentLabel('IdeTableToolbarSearch'), module)
  .addDecorator(withInfo)
  .addParameters({ styles, layout: 'fullscreen' })
  .add('default', () => {
    return (
      <DataTable
        rows={displayRows}
        headers={headers}
        render={({
          rows,
          headers,
          getHeaderProps,
          getRowProps,
          getTableProps,
          getTableContainerProps,
        }) => (
          <TableContainer
            title="DataTable"
            description="With toolbar"
            {...getTableContainerProps()}
          >
            <TableToolbar aria-label="data table toolbar">
              <TableToolbarContent>
                <IdeTableToolbarSearch onChange={action('Filter change')} />
              </TableToolbarContent>
            </TableToolbar>
            <Table {...getTableProps()}>
              <TableHead>
                <TableRow>
                  {headers.map((header) => (
                    <TableHeader
                      key={header.header}
                      {...getHeaderProps({ header })}
                    >
                      {header.header}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={rows.indexOf(row)} {...getRowProps({ row })}>
                    {row.cells.map((cell) => (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      />
    );
  });
