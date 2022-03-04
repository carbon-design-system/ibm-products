/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { pkg } from '../../settings';
import { deepCloneObject } from '../../global/js/utils/deepCloneObject';

const blockClass = `${pkg.prefix}--data-spreadsheet`;

export const DataSpreadsheetHeader = ({
  activeCellCoordinates,
  defaultColumn,
  headerGroups,
  selectionAreas,
}) => {
  const checkSelectionAreaForActiveHeader = useCallback(
    (headerIndex) => {
      // Determines if a column header cell should receive a highlight/active background color
      // Check each object in selectionAreas and see if the headerIndex is between
      // point1.column and point2.column, inclusive

      const areasCloned = deepCloneObject(selectionAreas);
      const activeColumnIndexes = [];
      areasCloned.forEach((area) => {
        const greatestColumnIndex = Math.max(
          area.point1?.column,
          area.point2?.column
        );
        const lowestColumnIndex = Math.min(
          area.point1?.column,
          area.point2?.column
        );
        for (let i = lowestColumnIndex; i <= greatestColumnIndex; i++) {
          activeColumnIndexes.push(i);
        }
      });
      const activeColumnIndexesNoDuplicates = [...new Set(activeColumnIndexes)];
      if (
        areasCloned?.length &&
        activeColumnIndexesNoDuplicates.includes(headerIndex)
      ) {
        return true;
      }
      return false;
    },
    [selectionAreas]
  );

  return (
    <div className={cx(`${blockClass}__header--container`)}>
      {headerGroups.map((headerGroup, index) => (
        <div
          key={`header_${index}`}
          {...headerGroup.getHeaderGroupProps()}
          className={`${blockClass}__tr`}
        >
          {/* SELECT ALL BUTTON */}
          <button
            data-row-index="header"
            data-column-index="header"
            type="button"
            tabIndex={-1}
            className={cx(
              `${blockClass}__th`,
              `${blockClass}--interactive-cell-element`,
              {
                [`${blockClass}__th--active-header`]:
                  activeCellCoordinates?.column === 'header' &&
                  activeCellCoordinates?.row === 'header',
              }
            )}
            style={{
              width: defaultColumn?.rowHeaderWidth,
              height: defaultColumn?.rowHeight,
            }}
          >
            &nbsp;
          </button>
          {/* COLUMN HEADER BUTTONS */}
          {headerGroup.headers.map((column, index) => (
            <button
              key={`column_${index}`}
              data-row-index="header"
              data-column-index={index}
              tabIndex={-1}
              style={{
                height: defaultColumn?.rowHeight,
              }}
              {...column.getHeaderProps()}
              className={cx(
                `${blockClass}__th`,
                `${blockClass}--interactive-cell-element`,
                {
                  [`${blockClass}__th--active-header`]:
                    activeCellCoordinates?.column === index ||
                    checkSelectionAreaForActiveHeader(index),
                }
              )}
              type="button"
            >
              {column.render('Header')}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

DataSpreadsheetHeader.propTypes = {
  /**
   * Object containing the active cell coordinates
   */
  activeCellCoordinates: PropTypes.shape({
    row: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    column: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),

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
   * All of the cell selection area items
   */
  selectionAreas: PropTypes.arrayOf(PropTypes.object),
};
