/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2020
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
const useSkeletons = (hooks) => {
  const useInstance = (instance) => {
    const { isFetching, rows } = instance;
    const skeletonRow = (id) => ({ isSkeleton: true, values: 'skeleton', id });
    const rowsWithSkeletons = [
      ...rows,
      skeletonRow('skeleton-row-1'),
      skeletonRow('skeleton-row-2'),
      skeletonRow('skeleton-row-3'),
    ];
    Object.assign(instance, { rows: isFetching ? rowsWithSkeletons : rows });
  };
  hooks.useInstance.push(useInstance);
};

export default useSkeletons;
