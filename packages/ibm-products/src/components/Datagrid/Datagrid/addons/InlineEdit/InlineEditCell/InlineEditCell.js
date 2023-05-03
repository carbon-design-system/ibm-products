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
import {
  TextInput,
  NumberInput,
  Dropdown,
  DatePicker,
  DatePickerInput,
} from '@carbon/react';
import { Edit, CaretSort, ChevronDown, Calendar } from '@carbon/react/icons';
import { InlineEditButton } from '../InlineEditButton';
import { pkg } from '../../../../../../settings';
import cx from 'classnames';
import { InlineEditContext } from '../InlineEditContext';
import { usePreviousValue } from '../../../../../../global/js/hooks';
import { prepareProps } from '../../../../../../global/js/utils/props-helper';

const blockClass = `${pkg.prefix}--datagrid`;
export const InlineEditCell = ({
  cell,
  config,
  instance,
  placeholder = '',
  tabIndex,
  value,
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
  const [cellLabel, setCellLabel] = useState();
  const { activeCellId, editId } = state;
  const previousState = usePreviousValue({ editId, activeCellId });
  const { inputProps } = config || {};

  const textInputRef = useRef();
  const numberInputRef = useRef();
  const dropdownRef = useRef();
  const datePickerRef = useRef();
  const outerButtonElement = useRef();

  useEffect(() => {
    setInitialValue(value);
    const columnId = cell.column.id;
    const columnLabel = instance.columns.find((item) => item.id === columnId);
    setCellLabel(
      typeof columnLabel.Header === 'string'
        ? columnLabel.Header
        : 'Inline edit cell label'
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Reverts cellValue back to initialValue when exiting edit mode via clicking outside
  // of the cell (either on a regular cell or clicking into another inline edit cell) and the
  // edit input is in an invalid state
  useEffect(() => {
    if (
      (previousState?.editId === cellId && !editId) ||
      (previousState?.editId === cellId && cellId !== editId)
    ) {
      const { validator } = config || {};
      const isInvalid = validator?.(cellValue);
      if (isInvalid) {
        setCellValue(initialValue);
        saveCellData(initialValue);
        return;
      }
    }
  }, [
    previousState?.editId,
    editId,
    cellId,
    cellValue,
    config,
    initialValue,
    saveCellData,
  ]);

  // If you are in edit mode and click outside of the cell,
  // this changes the cell back to the InlineEditButton
  useEffect(() => {
    if (activeCellId !== cellId || !editId) {
      setInEditMode(false);
    }
    if (activeCellId === cellId && editId === cellId && !nonEditCell) {
      setInEditMode(true);
      saveCellData(cellValue);
    }
  }, [activeCellId, cellId, nonEditCell, editId, cellValue, saveCellData]);

  const openDropdown = (type) => {
    // *****
    // Only added this querySelector because v11 Datepicker isn't forwarding the ref which breaks how we were handling this in v10
    // *****
    const datePickerInputElement = document.querySelector(
      `#${blockClass}__inline-edit--date-picker--${cell.row.index}`
    );

    const dropdownTrigger =
      type === 'selection' ? dropdownRef?.current : datePickerInputElement;
    dropdownTrigger.click();
    if (type === 'date') {
      dropdownTrigger?.focus();
    }
  };

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
      setTimeout(() => {
        if (type === 'selection' || type === 'date') {
          openDropdown(type);
        }
      }, 1);
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

  const getNewCellId = (key) => {
    const totalRows = instance.rows.length;
    const newCellId =
      key === 'Enter'
        ? `column-${columnIndex}-row-${
            cell.row.index < totalRows - 1 ? cell.row.index + 1 : cell.row.index
          }`
        : `column-${
            columnIndex < instance.columns.length - 1
              ? columnIndex + 1
              : columnIndex
          }-row-${cell.row.index}`;
    return newCellId;
  };

  const handleKeyDown = (event) => {
    const { key } = event;
    switch (key) {
      // Save cell contents to data
      case 'Tab':
      case 'Enter': {
        if (inEditMode) {
          // Dropdown saves are handled in the Dropdown's/DatePicker's onChange prop
          if (type === 'selection' || type === 'date') {
            return;
          }
          const { validator } = config || {};
          const isInvalid = validator?.(cellValue);
          // If an invalid state is detected, Tab/Enter should not do anything
          // until the input has a valid state once again
          if (isInvalid) {
            return;
          }
          const newCellId = getNewCellId(key);
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

  const renderDropdownItem = (item) => {
    const includesIcon = !!item?.icon;
    return includesIcon ? (
      <>
        {React.createElement(item.icon)}
        <span className={cx(`${blockClass}__inline-edit--select-item`)}>
          {item?.text}
        </span>
      </>
    ) : (
      item?.text
    );
  };

  const handleTransformedItem = (items) => {
    return items?.length && typeof items[0] === 'object'
      ? (item) => renderDropdownItem(item)
      : null;
  };

  const renderSelectCell = () => {
    const { inputProps } = config || {};
    return (
      <Dropdown
        id={cellId}
        label={cellLabel || 'Dropdown menu options'}
        ariaLabel={cellLabel || 'Dropdown menu options'}
        {...inputProps}
        hideLabel
        style={{
          width: cell.column.totalWidth,
        }}
        className={cx(`${blockClass}__inline-edit--select`, {
          [`${blockClass}__inline-edit--select-${rowSize}`]: rowSize,
        })}
        items={inputProps?.items || []}
        initialSelectedItem={cell.value}
        itemToElement={handleTransformedItem(inputProps?.items)}
        renderSelectedItem={handleTransformedItem(inputProps?.items)}
        onChange={(item) => {
          const newCellId = getNewCellId('Enter');
          saveCellData(item.selectedItem);
          setCellValue(item.selectedItem);
          dispatch({ type: 'EXIT_EDIT_MODE', payload: newCellId });
          setInEditMode(false);
          sendFocusBackToGrid();
          inputProps?.onChange?.(item.selectedItem);
        }}
        downshiftProps={{
          onStateChange: (downshiftState) => {
            const { isOpen } = downshiftState || {};
            // !isOpen does not work in this case because a state change occurs on hover of the
            // menu items and isOpen is changed to undefined which causes dispatch to be called unexpectedly
            if (isOpen === false) {
              dispatch({ type: 'EXIT_EDIT_MODE', payload: cellId });
              setInEditMode(false);
              sendFocusBackToGrid();
            }
          },
        }}
        ref={dropdownRef}
      />
    );
  };

  const setRenderIcon = () => {
    if (type === 'text') {
      return (props) => <Edit size={16} {...props} />;
    }
    if (type === 'number') {
      return (props) => <CaretSort size={16} {...props} />;
    }
    if (type === 'selection') {
      return (props) => <ChevronDown size={16} {...props} />;
    }
    if (type === 'date') {
      return (props) => <Calendar size={16} {...props} />;
    }
  };

  const renderDateCell = () => {
    const datePickerPreparedProps = prepareProps(config.inputProps, [
      'datePickerInputProps',
    ]);
    const datePickerInputProps = config?.inputProps?.datePickerInputProps;
    return (
      <DatePicker
        {...datePickerPreparedProps}
        appendTo={outerButtonElement?.current?.parentElement}
        ref={datePickerRef}
        style={{
          width: cell.column.totalWidth,
        }}
        datePickerType="single"
        className={cx(`${blockClass}__inline-edit--date`, {
          [`${blockClass}__inline-edit--date-${rowSize}`]: rowSize,
        })}
        onChange={(newDate) => {
          const newDateObj = newDate[0];
          datePickerPreparedProps?.onChange?.(newDateObj, cell);
          const newCellId = getNewCellId('Enter');
          saveCellData(newDateObj);
          setCellValue(newDateObj);
          // To handle the interaction of the masked input when the DatePicker and updating
          setTimeout(() => {
            setInEditMode(false);
            sendFocusBackToGrid();
            dispatch({ type: 'EXIT_EDIT_MODE', payload: newCellId });
          }, 1);
        }}
        value={cell.value}
      >
        <DatePickerInput
          {...datePickerInputProps}
          style={{
            position: 'static',
          }}
          placeholder={datePickerInputProps?.placeholder || 'mm/dd/yyyy'}
          labelText={datePickerInputProps?.labelText || cellLabel || 'Set date'}
          id={`${blockClass}__inline-edit--date-picker--${cell.row.index}`}
          hideLabel
        />
      </DatePicker>
    );
  };

  // Ensures that months and days are all 2 digits, prefixes 0 if `num` is a single digit
  const padTo2Digits = (num) => {
    return num.toString().padStart(2, '0');
  };

  const buildDate = (value) => {
    const dateFormat = config?.inputProps?.dateFormat;
    if (value instanceof Date) {
      const maskedFullYear = value.getFullYear();
      const maskedMonth = padTo2Digits(value.getMonth() + 1);
      const maskedDay = padTo2Digits(value.getDate());
      if (dateFormat === 'm/d/Y' || value === 'm/d/y') {
        return [maskedMonth, maskedDay, maskedFullYear].join('/');
      }
      if (
        dateFormat === 'd/m/Y' ||
        dateFormat === 'd/m/y' ||
        dateFormat === undefined
      ) {
        return [maskedDay, maskedMonth, maskedFullYear].join('/');
      }
    } else {
      return value;
    }
    return null;
  };

  const renderNumberInput = () => {
    const { validator } = config || {};
    return (
      <NumberInput
        placeholder={placeholder}
        label={cellLabel}
        {...inputProps}
        id={cellId}
        hideLabel
        defaultValue={cellValue}
        invalid={validator?.(cellValue)}
        invalidText={inputProps?.invalidText || 'Provide missing invalidText'}
        onChange={(event, { value }) => {
          setCellValue(value);
          if (inputProps.onChange) {
            inputProps.onChange(value);
          }
        }}
        ref={numberInputRef}
      />
    );
  };

  const renderTextInput = () => {
    const { validator } = config || {};
    const isInvalid = validator?.(cellValue);
    return (
      <TextInput
        labelText={cellLabel}
        placeholder={placeholder}
        {...inputProps}
        id={cellId}
        hideLabel
        defaultValue={cellValue}
        invalid={isInvalid}
        invalidText={inputProps?.invalidText || 'Provide missing invalidText'}
        onChange={(event) => {
          setCellValue(event.target.value);
          if (inputProps.onChange) {
            inputProps.onChange(event.target.value);
          }
        }}
        ref={textInputRef}
      />
    );
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      ref={outerButtonElement}
      data-cell-id={cellId}
      data-column-index={columnIndex}
      data-row-index={cell.row.index}
      data-disabled={nonEditCell}
      data-inline-type={type}
      onClick={!nonEditCell ? handleInlineCellClick : addActiveState}
      onKeyDown={!nonEditCell ? handleKeyDown : null}
      className={cx(`${blockClass}__inline-edit--outer-cell-button`, {
        [`${blockClass}__inline-edit--outer-cell-button--${rowSize}`]: rowSize,
        [`${blockClass}__inline-edit--outer-cell-button--lg`]: !rowSize,
        [`${blockClass}__inline-edit--outer-cell-button--invalid`]:
          config?.validator?.(cellValue),
      })}
    >
      {!inEditMode && (
        <InlineEditButton
          isActiveCell={cellId === activeCellId}
          renderIcon={setRenderIcon()}
          label={
            type === 'selection'
              ? value?.text ?? value
              : type === 'date'
              ? buildDate(value)
              : value
          }
          labelIcon={value?.icon || null}
          placeholder={placeholder}
          tabIndex={tabIndex}
          nonEditCell={nonEditCell}
          columnConfig={cell.column}
          totalInlineEditColumns={totalInlineEditColumns}
          totalColumns={totalColumns}
          type={type}
        />
      )}
      {!nonEditCell && inEditMode && cellId === activeCellId && (
        <>
          {type === 'text' && renderTextInput()}
          {type === 'number' && renderNumberInput()}
          {type === 'selection' && renderSelectCell()}
          {type === 'date' && renderDateCell()}
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
  nonEditCell: PropTypes.bool,
  placeholder: PropTypes.string,
  tabIndex: PropTypes.number,
  totalInlineEditColumns: PropTypes.number,
  type: PropTypes.oneOf(['text', 'number', 'selection', 'date']),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.object,
  ]),
};
