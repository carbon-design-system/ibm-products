/**
 * used to normalize nested data into a single object
 * @param {Array} items - list of entries
 * @returns an object of normalized item data
 */
export const normalize = (items) => {
  const { entries, parentId, sortBy, filterBy } = items;
  return entries.reduce((acc, cur) => {
    const { children, ...entry } = cur;
    acc[cur.id] = { ...entry };
    if (parentId) {
      acc[cur.id].parent = parentId;
    }
    if (sortBy?.length) {
      acc[cur.id].sortBy = sortBy;
    }
    if (filterBy) {
      acc[cur.id].filterBy = filterBy;
    }
    if (children) {
      acc[cur.id].children = children.entries.map((child) => child.id);
      const child = normalize({ ...children, parentId: cur.id });
      return { ...acc, ...child };
    }
    return acc;
  }, {});
};

/**
 * used to create a single searchable array of nested items
 * @param {Array} entries - list of entries
 * @returns an array of items
 */
export const flatten = (entries) =>
  entries.reduce((prev, cur) => {
    const { children, ...item } = cur;
    return prev.concat(item).concat(children ? flatten(children.entries) : []);
  }, []);
