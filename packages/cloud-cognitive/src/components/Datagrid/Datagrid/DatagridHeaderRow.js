/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2020, 2021
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
// @flow
import React from 'react';
import cx from 'classnames';
import { DataTable } from 'carbon-components-react';
import { selectionColumnId } from '../common-column-ids';
import { pkg } from '../../../settings';

const blockClass = `${pkg.prefix}--datagrid`;

const HeaderRow = (datagridState) => (
  <TableRow className={`${blockClass}__head`}>
    {datagridState.headers
      .filter(({ isVisible }) => isVisible)
      .map((header) => {
        if (header.id === selectionColumnId) {
          // render directly without the wrapper TableHeader
          return header.render('Header', { key: header.id });
        }
        return (
          <TableHeader
            {...header.getHeaderProps()}
            className={cx(
              {
                [`${blockClass}__resizableColumn`]: header.getResizerProps,
                [`${blockClass}__isResizing`]: header.isResizing,
                [`${blockClass}__sortableColumn`]: header.canSort,
                [`${blockClass}__isSorted`]: header.isSorted,
              },
              header.getHeaderProps().className
            )}
            key={header.id}
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

const { TableHeader, TableRow } = DataTable;

const useHeaderRow = (hooks) => {
  const useInstance = (instance) => {
    Object.assign(instance, { HeaderRow });
  };
  hooks.useInstance.push(useInstance);
};

export default useHeaderRow;
