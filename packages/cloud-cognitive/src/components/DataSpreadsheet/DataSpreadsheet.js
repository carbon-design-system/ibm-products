/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, {
  useMemo,
  useRef,
  useEffect,
  useState,
  useCallback,
} from 'react';
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
import { useActiveElement } from '../../global/js/hooks';
import { createActiveCellFn } from './createActiveCellFn';
import { deepCloneObject } from '../../global/js/utils/deepCloneObject';
import { usePreviousValue } from '../../global/js/hooks';
import uuidv4 from '../../global/js/utils/uuidv4';
// cspell:words rowcount colcount

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--data-spreadsheet`;
const componentName = 'DataSpreadsheet';

// Default values for props
const defaults = {
  cellSize: 'standard',
  columns: Object.freeze([]),
  data: Object.freeze([]),
};

/**
 * DataSpreadsheet: used to organize and display large amounts of structured data, separated by columns and rows in a grid-like format.
 */
export let DataSpreadsheet = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).
      cellSize = defaults.cellSize,
      className,
      columns = defaults.columns,
      data = defaults.data,
      id,
      onActiveCellChange,

      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    const focusedElement = useActiveElement();
    const [containerHasFocus, setContainerHasFocus] = useState(false);
    const [activeCellCoordinates, setActiveCellCoordinates] = useState(null);
    const [selectionAreas, setSelectionAreas] = useState([]);
    const [clickAndHoldActive, setClickAndHoldActive] = useState(false);
    const [currentMatcher, setCurrentMatcher] = useState('');
    const previousState = usePreviousValue({ activeCellCoordinates });
    const cellSizeValue = getCellSize(cellSize);
    const currentMatcherRef = useRef();
    const activeKeys = useRef([]);
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

    // Reset everything when spreadsheet loses focus
    useEffect(() => {
      if (
        !focusedElement.classList.contains(
          `${blockClass}--interactive-cell-element`
        )
      ) {
        setContainerHasFocus(false);
        removeActiveCell();
        activeKeys.current = [];
      }
      if (
        focusedElement.classList.contains(blockClass) ||
        focusedElement.classList.contains(
          `${blockClass}--interactive-cell-element`
        )
      ) {
        setContainerHasFocus(true);
      }
    }, [focusedElement, removeActiveCell]);

    // Removes the active cell element
    const removeActiveCell = useCallback(() => {
      const activeCellHighlight = spreadsheetRef.current.querySelector(
        `.${blockClass}__active-cell--highlight`
      );
      if (activeCellHighlight) {
        activeCellHighlight.remove();
      }
    }, [spreadsheetRef]);

    // Removes the cell selection elements
    const removeCellSelections = useCallback(
      (matcher) => {
        if (matcher && typeof matcher === 'string') {
          const selectionToRemove = spreadsheetRef.current.querySelector(
            `[data-matcher-id="${matcher}"]`
          );
          if (selectionToRemove) {
            selectionToRemove.remove();
          }
        } else {
          const cellSelections = spreadsheetRef.current.querySelectorAll(
            `.${blockClass}__selection-area--element`
          );
          [...cellSelections].forEach((element) => element.remove());
        }
      },
      [spreadsheetRef]
    );

    // Click outside useEffect
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
        setActiveCellCoordinates(null);
        setSelectionAreas([]);
        removeActiveCell();
        removeCellSelections();
        setContainerHasFocus(false);
        activeKeys.current = [];
      };
      document.addEventListener('click', handleOutsideClick);
      return () => {
        document.removeEventListener('click', handleOutsideClick);
      };
    }, [spreadsheetRef, removeActiveCell, removeCellSelections]);

    const createActiveCell = useCallback(
      ({ placementElement, coords, addToHeader = false }) => {
        const activeCellFullData =
          typeof coords?.column === 'number' && typeof coords?.row === 'number'
            ? rows[coords?.row].cells[coords?.column]
            : null;
        const activeCellValue = activeCellFullData
          ? Object.values(activeCellFullData.row.values)[coords?.column]
          : null;
        const handleActiveCellMouseEnter = () => {
          handleActiveCellMouseEnterCallback(
            selectionAreas,
            clickAndHoldActive
          );
        };
        const prevCoords = previousState?.activeCellCoordinates;
        // Only create an active cell if the activeCellCoordinates have changed
        if (
          prevCoords?.row !== coords?.row ||
          prevCoords?.column !== coords?.column
        ) {
          createActiveCellFn({
            placementElement,
            coords,
            addToHeader,
            contextRef: spreadsheetRef,
            blockClass,
            onActiveCellChange,
            activeCellValue,
            handleActiveCellMouseEnter,
          });
        }
      },
      [
        spreadsheetRef,
        rows,
        onActiveCellChange,
        clickAndHoldActive,
        handleActiveCellMouseEnterCallback,
        selectionAreas,
        previousState?.activeCellCoordinates,
      ]
    );

    const handleInitialArrowPress = useCallback(() => {
      // If activeCellCoordinates is null then we need to set an initial value
      // which will place the activeCell on the select all cell/button
      if (!activeCellCoordinates) {
        setActiveCellCoordinates({
          column: 'header',
          row: 'header',
        });
      }
      return;
    }, [activeCellCoordinates]);

    const updateActiveCellCoordinates = useCallback(
      ({ coords, updatedValue }) => {
        const newActiveCell = {
          ...coords,
          ...updatedValue,
        };
        setActiveCellCoordinates(newActiveCell);
        // Only run if the active cell is _not_ a header cell. This will add a point1 object
        // to selectionAreas every time the active cell changes, allowing us to create cell
        // selections using keyboard
        if (
          newActiveCell.row !== 'header' &&
          newActiveCell.column !== 'header'
        ) {
          const tempMatcher = uuidv4();
          setSelectionAreas([{ point1: newActiveCell, matcher: tempMatcher }]);
          setCurrentMatcher(tempMatcher);
        }
      },
      []
    );

    const handleMultipleKeys = useCallback(() => {
      const activeKeyValues = activeKeys.current;
      const selectionAreasClone = deepCloneObject(selectionAreas);
      const indexOfCurrentArea = selectionAreasClone.findIndex(
        (item) => item.matcher === currentMatcher
      );
      const pointToUpdate = selectionAreasClone[indexOfCurrentArea]?.point2
        ? selectionAreasClone[indexOfCurrentArea].point2
        : selectionAreasClone[indexOfCurrentArea].point1;
      // Down + Shift
      if (
        activeKeyValues.includes('Shift') &&
        activeKeyValues.includes('ArrowDown')
      ) {
        if (rows.length - 1 === pointToUpdate.row) {
          return;
        }
        const newPoint = {
          row: pointToUpdate.row + 1,
          column: pointToUpdate.column,
        };
        selectionAreasClone[indexOfCurrentArea].point2 = newPoint;
        selectionAreasClone[indexOfCurrentArea].areaCreated = false;
        setSelectionAreas(selectionAreasClone);
      }
      // Right + Shift
      if (
        activeKeyValues.includes('Shift') &&
        activeKeyValues.includes('ArrowRight')
      ) {
        if (columns.length - 1 === pointToUpdate.column) {
          return;
        }
        const newPoint = {
          row: pointToUpdate.row,
          column: pointToUpdate.column + 1,
        };
        selectionAreasClone[indexOfCurrentArea].point2 = newPoint;
        selectionAreasClone[indexOfCurrentArea].areaCreated = false;
        setSelectionAreas(selectionAreasClone);
      }
      // Up + Shift
      if (
        activeKeyValues.includes('Shift') &&
        activeKeyValues.includes('ArrowUp')
      ) {
        if (pointToUpdate.row === 0) {
          return;
        }
        const newPoint = {
          row: pointToUpdate.row - 1,
          column: pointToUpdate.column,
        };
        selectionAreasClone[indexOfCurrentArea].point2 = newPoint;
        selectionAreasClone[indexOfCurrentArea].areaCreated = false;
        setSelectionAreas(selectionAreasClone);
      }
      // Left + Shift
      if (
        activeKeyValues.includes('Shift') &&
        activeKeyValues.includes('ArrowLeft')
      ) {
        if (pointToUpdate.column === 0) {
          return;
        }
        const newPoint = {
          row: pointToUpdate.row,
          column: pointToUpdate.column - 1,
        };
        selectionAreasClone[indexOfCurrentArea].point2 = newPoint;
        selectionAreasClone[indexOfCurrentArea].areaCreated = false;
        setSelectionAreas(selectionAreasClone);
      }
    }, [selectionAreas, currentMatcher, columns, rows]);

    const handleKeyPress = useCallback(
      (event) => {
        const { key } = event;
        // Command keys need to be returned as there is default browser behavior with these keys
        if (key === 'Meta' || key === 'Control') {
          return;
        }
        // Prevent arrow keys, home key, and end key from scrolling the page when the data spreadsheet container has focus
        if (
          [
            'End',
            'Home',
            'ArrowLeft',
            'ArrowUp',
            'ArrowRight',
            'ArrowDown',
          ].indexOf(key) > -1
        ) {
          event.preventDefault();
        }
        // Clear out all cell selection areas if user uses any arrow key, except if the shift key is being held
        if (
          ['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'].indexOf(key) > -1
        ) {
          if (
            selectionAreas?.length &&
            key !== 'Shift' &&
            !activeKeys.current.includes('Shift')
          ) {
            setSelectionAreas([]);
            removeCellSelections();
          }
        }
        // Update list of activeKeys
        if (!activeKeys.current?.includes(key)) {
          const activeClone = [...activeKeys.current];
          activeKeys.current = [...activeClone, key];
        }
        if (activeKeys.current?.length > 1) {
          handleMultipleKeys();
        }
        // Allow arrow key navigation if there are less than two activeKeys OR
        // if one of the activeCellCoordinates is in a header position
        if (
          !activeKeys.current.includes('Shift') ||
          activeCellCoordinates.row === 'header' ||
          activeCellCoordinates.column === 'header'
        ) {
          switch (key) {
            // Tab
            case 'Tab': {
              setSelectionAreas([]);
              removeActiveCell();
              setContainerHasFocus(false);
              setActiveCellCoordinates(null);
              break;
            }
            // Left
            case 'ArrowLeft': {
              handleInitialArrowPress();
              const coordinatesClone = { ...activeCellCoordinates };
              if (coordinatesClone.column === 'header') {
                return;
              }
              if (typeof coordinatesClone.column === 'number') {
                if (coordinatesClone.column === 0) {
                  updateActiveCellCoordinates({
                    coords: coordinatesClone,
                    updatedValue: { column: 'header' },
                  });
                  return;
                }
                updateActiveCellCoordinates({
                  coords: coordinatesClone,
                  updatedValue: { column: coordinatesClone.column - 1 },
                });
              }
              break;
            }
            // Up
            case 'ArrowUp': {
              handleInitialArrowPress();
              const coordinatesClone = { ...activeCellCoordinates };
              if (coordinatesClone.row === 'header') {
                return;
              }
              if (typeof coordinatesClone.row === 'number') {
                // set row back to header if we are at index 0
                if (coordinatesClone.row === 0) {
                  updateActiveCellCoordinates({
                    coords: coordinatesClone,
                    updatedValue: { row: 'header' },
                  });
                  return;
                }
                // if we are at any other index than 0, subtract 1 from current row index
                updateActiveCellCoordinates({
                  coords: coordinatesClone,
                  updatedValue: { row: coordinatesClone.row - 1 },
                });
              }
              break;
            }
            // Right
            case 'ArrowRight': {
              handleInitialArrowPress();
              const coordinatesClone = { ...activeCellCoordinates };
              if (coordinatesClone.column === 'header') {
                updateActiveCellCoordinates({
                  coords: coordinatesClone,
                  updatedValue: { column: 0 },
                });
              }
              if (typeof coordinatesClone.column === 'number') {
                // Prevent active cell coordinates from updating if the active
                // cell is in the last column, ie we can't go any further to the right
                if (columns.length - 1 === coordinatesClone.column) {
                  return;
                }
                updateActiveCellCoordinates({
                  coords: coordinatesClone,
                  updatedValue: { column: coordinatesClone.column + 1 },
                });
              }
              break;
            }
            // Down
            case 'ArrowDown': {
              handleInitialArrowPress();
              const coordinatesClone = { ...activeCellCoordinates };
              if (coordinatesClone.row === 'header') {
                updateActiveCellCoordinates({
                  coords: coordinatesClone,
                  updatedValue: { row: 0 },
                });
              }
              if (typeof coordinatesClone.row === 'number') {
                // Prevent active cell coordinates from updating if the active
                // cell is in the last row, ie we can't go any further down since
                // we are in the last row
                if (rows.length - 1 === coordinatesClone.row) {
                  return;
                }
                updateActiveCellCoordinates({
                  coords: coordinatesClone,
                  updatedValue: { row: coordinatesClone.row + 1 },
                });
              }
              break;
            }
          }
        }
      },
      [
        updateActiveCellCoordinates,
        handleInitialArrowPress,
        handleMultipleKeys,
        activeCellCoordinates,
        selectionAreas?.length,
        removeCellSelections,
        removeActiveCell,
        columns.length,
        rows.length,
      ]
    );

    // Only update if there are cell selection areas
    // Find point object that matches currentMatcher and remove the second point
    // because hovering over the active cell while clicking and holding should
    // remove the previously existing selection area
    const handleActiveCellMouseEnterCallback = useCallback(
      (areas, clickHold) => {
        const freshMatcherValue = currentMatcherRef.current;
        if (!freshMatcherValue) {
          return;
        }
        if (areas && areas.length && clickHold && freshMatcherValue) {
          setSelectionAreas((prev) => {
            const selectionAreaClone = deepCloneObject(prev);
            const indexOfItemToUpdate = selectionAreaClone.findIndex(
              (item) => item.matcher === freshMatcherValue
            );
            if (indexOfItemToUpdate === -1) {
              return prev;
            }
            if (
              typeof selectionAreaClone[indexOfItemToUpdate].point2 ===
                'object' &&
              selectionAreaClone[indexOfItemToUpdate].areaCreated
            ) {
              selectionAreaClone[indexOfItemToUpdate].point2 = null;
              selectionAreaClone[indexOfItemToUpdate].areaCreated = false;
              removeCellSelections(freshMatcherValue);
              return selectionAreaClone;
            }
            return prev;
          });
        }
      },
      [removeCellSelections]
    );

    // Adds active cell highlight to correct cell onKeyDown
    useEffect(() => {
      const activeCellPlacementElement = spreadsheetRef?.current.querySelector(
        `[data-row-index="${activeCellCoordinates?.row}"][data-column-index="${activeCellCoordinates?.column}"]`
      );
      const shouldPlaceActiveCellInHeader =
        activeCellCoordinates?.row === 'header' && true;
      const selectAllElement = spreadsheetRef?.current.querySelector(
        `[data-row-index="header"][data-column-index="header"]`
      );
      if (containerHasFocus) {
        createActiveCell({
          placementElement: activeCellCoordinates
            ? activeCellPlacementElement
            : selectAllElement,
          coords: activeCellCoordinates,
          addToHeader: shouldPlaceActiveCellInHeader,
        });
      }
    }, [
      activeCellCoordinates,
      spreadsheetRef,
      createActiveCell,
      containerHasFocus,
    ]);

    const handleKeyUp = (event) => {
      const { key } = event;
      // Remove key from active keys array on key up
      if (activeKeys.current?.includes(key)) {
        const activeKeysClone = [...activeKeys.current];
        const filteredKeysClone = activeKeysClone.filter(
          (item) => item !== key
        );
        activeKeys.current = filteredKeysClone;
      }
    };

    const localRef = useRef();
    const spreadsheetRef = ref || localRef;
    return (
      <div
        {...rest}
        {...getTableProps()}
        {...getDevtoolsProps(componentName)}
        className={cx(blockClass, className, {
          [`${blockClass}__container-has-focus`]: containerHasFocus,
        })}
        ref={spreadsheetRef}
        role="grid"
        tabIndex={0}
        aria-rowcount={rows?.length || 0}
        aria-colcount={columns?.length || 0}
        onKeyDown={handleKeyPress}
        onKeyUp={handleKeyUp}
        onFocus={() => setContainerHasFocus(true)}
      >
        {/* HEADER */}
        <DataSpreadsheetHeader
          activeCellCoordinates={activeCellCoordinates}
          cellSizeValue={cellSizeValue}
          defaultColumn={defaultColumn}
          headerGroups={headerGroups}
        />

        {/* BODY */}
        <DataSpreadsheetBody
          activeCellCoordinates={activeCellCoordinates}
          ref={currentMatcherRef}
          clickAndHoldActive={clickAndHoldActive}
          setClickAndHoldActive={setClickAndHoldActive}
          currentMatcher={currentMatcher}
          setCurrentMatcher={setCurrentMatcher}
          setContainerHasFocus={setContainerHasFocus}
          selectionAreas={selectionAreas}
          setSelectionAreas={setSelectionAreas}
          cellSize={cellSize}
          defaultColumn={defaultColumn}
          getTableBodyProps={getTableBodyProps}
          onActiveCellChange={onActiveCellChange}
          prepareRow={prepareRow}
          rows={rows}
          setActiveCellCoordinates={setActiveCellCoordinates}
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
