/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { PropTypes } from 'prop-types';
import { Checkbox } from 'carbon-components-react';
import { isColumnVisible } from './common';
import DraggableElement from '../../DraggableElement';
import { pkg } from '../../../../../settings';
import getColTitle from '../../../utils/getColTitle';

import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

const blockClass = `${pkg.prefix}--datagrid`;
const matchedColsById = (col1, col2) => col1 && col2 && col1.id === col2.id;

export const DraggableItemsList = ({
  columns,
  filterString,
  id,
  moveElement,
  onSelectColumn,
  setAriaRegionText,
}) => {
  const draggableClass = `${blockClass}__draggable-item`;
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

  // let localRefCopy;
  const handleDragEnd = (event) => {
    const { active, over } = event;

    const fromVisibleIndex = columns.findIndex((col) =>
      matchedColsById(col, active)
    );
    const toVisibleIndex = columns.findIndex((col) =>
      matchedColsById(col, over)
    );
    const colTitle = getColTitle(visibleCols[fromVisibleIndex]);

    setAriaRegionText(
      `${colTitle} dropped. New position ${toVisibleIndex + 1} of ${
        visibleCols.length
      }.`
    );

    const fromIndex = columns.findIndex((col) => matchedColsById(col, active));
    const toIndex = columns.findIndex((col) => matchedColsById(col, over));

    moveElement(fromIndex, toIndex);
  };

  const handleDragStart = (event) => {
    const { active } = event;

    const fromIndex = visibleCols.findIndex((col) =>
      matchedColsById(col, active)
    );
    const colTitle = getColTitle(visibleCols[fromIndex]);

    setAriaRegionText(
      `${colTitle} grabbed. Current position ${fromIndex + 1} of ${
        visibleCols.length
      }.`
    );
  };

  const handleDragUpdate = (event) => {
    const { active, over } = event;

    const fromIndex = visibleCols.findIndex((col) =>
      matchedColsById(col, active)
    );
    const toIndex = visibleCols.findIndex((col) => matchedColsById(col, over));

    const colTitle = getColTitle(visibleCols[fromIndex]);

    setAriaRegionText(
      `${colTitle} grabbed. Original position ${fromIndex + 1}, new position ${
        toIndex + 1
      } of ${visibleCols.length}.`
    );
  };

  const pointerSensor = useSensor(PointerSensor, {
    // Require the mouse to move by 10 pixels before activating
    activationConstraint: {
      distance: 4,
    },
  });

  const keyboardSensor = useSensor(KeyboardSensor, {
    coordinateGetter: (event, args) => {
      const { currentCoordinates } = args;

      let target = event.target;

      while (target && !target.classList.contains(draggableClass)) {
        target = target.parentNode;
      }

      const delta = target.offsetHeight;

      switch (event.code) {
        case 'ArrowRight':
        case 'ArrowLeft':
          // ignore right and left
          return currentCoordinates;
        case 'ArrowUp':
          return { ...currentCoordinates, y: currentCoordinates.y - delta };
        case 'ArrowDown':
          return { ...currentCoordinates, y: currentCoordinates.y + delta };
        case 'Space':
          break;
      }
    },
  });

  const sensors = useSensors(pointerSensor, keyboardSensor);
  const handleCheckboxKeydown = (event, colDef) => {
    if (event.code === 'Space') {
      onSelectColumn(colDef, !isColumnVisible(colDef));
      event.preventDefault();
      event.stopPropagation();
      return false;
    }
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      onDragMove={handleDragUpdate}
      sensors={sensors}
    >
      <>
        <div
          className={`${blockClass}__draggable-underlay`}
          aria-hidden="true"
          key={`draggable-underlay-${id}`}
        >
          {visibleCols.map((colDef) => (
            <div
              className={`${blockClass}__draggable-underlay-item`}
              key={colDef.id}
            ></div>
          ))}
        </div>
        <SortableContext
          items={visibleCols}
          strategy={verticalListSortingStrategy}
        >
          {visibleCols.map((colDef) => {
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
                  checked={isColumnVisible(colDef)}
                  disabled={isFrozenColumn}
                  onChange={(checked) => onSelectColumn(colDef, checked)}
                  id={`${blockClass}__customization-column-${colDef.id}`}
                  labelText={colHeaderTitle}
                  title={colHeaderTitle}
                  className={`${blockClass}__customize-columns-checkbox`}
                  hideLabel
                  onKeyDown={(event) => handleCheckboxKeydown(event, colDef)}
                />
                {
                  <div
                    dangerouslySetInnerHTML={{ __html: highlightedText }}
                    className={`${blockClass}__customize-columns-checkbox-visible-label`}
                  />
                }
              </>
            );

            return (
              <DraggableElement
                classList={draggableClass}
                key={colDef.id}
                id={colDef.id}
                disabled={filterString.length > 0 || isFrozenColumn}
                ariaLabel={colHeaderTitle}
                isSticky={isFrozenColumn}
                selected={isColumnVisible(colDef)}
              >
                {listContents}
              </DraggableElement>
            );
          })}
        </SortableContext>
      </>
    </DndContext>
  );
};

DraggableItemsList.propTypes = {
  columns: PropTypes.array.isRequired,
  filterString: PropTypes.string.isRequired,
  // focusIndex: PropTypes.number.isRequired,
  // getNextIndex: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  moveElement: PropTypes.func.isRequired,
  onSelectColumn: PropTypes.func.isRequired,
  setAriaRegionText: PropTypes.func.isRequired,
  // setColumnsObject: PropTypes.func.isRequired,
  // setFocusIndex: PropTypes.func.isRequired,
};
