// @flow
/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2022
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */

import * as React from 'react';
import { FilterFlyout } from './Datagrid/addons/Filtering';

const handleDatePickerChange = ([from, to]) => {
  const check = new Date(2022, 4, 4);
  console.log({ from, to, check });

  if (check.getTime() <= to.getTime() && check.getTime() >= from.getTime()) {
    console.log('In date range!');
  } else {
    console.log('Not in date range!');
  }
};

const handleNumberInput = ({ event, instance, column }) => {
  const { data, onDataUpdate, setFilter } = instance;
  console.log({ column, instance });
  // setFilter(column, (old) => 1);
  // const numberToFilterBy = event.target.value;
  // const dataCopy = [...data];
  // onDataUpdate(dataCopy.filter((d) => d[column] < 50));
};

const handleDropdown = ({ event, instance, column }) => {
  const { data, onDataUpdate } = instance;
  instance.setFilter(column, event.selectedItem);
  // const stringToFilterBy = event.selectedItem;
  // onDataUpdate(data.filter((d) => d[column] === stringToFilterBy));
};

const useFiltering = (hooks) => {
  hooks.useInstance.push((instance) => {
    const { filterProps, FilterFlyoutContent } = instance;
    // const { labels } = customizeColumnsProps || {};
    Object.assign(instance, {
      filterProps: {
        ...filterProps,
      },
      FilterFlyoutButton: (props) => (
        <FilterFlyout {...props}>
          <FilterFlyoutContent
            handleNumberInput={({ event, column }) =>
              handleNumberInput({ event, instance, column })
            }
            handleDropdown={({ event, column }) =>
              handleDropdown({ event, instance, column })
            }
          />
        </FilterFlyout>
      ),
    });
  });
};

export default useFiltering;
