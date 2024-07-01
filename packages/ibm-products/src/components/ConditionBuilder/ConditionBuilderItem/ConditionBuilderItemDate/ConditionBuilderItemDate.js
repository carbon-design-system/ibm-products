import React, { useRef } from 'react';

import { DatePicker, DatePickerInput } from '@carbon/react';

import { pkg } from '../../../../settings';
import PropTypes from 'prop-types';
import { useTranslations } from '../../utils/useTranslations';

const blockClass = `${pkg.prefix}--condition-builder`;

export const ConditionBuilderItemDate = ({
  conditionState,
  onChange,
  parentRef,
}) => {
  const DatePickerInputRef = useRef();
  const [startText, endText] = useTranslations(['startText', 'endText']);
  const datePickerType =
    conditionState.operator == 'between' ? 'range' : 'single';

  return (
    <div className={`${blockClass}__item-date `} data-open={'true'}>
      {datePickerType == 'single' && (
        <DatePicker
          ref={DatePickerInputRef}
          dateFormat="d/m/Y"
          datePickerType="single"
          value={conditionState.value}
          onClose={onChange}
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
          onClose={onChange}
          value={conditionState.value}
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
