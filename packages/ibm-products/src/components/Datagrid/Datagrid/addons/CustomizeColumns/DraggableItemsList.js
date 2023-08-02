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

const blockClass = `${pkg.prefix}--datagrid`;

export const DraggableItemsList = ({
  columns,
  filterString,
  focusIndex,
  getNextIndex,
  moveElement,
  onSelectColumn,
  setAriaRegionText,
  setColumnsObject,
  setFocusIndex,
}) => {
  // This function recursively looks for the nested header element until we can find the key which contains the title.
  // This can happen if multiple hooks are used together that manipulate the rendering of the column
  // header, such as `useColumnCenterAlign` and `useSortableColumns`.
  const getNestedTitle = (component) => {
    if (component && !component.key) {
      return getNestedTitle(component.children);
    }
    if (component && component.key && typeof component.key === 'string') {
      return component.key;
    }
  };

  const getColTitle = (col) => {
    if (!col) {
      return;
    }
    const checkTitle = () => {
      if (
        col.Header().props.children.props &&
        col.Header().props.children.props.title
      ) {
        return col.Header().props.children.props.title;
      }
      return getNestedTitle(col.Header().props.children.props);
    };
    return typeof col?.Header === 'function'
      ? checkTitle()
      : col.Header.props.title;
  };

  return (
    <>
      {columns
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
        })
        .map((colDef, i) => {
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
                wrapperClassName={`${blockClass}__customize-columns-checkbox-wrapper`}
                checked={isColumnVisible(colDef)}
                disabled={isFrozenColumn}
                onChange={(_, { checked }) => onSelectColumn(colDef, checked)}
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
              onArrowKeyDown={(e, isGrabbed, currentIndex) => {
                if (isGrabbed) {
                  const nextIndex = getNextIndex(columns, currentIndex, e.key);
                  e.preventDefault();
                  e.stopPropagation();

                  if (nextIndex >= 0 && !columns[nextIndex]?.sticky) {
                    setFocusIndex(nextIndex);
                    moveElement(currentIndex, nextIndex);
                    e.target.scrollIntoView({
                      block: 'center',
                    });
                  }
                }
              }}
              isSticky={isFrozenColumn}
              selected={isColumnVisible(colDef)}
            >
              {listContents}
            </DraggableElement>
          );
        })}
    </>
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
