/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2020
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
import React from 'react';
import { DataTable } from 'carbon-components-react';
import { pkg } from '../../../settings';

import { OverflowMenu } from 'carbon-components-react';
import OverflowMenuItem from 'carbon-components-react/lib/components/OverflowMenuItem';
import { TableBatchActions } from 'carbon-components-react';
import { TableBatchAction } from 'carbon-components-react';
import { Activity16 } from '@carbon/icons-react';

const blockClass = `${pkg.prefix}--datagrid`;

const { TableToolbar } = DataTable;

const DatagridActions = (datagridState) => {
  const {
    selectedFlatRows,
    setGlobalFilter,
    RowSizeDropdown,
    rowSizeDropdownProps,
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

  // let numItemsToolbar = 5;

  return (
    isNothingSelected && (
      <React.Fragment>
        <OverflowMenu>
          <OverflowMenuItem
            itemText="Left Panel"
            onClick={leftPanelClick}
          ></OverflowMenuItem>
          <OverflowMenuItem
            itemText="Download CSV"
            onClick={downloadCsv}
          ></OverflowMenuItem>
          <OverflowMenuItem
            itemText="Refresh Columns"
            onClick={refreshColumns}
          ></OverflowMenuItem>
          <RowSizeDropdown {...rowSizeDropdownProps}></RowSizeDropdown>
        </OverflowMenu>
        <TableToolbarContent>
          <TableToolbarSearch
            size="xl"
            id="columnSearch"
            persistent
            placeHolderText={searchForAColumn}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
        </TableToolbarContent>
      </React.Fragment>
    )
  );
};

const DatagridBatchActions = (datagridState) => {
  const { selectedFlatRows, toggleAllRowsSelected } = datagridState;
  const totalSelected = selectedFlatRows && selectedFlatRows.length;
  const onBatchAction = () => alert('Batch action');
  const actionName = 'Action';
  const selectAll = 'Select All';
  // const selectAllButton = 'Select All';
  // const selectAllButtonAction = () => alert(`Select All}`);

  const selectAllButtonAction = () => {
    toggleAllRowsSelected(true);
    alert('Select All');
  };

  return (
    <TableBatchActions
      shouldShowBatchActions={totalSelected > 0}
      totalSelected={totalSelected}
      onCancel={() => toggleAllRowsSelected(false)}
    >
      {
        <TableBatchAction
          renderIcon={Activity16}
          onClick={selectAllButtonAction}
        >
          {selectAll}
        </TableBatchAction>
      }
      <TableBatchAction renderIcon={Activity16} onClick={onBatchAction}>
        {actionName}
      </TableBatchAction>
    </TableBatchActions>
  );
};

const DatagridToolbar = (datagridState) => {
  // const { DatagridActions, DatagridBatchActions } = datagridState;

  return DatagridActions ? (
    <div className={`${blockClass}__table-toolbar`}>
      <TableToolbar>
        {DatagridActions && DatagridActions(datagridState)}
        {DatagridBatchActions && DatagridBatchActions(datagridState)}
      </TableToolbar>
    </div>
  ) : null;
};

export default DatagridToolbar;
