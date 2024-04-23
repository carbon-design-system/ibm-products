import React, { useRef } from 'react';

import { DatePicker, DatePickerInput } from '@carbon/react';

import { pkg } from '../../../../settings';
import PropTypes from 'prop-types';

const blockClass = `${pkg.prefix}--condition-builder`;

export const ConditionBuilderItemDate = ({ conditionState, onChange }) => {
  const DatePickerInputRef = useRef();

  const datePickerType =
    conditionState.operator == 'between' ? 'range' : 'single';

  return (
    <div className={`${blockClass}__condition-builder-item-date `}>
      {datePickerType == 'single' && (
        <DatePicker
          ref={DatePickerInputRef}
          dateFormat="d/m/Y"
          datePickerType="single"
          onClose={(value) => {
            onChange(value);
          }}
          value={conditionState.value}
        >
          <DatePickerInput
            id="datePicker"
            placeholder="dd/mm/yyyy"
            labelText={conditionState.property?.label}
          />
        </DatePicker>
      )}

      {datePickerType == 'range' && (
        <DatePicker
          ref={DatePickerInputRef}
          dateFormat="d/m/Y"
          datePickerType={datePickerType}
          onClose={(value) => {
            onChange(value);
          }}
          value={conditionState.value}
        >
          <DatePickerInput
            id="datePickerStart"
            placeholder="dd/mm/yyyy"
            labelText={`Start`}
          />
          <DatePickerInput
            id="datePickerEnd"
            placeholder="dd/mm/yyyy"
            labelText={`End`}
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
};
