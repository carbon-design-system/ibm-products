/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2020
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
const useFlexResize = (hooks) => {
  const spacerColumn = {
    id: 'spacer',
    width: 0,
    disableSortBy: true,
    disableResizing: true,
  };
  hooks.visibleColumns.push((columns) => [...columns, spacerColumn]);
  const changeProps = (props, data) => {
    let { column } = data;
    if (!column && data.cell) {
      column = data.cell.column;
    }
    if (column.id === spacerColumn.id) {
      return [props, { style: { flex: '1 1 0' } }];
    }
    return [props, { style: { flex: '0 0 auto' } }];
  };
  hooks.getHeaderProps.push((props, data) => changeProps(props, data));
  hooks.getCellProps.push((props, data) => changeProps(props, data));
};
export default useFlexResize;
