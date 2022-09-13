/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {
  useState,
  useRef,
  useEffect,
  useContext,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';
import { TextInput, NumberInput } from 'carbon-components-react';
import { Edit16, CaretSort16 } from '@carbon/icons-react';
import { InlineEditButton } from '../InlineEditButton';
import { pkg } from '../../../../../../settings';
import cx from 'classnames';
import { InlineEditContext } from '../InlineEditContext';
import { usePreviousValue } from '../../../../../../global/js/hooks';

const blockClass = `${pkg.prefix}--datagrid`;
export const InlineEditCell = ({
  cell,
  config,
  instance,
  placeholder = '',
  tabIndex,
  value,
  label = 'Inline edit type text label',
  nonEditCell,
  totalInlineEditColumns,
  type,
}) => {
  const columnId = cell.column.id;
  const columnIndex = instance.columns.findIndex((col) => col.id === columnId);
  const cellId = `column-${columnIndex}-row-${cell.row.index}`;
  const totalColumns = instance.columns.length;

  const { state, dispatch } = useContext(InlineEditContext);
  const [inEditMode, setInEditMode] = useState(false);
  const [cellValue, setCellValue] = useState(value);
  const [initialValue, setInitialValue] = useState();
  const { activeCellId, editId } = state;
  const previousState = usePreviousValue({ editId, activeCellId });
  const { inputProps } = config || {};

  const textInputRef = useRef();
  const numberInputRef = useRef();
  const outerButtonElement = useRef();

  useEffect(() => {
    setInitialValue(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // If you are in edit mode and click outside of the cell,
  // this changes the cell back to the InlineEditButton
  useEffect(() => {
    if (activeCellId !== cellId) {
      setInEditMode(false);
    }
    if (activeCellId === cellId && editId === cellId && !nonEditCell) {
      setInEditMode(true);
      saveCellData(cellValue);
    }
  }, [activeCellId, cellId, nonEditCell, editId, cellValue, saveCellData]);

  // Re-initializes initialValue if clicking outside of a cell that was previously
  // in edit mode, otherwise `initialValue` becomes stale
  useEffect(() => {
    if (
      previousState?.editId === cellId &&
      previousState?.activeCellId === cellId &&
      activeCellId !== cellId
    ) {
      setInitialValue(cellValue);
    }
  }, [previousState, cellId, cellValue, activeCellId]);

  const handleInlineCellClick = () => {
    if (!inEditMode) {
      dispatch({
        type: 'ENTER_EDIT_MODE',
        payload: {
          activeCellId: cellId,
          editId: cellId,
        },
      });
      setInEditMode(true);
    }
  };

  const { rowSize, onDataUpdate } = instance;

  // Auto focus text input when entering edit mode
  useEffect(() => {
    if (inEditMode) {
      if (type === 'text') {
        textInputRef.current.focus();
      }
      if (type === 'number') {
        numberInputRef.current.focus();
      }
    }
  }, [inEditMode, type]);

  // Initialize cellValue from value prop
  useEffect(() => {
    setCellValue(value);
  }, [value]);

  // Saves the new cell data, onDataUpdate is a required function to be
  // passed to useDatagrid when using useInlineEdit
  const saveCellData = useCallback(
    (newValue) => {
      const columnId = cell.column.id;
      const rowIndex = cell.row.index;
      onDataUpdate((prev) =>
        prev.map((row, index) => {
          if (index === rowIndex) {
            return {
              ...prev[rowIndex],
              [columnId]: newValue,
            };
          }
          return row;
        })
      );
    },
    [cell, onDataUpdate]
  );

  const sendFocusBackToGrid = () => {
    // Allows the onKeyDown listener to go back to the entire grid area
    const inlineEditArea = document.querySelector(
      `#${instance.tableId} .${blockClass}__table-with-inline-edit`
    );
    inlineEditArea.focus();
  };

  const handleKeyDown = (event) => {
    const { key } = event;

    switch (key) {
      // Save cell contents to data
      case 'Tab':
      case 'Enter': {
        if (inEditMode) {
          const totalRows = instance.rows.length;
          const newCellId =
            key === 'Enter'
              ? `column-${columnIndex}-row-${
                  cell.row.index < totalRows - 1
                    ? cell.row.index + 1
                    : cell.row.index
                }`
              : `column-${
                  columnIndex < instance.columns.length - 1
                    ? columnIndex + 1
                    : columnIndex
                }-row-${cell.row.index}`;
          saveCellData(cellValue);
          setInitialValue(cellValue);
          dispatch({ type: 'EXIT_EDIT_MODE', payload: newCellId });
          setInEditMode(false);
          sendFocusBackToGrid();
        }
        break;
      }
      case 'Escape': {
        if (inEditMode) {
          dispatch({ type: 'EXIT_EDIT_MODE', payload: cellId });
          setCellValue(initialValue);
          saveCellData(initialValue);
          setInEditMode(false);
          sendFocusBackToGrid();
        }
        break;
      }
      default:
        return;
    }
  };

  const addActiveState = () => {
    dispatch({ type: 'UPDATE_ACTIVE_CELL_ID', payload: cellId });
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      ref={outerButtonElement}
      data-cell-id={cellId}
      data-column-index={columnIndex}
      data-row-index={cell.row.index}
      data-disabled={nonEditCell}
      onClick={!nonEditCell ? handleInlineCellClick : addActiveState}
      onKeyDown={!nonEditCell ? handleKeyDown : null}
      className={cx(`${blockClass}__inline-edit--outer-cell-button`, {
        [`${blockClass}__inline-edit--outer-cell-button--${rowSize}`]: rowSize,
        [`${blockClass}__inline-edit--outer-cell-button--lg`]: !rowSize,
      })}
    >
      {!inEditMode && (
        <InlineEditButton
          isActiveCell={cellId === activeCellId}
          renderIcon={type === 'number' ? CaretSort16 : Edit16}
          label={value}
          placeholder={placeholder}
          tabIndex={tabIndex}
          nonEditCell={nonEditCell}
          columnConfig={cell.column}
          totalInlineEditColumns={totalInlineEditColumns}
          totalColumns={totalColumns}
        />
      )}
      {!nonEditCell && inEditMode && cellId === activeCellId && (
        <>
          {type === 'text' && (
            <TextInput
              labelText={label}
              placeholder={placeholder}
              {...inputProps}
              id={cellId}
              hideLabel
              defaultValue={cellValue}
              onChange={(event) => {
                setCellValue(event.target.value);
                if (inputProps.onChange) {
                  inputProps.onChange(event.target.value);
                }
              }}
              ref={textInputRef}
            />
          )}
          {type === 'number' && (
            <NumberInput
              placeholder={placeholder}
              label={label}
              {...inputProps}
              id={cellId}
              hideLabel
              defaultValue={cellValue}
              onChange={(event) => {
                setCellValue(event.imaginaryTarget.value);
                if (inputProps.onChange) {
                  inputProps.onChange(event.imaginaryTarget.value);
                }
              }}
              ref={numberInputRef}
            />
          )}
        </>
      )}
    </div>
  );
};

InlineEditCell.propTypes = {
  cell: PropTypes.object,
  config: PropTypes.object,
  instance: PropTypes.shape({
    columns: PropTypes.arrayOf(PropTypes.object),
    onDataUpdate: PropTypes.func,
    rows: PropTypes.arrayOf(PropTypes.object),
    rowSize: PropTypes.string,
    tableId: PropTypes.string,
  }),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  nonEditCell: PropTypes.bool,
  placeholder: PropTypes.string,
  tabIndex: PropTypes.number,
  totalInlineEditColumns: PropTypes.number,
  type: PropTypes.oneOf(['text', 'number', 'selection', 'date']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};
