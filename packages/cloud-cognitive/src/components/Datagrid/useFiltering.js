// @flow
/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2022
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
import { useMemo } from 'react';

const useFiltering = (hooks) => {
  const filterTypes = useMemo(
    () => ({
      betweenDates: (rows, id, [startDate, endDate]) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          if (
            rowValue.getTime() <= endDate.getTime() &&
            rowValue.getTime() >= startDate.getTime()
          ) {
            // In date range
            return true;
          } else {
            // Not in date range
            return false;
          }
        });
      },
    }),
    []
  );

  hooks.useInstance.push((instance) => {
    const { filterProps, setFilter } = instance;

    const applyFilters = ({ column, type, value }) => {
      if (type === 'date') {
        // If no end date is selected return because we need the end date to do computations
        const [, endDate] = value;
        if (!endDate) {
          return;
        }
        setFilter(column, value);
      }
    };

    Object.assign(instance, {
      applyFilters,
      filterProps,
      filterTypes,
    });
  });
};

export default useFiltering;
