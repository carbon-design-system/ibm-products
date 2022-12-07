/**
 * Copyright IBM Corp. 2020, 2022
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

export let Datagrid = React.forwardRef(({ datagridState, ...rest }, ref) => {
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

  const rows = (DatagridPagination && datagridState.page) || datagridState.rows;

  return (
    <FilterProvider filters={filters}>
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
            !isFetching && rows.length === 0 ? `${blockClass}__empty-state` : ''
          )}
          {...getDevtoolsProps(componentName)}
        >

          {filterProps?.variation === 'panel' && (
            <div
              className={`${blockClass}__datagridWithPanel ${blockClass}__displayFlex ${blockClass}__leftPanel-position`}
            >
              <DatagridContent datagridState={datagridState} />
            </div>
          )}

          {filterProps?.variation === undefined && (
            <DatagridContent datagridState={datagridState} />
          )}
        </div>
      </InlineEditProvider>
    </FilterProvider>
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
