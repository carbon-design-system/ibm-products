/**
 * Copyright IBM Corp. 2022, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useRef, useState } from 'react';
import {
  TableToolbar,
  TableBatchActions,
  TableBatchAction,
  MenuButton,
  MenuItem,
} from '@carbon/react';
import { useResizeObserver } from '../../../global/js/hooks/useResizeObserver';
import { pkg, carbon } from '../../../settings';
import cx from 'classnames';

const blockClass = `${pkg.prefix}--datagrid`;

const DatagridBatchActionsToolbar = (datagridState, width, ref) => {
  const [displayAllInMenu, setDisplayAllInMenu] = useState(false);
  const [initialListWidth, setInitialListWidth] = useState(null);
  const [receivedInitialWidth, setReceivedInitialWidth] = useState(false);
  const {
    state: { selectedRowIds },
    toggleAllRowsSelected,
    toolbarBatchActions,
    setGlobalFilter,
    rows,
  } = datagridState;
  const totalSelected = Object.keys(selectedRowIds || {})?.length;

  // Get initial width of batch actions container,
  // used to measure when all items are put inside
  // the ButtonMenu
  useEffect(() => {
    if (totalSelected === 1 && !receivedInitialWidth) {
      const batchActionListWidth = ref.current.querySelector(
        `.${carbon.prefix}--action-list`
      ).offsetWidth;
      setInitialListWidth(batchActionListWidth);
      setReceivedInitialWidth(true);
    }
  }, [totalSelected, receivedInitialWidth, ref]);

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

  const getSelectedRowData = () => {
    const selectedRowIndexes = Object.keys(selectedRowIds);
    const selectedRowData =
      selectedRowIndexes && selectedRowIndexes.length
        ? selectedRowIndexes.map((rowIndex) => {
          const filteredRow = rows.filter(
            (row) => row.index === parseInt(rowIndex)
          );
          if (filteredRow.length) {
            return filteredRow[0];
          }
          return [];
        })
        : [];
    return selectedRowData;
  };

  // Render batch actions in ButtonMenu
  const renderBatchActionOverflow = () => {
    const minWidthBeforeOverflowIcon = 380;
    // Do not render ButtonMenu when there are 3 or less items
    // and if there is enough available space to render all the items
    if (toolbarBatchActions?.length <= 3 && !displayAllInMenu) {
      return null;
    }

    return (
      <MenuButton
        label="More"
        className={cx(`${blockClass}__button-menu`, {
          [`${blockClass}__button-menu--icon-only`]:
            width <= minWidthBeforeOverflowIcon,
        })}
      >
        {toolbarBatchActions &&
          toolbarBatchActions.map((batchAction, index) => {
            if (index < 2) {
              if (displayAllInMenu) {
                return (
                  <MenuItem
                    key={`${batchAction.label}-${index}`}
                    label={batchAction.label}
                    onClick={(event) => {
                      batchAction.onClick(getSelectedRowData(), event);
                      if (batchAction.type === 'select_all') {
                        toggleAllRowsSelected(true);
                      }
                    }}
                  />
                );
              }
              return null;
            }
            return (
              <MenuItem
                key={`${batchAction.label}-${index}`}
                itemText={batchAction.label}
                onClick={(event) => {
                  batchAction.onClick(getSelectedRowData(), event);
                  if (batchAction.type === 'select_all') {
                    toggleAllRowsSelected(true);
                  }
                }}
              />
            );
          })}
      </MenuButton>
    );
  };

  // Only display the first two batch actions, the rest are
  // displayed inside of the ButtonMenu if there are more than
  // 3 batch actions
  return (
    <TableBatchActions
      shouldShowBatchActions={totalSelected > 0}
      totalSelected={totalSelected}
      onCancel={() => {
        toggleAllRowsSelected(false);
        setGlobalFilter(null);
      }}
    >
      {!displayAllInMenu &&
        toolbarBatchActions &&
        toolbarBatchActions?.map((batchAction, index) => {
          if (
            (index < 2 && toolbarBatchActions.length > 3) ||
            (index < 3 && toolbarBatchActions.length <= 3)
          ) {
            return (
              <TableBatchAction
                key={`${batchAction.label}-${index}`}
                renderIcon={batchAction.renderIcon}
                onClick={(event) => {
                  batchAction.onClick(getSelectedRowData(), event);
                  if (batchAction.type === 'select_all') {
                    toggleAllRowsSelected(true);
                  }
                }}
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
  const ref = useRef(null);
  const { width } = useResizeObserver(ref);
  const { DatagridActions, DatagridBatchActions, batchActions, rowSize } =
    datagridState;

  const getRowHeight = rowSize ? rowSize : 'lg';

  return batchActions && DatagridActions ? (
    <div
      ref={ref}
      className={cx(
        `${blockClass}__table-toolbar`,
        `${blockClass}__table-toolbar--${getRowHeight}`
      )}
    >
      <TableToolbar>
        {DatagridActions && DatagridActions(datagridState)}
        {DatagridBatchActionsToolbar &&
          DatagridBatchActionsToolbar(datagridState, width, ref)}
      </TableToolbar>
    </div>
  ) : DatagridActions ? (
    <div className={`${blockClass}__table-toolbar`}>
      <TableToolbar>
        {DatagridActions && DatagridActions(datagridState)}
        {DatagridBatchActions && DatagridBatchActions(datagridState)}
      </TableToolbar>
    </div>
  ) : null;
};

export default DatagridToolbar;
