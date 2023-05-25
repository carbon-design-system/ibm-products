/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2020, 2021
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */

import { useState } from 'react';
import { RowSizeDropdown } from './Datagrid/addons/RowSize';

const useRowSize = (hooks) => {
  const [internalRowSize, setRowSize] = useState('');
  hooks.useInstance.push((instance) => {
    const { rowSizeProps, rowSizes, rowSize, onRowSizeChange } = instance;
    const { labels } = rowSizeProps || {};
    Object.assign(instance, {
      rowSize: internalRowSize || rowSize,
      rowSizeDropdownProps: {
        rowSizes,
        ...labels,
        selectedOption: internalRowSize || rowSize,
        onChange: (value) => {
          setRowSize(value);
          if (typeof onRowSizeChange === 'function') {
            onRowSizeChange(value);
          }
        },
      },
      RowSizeDropdown,
    });
  });
  const getTableProps = (props, { instance }) => {
    const { rowSize } = instance;
    if (!rowSize) {
      return props;
    }
    return [props, { size: rowSize }];
  };
  hooks.getTableProps.push(getTableProps);
};

export default useRowSize;
