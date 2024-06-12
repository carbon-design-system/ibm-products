/* eslint-disable no-unreachable */
/**
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const useFlexResize = (hooks) => {
  hooks.visibleColumns.push((columns) => {
    // always move actions to the end
    const actionsIdx = columns.findIndex((col) => col.isAction);
    if (actionsIdx === -1) {
      const lastCol = columns.at(-1);
      lastCol.isFlexCol = true;
      return [...columns];
    }
    const cols = [...columns];
    const actions = cols.splice(actionsIdx, 1)[0];
    cols.splice(columns.length, 0, actions);
    // the last non-action action column should flex remaining space
    const lastCol = columns.at(-2);
    lastCol.isFlexCol = true;
    return cols;
  });

  const changeProps = (props, data) => {
    let { column } = data;
    if (!column && data.cell) {
      column = data.cell.column;
    }
    if (column.isFlexCol) {
      return [props, { style: { flex: '1 1 0' } }];
    }
    return [props, { style: { flex: '0 0 auto' } }];
  };
  hooks.getHeaderProps.push((props, data) => changeProps(props, data));
  hooks.getCellProps.push((props, data) => changeProps(props, data));
};

export default useFlexResize;
