/* eslint-disable react/prop-types */
/**
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useRef } from 'react';
import { ChevronDown, ChevronUp } from '@carbon/react/icons';
import { pkg, carbon } from '../../settings';
import cx from 'classnames';
import { useFocusRowExpander } from './useFocusRowExpander';

const blockClass = `${pkg.prefix}--datagrid`;

const useRowExpander = (hooks) => {
  const tempState = useRef();
  const lastExpandedRowIndex = useRef();
  const useInstance = (instance) => {
    tempState.current = instance;
  };

  useFocusRowExpander({
    instance: tempState?.current,
    lastExpandedRowIndex: lastExpandedRowIndex?.current,
    blockClass,
    activeElement: document.activeElement,
  });

  const visibleColumns = (columns) => {
    const expanderColumn = {
      id: 'expander',
      Cell: ({ row }) => {
        const expanderButtonProps = {
          ...row.getToggleRowExpandedProps(),
          onClick: (event) => {
            // Prevents `onRowClick` from being called if `useOnRowClick` is included
            event.stopPropagation();
            row.toggleRowExpanded();
            row?.onClick?.(row, event);
            lastExpandedRowIndex.current = row.id;
          },
        };
        const {
          expanderButtonTitleExpanded = 'Collapse row',
          expanderButtonTitleCollapsed = 'Expand row',
        } = tempState?.current || {};
        const expanderTitle = row.isExpanded
          ? expanderButtonTitleExpanded
          : expanderButtonTitleCollapsed;
        return (
          row.canExpand && (
            <button
              type="button"
              aria-label={expanderTitle}
              className={cx(
                `${blockClass}__row-expander`,
                `${carbon.prefix}--btn`,
                `${carbon.prefix}--btn--ghost`
              )}
              {...expanderButtonProps}
            >
              {row.isExpanded ? (
                <ChevronUp className={`${blockClass}__row-expander--icon`} />
              ) : (
                <ChevronDown className={`${blockClass}__row-expander--icon`} />
              )}
            </button>
          )
        );
      },
      width: 48,
      disableResizing: true,
      disableSortBy: true,
      Header: '',
    };
    return [expanderColumn, ...columns];
  };
  hooks.visibleColumns.push(visibleColumns);
  hooks.useInstance.push(useInstance);
};

export default useRowExpander;
