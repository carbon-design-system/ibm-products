import React, { useRef, useState } from 'react';

import { DatePicker, DatePickerInput } from '@carbon/react';

import { pkg } from '../../../../settings';
import PropTypes from 'prop-types';
import { useTranslations } from '../../utils/useTranslations';

const blockClass = `${pkg.prefix}--condition-builder`;

export const ConditionBuilderItemDate = ({ conditionState, onChange }) => {
  const DatePickerInputRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [start_text, end_text] = useTranslations(['start_text', 'end_text']);
  const datePickerType =
    conditionState.operator == 'between' ? 'range' : 'single';

  const onCloseHandler = (evt) => {
    setIsOpen(false);
    onChange(evt);
  };
  const onOpenHandler = () => {
    setIsOpen(true);
  };

  return (
    <div className={`${blockClass}__item-date `} data-open={isOpen}>
      {datePickerType == 'single' && (
        <DatePicker
          ref={DatePickerInputRef}
          dateFormat="d/m/Y"
          datePickerType="single"
          onOpen={onOpenHandler}
          onClose={onCloseHandler}
          value={conditionState.value}
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
          onOpen={onOpenHandler}
          onClose={onCloseHandler}
          value={conditionState.value}
        >
          <DatePickerInput
            id="datePickerStart"
            placeholder="dd/mm/yyyy"
            labelText={start_text}
          />
          <DatePickerInput
            id="datePickerEnd"
            placeholder="dd/mm/yyyy"
            labelText={end_text}
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
