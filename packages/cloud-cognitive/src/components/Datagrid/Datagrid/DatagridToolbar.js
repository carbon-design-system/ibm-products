/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { Add, OverflowMenuVertical } from '@carbon/react/icons';
<<<<<<< HEAD
import { DataTable, TableBatchActions, TableBatchAction } from '@carbon/react';
=======
import { Add16, OverflowMenuVertical16 } from '@carbon/icons-react';
import {
  DataTable,
  TableBatchActions,
  TableBatchAction,
} from 'carbon-components-react';
>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8
=======
import {
  TableToolbar,
  TableBatchActions,
  TableBatchAction,
} from '@carbon/react';
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
import { useResizeDetector } from 'react-resize-detector';
import { ButtonMenu, ButtonMenuItem } from '../../ButtonMenu';
import { pkg, carbon } from '../../../settings';
import cx from 'classnames';
<<<<<<< HEAD
=======
import { FilterSummary } from '../../FilterSummary';
import { useContext } from 'react';
import { FilterContext } from './addons/Filtering/FilterProvider';
import { CLEAR_FILTERS } from './addons/Filtering/constants';
>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8

const blockClass = `${pkg.prefix}--datagrid`;

const DatagridBatchActionsToolbar = (datagridState, width, ref) => {
  const [displayAllInMenu, setDisplayAllInMenu] = useState(false);
  const [initialListWidth, setInitialListWidth] = useState(null);
  const [receivedInitialWidth, setReceivedInitialWidth] = useState(false);
<<<<<<< HEAD
<<<<<<< HEAD
  const { selectedFlatRows, toggleAllRowsSelected, toolbarBatchActions } =
    datagridState;
=======
=======
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
  const {
    selectedFlatRows,
    toggleAllRowsSelected,
    toolbarBatchActions,
    setGlobalFilter,
  } = datagridState;
<<<<<<< HEAD
>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8
=======
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
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
<<<<<<< HEAD
          width > minWidthBeforeOverflowIcon ? Add : OverflowMenuVertical
=======
          width > minWidthBeforeOverflowIcon ? Add16 : OverflowMenuVertical16
>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8
        }
        className={cx(`${blockClass}__button-menu`, {
          [`${blockClass}__button-menu--icon-only`]:
            width <= minWidthBeforeOverflowIcon,
        })}
        menuOptionsClass={`${blockClass}__button-menu-options`}
        flipped
<<<<<<< HEAD
        menuAriaLabel={'Batch actions'}
=======
>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8
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
<<<<<<< HEAD
<<<<<<< HEAD
      onCancel={() => toggleAllRowsSelected(false)}
=======
=======
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
      onCancel={() => {
        toggleAllRowsSelected(false);
        setGlobalFilter(null);
      }}
<<<<<<< HEAD
>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8
=======
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
    >
      {!displayAllInMenu &&
        toolbarBatchActions &&
        toolbarBatchActions?.map((batchAction, index) => {
          if (
            (index < 2 && toolbarBatchActions.length > 3) ||
            (index < 3 && toolbarBatchActions.length === 3)
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
  const { width, ref } = useResizeDetector();
<<<<<<< HEAD
<<<<<<< HEAD
  const { DatagridActions, DatagridBatchActions, batchActions } = datagridState;
=======
  const { DatagridActions, DatagridBatchActions, batchActions, state } =
    datagridState;
  const { filterTags, EventEmitter } = useContext(FilterContext);

  const renderFilterSummary = () =>
    state.filters.length > 0 && (
      <FilterSummary
        filters={filterTags}
        clearFilters={() => EventEmitter.dispatch(CLEAR_FILTERS)}
      />
    );
>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8
=======
  const { DatagridActions, DatagridBatchActions, batchActions, rowSize } =
    datagridState;

  const getRowHeight = rowSize ? rowSize : 'lg';
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212

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
<<<<<<< HEAD
=======
      {renderFilterSummary()}
>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8
    </div>
  ) : DatagridActions ? (
    <div className={`${blockClass}__table-toolbar`}>
      <TableToolbar>
        {DatagridActions && DatagridActions(datagridState)}
        {DatagridBatchActions && DatagridBatchActions(datagridState)}
      </TableToolbar>
      {renderFilterSummary()}
    </div>
  ) : null;
};

export default DatagridToolbar;
