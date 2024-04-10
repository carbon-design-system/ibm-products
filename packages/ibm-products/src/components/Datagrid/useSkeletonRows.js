/**
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const useSkeletons = (hooks) => {
  const useInstance = (instance) => {
    const { isFetching, rows } = instance;
    const skeletonRow = (id) => ({ isSkeleton: true, values: 'skeleton', id });
    const numRows = typeof isFetching === 'number' ? isFetching : 3;
    const rowsWithSkeletons = [
      ...rows,
      ...Array.from({ length: numRows }, (_, index) =>
        skeletonRow(`skeleton-row-${index + 1}`)
      ),
    ];
    Object.assign(instance, { rows: isFetching ? rowsWithSkeletons : rows });
  };
  hooks.useInstance.push(useInstance);
};

export default useSkeletons;
