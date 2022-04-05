/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2020 - 2021
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
import React from 'react';
import { DataTable } from 'carbon-components-react';
import cx from 'classnames';
import DatagridHead from './DatagridHead';
import DatagridBody from './DatagridBody';
import DatagridToolbar from './DatagridToolbar';

import { getDevtoolsProps } from '../../../global/js/utils/devtools';
import { pkg } from '../../../settings';

const blockClass = `${pkg.prefix}--datagrid`;
const componentName = 'Datagrid';

const { TableContainer, Table } = DataTable;

let Datagrid = React.forwardRef(
  (datagridState, ref) => {
    const {
      getTableProps = () => {},
      withVirtualScroll,
      DatagridPagination,
      isFetching,
      tableId,
      CustomizeColumnsModal,
      leftPanel,
      fullHeightDatagrid,
      verticalAlign = 'center',
      variableRowHeight,
      className,
      ...rest
    } = datagridState;

    const rows = (DatagridPagination && datagridState.page) || datagridState.rows;

    const dataGrid = (
      <>
        <TableContainer
          className={cx(
            `${blockClass}__grid-container`,
            withVirtualScroll || fullHeightDatagrid
              ? `${blockClass}__full-height`
              : ''
          )}
        >
          <Table
            {...getTableProps()}
            className={cx(
              DatagridPagination ? `${blockClass}__with-pagination` : '',
              withVirtualScroll ? '' : `${blockClass}__table-simple`,
              `${blockClass}__vertical-align-${verticalAlign}`,
              { [`${blockClass}__variable-row-height`]: variableRowHeight },
              getTableProps()?.className
            )}
          >
            <DatagridHead {...datagridState} />
            <DatagridBody {...datagridState} rows={rows} />
          </Table>
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

    return (
      <div
        {...rest}
        id={tableId}
        ref={ref}
        role="main"
        className={cx(
          className,
          blockClass,
          withVirtualScroll
            ? `${blockClass}__datagridWrap`
            : `${blockClass}__datagridWrap-simple`
        )}
        {...getDevtoolsProps(componentName)}
      >
        <DatagridToolbar {...datagridState} />
        {leftPanel && (
          <div
            className={`${blockClass}__grid-container ${blockClass}__displayFlex`}
          >
            {leftPanel && leftPanel.isOpen && (
              <div className={`${blockClass}__datagridLeftPanel`}>
                {leftPanel.panelContent}
              </div>
            )}
            <div className={`${blockClass}__datagridWithPanel`}>{dataGrid}</div>
          </div>
        )}
        {leftPanel === undefined && dataGrid}
      </div>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
Datagrid = pkg.checkComponentEnabled(Datagrid, componentName);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
Datagrid.displayName = componentName;

export default Datagrid;
