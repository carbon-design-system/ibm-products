/**
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { DataTable, Button } from '@carbon/react';
import { Download, Filter, Add, Restart } from '@carbon/react/icons';
import { action } from '@storybook/addon-actions';
import { pkg } from '../../../settings';
import { ButtonMenu, ButtonMenuItem } from '../../ButtonMenu';
import { FilterFlyout } from '../Datagrid/addons/Filtering';

const blockClass = `${pkg.prefix}--datagrid`;
export const DatagridActions = (datagridState) => {
  const {
    selectedFlatRows,
    setGlobalFilter,
    CustomizeColumnsButton,
    RowSizeDropdown,
    rowSizeDropdownProps,
    useDenseHeader,
    filterProps,
    getFilterFlyoutProps,
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

  const renderFilterFlyout = () =>
    filterProps?.variation === 'flyout' && (
      <FilterFlyout {...getFilterFlyoutProps()} />
    );

  return (
    isNothingSelected &&
    (useDenseHeader && useDenseHeader ? (
      <TableToolbarContent size="sm">
        <div style={style}>
          <Button
            kind="ghost"
            hasIconOnly
            tooltipPosition="bottom"
            renderIcon={(props) => <Download size={16} {...props} />}
            iconDescription={'Download CSV'}
            onClick={downloadCsv}
          />
        </div>
        <div style={style}>
          <Button
            kind="ghost"
            hasIconOnly
            tooltipPosition="bottom"
            renderIcon={(props) => <Filter size={16} {...props} />}
            iconDescription={'Left panel'}
            onClick={leftPanelClick}
          />
        </div>
        {renderFilterFlyout()}
        <RowSizeDropdown {...rowSizeDropdownProps} />
        <div style={style} className={`${blockClass}__toolbar-divider`}>
          <Button
            kind="ghost"
            renderIcon={(props) => <Add size={16} {...props} />}
            iconDescription={'Action'}
          >
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
          renderIcon={(props) => <Filter size={16} {...props} />}
          iconDescription={'Left panel'}
          onClick={leftPanelClick}
        />
        <TableToolbarContent>
          <TableToolbarSearch
            size="lg"
            id="columnSearch"
            persistent
            placeholder={searchForAColumn}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
          {renderFilterFlyout()}
          <RowSizeDropdown {...rowSizeDropdownProps} />
          <div style={style}>
            <Button
              kind="ghost"
              hasIconOnly
              tooltipPosition="bottom"
              renderIcon={(props) => <Restart size={16} {...props} />}
              iconDescription={'Refresh'}
              onClick={refreshColumns}
            />
          </div>
          <div style={style}>
            <Button
              kind="ghost"
              hasIconOnly
              tooltipPosition="bottom"
              renderIcon={(props) => <Download size={16} {...props} />}
              iconDescription={'Download CSV'}
              onClick={downloadCsv}
            />
          </div>
          {CustomizeColumnsButton && (
            <div style={style}>
              <CustomizeColumnsButton />
            </div>
          )}
          <ButtonMenu
            menuAriaLabel="Primary action button menu"
            label="Primary button"
            renderIcon={(props) => <Add size={16} {...props} />}
          >
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
