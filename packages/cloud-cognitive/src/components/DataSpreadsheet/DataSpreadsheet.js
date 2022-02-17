/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, { useMemo, useRef, useEffect } from 'react';
import { useBlockLayout, useTable } from 'react-table';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';
import { getScrollbarWidth } from '../../global/js/utils/getScrollbarWidth';
import { DataSpreadsheetBody } from './DataSpreadsheetBody';
import { getCellSize } from './getCellSize';
import { DataSpreadsheetHeader } from './DataSpreadsheetHeader';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--data-spreadsheet`;
const componentName = 'DataSpreadsheet';

/**
 * DataSpreadsheet: used to organize and display large amounts of structured data, separated by columns and rows in a grid-like format.
 */
export let DataSpreadsheet = React.forwardRef(
  (
    { cellSize, className, columns, data, id, onActiveCellChange, ...rest },
    ref
  ) => {
    const cellSizeValue = getCellSize(cellSize);
    const defaultColumn = useMemo(
      () => ({
        width: 150,
        rowHeaderWidth: 64,
        rowHeight: cellSizeValue,
      }),
      [cellSizeValue]
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

    // Click outside useEffect
    // Removes the active cell highlight element
    useEffect(() => {
      const handleOutsideClick = (event) => {
        if (
          !spreadsheetRef.current ||
          spreadsheetRef.current.contains(event.target) ||
          event.target.classList.contains(
            `${blockClass}__active-cell--highlight`
          )
        ) {
          return;
        }
        const activeCellHighlight = spreadsheetRef.current.querySelector(
          `.${blockClass}__active-cell--highlight`
        );
        if (activeCellHighlight) {
          activeCellHighlight.remove();
        }
      };
      document.addEventListener('click', handleOutsideClick);
      return () => {
        document.removeEventListener('click', handleOutsideClick);
      };
    }, [spreadsheetRef]);

    const localRef = useRef();
    const spreadsheetRef = ref || localRef;
    return (
      <div
        {...rest}
        {...getTableProps()}
        {...getDevtoolsProps(componentName)}
        className={cx(blockClass, className)}
        ref={spreadsheetRef}
        role="grid"
      >
        {/* HEADER */}
        <DataSpreadsheetHeader
          cellSizeValue={cellSizeValue}
          defaultColumn={defaultColumn}
          headerGroups={headerGroups}
        />

        {/* BODY */}
        <DataSpreadsheetBody
          cellSize={cellSize}
          defaultColumn={defaultColumn}
          getTableBodyProps={getTableBodyProps}
          onActiveCellChange={onActiveCellChange}
          prepareRow={prepareRow}
          rows={rows}
          scrollBarSize={scrollBarSize}
          totalColumnsWidth={totalColumnsWidth}
          id={id}
        />
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
   * Specifies the cell height
   */
  cellSize: PropTypes.oneOf(['compact', 'standard', 'medium', 'large']),

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

  /**
   * The spreadsheet id
   */
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * The event handler that is called when the active cell changes
   */
  onActiveCellChange: PropTypes.func,

  /* TODO: add types and DocGen for all props. */
};

// Default values for component props. Default values are not required for
// props that are required, nor for props where the component can apply
// 'undefined' values reasonably. Default values should be provided when the
// component needs to make a choice or assumption when a prop is not supplied.
DataSpreadsheet.defaultProps = {
  data: [],
  columns: [],
  cellSize: 'standard',
};
