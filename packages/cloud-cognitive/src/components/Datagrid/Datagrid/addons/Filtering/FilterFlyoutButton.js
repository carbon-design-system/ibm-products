import React from 'react';
import FilterFlyout from './FilterFlyout';

// TODO: Do not use
const handleNumberInput = ({ event, instance, column }) => {
  const { data, onDataUpdate, setFilter } = instance;
  console.log({ column, instance });
};

const handleDropdown = ({ event, instance, column }) => {
  const { data, onDataUpdate } = instance;
  instance.setFilter(column, event.selectedItem);
};

const FilterFlyoutButton = (instance) => (props) => {
  const { FilterFlyoutContent } = instance;
  return (
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
  );
};

export default FilterFlyoutButton;
