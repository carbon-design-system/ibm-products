// @flow
<<<<<<< HEAD
/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2022
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
import { Filter16 } from '@carbon/icons-react';
import {
  Button,
  Checkbox,
  DatePicker,
  DatePickerInput,
  Dropdown,
  FormGroup,
  NumberInput,
  RadioButton,
  RadioButtonGroup,
} from 'carbon-components-react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { useCallback, useRef, useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useClickOutside } from '../../../../../global/js/hooks';
import { pkg } from '../../../../../settings';
import { ActionSet } from '../../../../ActionSet';
import {
  BATCH,
  CHECKBOX,
  CLEAR_FILTERS,
  DATE,
  DROPDOWN,
  INSTANT,
  NUMBER,
  RADIO,
} from './constants';
import { FilterContext } from './FilterProvider';
import useInitialStateFromFilters from './hooks/useInitialStateFromFilters';
import { getInitialStateFromFilters } from './utils';
=======
/**
 * Copyright IBM Corp. 2022, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Filter } from '@carbon/react/icons';
import { Button, usePrefix } from '@carbon/react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { useClickOutside } from '../../../../../global/js/hooks';
import { pkg } from '../../../../../settings';
import { ActionSet } from '../../../../ActionSet';
import { BATCH, CLEAR_FILTERS, FLYOUT, INSTANT } from './constants';
import {
  useSubscribeToEventEmitter,
  useFilters,
  useShouldDisableButtons,
} from './hooks';
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212

const blockClass = `${pkg.prefix}--datagrid`;
const componentClass = `${blockClass}-filter-flyout`;

const FilterFlyout = ({
  updateMethod = BATCH,
  flyoutIconDescription = 'Open filters',
  filters = [],
  title = 'Filter',
  primaryActionLabel = 'Apply',
  onFlyoutOpen = () => {},
  onFlyoutClose = () => {},
  onApply = () => {},
  onCancel = () => {},
<<<<<<< HEAD
  shouldClickOutsideToClose = false,
  secondaryActionLabel = 'Cancel',
  setAllFilters,
  setFilter,
}) => {
  /** Context state and methods */
  const { EventEmitter } = useContext(FilterContext);

  /** State */
  const [open, setOpen] = useState(false);
  const [filtersState, setFiltersState] = useInitialStateFromFilters(filters);
  const [filtersObjectArray, setFiltersObjectArray] = useState([]);

  /** Refs */
  const filterFlyoutRef = useRef(null);
  // When using batch actions we have to store the filters to then apply them later
  const prevFiltersRef = useRef(JSON.stringify(filtersState));
  const prevFiltersObjectArrayRef = useRef(JSON.stringify(filtersObjectArray));

  /** Memos */
  const showActionSet = updateMethod === BATCH;
=======
  secondaryActionLabel = 'Cancel',
  setAllFilters,
  data = [],
}) => {
  /** State */
  const [open, setOpen] = useState(false);

  const {
    filtersState,
    prevFiltersObjectArrayRef,
    prevFiltersRef,
    revertToPreviousFilters,
    reset,
    renderFilter,
    filtersObjectArray,
  } = useFilters({
    updateMethod,
    filters,
    setAllFilters,
    variation: FLYOUT,
  });

  /** Refs */
  const filterFlyoutRef = useRef(null);

  /** State from hooks */
  const [shouldDisableButtons, setShouldDisableButtons] =
    useShouldDisableButtons({
      initialValue: true,
      filtersState,
      prevFiltersRef,
    });

  /** Memos */
  const showActionSet = updateMethod === BATCH;
  const carbonPrefix = usePrefix();
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212

  /** Methods */
  const openFlyout = () => {
    setOpen(true);
    onFlyoutOpen();
  };
  const closeFlyout = () => {
    setOpen(false);
    onFlyoutClose();
  };

  const apply = () => {
    setAllFilters(filtersObjectArray);
    closeFlyout();
<<<<<<< HEAD
    onApply();
=======
    // From the user
    onApply();
    // When the user clicks apply, the action set buttons should be disabled again
    setShouldDisableButtons(true);
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212

    // updates the ref so next time the flyout opens we have records of the previous filters
    prevFiltersRef.current = JSON.stringify(filtersState);
    prevFiltersObjectArrayRef.current = JSON.stringify(filtersObjectArray);
  };

  const cancel = () => {
<<<<<<< HEAD
    revertToPreviousFilters();
    onCancel();
    closeFlyout();
  };

  const reset = () => {
    // Get the initial values for the filters
    const initialFiltersState = getInitialStateFromFilters(filters);
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
  };

  // If the user decides to cancel or click outside the flyout, it reverts back to the filters that were
  // there when they opened the flyout
  const revertToPreviousFilters = () => {
    setFiltersState(JSON.parse(prevFiltersRef.current));
    setFiltersObjectArray(JSON.parse(prevFiltersObjectArrayRef.current));
  };

  const applyFilters = useCallback(
    ({ column, value, type }) => {
      // If no end date is selected return because we need the end date to do computations
      if (type === DATE && !value[1]) {
        return;
      }

      if (updateMethod === BATCH) {
        const filtersObjectArrayCopy = [...filtersObjectArray];
        // check if the filter already exists in the array
        const filter = filtersObjectArrayCopy.find(
          (item) => item.id === column
        );

        // if filter exists in array then update the filter's new value
        if (filter) {
          filter.value = value;
        } else {
          filtersObjectArrayCopy.push({ id: column, value, type });
        }

        setFiltersObjectArray(filtersObjectArrayCopy);
      } else if (updateMethod === INSTANT) {
        setFilter(column, value);
      }
    },
    [setFilter, updateMethod, filtersObjectArray]
  );

  /** Effects */
  useClickOutside(filterFlyoutRef, (target) => {
    if (shouldClickOutsideToClose === false) {
      return;
    }

    const hasClickedOnDatePicker = target.closest('.flatpickr-calendar');

    if (!open || hasClickedOnDatePicker) {
=======
    // Reverting to previous filters only applies when using batch actions
    if (updateMethod === BATCH) {
      revertToPreviousFilters();
      onCancel();
    }
    closeFlyout();
  };

  /** Effects */
  useClickOutside(filterFlyoutRef, (target) => {
    const hasClickedOnDatePicker = target.closest('.flatpickr-calendar');
    const hasClickedOnDropdown =
      target.className === `${carbonPrefix}--list-box__menu-item__option`;

    if (!open || hasClickedOnDatePicker || hasClickedOnDropdown) {
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
      return;
    }

    cancel();
  });

<<<<<<< HEAD
  useEffect(function subscribeToEmitter() {
    // This event is emitted from the DatagridToolbar component when clearFilters is clicked in FilterSummary
    EventEmitter.subscribe(CLEAR_FILTERS, reset);
  });

  /** Render the individual filter component */
  const renderFilter = useCallback(
    ({ type, column, props: components }) => {
      if (type === DATE) {
        return (
          <DatePicker
            {...components.DatePicker}
            onChange={(value) => {
              setFiltersState({ ...filtersState, [column]: value });
              applyFilters({ column, value, type });
              components.DatePicker.onChange?.(value);
            }}
            value={filtersState[column]}
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
      } else if (type === NUMBER) {
        return (
          <NumberInput
            step={1}
            allowEmpty
            hideSteppers
            {...components.NumberInput}
            onChange={(event) => {
              setFiltersState({
                ...filtersState,
                [column]: event.target.value,
              });
              applyFilters({ column, value: event.target.value, type });
              components.NumberInput.onChange?.(event);
            }}
            value={filtersState[column]}
          />
        );
      } else if (type === CHECKBOX) {
        return (
          <FormGroup {...components.FormGroup}>
            {filtersState[column].map((option) => (
              <Checkbox
                key={option.labelText}
                {...option}
                onChange={(isSelected) => {
                  const checkboxCopy = filtersState[column];
                  const foundCheckbox = checkboxCopy.find(
                    (checkbox) => checkbox.value === option.value
                  );
                  foundCheckbox.selected = isSelected;
                  setFiltersState({ ...filtersState, [column]: checkboxCopy });
                  applyFilters({
                    column,
                    value: [...filtersState[column]],
                    type,
                  });
                  option.onChange?.(isSelected);
                }}
                checked={option.selected}
              />
            ))}
          </FormGroup>
        );
      } else if (type === RADIO) {
        return (
          <FormGroup {...components.FormGroup}>
            <RadioButtonGroup
              {...components.RadioButtonGroup}
              valueSelected={filtersState[column]}
              onChange={(selected) => {
                setFiltersState({ ...filtersState, [column]: selected });
                applyFilters({
                  column,
                  value: selected,
                  type,
                });
                components.RadioButtonGroup.onChange?.(selected);
              }}
            >
              {components.RadioButton.map((radio) => (
                <RadioButton
                  key={radio.id ?? radio.labelText ?? radio.value}
                  {...radio}
                />
              ))}
            </RadioButtonGroup>
          </FormGroup>
        );
      } else if (type === DROPDOWN) {
        return (
          <Dropdown
            {...components.Dropdown}
            selectedItem={filtersState[column]}
            onChange={({ selectedItem }) => {
              setFiltersState({
                ...filtersState,
                [column]: selectedItem,
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
      }
    },
    [filtersState, applyFilters, setFiltersState]
  );

  /** Renders all filters */
  const renderFilters = useCallback(
    () => filters.map(renderFilter),
    [filters, renderFilter]
  );
=======
  useSubscribeToEventEmitter(CLEAR_FILTERS, reset);

  /** Renders all filters */
  const renderFilters = () => filters.map(renderFilter);
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212

  const renderActionSet = () => {
    return (
      showActionSet && (
        <ActionSet
          actions={[
            {
              key: 1,
              kind: 'primary',
              label: primaryActionLabel,
              onClick: apply,
              isExpressive: false,
<<<<<<< HEAD
=======
              disabled: shouldDisableButtons,
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
            },
            {
              key: 3,
              kind: 'secondary',
              label: secondaryActionLabel,
              onClick: cancel,
              isExpressive: false,
<<<<<<< HEAD
=======
              disabled: shouldDisableButtons,
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
            },
          ]}
          size="md"
          buttonSize="md"
        />
      )
    );
  };

  return (
    <div className={`${componentClass}__container`}>
      <Button
        kind="ghost"
        hasIconOnly
        tooltipPosition="bottom"
<<<<<<< HEAD
        renderIcon={Filter16}
=======
        renderIcon={() => <Filter size={16} />}
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
        iconDescription={flyoutIconDescription}
        onClick={open ? closeFlyout : openFlyout}
        className={cx(`${componentClass}__trigger`, {
          [`${componentClass}__trigger--open`]: open,
        })}
<<<<<<< HEAD
=======
        disabled={data.length === 0}
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
      />
      <div
        ref={filterFlyoutRef}
        className={cx(componentClass, {
          [`${componentClass}--open`]: open,
          [`${componentClass}--batch`]: showActionSet,
          [`${componentClass}--instant`]: !showActionSet,
        })}
      >
        <div className={`${componentClass}__inner-container`}>
          <span className={`${componentClass}__title`}>{title}</span>
          <div className={`${componentClass}__filters`}>{renderFilters()}</div>
        </div>
        {renderActionSet()}
      </div>
    </div>
  );
};

FilterFlyout.propTypes = {
  /**
<<<<<<< HEAD
=======
   * All data rows in the table
   */
  data: PropTypes.array.isRequired,

  /**
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
   * Array of filters to render
   */
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      column: PropTypes.string.isRequired,
      props: PropTypes.object.isRequired,
    })
  ).isRequired,

  /**
   * Icon description for the filter flyout button
   */
  flyoutIconDescription: PropTypes.string,

  /**
   * Callback when the apply button is clicked
   */
  onApply: PropTypes.func,

  /**
   * Callback when the cancel button is clicked
   */
  onCancel: PropTypes.func,

  /**
   * Callback when the flyout closes
   */
  onFlyoutClose: PropTypes.func,

  /**
   * Callback when the flyout opens
   */
  onFlyoutOpen: PropTypes.func,

  /**
   * Label text of the primary action in the flyout
   */
  primaryActionLabel: PropTypes.string,

  /**
   * Label text of the secondary action in the flyout
   */
  secondaryActionLabel: PropTypes.string,

  /**
   * Function that sets all the filters, this comes from the datagridState
   */
  setAllFilters: PropTypes.func.isRequired,

  /**
<<<<<<< HEAD
   * Function that sets an individual filter, this comes from the datagridState
   */
  setFilter: PropTypes.func.isRequired,

  /**
   * Boolean if you want the flyout to close when clicked outside of the parent
   */
  shouldClickOutsideToClose: PropTypes.bool,

  /**
=======
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
   * Title of the filter flyout
   */
  title: PropTypes.string,

  /**
   * The update method used to apply the filters
   */
  updateMethod: PropTypes.oneOf([BATCH, INSTANT]).isRequired,
};

export default FilterFlyout;
