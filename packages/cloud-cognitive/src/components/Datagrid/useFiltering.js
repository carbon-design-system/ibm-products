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
      date: (rows, id, [startDate, endDate]) => {
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
      number: (rows, id, value) => {
        if (value === '') {
          return rows;
        }

        const parsedValue = parseInt(value);
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue === parsedValue;
        });
      },
      checkbox: (rows, id, value) => {
        // gets all the items that are selected and returns their value
        const selectedItems = value
          .filter((item) => item.selected)
          .map((item) => item.value);

        // if the user removed all checkboxes then display all rows
        if (selectedItems.length === 0) {
          return rows;
        }

        return rows.filter((row) => {
          const rowValue = row.values[id];
          return selectedItems.includes(rowValue);
        });
      },
    }),
    []
  );

  hooks.useInstance.push((instance) => {
    const { filterProps, setFilter, headers } = instance;

    const applyFilters = ({ column, value }) => {
      let type = headers.find((header) => header.id === column).filter;

      if (type === 'date') {
        // If no end date is selected return because we need the end date to do computations
        const [, endDate] = value;
        if (!endDate) {
          return;
        }
        setFilter(column, value);
      } else {
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
