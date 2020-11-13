//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import { storiesOf } from '@storybook/react';
import IdeDataTable, {
  TableHeader,
  TableToolbarSearch,
} from './IdeDataTable.js';
import { withKnobs, select, number } from '@storybook/addon-knobs';
import { Error16 } from '@carbon/icons-react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { headers, rows } from './fixtures/table.data.js';
import { Information16 } from '@carbon/icons-react';
import { getComponentLabel } from '../../component_helpers/StorybookHelper';
import styles from './_storybook.scss';

let displayRows = rows.slice(0, 20);

storiesOf(getComponentLabel('IdeDataTable'), module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .addParameters({ styles, layout: 'fullscreen' })
  .add('default', () => (
    <IdeDataTable
      rows={displayRows}
      headers={headers}
      onClick={action('row clicked')}
    />
  ))
  .add('selectable', () => {
    return (
      <IdeDataTable
        rows={displayRows}
        headers={headers}
        selectType={select(
          'Enable select',
          {
            Single: 'single',
            Multiple: 'multi',
            None: '',
          },
          'multi'
        )}
        onSelect={action('selected row')}
      />
    );
  })
  .add('loading', () => {
    return (
      <IdeDataTable
        rows={displayRows}
        headers={headers}
        loading
        skeletonRowCount={number('Number of skeleton rows', 10)}
        onSelect={action('selected row')}
      />
    );
  })
  .add('jsx inside table header data', () => {
    const customHeaders = headers.map((header, index) => ({
      key: header.key,
      header: (
        <div>
          {`header-${index} `}
          <Error16 />
        </div>
      ),
    }));

    return <IdeDataTable rows={displayRows} headers={customHeaders} />;
  })
  .add('custom header render function', () => {
    const renderHeader = (headers) =>
      headers.map((header) => (
        <TableHeader key={headers.indexOf(header)}>
          {header.header}
          <Information16 />
        </TableHeader>
      ));
    return (
      <IdeDataTable
        rows={displayRows}
        headers={headers}
        renderHeader={renderHeader}
      />
    );
  })
  .add('jsx inside table row data', () => {
    const customRows = displayRows
      .map((row) => ({ id: row.id }))
      .map((row) =>
        headers.reduce((row, header, index) => {
          return {
            ...row,
            [header.key]: (
              <div>
                {`col-${index} `}
                <Error16 />
              </div>
            ),
          };
        }, row)
      );

    return <IdeDataTable rows={customRows} headers={headers} />;
  })
  .add('custom row render function', () => {
    const renderRow = (row) =>
      row.cells.map((cell, index) => (
        <td key={index}>
          <div>{cell.value}</div>
          <div>
            <strong>
              {index % 2 == 0 ? 'Even column sub row' : 'Odd column sub value'}
            </strong>
          </div>
        </td>
      ));
    return (
      <IdeDataTable
        rows={displayRows}
        headers={headers}
        renderRow={renderRow}
      />
    );
  })
  .add('expandable rows', () => {
    const renderExpanded = (row) => (
      <div>{`This is expandable for ${row.id}`}</div>
    );
    return (
      <IdeDataTable
        rows={displayRows}
        headers={headers}
        expandable
        renderExpandedRow={renderExpanded}
      />
    );
  })
  .add('with toolbar', () => {
    const renderToolbar = () => (
      <TableToolbarSearch onChange={action('Filter change')} />
    );
    return (
      <IdeDataTable
        rows={displayRows}
        headers={headers}
        renderToolbar={renderToolbar}
      />
    );
  })
  .add('custom actions', () => {
    const renderExpanded = (row) => (
      <div>{`This is expandable for ${row.id}`}</div>
    );
    const renderRow = (row, actions) => {
      const rows = row.cells.map((cell) => {
        const cellContent = ((header) => {
          switch (header) {
            case 'select': {
              return (
                <button type="button" onClick={actions.selectRow}>
                  Select
                </button>
              );
            }
            case 'expand': {
              return (
                <button type="button" onClick={actions.expandRow}>
                  Expand
                </button>
              );
            }
            default: {
              return cell.value;
            }
          }
        })(cell.info.header);
        return <td key={row.cells.indexOf(cell)}>{cellContent}</td>;
      });
      return rows;
    };
    const newHeaders = [
      ...headers,
      { header: 'expand', key: 'expand' },
      { header: 'select', key: 'select' },
    ];
    const newRows = displayRows.map((row) => ({
      ...row,
      expand: '',
      select: '',
    }));
    return (
      <IdeDataTable
        rows={newRows}
        headers={newHeaders}
        renderRow={renderRow}
        provideActions
        renderExpandedRow={renderExpanded}
      />
    );
  });
