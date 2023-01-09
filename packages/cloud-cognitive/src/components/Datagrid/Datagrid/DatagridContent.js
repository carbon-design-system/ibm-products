/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useContext, useEffect, useRef } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { DataTable } from '@carbon/react';
import { px } from '@carbon/layout';
import DatagridHead from './DatagridHead';
import DatagridBody from './DatagridBody';
import DatagridToolbar from './DatagridToolbar';
import { handleGridKeyPress } from './addons/InlineEdit/handleGridKeyPress';
import { carbon, pkg } from '../../../settings';
import { InlineEditContext } from './addons/InlineEdit/InlineEditContext';
import { handleGridFocus } from './addons/InlineEdit/handleGridFocus';
import { useClickOutside } from '../../../global/js/hooks';
import { useMultipleKeyTracking } from '../../DataSpreadsheet/hooks';

const { TableContainer, Table } = DataTable;

const blockClass = `${pkg.prefix}--datagrid`;

export const DatagridContent = ({ datagridState }) => {
  const { state, dispatch } = useContext(InlineEditContext);
  const { activeCellId } = state;
  const {
    getTableProps = () => {},
    withVirtualScroll,
    DatagridPagination,
    isFetching,
    CustomizeColumnsTearsheet,
    leftPanel,
    fullHeightDatagrid,
    verticalAlign = 'center',
    variableRowHeight,
    gridTitle,
    gridDescription,
    useDenseHeader,
    withInlineEdit,
    tableId,
    DatagridActions,
    totalColumnsWidth,
    gridRef,
  } = datagridState;

  const rows = (DatagridPagination && datagridState.page) || datagridState.rows;
  const { gridActive, editId } = state;
  const gridAreaRef = useRef();
  const multiKeyTrackingRef = useRef();

  useClickOutside(gridAreaRef, (target) => {
    if (!withInlineEdit) {
      return;
    }
    // We return from here if we find a parent element with the selector below
    // because that element was initially part of the grid area but was removed
    // and swapped out with an input, i.e. text, number, selection, or date picker
    if (
      target.closest(`.${blockClass}__inline-edit-button`) ||
      target.closest(`.${blockClass}__inline-edit--select`)
    ) {
      return;
    }
    dispatch({ type: 'REMOVE_GRID_ACTIVE_FOCUS', payload: activeCellId });
  });

  const renderTable = () => {
    return (
      <Table
        {...getTableProps()}
        className={cx(
          withVirtualScroll ? '' : `${blockClass}__table-simple`,
          `${blockClass}__vertical-align-${verticalAlign}`,
          { [`${blockClass}__variable-row-height`]: variableRowHeight },
          { [`${blockClass}__table-with-inline-edit`]: withInlineEdit },
          { [`${blockClass}__table-grid-active`]: gridActive },
          getTableProps()?.className
        )}
        role={withInlineEdit && 'grid'}
        tabIndex={withInlineEdit && 0}
        onKeyDown={
          withInlineEdit
            ? (event) =>
                handleGridKeyPress({
                  event,
                  dispatch,
                  state,
                  instance: datagridState,
                  keysPressedList,
                  usingMac,
                })
            : null
        }
        onFocus={withInlineEdit ? () => handleGridFocus(state, dispatch) : null}
      >
        {!withVirtualScroll ? <DatagridHead {...datagridState} /> : null}
        <DatagridBody {...datagridState} rows={rows} />
      </Table>
    );
  };

  const { keysPressedList, usingMac } = useMultipleKeyTracking({
    ref: withInlineEdit ? multiKeyTrackingRef : null,
    containerHasFocus: gridActive,
    isEditing: !!editId,
  });

  // Provides a width for the region outline for useInlineEdit
  useEffect(() => {
    if (!withInlineEdit) {
      return;
    }
    const gridElement = document.querySelector(`#${tableId}`);
    const tableHeader = gridElement?.querySelector(
      `.${carbon.prefix}--data-table-header`
    );
    gridElement.style.setProperty(
      `--${blockClass}--grid-width`,
      px(totalColumnsWidth + 32)
    );
    if (gridActive) {
      gridElement.style.setProperty(
        `--${blockClass}--grid-header-height`,
        px(tableHeader?.clientHeight || 0)
      );
    }
  }, [withInlineEdit, tableId, totalColumnsWidth, datagridState, gridActive]);

  return (
    <>
      <TableContainer
        className={cx(
          `${blockClass}__grid-container`,
          withVirtualScroll || fullHeightDatagrid
            ? `${blockClass}__full-height`
            : '',
          DatagridPagination ? `${blockClass}__with-pagination` : '',
          useDenseHeader ? `${blockClass}__dense-header` : '',
          {
            [`${blockClass}__grid-container-grid-active`]: gridActive,
            [`${blockClass}__grid-container-inline-edit`]: withInlineEdit,
            [`${blockClass}__grid-container-grid-active--without-toolbar`]:
              withInlineEdit && !DatagridActions,
          }
        )}
        title={gridTitle}
        description={gridDescription}
      >
        <DatagridToolbar {...datagridState} />
        <div className={`${blockClass}__table-container`} ref={gridAreaRef}>
          {leftPanel && leftPanel.isOpen && (
            <div className={`${blockClass}__datagridLeftPanel`}>
              {leftPanel.panelContent}
            </div>
          )}
          {withInlineEdit ? (
            <div ref={multiKeyTrackingRef}>{renderTable()}</div>
          ) : withVirtualScroll ? (
            <div
              className={`${blockClass}__virtualScrollContainer`}
              ref={gridRef}
            >
              {renderTable()}
            </div>
          ) : (
            renderTable()
          )}
        </div>
      </TableContainer>
      {rows?.length > 0 && !isFetching && DatagridPagination && (
        <DatagridPagination {...datagridState} />
      )}
      {CustomizeColumnsTearsheet && (
        <CustomizeColumnsTearsheet instance={datagridState} />
      )}
    </>
  );
};

DatagridContent.propTypes = {
  datagridState: PropTypes.shape({
    getTableProps: PropTypes.func,
    withVirtualScroll: PropTypes.bool,
    DatagridActions: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    DatagridPagination: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func,
    ]),
    CustomizeColumnsTearsheet: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func,
    ]),
    isFetching: PropTypes.bool,
    leftPanel: PropTypes.object,
    fullHeightDatagrid: PropTypes.bool,
    variableRowHeight: PropTypes.bool,
    useDenseHeader: PropTypes.bool,
    withInlineEdit: PropTypes.bool,
    verticalAlign: PropTypes.string,
    gridTitle: PropTypes.node,
    gridDescription: PropTypes.node,
    page: PropTypes.arrayOf(PropTypes.object),
    rows: PropTypes.arrayOf(PropTypes.object),
    tableId: PropTypes.string,
    totalColumnsWidth: PropTypes.number,
    gridRef: PropTypes.object,
  }),
};
