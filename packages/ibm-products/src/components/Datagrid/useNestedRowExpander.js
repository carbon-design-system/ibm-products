/* eslint-disable react/prop-types */
/**
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useRef } from 'react';
import { ChevronRight } from '@carbon/react/icons';
import cx from 'classnames';
import { pkg, carbon } from '../../settings';
import { useFocusRowExpander } from './useFocusRowExpander';

const blockClass = `${pkg.prefix}--datagrid`;

const useNestedRowExpander = (hooks) => {
  const tempState = useRef();
  const lastExpandedRowIndex = useRef();
  const useInstance = (instance) => {
    tempState.current = instance;
  };

  useFocusRowExpander({
    instance: tempState?.current,
    lastExpandedRowIndex: lastExpandedRowIndex?.current,
    blockClass,
    activeElement: typeof document !== 'undefined' && document.activeElement,
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
              <ChevronRight
                className={cx(`${blockClass}__expander-icon`, {
                  [`${blockClass}__expander-icon--not-open`]: !row.isExpanded,
                  [`${blockClass}__expander-icon--open`]: row.isExpanded,
                })}
              />
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

export default useNestedRowExpander;
