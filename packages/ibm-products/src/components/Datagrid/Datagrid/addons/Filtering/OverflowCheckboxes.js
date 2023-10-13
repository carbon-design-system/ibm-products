import { Button, Checkbox, FormGroup } from '@carbon/react';
import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { componentClass } from './FilterPanel';
import { handleCheckboxChange } from './hooks/useFilters';

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
      onChange={(isSelected) =>
        handleCheckboxChange({
          isSelected,
          filtersState,
          column,
          option,
          setFiltersState,
          applyFilters,
          type,
        })
      }
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
