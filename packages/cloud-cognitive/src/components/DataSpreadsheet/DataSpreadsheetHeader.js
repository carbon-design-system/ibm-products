/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { pkg } from '../../settings';

const blockClass = `${pkg.prefix}--data-spreadsheet`;

export const DataSpreadsheetHeader = ({
  cellSizeValue,
  defaultColumn,
  headerGroups,
}) => {
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
            className={`${blockClass}__th`}
            style={{
              width: defaultColumn?.rowHeaderWidth,
              height: defaultColumn?.height
            }}
          >
            &nbsp;
          </button>
          {/* COLUMN HEADER BUTTONS */}
          {headerGroup.headers.map((column, index) => (
            <button
              key={`column_${index}`}
              style={{
                height: defaultColumn?.height
              }}
              {...column.getHeaderProps()}
              className={`${blockClass}__th`}
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
