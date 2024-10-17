/**
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useContext, useEffect, useRef, useState } from 'react';

import { Search } from '@carbon/react';

import { Checkmark } from '@carbon/react/icons';

import PropTypes from 'prop-types';
import { ConditionBuilderContext } from '../../ConditionBuilderContext/ConditionBuilderProvider';
import { useTranslations } from '../../utils/useTranslations';
import { PropertyConfigOption } from '../../ConditionBuilder.types';
import { blockClass } from '../../utils/util';

interface ItemOptionProps {
  conditionState: {
    label?: string;
    value?: string;
  };
  config: PropertyConfigOption['config'] & { isStatement?: boolean };
  onChange: (value: string, e: Event) => void;
}
export const ItemOption = ({
  conditionState = {},
  config = {},
  onChange,
}: ItemOptionProps) => {
  const { popOverSearchThreshold } = useContext(ConditionBuilderContext);
  const contentRef = useRef<HTMLDivElement>(null);
  const [propertyText, clearSearchText] = useTranslations([
    'propertyText',
    'clearSearchText',
  ]);
  const allOptions = config.options;
  const [searchValue, setSearchValue] = useState('');

  const selection = conditionState.value;

  const filteredItems = searchValue
    ? allOptions?.filter((opt) =>
        opt.label?.toLowerCase().includes(searchValue.toLowerCase())
      )
    : allOptions;

  useEffect(() => {
    //this will focus the first input field in the popover

    if (contentRef.current) {
      const firstFocusableElement = contentRef.current?.querySelector(
        'input, button,li'
      ) as HTMLInputElement;

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
    return conditionState.label ? conditionState.label : propertyText;
  };

  const getStatementContent = (option) => {
    return (
      <div className={`${blockClass}__statement_wrapper`}>
        <div>
          {option.text1} ({option.connector})
        </div>
        <div>{option.text2}</div>
      </div>
    );
  };

  const preventDefault = (evt) => evt.preventDefault();

  if (!allOptions) {
    return;
  }
  return (
    <div className={`${blockClass}__item-option`} ref={contentRef}>
      {popOverSearchThreshold && allOptions.length > popOverSearchThreshold && (
        <div className={`${blockClass}__item-option__search`}>
          <Search
            size="sm"
            labelText={clearSearchText}
            closeButtonLabelText={clearSearchText}
            onChange={onSearchChangeHandler}
            onKeyDown={preventDefault}
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
              onClick={(evt) => onClickHandler(evt, option)}
            >
              <div className={`${blockClass}__item-option__option-content`}>
                <span className={`${blockClass}__item-option__option-label`}>
                  {Icon && <Icon />}
                  {config.isStatement
                    ? getStatementContent(option)
                    : option.label}
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
