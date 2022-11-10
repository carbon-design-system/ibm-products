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
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useClickOutside } from '../../../../../global/js/hooks';
import { pkg } from '../../../../../settings';
import { ActionSet } from '../../../../ActionSet';
import { BATCH, INSTANT } from './constants';
import useInitialStateFromFilters from './hooks/useInitialStateFromFilters';

const blockClass = `${pkg.prefix}--datagrid`;
const componentClass = `${blockClass}-filter-flyout`;

const FilterFlyout = ({
  updateMethod = BATCH,
  headers,
  flyoutIconDescription = 'Open filters',
  filters = [],
  title = 'Filter',
  primaryActionLabel = 'Apply',
  onFlyoutOpen = () => {},
  onFlyoutClose = () => {},
  onApply = () => {},
  onCancel = () => {},
  shouldClickOutsideToClose = false,
  secondaryActionLabel = 'Cancel',
  setAllFilters,
  setFilter,
}) => {
  /** Refs */
  const filterFlyoutRef = useRef(null);
  // When using batch actions we have to store the filters to then apply them later
  const filtersObjectArray = useRef([]);

  /** State */
  const [open, setOpen] = useState(false);
  const [filtersState, setFiltersState] = useInitialStateFromFilters(filters);

  /** Memos */
  const showActionSet = useMemo(() => updateMethod === BATCH, [updateMethod]);

  /** Methods */
  const openFlyout = () => {
    setOpen(true);
    onFlyoutOpen();
  };
  const closeFlyout = useCallback(() => {
    setOpen(false);
    onFlyoutClose();
  }, [onFlyoutClose]);

  const apply = useCallback(() => {
    setAllFilters(filtersObjectArray.current);
    closeFlyout();
    onApply();
  }, [setAllFilters, filtersObjectArray, closeFlyout, onApply]);

  const cancel = useCallback(() => {
    onCancel();
    closeFlyout();
  }, [onCancel, closeFlyout]);

  const applyFilters = useCallback(
    ({ column, value }) => {
      const type = headers.find((header) => header.id === column).filter;

      // If no end date is selected return because we need the end date to do computations
      if (type === 'date' && !value[1]) {
        return;
      }

      if (updateMethod === BATCH) {
        // check if the filter already exists in the array
        const filter = filtersObjectArray.current?.find(
          (item) => item.id === column
        );

        // if filter exists in array then update the filter's new value
        if (filter) {
          filter.value = value;
        } else {
          filtersObjectArray.current = [
            ...filtersObjectArray.current,
            { id: column, value },
          ];
        }
      } else if (updateMethod === INSTANT) {
        setFilter(column, value);
      }
    },
    [headers, setFilter, updateMethod]
  );

  /** Effects */
  useClickOutside(filterFlyoutRef, (target) => {
    if (shouldClickOutsideToClose === false) {
      return;
    }

    const hasClickedOnDatePicker = target.closest('.flatpickr-calendar');

    if (!open || hasClickedOnDatePicker) {
      return;
    }

    setOpen(false);
  });

  useEffect(() => {
    console.log(filtersState);
  }, [filtersState]);

  /** Render the individual filter component */
  const renderFilter = useCallback(
    ({ type, column, props }) => {
      if (type === 'date') {
        return (
          <DatePicker
            {...props.DatePicker}
            onChange={(value) => {
              setFiltersState({ ...filtersState, [column]: value });
              applyFilters({ column, value });
            }}
            value={filtersState[column]}
            datePickerType="range"
          >
            <DatePickerInput
              placeholder="mm/dd/yyyy"
              labelText="Start date"
              {...props.DatePickerInput.start}
            />
            <DatePickerInput
              placeholder="mm/dd/yyyy"
              labelText="End date"
              {...props.DatePickerInput.end}
            />
          </DatePicker>
        );
      } else if (type === 'number') {
        return (
          <NumberInput
            step={1}
            allowEmpty
            hideSteppers
            {...props.NumberInput}
            onChange={(event) => {
              setFiltersState({
                ...filtersState,
                [column]: event.target.value,
              });
              applyFilters({ column, value: event.target.value });
            }}
            value={filtersState[column]}
          />
        );
      } else if (type === 'checkbox') {
        return (
          <FormGroup {...props.FormGroup}>
            {filtersState[column].map((option) => (
              <Checkbox
                key={option.label}
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
                  });
                }}
              />
            ))}
          </FormGroup>
        );
      } else if (type === 'radio') {
        return (
          <FormGroup {...props.FormGroup}>
            <RadioButtonGroup
              {...props.RadioButtonGroup}
              onChange={(selected) => {
                setFiltersState({ ...filtersState, [column]: selected });
                applyFilters({
                  column,
                  value: selected,
                });
              }}
            >
              {props.RadioButton.map((radio) => (
                <RadioButton
                  key={radio.id ?? radio.labelText ?? radio.value}
                  {...radio}
                />
              ))}
            </RadioButtonGroup>
          </FormGroup>
        );
      } else if (type === 'dropdown') {
        return (
          <Dropdown
            {...props.Dropdown}
            onChange={({ selectedItem }) => {
              setFiltersState({ ...filtersState, [column]: selectedItem });
              applyFilters({
                column,
                value: selectedItem,
              });
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

  const renderActionSet = useCallback(() => {
    return (
      showActionSet && (
        <ActionSet
          actions={[
            {
              key: 1,
              kind: 'primary',
              label: primaryActionLabel,
              onClick: apply,
            },
            {
              key: 3,
              kind: 'secondary',
              label: secondaryActionLabel,
              onClick: cancel,
            },
          ]}
          size="md"
        />
      )
    );
  }, [showActionSet, apply, primaryActionLabel, secondaryActionLabel, cancel]);

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
   * React children of carbon filters
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,

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
   * Boolean if you want the flyout to close when clicked outside of the parent
   */
  shouldClickOutsideToClose: PropTypes.bool,

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
