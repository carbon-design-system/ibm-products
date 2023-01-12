/* eslint-disable react/jsx-key */

import React, {
  useRef,
  useMemo,
  useEffect,
  useContext,
  useCallback,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionItem,
  Button,
  Search,
  Checkbox,
  DatePicker,
  DatePickerInput,
  Dropdown,
  FormGroup,
  NumberInput,
  RadioButton,
  RadioButtonGroup,
} from 'carbon-components-react';
import { pkg } from '../../../../../settings';
import {
  BATCH,
  CHECKBOX,
  CLEAR_FILTERS,
  DATE,
  DROPDOWN,
  INSTANT,
  NUMBER,
  PANEL,
  RADIO,
} from './constants';
import cx from 'classnames';
import { Close32 } from '@carbon/icons-react';
import { ActionSet } from '../../../../ActionSet';
import { FilterContext } from '.';
import useInitialStateFromFilters from './hooks/useInitialStateFromFilters';

const blockClass = `${pkg.prefix}--datagrid`;
const componentClass = `${blockClass}-filter-left-panel`;

const FilterLeftPanel = ({
  title,
  updateMethod = BATCH,
  filterSections,
  setAllFilters,
  onApply = () => {},
  onCancel = () => {},
  showFilterSearch = false,
  filterPanelMinHeight = 600,
}) => {
  /** State */
  const [filtersState, setFiltersState] = useInitialStateFromFilters(
    filterSections,
    PANEL
  );
  const [filtersObjectArray, setFiltersObjectArray] = useState([]);

  /** Refs */
  const filterHeadingRef = useRef();
  const filterSearchRef = useRef();
  const actionSetRef = useRef();
  // When using batch actions we have to store the filters to then apply them later
  const prevFiltersRef = useRef(JSON.stringify(filtersState));
  const prevFiltersObjectArrayRef = useRef(JSON.stringify(filtersObjectArray));

  /** Memos */
  const showActionSet = useMemo(() => updateMethod === BATCH, [updateMethod]);

  /** Context */
  const { leftPanelOpen, setLeftPanelOpen } = useContext(FilterContext);

  /** Methods */
  const closePanel = () => setLeftPanelOpen(false);

  const cancel = () => {
    closePanel();
  };

  const apply = () => {
    setAllFilters(filtersObjectArray);
    closePanel();
    onApply();

    // updates the ref so next time the flyout opens we have records of the previous filters
    prevFiltersRef.current = JSON.stringify(filtersState);
    prevFiltersObjectArrayRef.current = JSON.stringify(filtersObjectArray);
  };

  const applyFilters = ({ column, value, type }) => {
    // If no end date is selected return because we need the end date to do computations
    if (type === DATE && !value[1]) {
      return;
    }

    const filtersObjectArrayCopy = [...filtersObjectArray];
    // // check if the filter already exists in the array
    const filter = filtersObjectArrayCopy.find((item) => item.id === column);

    // // if filter exists in array then update the filter's new value
    if (filter) {
      filter.value = value;
    } else {
      filtersObjectArrayCopy.push({ id: column, value, type });
    }

    setFiltersObjectArray(filtersObjectArrayCopy);

    // // Automatically apply the filters if the updateMethod is instant
    if (updateMethod === INSTANT) {
      setAllFilters(filtersObjectArrayCopy);
    }
  };

  /** Render the individual filter component */
  const renderFilter = ({ type, column, props: components }) => {
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
  }

  const renderActionSet = () => {
    return (
      showActionSet && (
        <ActionSet
          actions={[
            {
              key: 1,
              kind: 'primary',
              label: 'Apply',
              onClick: apply,
              disabled: true,
            },
            {
              key: 3,
              kind: 'secondary',
              label: 'Cancel',
              onClick: cancel,
              disabled: true,
            },
          ]}
          className={`${componentClass}__action-set`}
          ref={actionSetRef}
        />
      )
    );
  };

  const getScrollableContainerHeight = () => {
    const filterHeadingHeight =
      filterHeadingRef.current?.getBoundingClientRect().height;
    const filterSearchHeight =
      filterSearchRef.current?.getBoundingClientRect().height;
    const actionSetHeight =
      actionSetRef.current?.getBoundingClientRect().height;

    const height = `calc(100vh - ${filterHeadingHeight}px - ${
      showFilterSearch ? filterSearchHeight : 0
    }px - ${updateMethod === BATCH ? actionSetHeight : 0}px)`;

    return height;
  };

  return (
    <div
      className={cx(componentClass, `${componentClass}__container`, {
        [`${componentClass}--open`]: leftPanelOpen,
        [`${componentClass}--batch`]: showActionSet,
        [`${componentClass}--instant`]: !showActionSet,
      })}
    >
      <div ref={filterHeadingRef} className={`${componentClass}__heading`}>
        <h1 className={`${componentClass}__title`}>{title}</h1>
        <Button
          hasIconOnly
          renderIcon={Close32}
          iconDescription="button-chan"
          kind="ghost"
          onClick={cancel}
        />
      </div>
      {showFilterSearch && (
        <div ref={filterSearchRef} className={`${componentClass}__search`}>
          <Search
            labelText="Filter search"
            placeHolderText="Find filters"
            light={true}
            size="sm"
          />
        </div>
      )}
      <div
        className={`${componentClass}__inner-container`}
        style={{ height: getScrollableContainerHeight() }}
      >
        {filterSections.map(({ categoryTitle = null, filters = [], showAsAccordion }) => {
          return (
            <div className={`${componentClass}__category`}>
              {categoryTitle && (
                <div className={`${componentClass}__category-title`}>
                  {categoryTitle}
                </div>
              )}

              {showAsAccordion ? <Accordion>
                {filters.map(({filterLabel, filter}) => {
                  return (
                    <AccordionItem
                      title={filterLabel}
                      key={filterLabel}
                    >
                      {renderFilter(filter)}
                    </AccordionItem>
                  );
                })}
              </Accordion> : filters.map(({filter}) => renderFilter(filter))}
            </div>
          );
        })}
      </div>
      {renderActionSet()}
    </div>
  );
};

FilterLeftPanel.propTypes = {
  filterSections: PropTypes.array,
  open: PropTypes.bool,
  tableID: PropTypes.string.isRequired,
  title: PropTypes.string,
  updateMethod: PropTypes.oneOf([BATCH, INSTANT]),
};

export default FilterLeftPanel;
