/* eslint-disable react/prop-types */
/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2020
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
import React from 'react';
import { ChevronRight16 } from '@carbon/icons-react';
import cx from 'classnames';
import { pkg } from '../../settings';

const blockClass = `${pkg.prefix}--datagrid`;
const useNestedRowExpander = (hooks) => {
  const visibleColumns = (columns) => {
    const expanderColumn = {
      id: 'expander',
      Cell: ({ row }) =>
        row.canExpand && (
          <span {...row.getToggleRowExpandedProps()}>
            <ChevronRight16
              className={cx(`${blockClass}__expander-icon`, {
                [`${blockClass}__expander-icon--not-open`]: !row.isExpanded,
                [`${blockClass}__expander-icon--open`]: row.isExpanded,
              })}
            />
          </span>
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
