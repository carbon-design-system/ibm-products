/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {
  useRef,
  useCallback,
  useEffect,
  forwardRef,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { FixedSizeList } from 'react-window';
import cx from 'classnames';
import { px } from '@carbon/layout';

import { pkg } from '../../settings';
import { deepCloneObject } from '../../global/js/utils/deepCloneObject';
import { usePreviousValue } from '../../global/js/hooks';

import { removeCellSelections } from './utils/removeCellSelections';
import { createCellSelectionArea } from './utils/createCellSelectionArea';
import { checkActiveHeaderCell } from './utils/checkActiveHeaderCell';
import { checkSelectedHeaderCell } from './utils/checkSelectedHeaderCell';
import { getSpreadsheetWidth } from './utils/getSpreadsheetWidth';

import { useSpreadsheetMouseUp } from './hooks';
import {
  handleBodyCellClick,
  handleBodyCellHover,
  handleRowHeaderClick,
} from './utils/commonEventHandlers';

const blockClass = `${pkg.prefix}--data-spreadsheet`;

export const DataSpreadsheetBody = forwardRef(
  (
    {
      activeCellRef,
      columns,
      activeCellCoordinates,
      defaultColumn,
      defaultEmptyRowCount,
      getTableBodyProps,
      headerGroups,
      id,
      onDataUpdate,
      prepareRow,
      rows,
      selectionAreaData,
      setSelectionAreaData,
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
      onSelectionAreaChange,
      setActiveCellInsideSelectionArea,
      totalVisibleColumns,
      setHeaderCellHoldActive,
      setColumnOrder,
      visibleColumns,
    },
    ref
  ) => {
    const [validStartingPoint, setValidStartingPoint] = useState(false);
    const contentScrollRef = useRef();

    const previousState = usePreviousValue({
      selectionAreaData,
      clickAndHoldActive,
      rowHeight: defaultColumn.rowHeight,
    });

    // Set custom css property containing the spreadsheet total width
    useEffect(() => {
      ref?.current.style.setProperty(
        `--${blockClass}--total-width`,
        px(totalColumnsWidth + scrollBarSize)
      );
    }, [ref, scrollBarSize, totalColumnsWidth]);

    // Call the `onSelectionAreaChange` handler to send selection area data
    // back to the consumer
    useEffect(() => {
      if (selectionAreaData.length) {
        if (
          (!clickAndHoldActive && previousState?.clickAndHoldActive) ||
          previousState?.selectionAreaData?.length !== selectionAreaData?.length
        ) {
          onSelectionAreaChange(selectionAreaData);
        }
      }
    }, [
      previousState?.selectionAreaData,
      selectionAreaData,
      onSelectionAreaChange,
      clickAndHoldActive,
      previousState?.clickAndHoldActive,
    ]);

    // Create cell selection areas based on selectionAreas array
    useEffect(() => {
      if (selectionAreas && selectionAreas.length) {
        selectionAreas.map((area) => {
          // Setup selection area data that will be sent back to consumer via onSelectionAreaChange prop
          if (area.areaCreated) {
            const rowStart = Math.min(area.point1.row, area.point2.row);
            const rowEnd = Math.max(area.point1.row, area.point2.row);
            const columnStart = Math.min(
              area.point1.column,
              area.point2.column
            );
            const columnEnd = Math.max(area.point1.column, area.point2.column);
            const selectionData = {
              rows: {
                start: rowStart,
                end: rowEnd,
              },
              columns: {
                start: columnStart,
                end: columnEnd,
              },
              cells: populateSelectionAreaCellData({
                rowStart,
                rowEnd,
                columnStart,
                columnEnd,
              }),
              selectionId: area.matcher,
            };
            setSelectionAreaData((prev) => {
              const prevValues = deepCloneObject(prev);
              const newAreaData = prevValues.filter(
                (item) => item.selectionId !== area.matcher
              );
              return [...newAreaData, selectionData];
            });
          }
          if (!area.areaCreated && area.point1 && area.point2 && area.matcher) {
            createCellSelectionArea({
              ref,
              area,
              blockClass,
              defaultColumn,
              selectionAreas,
              setSelectionAreas,
              setActiveCellInsideSelectionArea,
              visibleColumns,
            });
          }
          return;
        });
      }
    }, [
      selectionAreas,
      setSelectionAreas,
      defaultColumn,
      onSelectionAreaChange,
      setSelectionAreaData,
      ref,
      activeCellCoordinates,
      setActiveCellInsideSelectionArea,
      visibleColumns,
    ]);

    const populateSelectionAreaCellData = ({
      rowStart,
      rowEnd,
      columnStart,
      columnEnd,
    }) => {
      const cellContainer = [];
      for (let rowIndex = rowStart; rowIndex <= rowEnd; rowIndex++) {
        for (
          let columnIndex = columnStart;
          columnIndex <= columnEnd;
          columnIndex++
        ) {
          cellContainer.push([
            rowIndex,
            columnIndex,
            `${blockClass}__cell--${rowIndex}--${columnIndex}`,
          ]);
        }
      }
      return cellContainer;
    };

    useSpreadsheetMouseUp({
      currentMatcher,
      setClickAndHoldActive,
      setSelectionAreas,
      setValidStartingPoint,
      validStartingPoint,
      ref,
      setHeaderCellHoldActive,
      setColumnOrder,
      visibleColumns,
      setActiveCellCoordinates,
      rows,
      activeCellCoordinates,
      defaultColumn,
      selectionAreas,
    });

    // Make sure that if the cellSize prop changes, the active
    // cell also gets updated with the new size and new top placement
    // value. All of the cell selections will be updated as well
    useEffect(() => {
      const listContainer = spreadsheetBodyRef?.current;
      const activeCellButton = listContainer.querySelector(
        `.${blockClass}__active-cell--highlight`
      );
      if (
        activeCellButton &&
        defaultColumn.rowHeight !== previousState.rowHeight
      ) {
        activeCellButton.style.height = `${defaultColumn?.rowHeight}px`;
        if (activeCellCoordinates) {
          const activeTargetElement = ref.current.querySelector(
            `[data-row-index="${activeCellCoordinates.row}"][data-column-index="${activeCellCoordinates.column}"]`
          );
          const listContainer = ref.current.querySelector(
            `.${blockClass}__list--container`
          );
          const newActiveCellTopPosition =
            activeTargetElement.getBoundingClientRect().top -
            listContainer.getBoundingClientRect().top;
          activeCellButton.style.top = px(newActiveCellTopPosition);
          removeCellSelections({ spreadsheetRef: ref });
          selectionAreas.map((area) => {
            if (
              !area.areaCreated &&
              area.point1 &&
              area.point2 &&
              area.matcher
            ) {
              return createCellSelectionArea({
                ref,
                area,
                blockClass,
                defaultColumn,
                selectionAreas,
                setSelectionAreas,
                setActiveCellInsideSelectionArea,
                visibleColumns,
              });
            }
          });
        }
      }
    }, [
      defaultColumn,
      ref,
      activeCellCoordinates,
      previousState?.rowHeight,
      selectionAreas,
      setActiveCellInsideSelectionArea,
      setSelectionAreas,
      visibleColumns,
    ]);
    //selectionAreas will be set when ever a selection area is made.
    useEffect(() => {
      removeDuplicateSelections();
    }, [selectionAreas, removeDuplicateSelections]);

    //this method will check for any duplicate selection area and remove.
    //same selections are those have the same height, width, top, left styles. These inline styles are being set in createCellSelection util.
    const removeDuplicateSelections = useCallback(() => {
      let uniqueAttrArray = [],
        removedSelectionAreaMatcherArr = [];
      ref.current
        .querySelectorAll(`.${blockClass}__selection-area--element`)
        .forEach((selectorEl) => {
          let { top, left, height, width } = selectorEl.style;
          let uniqueAttrStr = `${top}${left}${height}${width}`; // eg: 20px30px70px90px
          if (uniqueAttrArray.indexOf(uniqueAttrStr) == -1) {
            uniqueAttrArray.push(uniqueAttrStr);
          } else {
            selectorEl.remove(); // this is identified as duplicate selection and hence removing.
            removedSelectionAreaMatcherArr.push(
              selectorEl.getAttribute('data-matcher-id')
            );
          }
        });

      //clean the duplicate selectionAreaData and selectionArea
      if (removedSelectionAreaMatcherArr.length) {
        setSelectionAreas((prev) => {
          const prevValues = deepCloneObject(prev);
          return prevValues.filter(
            (item) => !removedSelectionAreaMatcherArr.includes(item.matcher)
          );
        });
        setSelectionAreaData((prev) => {
          const prevValues = deepCloneObject(prev);
          return prevValues.filter(
            (item) => !removedSelectionAreaMatcherArr.includes(item.selectionId)
          );
        });
      }
    }, [ref, setSelectionAreas, setSelectionAreaData]);

    // onClick fn for each cell in the data spreadsheet body,
    // adds the active cell highlight

    const handleBodyCellClickEvent = useCallback(
      (cell, columnIndex) => {
        return (event) => {
          handleBodyCellClick(
            cell,
            columnIndex,
            event,
            currentMatcher,
            activeCellCoordinates,
            selectionAreas,
            setActiveCellCoordinates,
            setSelectionAreas,
            setContainerHasFocus,
            setClickAndHoldActive,
            setCurrentMatcher,
            ref,
            setSelectionAreaData,
            setActiveCellInsideSelectionArea,
            activeCellRef,
            setValidStartingPoint
          );
        };
      },
      [
        currentMatcher,
        activeCellCoordinates,
        selectionAreas,
        setActiveCellCoordinates,
        setSelectionAreas,
        setContainerHasFocus,
        setClickAndHoldActive,
        setCurrentMatcher,
        ref,
        setSelectionAreaData,
        setActiveCellInsideSelectionArea,
        activeCellRef,
      ]
    );

    const handleBodyScroll = () => {
      const headerRowElement = ref.current.querySelector(`
        .${blockClass}__header--container .${blockClass}__tr`);
      headerRowElement.scrollLeft = contentScrollRef.current.scrollLeft;
    };

    useEffect(() => {
      contentScrollRef.current.addEventListener('scroll', (event) =>
        handleBodyScroll(event)
      );
      const contentScrollElementRef = contentScrollRef.current;
      return () => {
        contentScrollElementRef.removeEventListener('scroll', handleBodyScroll);
      };
    });

    const handleBodyCellHoverEvent = useCallback(
      (cell, columnIndex) => {
        return () => {
          handleBodyCellHover(
            cell,
            columnIndex,
            clickAndHoldActive,
            currentMatcher,
            setSelectionAreas
          );
        };
      },
      [clickAndHoldActive, currentMatcher, setSelectionAreas]
    );

    const handleRowHeaderClickEvent = useCallback(
      (index) => {
        return (event) => {
          handleRowHeaderClick(
            index,
            event,
            columns,
            ref,
            setSelectionAreas,
            setCurrentMatcher,
            setActiveCellCoordinates,
            activeCellCoordinates,
            rows,
            setSelectionAreaData
          );
        };
      },
      [
        columns,
        ref,
        setSelectionAreas,
        setCurrentMatcher,
        setActiveCellCoordinates,
        activeCellCoordinates,
        rows,
        setSelectionAreaData,
      ]
    );

    // Builds the empty rows and calls `onDataUpdate` to set the new empty rows
    // using defaultEmptyRowCount to determine how many empty rows are created.
    useEffect(() => {
      if (!rows?.length) {
        const buildEmptyRows = () => {
          const emptyRowData = [];
          [...Array(defaultEmptyRowCount)].map(() => {
            const emptyCell = {};
            headerGroups[0]?.headers.map((header) => {
              emptyCell[header.id] = null;
            });
            emptyRowData.push(emptyCell);
          });
          onDataUpdate(emptyRowData);
        };
        buildEmptyRows();
      }
    }, [rows, headerGroups, defaultEmptyRowCount, onDataUpdate]);

    const RenderEmptyRows = () => {
      return <div />;
    };

    // Renders each row/cell in the spreadsheet body
    const RenderRow = useCallback(
      ({ index, style }) => {
        const row = rows[index];
        if (rows && rows.length) {
          prepareRow(row);
          return (
            <div
              {...row.getRowProps({ style })}
              className={cx(`${blockClass}__tr`)}
              data-row-index={index}
              aria-rowindex={index + 1}
              aria-owns={`${blockClass}__cell-editor-text-area`}
            >
              {/* ROW HEADER BUTTON */}
              <div
                role="rowheader"
                className={`${blockClass}__td-th--cell-container`}
              >
                <button
                  id={`${blockClass}__cell--${index}--header`}
                  tabIndex={-1}
                  data-row-index={index}
                  data-column-index="header"
                  type="button"
                  onClick={handleRowHeaderClickEvent(index)}
                  className={cx(
                    `${blockClass}__td`,
                    `${blockClass}__td-th`,
                    `${blockClass}--interactive-cell-element`,
                    {
                      [`${blockClass}__td-th--active-header`]:
                        activeCellCoordinates?.row === index ||
                        checkActiveHeaderCell(index, selectionAreas, 'row'),
                      [`${blockClass}__td-th--selected-header`]:
                        checkSelectedHeaderCell(
                          index,
                          selectionAreas,
                          'row',
                          columns
                        ),
                    }
                  )}
                  style={{
                    width: defaultColumn?.rowHeaderWidth,
                  }}
                >
                  {index + 1}
                </button>
              </div>
              {/* CELL BUTTONS */}
              {row.cells.map((cell, index) => (
                <div
                  key={`cell_${index}`}
                  aria-colindex={index + 1}
                  {...cell.getCellProps()}
                  role="gridcell"
                  style={{
                    ...cell.getCellProps().style,
                    display: 'grid',
                    minWidth: cell?.column?.width || defaultColumn?.width,
                  }}
                >
                  <button
                    id={`${blockClass}__cell--${cell.row.index}--${index}`}
                    tabIndex={-1}
                    data-row-index={cell.row.index}
                    data-column-index={index}
                    className={cx(
                      `${blockClass}__td`,
                      `${blockClass}__body--td`,
                      `${blockClass}--interactive-cell-element`
                    )}
                    onMouseDown={handleBodyCellClickEvent(cell, index)}
                    onMouseOver={handleBodyCellHoverEvent(cell, index)}
                    onFocus={() => {}}
                    type="button"
                  >
                    {cell.render('Cell')}
                  </button>
                </div>
              ))}
            </div>
          );
        }
      },
      [
        prepareRow,
        rows,
        activeCellCoordinates?.row,
        selectionAreas,
        handleRowHeaderClickEvent,
        handleBodyCellClickEvent,
        handleBodyCellHoverEvent,
        defaultColumn,
        columns,
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
          itemCount={rows.length || defaultEmptyRowCount}
          itemSize={defaultColumn?.rowHeight}
          width={getSpreadsheetWidth({
            scrollBarSizeValue: scrollBarSize,
            totalVisibleColumns,
            defaultColumn,
            totalColumnsWidth,
            visibleColumns,
          })}
          outerRef={contentScrollRef}
        >
          {rows?.length ? RenderRow : RenderEmptyRows}
        </FixedSizeList>
      </div>
    );
  }
);

DataSpreadsheetBody.propTypes = {
  /**
   * Object containing the active cell coordinates
   */
  activeCellCoordinates: PropTypes.shape({
    row: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    column: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),

  /**
   *This is the ref of the button input, which is the active cell element
   */
  activeCellRef: PropTypes.object,
  /**
   * Is the user clicking and holding in the data spreadsheet body
   */
  clickAndHoldActive: PropTypes.bool,

  /**
   * All of the spreadsheet columns
   */
  columns: PropTypes.array,

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
   * Sets the number of empty rows to be created when there is no data provided
   */
  defaultEmptyRowCount: PropTypes.number,

  /**
   * Function to set table body prop values
   */
  getTableBodyProps: PropTypes.func,

  /**
   * Headers provided from useTable hook
   */
  headerGroups: PropTypes.arrayOf(PropTypes.object),

  /**
   * The spreadsheet id
   */
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * The event handler that is called when the active cell changes
   */
  onActiveCellChange: PropTypes.func,

  /**
   * The event handler that is called to set the rows for the empty spreadsheet
   */
  onDataUpdate: PropTypes.func,

  /**
   * The event handler that is called when the selection areas change
   */
  onSelectionAreaChange: PropTypes.func,

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
   * Array of selection area data
   */
  selectionAreaData: PropTypes.array,

  /**
   * Array of selection areas
   */
  selectionAreas: PropTypes.array,

  /**
   * Setter fn for activeCellCoordinates state value
   */
  setActiveCellCoordinates: PropTypes.func,

  /**
   * Setter fn for active cell inside of selection area
   */
  setActiveCellInsideSelectionArea: PropTypes.func,

  /**
   * Setter fn for clickAndHold state value
   */
  setClickAndHoldActive: PropTypes.func,

  /**
   * Setter fn for column ordering, provided from react-table
   */
  setColumnOrder: PropTypes.func,

  /**
   * Setter fn for containerHasFocus state value
   */
  setContainerHasFocus: PropTypes.func,

  /**
   * Setter fn for currentMatcher state value
   */
  setCurrentMatcher: PropTypes.func,

  /**
   * Setter fn for header cell hold active value
   */
  setHeaderCellHoldActive: PropTypes.func,

  /**
   * Setter fn for selectionAreaData state value
   */
  setSelectionAreaData: PropTypes.func,

  /**
   * Setter fn for selectionAreas state value
   */
  setSelectionAreas: PropTypes.func,

  /**
   * The total columns width
   */
  totalColumnsWidth: PropTypes.number,

  /**
   * The total number of columns to be initially visible, additional columns will be rendered and
   * visible via horizontal scrollbar
   */
  totalVisibleColumns: PropTypes.number,

  /**
   * Prop from react-table used to reorder columns
   */
  visibleColumns: PropTypes.array,
};
