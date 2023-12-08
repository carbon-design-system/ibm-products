/**
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
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
