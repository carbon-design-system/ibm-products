/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Checkbox } from 'carbon-components-react';
import update from 'immutability-helper';
import { pkg } from '../../../../../settings';
import DraggableElement from '../../DraggableElement';
import { isColumnVisible } from './common';
import classNames from 'classnames';

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
  assistiveTextInstructionsLabel,
  assistiveTextDisabledInstructionsLabel,
  selectAllLabel,
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
              ? assistiveTextInstructionsLabel
              : assistiveTextDisabledInstructionsLabel}
          </span>
          <div
            id={`${blockClass}__customize-columns-select-all`}
            className={classNames(
              `${blockClass}__customize-columns-select-all`,
              {
                [`${blockClass}__customize-columns-select-all--selected`]:
                  getVisibleColumnsCount() > 0,
              }
            )}
            selected={getVisibleColumnsCount() > 0}
          >
            <Checkbox
              wrapperClassName={`${blockClass}__customize-columns-checkbox-wrapper`}
              checked={getVisibleColumnsCount() === columns.length}
              indeterminate={
                getVisibleColumnsCount() < columns.length &&
                getVisibleColumnsCount() > 0
              }
              onChange={() => {
                onSelectColumn(
                  columns,
                  getVisibleColumnsCount() !== columns.length
                );
              }}
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
                selected={isColumnVisible(colDef)}
              >
                <Checkbox
                  wrapperClassName={`${blockClass}__customize-columns-checkbox-wrapper`}
                  checked={isColumnVisible(colDef)}
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
  assistiveTextDisabledInstructionsLabel: PropTypes.string,
  assistiveTextInstructionsLabel: PropTypes.string,
  columns: PropTypes.array.isRequired,
  disabledInstructionsLabel: PropTypes.string,
  filterString: PropTypes.string.isRequired,
  getVisibleColumnsCount: PropTypes.func.isRequired,
  instructionsLabel: PropTypes.string,
  onSelectColumn: PropTypes.func.isRequired,
  selectAllLabel: PropTypes.string,
  setColumnStatus: PropTypes.func,
  setColumnsObject: PropTypes.func.isRequired,
};

export default Columns;
