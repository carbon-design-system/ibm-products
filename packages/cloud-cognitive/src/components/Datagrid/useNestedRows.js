/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2020
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
import { pkg } from '../../settings';
import useNestedRowExpander from './useNestedRowExpander';

const blockClass = `${pkg.prefix}--datagrid`;

const useNestedRows = (hooks) => {
  useNestedRowExpander(hooks);
  const marginLeft = 24;

  const getRowProps = (props, { row }) => [
    props,
    { className: row.depth > 0 ? `${blockClass}__carbon-nested-row` : '' },
  ];
  const getRowStyles = (props, { row }) => [
    props,
    {
      style: {
        paddingLeft: `${
          row.depth > 1
            ? (marginLeft * 2) + (row.depth - 1) * (marginLeft + (marginLeft/3))
            : row.depth === 1
            ? (marginLeft * 2)
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
              ? `${(-32 * cell.row.depth) - 18}px`
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
