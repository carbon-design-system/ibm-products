// @flow
/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2021
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Checkbox } from 'carbon-components-react';
import update from 'immutability-helper';
import { pkg } from '../../../../../settings';
import DraggableElement from '../../DraggableElement';
import { isColumnVisible } from './common';

const blockClass = `${pkg.prefix}--datagrid`;

const getNextIndex = (array, currentIndex, key) => {
  let newIndex = -1;
  if (key === 'ArrowUp') {
    newIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : array.length - 1;
  }
  if (key === 'ArrowDown') {
    newIndex = currentIndex + 1 < array.length ? currentIndex + 1 : 0;
  }
  return newIndex;
};

const Columns = ({
  getVisibleColumnsCount,
  filterString,
  columns,
  setColumnsObject,
  onSelectColumn,
  instructionsLabel = 'Press space bar to toggle drag drop mode, use arrow keys to move selected elements.',
  disabledInstructionsLabel = 'Reordering columns are disabled because they are filtered currently.',
  selectAllLabel = 'Column name',
}) => {
  const [ariaRegionText, setAriaRegionText] = React.useState('');
  const [focusIndex, setFocusIndex] = React.useState(-1);
  const moveElement = React.useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = columns[dragIndex];
      setColumnsObject(
        update(columns, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        })
      );
    },
    [columns, setColumnsObject]
  );

  const setColumnStatus = (id, isVisible) => {
    let list = document.querySelectorAll(
      `li.${blockClass}__draggable-handleHolder`
    );

    list.forEach((li, i) => {
      if (!columns[i].id.includes(id)) {
        return;
      }
      li.setAttribute('selected', isVisible);
    });
  };

  const initializeList = () => {
    columns.forEach((col) => {
      setColumnStatus(col.id, col.isVisible);
    });
  };

  const setSelectAllColumnClassName = () => {
    return `${blockClass}__draggable-handleHolder${
      getVisibleColumnsCount() > 0 ? ' -selected' : ''
    }`;
  };

  const setSelectAllCheckBox = () => {
    let checkboxes = document.querySelectorAll(
      `.${blockClass}__customize-columns-modal .bx--checkbox`
    );
    let selectAll = getVisibleColumnsCount() != columns.length;

    for (let i = 1; i < checkboxes.length; i++) {
      checkboxes[i].checked = selectAll;
      onSelectColumn(columns[i - 1], selectAll);
    }
    if (getVisibleColumnsCount() == columns.length) {
      document
        .querySelectorAll('#customize-columns-select-all')[0]
        .setAttribute('selected', getVisibleColumnsCount() > 0);
    }
  };

  initializeList();
  return (
    <div className={`${blockClass}__customize-columns-column-list`}>
      <DndProvider backend={HTML5Backend}>
        <ol
          className={`${blockClass}__customize-columns-column-list--focus`}
          role="listbox"
          aria-describedby={`${blockClass}__customize-columns--instructions`}
          onKeyDown={(e) => {
            const nextIndex = getNextIndex(columns, focusIndex, e.key);
            if (nextIndex >= 0) {
              setFocusIndex(nextIndex);
              e.preventDefault();
              e.stopPropagation();
            }
          }}
          tabIndex={0}
          onFocus={(e) => {
            if (e.target === e.currentTarget) {
              setFocusIndex(0);
            }
          }}
        >
          <span
            aria-live="assertive"
            className={`${blockClass}__shared-ui--assistive-text`}
          >
            {ariaRegionText}
          </span>
          <span
            id={`${blockClass}__customize-columns--instructions`}
            className={`${blockClass}__shared-ui--assistive-text`}
          >
            {filterString.length === 0
              ? instructionsLabel
              : disabledInstructionsLabel}
          </span>
          <div
            id={'customize-columns-select-all'}
            className={setSelectAllColumnClassName()}
            selected={'default'}
          >
            <Checkbox
              wrapperClassName={`${blockClass}__customize-columns-checkbox-wrapper`}
              className={`${blockClass}__customize-columns-select-all`}
              checked={getVisibleColumnsCount() == columns.length}
              empty={getVisibleColumnsCount() == 0}
              indeterminate={
                getVisibleColumnsCount() < columns.length &&
                getVisibleColumnsCount() > 0
              }
              onChange={setSelectAllCheckBox}
              id={`${blockClass}__customization-column-select-all`}
              labelText={selectAllLabel}
            />
          </div>
          {columns
            .filter(
              (colDef) =>
                filterString.length === 0 ||
                colDef.Header.props.title.toLowerCase().includes(filterString)
            )
            .map((colDef, i) => (
              <DraggableElement
                key={colDef.id}
                index={i}
                listData={columns}
                setListData={setColumnsObject}
                id={`dnd-datagrid-columns-${colDef.id}`}
                type="column-customization"
                disabled={filterString.length > 0}
                ariaLabel={colDef.Header.props.title}
                onGrab={setAriaRegionText}
                isFocused={focusIndex === i}
                moveElement={moveElement}
                onArrowKeyDown={(e, isGrabbed, currentIndex) => {
                  if (isGrabbed) {
                    const nextIndex = getNextIndex(
                      columns,
                      currentIndex,
                      e.key
                    );
                    e.preventDefault();
                    e.stopPropagation();
                    if (nextIndex >= 0) {
                      setFocusIndex(nextIndex);
                      moveElement(currentIndex, nextIndex);
                      e.target.scrollIntoView({
                        block: 'center',
                      });
                    }
                  }
                }}
              >
                <Checkbox
                  wrapperClassName={`${blockClass}__customize-columns-checkbox-wrapper`}
                  checked={isColumnVisible(colDef)}
                  // onChange={() => {
                  //   checkBoxChangeHandler(colDef, !colDef.isVisible);
                  // }}
                  onChange={onSelectColumn.bind(null, colDef)}
                  id={`${blockClass}__customization-column-${colDef.id}`}
                  labelText={colDef.Header.props.title}
                  title={colDef.Header.props.title}
                  className={`${blockClass}__customize-columns-checkbox`}
                />
              </DraggableElement>
            ))}
        </ol>
      </DndProvider>
    </div>
  );
};

Columns.propTypes = {
  columns: PropTypes.array.isRequired,
  disabledInstructionsLabel: PropTypes.string,
  filterString: PropTypes.string.isRequired,
  getVisibleColumnsCount: PropTypes.func.isRequired,
  instructionsLabel: PropTypes.string,
  onSelectColumn: PropTypes.func.isRequired,
  selectAllLabel: PropTypes.string,
  setColumnStatus: PropTypes.func,
  setColumnsObject: PropTypes.func.isRequired,
  setVisibleColumns: PropTypes.func,
};

export default Columns;
