import { Button, Checkbox, FormGroup } from '@carbon/react';
import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { componentClass } from './FilterPanel';

const OverflowCheckboxes = ({
  components,
  filtersState,
  column,
  setFiltersState,
  type,
  applyFilters,
}) => {
  const [showAllItems, setShowAllItems] = useState(false);
  const firstFiveItems = filtersState[column].value.slice(0, 5);
  const restOfTheItems = filtersState[column].value.slice(
    5,
    filtersState[column].value.length - 1
  );

  const renderCheckbox = (option) => (
    <Checkbox
      key={option.labelText}
      {...option}
      onChange={(isSelected) => {
        const checkboxCopy = filtersState[column].value;
        const foundCheckbox = checkboxCopy.find(
          (checkbox) => checkbox.value === option.value
        );
        foundCheckbox.selected = isSelected;
        setFiltersState({
          ...filtersState,
          [column]: {
            value: checkboxCopy,
            type,
          },
        });
        applyFilters({
          column,
          value: [...filtersState[column].value],
          type,
        });
        option.onChange?.(isSelected);
      }}
      checked={option.selected}
      disabled={option.disabled}
    />
  );

  return (
    <FormGroup {...components.FormGroup}>
      {firstFiveItems.map(renderCheckbox)}
      {showAllItems && restOfTheItems.map(renderCheckbox)}
      <Button
        className={`${componentClass}__view-all-button`}
        kind="ghost"
        size="sm"
        onClick={() => setShowAllItems(!showAllItems)}
      >
        {showAllItems
          ? 'View less'
          : `View all (${filtersState[column].value.length})`}
      </Button>
    </FormGroup>
  );
};

OverflowCheckboxes.propTypes = {
  applyFilters: PropTypes.func,
  column: PropTypes.string,
  components: PropTypes.object,
  filtersState: PropTypes.object,
  setFiltersState: PropTypes.func,
  type: PropTypes.string,
};

export default OverflowCheckboxes;
