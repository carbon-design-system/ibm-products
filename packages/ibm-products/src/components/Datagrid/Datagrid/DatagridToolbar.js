/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useRef, useState } from 'react';
import { Add16, OverflowMenuVertical16 } from '@carbon/icons-react';
import {
  DataTable,
  TableBatchActions,
  TableBatchAction,
} from 'carbon-components-react';
import { useResizeObserver } from '../../../global/js/hooks/useResizeObserver';
import { ButtonMenu, ButtonMenuItem } from '../../ButtonMenu';
import { pkg, carbon } from '../../../settings';
import cx from 'classnames';

const blockClass = `${pkg.prefix}--datagrid`;

const { TableToolbar } = DataTable;

const DatagridBatchActionsToolbar = (datagridState, width, ref) => {
  const [displayAllInMenu, setDisplayAllInMenu] = useState(false);
  const [initialListWidth, setInitialListWidth] = useState(null);
  const [receivedInitialWidth, setReceivedInitialWidth] = useState(false);
  const {
    selectedFlatRows,
    toggleAllRowsSelected,
    toolbarBatchActions,
    setGlobalFilter,
  } = datagridState;
  const totalSelected = selectedFlatRows && selectedFlatRows.length;

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

  // Render batch actions in ButtonMenu
  const renderBatchActionOverflow = () => {
    const minWidthBeforeOverflowIcon = 380;
    // Do not render ButtonMenu when there are 3 or less items
    // and if there is enough available space to render all the items
    if (toolbarBatchActions?.length <= 3 && !displayAllInMenu) {
      return null;
    }
    return (
      <ButtonMenu
        label={width > minWidthBeforeOverflowIcon ? 'More' : null}
        renderIcon={
          width > minWidthBeforeOverflowIcon ? Add16 : OverflowMenuVertical16
        }
        className={cx(`${blockClass}__button-menu`, {
          [`${blockClass}__button-menu--icon-only`]:
            width <= minWidthBeforeOverflowIcon,
        })}
        menuOptionsClass={`${blockClass}__button-menu-options`}
        flipped
      >
        {toolbarBatchActions &&
          toolbarBatchActions.map((batchAction, index) => {
            if (index < 2) {
              if (displayAllInMenu) {
                return (
                  <ButtonMenuItem
                    key={`${batchAction.label}-${index}`}
                    itemText={batchAction.label}
                    onClick={() => {
                      batchAction.onClick();
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
              <ButtonMenuItem
                key={`${batchAction.label}-${index}`}
                itemText={batchAction.label}
                onClick={() => {
                  batchAction.onClick();
                  if (batchAction.type === 'select_all') {
                    toggleAllRowsSelected(true);
                  }
                }}
              />
            );
          })}
      </ButtonMenu>
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
                onClick={() => {
                  batchAction.onClick();
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
