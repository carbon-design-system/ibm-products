/**
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// @flow
import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { DataTable } from 'carbon-components-react';
import { selectionColumnId } from '../common-column-ids';
import { pkg } from '../../../settings';
import { px } from '@carbon/layout';

const blockClass = `${pkg.prefix}--datagrid`;

const HeaderRow = (datagridState, headRef, headerGroup) => {
  const [selectedHeader, setSelectedHeader] = useState([]);
  const [selectedHeaderWidths, setSelectedHeaderWidths] = useState([]);
  const [isResizing, setIsResizing] = useState('');
  const [isDblClick, setIsDblClick] = useState(false);
  const [dragStopped, setDragStopped] = useState(false);
  const [colExpandWidth, setColExpandWidth] = useState('');
  const [colExpandId, setColExpandId] = useState('');
  const { state } = datagridState;
  const { columnResizing } = state;

  // Below is to handle multiple column resize and `double click` column to fit content.
  const handleMultiColumSelect = (header, e) => {
    document.getSelection().removeAllRanges();

    setDragStopped(false);
    if (e.shiftKey && !selectedHeader.some((item) => item.id === header.id)) {
      const headerId = header.id;
      setSelectedHeader((current) => [...current, header]);
      setSelectedHeaderWidths((current) => [
        ...current,
        { [headerId]: header.width },
      ]);
    }
    if (!e.shiftKey) {
      setSelectedHeader([]); // Remove selection if `Shift` not pressed while clicking on resizer
      setSelectedHeaderWidths([]);
    }

    if (e.detail === 2) {
      setIsDblClick(true);
      let cellWidths = [];
      datagridState.rows.map((row) => {
        const cell = document.querySelector(
          `.row_${row.id}__column__${header.id}`
        );
        const colHeader = document.querySelector(`.column__${header.id}`);
        const headerLabel = colHeader.querySelector(
          `.${blockClass}__defaultStringRenderer`
        );
        if (
          cell.firstChild.scrollWidth > cell.firstChild.offsetWidth ||
          headerLabel.scrollWidth > headerLabel.offsetWidth
        ) {
          cellWidths.push(
            cell.firstChild.scrollWidth,
            colHeader.firstChild.firstChild.scrollWidth
          );
          setTimeout(() => {
            const largest = Math.max.apply(0, cellWidths);
            const newColWidth = largest + 33;
            setColExpandWidth(newColWidth);
            setColExpandId(header.id);
            cell.style.width = px(newColWidth);
            colHeader.style.width = px(newColWidth);
          }, 1);
        }
      });
    } else {
      setIsDblClick(false);
      setColExpandWidth('');
      setColExpandId('');
    }
  };

  useEffect(() => {
    if (dragStopped) {
      setSelectedHeader([]); // Remove column selection
      setSelectedHeaderWidths([]); //Reset initial column widths selection
    }
  }, [dragStopped]);

  useEffect(() => {
    document.getSelection().removeAllRanges();
    const colWidths = columnResizing.columnWidths;
    const resizingCol = columnResizing.isResizingColumn;

    if (resizingCol !== null && selectedHeader.length > 0) {
      setIsResizing(resizingCol);
      selectedHeader.map((col, idx) => {
        if (col.id !== resizingCol) {
          const initialColWidth = selectedHeaderWidths[idx][col.id]; // get initial width of selected columns
          if (columnResizing.columnWidth > colWidths[resizingCol]) {
            // check resize 'forward' or 'backward'
            const resizeDiff =
              columnResizing.columnWidth - colWidths[resizingCol]; // actual resized value of current resizing column
            if (colWidths[col.id] > 50) {
              colWidths[col.id] = isNaN(resizeDiff)
                ? initialColWidth
                : initialColWidth - resizeDiff; // add actual resized value to the other selected column widths
            } else {
              colWidths[col.id] = 50;
            }
          } else {
            const resizeDiff =
              colWidths[resizingCol] - columnResizing.columnWidth;
            colWidths[col.id] = isNaN(resizeDiff)
              ? initialColWidth
              : initialColWidth + resizeDiff;
          }
        } else {
          if (
            colWidths[datagridState.state.columnResizing.isResizingColumn] < 50
          ) {
            colWidths[datagridState.state.columnResizing.isResizingColumn] = 50;
          }
        }
      });
    } else {
      if (
        selectedHeader.length > 1 &&
        columnResizing.isResizingColumn === null &&
        (colWidths[isResizing] < columnResizing.columnWidth ||
          colWidths[isResizing] > columnResizing.columnWidth)
      ) {
        // Check resize ended, 'columnResizing' firing even if we clicked on resizer.
        setDragStopped(true);
      }

      if (colWidths[datagridState.state.columnResizing.isResizingColumn] < 50) {
        colWidths[datagridState.state.columnResizing.isResizingColumn] = 50;
        datagridState.state.columnResizing.columnWidth = 50;
      }
    }
    if (isDblClick) {
      columnResizing.isResizingColumn = colExpandId;
      columnResizing.columnWidths[colExpandId] = colExpandWidth;
      columnResizing.columnWidth = colExpandWidth;
    }
  }, [
    columnResizing,
    isResizing,
    selectedHeader,
    selectedHeaderWidths,
    isDblClick,
    colExpandWidth,
    colExpandId,
    datagridState,
  ]);

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
        .map((header) => {
          if (header.id === selectionColumnId) {
            // render directly without the wrapper TableHeader

            return header.render('Header', { key: header.id });
          }
          const headerTitle =
            typeof header.Header.props !== 'undefined'
              ? header.Header.props.title
              : '';
          const arrayOfWords = headerTitle && headerTitle.split(' ');

          return (
            <TableHeader
              {...header.getHeaderProps({ role: false })}
              className={cx(
                {
                  [`${blockClass}__resizableColumn`]: header.getResizerProps,
                  [`${blockClass}__isResizing`]: header.isResizing,
                  [`${blockClass}__sortableColumn`]: header.canSort,
                  [`${blockClass}__isSorted`]: header.isSorted,
                  [`${blockClass}__selected-header`]:
                    !dragStopped &&
                    selectedHeader.some((item) => item.id === header.id),
                  [`${blockClass}__single-wrap-header`]:
                    arrayOfWords.length === 1,
                  [`${blockClass}__double-wrap-header`]:
                    arrayOfWords.length > 1,
                },
                header.getHeaderProps().className,
                `column__${header.id}`
              )}
              key={header.id}
            >
              {header.render('Header')}
              {header.getResizerProps && (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                <div
                  {...header.getResizerProps()}
                  className={`${blockClass}__resizer`}
                  onClick={(event) => {
                    handleMultiColumSelect(header, event);
                  }}
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

export default useHeaderRow;
