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
  cellSize,
  defaultColumn,
  getTableBodyProps,
  id,
  prepareRow,
  rows,
  scrollBarSize,
  totalColumnsWidth,
}, ref) => {

  const handleBodyCellClick = (event, cell) => {
    const cellCoordinates = event.target.getBoundingClientRect();
    const parentCoordinates = ref?.current?.getBoundingClientRect();
    const relativePosition = {
      top: cellCoordinates.top - parentCoordinates.top,
      left: cellCoordinates.left - parentCoordinates.left,
    };
    const listContainer = containerRef?.current;
    const activeCellSpan = listContainer.querySelector(`.${blockClass}__active-cell--highlight`) || document.createElement("span");
    activeCellSpan.classList.add(`${blockClass}__active-cell--highlight`, `${blockClass}__active-cell--highlight--${cellSize}`);
    activeCellSpan.style.width = `${cell?.column?.width}px`;
    activeCellSpan.style.height = `${cell?.column?.height}px`;
    activeCellSpan.style.left = `${relativePosition.left}px`;
    activeCellSpan.style.top = `${relativePosition.top - cell?.column?.height}px`; // subtract cell height value to account for column headers
    listContainer.firstElementChild.appendChild(activeCellSpan);
    // console.log(activeCellSpan);
    // console.log(cell.column);
    // console.log(cell.column.originalWidth);
  }

  const RenderRow = React.useCallback(
    ({ index, style }) => {
      const row = rows[index];
      prepareRow(row);
      console.log(style);
      return (
        <div
          {...row.getRowProps({
            style: {
              ...style,
              height: defaultColumn?.height
            }
          })}
          className={cx(`${blockClass}__tr`)}
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

  const containerRef = useRef();

  return (
    <div
      ref={containerRef}
      {...getTableBodyProps()}
      style={{
        position: 'relative'
      }}
    >
      <FixedSizeList
        className={cx(`${blockClass}__list--container`, `${blockClass}__list--container--${id}`)}
        height={400}
        itemCount={rows.length}
        itemSize={36}
        width={totalColumnsWidth + scrollBarSize}
      >
        {RenderRow}
      </FixedSizeList>
      {/* {renderActiveCell()} */}
    </div>
  );
});

DataSpreadsheetBody.propTypes = {
  /**
   * Specifies the cell height
   */
   cellSize: PropTypes.oneOf([
    "compact",
    "standard",
    "medium",
    "large",
    "extra-large"
  ]),

}