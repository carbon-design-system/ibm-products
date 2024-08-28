/**
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { ForwardedRef, useRef } from 'react';

import { DatePicker, DatePickerInput } from '@carbon/react';

import PropTypes from 'prop-types';
import { useTranslations } from '../../utils/useTranslations';
import { Condition } from '../../ConditionBuilder.types';
import { blockClass } from '../../utils/util';

interface ConditionBuilderItemDate {
  conditionState: Condition;
  onChange: (date: string) => void;
  parentRef: ForwardedRef<HTMLDivElement>;
}
export const ConditionBuilderItemDate = ({
  conditionState,
  onChange,
  parentRef,
}) => {
  const DatePickerInputRef = useRef<HTMLDivElement>(null);
  const [startText, endText] = useTranslations(['startText', 'endText']);
  const datePickerType =
    conditionState.operator == 'between' ? 'range' : 'single';

  const onCloseHandler = (selectedDate) => {
    onChange(
      selectedDate && selectedDate.length > 0 ? selectedDate : 'INVALID'
    );
  };
  return (
    <div className={`${blockClass}__item-date `}>
      {datePickerType == 'single' && (
        <DatePicker
          ref={DatePickerInputRef}
          dateFormat="d/m/Y"
          datePickerType="single"
          value={conditionState.value}
          onClose={onCloseHandler}
          appendTo={parentRef?.current}
        >
          <DatePickerInput
            id="datePicker"
            placeholder="dd/mm/yyyy"
            labelText={conditionState.property}
          />
        </DatePicker>
      )}

      {datePickerType == 'range' && (
        <DatePicker
          ref={DatePickerInputRef}
          dateFormat="d/m/Y"
          datePickerType={datePickerType}
          onClose={onCloseHandler}
          value={conditionState.value}
          appendTo={parentRef?.current}
        >
          <DatePickerInput
            id="datePickerStart"
            placeholder="dd/mm/yyyy"
            labelText={startText}
          />
          <DatePickerInput
            id="datePickerEnd"
            placeholder="dd/mm/yyyy"
            labelText={endText}
          />
        </DatePicker>
      )}
    </div>
  );
};
ConditionBuilderItemDate.propTypes = {
  /**
   * current condition object
   */
  conditionState: PropTypes.object,

  /**
   * callback to update state oin date change
   */
  onChange: PropTypes.func,

  /**
   * reference to the popover node
   */
  parentRef: PropTypes.object,
};
