/* eslint-disable react/jsx-key */

import React, { useRef, useMemo, useContext, useState, useEffect } from 'react';
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
import { rem } from '@carbon/layout';
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
import { motion } from 'framer-motion';
import {
  panelVariants,
  innerContainerVariants,
  actionSetVariants,
} from './motion/variants';
import { Close32 } from '@carbon/icons-react';
import { ActionSet } from '../../../../ActionSet';
import { FilterContext } from '.';
import {
  useInitialStateFromFilters,
  useSubscribeToEventEmitter,
} from './hooks';
import { getInitialStateFromFilters } from './utils';
import isEqual from 'lodash/isEqual';

const blockClass = `${pkg.prefix}--datagrid`;
const componentClass = `${blockClass}-filter-panel`;

const MotionActionSet = motion(ActionSet);

const FilterPanel = ({
  title,
  closeIconDescription = 'Close filter panel',
  updateMethod = BATCH,
  filterSections,
  setAllFilters,
  onApply = () => {},
  onCancel = () => {},
  onPanelOpen = () => {},
  onPanelClose = () => {},
  showFilterSearch = false,
  filterPanelMinHeight = 600,
}) => {
  /** State */
  const [filtersState, setFiltersState] = useInitialStateFromFilters(
    filterSections,
    PANEL
  );
  const [filtersObjectArray, setFiltersObjectArray] = useState([]);
  const [shouldDisableButtons, setShouldDisableButtons] = useState(true);
  const [showDividerLine, setShowDividerLine] = useState(false);

  /** Refs */
  const filterPanelRef = useRef();
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

  // If the user decides to cancel or click outside the flyout, it reverts back to the filters that were
  // there when they opened the flyout
  const revertToPreviousFilters = () => {
    setFiltersState(JSON.parse(prevFiltersRef.current));
    setFiltersObjectArray(JSON.parse(prevFiltersObjectArrayRef.current));
  };

  const cancel = () => {
    // Reverting to previous filters only applies when using batch actions
    if (updateMethod === BATCH) {
      revertToPreviousFilters();
      onCancel();
    }
  };

  const reset = () => {
    // Get the initial values for the filters
    const initialFiltersState = getInitialStateFromFilters(
      filterSections,
      PANEL
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
  };

  const apply = () => {
    setAllFilters(filtersObjectArray);
    onApply();
    setShouldDisableButtons(true);

    // updates the ref so next time the flyout opens we have records of the previous filters
    prevFiltersRef.current = JSON.stringify(filtersState);
    prevFiltersObjectArrayRef.current = JSON.stringify(filtersObjectArray);
  };

  const applyFilters = ({ column, value, type }) => {
    // If no end date is selected return because we need the end date to do computations
    if (type === DATE && value.length > 0 && !value[1]) {
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

    // ATTENTION: this is where you would reset or remove individual filters from the filters array
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
    } else if (type === DATE) {
      if (value.length === 0) {
        /**
        Checks to see if the date value is an empty array, if it is that means the user wants
        to reset the date filter
      */
        const index = filtersObjectArrayCopy.findIndex(
          (filter) => filter.id === column
        );

        // Remove it from the filters array since there is nothing to filter
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

    // // Automatically apply the filters if the updateMethod is instant
    if (updateMethod === INSTANT) {
      setAllFilters(filtersObjectArrayCopy);
    }
  };

  /** Render the individual filter component */
  const renderFilter = ({ type, column, props: components }) => {
    switch (type) {
      case DATE:
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
            light
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
      case NUMBER:
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
            light
          />
        );
      case CHECKBOX:
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
      case RADIO:
        return (
          <FormGroup {...components.FormGroup}>
            <RadioButtonGroup
              {...components.RadioButtonGroup}
              valueSelected={filtersState[column]?.value === '' ? 'Any' : filtersState[column]?.value}
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
      case DROPDOWN:
        return (
          <Dropdown
            {...components.Dropdown}
            items={['Any', ...components.Dropdown.items]}
            selectedItem={filtersState[column].value === '' ? 'Any' :  filtersState[column].value === ''}
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
            light
          />
        );
    }
  };

  const renderActionSet = () => {
    return (
      showActionSet && (
        <MotionActionSet
          actions={[
            {
              key: 1,
              kind: 'primary',
              label: 'Apply',
              onClick: apply,
              disabled: shouldDisableButtons,
            },
            {
              key: 2,
              kind: 'secondary',
              label: 'Cancel',
              onClick: cancel,
              disabled: shouldDisableButtons,
            },
          ]}
          className={`${componentClass}__action-set`}
          ref={actionSetRef}
          variants={actionSetVariants}
        />
      )
    );
  };

  const onInnerContainerScroll = (event) => {
    if (event.target.scrollTop > 0) {
      setShowDividerLine(true);
    } else {
      setShowDividerLine(false);
    }
  };

  /** Effects */
  useEffect(
    function liftOpenStateToParent() {
      if (leftPanelOpen) {
        onPanelOpen(leftPanelOpen);
      } else {
        onPanelClose(leftPanelOpen);
      }
    },
    [leftPanelOpen, onPanelClose, onPanelOpen]
  );

  useEffect(
    function setPanelMinimumHeight() {
      filterPanelRef.current?.style.setProperty(
        '--filter-panel-min-height',
        rem(filterPanelMinHeight)
      );
    },
    [filterPanelMinHeight]
  );

  useEffect(
    function updateDisabledButtonsState() {
      setShouldDisableButtons(
        isEqual(filtersState, JSON.parse(prevFiltersRef.current))
      );
    },
    [filtersState]
  );

  useSubscribeToEventEmitter(CLEAR_FILTERS, reset);

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
    <motion.div
      ref={filterPanelRef}
      className={cx(componentClass, `${componentClass}__container`, {
        [`${componentClass}--open`]: leftPanelOpen,
        [`${componentClass}--batch`]: showActionSet,
        [`${componentClass}--instant`]: !showActionSet,
      })}
      initial={false}
      animate={leftPanelOpen ? 'visible' : 'hidden'}
      variants={panelVariants}
    >
      <motion.div variants={innerContainerVariants}>
        <header
          ref={filterHeadingRef}
          className={cx(`${componentClass}__heading`, {
            [`${componentClass}__heading--with-divider`]: showDividerLine,
          })}
        >
          <div className={`${componentClass}__title`}>{title}</div>
          <Button
            hasIconOnly
            renderIcon={Close32}
            iconDescription={closeIconDescription}
            kind="ghost"
            tooltipPosition="bottom"
            tooltipAlignment="end"
            onClick={closePanel}
          />
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
        </header>

        <div
          className={`${componentClass}__inner-container`}
          style={{ height: getScrollableContainerHeight() }}
          onScroll={onInnerContainerScroll}
        >
          {filterSections.map(
            ({ categoryTitle = null, filters = [], hasAccordion }) => {
              return (
                <div className={`${componentClass}__category`}>
                  {categoryTitle && (
                    <div className={`${componentClass}__category-title`}>
                      {categoryTitle}
                    </div>
                  )}

                  {hasAccordion ? (
                    <Accordion>
                      {filters.map(({ filterLabel, filter }) => {
                        return (
                          <AccordionItem title={filterLabel} key={filterLabel}>
                            {renderFilter(filter)}
                          </AccordionItem>
                        );
                      })}
                    </Accordion>
                  ) : (
                    filters.map(({ filter }) => renderFilter(filter))
                  )}
                </div>
              );
            }
          )}
        </div>
        {renderActionSet()}
      </motion.div>
    </motion.div>
  );
};

FilterPanel.propTypes = {
  closeIconDescription: PropTypes.string,
  filterPanelMinHeight: PropTypes.number,
  filterSections: PropTypes.array,
  onApply: PropTypes.func,
  onCancel: PropTypes.func,
  onPanelClose: PropTypes.func,
  onPanelOpen: PropTypes.func,
  open: PropTypes.bool,
  setAllFilters: PropTypes.func.isRequired,
  showFilterSearch: PropTypes.bool,
  title: PropTypes.string,
  updateMethod: PropTypes.oneOf([BATCH, INSTANT]),
};

export default FilterPanel;
