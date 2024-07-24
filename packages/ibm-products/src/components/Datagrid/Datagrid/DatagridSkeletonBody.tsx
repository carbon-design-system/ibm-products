import React from 'react';
import { SkeletonText, TableBody, TableCell, TableRow } from '@carbon/react';
import { Cell } from 'react-table';
import { DataGridState } from '../types';
import cx from 'classnames';
import { pkg } from '../../../settings';

const blockClass = `${pkg.prefix}--datagrid`;

export const DatagridSkeletonBody = (datagridState: DataGridState) => {
  const { prepareRow, visibleColumns, skeletonRowCount } = datagridState;
  const rowsWithSkeletons = [
    ...Array.from({ length: skeletonRowCount || 5 }, (v, i) => ({
      isSkeleton: true,
      values: 'skeleton',
      id: `skeleton-row-${i + 1}`,
    })),
  ];
  return (
    <TableBody>
      {rowsWithSkeletons?.map((skeleton) => {
        prepareRow(skeleton as any);
        return (
          <TableRow
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
            key={skeleton.id}
          >
            {(skeleton as any)?.cells?.map((cell: Cell, index: number) => {
              return (
                <TableCell
                  key={`skeleton-${index}`}
                  className={cx(`${blockClass}__skeleton-body-cell`, {
                    [`${blockClass}__last-visible-cell`]:
                      index === visibleColumns.length - 1,
                    [`${blockClass}__select-or-expander-cell`]:
                      cell.column.id === 'datagridSelection' ||
                      cell.column.id === 'expander',
                  })}
                  style={{
                    width:
                      cell.column.id === 'datagridSelection' ||
                      cell.column.id === 'expander'
                        ? 48
                        : cell.column.width,
                  }}
                >
                  <SkeletonText />
                </TableCell>
              );
            })}
          </TableRow>
        );
      })}
    </TableBody>
  );
};
