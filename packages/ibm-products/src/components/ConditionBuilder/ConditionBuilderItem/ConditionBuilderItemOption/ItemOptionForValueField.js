import React, { useContext, useEffect, useRef, useState } from 'react';

import { Search, Button } from '@carbon/react';

import {
  Checkmark,
  Checkbox,
  CheckboxCheckedFilled,
} from '@carbon/react/icons';
import { SelectSkeleton } from '@carbon/react';

import PropTypes from 'prop-types';
import { ConditionBuilderContext } from '../../ConditionBuilderContext/ConditionBuilderProvider';
import {
  blockClass,
  translateWithId,
} from '../../ConditionBuilderContext/DataConfigs';

export const ItemOptionForValueField = ({
  conditionState = {},
  config = {},
  onChange,
}) => {
  const multiSelectable = conditionState.operator === 'one_of';

  const { popOverSearchThreshold, getOptions, rootState } = useContext(
    ConditionBuilderContext
  );
  const contentRef = useRef();

  const [allOptions, setAllOptions] = useState(config.options);
  const [searchValue, setSearchValue] = useState('');

  const filteredItems = allOptions?.filter((opt) =>
    opt.label.toLowerCase().includes(searchValue.toLowerCase())
  );

  const selection = Array.isArray(conditionState.value)
    ? conditionState.value
    : conditionState.value !== undefined
    ? [conditionState.value]
    : [];

  useEffect(() => {
    // if(rest['data-name'] == 'valueField'){
    //   const fetchData = async () => {
    //     const response = await config.options(conditionState);
    //     if (
    //       response?.length > 0 &&
    //       Object.keys(response[0]).includes('label') &&
    //       Object.keys(response[0]).includes('id')
    //     ) {
    //       setAllOptions(response);
    //       setFilteredItems(response);
    //     }
    //   };

    //   fetchData(); // Call the async method
    // }else{
    //   setAllOptions(config.options);
    //       setFilteredItems(config.options);
    // }

    if (!allOptions && getOptions) {
      const fetchData = async () => {
        const response = await getOptions(rootState, conditionState);
        if (
          response?.length > 0 &&
          Object.keys(response[0]).includes('label') &&
          Object.keys(response[0]).includes('id')
        ) {
          setAllOptions(response);
        }
      };

      fetchData(); // Call the async method
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    //this will focus the first input field in the popover

    if (contentRef.current) {
      const firstFocusableElement =
        contentRef.current.querySelector('input, button,li');

      if (firstFocusableElement) {
        firstFocusableElement.focus();
      }
    }
  }, [allOptions]);

  const handleSelectAll = (evt) => {
    if (evt.currentTarget.dataset.selectedAll == 'false') {
      onChange(undefined);
    } else {
      onChange(allOptions);
    }
  };
  const onSearchChangeHandler = (evt) => {
    const { value } = evt.target;
    setSearchValue(value);
  };

  const onClickHandler = (evt, option, isSelected) => {
    if (multiSelectable) {
      if (isSelected) {
        let items = selection.filter((v) => v.id !== option.id);
        onChange(items.length > 0 ? items : undefined, evt);
      } else {
        onChange([...selection, option], evt);
      }
    } else {
      onChange(option, evt);
    }
  };

  const getAriaLabel = () => {
    return conditionState.label
      ? conditionState.label
      : conditionState.property
      ? conditionState.property
      : translateWithId('property');
  };
  if (!allOptions) {
    return <SelectSkeleton />;
  }
  return (
    <div className={`${blockClass}__item-option`} ref={contentRef}>
      {allOptions.length > popOverSearchThreshold && (
        <div className={`${blockClass}__item-option__search`}>
          <Search
            size="sm"
            labelText={translateWithId('clear_search')}
            closeButtonLabelText={translateWithId('clear_search')}
            onChange={onSearchChangeHandler}
          />
        </div>
      )}

      {multiSelectable && (
        <div className={`${blockClass}__multiselectSelectionStatusContainer`}>
          <h4>
            <label>
              {selection.length}/{allOptions.length} Selected
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
        aria-label={getAriaLabel()}
        role="listbox"
        data-multi-select={multiSelectable}
      >
        {filteredItems?.map((option) => {
          const isSelected = selection
            .map((option) => option.id)
            .includes(option.id);
          const Icon = option.icon;

          return (
            <li
              tabIndex={0}
              key={option.id}
              role="option"
              aria-selected={isSelected}
              className={`${blockClass}__item-option__option`}
              onKeyUp={() => {
                return false;
              }}
              onClick={(evt) => onClickHandler(evt, option, isSelected)}
            >
              <div className={`${blockClass}__item-option__option-content`}>
                {multiSelectable ? (
                  <>
                    <span className={`${blockClass}__option-check-box`}>
                      {isSelected ? <CheckboxCheckedFilled /> : <Checkbox />}
                    </span>

                    <span
                      className={`${blockClass}__item-option__option-label`}
                    >
                      {option.label}
                    </span>
                    {Icon && (
                      <span className={`${blockClass}__option-icon`}>
                        <Icon />
                      </span>
                    )}
                  </>
                ) : (
                  <>
                    <span
                      className={`${blockClass}__item-option__option-label`}
                    >
                      {Icon && <Icon />}
                      {option.label}
                    </span>
                    {isSelected && (
                      <Checkmark className={`${blockClass}__checkmark`} />
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

ItemOptionForValueField.propTypes = {
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
