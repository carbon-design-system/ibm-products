/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { pkg } from '../../settings';

const blockClass = `${pkg.prefix}--data-spreadsheet`;

export const DataSpreadsheetHeader = ({ defaultColumn, headerGroups }) => {
  return (
    <div>
      {headerGroups.map((headerGroup, index) => (
        <div
          key={`header_${index}`}
          {...headerGroup.getHeaderGroupProps()}
          className={`${blockClass}__tr`}
        >
          {/* SELECT ALL BUTTON */}
          <button
            type="button"
            className={cx(`${blockClass}__th`, `${blockClass}--interactive-cell-element`)}
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
              style={{
                height: defaultColumn?.rowHeight,
              }}
              {...column.getHeaderProps()}
              className={cx(`${blockClass}__th`, `${blockClass}--interactive-cell-element`)}
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
};
