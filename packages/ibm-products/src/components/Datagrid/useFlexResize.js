/**
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const useFlexResize = (hooks) => {
  const spacer = {
    id: 'spacer',
    width: 0,
    disableSortBy: true,
    disableResizing: true,
  };
  hooks.visibleColumns.push((columns) => {
    // always move actions and spacer to the end
    const actionsIdx = columns.findIndex((col) => col.isAction);
    if (actionsIdx === -1) {
      return [...columns, spacer];
    }
    const cols = [...columns];
    const actions = cols.splice(actionsIdx, 1)[0];
    cols.splice(columns.length, 0, spacer, actions);
    return cols;
  });
  const changeProps = (props, data) => {
    let { column } = data;
    if (!column && data.cell) {
      column = data.cell.column;
    }
    if (column.id === spacer.id) {
      return [props, { style: { flex: '1 1 0' } }];
    }
    return [props, { style: { flex: '0 0 auto' } }];
  };
  hooks.getHeaderProps.push((props, data) => changeProps(props, data));
  hooks.getCellProps.push((props, data) => changeProps(props, data));
};
export default useFlexResize;
