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
import { ChevronDown, ChevronUp } from '@carbon/react/icons';
<<<<<<< HEAD
=======
import { ChevronDown16, ChevronUp16 } from '@carbon/icons-react';
import cx from 'classnames';
import { pkg, carbon } from '../../settings';

const blockClass = `${pkg.prefix}--datagrid`;
>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8
=======
import { pkg, carbon } from '../../settings';
import cx from 'classnames';

const blockClass = `${pkg.prefix}--datagrid`;
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212

const useRowExpander = (hooks) => {
  const visibleColumns = (columns) => {
    const expanderColumn = {
      id: 'expander',
<<<<<<< HEAD
<<<<<<< HEAD
      Cell: ({ row }) =>
        row.canExpand && (
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </span>
        ),
=======
=======
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
      Cell: ({ row }) => {
        return (
          row.canExpand && (
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
              {row.isExpanded ? (
<<<<<<< HEAD
                <ChevronUp16 className={`${blockClass}__row-expander--icon`} />
              ) : (
                <ChevronDown16
                  className={`${blockClass}__row-expander--icon`}
                />
=======
                <ChevronUp className={`${blockClass}__row-expander--icon`} />
              ) : (
                <ChevronDown className={`${blockClass}__row-expander--icon`} />
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
              )}
            </button>
          )
        );
      },
<<<<<<< HEAD
>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8
=======
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
      width: 48,
      disableResizing: true,
      disableSortBy: true,
      Header: '',
    };
    return [expanderColumn, ...columns];
  };
  hooks.visibleColumns.push(visibleColumns);
};

export default useRowExpander;
