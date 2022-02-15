/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { FixedSizeList } from 'react-window';
import cx from 'classnames';

import { pkg } from '../../settings';
const blockClass = `${pkg.prefix}--data-spreadsheet`;

export const DataSpreadsheetBody = React.forwardRef(({
  defaultColumn,
  getTableBodyProps,
  id,
  prepareRow,
  rows,
  scrollBarSize,
  totalColumnsWidth,
}, ref) => {

  // onClick fn for each cell in the data spreadsheet body,
  // adds the active cell highlight
  const handleBodyCellClick = (event, cell) => {
    const cellButton = event.target.closest(`.${blockClass}__td`);
    const cellCoordinates = cellButton.getBoundingClientRect();
    const rowContainer = document.querySelector(`.${blockClass}__list--container`).firstElementChild;
    const parentCoordinates = rowContainer?.getBoundingClientRect();
    const relativePosition = {
      top: cellCoordinates.top - parentCoordinates.top,
      left: cellCoordinates.left - parentCoordinates.left,
    };
    const listContainer = spreadsheetBodyRef?.current;
    const activeCellButton = listContainer.querySelector(`.${blockClass}__active-cell--highlight`) || document.createElement("button");
    activeCellButton.focus();
    activeCellButton.classList.add(`${blockClass}__active-cell--highlight`);
    activeCellButton.style.width = `${cell?.column?.width - 8 - (scrollBarSize / cell.row.cells.length)}px`; // subtract 8 to account for cell padding and then subtract the scrollbar width divided by total columsn
    activeCellButton.style.height = `${cell?.column?.height}px`;
    activeCellButton.style.left = `${relativePosition.left}px`;
    activeCellButton.style.top = `${relativePosition.top}px`;
    listContainer.firstElementChild.appendChild(activeCellButton);
  }

  // Renders each cell in the spreadsheet body
  const RenderRow = React.useCallback(
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
            className={cx(`${blockClass}__td`, `${blockClass}__td-th`)}
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
              className={`${blockClass}__td`}
              key={`cell_${index}`}
              onClick={(event) => handleBodyCellClick(event, cell)}
              type="button"
            >
              {cell.render('Cell')}
            </button>
          ))}
        </div>
      );
    },
    [prepareRow, rows, defaultColumn.rowHeaderWidth]
  );

  const spreadsheetBodyRef = useRef();
  return (
    <div
      ref={spreadsheetBodyRef}
      {...getTableBodyProps()}
    >
      <FixedSizeList
        className={cx(`${blockClass}__list--container`, `${blockClass}__list--container--${id}`)}
        height={400}
        itemCount={rows.length}
        itemSize={defaultColumn?.height}
        width={totalColumnsWidth + scrollBarSize}
      >
        {RenderRow}
      </FixedSizeList>
    </div>
  );
});

DataSpreadsheetBody.propTypes = {
  /**
  * Default spreadsheet sizing values
  */
  defaultColumn: PropTypes.shape({
    height: PropTypes.number, // change to rowHeight
    rowHeaderWidth: PropTypes.number,
    width: PropTypes.number,
  }),

  /**
  * The spreadsheet id
  */
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}
