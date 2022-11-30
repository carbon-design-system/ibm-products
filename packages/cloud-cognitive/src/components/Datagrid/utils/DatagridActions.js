/**
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { DataTable, Button } from 'carbon-components-react';
import { Download16, Filter16, Add16, Restart16 } from '@carbon/icons-react';
import { action } from '@storybook/addon-actions';
import { pkg } from '../../../settings';
import { ButtonMenu, ButtonMenuItem } from '../../ButtonMenu';

const blockClass = `${pkg.prefix}--datagrid`;
export const DatagridActions = (datagridState) => {

  console.log(datagridState)
  const {
    selectedFlatRows,
    setGlobalFilter,
    CustomizeColumnsButton,
    RowSizeDropdown,
    rowSizeDropdownProps,
    useDenseHeader,
  } = datagridState;
  const downloadCsv = () => {
    alert('Downloading...');
  };
  const { TableToolbarContent, TableToolbarSearch } = DataTable;

  const refreshColumns = () => {
    alert('refreshing...');
  };
  const leftPanelClick = () => {
    alert('open/close left panel...');
  };
  const searchForAColumn = 'Search';
  const isNothingSelected = selectedFlatRows.length === 0;
  const style = {
    'button:nth-child(1) > span:nth-child(1)': {
      bottom: '-37px',
    },
  };

  return (
    isNothingSelected &&
    (useDenseHeader && useDenseHeader ? (
      <TableToolbarContent size="sm">
        <div style={style}>
          <Button
            kind="ghost"
            hasIconOnly
            tooltipPosition="bottom"
            renderIcon={Download16}
            iconDescription={'Download CSV'}
            onClick={downloadCsv}
          />
        </div>
        <div style={style}>
          <Button
            kind="ghost"
            hasIconOnly
            tooltipPosition="bottom"
            renderIcon={Filter16}
            iconDescription={'Left panel'}
            onClick={leftPanelClick}
          />
        </div>
        <RowSizeDropdown {...rowSizeDropdownProps} />
        <div style={style} className={`${blockClass}__toolbar-divider`}>
          <Button kind="ghost" renderIcon={Add16} iconDescription={'Action'}>
            Ghost button
          </Button>
        </div>

        {CustomizeColumnsButton && (
          <div style={style}>
            <CustomizeColumnsButton />
          </div>
        )}
      </TableToolbarContent>
    ) : (
      <>
        <Button
          kind="ghost"
          hasIconOnly
          tooltipPosition="bottom"
          renderIcon={Filter16}
          iconDescription={'Left panel'}
          onClick={leftPanelClick}
        />
        <TableToolbarContent>
          <TableToolbarSearch
            size="xl"
            id="columnSearch"
            persistent
            placeHolderText={searchForAColumn}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
          <RowSizeDropdown {...rowSizeDropdownProps} />
          <div style={style}>
            <Button
              kind="ghost"
              hasIconOnly
              tooltipPosition="bottom"
              renderIcon={Restart16}
              iconDescription={'Refresh'}
              onClick={refreshColumns}
            />
          </div>
          <div style={style}>
            <Button
              kind="ghost"
              hasIconOnly
              tooltipPosition="bottom"
              renderIcon={Download16}
              iconDescription={'Download CSV'}
              onClick={downloadCsv}
            />
          </div>
          {CustomizeColumnsButton && (
            <div style={style}>
              <CustomizeColumnsButton />
            </div>
          )}
          <ButtonMenu label="Primary button" renderIcon={Add16}>
            <ButtonMenuItem
              itemText="Option 1"
              onClick={action(`Click on ButtonMenu Option 1`)}
            />
            <ButtonMenuItem
              itemText="Option 2"
              onClick={action(`Click on ButtonMenu Option 2`)}
            />
            <ButtonMenuItem
              itemText="Option 3"
              onClick={action(`Click on ButtonMenu Option 3`)}
            />
          </ButtonMenu>
        </TableToolbarContent>
      </>
    ))
  );
};
