/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2020
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */

import { useState, useCallback } from 'react';
import debounce from 'lodash/debounce';
import { Hooks, RowPropGetter, TableInstance } from 'react-table';
import { DataGridState } from './types';

const useRowIsMouseOver = (hooks: Hooks) => {
  const useInstance = (instance: TableInstance) => {
    const [mouseOverRowIndex, setMouseOverRowIndex] = useState<number>();

    const onMouseChange = useDebounce((datagridState: DataGridState) => {
      const { row } = datagridState;
      setMouseOverRowIndex(row?.index);
    }, 100);

    const getRowProps = (props, datagridState: DataGridState) => {
      const onMouseOver = () => onMouseChange(datagridState);
      return [props, { onMouseOver }];
    };

    const { rows } = instance;
    const rowsWithMouseOver = rows.map((row) => ({
      ...row,
      isMouseOver: row.index === mouseOverRowIndex,
    }));

    Object.assign(instance, {
      rows: rowsWithMouseOver,
      withMouseHover: true,
      setMouseOverRowIndex,
    });
    hooks.getRowProps.push(getRowProps as RowPropGetter<any>);
  };

  hooks.useInstance.push(useInstance);
};

const useDebounce = (fn: (state: DataGridState) => void, wait: number) =>
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useCallback(debounce(fn, wait), []);

export default useRowIsMouseOver;
