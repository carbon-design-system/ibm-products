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

const blockClass = `${pkg.prefix}--datagrid`;

export const DraggableItemsList = ({
  columns,
  filterString,
  focusIndex,
  getNextIndex,
  isTableSortable,
  moveElement,
  onSelectColumn,
  setAriaRegionText,
  setColumnsObject,
  setFocusIndex,
}) => {
  return (
    <>
      {columns
        // hide the columns without Header, e.g the sticky actions, spacer
        .filter((colDef) => {
          const sortableTitle =
            isTableSortable && colDef.Header().props.children.props?.title;
          return (
            (!!colDef.Header.props && !!colDef.Header.props?.title) ||
            (isTableSortable && !!sortableTitle)
          );
        })
        .filter((colDef) => !colDef.isAction)
        .filter((colDef) => {
          const sortableTitle =
            isTableSortable && colDef.Header().props.children.props?.title;
          return (
            filterString.length === 0 ||
            ((isTableSortable
              ? sortableTitle?.toLowerCase().includes(filterString)
              : colDef.Header.props?.title
                  ?.toLowerCase()
                  .includes(filterString)) &&
              colDef.id !== 'spacer')
          );
        })
        .map((colDef, i) => {
          const isSortableColumn = !!colDef.canSort && !!isTableSortable;
          const sortableTitle =
            isTableSortable && colDef.Header().props.children.props?.title;
          const searchString = new RegExp('(' + filterString + ')');
          const res = filterString.length
            ? isSortableColumn
              ? sortableTitle.toLowerCase().split(searchString)
              : colDef.Header.props.title.toLowerCase().split(searchString)
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
              : isSortableColumn
              ? sortableTitle
              : colDef.Header.props?.title;
          const isFrozenColumn = !!colDef.sticky;
          const listContents = (
            <>
              <Checkbox
                wrapperClassName={`${blockClass}__customize-columns-checkbox-wrapper`}
                checked={isColumnVisible(colDef)}
                disabled={isFrozenColumn}
                onChange={onSelectColumn.bind(null, colDef)}
                id={`${blockClass}__customization-column-${colDef.id}`}
                labelText={
                  isSortableColumn ? sortableTitle : colDef.Header.props?.title
                }
                title={
                  isSortableColumn ? sortableTitle : colDef.Header.props?.title
                }
                className={`${blockClass}__customize-columns-checkbox`}
                hideLabel
              />
              {
                <div
                  dangerouslySetInnerHTML={{ __html: highlightedText }}
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
              ariaLabel={
                isSortableColumn ? sortableTitle : colDef.Header.props?.title
              }
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
  isTableSortable: PropTypes.bool,
  moveElement: PropTypes.func.isRequired,
  onSelectColumn: PropTypes.func.isRequired,
  setAriaRegionText: PropTypes.func.isRequired,
  setColumnsObject: PropTypes.func.isRequired,
  setFocusIndex: PropTypes.func.isRequired,
};
