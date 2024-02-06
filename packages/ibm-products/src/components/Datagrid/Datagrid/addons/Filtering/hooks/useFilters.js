/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2023
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */

import {
  BATCH,
  CHECKBOX,
  DATE,
  DROPDOWN,
  INSTANT,
  NUMBER,
  PANEL,
  RADIO,
} from '../constants';
import {
  Checkbox,
  DatePicker,
  DatePickerInput,
  Dropdown,
  FormGroup,
  Layer,
  NumberInput,
  RadioButton,
  RadioButtonGroup,
} from '@carbon/react';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import OverflowCheckboxes from '../OverflowCheckboxes';
import { getInitialStateFromFilters } from '../utils';
import { usePreviousValue } from '../../../../../../global/js/hooks';
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

  const reset = useCallback(() => {
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
  }, [filters, setAllFilters, variation]);

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
      type === CHECKBOX &&
      filterCopy[index].value.every(({ selected }) => selected === false);
    const clearDate = type === DATE && value.length === 0;
    const clearAny = (type === DROPDOWN || type === RADIO) && value === 'Any';
    const clearNum = type === NUMBER && value === '';
    const shouldClear = clearCheckbox || clearDate || clearAny || clearNum;

    if (shouldClear) {
      filterCopy.splice(index, 1);
    }

    setFiltersObjectArray(filterCopy);

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
    if (!isFetching) {
      setFetchingReset(false);
    }
  }, [isFetching, reactTableFiltersState, setAllFilters, fetchingReset]);

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
