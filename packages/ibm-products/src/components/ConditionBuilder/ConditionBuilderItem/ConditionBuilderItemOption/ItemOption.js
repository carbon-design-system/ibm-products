import React, { useContext, useEffect, useRef, useState } from 'react';

import { Search } from '@carbon/react';

import { Checkmark } from '@carbon/react/icons';

import PropTypes from 'prop-types';
import { ConditionBuilderContext } from '../../ConditionBuilderContext/ConditionBuilderProvider';
import {
  blockClass,
  translateWithId,
} from '../../ConditionBuilderContext/DataConfigs';

export const ItemOption = ({ conditionState = {}, config = {}, onChange }) => {
  const { popOverSearchThreshold } = useContext(ConditionBuilderContext);
  const contentRef = useRef();

  const allOptions = config.options;
  const [searchValue, setSearchValue] = useState('');

  const selection = conditionState.value;

  const filteredItems = allOptions?.filter((opt) =>
    opt.label.toLowerCase().includes(searchValue.toLowerCase())
  );

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

  const onClickHandler = (evt, option) => {
    onChange(option.id, evt);
  };

  const onSearchChangeHandler = (evt) => {
    const { value } = evt.target;
    setSearchValue(value);
  };

  const getAriaLabel = () => {
    return conditionState.label
      ? conditionState.label
      : conditionState.property
      ? conditionState.property
      : translateWithId('property');
  };

  if (!allOptions) {
    return;
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

      <ul aria-label={getAriaLabel()} role="listbox">
        {filteredItems?.map((option) => {
          const isSelected = selection === option.id;
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
                <span className={`${blockClass}__item-option__option-label`}>
                  {Icon && <Icon />}
                  {option.label}
                </span>
                {isSelected && (
                  <Checkmark className={`${blockClass}__checkmark`} />
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

ItemOption.propTypes = {
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
