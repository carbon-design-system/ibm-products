import React, { useContext } from 'react';
import cx from 'classnames';
import { DataTable } from 'carbon-components-react';
import DatagridHead from './DatagridHead';
import DatagridBody from './DatagridBody';
import DatagridToolbar from './DatagridToolbar';
import { handleGridKeyPress } from './addons/InlineEdit/handleGridKeyPress';
import { pkg } from '../../../settings';
import { InlineEditContext } from './addons/InlineEdit/InlineEditContext';
import { handleGridFocus } from './addons/InlineEdit/handleGridFocus';

const { TableContainer, Table } = DataTable;

const blockClass = `${pkg.prefix}--datagrid`;

export const DatagridContent = ({datagridState}) => {
  const {state, dispatch} = useContext(InlineEditContext);
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
    withInlineEdit
  } = datagridState;

  const rows = (DatagridPagination && datagridState.page) || datagridState.rows;
  const { gridActive } = state;

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
        <div className={`${blockClass}__table-container`}>
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
            role={withInlineEdit && "grid"}
            tabIndex={withInlineEdit && 0}
            onKeyDown={withInlineEdit ? event => handleGridKeyPress(event, dispatch, state, datagridState) : null}
            onFocus={withInlineEdit ? () => handleGridFocus(state, dispatch) : null}
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
