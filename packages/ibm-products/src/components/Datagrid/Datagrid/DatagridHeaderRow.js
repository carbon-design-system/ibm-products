/**
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// @flow
import React from 'react';
import cx from 'classnames';
import { TableHeader, TableRow } from '@carbon/react';
import { selectionColumnId } from '../common-column-ids';
import { pkg } from '../../../settings';

const blockClass = `${pkg.prefix}--datagrid`;

const getAccessibilityProps = (header) => {
  const props = {};
  const title =
    typeof header.Header === 'function'
      ? header?.Header()?.props?.children?.props?.title
      : header?.Header?.props?.title;
  if (title) {
    props.title = title;
  } else {
    props['aria-hidden'] = true;
  }
  return props;
};

const HeaderRow = (datagridState, headRef, headerGroup) => (
  <TableRow
    {...headerGroup.getHeaderGroupProps({ role: false })}
    className={cx(
      `${blockClass}__head`,
      headerGroup.getHeaderGroupProps().className
    )}
    ref={headRef}
  >
    {datagridState.headers
      .filter(({ isVisible }) => isVisible)
      .map((header) => {
        if (header.id === selectionColumnId) {
          // render directly without the wrapper TableHeader
          return header.render('Header', { key: header.id });
        }
        return (
          <TableHeader
            {...header.getHeaderProps({ role: false })}
            className={cx(
              {
                [`${blockClass}__resizableColumn`]: header.getResizerProps,
                [`${blockClass}__isResizing`]: header.isResizing,
                [`${blockClass}__sortableColumn`]:
                  datagridState.isTableSortable,
                [`${blockClass}__isSorted`]: header.isSorted,
              },
              header.getHeaderProps().className
            )}
            key={header.id}
            {...getAccessibilityProps(header)}
          >
            {header.render('Header')}
            {header.getResizerProps && (
              <div
                {...header.getResizerProps()}
                className={`${blockClass}__resizer`}
              />
            )}
          </TableHeader>
        );
      })}
  </TableRow>
);

const useHeaderRow = (hooks) => {
  const useInstance = (instance) => {
    Object.assign(instance, { HeaderRow });
  };
  hooks.useInstance.push(useInstance);
};

export default useHeaderRow;
