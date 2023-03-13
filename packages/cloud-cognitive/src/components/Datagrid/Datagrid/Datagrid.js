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
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { FilterProvider } from './addons/Filtering/FilterProvider';
>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8
=======
import { FilterProvider } from './addons/Filtering/FilterProvider';
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
    state: { filters },
>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8
=======
    state: { filters },
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
  } = datagridState;

  const rows = (DatagridPagination && datagridState.page) || datagridState.rows;

  return (
<<<<<<< HEAD
<<<<<<< HEAD
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
        {leftPanel && (
          <div
            className={`${blockClass}__datagridWithPanel ${blockClass}__displayFlex ${blockClass}__leftPanel-position`}
          >
            <DatagridContent datagridState={datagridState} />
          </div>
        )}
        {leftPanel === undefined && (
          <DatagridContent datagridState={datagridState} />
        )}
      </div>
    </InlineEditProvider>
=======
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
          {leftPanel && (
            <div
              className={`${blockClass}__datagridWithPanel ${blockClass}__displayFlex ${blockClass}__leftPanel-position`}
            >
              <DatagridContent datagridState={datagridState} />
            </div>
          )}
          {leftPanel === undefined && (
            <DatagridContent datagridState={datagridState} />
=======
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
          {filterProps?.variation === 'panel' ? (
            <div
              className={`${blockClass}__datagridWithPanel ${blockClass}__displayFlex`}
            >
              <DatagridContent datagridState={datagridState} />
            </div>
          ) : (
            <DatagridContent datagridState={datagridState} />
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
          )}
        </div>
      </InlineEditProvider>
    </FilterProvider>
<<<<<<< HEAD
>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8
=======
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
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
