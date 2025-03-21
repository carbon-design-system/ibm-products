/**
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { ForwardedRef, useEffect, useRef } from 'react';

import { DatePicker, DatePickerInput } from '@carbon/react';

import PropTypes from 'prop-types';
import { useTranslations } from '../../utils/useTranslations';
import { Condition, PropertyConfigDate } from '../../ConditionBuilder.types';
import { blockClass, checkForMultiSelectOperator } from '../../utils/util';

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

  const dateFromState = useRef<Date[] | undefined>([]);

  const dateFormat = config.dateFormat || 'm/d/Y';

  const datePickerType =
    conditionState.operator == 'between' ||
    checkForMultiSelectOperator(conditionState, config)
      ? 'range'
      : 'single';

  useEffect(() => {
    dateFromState.current = getParsedDate(conditionState.value) ?? undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //This method will convert the date string from the condition state to date object based on the dateFormat
  const getParsedDate = (dateToParse: string): Date[] | null => {
    // @ts-ignore
    const calendarInstance = DatePickerInputRef?.current?.calendar;
    if (!calendarInstance || !dateToParse) {
      return null;
    }

    const [startDate, endDate] = dateToParse.split(' - ');
    const parsedDates: Date[] = [];

    if (startDate && startDate !== 'INVALID') {
      parsedDates.push(calendarInstance.parseDate(startDate, dateFormat));
    }
    if (endDate && endDate !== 'INVALID') {
      parsedDates.push(calendarInstance.parseDate(endDate, dateFormat));
    }

    return parsedDates.length ? parsedDates : null;
  };
  const onCloseHandler = (selectedDate, selectedDateStr, instance) => {
    let formattedDate = selectedDateStr;

    if (datePickerType === 'range' && selectedDate.length === 2) {
      formattedDate = `${instance.formatDate(selectedDate[0], dateFormat)} - ${instance.formatDate(selectedDate[1], dateFormat)}`;
    }

    onChange(formattedDate || 'INVALID');
  };

  return (
    <div className={`${blockClass}__item-date `}>
      {datePickerType == 'single' && (
        <DatePicker
          {...config}
          ref={DatePickerInputRef}
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
          {...config}
          ref={DatePickerInputRef}
          datePickerType={datePickerType}
          onClose={onCloseHandler}
          value={dateFromState.current}
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
