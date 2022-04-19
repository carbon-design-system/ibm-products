/* eslint-disable react/prop-types */
/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2020
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
import React from 'react';
import { ChevronDown16, ChevronUp16 } from '@carbon/icons-react';
import { pkg } from '../../settings';

const blockClass = `${pkg.prefix}--datagrid`;

const useRowExpander = (hooks) => {
  const visibleColumns = (columns) => {
    const expanderColumn = {
      id: 'expander',
      Cell: ({ row }) =>
        row.canExpand && (
          <span
            {...row.getToggleRowExpandedProps()}
            onMouseEnter={(event) => {
              const hoverRow = event.target.closest(
                `.${blockClass}__carbon-row-expanded`
              );
              hoverRow?.classList.add(
                `${blockClass}__carbon-row-expanded-hover-active`
              );
            }}
            onMouseLeave={(event) => {
              const hoverRow = event.target.closest(
                `.${blockClass}__carbon-row-expanded`
              );
              hoverRow?.classList.remove(
                `${blockClass}__carbon-row-expanded-hover-active`
              );
            }}
          >
            {row.isExpanded ? <ChevronUp16 /> : <ChevronDown16 />}
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
