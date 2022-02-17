/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { FixedSizeList } from 'react-window';
import cx from 'classnames';

import { pkg } from '../../settings';
const blockClass = `${pkg.prefix}--data-spreadsheet`;

export const DataSpreadsheetBody = ({
  defaultColumn,
  getTableBodyProps,
  id,
  onActiveCellChange,
  prepareRow,
  rows,
  scrollBarSize,
  totalColumnsWidth,
}) => {
  // onClick fn for each cell in the data spreadsheet body,
  // adds the active cell highlight
  const handleBodyCellClick = useCallback(
    (event, cell, columnIndex) => {
      const cellButton = event.target.closest(`.${blockClass}__td`);
      const cellCoordinates = cellButton.getBoundingClientRect();
      const rowContainer = document.querySelector(
        `.${blockClass}__list--container`
      ).firstElementChild;
      const parentCoordinates = rowContainer?.getBoundingClientRect();
      const relativePosition = {
        top: cellCoordinates.top - parentCoordinates.top,
        left: cellCoordinates.left - parentCoordinates.left,
      };
      const listContainer = spreadsheetBodyRef?.current;
      const activeCellButton =
        listContainer.querySelector(`.${blockClass}__active-cell--highlight`) ||
        document.createElement('button');
      activeCellButton.classList.add(`${blockClass}__active-cell--highlight`);
      activeCellButton.style.width = `${
        cell?.column?.width - 8 - scrollBarSize / cell.row.cells.length
      }px`; // subtract 8 to account for cell padding and then subtract the scrollbar width divided by total columns
      const activeCellCoords = {
        row: cell.row.index,
        column: columnIndex,
      };
      activeCellButton.style.height = `${cell?.column?.rowHeight}px`;
      activeCellButton.style.left = `${relativePosition.left}px`;
      activeCellButton.style.top = `${relativePosition.top}px`;
      activeCellButton.setAttribute(
        'data-active-row-index',
        activeCellCoords.row
      );
      activeCellButton.setAttribute(
        'data-active-column-index',
        activeCellCoords.column
      );
      listContainer.firstElementChild.appendChild(activeCellButton);
      activeCellButton.focus();
      const activeCellValue = Object.values(cell.row.values)[columnIndex];
      onActiveCellChange?.(activeCellValue);
    },
    [onActiveCellChange, scrollBarSize]
  );

  // Renders each cell in the spreadsheet body
  const RenderRow = useCallback(
    ({ index, style }) => {
      const row = rows[index];
      prepareRow(row);
      return (
        <div
          {...row.getRowProps({ style })}
          className={cx(`${blockClass}__tr`)}
          data-row-index={index}
        >
          {/* ROW HEADER BUTTON */}
          <button
            type="button"
            className={cx(`${blockClass}__td`, `${blockClass}__td-th`, `${blockClass}--interactive-cell-element`)}
            style={{
              width: defaultColumn?.rowHeaderWidth,
            }}
          >
            {index + 1}
          </button>
          {/* CELL BUTTONS */}
          {row.cells.map((cell, index) => (
            <button
              {...cell.getCellProps()}
              className={cx(`${blockClass}__td`, `${blockClass}--interactive-cell-element`)}
              key={`cell_${index}`}
              onClick={(event) => handleBodyCellClick(event, cell, index)}
              type="button"
            >
              {cell.render('Cell')}
            </button>
          ))}
        </div>
      );
    },
    [prepareRow, rows, defaultColumn.rowHeaderWidth, handleBodyCellClick]
  );

  const spreadsheetBodyRef = useRef();
  return (
    <div ref={spreadsheetBodyRef} {...getTableBodyProps()}>
      <FixedSizeList
        className={cx(
          `${blockClass}__list--container`,
          `${blockClass}__list--container--${id}`
        )}
        height={400}
        itemCount={rows.length}
        itemSize={defaultColumn?.rowHeight}
        width={totalColumnsWidth + scrollBarSize}
      >
        {RenderRow}
      </FixedSizeList>
    </div>
  );
};

DataSpreadsheetBody.propTypes = {
  /**
   * Default spreadsheet sizing values
   */
  defaultColumn: PropTypes.shape({
    rowHeight: PropTypes.number,
    rowHeaderWidth: PropTypes.number,
    width: PropTypes.number,
  }),

  /**
   * Function to set table body prop values
   */
  getTableBodyProps: PropTypes.func,

  /**
   * The spreadsheet id
   */
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * The event handler that is called when the active cell changes
   */
  onActiveCellChange: PropTypes.func,

  /**
   * Prepare row function from react-table
   */
  prepareRow: PropTypes.func,

  /**
   * All of the spreadsheet row data
   */
  rows: PropTypes.arrayOf(PropTypes.object),

  /**
   * The scrollbar width
   */
  scrollBarSize: PropTypes.number,

  /**
   * The total columns width
   */
  totalColumnsWidth: PropTypes.number,
};
