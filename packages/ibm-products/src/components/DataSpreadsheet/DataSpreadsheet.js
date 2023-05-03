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
  useState,
  useCallback,
  useEffect,
} from 'react';
import { useBlockLayout, useTable, useColumnOrder } from 'react-table';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';

import { pkg } from '../../settings';
import { DataSpreadsheetBody } from './DataSpreadsheetBody';
import { DataSpreadsheetHeader } from './DataSpreadsheetHeader';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { getScrollbarWidth } from '../../global/js/utils/getScrollbarWidth';
import { useActiveElement, usePreviousValue } from '../../global/js/hooks';
import uuidv4 from '../../global/js/utils/uuidv4';
import { deepCloneObject } from '../../global/js/utils/deepCloneObject';

import {
  useResetSpreadsheetFocus,
  useSpreadsheetOutsideClick,
  useMoveActiveCell,
  useMultipleKeyTracking,
  useSpreadsheetEdit,
} from './hooks';

import { createActiveCellFn } from './utils/createActiveCellFn';
import { getCellSize } from './utils/getCellSize';
import {
  handleMultipleKeys,
  includesResourceKey,
  includesShift,
} from './utils/handleMultipleKeys';
import { handleHeaderCellSelection } from './utils/handleHeaderCellSelection';
import { removeCellSelections } from './utils/removeCellSelections';
import { selectAllCells } from './utils/selectAllCells';
import { handleEditSubmit } from './utils/handleEditSubmit';
import { handleActiveCellInSelectionEnter } from './utils/handleActiveCellInSelectionEnter';
import { handleActiveCellInSelectionTab } from './utils/handleActiveCellInSelectionTab';
import { handleCellDeletion } from './utils/handleCellDeletion';
// cspell:words rowcount colcount

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--data-spreadsheet`;
const componentName = 'DataSpreadsheet';

// Default values for props
const defaults = {
  cellSize: 'sm',
  columns: Object.freeze([]),
  data: Object.freeze([]),
  defaultEmptyRowCount: 16,
  onDataUpdate: Object.freeze(() => {}),
  onActiveCellChange: Object.freeze(() => {}),
  onSelectionAreaChange: Object.freeze(() => {}),
  theme: 'light',
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
      defaultEmptyRowCount = defaults.defaultEmptyRowCount,
      onDataUpdate = defaults.onDataUpdate,
      id,
      onActiveCellChange = defaults.onActiveCellChange,
      onSelectionAreaChange = defaults.onSelectionAreaChange,
      selectAllAriaLabel,
      spreadsheetAriaLabel,
      theme,
      totalVisibleColumns,

      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    const multiKeyTrackingRef = useRef();
    const localRef = useRef();
    const spreadsheetRef = ref || localRef;
    const focusedElement = useActiveElement();
    const [containerHasFocus, setContainerHasFocus] = useState(false);
    const [activeCellCoordinates, setActiveCellCoordinates] = useState(null);
    const [selectionAreas, setSelectionAreas] = useState([]);
    const [selectionAreaData, setSelectionAreaData] = useState([]);
    const [clickAndHoldActive, setClickAndHoldActive] = useState(false);
    const [currentMatcher, setCurrentMatcher] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [cellEditorValue, setCellEditorValue] = useState('');
    const [headerCellHoldActive, setHeaderCellHoldActive] = useState(false);
    const [activeCellInsideSelectionArea, setActiveCellInsideSelectionArea] =
      useState(false);
    const previousState = usePreviousValue({
      activeCellCoordinates,
      isEditing,
    });
    const cellSizeValue = getCellSize(cellSize);
    const cellEditorRef = useRef();
    const [activeCellContent, setActiveCellContent] = useState();
    const activeCellRef = useRef();
    const cellEditorRulerRef = useRef();
    const defaultColumn = useMemo(
      () => ({
        width: 150,
        rowHeaderWidth: 64,
        rowHeight: cellSizeValue,
      }),
      [cellSizeValue]
    );
    const { keysPressedList, usingMac } = useMultipleKeyTracking({
      ref: multiKeyTrackingRef,
      containerHasFocus,
      isEditing,
    });
    const scrollBarSize = useMemo(() => getScrollbarWidth(), []);

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      totalColumnsWidth,
      prepareRow,
      setColumnOrder,
      visibleColumns,
    } = useTable(
      {
        columns,
        data,
        defaultColumn,
      },
      useBlockLayout,
      useColumnOrder
    );

    // Update the spreadsheet data after editing a cell
    const updateData = useCallback(
      (rowIndex, columnId, newValue) => {
        onDataUpdate((prev) =>
          prev.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...prev[rowIndex],
                [columnId]: cellEditorValue || newValue,
              };
            }
            return row;
          })
        );
      },
      [cellEditorValue, onDataUpdate]
    );

    // Removes the active cell element
    const removeActiveCell = useCallback(() => {
      const activeCellHighlight = spreadsheetRef.current.querySelector(
        `.${blockClass}__active-cell--highlight`
      );
      activeCellHighlight.style.display = 'none';
    }, [spreadsheetRef]);

    const removeCellEditor = useCallback(() => {
      setCellEditorValue('');
      setIsEditing(false);
      cellEditorRef.current.style.display = 'none';
    }, []);

    // Remove cell editor if the active cell coordinates change and save with new cell data, this will
    // happen if you click on another cell while isEditing is true
    useEffect(() => {
      const prevCoords = previousState?.activeCellCoordinates;
      if (
        (prevCoords?.row !== activeCellCoordinates?.row ||
          prevCoords?.column !== activeCellCoordinates?.column) &&
        isEditing
      ) {
        const cellProps = rows[prevCoords?.row].cells[prevCoords?.column];
        removeCellEditor();
        updateData(prevCoords?.row, cellProps.column.id);
        cellEditorRulerRef.current.textContent = '';
      }
      if (
        prevCoords?.row !== activeCellCoordinates?.row ||
        prevCoords?.column !== activeCellCoordinates?.column
      ) {
        if (
          activeCellCoordinates &&
          activeCellCoordinates?.row !== 'header' &&
          activeCellCoordinates?.column !== 'header'
        ) {
          const activeCellFullData =
            typeof activeCellCoordinates?.column === 'number' &&
            typeof activeCellCoordinates?.row === 'number'
              ? rows[activeCellCoordinates?.row].cells[
                  activeCellCoordinates?.column
                ]
              : null;
          setActiveCellContent(activeCellFullData.render('Cell'));
        }
        if (
          (activeCellCoordinates && activeCellCoordinates?.row === 'header') ||
          activeCellCoordinates?.column === 'header'
        ) {
          setActiveCellContent(null);
        }
      }
    }, [
      activeCellCoordinates,
      previousState?.activeCellCoordinates,
      updateData,
      rows,
      isEditing,
      removeCellEditor,
      activeCellContent,
    ]);

    const createActiveCell = useCallback(
      ({ placementElement, coords, addToHeader = false }) => {
        const activeCellFullData =
          typeof coords?.column === 'number' && typeof coords?.row === 'number'
            ? rows[coords?.row].cells[coords?.column]
            : null;
        const activeCellValue = activeCellFullData
          ? Object.values(activeCellFullData.row.values)[coords?.column]
          : null;
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
            activeCellRef,
            cellEditorRef,
            defaultColumn,
          });
        }
      },
      [
        spreadsheetRef,
        rows,
        onActiveCellChange,
        previousState?.activeCellCoordinates,
        defaultColumn,
      ]
    );

    useResetSpreadsheetFocus({
      focusedElement,
      removeActiveCell,
      setContainerHasFocus,
    });

    useSpreadsheetOutsideClick({
      spreadsheetRef,
      setActiveCellCoordinates,
      setSelectionAreas,
      removeActiveCell,
      removeCellSelections,
      setContainerHasFocus,
      removeCellEditor,
    });

    useMoveActiveCell({
      spreadsheetRef,
      activeCellCoordinates,
      containerHasFocus,
      createActiveCell,
    });

    const handleInitialArrowPress = useCallback(() => {
      // If activeCellCoordinates is null then we need to set an initial value
      // which will place the activeCell on the select all cell/button
      setActiveCellInsideSelectionArea(false);
      if (!activeCellCoordinates) {
        setActiveCellCoordinates({
          column: 'header',
          row: 'header',
        });
      }
      return;
    }, [activeCellCoordinates]);

    const updateActiveCellCoordinates = useCallback(
      ({
        coords = { ...activeCellCoordinates },
        updatedValue,
        optOutOfSelectionAreaUpdate = false,
      }) => {
        const newActiveCell = {
          ...coords,
          ...updatedValue,
        };
        setActiveCellCoordinates(newActiveCell);
        // Only run if the active cell is _not_ a header cell. This will add a point1 object
        // to selectionAreas every time the active cell changes, allowing us to create cell
        // selections using keyboard. Opting out of the selection area updates here means
        // that the active cell is being moved within a selection area
        if (
          newActiveCell.row !== 'header' &&
          newActiveCell.column !== 'header' &&
          !optOutOfSelectionAreaUpdate
        ) {
          const tempMatcher = uuidv4();
          setSelectionAreas([{ point1: newActiveCell, matcher: tempMatcher }]);
          setCurrentMatcher(tempMatcher);
        }
      },
      [activeCellCoordinates]
    );

    const handleHomeEndKey = useCallback(
      ({ type }) => {
        const coordinatesClone = { ...activeCellCoordinates };
        updateActiveCellCoordinates({
          coords: coordinatesClone,
          updatedValue: {
            column: type === 'home' ? 0 : columns.length - 1,
          },
        });
        removeCellSelections({ spreadsheetRef });
      },
      [
        activeCellCoordinates,
        updateActiveCellCoordinates,
        spreadsheetRef,
        columns.length,
      ]
    );

    const handleKeyPress = useCallback(
      (event) => {
        const { key } = event;
        if (isEditing) {
          return;
        }
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
          ].indexOf(key) > -1 &&
          !isEditing
        ) {
          event.preventDefault();
        }
        if (['Tab'].indexOf(key) > -1 && isEditing) {
          return;
        }
        // Clear out all cell selection areas if user uses any arrow key, except if the shift key is being held
        if (
          ['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'].indexOf(key) > -1
        ) {
          if (
            selectionAreas?.length &&
            keysPressedList.length < 2 &&
            !includesShift(keysPressedList)
          ) {
            setSelectionAreas([]);
            setSelectionAreaData([]);
            removeCellSelections({ spreadsheetRef });
          }
        }
        if (!isEditing && keysPressedList?.length > 1) {
          handleMultipleKeys({
            activeCellCoordinates,
            event,
            keysPressedList,
            selectionAreas,
            currentMatcher,
            rows,
            setSelectionAreas,
            columns,
            updateActiveCellCoordinates,
            spreadsheetRef,
            removeCellSelections,
            blockClass,
            setCurrentMatcher,
            usingMac,
          });
        }
        const deleteParams = {
          selectionAreas,
          currentMatcher,
          rows,
          setActiveCellContent,
          updateData,
          activeCellCoordinates,
        };
        // Allow arrow key navigation if there are less than two activeKeys OR
        // if one of the activeCellCoordinates is in a header position
        if (
          (keysPressedList.length < 2 && !includesShift(keysPressedList)) ||
          activeCellCoordinates.row === 'header' ||
          activeCellCoordinates.column === 'header'
        ) {
          switch (key) {
            // Backspace
            case 'Backspace': {
              handleCellDeletion(deleteParams);
              break;
            }
            // Delete
            case 'Delete': {
              handleCellDeletion(deleteParams);
              break;
            }
            // Enter
            case 'Enter': {
              handleActiveCellInSelectionEnter({
                activeCellInsideSelectionArea,
                activeCellCoordinates,
                activeCellRef,
                selectionAreas,
                updateActiveCellCoordinates,
              });
              break;
            }
            // HOME
            case 'Home': {
              if (includesResourceKey(keysPressedList, usingMac)) {
                return;
              }
              handleHomeEndKey({ type: 'home' });
              break;
            }
            case 'End': {
              if (includesResourceKey(keysPressedList, usingMac)) {
                return;
              }
              handleHomeEndKey({ type: 'end' });
              break;
            }
            // Tab
            case 'Tab': {
              if (activeCellInsideSelectionArea) {
                event.preventDefault();
                return handleActiveCellInSelectionTab({
                  activeCellInsideSelectionArea,
                  activeCellCoordinates,
                  activeCellRef,
                  selectionAreas,
                  updateActiveCellCoordinates,
                });
              }
              setSelectionAreas([]);
              removeActiveCell();
              removeCellEditor();
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
        activeCellInsideSelectionArea,
        updateActiveCellCoordinates,
        handleInitialArrowPress,
        activeCellCoordinates,
        removeActiveCell,
        columns,
        rows,
        spreadsheetRef,
        currentMatcher,
        isEditing,
        removeCellEditor,
        selectionAreas,
        handleHomeEndKey,
        keysPressedList,
        usingMac,
        updateData,
      ]
    );

    const startEditMode = () => {
      setIsEditing(true);
      setClickAndHoldActive(false);
      const activeCellFullData =
        typeof activeCellCoordinates?.column === 'number' &&
        typeof activeCellCoordinates?.row === 'number'
          ? rows[activeCellCoordinates?.row].cells[
              activeCellCoordinates?.column
            ]
          : null;
      const activeCellValue = activeCellFullData
        ? activeCellFullData.row.cells[activeCellCoordinates?.column].value
        : null;
      setCellEditorValue(activeCellValue);
      cellEditorRulerRef.current.textContent = activeCellValue;
      cellEditorRef.current.style.width = activeCellRef?.current.style.width;
    };

    // Sets the initial placement of the cell editor cursor at the end of the text area
    // this is not done for us by default in Safari
    useEffect(() => {
      if (isEditing && !previousState?.isEditing) {
        cellEditorRef.current.setSelectionRange(
          cellEditorRulerRef.current.textContent.length,
          cellEditorRulerRef.current.textContent.length
        );
        cellEditorRef.current.focus();
      }
    }, [isEditing, previousState?.isEditing]);

    const handleActiveCellClick = () => {
      if (
        activeCellCoordinates?.row === 'header' ||
        activeCellCoordinates?.column === 'header'
      ) {
        const indexValue =
          activeCellCoordinates?.row === 'header'
            ? activeCellCoordinates?.column
            : activeCellCoordinates?.row;
        if (
          activeCellCoordinates?.row === 'header' &&
          activeCellCoordinates?.column === 'header'
        ) {
          return;
        }
        handleRowColumnHeaderClick({ isKeyboard: false, index: indexValue });
      }
      return;
    };

    // Mouse up on active cell
    const handleActiveCellMouseUp = () => {
      setClickAndHoldActive(false);
    };

    // Mouse down on active cell
    const handleActiveCellMouseDown = () => {
      if (
        activeCellCoordinates?.row !== 'header' ||
        activeCellCoordinates?.column !== 'header'
      ) {
        const tempMatcher = uuidv4();
        setClickAndHoldActive(true);
        removeCellSelections({ spreadsheetRef });
        setSelectionAreas([
          { point1: activeCellCoordinates, matcher: tempMatcher },
        ]);
        setCurrentMatcher(tempMatcher);
        setSelectionAreaData([]);
        setActiveCellInsideSelectionArea(false);
      }
      return;
    };

    // Go into edit mode if 'Enter' key is pressed on activeCellRef
    const handleActiveCellKeyDown = (event) => {
      const { key } = event;
      if (key === 'Enter' && !activeCellInsideSelectionArea) {
        if (
          activeCellCoordinates?.column !== 'header' &&
          activeCellCoordinates?.row !== 'header'
        ) {
          startEditMode();
        }
        if (
          activeCellCoordinates?.row === 'header' ||
          activeCellCoordinates?.column === 'header'
        ) {
          handleRowColumnHeaderClick({ isKeyboard: true });
        }
      }
    };

    const handleRowColumnHeaderClick = ({ isKeyboard, index = null }) => {
      const handleHeaderCellProps = {
        activeCellCoordinates,
        rows,
        columns,
        setActiveCellCoordinates,
        setCurrentMatcher,
        setSelectionAreas,
        spreadsheetRef,
        isKeyboard,
        setSelectionAreaData,
        index,
        currentMatcher,
      };
      // Select an entire column
      if (
        activeCellCoordinates?.row === 'header' &&
        activeCellCoordinates?.column !== 'header'
      ) {
        handleHeaderCellSelection({
          type: 'column',
          ...handleHeaderCellProps,
        });
      }
      // Select an entire row
      if (
        activeCellCoordinates?.column === 'header' &&
        activeCellCoordinates?.row !== 'header'
      ) {
        handleHeaderCellSelection({
          type: 'row',
          ...handleHeaderCellProps,
        });
      }
      if (
        activeCellCoordinates?.column === 'header' &&
        activeCellCoordinates?.row === 'header'
      ) {
        selectAllCells({
          ref: spreadsheetRef,
          setCurrentMatcher,
          setSelectionAreas,
          rows,
          columns,
          activeCellCoordinates,
          updateActiveCellCoordinates,
        });
      }
    };

    // Go into edit mode if double click is detected on activeCellRef
    const handleActiveCellDoubleClick = () => {
      startEditMode();
    };

    useSpreadsheetEdit({
      isEditing,
      rows,
      activeCellCoordinates,
      activeCellRef,
      cellEditorRef,
      cellEditorRulerRef,
      visibleColumns,
      defaultColumn,
      cellEditorValue,
    });

    const handleActiveCellMouseEnter = useCallback(() => {
      handleActiveCellMouseEnterCallback(selectionAreas, clickAndHoldActive);
    }, [
      clickAndHoldActive,
      selectionAreas,
      handleActiveCellMouseEnterCallback,
    ]);

    // Only update if there are cell selection areas
    // Find point object that matches currentMatcher and remove the second point
    // because hovering over the active cell while clicking and holding should
    // remove the previously existing selection area
    const handleActiveCellMouseEnterCallback = useCallback(
      (areas, clickHold) => {
        if (!currentMatcher) {
          return;
        }
        if (areas && areas.length && clickHold && currentMatcher) {
          setSelectionAreas((prev) => {
            const selectionAreaClone = deepCloneObject(prev);
            const indexOfItemToUpdate = selectionAreaClone.findIndex(
              (item) => item.matcher === currentMatcher
            );
            if (indexOfItemToUpdate === -1) {
              return prev;
            }
            if (
              typeof selectionAreaClone[indexOfItemToUpdate].point2 ===
                'object' &&
              selectionAreaClone[indexOfItemToUpdate].areaCreated
            ) {
              selectionAreaClone[indexOfItemToUpdate].point2 =
                selectionAreaClone[indexOfItemToUpdate].point1;
              selectionAreaClone[indexOfItemToUpdate].areaCreated = false;
              setActiveCellInsideSelectionArea(false);
              removeCellSelections({
                matcher: currentMatcher,
                spreadsheetRef,
              });
              return selectionAreaClone;
            }
            return prev;
          });
        }
      },
      [spreadsheetRef, currentMatcher]
    );

    return (
      <div
        {...rest}
        {...getTableProps()}
        {...getDevtoolsProps(componentName)}
        className={cx(
          blockClass,
          className,
          `${blockClass}--interactive-cell-element`,
          {
            [`${blockClass}__container-has-focus`]: containerHasFocus,
            [`${blockClass}__${theme}`]: theme === 'dark',
          }
        )}
        ref={spreadsheetRef}
        role="grid"
        tabIndex={0}
        aria-rowcount={rows?.length || 0}
        aria-colcount={columns?.length || 0}
        aria-label={spreadsheetAriaLabel}
        onKeyDown={handleKeyPress}
        onFocus={() => setContainerHasFocus(true)}
      >
        <div ref={multiKeyTrackingRef}>
          {/* HEADER */}
          <DataSpreadsheetHeader
            ref={spreadsheetRef}
            activeCellCoordinates={activeCellCoordinates}
            cellSize={cellSize}
            columns={columns}
            currentMatcher={currentMatcher}
            defaultColumn={defaultColumn}
            headerGroups={headerGroups}
            rows={rows}
            scrollBarSize={scrollBarSize}
            selectionAreas={selectionAreas}
            setActiveCellCoordinates={setActiveCellCoordinates}
            setSelectionAreas={setSelectionAreas}
            setCurrentMatcher={setCurrentMatcher}
            setSelectionAreaData={setSelectionAreaData}
            totalVisibleColumns={totalVisibleColumns}
            updateActiveCellCoordinates={updateActiveCellCoordinates}
            setHeaderCellHoldActive={setHeaderCellHoldActive}
            headerCellHoldActive={headerCellHoldActive}
            visibleColumns={visibleColumns}
            selectAllAriaLabel={selectAllAriaLabel}
          />

          {/* BODY */}
          <DataSpreadsheetBody
            activeCellCoordinates={activeCellCoordinates}
            ref={spreadsheetRef}
            clickAndHoldActive={clickAndHoldActive}
            setClickAndHoldActive={setClickAndHoldActive}
            currentMatcher={currentMatcher}
            setCurrentMatcher={setCurrentMatcher}
            setContainerHasFocus={setContainerHasFocus}
            selectionAreas={selectionAreas}
            setSelectionAreas={setSelectionAreas}
            cellSize={cellSize}
            headerGroups={headerGroups}
            defaultColumn={defaultColumn}
            getTableBodyProps={getTableBodyProps}
            onDataUpdate={onDataUpdate}
            onActiveCellChange={onActiveCellChange}
            onSelectionAreaChange={onSelectionAreaChange}
            prepareRow={prepareRow}
            rows={rows}
            selectionAreaData={selectionAreaData}
            setSelectionAreaData={setSelectionAreaData}
            setActiveCellCoordinates={setActiveCellCoordinates}
            scrollBarSize={scrollBarSize}
            totalColumnsWidth={totalColumnsWidth}
            id={id}
            columns={columns}
            defaultEmptyRowCount={defaultEmptyRowCount}
            setActiveCellInsideSelectionArea={setActiveCellInsideSelectionArea}
            totalVisibleColumns={totalVisibleColumns}
            setHeaderCellHoldActive={setHeaderCellHoldActive}
            setColumnOrder={setColumnOrder}
            visibleColumns={visibleColumns}
          />
          <button
            onMouseDown={handleActiveCellMouseDown}
            onMouseUp={handleActiveCellMouseUp}
            onClick={handleActiveCellClick}
            onKeyDown={handleActiveCellKeyDown}
            onDoubleClick={handleActiveCellDoubleClick}
            onMouseEnter={handleActiveCellMouseEnter}
            ref={activeCellRef}
            className={cx(
              `${blockClass}--interactive-cell-element`,
              `${blockClass}__active-cell--highlight`,
              {
                [`${blockClass}__active-cell--with-selection`]:
                  activeCellInsideSelectionArea,
              }
            )}
            type="button"
          >
            {activeCellContent}
          </button>
          <textarea
            id={`${blockClass}__cell-editor-text-area`}
            value={cellEditorValue}
            onKeyDown={handleEditSubmit({
              activeCellCoordinates,
              cellEditorRulerRef,
              columns,
              previousState,
              removeCellEditor,
              rows,
              setActiveCellCoordinates,
              setCurrentMatcher,
              setSelectionAreas,
              spreadsheetRef,
              updateData,
            })}
            onChange={(event) => {
              setCellEditorValue(event.target.value);
              cellEditorRulerRef.current.textContent = event.target.value;
            }}
            ref={cellEditorRef}
            aria-labelledby={
              activeCellCoordinates
                ? `${blockClass}__cell--${activeCellCoordinates?.row}--${activeCellCoordinates?.column}`
                : null
            }
            className={cx(
              `${blockClass}__cell-editor`,
              `${blockClass}--interactive-cell-element`,
              `${blockClass}__cell-editor--${cellSize}`,
              {
                [`${blockClass}__cell-editor--active`]: isEditing,
              }
            )}
          />
          <pre
            aria-hidden
            ref={cellEditorRulerRef}
            className={`${blockClass}__cell-editor-ruler`}
          />
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
   * Specifies the cell height
   */
  cellSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),

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
   * Sets the number of empty rows to be created when there is no data provided
   */
  defaultEmptyRowCount: PropTypes.number,

  /**
   * The spreadsheet id
   */
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * The event handler that is called when the active cell changes
   */
  onActiveCellChange: PropTypes.func,

  /**
   * The setter fn for the data prop
   */
  onDataUpdate: PropTypes.func,

  /**
   * The event handler that is called when the selection area values change
   */
  onSelectionAreaChange: PropTypes.func,

  /**
   * The aria label applied to the Select all button
   */
  selectAllAriaLabel: PropTypes.string.isRequired,

  /**
   * The aria label applied to the Data spreadsheet component
   */
  spreadsheetAriaLabel: PropTypes.string.isRequired,

  /**
   * The theme the DataSpreadsheet should use (only used to render active cell/selection area colors on dark theme)
   */
  theme: PropTypes.oneOf(['light', 'dark']),

  /**
   * The total number of columns to be initially visible, additional columns will be rendered and
   * visible via horizontal scrollbar
   */
  totalVisibleColumns: PropTypes.number,

  /* TODO: add types and DocGen for all props. */
};
