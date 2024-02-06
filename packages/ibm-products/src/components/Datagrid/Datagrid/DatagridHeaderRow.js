/* eslint-disable react/prop-types */
/**
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState, useEffect, isValidElement } from 'react';
import cx from 'classnames';
import { TableHeader, TableRow } from '@carbon/react';
import { px } from '@carbon/layout';
import { selectionColumnId } from '../common-column-ids';
import { pkg } from '../../../settings';
import {
  handleColumnResizeEndEvent,
  handleColumnResizingEvent,
} from './addons/stateReducer';
import { getNodeTextContent } from '../../../global/js/utils/getNodeTextContent';
import { DatagridSlug } from './addons/Slug/DatagridSlug';

const blockClass = `${pkg.prefix}--datagrid`;

const getAccessibilityProps = (header) => {
  const props = {};
  const title = getNodeTextContent(header.Header);
  if (title) {
    props.title = title;
  } else {
    props['aria-hidden'] = true;
  }
  return props;
};

const ResizeHeader = ({
  resizerProps,
  header,
  handleOnMouseDownResize,
  originalCol,
  columnWidths,
  datagridState,
  incrementAmount,
  minWidth,
  dispatch,
  onColResizeEnd,
  resizerAriaLabel,
}) => {
  // eslint-disable-next-line no-unused-vars
  const { role, ...headerProps } = resizerProps;
  const mouseDownHandler = (evt) => {
    handleOnMouseDownResize(evt, resizerProps);
  };
  const keyDownHandler = (evt) => {
    const { key } = evt;
    if (key === 'ArrowLeft' || key === 'ArrowRight') {
      const originalColMinWidth = originalCol.minWidth || 90;
      const currentColumnWidth =
        columnWidths[header.id] ||
        (datagridState.isTableSortable &&
        originalCol.width < originalColMinWidth
          ? originalColMinWidth
          : originalCol.width);
      if (key === 'ArrowLeft') {
        if (currentColumnWidth - incrementAmount > Math.max(minWidth, 50)) {
          const newWidth = currentColumnWidth - incrementAmount;
          handleColumnResizingEvent(dispatch, header, newWidth, true);
        }
      }
      if (key === 'ArrowRight') {
        const newWidth = currentColumnWidth + incrementAmount;
        handleColumnResizingEvent(dispatch, header, newWidth, true);
      }
    }
  };
  const keyUpHandler = () => {
    handleColumnResizeEndEvent(dispatch, onColResizeEnd, header.id, true);
  };
  return (
    <>
      <input
        {...headerProps}
        onMouseDown={mouseDownHandler}
        onKeyDown={keyDownHandler}
        onKeyUp={keyUpHandler}
        className={`${blockClass}__col-resizer-range`}
        type="range"
        defaultValue={originalCol.width}
        aria-label={resizerAriaLabel || 'Resize column'}
      />
      <span className={`${blockClass}__col-resize-indicator`} />
    </>
  );
};

const HeaderRow = (datagridState, headRef, headerGroup) => {
  const { resizerAriaLabel, isTableSortable, rows } = datagridState;
  // Used to measure the height of the table and uses that value
  // to display a vertical line to indicate the column you are resizing
  useEffect(() => {
    const { tableId } = datagridState;
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
    const setCustomValues = ({ rowHeight, gridHeight }) => {
      headerRowElement.style.setProperty(
        `--${blockClass}--row-height`,
        px(rowHeight)
      );
      headerRowElement.style.setProperty(
        `--${blockClass}--grid-height`,
        px(gridHeight - scrollBuffer - tableToolbarHeight)
      );
      headerRowElement.style.setProperty(
        `--${blockClass}--header-height`,
        px(headerRowElement.offsetHeight)
      );
    };
    setCustomValues({
      gridHeight: gridElement.offsetHeight,
      rowHeight: headerRowElement.clientHeight,
    });
  }, [datagridState.rowSize, datagridState.tableId, datagridState]);

  const [incrementAmount] = useState(2);

  const handleOnMouseDownResize = (event, resizeProps) => {
    const { onMouseDown } = { ...resizeProps };
    // When event.button is 2, that is a right click
    // and we do not want to resize
    if (event.button === 2 || event.ctrlKey) {
      event.target.blur();
      return;
    }
    onMouseDown?.(event);
  };

  const {
    className: headerGroupClassName,
    // eslint-disable-next-line no-unused-vars
    role,
    ...headerGroupProps
  } = headerGroup.getHeaderGroupProps();

  const renderSlug = (slug) => {
    if (isTableSortable) {
      return;
    }
    return <DatagridSlug slug={slug} />;
  };

  const foundAIRow = rows.some(r => isValidElement(r?.original?.slug));

  return (
    <TableRow
      {...headerGroupProps}
      className={cx(`${blockClass}__head`, headerGroupClassName)}
      ref={headRef}
    >
      {foundAIRow && <th scope='col' aria-hidden='false' />}
      {datagridState.headers
        .filter(({ isVisible }) => isVisible)
        .map((header, index) => {
          if (header.id === selectionColumnId) {
            // render directly without the wrapper TableHeader
            return header.render('Header', { key: header.id });
          }
          const { minWidth } = header || 50;
          const { visibleColumns, state, dispatch, onColResizeEnd } =
            datagridState;
          const { columnResizing } = state;
          const { columnWidths } = columnResizing || {};
          const originalCol = visibleColumns[index];
          const {
            // eslint-disable-next-line no-unused-vars
            role,
            className: headerClassName,
            ...headerProps
          } = header.getHeaderProps();
          const resizerProps = header?.getResizerProps?.();
          return (
            <TableHeader
              {...headerProps}
              className={cx(headerClassName, {
                [`${blockClass}__resizableColumn`]: resizerProps,
                [`${blockClass}__isResizing`]: header.isResizing,
                [`${blockClass}__sortableColumn`]:
                  datagridState.isTableSortable && header.id !== 'spacer',
                [`${blockClass}__isSorted`]: header.isSorted,
                [`${blockClass}__header-actions-column`]: header.isAction,
                [`${blockClass}__with-slug`]:
                  header.slug && React.isValidElement(header.slug),
              })}
              key={header.id}
              aria-hidden={header.id === 'spacer' && 'true'}
              {...getAccessibilityProps(header)}
            >
              {header.render('Header')}
              {renderSlug(header.slug)}
              {resizerProps && !header.isAction && (
                <ResizeHeader
                  {...{
                    resizerProps,
                    header,
                    handleOnMouseDownResize,
                    originalCol,
                    columnWidths,
                    datagridState,
                    incrementAmount,
                    minWidth,
                    dispatch,
                    onColResizeEnd,
                    resizerAriaLabel,
                  }}
                />
              )}
            </TableHeader>
          );
        })}
    </TableRow>
  );
};

const useHeaderRow = (hooks) => {
  const useInstance = (instance) => {
    Object.assign(instance, { HeaderRow });
  };
  hooks.useInstance.push(useInstance);
};

export default useHeaderRow;
