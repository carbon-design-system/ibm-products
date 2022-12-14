/* eslint-disable react/prop-types */
/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2020
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
import React from 'react';
<<<<<<< HEAD
import { ChevronRight } from '@carbon/react/icons';
import cx from 'classnames';
import { pkg } from '../../settings';
=======
import { ChevronRight16 } from '@carbon/icons-react';
import cx from 'classnames';
import { pkg, carbon } from '../../settings';
>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8

const blockClass = `${pkg.prefix}--datagrid`;
const useNestedRowExpander = (hooks) => {
  const visibleColumns = (columns) => {
    const expanderColumn = {
      id: 'expander',
      Cell: ({ row }) =>
        row.canExpand && (
<<<<<<< HEAD
          <span {...row.getToggleRowExpandedProps()}>
            <ChevronRight
              className={cx(`${blockClass}__expander-icon`, {
                [`${blockClass}__expander-icon--not-open`]: !row.isExpanded,
                [`${blockClass}__expander-icon--open`]: row.isExpanded,
              })}
            />
          </span>
=======
          <button
            type="button"
            aria-label="Expand current row"
            className={cx(
              `${blockClass}__row-expander`,
              `${carbon.prefix}--btn`,
              `${carbon.prefix}--btn--ghost`
            )}
            {...row.getToggleRowExpandedProps()}
          >
            <ChevronRight16
              className={cx(
                `${blockClass}__expander-icon`,
                `${blockClass}__row-expander--icon`,
                {
                  [`${blockClass}__expander-icon--not-open`]: !row.isExpanded,
                  [`${blockClass}__expander-icon--open`]: row.isExpanded,
                }
              )}
            />
          </button>
>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8
        ),
      width: 48,
      disableResizing: true,
      disableSortBy: true,
      Header: '',
    };
    return [expanderColumn, ...columns];
  };
  hooks.visibleColumns.push(visibleColumns);
};

export default useNestedRowExpander;
