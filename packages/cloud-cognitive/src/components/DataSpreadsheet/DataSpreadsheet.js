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
import { useBlockLayout, useTable } from 'react-table';
import { px } from '@carbon/layout';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';
import { TextArea } from 'carbon-components-react';

import { pkg } from '../../settings';
import { DataSpreadsheetBody } from './DataSpreadsheetBody';
import { DataSpreadsheetHeader } from './DataSpreadsheetHeader';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { getScrollbarWidth } from '../../global/js/utils/getScrollbarWidth';
import { useActiveElement, usePreviousValue } from '../../global/js/hooks';
import uuidv4 from '../../global/js/utils/uuidv4';

import { useResetSpreadsheetFocus } from './hooks/useResetSpreadsheetFocus';
import { useSpreadsheetOutsideClick } from './hooks/useSpreadsheetOutsideClick';
import { useMoveActiveCell } from './hooks/useMoveActiveCell';

import { createActiveCellFn } from './utils/createActiveCellFn';
import { getCellSize } from './utils/getCellSize';
import { handleMultipleKeys } from './utils/handleMultipleKeys';
import { handleHeaderCellSelection } from './utils/handleHeaderCellSelection';
// cspell:words rowcount colcount

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--data-spreadsheet`;
const componentName = 'DataSpreadsheet';

// Default values for props
const defaults = {
  cellSize: 'standard',
  columns: Object.freeze([]),
  data: Object.freeze([]),
  defaultEmptyRowCount: 16,
  onDataUpdate: Object.freeze(() => {}),
  onActiveCellChange: Object.freeze(() => {}),
  onSelectionAreaChange: Object.freeze(() => {}),
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

      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
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
    const previousState = usePreviousValue({ activeCellCoordinates });
    const cellSizeValue = getCellSize(cellSize);
    const cellEditorRef = useRef();
    const [activeCellContent, setActiveCellContent] = useState();
    const activeKeys = useRef([]);
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

    // Update the spreadsheet data after editing a cell
    const updateData = useCallback(
      (rowIndex, columnId) => {
        onDataUpdate((prev) =>
          prev.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...prev[rowIndex],
                [columnId]: cellEditorValue,
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
      if (activeCellHighlight) {
        activeCellHighlight.style.display = 'none';
      }
    }, [spreadsheetRef]);

    const removeCellEditor = useCallback(() => {
      setCellEditorValue('');
      setIsEditing(false);
      cellEditorRef.current.style.display = 'none';
    }, []);

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
      activeKeys,
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
      activeKeys,
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
          if (isEditing) {
            return;
          }
          if (
            selectionAreas?.length &&
            key !== 'Shift' &&
            !activeKeys.current.includes('Shift')
          ) {
            setSelectionAreas([]);
            setSelectionAreaData([]);
            removeCellSelections({ spreadsheetRef });
          }
        }
        // Update list of activeKeys
        if (!activeKeys.current?.includes(key)) {
          const activeClone = [...activeKeys.current];
          activeKeys.current = [...activeClone, key];
        }
        if (activeKeys.current?.length > 1) {
          handleMultipleKeys({
            activeKeys,
            selectionAreas,
            currentMatcher,
            rows,
            setSelectionAreas,
            columns,
          });
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
        removeCellSelections,
        selectionAreas,
      ]
    );

    const startEditMode = () => {
      setIsEditing(true);
      const activeCellFullData =
        typeof activeCellCoordinates?.column === 'number' &&
        typeof activeCellCoordinates?.row === 'number'
          ? rows[activeCellCoordinates?.row].cells[
              activeCellCoordinates?.column
            ]
          : null;
      const activeCellValue = activeCellFullData
        ? Object.values(activeCellFullData.row.values)[
            activeCellCoordinates?.column
          ]
        : null;
      setCellEditorValue(activeCellValue);
      cellEditorRulerRef.current.textContent = activeCellValue;
    };

    const handleActiveCellClick = () => {
      if (
        activeCellCoordinates?.row === 'header' ||
        activeCellCoordinates?.column === 'header'
      ) {
        const indexValue =
          activeCellCoordinates?.row === 'header'
            ? activeCellCoordinates?.column
            : activeCellCoordinates?.row;
        handleRowColumnHeaderClick({ isKeyboard: false, index: indexValue });
      }
      return;
    };

    // Go into edit mode if 'Enter' key is pressed on activeCellRef
    const handleActiveCellKeyDown = (event) => {
      const { key } = event;
      if (key === 'Enter') {
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
      };
      // Select an entire column
      if (activeCellCoordinates?.row === 'header') {
        handleHeaderCellSelection({
          type: 'column',
          ...handleHeaderCellProps,
        });
      }
      // Select an entire row
      if (activeCellCoordinates?.column === 'header') {
        handleHeaderCellSelection({
          type: 'row',
          ...handleHeaderCellProps,
        });
      }
    };

    // Go into edit mode if double click is detected on activeCellRef
    const handleActiveCellDoubleClick = () => {
      startEditMode();
    };

    // Update the data
    const handleEditSubmit = (event) => {
      const { key } = event;
      const submitEditChanges = () => {
        const prevCoords = previousState?.activeCellCoordinates;
        const cellProps = rows[prevCoords?.row].cells[prevCoords?.column];
        removeCellEditor();
        updateData(prevCoords?.row, cellProps.column.id);
      };
      if (key === 'Enter') {
        submitEditChanges();
        setActiveCellCoordinates((prev) => ({
          ...prev,
          row: prev.row === rows.length - 1 ? prev.row : prev.row + 1, // do not move to next cell below if we're already in the last row
        }));
        cellEditorRulerRef.current.textContent = '';
      }
      if (key === 'Tab') {
        event.preventDefault();
        submitEditChanges();
        setActiveCellCoordinates((prev) => ({
          ...prev,
          column:
            prev.column === columns.length - 1 ? prev.column : prev.column + 1, // do not move to next cell below if we're already in the last column
        }));
        cellEditorRulerRef.current.textContent = '';
      }
      return;
    };

    useEffect(() => {
      if (isEditing) {
        const cellProps =
          rows[activeCellCoordinates?.row]?.cells[
            activeCellCoordinates?.column
          ];
        const activeCellLeftPosition = activeCellRef?.current.style.left;
        const activeCellTopPosition = activeCellRef?.current.style.top;
        cellEditorRef.current.style.left = activeCellLeftPosition;
        cellEditorRef.current.style.top = activeCellTopPosition;
        cellEditorRef.current.style.display = 'block';
        cellEditorRef.current.style.width = activeCellRef?.current.style.width;
        cellEditorRef.current.style.height =
          activeCellRef?.current.style.height;
        cellEditorRef.current.style.paddingTop = `${
          (parseInt(activeCellRef?.current.style.height) - 16) / 2 - 1
        }px`; // calculate paddingTop based on cellHeight which could be variable depending on the cellSize prop
        cellEditorRef.current.style.textAlign =
          cellProps?.column?.placement === 'right' ? 'right' : 'left';
        cellEditorRef.current?.focus();
        const rulerWidth = cellEditorRulerRef.current.offsetWidth;
        const cellWidth = activeCellRef.current.offsetWidth;
        if (rulerWidth >= cellWidth) {
          const widthMultiplier = Math.floor(rulerWidth / cellWidth) + 1;
          const startingColumnPosition = activeCellCoordinates?.column;
          const startingRowPosition = activeCellCoordinates?.row;
          const totalColumns = columns.length;
          const totalRows = rows.length;
          const totalMultiplierPossible = totalColumns - startingColumnPosition;
          const totalCellEditorMaxHeight =
            (totalRows - startingRowPosition) * defaultColumn.rowHeight;
          cellEditorRef.current.style.maxHeight = px(totalCellEditorMaxHeight);
          cellEditorRef.current.style.width = px(
            cellWidth *
              (widthMultiplier <= totalMultiplierPossible
                ? widthMultiplier
                : totalMultiplierPossible)
          );
          cellEditorRef.current.style.height = px(
            cellEditorRef.current.scrollHeight
          ); // adds dynamic height to cell editor
          // Cell editor has reached max height, we need to add the scrolling back.
          // We also need to subtract 1 to account for the fact that the cell editor
          // is placed one pixel below the cell being edited to account for the border
          if (
            cellEditorRef.current.clientHeight ===
            totalCellEditorMaxHeight - 1
          ) {
            cellEditorRef.current.style.overflow = 'auto';
          } else {
            cellEditorRef.current.style.overflow = 'hidden';
          }
        }
      }
      if (!isEditing) {
        cellEditorRef.current.style.overflow = 'hidden';
        cellEditorRef.current.style.display = 'none';
        cellEditorRef.current.blur();
        activeCellRef.current.focus();
      }
    }, [
      isEditing,
      activeCellCoordinates,
      rows,
      cellEditorValue,
      columns.length,
      defaultColumn,
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
          ref={spreadsheetRef}
          activeCellCoordinates={activeCellCoordinates}
          cellSize={cellSize}
          columns={columns}
          defaultColumn={defaultColumn}
          headerGroups={headerGroups}
          rows={rows}
          scrollBarSize={scrollBarSize}
          selectionAreas={selectionAreas}
          setActiveCellCoordinates={setActiveCellCoordinates}
          setSelectionAreas={setSelectionAreas}
          setCurrentMatcher={setCurrentMatcher}
          setSelectionAreaData={setSelectionAreaData}
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
        />
        <button
          onClick={handleActiveCellClick}
          onKeyDown={handleActiveCellKeyDown}
          onDoubleClick={handleActiveCellDoubleClick}
          ref={activeCellRef}
          className={cx(
            `${blockClass}--interactive-cell-element`,
            `${blockClass}__active-cell--highlight`
          )}
          type="button"
        >
          {activeCellContent}
        </button>
        <TextArea
          value={cellEditorValue}
          onKeyDown={handleEditSubmit}
          onChange={(event) => {
            setCellEditorValue(event.target.value);
            cellEditorRulerRef.current.textContent = event.target.value;
          }}
          ref={cellEditorRef}
          labelText=""
          aria-labelledby={
            activeCellCoordinates
              ? `[data-row-index="${activeCellCoordinates?.row}"][data-column-index="${activeCellCoordinates?.column}"]`
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

  /* TODO: add types and DocGen for all props. */
};
