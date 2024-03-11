export const handleCheckboxChange = ({
  checked,
  filtersState,
  column,
  option,
  setFiltersState,
  applyFilters,
  type,
}) => {
  const checkboxCopy = filtersState[column].value;
  const foundCheckbox = checkboxCopy.find(
    (checkbox) => checkbox.value === option.value
  );
  foundCheckbox.selected = checked;
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
  option.onChange?.(checked);
};
