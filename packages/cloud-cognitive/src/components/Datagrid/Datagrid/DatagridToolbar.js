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

const DatagridBatchActionsToolbar = (datagridState) => {
  const { selectedFlatRows, toggleAllRowsSelected, toolbarActions } =
    datagridState;
  const totalSelected = selectedFlatRows && selectedFlatRows.length;

  const selectAllButtonText = toolbarActions['selectAllButton'].name;
  const actionButtonText = toolbarActions['actionButton'].name;

  if (Object.keys(toolbarActions).length + 1 >= 4) {
    return (
      <TableBatchActions
        shouldShowBatchActions={totalSelected > 0}
        totalSelected={totalSelected}
        onCancel={() => toggleAllRowsSelected(false)}
      >
        <OverflowMenu>
          <OverflowMenuItem
            itemText={selectAllButtonText}
            onClick={() => {
              toggleAllRowsSelected(true);
              alert('Select All');
            }}
          ></OverflowMenuItem>

          <OverflowMenuItem
            itemText={actionButtonText}
            onClick={() => {
              alert('Action');
            }}
          ></OverflowMenuItem>
        </OverflowMenu>
      </TableBatchActions>
    );
  }

  const onBatchAction = () => alert('Batch action');
  const actionName = 'Action';
  const selectAll = 'Select All';

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
  const { DatagridActions, DatagridBatchActions, batchActions } = datagridState;

  return batchActions && DatagridActions ? (
    <div className={`${blockClass}__table-toolbar`}>
      <TableToolbar>
        {DatagridActions && DatagridActions(datagridState)}
        {DatagridBatchActionsToolbar &&
          DatagridBatchActionsToolbar(datagridState)}
      </TableToolbar>
    </div>
  ) : (
    <div className={`${blockClass}__table-toolbar`}>
      <TableToolbar>
        {DatagridActions && DatagridActions(datagridState)}
        {DatagridBatchActions && DatagridBatchActions(datagridState)}
      </TableToolbar>
    </div>
  );
};

export default DatagridToolbar;
