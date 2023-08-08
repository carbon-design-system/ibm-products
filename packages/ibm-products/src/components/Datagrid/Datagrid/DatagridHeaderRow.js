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
        /**
         * for accessibility reasons th's require a title attribute
         * if there's no title prop in Header mark it as hidden
         */
        const setAccessibilityProps = () => {
          const props = {};
          let headerTitle;
          if (header.Header.props) {
            headerTitle = header.Header.props.title;
          }
          if (typeof header.Header === 'function') {
            headerTitle = header.Header()?.props?.children?.props?.title;
          }
          if (headerTitle) {
            props.title = headerTitle;
          } else {
            props['aria-hidden'] = true;
          }
          return props;
        };
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
            {...setAccessibilityProps()}
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
