/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2020
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */

import { useState, useCallback } from 'react';
import debounce from 'lodash/debounce';

const useRowIsMouseOver = (hooks) => {
  const useInstance = (instance) => {
    const [mouseOverRowIndex, setMouseOverRowIndex] = useState();

    const onMouseChange = useDebounce((datagridState) => {
      const { row } = datagridState;
      setMouseOverRowIndex(row.index);
    }, 100);

    const getRowProps = (props, datagridState) => {
      const onMouseOver = () => onMouseChange(datagridState);
      return [props, { onMouseOver }];
    };

    const { rows } = instance;
    const rowsWithMouseOver = rows.map((row) => ({
      ...row,
      isMouseOver: row.index === mouseOverRowIndex,
    }));

    Object.assign(instance, { rows: rowsWithMouseOver });
    hooks.getRowProps.push(getRowProps);
  };

  hooks.useInstance.push(useInstance);
};

const useDebounce = (fn, wait) =>
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useCallback(debounce(fn, wait), []);

export default useRowIsMouseOver;
