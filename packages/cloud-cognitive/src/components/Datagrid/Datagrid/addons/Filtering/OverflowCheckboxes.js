import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Checkbox, FormGroup } from 'carbon-components-react';
import { MultiAddSelect } from '../../../../MultiAddSelect';
import { convertCamelCaseToSentenceCase } from './utils';

const OverflowCheckboxes = ({
  components,
  filtersState,
  column,
  setFiltersState,
  type,
  applyFilters,
}) => {
  const [openMultiAddSelect, setOpenMultiAddSelect] = useState(false);

  const firstFiveItems = filtersState[column].value.slice(0, 5);
  const entries = filtersState[column].value.map(
    ({ id, labelText, value }) => ({
      id,
      value,
      title: labelText,
    })
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

  const title = convertCamelCaseToSentenceCase(column);

  return (
    <>
      <FormGroup {...components.FormGroup}>
        {firstFiveItems.map(renderCheckbox)}
        <Button kind="ghost" onClick={() => setOpenMultiAddSelect(true)}>
          View all ({filtersState[column].value.length})
        </Button>
      </FormGroup>
      <MultiAddSelect
        open={openMultiAddSelect}
        columnInputPlaceholder="Find"
        description="Select filters"
        // globalSearchLabel="global search label"
        globalSearchPlaceholder="Find filters"
        illustrationTheme="light"
        influencerTitle="Selected filters"
        itemsLabel="Filters"
        metaIconDescription="View meta information"
        metaPanelTitle="Personal information"
        navIconDescription="View children"
        noResultsDescription="Try again"
        noResultsTitle="No results"
        noSelectionTitle="No filters selected"
        onClose={() => setOpenMultiAddSelect(false)}
        onCloseButtonText="Cancel"
        onSubmit={(thing) => console.log({ thing })}
        onSubmitButtonText="Add"
        searchResultsTitle="Search results"
        title={`Filter by ${title}`}
        items={{
          entries,
        }}
        {...components?.MultiAddSelect}
      />
    </>
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
