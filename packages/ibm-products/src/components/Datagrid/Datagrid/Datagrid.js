/**
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getDevtoolsProps } from '../../../global/js/utils/devtools';
import { pkg } from '../../../settings';
import pconsole from '../../../global/js/utils/pconsole';
import { InlineEditProvider } from './addons/InlineEdit/InlineEditContext';
import { DatagridContent } from './DatagridContent';
import { FilterProvider } from './addons/Filtering/FilterProvider';

const blockClass = `${pkg.prefix}--datagrid`;
const componentName = 'Datagrid';

/**
 * The `Datagrid` component is an extension of Carbon's DataTable component. At the most basic level, the `Datagrid` component takes in columns and rows and renders a data table. There is a set of data table extensions which this component provides support for, these can be found [here](https://pages.github.ibm.com/cdai-design/pal/components/data-table/overview/). This component is data driven and allows you to choose what pieces will be included based on the hooks/plugins that are provided.
 */
export let Datagrid = React.forwardRef(
  ({ datagridState, title, ...rest }, ref) => {
    if (!datagridState) {
      pconsole.warn(
        'Datagrid was not passed datagridState which is required to render this component.'
      );
      return null;
    }

    const {
      withVirtualScroll,
      DatagridPagination,
      isFetching,
      tableId,
      filterProps,
      className,
      state: { filters },
    } = datagridState;
    console.log('filters: ', filters);

    const rows =
      (DatagridPagination && datagridState.page) || datagridState.rows;

    const props = {
      title,
      datagridState,
    };

    return (
      <FilterProvider filters={filters} filterProps={filterProps}>
        <InlineEditProvider>
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
              !isFetching && rows.length === 0
                ? `${blockClass}__empty-state`
                : ''
            )}
            {...getDevtoolsProps(componentName)}
          >
            {filterProps?.variation === 'panel' ? (
              <div
                className={`${blockClass}__datagridWithPanel ${blockClass}__displayFlex`}
              >
                <DatagridContent {...props} />
              </div>
            ) : (
              <DatagridContent {...props} />
            )}
          </div>
        </InlineEditProvider>
      </FilterProvider>
    );
  }
);

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
  /**
   * Table title
   */
  title: PropTypes.string,
};
