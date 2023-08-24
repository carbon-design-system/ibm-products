// This function recursively looks for the nested header element until we can find the key which contains the title.
// This can happen if multiple hooks are used together that manipulate the rendering of the column
// header, such as `useColumnCenterAlign` and `useSortableColumns`.
const getNestedTitle = (component) => {
  if (component && !component.key) {
    return getNestedTitle(component.children);
  }
  if (component && component.key && typeof component.key === 'string') {
    return component.key;
  }
};

const getColTitle = (col) => {
  if (!col) {
    return;
  }
  const checkTitle = () => {
    if (
      col.Header().props.children.props &&
      col.Header().props.children.props.title
    ) {
      return col.Header().props.children.props.title;
    }
    return getNestedTitle(col.Header().props.children.props);
  };
  return typeof col?.Header === 'function'
    ? checkTitle()
    : col?.Header?.props?.title;
};

export default getColTitle;