/* eslint-disable react/prop-types */
/**
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useRef } from 'react';
import { ChevronRight } from '@carbon/react/icons';
import cx from 'classnames';
import { pkg, carbon } from '../../settings';

const blockClass = `${pkg.prefix}--datagrid`;

const useNestedRowExpander = (hooks) => {
  const tempState = useRef();
  const useInstance = (instance) => {
    tempState.current = instance;
  };
  const visibleColumns = (columns) => {
    const expanderColumn = {
      id: 'expander',
      Cell: ({ row }) => {
        const expanderButtonProps = {
          ...row.getToggleRowExpandedProps(),
          onClick: (e) => {
            e.stopPropagation(); // avoid triggering onRowClick
            row.toggleRowExpanded();
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
              title={expanderTitle}
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
