// @flow
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
import { useClickOutside } from '../../../../../global/js/hooks';
import { pkg } from '../../../../../settings';
import { ActionSet } from '../../../../ActionSet';
import {
  BATCH,
  CHECKBOX,
  CLEAR_FILTERS,
  DATE,
  DROPDOWN,
  FLYOUT,
  INSTANT,
  NUMBER,
  RADIO,
} from './constants';
import {
  useInitialStateFromFilters,
  useSubscribeToEventEmitter,
} from './hooks';
import { getInitialStateFromFilters } from './utils';

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
  secondaryActionLabel = 'Cancel',
  setAllFilters,
  data = [],
}) => {
  /** State */
  const [open, setOpen] = useState(false);
  const [filtersState, setFiltersState] = useInitialStateFromFilters(
    filters,
    FLYOUT
  );
  const [filtersObjectArray, setFiltersObjectArray] = useState([]);

  /** Refs */
  const filterFlyoutRef = useRef(null);
  // When using batch actions we have to store the filters to then apply them later
  const prevFiltersRef = useRef(JSON.stringify(filtersState));
  const prevFiltersObjectArrayRef = useRef(JSON.stringify(filtersObjectArray));

  /** Memos */
  const showActionSet = updateMethod === BATCH;

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
    // From the user
    onApply();

    // updates the ref so next time the flyout opens we have records of the previous filters
    prevFiltersRef.current = JSON.stringify(filtersState);
    prevFiltersObjectArrayRef.current = JSON.stringify(filtersObjectArray);
  };

  const cancel = () => {
    // Reverting to previous filters only applies when using batch actions
    if (updateMethod === BATCH) {
      revertToPreviousFilters();
      onCancel();
    }
    closeFlyout();
  };

  const reset = () => {
    // Get the initial values for the filters
    const initialFiltersState = getInitialStateFromFilters(filters, FLYOUT);
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

      const filtersObjectArrayCopy = [...filtersObjectArray];
      // check if the filter already exists in the array
      const filter = filtersObjectArrayCopy.find((item) => item.id === column);

      // if filter exists in array then update the filter's new value
      if (filter) {
        filter.value = value;
      } else {
        filtersObjectArrayCopy.push({ id: column, value, type });
      }

      if (type === CHECKBOX) {
        /**
        When all checkboxes of a group are all unselected the value still exists in the filtersObjectArray
        This checks if all the checkboxes are selected = false and removes it from the array
       */
        const index = filtersObjectArrayCopy.findIndex(
          (filter) => filter.id === column
        );

        // If all the selected state is false remove from array
        const shouldRemoveFromArray = filtersObjectArrayCopy[index].value.every(
          (val) => val.selected === false
        );

        if (shouldRemoveFromArray) {
          filtersObjectArrayCopy.splice(index, 1);
        }
      } else if (type === DROPDOWN || type === RADIO) {
        if (value === 'Any') {
          /**
          Checks to see if the selected value is 'Any', that means the user wants
          to reset specific filter
        */
          const index = filtersObjectArrayCopy.findIndex(
            (filter) => filter.id === column
          );

          // Remove it from the filters array
          filtersObjectArrayCopy.splice(index, 1);
        }
      }

      setFiltersObjectArray(filtersObjectArrayCopy);

      // Automatically apply the filters if the updateMethod is instant
      if (updateMethod === INSTANT) {
        setAllFilters(filtersObjectArrayCopy);
      }
    },
    [setAllFilters, updateMethod, filtersObjectArray]
  );

  /** Effects */
  useClickOutside(filterFlyoutRef, (target) => {
    const hasClickedOnDatePicker = target.closest('.flatpickr-calendar');
    const hasClickedOnDropdown =
      target.className === 'bx--list-box__menu-item__option';

    if (!open || hasClickedOnDatePicker || hasClickedOnDropdown) {
      return;
    }

    cancel();
  });

  useSubscribeToEventEmitter(CLEAR_FILTERS, reset);

  /** Render the individual filter component */
  const renderFilter = ({ type, column, props: components }) => {
    if (type === DATE) {
      return (
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
    } else if (type === CHECKBOX) {
      return (
        <FormGroup {...components.FormGroup}>
          {filtersState[column].value.map((option) => (
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
            />
          ))}
        </FormGroup>
      );
    } else if (type === RADIO) {
      return (
        <FormGroup {...components.FormGroup}>
          <RadioButtonGroup
            {...components.RadioButtonGroup}
            valueSelected={
              filtersState[column]?.value === ''
                ? 'Any'
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
            <RadioButton id="any" labelText="Any" value="Any" />
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
          selectedItem={
            filtersState[column].value === ''
              ? 'Any'
              : filtersState[column].value
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
    }
  };

  /** Renders all filters */
  const renderFilters = () => filters.map(renderFilter);

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
            },
            {
              key: 3,
              kind: 'secondary',
              label: secondaryActionLabel,
              onClick: cancel,
              isExpressive: false,
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
        renderIcon={Filter16}
        iconDescription={flyoutIconDescription}
        onClick={open ? closeFlyout : openFlyout}
        className={cx(`${componentClass}__trigger`, {
          [`${componentClass}__trigger--open`]: open,
        })}
        disabled={data.length === 0}
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
   * All data rows in the table
   */
  data: PropTypes.array.isRequired,

  /**
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
   * Title of the filter flyout
   */
  title: PropTypes.string,

  /**
   * The update method used to apply the filters
   */
  updateMethod: PropTypes.oneOf([BATCH, INSTANT]).isRequired,
};

export default FilterFlyout;
