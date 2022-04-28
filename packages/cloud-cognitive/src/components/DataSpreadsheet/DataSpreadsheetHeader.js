/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { pkg } from '../../settings';
import { usePreviousValue } from '../../global/js/hooks';
import { checkActiveHeaderCell } from './utils/checkActiveHeaderCell';
import { checkSelectedHeaderCell } from './utils/checkSelectedHeaderCell';
import { handleHeaderCellSelection } from './utils/handleHeaderCellSelection';
import { selectAllCells } from './utils/selectAllCells';
import { getSpreadsheetWidth } from './utils/getSpreadsheetWidth';

const blockClass = `${pkg.prefix}--data-spreadsheet`;

export const DataSpreadsheetHeader = forwardRef(
  (
    {
      activeCellCoordinates,
      cellSize,
      columns,
      defaultColumn,
      headerGroups,
      scrollBarSize,
      selectionAreas,
      setActiveCellCoordinates,
      setCurrentMatcher,
      setSelectionAreas,
      setSelectionAreaData,
      rows,
      totalVisibleColumns,
      updateActiveCellCoordinates,
    },
    ref
  ) => {
    const [scrollBarSizeValue, setScrollBarSizeValue] = useState(0);
    const previousState = usePreviousValue({ cellSize });
    useEffect(() => {
      if (previousState?.cellSize !== cellSize) {
        const scrollContainer = ref?.current?.querySelector(
          `.${blockClass}__list--container`
        );
        const hasScrollBar =
          scrollContainer?.scrollHeight > scrollContainer?.clientHeight;
        const scrollBarValue = hasScrollBar ? 0 : scrollBarSize;
        setScrollBarSizeValue(scrollBarValue);
      }
    }, [cellSize, ref, scrollBarSize, previousState?.cellSize]);

    const handleColumnHeaderClick = (index) => {
      return (event) => {
        const isHoldingCommandKey = event.metaKey || event.ctrlKey;
        handleHeaderCellSelection({
          type: 'column',
          activeCellCoordinates,
          rows,
          columns,
          setActiveCellCoordinates,
          setCurrentMatcher,
          setSelectionAreas,
          spreadsheetRef: ref,
          index,
          setSelectionAreaData,
          isHoldingCommandKey,
        });
      };
    };

    const handleSelectAllClick = () => {
      selectAllCells({
        ref,
        setCurrentMatcher,
        setSelectionAreas,
        rows,
        columns,
        activeCellCoordinates,
        updateActiveCellCoordinates,
      });
    };

    return (
      <div className={cx(`${blockClass}__header--container`)} role="rowgroup">
        {headerGroups.map((headerGroup, index) => (
          <div
            key={`header_${index}`}
            {...headerGroup.getHeaderGroupProps()}
            style={{
              ...headerGroup.getHeaderGroupProps().style,
              width: getSpreadsheetWidth({
                type: 'header',
                headerGroup,
                scrollBarSizeValue,
                totalVisibleColumns,
                defaultColumn,
              }),
              overflow: 'hidden',
            }}
            className={`${blockClass}__tr`}
          >
            {/* SELECT ALL BUTTON */}
            <div
              role="columnheader"
              className={`${blockClass}__select-all-cell-container`}
              style={{
                width: defaultColumn?.rowHeaderWidth,
                height: defaultColumn?.rowHeight,
              }}
            >
              <button
                id={`${blockClass}__cell--header--header`}
                data-row-index="header"
                data-column-index="header"
                type="button"
                tabIndex={-1}
                onClick={handleSelectAllClick}
                className={cx(
                  `${blockClass}__th`,
                  `${blockClass}--interactive-cell-element`,
                  `${blockClass}__th--select-all`,
                  {
                    [`${blockClass}__th--active-header`]:
                      activeCellCoordinates?.column === 'header' &&
                      activeCellCoordinates?.row === 'header',
                  }
                )}
              >
                &nbsp;
              </button>
            </div>
            {/* COLUMN HEADER BUTTONS */}
            {headerGroup.headers.map((column, index) => (
              <div
                key={`column_${index}`}
                role="columnheader"
                className={`${blockClass}__columnheader`}
                {...column.getHeaderProps()}
              >
                <button
                  id={`${blockClass}__cell--header--${index}`}
                  data-row-index="header"
                  data-column-index={index}
                  tabIndex={-1}
                  onClick={handleColumnHeaderClick(index)}
                  style={{
                    height: defaultColumn?.rowHeight,
                    width: column?.width || defaultColumn?.width,
                  }}
                  className={cx(
                    `${blockClass}__th`,
                    `${blockClass}--interactive-cell-element`,
                    {
                      [`${blockClass}__th--active-header`]:
                        activeCellCoordinates?.column === index ||
                        checkActiveHeaderCell(index, selectionAreas, 'column'),
                      [`${blockClass}__th--selected-header`]:
                        checkSelectedHeaderCell(
                          index,
                          selectionAreas,
                          'column'
                        ),
                    }
                  )}
                  type="button"
                >
                  {column.render('Header')}
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
);

DataSpreadsheetHeader.propTypes = {
  /**
   * Object containing the active cell coordinates
   */
  activeCellCoordinates: PropTypes.shape({
    row: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    column: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),

  /**
   * Specifies the cell height
   */
  cellSize: PropTypes.oneOf(['compact', 'standard', 'medium', 'large']),

  /**
   * All of the spreadsheet columns
   */
  columns: PropTypes.array,

  /**
   * Default spreadsheet sizing values
   */
  defaultColumn: PropTypes.shape({
    rowHeight: PropTypes.number,
    rowHeaderWidth: PropTypes.number,
    width: PropTypes.number,
  }),

  /**
   * Headers provided from useTable hook
   */
  headerGroups: PropTypes.arrayOf(PropTypes.object),

  /**
   * All of the spreadsheet row data
   */
  rows: PropTypes.arrayOf(PropTypes.object),

  /**
   * The scrollbar width
   */
  scrollBarSize: PropTypes.number,

  /**
   * All of the cell selection area items
   */
  selectionAreas: PropTypes.arrayOf(PropTypes.object),

  /**
   * Setter fn for activeCellCoordinates value
   */
  setActiveCellCoordinates: PropTypes.func,

  /**
   * Setter fn for currentMatcher value
   */
  setCurrentMatcher: PropTypes.func,

  /**
   * Setter fn for selectionAreaData state value
   */
  setSelectionAreaData: PropTypes.func,

  /**
   * Setter fn for selectionAreas value
   */
  setSelectionAreas: PropTypes.func,

  /**
   * The total number of columns to be initially visible, additional columns will be rendered and
   * visible via horizontal scrollbar
   */
  totalVisibleColumns: PropTypes.number,

  /**
   * Function used to update the active cell coordinates
   */
  updateActiveCellCoordinates: PropTypes.func,
};
