/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useState } from 'react';
import { Add16, OverflowMenuVertical16 } from '@carbon/icons-react';
import {
  DataTable,
  TableBatchActions,
  TableBatchAction,
} from 'carbon-components-react';
import { useResizeDetector } from 'react-resize-detector';
import { ButtonMenu, ButtonMenuItem } from '../../ButtonMenu';
import { pkg, carbon } from '../../../settings';
import cx from 'classnames';

const blockClass = `${pkg.prefix}--datagrid`;

const { TableToolbar } = DataTable;

const DatagridBatchActionsToolbar = (datagridState, width, ref) => {
  const [displayAllInMenu, setDisplayAllInMenu] = useState(false);
  const [initialListWidth, setInitialListWidth] = useState(null);
  const { selectedFlatRows, toggleAllRowsSelected, toolbarActions } =
    datagridState;
  const totalSelected = selectedFlatRows && selectedFlatRows.length;

  useEffect(() => {
    if (totalSelected > 0) {
      const batchActionListWidth = ref.current.querySelector(
        `.${carbon.prefix}--action-list`
      ).offsetWidth;
      setInitialListWidth(batchActionListWidth);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalSelected]);

  useEffect(() => {
    const summaryWidth = ref.current.querySelector(
      `.${carbon.prefix}--batch-summary`
    ).offsetWidth;
    if (width < summaryWidth + initialListWidth + 32) {
      setDisplayAllInMenu(true);
    } else {
      setDisplayAllInMenu(false);
    }
  }, [width, ref, initialListWidth]);

  // Render batch actions in ButtonMenu
  const renderBatchActionOverflow = () => {
    const actionsClone = [...toolbarActions];
    return (
      <ButtonMenu
        label={width > 380 ? 'More' : null}
        renderIcon={width > 380 ? Add16 : OverflowMenuVertical16}
        className={cx(`${blockClass}__button-menu`, {
          [`${blockClass}__button-menu--icon-only`]: width <= 380,
        })}
      >
        {actionsClone.map((batchAction, index) => {
          if (index < 2) {
            if (displayAllInMenu) {
              return (
                <ButtonMenuItem
                  key={`${batchAction.label}-${index}`}
                  itemText={batchAction.label}
                  onClick={batchAction.onClick}
                />
              );
            }
            return null;
          }
          return (
            <ButtonMenuItem
              key={`${batchAction.label}-${index}`}
              itemText={batchAction.label}
              onClick={batchAction.onClick}
            />
          );
        })}
      </ButtonMenu>
    );
  };

  // Only display the first two batch actions, the rest are
  // displayed inside of the ButtonMenu
  return (
    <TableBatchActions
      shouldShowBatchActions={totalSelected > 0}
      totalSelected={totalSelected}
      onCancel={() => toggleAllRowsSelected(false)}
    >
      {!displayAllInMenu &&
        toolbarActions?.map((batchAction, index) => {
          if (index < 2) {
            return (
              <TableBatchAction
                key={`${batchAction.label}-${index}`}
                renderIcon={batchAction.renderIcon}
                onClick={batchAction.onClick}
                iconDescription={batchAction.label}
              >
                {batchAction.label}
              </TableBatchAction>
            );
          }
        })}
      {renderBatchActionOverflow()}
    </TableBatchActions>
  );
};

const DatagridToolbar = (datagridState) => {
  const { width, ref } = useResizeDetector();
  const { DatagridActions, DatagridBatchActions, batchActions } = datagridState;

  return batchActions && DatagridActions ? (
    <div ref={ref} className={`${blockClass}__table-toolbar`}>
      <TableToolbar>
        {DatagridActions && DatagridActions(datagridState)}
        {DatagridBatchActionsToolbar &&
          DatagridBatchActionsToolbar(datagridState, width, ref)}
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
