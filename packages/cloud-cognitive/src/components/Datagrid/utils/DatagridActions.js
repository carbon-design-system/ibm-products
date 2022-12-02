/**
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Add16, Download16, Restart16 } from '@carbon/icons-react';
import { action } from '@storybook/addon-actions';
import { Button, DataTable } from 'carbon-components-react';
import React, { useContext, useMemo } from 'react';
import { pkg } from '../../../settings';
import { ButtonMenu, ButtonMenuItem } from '../../ButtonMenu';
import { Filter16 } from '@carbon/icons-react';
import { FilterContext, FilterFlyout } from '../Datagrid/addons/Filtering';

const blockClass = `${pkg.prefix}--datagrid`;

export const DatagridActions = (datagridState) => {
  const { setLeftPanelOpen } = useContext(FilterContext);
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

  const searchForAColumn = 'Search';
  const isNothingSelected = useMemo(
    () => selectedFlatRows.length === 0,
    [selectedFlatRows]
  );
  const style = useMemo(
    () => ({
      'button:nth-child(1) > span:nth-child(1)': {
        bottom: '-37px',
      },
    }),
    []
  );

  const renderFilterFlyout = () =>
    filterProps?.variation === 'flyout' && (
      <FilterFlyout {...getFilterFlyoutProps()} />
    );
    
  const renderFilterPanelButton = () =>
    filterProps?.variation === 'panel' &&  
    <Button
      kind="ghost"
      hasIconOnly
      tooltipPosition="bottom"
      renderIcon={Filter16}
      iconDescription={'Open filters'}
      className="filter-left-panel__button"
      onClick={() => setLeftPanelOpen(true)}
    /> 

  return (
    isNothingSelected &&
    (useDenseHeader && useDenseHeader ? (
      <TableToolbarContent size="sm">
        {renderFilterPanelButton()}
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
        {renderFilterFlyout()}
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
      <TableToolbarContent>
        {renderFilterPanelButton()}
        <TableToolbarSearch
          size="xl"
          id="columnSearch"
          persistent
          placeHolderText={searchForAColumn}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
        {renderFilterFlyout()}
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
    ))
  );
};
