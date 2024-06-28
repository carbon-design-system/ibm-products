/**
 * Copyright IBM Corp. 2023, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  BATCH,
  CHECKBOX,
  DATE,
  DROPDOWN,
  INSTANT,
  MULTISELECT,
  NUMBER,
  PANEL,
  RADIO,
  SAVED_FILTERS,
} from '../constants';
import {
  Checkbox,
  DatePicker,
  DatePickerInput,
  Dropdown,
  FormGroup,
  MultiSelect,
  Layer,
  NumberInput,
  RadioButton,
  RadioButtonGroup,
} from '@carbon/react';
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  useContext,
} from 'react';

import OverflowCheckboxes from '../OverflowCheckboxes';
import { getInitialStateFromFilters } from '../utils';
import { usePreviousValue } from '../../../../../../global/js/hooks';
import { FilterContext } from '../FilterProvider';
import { handleCheckboxChange } from '../handleCheckboxChange';

const useFilters = ({
  updateMethod,
  filters = [],
  setAllFilters,
  variation,
  reactTableFiltersState,
  onCancel,
  panelOpen,
  autoHideFilters,
  isFetching,
}) => {
  const {
    state,
    dispatch: localDispatch,
    tableId: contextTableId,
  } = useContext(FilterContext);
  const { savedFilters } = state;
  /** State */
  const [filtersState, setFiltersState] = useState(
    getInitialStateFromFilters(filters, variation, reactTableFiltersState)
  );
  const [fetchingReset, setFetchingReset] = useState(false);

  const [filtersObjectArray, setFiltersObjectArray] = useState(
    reactTableFiltersState
  );

  const previousState = usePreviousValue({ panelOpen });

  // When using batch actions we have to store the filters to then apply them later
  const prevFiltersRef = useRef(JSON.stringify(filtersState));
  const lastAppliedFilters = useRef(JSON.stringify(reactTableFiltersState));
  const prevFiltersObjectArrayRef = useRef(JSON.stringify(filtersObjectArray));

  const holdingPrevFiltersRef = useRef();
  const holdingLastAppliedFiltersRef = useRef([]);
  const holdingPrevFiltersObjectArrayRef = useRef([]);

  /** Methods */
  // If the user decides to cancel or click outside the flyout, it reverts back to the filters that were
  // there when they opened the flyout
  const revertToPreviousFilters = useCallback(() => {
    setFiltersState(JSON.parse(prevFiltersRef.current));
    setFiltersObjectArray(JSON.parse(prevFiltersObjectArrayRef.current));
    setAllFilters(JSON.parse(lastAppliedFilters.current));

    // Set the temp prev refs, these will be used to populate the prev values once the
    // panel opens again
    holdingPrevFiltersRef.current = JSON.parse(prevFiltersRef.current);
    holdingLastAppliedFiltersRef.current = JSON.parse(
      prevFiltersObjectArrayRef.current
    );
    holdingPrevFiltersObjectArrayRef.current = JSON.parse(
      lastAppliedFilters.current
    );
  }, [setAllFilters]);

  const reset = useCallback(
    (tableId) => {
      // only reset filters if tableid of the datagrid that triggered "clear filters"
      // matches the table id stored in its context instance
      if (tableId === contextTableId) {
        // When we reset we want the "initialFilters" to be an empty array
        const resetFiltersArray = [];

        // Get the initial values for the filters
        const initialFiltersState = getInitialStateFromFilters(
          filters,
          variation,
          resetFiltersArray
        );
        const initialFiltersObjectArray = [];

        // Set the state to the initial values
        setFiltersState(initialFiltersState);
        setFiltersObjectArray(initialFiltersObjectArray);
        setAllFilters([]);

        // Update their respective refs so everything is in sync
        prevFiltersRef.current = JSON.stringify(initialFiltersState);
        prevFiltersObjectArrayRef.current = JSON.stringify(
          initialFiltersObjectArray
        );
        lastAppliedFilters.current = JSON.stringify([]);
      }
    },
    [filters, setAllFilters, variation, contextTableId]
  );

  const applyFilters = ({ column, value, type }) => {
    // If no end date is selected return because we need the end date to do computations
    if (type === DATE && value.length > 0 && !value[1]) {
      return;
    }

    const filterCopy = [...filtersObjectArray];
    // // check if the filter already exists in the array
    const filter = filterCopy.find((item) => item.id === column);

    // // if filter exists in array then update the filter's new value
    if (filter) {
      filter.value = value;
    } else {
      filterCopy.push({ id: column, value, type });
    }

    const index = filterCopy.findIndex(({ id }) => id === column);

    const clearCheckbox =
      (type === CHECKBOX || type === MULTISELECT) &&
      filterCopy[index].value.every(({ selected }) => selected === false);
    const clearDate = type === DATE && value.length === 0;
    const clearAny = (type === DROPDOWN || type === RADIO) && value === 'Any';
    const clearNum = type === NUMBER && value === '';
    const shouldClear = clearCheckbox || clearDate || clearAny || clearNum;

    if (shouldClear) {
      filterCopy.splice(index, 1);
    }

    setFiltersObjectArray(filterCopy);

    // Dispatch action from local filter context to track filters in order
    // to keep history if `isFetching` becomes true. If so, react-table
    // clears all filter history
    localDispatch({
      type: SAVED_FILTERS,
      payload: {
        savedFilters: filterCopy,
      },
    });

    if (updateMethod === INSTANT) {
      setAllFilters(filterCopy);
    }
  };

  /** Render the individual filter component */
  const renderFilter = ({ type, column, props: components }) => {
    let filter;
    const isPanel = variation === PANEL;

    if (!type) {
      return console.error(
        `type: ${type}; does not exist as a type of filter.`
      );
    }

    const renderCheckboxes = () => {
      if (
        variation === PANEL &&
        filtersState[column].value.length > 10 &&
        !autoHideFilters
      ) {
        return (
          <OverflowCheckboxes
            components={components}
            type={type}
            column={column}
            setFiltersState={setFiltersState}
            filtersState={filtersState}
            applyFilters={applyFilters}
          />
        );
      }

      return (
        <FormGroup {...components.FormGroup}>
          {filtersState[column].value.map((option) => (
            <Checkbox
              key={option.id}
              {...option}
              onChange={(_, { checked }) => {
                handleCheckboxChange({
                  checked,
                  filtersState,
                  column,
                  option,
                  setFiltersState,
                  applyFilters,
                  type,
                });
              }}
              checked={option.selected}
            />
          ))}
        </FormGroup>
      );
    };

    switch (type) {
      case DATE:
        filter = (
          <DatePicker
            {...components.DatePicker}
            onChange={(value) => {
              setFiltersState({ ...filtersState, [column]: { value, type } });
              applyFilters({ column, value, type });
              components.DatePicker.onChange?.(value);
            }}
            value={filtersState[column].value}
            datePickerType="range"
          >
            <DatePickerInput
              placeholder="mm/dd/yyyy"
              labelText="Start date"
              {...components.DatePickerInput.start}
            />
            <DatePickerInput
              placeholder="mm/dd/yyyy"
              labelText="End date"
              {...components.DatePickerInput.end}
            />
          </DatePicker>
        );
        break;
      case NUMBER:
        filter = (
          <NumberInput
            step={1}
            allowEmpty
            hideSteppers
            {...components.NumberInput}
            onChange={(event) => {
              setFiltersState({
                ...filtersState,
                [column]: {
                  value: event.target.value,
                  type,
                },
              });
              applyFilters({ column, value: event.target.value, type });
              components.NumberInput.onChange?.(event);
            }}
            value={filtersState[column].value}
          />
        );
        break;
      case CHECKBOX:
        filter = renderCheckboxes();
        break;
      case RADIO:
        {
          const { name } = { ...components.RadioButtonGroup };
          filter = (
            <FormGroup {...components.FormGroup}>
              <RadioButtonGroup
                {...components.RadioButtonGroup}
                valueSelected={
                  filtersState[column]?.value === ''
                    ? components.DefaultRadioButton?.value ?? 'Any'
                    : filtersState[column]?.value
                }
                onChange={(selected) => {
                  setFiltersState({
                    ...filtersState,
                    [column]: {
                      value: selected,
                      type,
                    },
                  });
                  applyFilters({
                    column,
                    value: selected,
                    type,
                  });
                  components.RadioButtonGroup.onChange?.(selected);
                }}
              >
                <RadioButton
                  id={components?.DefaultRadioButton?.id ?? `any__${name}`}
                  labelText={components?.DefaultRadioButton?.labelText ?? 'Any'}
                  value={components?.DefaultRadioButton?.value ?? 'Any'}
                  {...components.DefaultRadioButton}
                />
                {components.RadioButton.map((radio) => (
                  <RadioButton
                    key={radio.id ?? radio.labelText ?? radio.value}
                    {...radio}
                  />
                ))}
              </RadioButtonGroup>
            </FormGroup>
          );
        }
        break;
      case DROPDOWN:
        filter = (
          <Dropdown
            {...components.Dropdown}
            selectedItem={
              filtersState[column]?.value === ''
                ? 'Any'
                : filtersState[column]?.value
            }
            items={['Any', ...components.Dropdown.items]}
            onChange={({ selectedItem }) => {
              setFiltersState({
                ...filtersState,
                [column]: {
                  value: selectedItem,
                  type,
                },
              });
              applyFilters({
                column,
                value: selectedItem,
                type,
              });
              components.Dropdown.onChange?.(selectedItem);
            }}
          />
        );
        break;
      case MULTISELECT: {
        const isStringArray =
          components.MultiSelect.items.length &&
          typeof components.MultiSelect.items[0] === 'string';
        const selectedFilters = filtersState[column]?.value.filter(
          (i) => i.selected
        );
        const filteredItems = components.MultiSelect.items
          .map((item) => {
            if (
              selectedFilters.filter((a) =>
                isStringArray ? a.id === item : a.id === item.id
              ).length
            ) {
              return item;
            }
            return null;
          })
          .filter(Boolean);
        filter = (
          <MultiSelect
            {...components.MultiSelect}
            selectedItems={filteredItems}
            onChange={({ selectedItems }) => {
              const allOptions = filtersState[column].value;
              // Find selected items from list of options
              const foundItems = selectedItems
                .map((item) => {
                  if (
                    allOptions.filter((option) =>
                      isStringArray ? option.id === item : option.id === item.id
                    )
                  ) {
                    return allOptions.filter((option) =>
                      isStringArray ? option.id === item : option.id === item.id
                    )[0];
                  }
                  return null;
                })
                .filter(Boolean);

              // Change selected state for those items that have been selected
              allOptions.map((a) => (a.selected = false));
              foundItems.map((item) => {
                const foundOriginalItem = allOptions.filter((a) =>
                  isStringArray ? a === item : a.id === item.id
                );
                if (foundOriginalItem && foundOriginalItem.length) {
                  foundOriginalItem[0].selected = true;
                }
              });
              if (!selectedItems.length) {
                allOptions.map((a) => (a.selected = false));
              }
              setFiltersState({
                ...filtersState,
                [column]: {
                  value: allOptions,
                  type,
                },
              });
              applyFilters({
                column,
                value: [...filtersState[column].value],
                type,
              });
              components.MultiSelect?.onChange?.(selectedItems);
            }}
          />
        );
        break;
      }
    }

    if (isPanel) {
      return <Layer key={column}>{filter}</Layer>;
    }

    return <React.Fragment key={column}>{filter}</React.Fragment>;
  };

  /** This useEffect will properly handle the previous filters when the panel closes
   * 1. If the panel closes we need to call the reset fn but also store the
   * previous filters in a (new) temporary place.
   * 2. When the panel opens again, take the values from the temporary place
   * and populate the filter state with them
   */
  useEffect(() => {
    if (!panelOpen && previousState?.panelOpen) {
      revertToPreviousFilters();
      setAllFilters(holdingLastAppliedFiltersRef.current);
    }
    if (panelOpen && !previousState?.panelOpen) {
      if (
        holdingPrevFiltersRef.current &&
        holdingLastAppliedFiltersRef.current &&
        holdingPrevFiltersObjectArrayRef.current
      ) {
        setFiltersState(holdingPrevFiltersRef.current);
        setFiltersObjectArray(holdingLastAppliedFiltersRef.current);
        setAllFilters(JSON.parse(prevFiltersObjectArrayRef.current));
      }
    }
  }, [
    panelOpen,
    previousState,
    previousState?.panelOpen,
    reset,
    setAllFilters,
    revertToPreviousFilters,
  ]);

  // Re-applies filters if the Datagrid goes into a fetching state while panel is open
  // and has had filters changed without applying
  useEffect(() => {
    if (isFetching && !fetchingReset) {
      setFiltersState(JSON.parse(prevFiltersRef.current));
      setFiltersObjectArray(JSON.parse(prevFiltersRef.current));
      setAllFilters(JSON.parse(prevFiltersObjectArrayRef.current));
      setFetchingReset(true);
    }
    if (isFetching && fetchingReset) {
      const cleanFilters = (originalFilterState) => {
        const copy = { ...originalFilterState };
        const updatedFilters = savedFilters.map((f) => {
          if (Object.hasOwn(copy, f.id)) {
            copy[f.id] = f;
            return copy;
          }
          return copy;
        });
        return updatedFilters[0];
      };
      if (savedFilters && savedFilters.length) {
        setFiltersObjectArray(savedFilters);
        const filterStateCopy = cleanFilters(filtersState) ?? [];
        setFiltersState(filterStateCopy);
      }
    }
    if (!isFetching) {
      setFetchingReset(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    isFetching,
    reactTableFiltersState,
    setAllFilters,
    fetchingReset,
    savedFilters,
    filtersObjectArray,
  ]);

  const cancel = () => {
    // Reverting to previous filters only applies when using batch actions
    if (updateMethod === BATCH) {
      revertToPreviousFilters();
      onCancel();
    }
  };

  /** The purpose of this function is to sync any changes in react-tables state.filters array and reflect
      those new filter changes in the panel/flyout state. The external change is triggered if setAllFilters is called outside of the Datagrid */
  useEffect(
    function updateStateAndFiltersToReflectExternalFilterChanges() {
      const newFiltersState = getInitialStateFromFilters(
        filters,
        variation,
        reactTableFiltersState
      );
      setFiltersState(newFiltersState);
      prevFiltersRef.current = JSON.stringify(newFiltersState);
      prevFiltersObjectArrayRef.current = JSON.stringify(
        reactTableFiltersState
      );

      setFiltersObjectArray(reactTableFiltersState);
    },
    [filters, reactTableFiltersState, variation]
  );

  return {
    filtersState,
    setFiltersState,
    prevFiltersObjectArrayRef,
    prevFiltersRef,
    revertToPreviousFilters,
    reset,
    renderFilter,
    filtersObjectArray,
    lastAppliedFilters,
    cancel,
  };
};

export default useFilters;
