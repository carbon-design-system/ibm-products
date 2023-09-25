/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { PropTypes } from 'prop-types';
import { Checkbox } from '@carbon/react';
import { isColumnVisible } from './common';
import DraggableElement from '../../DraggableElement';
import { pkg } from '../../../../../settings';
import getColTitle from '../../../utils/getColTitle';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import uuidv4 from '../../../../../global/js/utils/uuidv4';

const blockClass = `${pkg.prefix}--datagrid`;

export const DraggableItemsList = ({
  columns,
  filterString,
  focusIndex,
  moveElement,
  onSelectColumn,
  setAriaRegionText,
  setColumnsObject,
}) => {
  const listId = uuidv4();

  const handleDragEnd = (result) => {
    const { source, destination } = result;

    if (
      !destination ||
      (source.droppableId === destination.droppableId &&
        source.index === destination.index)
    ) {
      // do nothing if no destination or
      // source and destination are the same
    }

    moveElement(source.index, destination.index);
    // console.log(source, destination, draggableId);
    // will need to call move element
  };

  const visibleCols = columns
    // hide the columns without Header, e.g the sticky actions, spacer
    .filter((colDef) => {
      return !!getColTitle(colDef);
    })
    .filter(Boolean)
    .filter((colDef) => !colDef.isAction)
    .filter((colDef) => {
      return (
        filterString.length === 0 ||
        (getColTitle(colDef)?.toLowerCase().includes(filterString) &&
          colDef.id !== 'spacer')
      );
    });

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId={listId}>
        {(provided) => {
          return (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <div
                className={`${blockClass}__draggable-underlay`}
                aria-hidden="true"
                key={`draggable-underlay-${listId}`}
              >
                {visibleCols.map((colDef) => (
                  <div
                    className={`${blockClass}__draggable-underlay-item`}
                    key={colDef.id}
                  ></div>
                ))}
              </div>
              {visibleCols.map((colDef, i) => {
                const colHeaderTitle = getColTitle(colDef);
                const searchString = new RegExp('(' + filterString + ')');
                const res = filterString.length
                  ? colHeaderTitle.toLowerCase().split(searchString)
                  : null;
                const firstWord =
                  res !== null
                    ? res[0] === ''
                      ? res[1].charAt(0).toUpperCase() + res[1].substring(1)
                      : res[0].charAt(0).toUpperCase() + res[0].substring(1)
                    : null;
                const highlightedText =
                  res !== null
                    ? res[0] === ''
                      ? `<strong>${firstWord}</strong>` + res[2]
                      : firstWord + `<strong>${res[1]}</strong>` + res[2]
                    : colHeaderTitle;
                const isFrozenColumn = !!colDef.sticky;
                const listContents = (
                  <>
                    <Checkbox
                      // wrapperClassName={`${blockClass}__customize-columns-checkbox-wrapper`}
                      checked={isColumnVisible(colDef)}
                      disabled={isFrozenColumn}
                      onChange={(_, { checked }) =>
                        onSelectColumn(colDef, checked)
                      }
                      id={`${blockClass}__customization-column-${colDef.id}`}
                      labelText={colHeaderTitle}
                      title={colHeaderTitle}
                      className={`${blockClass}__customize-columns-checkbox`}
                      hideLabel
                    />
                    {
                      <div
                        dangerouslySetInnerHTML={{ __html: highlightedText }}
                        className={`${blockClass}__customize-columns-checkbox-visible-label`}
                      ></div>
                    }
                  </>
                );

                return (
                  <DraggableElement
                    key={colDef.id}
                    index={i}
                    listData={columns}
                    setListData={setColumnsObject}
                    id={`dnd-datagrid-columns-${colDef.id}`}
                    type="column-customization"
                    disabled={filterString.length > 0 || isFrozenColumn}
                    ariaLabel={colHeaderTitle}
                    onGrab={setAriaRegionText}
                    isFocused={focusIndex === i}
                    moveElement={moveElement}
                    isSticky={isFrozenColumn}
                    selected={isColumnVisible(colDef)}
                  >
                    {listContents}
                  </DraggableElement>
                );
              })}
              <span
                className="column__dnd-placeholder"
                key={`placeholder-${listId}`}
              >
                {/* Needed by react-beautiful-dnd */}
                {provided.placeholder}
              </span>
            </div>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
};

DraggableItemsList.propTypes = {
  columns: PropTypes.array.isRequired,
  filterString: PropTypes.string.isRequired,
  focusIndex: PropTypes.number.isRequired,
  getNextIndex: PropTypes.func.isRequired,
  moveElement: PropTypes.func.isRequired,
  onSelectColumn: PropTypes.func.isRequired,
  setAriaRegionText: PropTypes.func.isRequired,
  setColumnsObject: PropTypes.func.isRequired,
  setFocusIndex: PropTypes.func.isRequired,
};
