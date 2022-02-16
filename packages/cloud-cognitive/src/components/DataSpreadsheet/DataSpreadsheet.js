/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, { useMemo } from 'react';
import { useBlockLayout, useTable } from 'react-table';
import { FixedSizeList } from 'react-window';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg /*, carbon */ } from '../../settings';
import { getScrollbarWidth } from '../../global/js/utils/getScrollbarWidth';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--data-spreadsheet`;
const componentName = 'DataSpreadsheet';

/**
 * DataSpreadsheet: used to organize and display large amounts of structured data, separated by columns and rows in a grid-like format.
 */
export let DataSpreadsheet = React.forwardRef(
  ({ className, columns, data, ...rest }, ref) => {
    const defaultColumn = useMemo(
      () => ({
        width: 150,
        rowHeaderWidth: 64,
      }),
      []
    );

    const scrollBarSize = useMemo(() => getScrollbarWidth(), []);

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      totalColumnsWidth,
      prepareRow,
    } = useTable(
      {
        columns,
        data,
        defaultColumn,
      },
      useBlockLayout
    );

    const RenderRow = React.useCallback(
      ({ index, style }) => {
        const row = rows[index];
        prepareRow(row);
        return (
          <div
            {...row.getRowProps({ style })}
            className="tr"
            data-row-index={index}
          >
            {/* ROW HEADER BUTTON */}
            <button
              type="button"
              className={cx(`${blockClass}__td`, `${blockClass}__td-th`)}
              style={{
                width: defaultColumn?.rowHeaderWidth,
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              {index + 1}
            </button>
            {/* CELL BUTTONS */}
            {row.cells.map((cell, index) => (
              <button
                key={`cell_${index}`}
                {...cell.getCellProps()}
                type="button"
                className={`${blockClass}__td`}
              >
                {cell.render('Cell')}
              </button>
            ))}
          </div>
        );
      },
      [prepareRow, rows, defaultColumn.rowHeaderWidth]
    );

    return (
      <div
        {...rest}
        {...getTableProps()}
        {...getDevtoolsProps(componentName)}
        className={cx(blockClass, className)}
        ref={ref}
        role="grid"
      >
        {/* HEADER */}
        <div>
          {headerGroups.map((headerGroup, index) => (
            <div
              key={`header_${index}`}
              {...headerGroup.getHeaderGroupProps()}
              className={`${blockClass}__tr`}
            >
              {/* SELECT ALL BUTTON */}
              <button
                type="button"
                className={`${blockClass}__th`}
                style={{
                  width: defaultColumn?.rowHeaderWidth,
                }}
              >
                &nbsp;
              </button>
              {/* COLUMN HEADER BUTTONS */}
              {headerGroup.headers.map((column, index) => (
                <button
                  key={`column_${index}`}
                  {...column.getHeaderProps()}
                  type="button"
                  className={`${blockClass}__th`}
                >
                  {column.render('Header')}
                </button>
              ))}
            </div>
          ))}
        </div>

        {/* BODY */}
        <div {...getTableBodyProps()}>
          <FixedSizeList
            height={400}
            itemCount={rows.length}
            itemSize={36}
            width={totalColumnsWidth + scrollBarSize}
          >
            {RenderRow}
          </FixedSizeList>
        </div>
      </div>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
DataSpreadsheet = pkg.checkComponentEnabled(DataSpreadsheet, componentName);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
DataSpreadsheet.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
DataSpreadsheet.propTypes = {
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * The data that will build the column headers
   */
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      Header: PropTypes.string,
      accessor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      Cell: PropTypes.func, // optional cell formatter
    })
  ),

  /**
   * The spreadsheet data that will be rendered in the body of the spreadsheet component
   */
  data: PropTypes.arrayOf(PropTypes.shape),

  /* TODO: add types and DocGen for all props. */
};

// Default values for component props. Default values are not required for
// props that are required, nor for props where the component can apply
// 'undefined' values reasonably. Default values should be provided when the
// component needs to make a choice or assumption when a prop is not supplied.
DataSpreadsheet.defaultProps = {
  data: [],
  columns: [],
};
