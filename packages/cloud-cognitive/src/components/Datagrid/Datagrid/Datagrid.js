/**
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { DataTable } from 'carbon-components-react';
import cx from 'classnames';
import DatagridHead from './DatagridHead';
import DatagridBody from './DatagridBody';
import DatagridToolbar from './DatagridToolbar';

import { getDevtoolsProps } from '../../../global/js/utils/devtools';
import { pkg } from '../../../settings';
import pconsole from '../../../global/js/utils/pconsole';

const blockClass = `${pkg.prefix}--datagrid`;
const componentName = 'Datagrid';

const { TableContainer, Table } = DataTable;

export let Datagrid = React.forwardRef(({ datagridState, ...rest }, ref) => {
  if (!datagridState) {
    pconsole.warn(
      'Datagrid was not passed datagridState which is required to render this component.'
    );
    return null;
  }
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
    gridTitle,
    gridDescription,
    DatagridDenseActions,
  } = datagridState;

  const rows = (DatagridPagination && datagridState.page) || datagridState.rows;

  const dataGrid = (
    <>
      <TableContainer
        className={cx(
          `${blockClass}__grid-container`,
          withVirtualScroll || fullHeightDatagrid
            ? `${blockClass}__full-height`
            : '',
          DatagridPagination ? `${blockClass}__with-pagination` : '',
          DatagridDenseActions ? `${blockClass}__dense-header` : ''
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
              getTableProps()?.className
            )}
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

  return (
    <div
      {...rest}
      id={tableId}
      ref={ref}
      className={cx(
        className,
        blockClass,
        withVirtualScroll
          ? `${blockClass}__datagridWrap`
          : `${blockClass}__datagridWrap-simple`,
        !isFetching && rows.length === 0 ? `${blockClass}__empty-state` : ''
      )}
      {...getDevtoolsProps(componentName)}
    >
      {leftPanel && (
        <div
          className={`${blockClass}__datagridWithPanel ${blockClass}__displayFlex ${blockClass}__leftPanel-position`}
        >
          {dataGrid}
        </div>
      )}
      {leftPanel === undefined && dataGrid}
    </div>
  );
});

// Return a placeholder if not released and not enabled by feature flag
Datagrid = pkg.checkComponentEnabled(Datagrid, componentName);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
Datagrid.displayName = componentName;

Datagrid.propTypes = {
  /**
   * The data grid state, much of it being supplied by the useDatagrid hook
   */
  datagridState: PropTypes.object.isRequired,
};
