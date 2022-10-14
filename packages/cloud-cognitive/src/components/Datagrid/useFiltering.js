// @flow
/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2022
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */

import { pkg } from '../../settings';
const blockClass = `${pkg.prefix}--datagrid`;

const useFiltering = (hooks) => {
  hooks.getCellProps.push((props, { cell, instance }) => {
    const {
      filterProps: { dateToString },
    } = instance;

    /** Checks if cell is a date type and converts raw date input to string */
    if (cell.column.type === 'date') {
      return [
        props,
        {
          className: `${blockClass}__cell`,
          children: dateToString(cell.value),
        },
      ];
    }
    return [props, { className: `${blockClass}__cell` }];
  });

  hooks.useInstance.push((instance) => {
    const { filterProps } = instance;
    Object.assign(instance, {
      filterProps,
    });
  });
};

export default useFiltering;
