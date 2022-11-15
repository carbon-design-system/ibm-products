/**
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// @flow
import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { DataTable } from 'carbon-components-react';
import PropTypes from 'prop-types';
import { px } from '@carbon/layout';
import { selectionColumnId } from '../common-column-ids';
import { pkg } from '../../../settings';

const blockClass = `${pkg.prefix}--datagrid`;

const HeaderRow = ({ datagridState, headerGroup }) => {
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
      const setCustomValues = ({ rowHeight = 48, gridHeight }) => {
        headerRowElement.style.setProperty(
          `--${blockClass}--row-height`,
          px(rowHeight)
        );
        headerRowElement.style.setProperty(
          `--${blockClass}--grid-height`,
          px(gridHeight - scrollBuffer)
        );
      };
      setCustomValues({
        gridHeight: gridElement.offsetHeight,
        rowHeight: headerRowElement.clientHeight,
      });
    }
  }, [datagridState.rowSize, datagridState.tableId, datagridState]);

  const [incrementAmount] = useState(2);
  return (
    <TableRow
      {...headerGroup.getHeaderGroupProps()}
      className={cx(
        `${blockClass}__head`,
        headerGroup.getHeaderGroupProps().className
      )}
    >
      {datagridState.headers
        .filter(({ isVisible }) => isVisible)
        .map((header, index) => {
          if (header.id === selectionColumnId) {
            // render directly without the wrapper TableHeader
            return header.render('Header', { key: header.id });
          }
          const { visibleColumns, state } = datagridState;
          const { columnResizing } = state;
          const { columnWidths } = columnResizing;
          const originalCol = visibleColumns[index];
          return (
            <TableHeader
              {...header.getHeaderProps()}
              className={cx(
                {
                  [`${blockClass}__resizableColumn`]: header.getResizerProps,
                  [`${blockClass}__isResizing`]: header.isResizing,
                  [`${blockClass}__sortableColumn`]: header.canSort,
                  [`${blockClass}__isSorted`]: header.isSorted,
                },
                header.getHeaderProps().className
              )}
              key={header.id}
            >
              {header.render('Header')}
              {header.getResizerProps && (
                <input
                  {...header.getResizerProps()}
                  onMouseUp={(event) => {
                    event.target.blur();
                  }}
                  onKeyDown={(event) => {
                    const { key } = event;
                    if (key === 'ArrowLeft' || key === 'ArrowRight') {
                      const currentColumnWidth =
                        columnWidths[header.id] || originalCol.width;
                      const closestTh = event.target.closest('th');
                      const allRows = document.querySelectorAll(
                        `#${datagridState.tableId} .${blockClass}__carbon-row`
                      );
                      if (key === 'ArrowLeft') {
                        columnWidths[header.id] =
                          currentColumnWidth - incrementAmount;
                        closestTh.style.width = px(
                          currentColumnWidth - incrementAmount
                        );
                        Array.from(allRows).forEach((row) => {
                          row.children.item(index).style.width = px(
                            currentColumnWidth - incrementAmount
                          );
                        });
                      }
                      if (key === 'ArrowRight') {
                        columnWidths[header.id] =
                          currentColumnWidth + incrementAmount;
                        closestTh.style.width = px(
                          currentColumnWidth + incrementAmount
                        );
                        Array.from(allRows).forEach((row) => {
                          row.children.item(index).style.width = px(
                            currentColumnWidth + incrementAmount
                          );
                        });
                      }
                    }
                  }}
                  className={cx(`${blockClass}__col-resizer-range`)}
                  type="range"
                  defaultValue={originalCol.width}
                  aria-label="Resize column"
                />
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

HeaderRow.propTypes = {
  datagridState: PropTypes.object.isRequired,
  headerGroup: PropTypes.object.isRequired,
};

export default useHeaderRow;
