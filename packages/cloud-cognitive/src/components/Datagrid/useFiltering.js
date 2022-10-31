// @flow
/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2022
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
import { useEffect, useMemo } from 'react';
import { BATCH } from './Datagrid/addons/Filtering/constants';

let filtersObjectArray = [];

const useFiltering = (hooks) => {
  // When using batch actions we have to store the filters to then apply them later
  // const [filtersObjectArray, setFiltersObjectArray] = useState([]);
  // const [shouldApplyFilters, setShouldApplyFilters] = useState(false);

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

  // useEffect(() => console.log(filtersObjectArray), [filtersObjectArray]);
  useEffect(() => console.log('render'), []);

  hooks.useInstance.push((instance) => {
    console.log('hook useInstance');
    const {
      filterProps: { updateMethod },
      setFilter,
      headers,
    } = instance;

    const applyFilters = ({ column, value }) => {
      const type = headers.find((header) => header.id === column).filter;

      // // If no end date is selected return because we need the end date to do computations
      if (type === 'date' && !value[1]) {
        return;
      }

      if (updateMethod === BATCH) {
        filtersObjectArray = [...filtersObjectArray, { id: column, value }];
        // setFiltersObjectArray((old) => {
        //   console.log('setFiltersObjectArray');
        //   return [...old, { id: column, value }];
        // });
      } else {
        console.log('else ');
        setFilter(column, value);
      }
    };

    Object.assign(instance, {
      applyFilters,
      filterTypes,
      filtersObjectArray,
    });
  });
};

export default useFiltering;
