import React, { useContext, useRef } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { DataTable } from 'carbon-components-react';
import DatagridHead from './DatagridHead';
import DatagridBody from './DatagridBody';
import DatagridToolbar from './DatagridToolbar';
import { handleGridKeyPress } from './addons/InlineEdit/handleGridKeyPress';
import { pkg, carbon } from '../../../settings';
import { InlineEditContext } from './addons/InlineEdit/InlineEditContext';
import { handleGridFocus } from './addons/InlineEdit/handleGridFocus';
import { useClickOutside } from '../../../global/js/hooks';

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
    CustomizeColumnsModal,
    leftPanel,
    fullHeightDatagrid,
    verticalAlign = 'center',
    variableRowHeight,
    gridTitle,
    gridDescription,
    useDenseHeader,
    withInlineEdit,
  } = datagridState;

  const rows = (DatagridPagination && datagridState.page) || datagridState.rows;
  const { gridActive } = state;
  const gridAreaRef = useRef();

  useClickOutside(gridAreaRef, (target) => {
    if (!withInlineEdit) {
      return;
    }
    console.log(target);
    // We return from here if we find a parent element with the selector below
    // because that element was initially part of the grid area but was removed
    // and swapped out with an input, i.e. text, number, selection, or date picker
    if (
      target.closest(`.${blockClass}__inline-edit-button`) ||
      target.closest(`.${blockClass}__inline-edit--select`) ||
      target.closest(
        `.flatpickr-calendar.${carbon.prefix}--date-picker__calendar`
      )
    ) {
      return;
    }
    dispatch({ type: 'REMOVE_GRID_ACTIVE_FOCUS', payload: activeCellId });
  });

  return (
    <>
      <TableContainer
        className={cx(
          `${blockClass}__grid-container`,
          withVirtualScroll || fullHeightDatagrid
            ? `${blockClass}__full-height`
            : '',
          DatagridPagination ? `${blockClass}__with-pagination` : '',
          useDenseHeader ? `${blockClass}__dense-header` : ''
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
                    handleGridKeyPress(event, dispatch, state, datagridState)
                : null
            }
            onFocus={
              withInlineEdit ? () => handleGridFocus(state, dispatch) : null
            }
          >
            <DatagridHead {...datagridState} />
            <DatagridBody {...datagridState} rows={rows} />
          </Table>
        </div>
      </TableContainer>
      {rows?.length > 0 &&
        !isFetching &&
        DatagridPagination &&
        DatagridPagination(datagridState)}
      {CustomizeColumnsModal && (
        <CustomizeColumnsModal instance={datagridState} />
      )}
    </>
  );
};

DatagridContent.propTypes = {
  datagridState: PropTypes.shape({
    getTableProps: PropTypes.func,
    withVirtualScroll: PropTypes.bool,
    DatagridPagination: PropTypes.element,
    CustomizeColumnsModal: PropTypes.element,
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
  }),
};
