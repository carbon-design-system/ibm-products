/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useRef, useCallback, useEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { FixedSizeList } from 'react-window';
import cx from 'classnames';

import { pkg } from '../../settings';
import { deepCloneObject } from '../../global/js/utils/deepCloneObject';
import uuidv4 from '../../global/js/utils/uuidv4';
import { createCellSelectionArea } from './createCellSelectionArea';
const blockClass = `${pkg.prefix}--data-spreadsheet`;

export const DataSpreadsheetBody = forwardRef(
  (
    {
      defaultColumn,
      getTableBodyProps,
      id,
      prepareRow,
      rows,
      setActiveCellCoordinates,
      selectionAreas,
      setContainerHasFocus,
      setSelectionAreas,
      scrollBarSize,
      totalColumnsWidth,
      clickAndHoldActive,
      setClickAndHoldActive,
      currentMatcher,
      setCurrentMatcher,
    },
    ref
  ) => {
    // Create cell selection areas based on selectionAreas array
    useEffect(() => {
      if (selectionAreas && selectionAreas.length) {
        selectionAreas.map((area) => {
          if (!area.areaCreated && area.point1 && area.point2 && area.matcher) {
            // Do not create a cell selection area if point1 and point2 have the same values
            // Cell selections must have two distinctly different points for an area to be created
            if (
              area.point1.row === area.point2.row &&
              area.point1.column === area.point2.column
            ) {
              const selectionAreasClone = deepCloneObject(selectionAreas);
              const indexOfCurrentArea = selectionAreasClone.findIndex(
                (item) => item.matcher === area.matcher
              );
              selectionAreasClone[indexOfCurrentArea].areaCreated = false;
              selectionAreasClone[indexOfCurrentArea].point2 = null;
              return setSelectionAreas(selectionAreasClone);
            }
            createCellSelectionArea({
              area,
              blockClass,
              selectionAreas,
              setSelectionAreas,
            });
          }
          return;
        });
      }
    }, [selectionAreas, setSelectionAreas]);

    // Mouse up
    useEffect(() => {
      const handleMouseUp = (event) => {
        setClickAndHoldActive(false);
        const cellButton = event.target.closest(`.${blockClass}__body--td`);
        if (cellButton) {
          const endCellCoordinates = {
            row: Number(cellButton.getAttribute('data-row-index')),
            column: Number(cellButton.getAttribute('data-column-index')),
          };
          ref.current = null;
          setCurrentMatcher(null);
          setSelectionAreas((prev) => {
            const selectionAreaClone = deepCloneObject(prev);
            const indexOfItemToUpdate = selectionAreaClone.findIndex(
              (item) => item.matcher === currentMatcher
            );
            // No items in the array have an object that matches the value of currentMatcher
            if (indexOfItemToUpdate === -1) {
              return prev;
            }
            selectionAreaClone[indexOfItemToUpdate].point2 = endCellCoordinates;
            selectionAreaClone[indexOfItemToUpdate].areaCreated = false;
            return selectionAreaClone;
          });
        } else {
          const selectionAreaClone = deepCloneObject(selectionAreas);
          const indexOfItemToUpdate = selectionAreaClone.findIndex(
            (item) => item.matcher === currentMatcher
          );
          if (indexOfItemToUpdate === -1) {
            return;
          }
          const newArray = selectionAreaClone.filter(
            (item) => item.matcher !== currentMatcher
          );
          ref.current = null;
          setCurrentMatcher(null);
          setSelectionAreas(newArray);
        }
      };
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }, [
      selectionAreas,
      currentMatcher,
      setSelectionAreas,
      setClickAndHoldActive,
      setCurrentMatcher,
      ref,
    ]);

    // Make sure that if the cellSize prop changes, the active
    // cell also gets updated with the new size
    useEffect(() => {
      const listContainer = spreadsheetBodyRef?.current;
      const activeCellButton = listContainer.querySelector(
        `.${blockClass}__active-cell--highlight`
      );
      if (activeCellButton) {
        activeCellButton.style.height = `${defaultColumn?.rowHeight}px`;
      }
    }, [defaultColumn?.rowHeight]);

    // onClick fn for each cell in the data spreadsheet body,
    // adds the active cell highlight
    const handleBodyCellClick = useCallback(
      (cell, columnIndex) => {
        return (event) => {
          const isHoldingCommandKey = event.metaKey || event.ctrlKey;
          setContainerHasFocus(true);
          const activeCoordinates = {
            row: cell.row.index,
            column: columnIndex,
          };
          const tempMatcher = uuidv4();

          setActiveCellCoordinates(activeCoordinates);
          // prevent multiple selections unless cmd key is held
          // meaning that selectionAreas should only have one item by default
          if (isHoldingCommandKey) {
            setSelectionAreas((prev) => [
              ...prev,
              { point1: activeCoordinates, matcher: tempMatcher },
            ]);
          } else {
            // remove all previous cell selections
            const cellSelections = spreadsheetBodyRef.current.querySelectorAll(
              `.${blockClass}__selection-area--element`
            );
            Array.from(cellSelections).forEach((element) => element.remove());
            setSelectionAreas([
              { point1: activeCoordinates, matcher: tempMatcher },
            ]);
          }
          ref.current = tempMatcher;
          setCurrentMatcher(tempMatcher);
          setClickAndHoldActive(true);
        };
      },
      [
        setActiveCellCoordinates,
        setSelectionAreas,
        setContainerHasFocus,
        setClickAndHoldActive,
        setCurrentMatcher,
        ref,
      ]
    );

    const handleBodyCellHover = useCallback(
      (cell, columnIndex) => {
        return () => {
          if (clickAndHoldActive) {
            const cellCoordinates = {
              row: cell.row.index,
              column: columnIndex,
            };
            setSelectionAreas((prev) => {
              const selectionAreaClone = deepCloneObject(prev);
              const indexOfItemToUpdate = selectionAreaClone.findIndex(
                (item) => item.matcher === currentMatcher
              );
              // No items in the array match up with the currentMatcher value
              if (indexOfItemToUpdate === -1) {
                return prev;
              }
              // Do not update state if you're still hovering on the same cell
              if (
                selectionAreaClone[indexOfItemToUpdate].point2?.row ===
                  cellCoordinates.row &&
                selectionAreaClone[indexOfItemToUpdate].point2?.column ===
                  cellCoordinates.column
              ) {
                return prev;
              }
              selectionAreaClone[indexOfItemToUpdate].point2 = cellCoordinates;
              selectionAreaClone[indexOfItemToUpdate].areaCreated = false;
              return selectionAreaClone;
            });
          }
        };
      },
      [clickAndHoldActive, currentMatcher, setSelectionAreas]
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
              tabIndex={-1}
              data-row-index={index}
              data-column-index="header"
              type="button"
              className={cx(
                `${blockClass}__td`,
                `${blockClass}__td-th`,
                `${blockClass}--interactive-cell-element`
              )}
              style={{
                width: defaultColumn?.rowHeaderWidth,
              }}
            >
              {index + 1}
            </button>
            {/* CELL BUTTONS */}
            {row.cells.map((cell, index) => (
              <button
                tabIndex={-1}
                data-row-index={cell.row.index}
                data-column-index={index}
                {...cell.getCellProps()}
                className={cx(
                  `${blockClass}__td`,
                  `${blockClass}__body--td`,
                  `${blockClass}--interactive-cell-element`
                )}
                key={`cell_${index}`}
                onMouseDown={handleBodyCellClick(cell, index)}
                onMouseOver={handleBodyCellHover(cell, index)}
                onFocus={() => {}}
                type="button"
              >
                {cell.render('Cell')}
              </button>
            ))}
          </div>
        );
      },
      [
        prepareRow,
        rows,
        defaultColumn.rowHeaderWidth,
        handleBodyCellClick,
        handleBodyCellHover,
      ]
    );

    const spreadsheetBodyRef = useRef();
    return (
      <div
        ref={spreadsheetBodyRef}
        className={cx(`${blockClass}__body--container`)}
        {...getTableBodyProps()}
      >
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
  }
);

DataSpreadsheetBody.propTypes = {
  /**
   * Is the user clicking and holding in the data spreadsheet body
   */
  clickAndHoldActive: PropTypes.bool,

  /**
   * This represents the id of the current cell selection area
   */
  currentMatcher: PropTypes.string,

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
   * Array of selection areas
   */
  selectionAreas: PropTypes.array,

  /**
   * Setter fn for activeCellCoordinates state value
   */
  setActiveCellCoordinates: PropTypes.func,

  /**
   * Setter fn for clickAndHold state value
   */
  setClickAndHoldActive: PropTypes.func,

  /**
   * Setter fn for containerHasFocus state value
   */
  setContainerHasFocus: PropTypes.func,

  /**
   * Setter fn for currentMatcher state value
   */
  setCurrentMatcher: PropTypes.func,

  /**
   * Setter fn for selectionAreas state value
   */
  setSelectionAreas: PropTypes.func,

  /**
   * The total columns width
   */
  totalColumnsWidth: PropTypes.number,
};
