/* eslint-disable react/prop-types */
/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2020
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
import React from 'react';
import { ChevronDown, ChevronUp } from '@carbon/icons-react';

const useRowExpander = (hooks) => {
  const visibleColumns = (columns) => {
    const expanderColumn = {
      id: 'expander',
      Cell: ({ row }) =>
        row.canExpand && (
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
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

export default useRowExpander;
