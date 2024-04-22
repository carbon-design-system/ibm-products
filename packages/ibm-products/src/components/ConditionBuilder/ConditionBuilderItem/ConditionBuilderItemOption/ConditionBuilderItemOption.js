import React, { useContext, useState } from 'react';

import { Search, Button } from '@carbon/react';

import { Checkmark } from '@carbon/react/icons';
import { Checkbox } from '@carbon/react';

import PropTypes from 'prop-types';
import { ConditionBuilderContext } from '../../ConditionBuilderContext/ConditionBuilderProvider';
import { blockClass } from '../../ConditionBuilderContext/DataConfigs';

export const ConditionBuilderItemOption = ({
  conditionState = {},
  config = {},
  onChange,
}) => {
  const multiSelectable = conditionState.operator === 'one-of';

  const { popOverSearchThreshold } = useContext(ConditionBuilderContext);

  const [filteredItems, setFilteredItems] = useState(config.options);
  const selection = Array.isArray(conditionState.value)
    ? conditionState.value
    : conditionState.value !== undefined
    ? [conditionState.value]
    : [];
  const handleSelectAll = (e) => {
    if (e.currentTarget.dataset.selectedAll == 'false') {
      onChange(undefined);
    } else {
      onChange(config.options.map((op) => op.id));
    }
  };

  return (
    <div className={`${blockClass}__condition-builder-item-option`}>
      {(config.includeSearch ||
        config.options.length > popOverSearchThreshold) && (
        <div className={`${blockClass}__condition-builder-item-option__search`}>
          <Search
            size="sm"
            labelText={'test'}
            closeButtonLabelText={true}
            onChange={(e) => {
              const { value } = e.target;

              let _filteredItems = config.options.filter((opt) =>
                opt.label.toLowerCase().includes(value.toLowerCase())
              );
              setFilteredItems(_filteredItems);
            }}
          />
        </div>
      )}

      {multiSelectable && (
        <div className={`${blockClass}__multiselectSelectionStatusContainer`}>
          <h4>
            <label>
              {' '}
              {selection.length}/{config.options.length} Selected
            </label>
          </h4>
          <Button
            kind={'ghost'}
            size={'sm'}
            data-selected-all={`${selection.length == 0 ? true : false}`}
            onClick={handleSelectAll}
            className={`${blockClass}__selectAll-button`}
          >
            {selection.length == 0 ? 'Select all' : 'Deselect all'}
          </Button>
        </div>
      )}

      <ul
        aria-label={
          conditionState.label
            ? conditionState.label
            : conditionState.property
            ? conditionState.property
            : 'Property'
        }
        role="listbox"
        data-multi-select={multiSelectable}
      >
        {filteredItems?.map((option) => {
          let isSelected = selection.includes(option.id);
          let Icon = option.icon;

          return (
            <li
              tabIndex={0}
              key={option.id}
              role="option"
              aria-selected={isSelected}
              className={`${blockClass}__condition-builder-item-option__option`}
              onKeyUp={() => {
                return false;
              }}
              onClick={(e) => {
                if (multiSelectable) {
                  if (isSelected) {
                    let items = selection.filter((v) => v !== option.id);
                    onChange(items.length > 0 ? items : undefined, e);
                  } else {
                    onChange([...selection, option.id], e);
                  }
                } else {
                  onChange(option.id, e, true);
                  // e.target.closest('[role="gridcell"]')?.querySelector('button')?.click();
                  // e.target.closest('[role="gridcell"]')?.querySelector('button')?.focus();
                }
              }}
            >
              <div
                className={`${blockClass}__condition-builder-item-option__option-content`}
              >
                {multiSelectable ? (
                  <>
                    <Checkbox
                      checked={isSelected}
                      className={`${blockClass}__condition-builder-item-option__option-label`}
                      labelText={option.label}
                    />
                    {Icon && <Icon />}
                  </>
                ) : (
                  <>
                    <span
                      className={`${blockClass}__condition-builder-item-option__option-label`}
                    >
                      {Icon && <Icon />}
                      {option.label}
                    </span>
                    {isSelected && (
                      <Checkmark
                        className={`${blockClass}__condition-builder-checkmark`}
                      />
                    )}
                  </>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

ConditionBuilderItemOption.propTypes = {
  /**
   * current condition object
   */
  conditionState: PropTypes.object,

  /**
   * current config object that this property is part of
   */
  config: PropTypes.object,

  /**
   * callback to update state oin date change
   */
  onChange: PropTypes.func,
};
