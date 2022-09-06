import React, {
  useState,
  useRef,
  useEffect,
  useContext,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'carbon-components-react';
import { Edit16 } from '@carbon/icons-react';
import { InlineEditButton } from '../InlineEditButton';
import { pkg } from '../../../../../../settings';
import cx from 'classnames';
import { InlineEditContext } from '../InlineEditContext';

const blockClass = `${pkg.prefix}--datagrid`;
export const InlineEditText = ({
  cell,
  instance,
  placeholder = '',
  tabIndex,
  value,
  label = 'Inline edit type text label',
  nonEditCell,
}) => {
  const columnId = cell.column.id;
  const columnIndex = instance.columns.findIndex((col) => col.id === columnId);
  const cellId = `column-${columnIndex}-row-${cell.row.index}`;

  const { state, dispatch } = useContext(InlineEditContext);
  const [inEditMode, setInEditMode] = useState(false);
  const [cellValue, setCellValue] = useState(value);
  const { activeCellId, editId } = state;

  const textInputRef = useRef();
  const outerButtonElement = useRef();

  // If you are in edit mode and click outside of the cell,
  // this changes the cell back to the InlineEditButton
  useEffect(() => {
    if (activeCellId !== cellId) {
      setInEditMode(false);
    }
    if (activeCellId === cellId && editId === cellId && !nonEditCell) {
      setInEditMode(true);
    }
    saveCellData(cellValue);
  }, [activeCellId, cellId, nonEditCell, editId, cellValue, saveCellData]);

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
      textInputRef.current.focus();
    }
  }, [inEditMode]);

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
          dispatch({ type: 'EXIT_EDIT_MODE', payload: newCellId });
          setInEditMode(false);
          sendFocusBackToGrid();
        }
        break;
      }
      case 'Escape': {
        if (inEditMode) {
          dispatch({ type: 'EXIT_EDIT_MODE', payload: cellId });
          setCellValue(value);
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
      })}
    >
      {!inEditMode && (
        <InlineEditButton
          isActiveCell={cellId === activeCellId}
          renderIcon={Edit16}
          label={value}
          placeholder={placeholder}
          tabIndex={tabIndex}
          nonEditCell={nonEditCell}
        />
      )}
      {!nonEditCell && inEditMode && cellId === activeCellId && (
        <TextInput
          id={cellId}
          placeholder={placeholder}
          hideLabel
          labelText={label}
          defaultValue={cellValue}
          onChange={(event) => setCellValue(event.target.value)}
          ref={textInputRef}
        />
      )}
    </div>
  );
};

InlineEditText.propTypes = {
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};
