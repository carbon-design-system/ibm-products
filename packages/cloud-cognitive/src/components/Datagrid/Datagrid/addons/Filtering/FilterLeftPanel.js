/* eslint-disable react/jsx-key */

import React, {
  useRef,
  useMemo,
  useEffect,
  useContext,
  useCallback,
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
  tableID,
}) => {
  /** Refs */
  const tableRef = useRef();

  const [filtersState, setFiltersState] = useInitialStateFromFilters(
    filterSections,
    PANEL
  );

  console.log({ filtersState });

  /** Effects */
  useEffect(
    function setRefsOnMount() {
      tableRef.current = document.querySelector(`#${tableID} .bx--data-table`);
    },
    [tableID]
  );

  /** Memos */
  const showActionSet = useMemo(() => updateMethod === BATCH, [updateMethod]);

  /** Context */
  const { leftPanelOpen, setLeftPanelOpen } = useContext(FilterContext);

  /** Methods */
  const closePanel = () => setLeftPanelOpen(false);

  const cancel = () => {
    closePanel();
  };

  useEffect(() => {
    console.log(filtersState);
  }, [filtersState]);

  /** Render the individual filter component */
  const renderFilter = useCallback(
    ({ type, column, props: components, sectionTitle, subSectionTitle }) => {
      if (type === DATE) {
        return (
          <DatePicker
            {...components.DatePicker}
            onChange={(value) => {
              const filtersStateCopy = { ...filtersState };
              filtersStateCopy[sectionTitle][subSectionTitle][column] = value;
              setFiltersState(filtersStateCopy);
              // applyFilters({ column, value, type });
              components.DatePicker.onChange?.(value);
            }}
            value={filtersState[sectionTitle][subSectionTitle][column]}
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
              // setFiltersState({
              //   ...filtersState,
              //   [column]: event.target.value,
              // });
              const filtersStateCopy = { ...filtersState };
              filtersStateCopy[sectionTitle][subSectionTitle][column] =
                event.target.value;
              setFiltersState(filtersStateCopy);
              // applyFilters({ column, value: event.target.value, type });
              components.NumberInput.onChange?.(event);
            }}
            value={filtersState[sectionTitle][subSectionTitle][column]}
          />
        );
      } else if (type === CHECKBOX) {
        return (
          <FormGroup {...components.FormGroup}>
            {filtersState[sectionTitle][subSectionTitle][column].map(
              (option) => (
                <Checkbox
                  key={option.labelText}
                  {...option}
                  onChange={(isSelected) => {
                    const checkboxCopy =
                      filtersState[sectionTitle][subSectionTitle][column];
                    const foundCheckbox = checkboxCopy.find(
                      (checkbox) => checkbox.value === option.value
                    );
                    foundCheckbox.selected = isSelected;
                    // setFiltersState({ ...filtersState, [column]: checkboxCopy });
                    const filtersStateCopy = { ...filtersState };
                    filtersStateCopy[sectionTitle][subSectionTitle][column] =
                      checkboxCopy;
                    setFiltersState(filtersStateCopy);
                    // applyFilters({
                    //   column,
                    //   value: [...filtersState[column]],
                    //   type,
                    // });
                    option.onChange?.(isSelected);
                  }}
                  checked={option.selected}
                />
              )
            )}
          </FormGroup>
        );
      } else if (type === RADIO) {
        return (
          <FormGroup {...components.FormGroup}>
            <RadioButtonGroup
              {...components.RadioButtonGroup}
              valueSelected={
                filtersState[sectionTitle][subSectionTitle][column]
              }
              onChange={(selected) => {
                // setFiltersState({ ...filtersState, [column]: selected });
                const filtersStateCopy = { ...filtersState };
                filtersStateCopy[sectionTitle][subSectionTitle][column] =
                  selected;
                setFiltersState(filtersStateCopy);
                // applyFilters({
                //   column,
                //   value: selected,
                //   type,
                // });
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
            selectedItem={filtersState[sectionTitle][subSectionTitle][column]}
            onChange={({ selectedItem }) => {
              // setFiltersState({
              //   ...filtersState,
              //   [column]: selectedItem,
              // });
              const filtersStateCopy = { ...filtersState };
              filtersStateCopy[sectionTitle][subSectionTitle][column] =
                selectedItem;
              setFiltersState(filtersStateCopy);
              // applyFilters({
              //   column,
              //   value: selectedItem,
              //   type,
              // });
              components.Dropdown.onChange?.(selectedItem);
            }}
          />
        );
      }
    },
    [filtersState, setFiltersState]
  );

  /** Renders all filters */
  const renderFilters = ({ sectionTitle, subSectionTitle, filters }) =>
    filters.map(({ type, column, props }) =>
      renderFilter({ type, column, props, sectionTitle, subSectionTitle })
    );

  const renderActionSet = () => {
    return (
      showActionSet && (
        <ActionSet
          actions={[
            {
              key: 1,
              kind: 'primary',
              label: 'Apply',
              onClick: null,
            },
            {
              key: 3,
              kind: 'secondary',
              label: 'Cancel',
              onClick: cancel,
            },
          ]}
          className={`${componentClass}__action-set`}
        />
      )
    );
  };

  const panelHeight = tableRef.current?.getBoundingClientRect().height;

  return (
    <div
      style={{
        height: panelHeight,
      }}
      className={cx(componentClass, `${componentClass}__container`, {
        [`${componentClass}--open`]: leftPanelOpen,
        [`${componentClass}--batch`]: showActionSet,
        [`${componentClass}--instant`]: !showActionSet,
      })}
    >
      <div className={`${componentClass}__heading`}>
        <h1 className={`${componentClass}__title`}>{title}</h1>
        <Button
          hasIconOnly
          renderIcon={Close32}
          iconDescription="button-chan"
          kind="ghost"
          onClick={cancel}
        />
      </div>
      <div className={`${componentClass}__search`}>
        <Search
          labelText="Filter search"
          placeHolderText="Find filters"
          light={true}
          size="sm"
        />
      </div>
      <div className={`${componentClass}__inner-container`}>
        {filterSections.map((category) => {
          return (
            <div className={`${componentClass}__category`}>
              <div className={`${componentClass}__category-title`}>
                {category.title}
              </div>
              <Accordion>
                {category.subsections.map((subsection) => {
                  return (
                    <AccordionItem
                      title={subsection.title}
                      key={subsection.title}
                    >
                      {renderFilters({
                        sectionTitle: category.title,
                        subSectionTitle: subsection.title,
                        filters: subsection.filters,
                      })}
                    </AccordionItem>
                  );
                })}
              </Accordion>
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
