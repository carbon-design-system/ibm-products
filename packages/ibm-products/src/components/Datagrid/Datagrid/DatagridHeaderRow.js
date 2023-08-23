/**
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// @flow
import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { DataTable } from 'carbon-components-react';
import { px } from '@carbon/layout';
import { selectionColumnId } from '../common-column-ids';
import { pkg } from '../../../settings';
import {
  handleColumnResizeEndEvent,
  handleColumnResizeStartEvent,
  handleColumnResizingEvent,
} from './addons/stateReducer';

const blockClass = `${pkg.prefix}--datagrid`;

const HeaderRow = (datagridState, headRef, headerGroup) => {
  // Used to measure the height of the table and uses that value
  // to display a vertical line to indicate the column you are resizing
  useEffect(() => {
    const { tableId } = datagridState;
    if (tableId) {
      const gridElement = document.querySelector(`#${tableId}`);
      const tableElement = gridElement.querySelector('table');
      const headerRowElement = document.querySelector(
        `#${tableId} .${blockClass}__head`
      );
      const hasHorizontalScrollbar =
        tableElement.scrollWidth > tableElement.clientWidth;
      const scrollBuffer = hasHorizontalScrollbar ? 18 : 2;
      const tableToolbar = gridElement.querySelector(
        `.${blockClass}__table-toolbar`
      );
      const tableToolbarHeight = tableToolbar?.offsetHeight || 0;
      const setCustomValues = ({ rowHeight = 48, gridHeight }) => {
        headerRowElement.style.setProperty(
          `--${blockClass}--row-height`,
          px(rowHeight)
        );
        headerRowElement.style.setProperty(
          `--${blockClass}--grid-height`,
          px(gridHeight - scrollBuffer - tableToolbarHeight)
        );
      };
      setCustomValues({
        gridHeight: gridElement.offsetHeight,
        rowHeight: headerRowElement.clientHeight,
      });
    }
  }, [datagridState.rowSize, datagridState.tableId, datagridState]);

  const [incrementAmount] = useState(2);

  const getClientXPosition = (event) => {
    let isTouchEvent = false;
    if (event.type === 'touchstart') {
      // Do not respond to multiple touches (e.g. 2 or 3 fingers)
      if (event.touches && event.touches.length > 1) {
        return;
      }
      isTouchEvent = true;
    }
    const clientX = isTouchEvent
      ? Math.round(event.touches[0].clientX)
      : event.clientX;
    const closestHeader = event.target.closest('th');
    const closestHeaderCoords = closestHeader.getBoundingClientRect();
    const headerOffset = closestHeaderCoords.left;
    const offsetValue = clientX - headerOffset;
    return offsetValue;
  };

  return (
    <TableRow
      {...headerGroup.getHeaderGroupProps({ role: false })}
      className={cx(
        `${blockClass}__head`,
        headerGroup.getHeaderGroupProps().className
      )}
      ref={headRef}
    >
      {datagridState.headers
        .filter(({ isVisible }) => isVisible)
        .map((header, index) => {
          if (header.id === selectionColumnId) {
            // render directly without the wrapper TableHeader
            return header.render('Header', { key: header.id });
          }
          const { minWidth } = header || 50;
          const { visibleColumns, state, dispatch } = datagridState;
          const { columnResizing, isResizing } = state;
          const { columnWidths } = columnResizing;
          const originalCol = visibleColumns[index];
          return (
            <TableHeader
              {...header.getHeaderProps({ role: false })}
              className={cx(
                {
                  [`${blockClass}__resizableColumn`]: header.getResizerProps,
                  [`${blockClass}__isResizing`]: header.isResizing,
                  [`${blockClass}__sortableColumn`]:
                    datagridState.isTableSortable,
                  [`${blockClass}__isSorted`]: header.isSorted,
                },
                header.getHeaderProps().className
              )}
              key={header.id}
            >
              {header.render('Header')}
              {header.getResizerProps && (
                <>
                  <input
                    {...header.getResizerProps()}
                    onMouseMove={(event) => {
                      if (isResizing) {
                        const newWidth = getClientXPosition(event);
                        handleColumnResizingEvent(dispatch, header, newWidth);
                      }
                    }}
                    onMouseDown={() => handleColumnResizeStartEvent(dispatch)}
                    onMouseUp={(event) => {
                      event.target.blur();
                      handleColumnResizeEndEvent(dispatch);
                    }}
                    onKeyDown={(event) => {
                      const { key } = event;
                      if (key === 'ArrowLeft' || key === 'ArrowRight') {
                        const currentColumnWidth =
                          columnWidths[header.id] ||
                          (datagridState.isTableSortable &&
                          originalCol.width < 90
                            ? 90
                            : originalCol.width);
                        if (key === 'ArrowLeft') {
                          if (
                            currentColumnWidth - incrementAmount >
                            Math.max(minWidth, 50)
                          ) {
                            const newWidth =
                              currentColumnWidth - incrementAmount;
                            handleColumnResizingEvent(
                              dispatch,
                              header,
                              newWidth,
                              true
                            );
                          }
                        }
                        if (key === 'ArrowRight') {
                          const newWidth = currentColumnWidth + incrementAmount;
                          handleColumnResizingEvent(
                            dispatch,
                            header,
                            newWidth,
                            true
                          );
                        }
                      }
                    }}
                    onKeyUp={() => handleColumnResizeEndEvent(dispatch)}
                    className={cx(`${blockClass}__col-resizer-range`)}
                    type="range"
                    defaultValue={originalCol.width}
                    aria-label="Resize column"
                  />
                  <span className={`${blockClass}__col-resize-indicator`} />
                </>
              )}
            </TableHeader>
          );
        })}
    </TableRow>
  );
};

const { TableHeader, TableRow } = DataTable;

const useHeaderRow = (hooks) => {
  const useInstance = (instance) => {
    Object.assign(instance, { HeaderRow });
  };
  hooks.useInstance.push(useInstance);
};

export default useHeaderRow;
