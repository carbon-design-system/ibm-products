/**
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useEffect } from 'react';
import { pkg } from '../../settings';
import cx from 'classnames';
import useNestedRowExpander from './useNestedRowExpander';

const blockClass = `${pkg.prefix}--datagrid`;

const useNestedRows = (hooks) => {
  useEffect(() => {
    pkg.checkReportFeatureEnabled('Datagrid.useNestedRows');
  }, []);

  useNestedRowExpander(hooks);
  const marginLeft = 24;

  const getRowProps = (props, { row }) => {
    return [
      props,
      {
        className: cx({
          [`${blockClass}__carbon-nested-row`]: row.depth > 0,
          [`${blockClass}__carbon-row-expanded`]: row.isExpanded,
        }),
      },
    ];
  };
  const getRowStyles = (props, { row }) => [
    props,
    {
      style: {
        paddingLeft: `${
          row.depth > 1
            ? marginLeft * 2 + (row.depth - 1) * (marginLeft + marginLeft / 3)
            : row.depth === 1
            ? marginLeft * 2
            : 0
        }px`,
      },
    },
  ];
  const getCellProps = (props, { cell, instance }) => {
    // reduce the "first cell"s width to compensate added (left) margin
    const isFirstCell =
      instance.columns.findIndex((c) => c.id === cell.column.id) === 0;
    return [
      props,
      {
        style: {
          marginRight: `${
            isFirstCell && cell.row.depth > 0
              ? `${-32 * cell.row.depth - 18}px`
              : ''
          }`,
        },
      },
    ];
  };

  const useInstance = (instance) => {
    Object.assign(instance, { withNestedRows: true });
  };

  hooks.getRowProps.push(getRowProps);
  hooks.getRowProps.push(getRowStyles);
  hooks.getCellProps.push(getCellProps);
  hooks.useInstance.push(useInstance);
};

export default useNestedRows;
