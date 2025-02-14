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
import { Condition, PropertyConfigDate } from '../../ConditionBuilder.types';
import { blockClass } from '../../utils/util';

interface ConditionBuilderItemDate {
  conditionState: Condition;
  onChange: (date: string) => void;
  parentRef: ForwardedRef<HTMLDivElement>;
  config: PropertyConfigDate;
}
export const ConditionBuilderItemDate = ({
  conditionState,
  onChange,
  parentRef,
  config,
}) => {
  const DatePickerInputRef = useRef<HTMLDivElement>(null);
  const [startText, endText] = useTranslations(['startText', 'endText']);
  const datePickerType =
    conditionState.operator == 'between' ? 'range' : 'single';
  //TO DO: support for range picker in custom operators
  const dateFormat = config.dateFormat || 'Y-m-d';

  const onCloseHandler = (selectedDate, selectedDateStr, instance) => {
    let formattedDate = selectedDateStr;
    if (datePickerType == 'range' && selectedDate.length === 2) {
      formattedDate =
        instance.formatDate(selectedDate[0], dateFormat) +
        ' - ' +
        instance.formatDate(selectedDate[1], dateFormat);
    }

    onChange(formattedDate || 'INVALID');
  };

  return (
    <div className={`${blockClass}__item-date `}>
      {datePickerType == 'single' && (
        <DatePicker
          ref={DatePickerInputRef}
          dateFormat={dateFormat}
          datePickerType="single"
          value={conditionState.value}
          onClose={onCloseHandler}
          appendTo={parentRef?.current}
          locale={config.locale}
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
          dateFormat={dateFormat}
          datePickerType={datePickerType}
          onClose={onCloseHandler}
          value={conditionState.value?.split(' - ')}
          appendTo={parentRef?.current}
          locale={config.locale}
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

  config: PropTypes.object,

  /**
   * callback to update state oin date change
   */
  onChange: PropTypes.func,

  /**
   * reference to the popover node
   */
  parentRef: PropTypes.object,
};
