/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2020
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
import { pkg } from '../../settings';
import cx from 'classnames';
import useNestedRowExpander from './useNestedRowExpander';

const blockClass = `${pkg.prefix}--datagrid`;

const useNestedRows = (hooks) => {
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
        marginLeft: `${row.depth > 0 ? marginLeft : 0}px`,
        paddingLeft: `${
          row.depth === 2
            ? marginLeft * (row.depth - 1) + marginLeft - 8
            : row.depth > 2
            ? marginLeft * (row.depth - 1) + marginLeft
            : row.depth === 1
            ? marginLeft - 16
            : 0
        }px`,
        maxWidth: `calc(100% - ${marginLeft * row.depth}px)`,
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
              ? `-${marginLeft * (cell.row.depth + 1)}px`
              : ''
          }`,
        },
      },
    ];
  };

  hooks.getRowProps.push(getRowProps);
  hooks.getRowProps.push(getRowStyles);
  hooks.getCellProps.push(getCellProps);
};

export default useNestedRows;
